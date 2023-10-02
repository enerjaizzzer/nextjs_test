import React from 'react';
import MenuItem from "./menu-item";
import styles from './menu.module.css'

type MenuItem = {
  title: string;
  link: string;
}

interface MenuProps {
  data: MenuItem[]
}

const Menu: React.FC<MenuProps> = ({data}) => {
  return (
    <nav className={styles.menu}>
      {data.map((item) => (
        <MenuItem key={item.link} {...item} />
      ))}
    </nav>
  );
};

export default Menu;