import React from 'react'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
    
    <div className="w-full cen content-center items-center ce justify-center place-items-center place-content-center object-center justify-items-center relative zoom-in-100 bor-[0px] bg-slate-950 text-white pt-5 lg:pb-3 md:pb-5 pb-5 px-4 ">
      <div className="max-w-4xl mx-auto">

        <div className="grid text-center  grid-cols-1 sm:grid-cols-2 md:grid-cols- gap-4 lg:grid-cols-3">
          <div className="st text-left">

                
                <div className="text-center text-gray-300">+243 9905532897</div>
                <div className="text-center text-gray-300">Caleb@longrichstore.com</div>
                <div className="text-center text-gray-300">Longrichstore@info.mail </div>
                <div className="text-center">Connect with us :</div>
                <div className="flex gap-5 sm:gap-4 my-3 w-max mx-auto ">
                        
                        <svg className="fill-white sm:w-5 w-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        
                        <svg className="fill-white sm:w-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>                      
                              <svg className="fill-white sm:w-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
                        <svg className="fill-white sm:w-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>   
                              <svg className="fill-white sm:w-5 w-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                </div>
               
                
          </div>
          <div>
            <ul className="sm:text-left">
              <li className="list-none text-gray-200 bo fon-bold">Liens Rapides</li>
              <Link href="/">
                <li className="list-none text-gray-500">Acceuil</li>
              </Link>
              <Link href="/products">
                <li className="list-none text-gray-500">Catalogue</li>
              </Link>
              <Link href="/">
                <li className="list-none text-gray-500">Apropos de Nous</li>
              </Link>
             
            </ul>
          </div>
          <div>
            <ul className="sm:text-left">
              <li className="list-none text-gray-500 underline">Condition general de vente</li>
              <li className="list-none text-gray-500 underline">Guarentie de retour</li>
            </ul>
          </div>
          <div></div>

          <div className="">
          <div className="text-center text-slate-300">
          <div className="flex items-center w-max gap-1 mx-auto">
                <img src="/longdark.png" width="160px" className=" my-2 " />
                <span className="text-white text-[12px]">store</span> By Caleb
          </div>
                </div>
                
          </div>
       
        </div>
      </div>
      <div className="text-center text-gray-400 mt-9 ">
      All right reserved Longrichstore 2024. 

      </div>
      <div className="mx-auto w-max -10 mt-2 mb-6 gap-2 items-center flex sm:mb-9">
        Cooked with ❤ By <img src="/doic.svg" className="w-[73px] invert"/> Dev
      </div>
      
    </div>
    </>
  )
}
