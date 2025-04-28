import { AnchorHTMLAttributes } from "react";
import styles from "./Link.module.css";

const Link = ({ children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return <a className={styles.link} {...rest} >{children}</a>;
};

export default Link;
