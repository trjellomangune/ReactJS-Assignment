// CarForm.js
import React, { useState, useContext } from 'react';
import { TextInput } from "./textInput";
import Box from '@mui/material/Box';
import styles from "./../page.module.css";
import CarFormContext from '../context/CarFormContext'; // Import the context

export function CarForm({ formIndex }) {
    const { forms, updateFormField } = useContext(CarFormContext);
    const formData = forms[formIndex] || {
        brand: '',
        model: '',
        make: '',
        color: '',
        year: '',
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        updateFormField(formIndex, name, value);
    };

    return (
        <Box className={styles.formContainer} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <form style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', width: '100%' }}>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ flex: '1', maxWidth: '100%' }}>
                        <TextInput label="Brand" name="brand" value={formData.brand} onChange={handleChange} />
                    </div>
                    <div style={{ flex: '1', maxWidth: '100%' }}>
                        <TextInput label="Model" name="model" value={formData.model} onChange={handleChange} />
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ flex: '1', maxWidth: '100%' }}>
                        <TextInput label="Make" name="make" value={formData.make} onChange={handleChange} />
                    </div>
                    <div style={{ flex: '1', maxWidth: '100%' }}>
                        <TextInput label="Color" name="color" value={formData.color} onChange={handleChange} />
                    </div>
                    <div style={{ flex: '1', maxWidth: '100%' }}>
                        <TextInput label="Year" name="year" value={formData.year} onChange={handleChange} />
                    </div>
                </div>
            </form>
        </Box>
    );
}
