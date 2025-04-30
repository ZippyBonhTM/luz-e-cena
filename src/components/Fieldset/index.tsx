import styles from './Fieldset.module.css';

interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  variant?: 'primary' | 'secondary';
};

const Fieldset = ({ children, variant = 'primary', ...rest }: FieldsetProps) => {
  return (
    <fieldset className={`${styles.inputWrapper}
      ${variant === 'primary' ? styles.primary : styles.secondary}`}
      {...rest}>
      {children}
    </fieldset>
  );
};

export default Fieldset;
