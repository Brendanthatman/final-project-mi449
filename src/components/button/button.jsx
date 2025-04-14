import styles from './button.module.css';

// Inspiration from spartan-ui-starter button component

const Button = ({
    label,
    variant = "focused",
    onClick,
    
}) => {
    return (
        <button
          className={`${styles.button} ${styles[variant]}`}
          onClick={onClick}
          aria-label={label}
        >
          {label}
        </button>
      );
};

export default Button;