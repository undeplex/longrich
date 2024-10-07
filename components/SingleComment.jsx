import React from 'react'

export default function SingleComment({comment,nameCommentor,dateOfComement,image}) {
  return (
    <div>
          <div className="bg-white max-w-[400px] mx-auto shadow-sm p-3 rounded-xl  ring-2 ring-opacity-30 ring-gray-200">
          <div className="flex items-center gap-2 font-bold text-gray-600">
                    {/* <img className="rounded-full object-cover  size-[43px] mt-3" src="/img/f.jpg" /> */}
                    {image}
                    <div >

                    <span className="text-black play "> {nameCommentor} </span>
                    <span className="text-sm font-normal block underline">{dateOfComement}</span>
                    </div>

                  
                    </div>
                <div className="mt-3 text-gray-500">
                  <p className="text-sm">

                    {comment}
                  </p>

                   
                </div>
                
            </div>
    </div>
  )
}
