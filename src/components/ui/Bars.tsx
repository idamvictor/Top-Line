import React from "react";

const Bars = ({handleClick, check} : any) => {
  return (
    <label className='container' >
      <input type='checkbox' onChange={()=>handleClick()} checked={check} />
      <div className='checkmark'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </label>
  );
};

export default Bars;
