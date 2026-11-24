import React from 'react'
import "../Gouravi-style/Admin.css";
import { useNavigate } from "react-router-dom";


const Admin = ({onClose = () => {} }) => {
   const navigate = useNavigate();
  return (
    <>
    <div id='parent7' className="md:absolute md:top-[60px] md:right-[20px] md:z-[9999] md:w-[260px] md:rounded-[12px] md:bg-white md:p-[15px] md:shadow-[0_4px_20px_rgba(0,0,0,0.20)]" >

      <button id="admin-close-btn" className="md:absolute md:t-[8px] md:r-[10px] md:border-none md:bg-none md:text-[24px] md:cursor-pointer md:text-[#666] md:ml-[5px]" onClick={onClose}>x</button>

        <div id='parent7-child1' className="md:h-[100px] md:border-[1px] md:border-solid md:border-[#FEF9C2] md:bg-gradient-[#FEFCE8,#FFF7ED] md:rounded-[25px 25px 0px 0px] md:flex md:items-center ">

              <div id='child1-part1' className="md:h-[80px] md:w-[70px] md:flex md:items-center md:justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 40 40" fill="none">
                  <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="url(#paint0_linear_158_408)"/>
                  <path d="M17.112 25C16.8773 25 16.696 24.9413 16.568 24.824C16.4507 24.696 16.392 24.5147 16.392 24.28V14.44C16.392 14.2053 16.4507 14.0293 16.568 13.912C16.696 13.784 16.8773 13.72 17.112 13.72H23.064C23.2453 13.72 23.384 13.768 23.48 13.864C23.576 13.96 23.624 14.0933 23.624 14.264C23.624 14.4453 23.576 14.584 23.48 14.68C23.384 14.776 23.2453 14.824 23.064 14.824H17.672V18.728H22.728C22.9093 18.728 23.048 18.776 23.144 18.872C23.24 18.9573 23.288 19.0907 23.288 19.272C23.288 19.4533 23.24 19.592 23.144 19.688C23.048 19.784 22.9093 19.832 22.728 19.832H17.672V23.896H23.064C23.2453 23.896 23.384 23.944 23.48 24.04C23.576 24.136 23.624 24.2693 23.624 24.44C23.624 24.6213 23.576 24.76 23.48 24.856C23.384 24.952 23.2453 25 23.064 25H17.112Z" fill="white"/>
                  <defs>
                  <linearGradient id="paint0_linear_158_408" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FDC700"/>
                  <stop offset="1" stop-color="#FF6900"/>
                  </linearGradient>
                  </defs>
                 </svg>
              </div>

              <div id='child1-part2' className="md:h-[80px] md:w-[150px] md:items-center">
                <h2 id='child1-part2-h2' className="md:font-['Nunito'] md:font-[400] md:text-[16px] md:font-normal md:text-[#292524] md:flex md:items-center">Admin</h2>
                <p id='child1-part2-p1' className="md:font-['Nunito'] md:font-[400] md:text-[14px] md:font-normal md:text-[#BB4D00] md:flex md:items-center">Owner -Messwala</p>
                <p id='child1-part2-p2' className="md:font-['Nunito'] md:font-[400] md:text-[14px] md:font-normal md:text-[#A6A09B] md:flex ">+91 3763762373</p>
               </div>
        </div>

         <button id='parent7-child2'
          onClick={() => {
            onClose();
            navigate("/my-profile");
          }}
          className="md:h-[49px] md:w-full md:border-[1px] md:border-solid md:border-[#FEF9C2] md:flex md:items-center md:pl-[25px]">

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15" fill="none" id='child2-icon'>
                <g clip-path="url(#clip0_158_423)">
                <path d="M10 13.125V11.875C10 11.212 9.73661 10.5761 9.26777 10.1072C8.79893 9.63839 8.16304 9.375 7.5 9.375H3.75C3.08696 9.375 2.45107 9.63839 1.98223 10.1072C1.51339 10.5761 1.25 11.212 1.25 11.875V13.125" stroke="#FF8904" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 1.955C10.5361 2.09398 11.0109 2.40704 11.3498 2.84504C11.6887 3.28304 11.8726 3.82118 11.8726 4.375C11.8726 4.92882 11.6887 5.46696 11.3498 5.90496C11.0109 6.34296 10.5361 6.65602 10 6.795" stroke="#FF8904" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.75 13.125V11.875C13.7496 11.3211 13.5652 10.783 13.2259 10.3452C12.8865 9.90741 12.4113 9.59473 11.875 9.45625" stroke="#FF8904" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.625 6.875C7.00571 6.875 8.125 5.75571 8.125 4.375C8.125 2.99429 7.00571 1.875 5.625 1.875C4.24429 1.875 3.125 2.99429 3.125 4.375C3.125 5.75571 4.24429 6.875 5.625 6.875Z" stroke="#FF8904" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_158_423">
                <rect width="15" height="15" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              <h2 id='child2-h2' className="md:font-['Nunito'] md:font-[400] md:text-[18px] md:font-normal md:text-[#44403B] md:mt-[10px]  md:flex md:pl-[10px]">My Profile</h2>
         </button>

        <button id='parent7-child3'
        
        className="md:h-[49px] md:w-full md:border-[1px] md:border-solid md:border-[#FEF9C2] md:flex md:items-center md:pl-[25px]">
              
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15" fill="none">
            <g clip-path="url(#clip0_158_444)">
            <path d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z" stroke="#FB2C36" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.375 5.625L5.625 9.375" stroke="#FB2C36" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.625 5.625L9.375 9.375" stroke="#FB2C36" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_158_444">
            <rect width="15" height="15" fill="white"/>
            </clipPath>
            </defs>
            </svg>
           <h2 id='child3-h2' className="md:font-['Nunito'] md:font-[400] md:text-[18px] md:font-normal md:text-[#E7000B] md:flex md:items-center md:pl-[10px] md:pt-[10px]">Logout</h2>

           
        </button>

    </div>
    
    </>
  )
}

export default Admin;