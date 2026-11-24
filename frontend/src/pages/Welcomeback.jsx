import React, { useState} from 'react'
import '../Gouravi-style/mess.css'
import {Link} from 'react-router-dom'

const Welcomeback = () => {

    const[formData, setFormData]= useState({
        email:"",
        password:"",

    })

    const handleChange=(e) =>{
        const { name,value} = e.target;

        setFormData({
            ...formData,[name]:value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        localStorage.setItem(
            "registerData",JSON.stringify(formData)
        );

        
    }

  return (
    <>
    <div id="parent1" className="md:h-[100vh] md:w-full md:border-[1px] md:border-solid md:border-[goldenrod] md:flex">

        <div id="child1-1" className="md:h-[100vh] md:w-[40%] md:min-w-0 md:shrink-0 md:bg-linear-to-r md:from-[#FDC700] md:to-[#FF6900] md:justify-center ">
            <div id="child1-1-part1" className="md:w-[350px] md:h-[270px] md:mt-[50px] md:ml-[45px]">
                <div id="part1-box1" className="md:h-[65px] md:w-full md:flex md:items-center md:justify-center">

                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 59 59" fill="none">
                    <path d="M0 10C0 4.47715 4.47715 0 10 0H49C54.5228 0 59 4.47715 59 10V49C59 54.5228 54.5228 59 49 59H10C4.47715 59 0 54.5228 0 49V10Z" fill="url(#paint0_linear_154_260)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.42 14.8203C13.6285 13.5918 14.701 12.7383 15.928 12.7383H16.147C16.1977 12.7382 16.2479 12.7484 16.2946 12.7684C16.3412 12.7883 16.3834 12.8174 16.4184 12.8541C16.4535 12.8908 16.4807 12.9342 16.4985 12.9817C16.5163 13.0292 16.5243 13.0798 16.522 13.1305L16.1882 20.458C16.1826 20.581 16.2014 20.7039 16.2433 20.8197C16.2852 20.9355 16.3496 21.0419 16.4326 21.1328C16.5157 21.2237 16.6158 21.2974 16.7273 21.3496C16.8389 21.4018 16.9596 21.4316 17.0826 21.4371C17.2056 21.4427 17.3285 21.424 17.4443 21.382C17.5601 21.3401 17.6665 21.2758 17.7574 21.1927C17.8483 21.1097 17.922 21.0095 17.9742 20.898C18.0264 20.7865 18.0561 20.6658 18.0617 20.5428L18.4 13.0968C18.4042 13.0002 18.4456 12.909 18.5155 12.8422C18.5853 12.7754 18.6783 12.7382 18.775 12.7383H20.725C20.8216 12.7382 20.9146 12.7754 20.9845 12.8422C21.0543 12.909 21.0957 13.0002 21.1 13.0968L21.4382 20.5428C21.4496 20.7912 21.5591 21.025 21.7428 21.1926C21.9265 21.3603 22.1693 21.4481 22.4177 21.4368C22.6662 21.4254 22.8999 21.3158 23.0676 21.1322C23.2352 20.9485 23.3231 20.7057 23.3117 20.4573L22.9787 13.1305C22.9764 13.0798 22.9844 13.0292 23.0021 12.9817C23.0199 12.9342 23.0472 12.8908 23.0823 12.8541C23.1173 12.8174 23.1594 12.7883 23.2061 12.7684C23.2528 12.7484 23.303 12.7382 23.3537 12.7383H23.5712C24.7982 12.7383 25.8707 13.591 26.0792 14.8195C26.4265 16.87 26.9125 20.455 26.8735 24.289C26.8517 26.419 25.426 28.3338 23.1887 28.8348C22.8617 28.9088 22.5197 28.9753 22.1627 29.0343L23.5442 42.1923C23.7512 44.1633 22.5242 46.144 20.4812 46.4282C20.2392 46.4653 19.9948 46.4853 19.75 46.4883C19.5054 46.4853 19.2613 46.4652 19.0195 46.4282C16.9765 46.1432 15.7495 44.1633 15.9565 42.1923L17.338 29.035C16.9944 28.9784 16.6525 28.9119 16.3127 28.8355C14.0747 28.3345 12.649 26.4198 12.6272 24.2898C12.5882 20.4557 13.0735 16.8708 13.42 14.8203ZM44.5 13.375C35.5945 13.375 28.375 20.5945 28.375 29.5C28.375 38.4055 35.5945 45.625 44.5 45.625C44.7983 45.625 45.0845 45.5065 45.2955 45.2955C45.5064 45.0845 45.625 44.7984 45.625 44.5V39.5635C45.2513 39.6041 44.8758 39.6246 44.5 39.625C38.908 39.625 34.375 35.092 34.375 29.5C34.375 23.908 38.908 19.375 44.5 19.375C44.8805 19.375 45.2555 19.3955 45.625 19.4365V14.5C45.625 14.2016 45.5064 13.9155 45.2955 13.7045C45.0845 13.4935 44.7983 13.375 44.5 13.375ZM44.5 37.375C44.8825 37.375 45.2575 37.3485 45.625 37.2955V21.7045C45.2522 21.6524 44.8763 21.6258 44.5 21.625C40.1507 21.625 36.625 25.1508 36.625 29.5C36.625 33.8493 40.1507 37.375 44.5 37.375Z" fill="black"/>
                    <defs>
                    <linearGradient id="paint0_linear_154_260" x1="0" y1="0" x2="59" y2="59" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FDC700"/>
                    <stop offset="1" stop-color="#FF6900"/>
                    </linearGradient>
                    </defs>
                    </svg>

                </div>

                <div id="part1-box2" className="md:h-[85px] md:w-full md:flex md:ml-0 md:flex md:items-center md:justify-baseline md:flex"> <h2 id="part1-box2-h2" className="md:text-[32px] md:text-[#FFFFFF] md:font-['Nunito'] md:font-[400] md:font-normal">MessWala Admin Panel</h2></div>

                <div id="part1-box3" className="md:h-[110px] md:w-full md:flex md:items-center">
                    <p id="part1-box3-p" className="md:m-0 md:font-[400] md:font-['Nunito'] md:text-[#FFFFFF] md:font-[18px] md:text-left">Complete mess management — customers, meals, coupons, subscriptions, payments and reports in one place.</p>
                </div>
            </div>

            <div id="child1-1-part2" className="md:w-[350px] md:h-[120px] md:mt-[25px] md:ml-[45px]">
               <div id="part2-box1" className="md:h-[50%] md:w-full md:flex md:items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M0 10C0 4.47715 4.47715 0 10 0H18C23.5228 0 28 4.47715 28 10V18C28 23.5228 23.5228 28 18 28H10C4.47715 28 0 23.5228 0 18V10Z" fill="white" fill-opacity="0.2"/>
                <path d="M16.3332 19.25V18.0833C16.3332 17.4645 16.0873 16.871 15.6498 16.4334C15.2122 15.9958 14.6187 15.75 13.9998 15.75H10.4998C9.881 15.75 9.28751 15.9958 8.84992 16.4334C8.41234 16.871 8.1665 17.4645 8.1665 18.0833V19.25" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.3335 8.82467C16.8339 8.95438 17.277 9.24657 17.5933 9.65537C17.9096 10.0642 18.0813 10.5664 18.0813 11.0833C18.0813 11.6002 17.9096 12.1025 17.5933 12.5113C17.277 12.9201 16.8339 13.2123 16.3335 13.342" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.8335 19.25V18.0833C19.8331 17.5663 19.661 17.0641 19.3443 16.6555C19.0275 16.2469 18.5841 15.9551 18.0835 15.8258" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.2498 13.4167C13.5385 13.4167 14.5832 12.372 14.5832 11.0833C14.5832 9.79467 13.5385 8.75 12.2498 8.75C10.9612 8.75 9.9165 9.79467 9.9165 11.0833C9.9165 12.372 10.9612 13.4167 12.2498 13.4167Z" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 id="part2-box1-h2" className="md:text-[18px] md:text-[#FFFFFF] md:font-['Nunito'] md:pt-[15px] md:pl-[10px] md:font-[400] md:flex">Manage all customers & subscriptions</h2> 
               </div>

               <div id="part2-box2" className="md:h-[50%] md:w-full md:flex md:items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M0 10C0 4.47715 4.47715 0 10 0H18C23.5228 0 28 4.47715 28 10V18C28 23.5228 23.5228 28 18 28H10C4.47715 28 0 23.5228 0 18V10Z" fill="white" fill-opacity="0.2"/>
                <path d="M8.75 8.16667V12.25C8.75 12.8917 9.275 13.4167 9.91667 13.4167H12.25C12.5594 13.4167 12.8562 13.2937 13.075 13.075C13.2937 12.8562 13.4167 12.5594 13.4167 12.25V8.16667" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.0835 8.16667V19.8333" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.2502 15.75V8.16667C18.4766 8.16667 17.7347 8.47396 17.1878 9.02094C16.6408 9.56792 16.3335 10.3098 16.3335 11.0833V14.5833C16.3335 15.225 16.8585 15.75 17.5002 15.75H19.2502ZM19.2502 15.75V19.8333" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 id="part2-box2-h2" className="md:text-[18px] md:text-[#FFFFFF] md:font-['Nunito'] md:pt-[15px] md:pl-[10px] md:font-[400] md:flex">Track daily meal attendence</h2>
                </div> 

            </div>
        </div>


        
        <div id="child1-2" className="md:h-[100vh] md:w-[60%] md:bg-[#FFFBF0]  md:flex md:justify-center md:items-center">

            <div id='child1-2-part1' className="md:h-[600px]  md:w-[600px]">
                
              <form onSubmit={handleSubmit}>

               <div id="child1-2-part1-box1" className="md:h-auto md:w-full md:mt-[25px]">
                <h2 id="part1-box1-part1" className="md:h-[40px] md:w-full md:m-0 md:p-0 md:text-[#292524] md:font-[400] md:font-normal md:font-['Nunito'] md:text-[28px] md:flex md:ml-[15px]">Welcome back</h2>
                <p  id="part1-box1-part2" className="md:h-[35px] md:w-full md:text-[#79716B] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[18px] md:flex md:items-center md:ml-[15px]">sign in to your admin account</p>
                </div> 

                <div id='child1-2-part1-box2' className="md:h-[90px] md:w-full">
                    <p id='part1-box2-p1' className="md:text-[#BB4D00] md:font-normal md:font-[400] md:font-[17px] md:font-['Nunito'] md:flex md:ml-[20px] md:mt-[12px]">EMAIL ADDRESS</p>
                    <input type="email" placeholder='Enter Your Email' id='part1-box2-input1' className="md:h-[47px] md:w-[450px] md:mt-[7px] md:ml-[20px] md:rounded-[13px] md:bg-white md:border md:border-[#FFF085] md:text-[#2C1810] md:pl-[20px] md:text-[15px] md:outline-none md:focus:border-[#F97316] md:focus:ring-2 md:focus:ring-orange-200" value={formData.email} name='email' onChange={handleChange}/>
                 </div>

                 <div id='child1-2-part1-box3' className="md:h-[90px] md:w-full">
                    <div id='part1-box3-part1'> 
                        <p id='box3-part1-p2' className="md:text-[#BB4D00] md:font-normal md:font-['Nunito'] md:font-[400] md:font-[15px] md:flex md:ml-[20px] md:mt-[7px]">PASSWORD</p>
                         <input type="password" placeholder='Enter your password' className="md:h-[47px] md:w-[450px] md:mt-[7px] md:ml-[20px] md:rounded-[13px] md:bg-white md:border md:border-[#FFF085] md:text-[#2C1810] md:pl-[20px] md:text-[15px] md:outline-none md:focus:border-[#F97316] md:focus:ring-2 md:focus:ring-orange-200" id='box3-part1-input2' value={formData.password} name='password' onChange={handleChange}/>
                      </div>
                 </div>

                 <div id='child1-2-part1-box4' className="md:h-[60px] md:w-full md:flex">
                     <div id='part1-box4-part1' className="md:h-full md:w-[70%] md:flex md:items-center">
                        <input type="checkbox"  id='box4-part1-input3' className="md:h-[18px] md:w-[18px]  md:rounded-[3px]  md:bg-[#FFFFFF]  md:border-[1px]  md:border-solid md:border-[#FFF085] md:cursor-pointer md:appearance-none md:checked:after:content-['✓'] md:checked:bg-[#FF6900] md:checked:after:text-[#FFFFFF] md:checked:text-[12px] md:checked:font-bold md:checked:text-center"/>
                        <p id='box4-part1-p4' className="md:text-[#57534D] md:font-['Nunito']  md:font-[400] md:text-[15px] md:flex md:ml-[10px] md:mt-[7px]"> Remember me on this device </p>
                     </div>
                      <div id='part1-box4-part2' className="hmd:-full md:w-[30%] md:flex md:items-center md:justify-end">
                        <Link to="/ResetP" style={{textDecoration:'none'}}><p id='box4-part2-p5' className="md:text-[#BB4D00] md:font-['Nunito'] md:font-normal md:font-[400] md:text-[15px] md:flex md:ml-[20px] md:mt-[7px]">Forget password ?</p></Link>
                      </div>
                 </div>

                <Link to='/Register'><button id='btn1' className="md:h-[50px] md:w-[450px] md:mt-[20px] md:ml-[85px] md:rounded-[10px] md:bg-[#FF8700] md:border-[1px] md:border-solid md:border-[#FFF085] md:font-normal md:font-[400] md:text-[15px] md:text-[#FFFFFF] md:font-['Nunito'] md:border-none md:hover:bg-[#fe9722] md:hover:border-[1px] md:hover:border-solid md:hover:border-[#FFF085] md:hover:shadow-[2px_3px_6px_rgba(#9C5606)]">Sign In</button></Link>

                 <div id='child1-2-part5' className="md:h-[30px] md:w-full md:mt-[20px] md:flex md:items-center md:justify-center">
                  <p className="md:text-[15px] md:font-[400] md:text-[#79716B] md:font-['Nunito']">New to MessWala?</p>
                  <Link to='/Register' style={{textDecoration:'none'}}><p className="md:text-[15px] md:font-[400] md:font-normal md:text-[#FF6900] md:decoration-none md:font-['Nunito']">Register your mess</p></Link>         
                 </div>

               </form>   

             </div>

                
        </div>



    </div>
    </>
  )
}

export default Welcomeback