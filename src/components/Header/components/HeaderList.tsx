import React from 'react';
import styles from '../Hearder.module.css';

const HeaderList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={styles.cabecalho}>
      {children}
    </ul>
  );
};

export default HeaderList;
