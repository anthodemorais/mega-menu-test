import React, { useState, useEffect } from 'react';
import defaultMenu from '../Home/defaultValues';
import './style.scss';

interface MenuLevel {
  title: string;
  content: MenuLevel[];
  link?: string;
}

export interface Menu {
  firstLevel: MenuLevel[];
}

interface NewEntryLocation {
  menuItem: number;
  subMenuItem: number;
}

const Settings = () => {

  const [menu, setMenu] = useState<Menu>(defaultMenu);
  const [openedMenu, setOpenedMenu] = useState<number>(-1);
  const [openedSubMenu, setOpenedSubMenu] = useState<number>(-1);
  const [addEntryOpened, setAddEntryOpened] = useState<boolean>(false);
  const [newEntryLocation, setNewEntryLocation] = useState<NewEntryLocation>({ menuItem: -1, subMenuItem: -1 });
  const [newEntryName, setNewEntryName] = useState<string>('');
  const [newEntryLink, setNewEntryLink] = useState<string>('');

  useEffect(() => {
    const savedMenu = localStorage.getItem('menu');
    if (savedMenu) {
      let parsedSavedMenu = JSON.parse(savedMenu) as Menu;
      setMenu(parsedSavedMenu);
    }
  }, [])

  useEffect(() => {
    setOpenedSubMenu(-1);
  }, [openedMenu])

  const saveMenu = (menu: Menu) => {
    localStorage.setItem('menu', JSON.stringify(menu))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newMenu = { ...menu }
    if (newEntryLocation.menuItem !== -1) {
      if (newEntryLocation.subMenuItem !== -1) {
        newMenu.firstLevel[newEntryLocation.menuItem].content[newEntryLocation.subMenuItem].content.push({
          title: newEntryName,
          link: newEntryLink,
          content: []
        })
      }
      else {
        newMenu.firstLevel[newEntryLocation.menuItem].content.push({
          title: newEntryName,
          link: newEntryLink !== '' ? newEntryLink : undefined,
          content: []
        })
      }
    }
    else {
      newMenu.firstLevel.push({
        title: newEntryName,
        link: newEntryLink !== '' ? newEntryLink : undefined,
        content: []
      })
    }
    setMenu(newMenu)
    saveMenu(newMenu)
  }

  const handleAddClick = (menuItem: number, subMenuItem: number) => {
    setAddEntryOpened(true);
    setNewEntryLocation({menuItem, subMenuItem});
    setNewEntryName('');
    setNewEntryLink('');
  }

  const onEntryNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNewEntryName(e.currentTarget.value)
  }

  const onEntryLinkChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNewEntryLink(e.currentTarget.value)
  }

  return (
    <div className="settings">
      <h3>Configure Navigation</h3>
      {addEntryOpened && (
        <form onSubmit={handleSubmit}>
          <strong>Add entry</strong>
          <label htmlFor="add">Entry name * :</label>
          <input type="text" name="add" value={newEntryName} onChange={onEntryNameChange} required />
          <label htmlFor="link">Entry link (optional) :</label>
          <input type="text" name="link" value={newEntryLink} onChange={onEntryLinkChange} />
          <button type="submit">Add</button>
        </form>
      )}
      <ul className="menu-tree">
        {menu.firstLevel.map((item, index) => (
          <li key={index} onClick={() => setOpenedMenu(index)}>
            {item.title}
            {openedMenu === index && (
              <ul>
              {item.content.map((subItem, subIndex) => (
                <li key={`2-${subIndex}`} onClick={() => setOpenedSubMenu(subIndex)}>
                  {subItem.title}
                  {openedSubMenu === subIndex && (
                    <ul>
                      {subItem.content.map((subItemContent, subItemIndex) => (
                        <li key={`3-${subItemIndex}`}><a href={subItemContent.link}>{subItemContent.title}</a></li>
                      ))}
                      <button onClick={() => handleAddClick(index, subIndex)}>+</button>
                    </ul>
                  )}
                </li>
              ))}
              <button onClick={() => handleAddClick(index, -1)}>+</button>
              </ul>
            )}
          </li>
        ))}
        <button onClick={() => handleAddClick(-1, -1)}>+</button>
      </ul>
    </div>
  );
}

export default Settings;