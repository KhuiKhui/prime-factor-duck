import './index.css'

import duck_png from '../../images/duck_png.png'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { slice } from "../../redux/store.js"

export default function Duck(){
    const dispatch = useDispatch();
    const factors = useSelector(state => state["factors"])
    const number = useSelector(state => state["number"])
    const dialogue = useSelector(state => state["dialogue"])
    useEffect(() => {
        dispatch(slice.actions.chooseDia());
    }, [number])
    

    console.log(factors)
    return <>
    <div className='duck'>
        <img src={duck_png} alt='Logo'/>
        
    </div>
    <div className='prophecy'>{dialogue}</div>

    <div className='prophecy'>{number != null ? `The prime factors of ${number} is: ${factors.join(' . ')}` : ``}</div>

    </>
}