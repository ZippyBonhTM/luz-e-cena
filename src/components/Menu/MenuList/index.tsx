import React from 'react';
import styles from './MenuList.module.css'

const MenuList = ({ children, ...rest }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav>
      <ul className={styles.navegacao} {...rest}>
        {children}
      </ul>
    </nav>
  );
};

export default MenuList;
