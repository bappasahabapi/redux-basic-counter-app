// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../counterFeature/actions";


const CounterFeature = () => {

  const value =useSelector((state)=> state.value);
  const dispatch =useDispatch();

    const  incrementHandler=()=>{
        dispatch(increment())
       } 
    const  decrentHandler=()=>{
        dispatch(decrement())
       } 
    const  resetHandler=()=>{
        dispatch(reset())
       } 
    return (
        <>
       
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            {/* <!-- header --> */}
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            {/* <!-- counters --> */}
            <div className="max-w-md mx-auto mt-10 space-y-5">
                <div
                    className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <div className="text-2xl font-semibold">{value}</div>
                    <div className="flex space-x-3">
                        <button
                            onClick={incrementHandler}
                            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        >
                            Increment
                        </button>
                        <button
                            onClick={decrentHandler}
                            className="bg-red-400 text-white px-3 py-2 rounded shadow"
                        >
                            Decrement
                        </button>
                        <button
                            onClick={resetHandler}
                            className="bg-pink-400 text-white px-3 py-2 rounded shadow"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    
      )
}

export default CounterFeature;