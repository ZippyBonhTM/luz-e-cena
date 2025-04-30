import styles from '../Hearder.module.css';

const HeaderListItem = ({ children }: React.LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={styles.menuitem}>
      {children}
    </li>
  );
};

export default HeaderListItem;
