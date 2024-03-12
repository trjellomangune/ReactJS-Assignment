import { createContext } from 'react';

const CarFormContext = createContext({
    forms: [],
    addForm: () => {},
    updateFormField: () => {},
});

export default CarFormContext;