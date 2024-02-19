import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import { useState } from 'react';
import { slice } from "../../redux/store.js"
export default function Menu(){

    const dispatch = useDispatch();
    const number = useSelector(state => state["number"]);
    const clicked = useSelector(state => state["clicked"]);
    //const factors = useSelector(state => state["factors"]);
    var storage = number;

    function handleChange(e){

        dispatch(slice.actions.clearFactors());
        if (e.target.value == ""){
            dispatch(slice.actions.setNumber(null));
        }
        else{
            dispatch(slice.actions.setNumber(e.target.value));
        }
        
        
    }

    function prime_fact(e){
        if (number == null || number == null){
            return
        }
        dispatch(slice.actions.clearFactors());
        dispatch(slice.actions.setBool());
        storage = number;

        while (storage % 2 == 0){
            dispatch(slice.actions.addFactors(2));
            storage /= 2
        }

        for (let i = 3; i <= Math.sqrt(number); i = i + 2){
            while (storage % i == 0){
                dispatch(slice.actions.addFactors(i));
                storage /= i;
            }
        }

        if (storage > 2){
            dispatch(slice.actions.addFactors(storage));
        }
        
        //dispatch(slice.actions.setNumber(storage));
        dispatch(slice.actions.sortFactors());
    }

    return <>
        <div className="menu">
            <input className='numInp' placeholder="Enter number" onChange={handleChange}></input>
            <button className='duckButton' onClick={prime_fact}>Ask the Duck</button>

        </div>

    </>
}