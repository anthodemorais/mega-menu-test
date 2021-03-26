import React from 'react';
import { ReactMegaMenu } from 'react-mega-menu';
import { IMenuData } from '../index';
import './style.scss'

interface IMenuSectionProps {
  data: IMenuData[]
}

const MenuSection: React.FC<IMenuSectionProps> = ({ data }) => {

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