"use client";
import React, { useState } from 'react';
import styles from "./page.module.css";
import CarFormContext from './context/CarFormContext'; 
import { CarForm } from "./components/carForm";
import { ButtonComponent } from "./components/button";
import { Modal } from "./components/modal"; 
import Box from '@mui/material/Box';

export default function CarPage() {
    const [forms, setForms] = useState([]); 
    const [allFormData, setAllFormData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const addForm = () => {
        setForms([...forms, { brand: '', model: '', make: '', color: '', year: '' }]);
    };

    const updateFormField = (formIndex, fieldName, fieldValue) => {
        setForms(
            forms.map((form, index) => (index === formIndex ? { ...form, [fieldName]: fieldValue } : form))
        );

        setAllFormData(forms.slice());
    };

    // const viewFormData = () => console.log(allFormData);
    
    return (
        <CarFormContext.Provider value={{ forms, addForm, updateFormField }}>
            <>
                <section className={styles.formSection}>
                    <Box className={styles.buttonContainer} display="flex" justifyContent="flex-end" alignItems="center">
                        <ButtonComponent label="Add Form" onClick={addForm} />
                        {/* <ButtonComponent label="View Data" onClick={viewFormData} /> */}
                    </Box>
                    {forms.map((form, index) => (
                        <CarForm key={index} formIndex={index} />
                    ))}
                    <Box className={styles.submitContainer} display="flex" justifyContent="center" alignItems="center">
                        <ButtonComponent label="Submit" onClick={() => setModalOpen(true)} /> 
                    </Box>
                </section>
                <Modal open={modalOpen} onClose={() => setModalOpen(false)} formData={allFormData} label="Car List"/>
            </>
        </CarFormContext.Provider>
    );
}
