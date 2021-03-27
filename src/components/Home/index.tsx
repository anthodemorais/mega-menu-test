import React, { useEffect, useState } from 'react';
import { ReactMegaMenu } from 'react-mega-menu';
import MenuSection from './MenuSection';
import { Menu } from '../Settings';
import defaultMenu from './defaultValues';
import './style.scss'

export interface MenuData {
  label: string;            // label to be shown on for each menuItem
  key: string | number;     // a key id
  items: React.ReactNode;   // a react node to be presented as content
}

const Home = () => {

  const [data, setData] = useState<MenuData[]>([])

  // const menuData: MenuData[] = [
  //   { label: "SubMenuItem1", key: 1, items: <ul><li>1</li><li>2</li><li>3</li></ul> },
  //   { label: "SubMenuItem2", key: 2, items: <ul><li>1</li><li>2</li><li>3</li></ul> },
  //   { label: "SubMenuItem3", key: 3, items: <ul><li>1</li><li>2</li><li>3</li></ul> },
  // ]

  // const data: MenuData[] = [
  //   { label: "MenuItem1", key: 1, items: <MenuSection data={menuData} /> },
  //   { label: "MenuItem2", key: 2, items: <MenuSection data={menuData} /> },
  //   { label: "MenuItem3", key: 3, items: <MenuSection data={menuData} /> },
  // ]

  useEffect(() => {
    parseSavedMenu();
  }, [])

  const parseSavedMenu = () => {
    const savedMenu = localStorage.getItem('menu');
    if (savedMenu) {
      const menu = JSON.parse(savedMenu) as Menu;
      menuToData(menu);
    }
    else {
      menuToData(defaultMenu);
    }
  }

  const menuToData = (menu: Menu) => {
    const data: MenuData[] = menu.firstLevel.map((section, index) => {
      const menuData = section.content.map((subSection, subIndex) => {
        return {
          label: subSection.title,
          key: subIndex,
          items: (
            <ul>
              {subSection.content.map((subSectionContent, subSectionIndex) => (
                <li key={subSectionIndex}>
                  <a href={subSectionContent.link}>{subSectionContent.title}</a>
                </li>
              ))}
            </ul>
          )
        }
      })
      return {
        label: section.title,
        key: index,
        items: <MenuSection data={menuData} />
      }
    })
    setData(data)
  }

  return (
    <div className="home">
      <ReactMegaMenu 
        direction={"RIGHT"}
        data={data}
        styleConfig={{
          containerProps: { className: "home-menu-container" },
          contentProps: { className: "menu-content" },
          menuItemSelectedProps: { className: "selected-item" }
        }}
      />
    </div>
  );
}

export default Home;