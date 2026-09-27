import React, { useState } from 'react'

export default function App() {

  const[title,setTitle] = useState("")
  const[detail,setDetail] = useState("")

  const[task,setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
// console.log(title);
// console.log(detail);
    const copyTask = [...task];
    copyTask.push({title,detail})
    setTask(copyTask)

    setTitle("")
    setDetail("")
  }


  return (
    <div className='bg-black text-white h-full'>

      <form onSubmit={(e)=>{submitHandler(e)}} 
        className=' h-screen sm:flex p-4 gap-4 '>

        <div className='flex flex-col gap-4 w-full'>
          <input className='p-3 border border-2 rounded'
          type="text" 
          placeholder='Enter Notes Heading'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          />
          <textarea className='p-4 border border-2 rounded h-32' 
          name="" id=""
          placeholder='Enter Details'
          value={detail}
          onChange={(e)=>{
            setDetail(e.target.value)
          }}
          ></textarea>
          <button className='p-1 border border-2 rounded bg-white text-black'>Add Note</button>
        </div>

        <div className='h-full w-full items-start justify-start sm:border-l-2 px-8 flex flex-wrap gap-10 bg-black'>
          {task.map(function(elem,idx){
            return <div key={idx} className='h-50 w-40 rounded-xl text-black p-4 bg-cover bg-[url("https://image.slidesdocs.com/responsive-images/docs/decorative-sticky-notes-with-pushpins-in-simple-label-pattern-page-border-background-word-template_2834b9d0fb__1131_1600.jpg")]'>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 font-medium text-gray-700'>{elem.detail}</p>
            </div>
          })}
        </div>
      </form>
    </div>
  )
}
