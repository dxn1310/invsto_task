import React from 'react';
import './Bottom.css';
import Slider from './Slider';
import iconcheck from '../iconcheck.jpg';
import { useState } from "react";

export default function Bottom(props) {
  const [toggle, setToggle] = useState(false);
  // const findvalue =()=> {
  //   // let a=0;
  //   // a=a+1;
  //   // if(a%2==0)
  //   // sett(true)
  //   // console.log(a);
  //   console.log("hello");
  //   console.log(t);
  // }
  const [val, setVal] = useState(0);
  const bookmarks = {
    0: ["10K PAGEVIEWS", 8],
    2: ["50K PAGEVIEWS", 12],
    4: ["100K PAGEVIEWS", 16],
    6: ["500K PAGEVIEWS", 24],
    8: ["1M PAGEVIEWS", 36]
  }
  return (
    <div className='bottom-outer' style = {props.boxc === "light" ? {backgroundColor: "grey", boxShadow:  "5px 5px 100px black,-5px -5px 100px white"} : {backgroundColor: "white"}}>
      <div className="bottom-container">
            <div className="bottom-child"><div className="lchild" style ={props.boxc === "light" ? {color: "white"} : {color: "hsl(225, 20%, 60%)"}}>{bookmarks[val][0]}</div></div>
            <div className="bottom-child"><div className="rchild">${!toggle ? bookmarks[val][1] : (0.75) * bookmarks[val][1]}<div className='rchild1' style ={props.boxc === "light" ? {color: "white"} : {color: "hsl(225, 20%, 60%)"}}>/ month</div></div></div>
      </div>
      <div>
        <Slider val = {val} setVal = {setVal}/>
      </div>
        
         
            <div className="toggle">
              <label className="name" style ={props.boxc === "light" ? {color: "white"} : {color: "hsl(225, 20%, 60%)"}}>Monthly Billing</label>
              <input type="checkbox" className="checkbox" id="checkbox" onChange={(e) => {setToggle(!toggle)}}/>

              <label for="checkbox" className="label" style = {toggle ? {backgroundColor: "hsl(174, 86%, 45%)"} : {backgroundColor: "hsl(223, 50%, 87%)"}}>
                <div className="ball"></div>
              </label>
              <label className="name" style ={props.boxc === "light" ? {color: "white"} : {color: "hsl(225, 20%, 60%)"}}>
                Yearly Billing &nbsp;
                <span >-25%</span>
              </label>
            </div>
      <div>

      <div className='line-seperation'>
        <hr/>
      </div>
    
      <div className='bottom-last-component'>
        <div className="ul-container">
          <ul style ={props.boxc === "light" ? {color: "white"} : {color: "hsl(225, 20%, 60%)"}}>
            <li><img src={iconcheck} className="ic"/> &nbsp; Unlimited Websites</li>
            <li><img src={iconcheck} className="ic"/> &nbsp; 100% Data Ownership</li>
            <li><img src={iconcheck} className="ic"/> &nbsp; Email reports</li>
          </ul>
        </div>
        <div className='btnbtn'>
          <input type="button" value="Start my trail" className='btn'/>
        </div>
      </div>

      </div>
        
    </div>
  )
}

