import TextField from '@mui/material/TextField';

export function TextInput({ label, name, value, onChange }) {
    return (
      <div style={{ flex: '1', maxWidth: '100%' }}>
        <TextField
          fullWidth
          label={label}
          variant="outlined"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }