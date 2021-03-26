import React from 'react';
import { ReactMegaMenu } from 'react-mega-menu';
import MenuSection from './MenuSection';
import './style.scss'

export interface IMenuData {
  label: string;            // label to be shown on for each menuItem
  key: string | number;     // a key id
  items: React.ReactNode;   // a react node to be presented as content
}

const Home = () => {
  const menuData: IMenuData[] = [
    { label: "SubMenuItem1", key: 1, items: <div>1</div> },
    { label: "SubMenuItem2", key: 2, items: <div>2</div> },
    { label: "SubMenuItem3", key: 3, items: <div>3</div> },
  ]

  const data: IMenuData[] = [
    { label: "MenuItem1", key: 1, items: <MenuSection data={menuData} /> },
    { label: "MenuItem2", key: 2, items: <MenuSection data={menuData} /> },
    { label: "MenuItem3", key: 3, items: <MenuSection data={menuData} /> },
  ]

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