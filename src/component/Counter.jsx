import React, { useState,useEffect } from 'react'

export const Counter = () => {

    let [count,setCount] = useState(0);
    let [title,setTitle] = useState(`counter app ${count}`);

    useEffect( () => {
        setTitle(`counter app ${count}` )
    }, [ count ] )
    const increase =()=>{
        // count =count+1;
        setCount(count+1);
        console.log("increase");
    }
    const decrease =()=>{
        // count = count-1;
        setCount(count-1);
        console.log("decrease");
    }
  return (
    <div className="bg-dark text-light p-5 text-center">
            {console.log( "1-Render " )}
            <div className="container">
                <h1 className="text-warning mb-3">{title}</h1>
                <p className="lead ">Count : {count}</p>
                {( count < 0 ) && <p className="alert alert-danger">Count Value Less Than Zero</p>}
                <div>
                    <button onClick={increase} className="btn btn-success mx-3">+</button>
                    <button onClick={decrease} className="btn btn-danger">-</button>
                </div>
                <button onClick={() => setTitle( "New Title" )} className="btn btn-outline-primary mt-4">Change Title</button>
            </div>

        </div>
  )
}
