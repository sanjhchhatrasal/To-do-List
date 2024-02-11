"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMaintask] = useState([])

  const submitHandeler = (e) =>{
      e.preventDefault()
      setMaintask([...maintask, { title, desc }])
      setTitle("")
      setDesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...maintask]
    copyTask.splice(i,1)
    setMaintask(copyTask)
  }

  let renderTask = <h1 className="text-xl font-semibold ">No Task Available</h1>

  if(maintask.length>0){
    renderTask = maintask.map((t, i) => {
      return(
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between  w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button
          onClick={()=>{
            deleteHandler(i)
          }}
           className="bg-red-100 text-white px-4 py-2 rounded font-bold">❌</button>
        </li>
      )
    })
  }
 

  return (
    <>
      <h1 className="bg-blue-200 text-center font-extrabold text-blue-900 p-5 text-4xl m-5">
        Sanjh's Todo List
      </h1>
      <form onSubmit={submitHandeler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 px-4 py-2 m-5 ml-40"
          placeholder="Enter Task Here"
          value={title}
          onChange={(e)=>{
           setTitle( e.target.value)
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 px-4 py-2 m-5"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e)=>{
            setDesc(e.target.value)
          }}
        />
        <button className="bg-blue-200 text-blue-900 px-4 py-3 text-2xl font-bold rounded m-5 ml-20">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-10 mt-5 bg-slate-100 text-gray-950 ">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
