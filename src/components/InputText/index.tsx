import styles from './InputText.module.css';

const InputText = ({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className={styles.input} {...rest} />
  );
};

export default InputText;
