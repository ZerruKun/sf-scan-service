import React, {useState} from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ruLocale from "date-fns/locale/ru";

const DatePick = () => {
    const [tempDate, setTempDate] = useState();
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
            <Stack spacing={4} sx={{width: "176px"}}>
                <DatePicker 
                    label="Выберите дату" 
                    renderInput={(params) => <TextField {...params} />}
                    value={tempDate} 
                    minDate={new Date("2022-01-01")} 
                    disableFuture={true} 
                    onChange={(newVaue) => {
                        setTempDate(newVaue);
                    }}
                />
            </Stack>
        </LocalizationProvider>
    )
}

export default DatePick