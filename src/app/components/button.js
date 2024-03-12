import Button from '@mui/material/Button';
import styles from "./../page.module.css";
    
export function ButtonComponent({ label, onClick }) {
    return (
      <Button variant="contained" color="primary" size="large" onClick={onClick}>
        {label}
      </Button>
    );
  }