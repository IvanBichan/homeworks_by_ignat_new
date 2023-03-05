import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    console.log(props)
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                margin: '0 10px',
                color: "#01CB22",
                width: '300px',
                height: 3,
                padding: '10px 0',
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
                    },
                    '& .airbnb-bar': {
                        height: 9,
                        width: 1,
                        backgroundColor: 'currentColor',
                        marginLeft: 1,
                        marginRight: 1,
                    },
                },
                '& .MuiSlider-track': {
                    height: 3,
                },
                '& .MuiSlider-thumb:after': {
                    width:'5px',
                    height:'5px',
                    top: '50%',
                    left: '50%',
                    backgroundColor:'#01CB22',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
