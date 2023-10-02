import React from 'react';
import styles from './menu-item.module.css'
import Link from "next/link";

interface MenuItemProps {
  title: string;
  link: string;
}

const MenuItem: React.FC<MenuItemProps> = ({title, link}) => {
  return (
    <Link className={styles.menuItem} href={link}>
      {title}
    </Link>
  );
};

export default MenuItem;