import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Controller} from 'react-hook-form'
import dayjs from 'dayjs';

export default function MyDatePickerFeild(props) {
  const {label, control, width,name} = props
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        
        <Controller
        name = {name}
        control = {control}
        render= {({
            field:{onChange, value}, 
            fieldState:{error}, 
            formState,
        }) => (

            <DatePicker 
                    label={label}  
                    sx={{width:{width}}} 
                    onChange={onChange}
                    value={value ? dayjs(value) : null}
                    slotProps={{
                        textField:{
                          error: !!error, 
                          helperText: error?.message,
                        }

                    }}  
                    />
        )
        }
        />

    </LocalizationProvider>
  );
}