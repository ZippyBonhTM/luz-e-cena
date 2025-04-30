import styles from '../Hearder.module.css';

const HeaderListItem = ({ children }: React.LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={styles.monuitem}>
      {children}
    </li>
  );
};

export default HeaderListItem;
