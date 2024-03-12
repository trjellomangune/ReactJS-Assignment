import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent } from '@mui/material';
import Box from '@mui/material/Box';

export function Modal({ label, open, onClose, formData }) {
    return (
        <Dialog open={open} onClose={onClose} maxWidth>
            <DialogTitle sx={{textAlign: 'center'}}>{label}</DialogTitle>
            <DialogContent>
                <Box>
                    {formData.map((data, index) => (
                        <div key={index}>
                            <p>Brand: {data.brand}</p>
                            <p>Model: {data.model}</p>  
                            <p>Make: {data.make}</p>
                            <p>Color: {data.make}</p>
                            <p>Year: {data.year}</p>
                            {index !== formData.length - 1 && <hr />}
                        </div>
                    ))}
                </Box>
            </DialogContent>
        </Dialog>
    );
}