import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { useState } from "react";
import { slice } from "../../redux/store.js";
export default function Menu() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state["number"]);
  const clicked = useSelector((state) => state["clicked"]);

  const regex = /\D/;
  var storage = number;

  function handleChange(e) {
    e.target.value = e.target.value.replace(regex, "");
    dispatch(slice.actions.setBool(false));
    dispatch(slice.actions.clearFactors());
    if (e.target.value == "") {
      dispatch(slice.actions.setNumber(null));
    } else {
      dispatch(slice.actions.setNumber(e.target.value));
    }
  }

  function prime_fact(e) {
    if (number == null || number == null) {
      return;
    }
    dispatch(slice.actions.setBool(true));
    if (number <= 1) {
      dispatch(slice.actions.clearFactors());
      dispatch(slice.actions.addFactors("None"));
      return;
    }

    dispatch(slice.actions.clearFactors());

    storage = number;

    while (storage % 2 == 0) {
      dispatch(slice.actions.addFactors(2));
      storage /= 2;
    }

    for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
      while (storage % i == 0) {
        dispatch(slice.actions.addFactors(i));
        storage /= i;
      }
    }

    if (storage > 2) {
      dispatch(slice.actions.addFactors(storage));
    }
  }

  return (
    <>
      <div className="menu">
        <input
          className="numInp"
          placeholder="Enter number"
          onChange={handleChange}
        ></input>
        <br></br>
        <div className="desc">
          This is Primordial Facto the Omnipotent Waterfowl.
        </div>
        <div className="desc">Referred by many as Sir P.Facto.</div>
        <div className="desc">
          Enter a natural, non-negative number, and He will bless you with its
          prime factors.
        </div>

        <button className="duckButton" onClick={prime_fact}>
          Ask Sir P.Facto
        </button>
      </div>
      <div className="credit">Made by Khuat Dang Khoi</div>
    </>
  );
}
