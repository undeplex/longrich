import React from 'react'

export default function SingleStuff({first,second,last}) {
  return (
    <div className="relative p-4 sm:mx-2 lg:mx-3 max-w-[280px] mx-auto  bg-white  rounded-2xl ">
      <span className="">{last}</span>
      <span className="my-2 text-lg">{first}</span>
      <span className="text-gray-500 text-sm">{second}</span>
      <span className="absolute -top-4 left-1/2 size-8 rounded-full -translate-x-1/2 bg-gray-50"></span>
    </div>
  )
}
