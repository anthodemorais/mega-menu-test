import React from 'react';
import { ReactMegaMenu } from 'react-mega-menu';
import { MenuData } from '../index';
import './style.scss'

interface MenuSectionProps {
  data: MenuData[]
}

const MenuSection: React.FC<MenuSectionProps> = ({ data }) => {

  return (
    <div className="menu-section">
      <ReactMegaMenu
        data={data}
        direction={"RIGHT"}
        styleConfig={{
          containerProps: { className: "menu-container" },
          contentProps: { className: "menu-content" },
          menuItemSelectedProps: { className: "selected-item" }
        }}
      />
    </div>
  );
}

export default MenuSection;