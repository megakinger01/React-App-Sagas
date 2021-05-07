import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import { useStyle } from "../../hooks/useStyle";

export const SelectForm = () => {

    const style = useStyle()
    const [dni, setDni] = useState('')
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setDni(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <div>
            <FormControl required className={style.formControl}>
                <InputLabel id="demo-controlled-open-select-label">DNI</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"

                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={dni}
                    onChange={handleChange}
                >

                    <MenuItem value={10}>Dni1</MenuItem>
                    <MenuItem value={20}>Dni2</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}




