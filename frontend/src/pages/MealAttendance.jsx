import { useState } from "react";
// import "./MealAttendance.css";
import "../Rutuja-style/MealAttendance.css"

const MealAttendance = () => {
  const [attendance, setAttendance] = useState({
    rahul: "Pending",
    amit: "Pending",
    sneha: "Pending",
    akash: "Pending",
    priya: "Pending",
  });

  const markAttendance = (customer, status) => {
    setAttendance((prev) => ({
      ...prev,
      [customer]: status,
    }));
  };

  const [selectedDate, setSelectedDate] = useState(
    new Date(2026, 7, 10)
  );

  const changeDate = (days) => {
    setSelectedDate((prev) => {
      const nextDate = new Date(prev);
      nextDate.setDate(nextDate.getDate() + days);
      return nextDate;
    });
  };

  const [selectedMeal, setSelectedMeal] = useState("Lunch");
  
  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const presentCount = Object.values(attendance).filter(
    (status) => status === "Present"
  ).length;

  const absentCount = Object.values(attendance).filter(
    (status) => status === "Absent"
  ).length;

  return (
    <div className="meal-attendance-page" className=" md:w-[1155px] md:h-auto ml-[75px]  md:p-[2.1875rem_1.25rem_1.875rem_1.50rem] md:text-[#2C1810]  md:mt-[67px] " >

      {/* page title */}
      <div className="meal-attendance-title" className="md:flex md:items-center md:gap-[8px]">
        <span className="md:text-[#FF6900] md:text-[20px]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M6 1.5V3.75" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 1.5V3.75" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.25 2.25H3.75C2.92157 2.25 2.25 2.92157 2.25 3.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25V3.75C15.75 2.92157 15.0784 2.25 14.25 2.25Z" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.25 6.75H15.75" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.75 11.25L8.25 12.75L11.25 9.75" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></span>
        <h1 className="md:m-0 md:text-[#292524] md:text-[22px] md:ml-[10px] md:font-[400] md:font-['Nunito']">Meal Attendance</h1>
      </div>

      {/* date + meal tabs */}
      <div className="attendance-controls" className=" md:mt-[20px] md:flex md:items-center md:gap-[80px]">

        <button
          className="attendance-date" 
          className="md:w-[214px] md:h-[42px] md:p-[0_10px] md:box-border md:flex md:items-center md:justify-between md:border-[1px] md:border-solid md:border-[#FFB900] md:rounded-[9px] md:bg-[#FFFFFF] md:text-[#79716B] md:text-[15px] md:cursor-pointer md:rounded-[5px]"
          type="button"
        >
          <span onClick={() => changeDate(-1)}>‹</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" className="md:w-[14px] md:h-[14px] md:block md:shrink-0" viewBox="0 0 14 14" fill="none">
          <path d="M4.66675 1.16666V2.91666" stroke="#E17100" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.33325 1.16666V2.91666" stroke="#E17100" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H11.0833C11.7277 12.25 12.25 11.7277 12.25 11.0833V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75Z" stroke="#E17100" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.75 5.25H12.25" stroke="#E17100" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.66675 7.58334H4.67258" stroke="#E17100" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 7.58334H7.00583" stroke="#E17100" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.33325 7.58334H9.33909" stroke="#E17100" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.66675 9.91666H4.67258" stroke="#E17100" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 9.91666H7.00583" stroke="#E17100" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.33325 9.91666H9.33909" stroke="#E17100" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></span>
          <span>{formattedDate}</span>
          <span onClick={() => changeDate(1)}>›</span>
        </button>

        <div className="meal-tabs" className="md:flex md:items-center md:gap-[12px]">

  <button
    className={`meal-tab md:h-[42px] md:p-[0_14px] md:border-[1px] md:vborder-solid md:border-[#FFB900] md:rounded-[9px] md:text-[#79716B] md:text-[12px] md:cursor-pointer md:inline-flex md:items-center md:justify-center md:gap-[8px] md:whitespace-nowrap
      ${
      selectedMeal === "Breakfast" ? "md:active md:bg-[#FF6900] md:border-[#FF6900] md:text-[#FFFFFF]" : ""
    }`}
    type="button"
    onClick={() => setSelectedMeal("Breakfast")}
    
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="md:w-[14px] md:h-[14px] md:block md:shrink-0 " viewBox="0 0 14 14" fill="none">
    <g clip-path="url(#clip0_29_739)">
    <path d="M6.99984 9.33333C8.2885 9.33333 9.33317 8.28866 9.33317 7C9.33317 5.71133 8.2885 4.66666 6.99984 4.66666C5.71117 4.66666 4.6665 5.71133 4.6665 7C4.6665 8.28866 5.71117 9.33333 6.99984 9.33333Z" stroke="#57534D" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 1.16666V2.33333" stroke="#57534D" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 11.6667V12.8333" stroke="#57534D" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.87598 2.87583L3.69848 3.69833" stroke="#57534D" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.3018 10.3017L11.1243 11.1242" stroke="#57534D" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.1665 7H2.33317" stroke="#57534D" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.6665 7H12.8332" stroke="#57534D" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.69848 10.3017L2.87598 11.1242" stroke="#57534D" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.1243 2.87583L10.3018 3.69833" stroke="#57534D" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_29_739">
    <rect width="14" height="14" fill="white"/>
    </clipPath>
    </defs>
    </svg> Breakfast
  </button>

    <button
      className={`meal-tab md:h-[42px] md:p-[0_14px] md:border-[1px] md:border-solid md:border-[#FFB900] md:rounded-[9px] md:text-[#79716B] md:text-[12px] md:cursor-pointer md:inline-flex md:items-center md:justify-center md:gap-[8px] md:whitespace-nowrap
         ${
        selectedMeal === "Lunch" ? "md:active md:bg-[#FF6900] md:border-[#FF6900] md:text-[#FFFFFF]" : ""
      }`}
      type="button"
      onClick={() => setSelectedMeal("Lunch")}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="md:w-[14px] md:h-[14px] md:block md:shrink-0"  viewBox="0 0 14 14" fill="none">
      <g clip-path="url(#clip0_29_752)">
      <path d="M1.75 1.16666V5.25C1.75 5.89166 2.275 6.41666 2.91667 6.41666H5.25C5.55942 6.41666 5.85617 6.29375 6.07496 6.07495C6.29375 5.85616 6.41667 5.55942 6.41667 5.25V1.16666" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.0835 1.16666V12.8333" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.2502 8.75V1.16666C11.4766 1.16666 10.7347 1.47395 10.1878 2.02094C9.64079 2.56792 9.3335 3.30978 9.3335 4.08333V7.58333C9.3335 8.225 9.8585 8.75 10.5002 8.75H12.2502ZM12.2502 8.75V12.8333" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_29_752">
      <rect width="14" height="14" fill="white"/>
      </clipPath>
      </defs>
      </svg> Lunch
    </button>

    <button
      className={`meal-tab md:h-[42px] md:p-[0_14px] md:border-[1px] md:border-solid md:border-[#FFB900] md:rounded-[9px] md:text-[#79716B] md:text-[12px] md:cursor-pointer md:inline-flex md:items-center md:justify-center md:gap-[8px] md:whitespace-nowrap
         ${
        selectedMeal === "Dinner" ? "md:active md:bg-[#FF6900] md:border-[#FF6900] md:text-[#FFFFFF]" : ""
      }`}
      type="button"
      onClick={() => setSelectedMeal("Dinner")}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px] block shrink-0"  viewBox="0 0 14 14" fill="none">
      <path d="M12.2414 7.2835C12.1867 8.29625 11.8399 9.27149 11.2428 10.0913C10.6457 10.9112 9.82387 11.5405 8.87674 11.9032C7.9296 12.266 6.89766 12.3466 5.90568 12.1354C4.91369 11.9242 4.00411 11.4301 3.28691 10.713C2.56971 9.99588 2.07558 9.08636 1.86425 8.0944C1.65293 7.10243 1.73346 6.07049 2.0961 5.12331C2.45875 4.17613 3.08799 3.35428 3.90776 2.75709C4.72753 2.1599 5.70273 1.81295 6.71548 1.75817C6.95173 1.74533 7.07539 2.0265 6.94998 2.22658C6.53049 2.89774 6.35088 3.69126 6.44043 4.47764C6.52999 5.26402 6.88343 5.99683 7.44308 6.55648C8.00273 7.11613 8.73554 7.46957 9.52192 7.55913C10.3083 7.64868 11.1018 7.46907 11.773 7.04958C11.9736 6.92417 12.2542 7.04725 12.2414 7.2835Z" stroke="#57534D" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> Dinner
    </button>

</div>

      </div>

      {/* attendance status */}
      <div className="attendance-status" className="md:mt-[10px] md:flex md:items-center md:justify-end md:gap-[25px] md:text-[10px]">
        <span className="present-count"  className="md:flex md:items-center md:justify-center md:gap-[15px] md:h-[35px] md:w-[80px]  md:rounded-[6px] md:text-[14px] md:text-[#008236] md:font-['Nunito'] md:font-[400] md:font-normal md:cursor-pointer md:whitespace-nowrap md:bg-[#DCFCE7] ">
           {presentCount} Present
        </span>

        <span className="absent-count" className="md:flex md:items-center md:justify-center md:gap-[15px] md:h-[35px] md:w-[80px] md:rounded-[6px] md:text-[14px] md:text-[#E7000B] md:font-['Nunito'] md:font-[400] md:font-normal md:cursor-pointer md:whitespace-nowrap bg-[#FFE2E2] ">
           {absentCount} Absent
        </span>
      </div>

      {/* attendance table */}
      <div className="attendance-table" className="md:mt-[30px] md:w-FULL md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FEF9C2] md:rounded-[10px] md:overflow-x-auto md:overflow-y-hidden md:shadow-[0_0_8px] md:shadow-[rgba(249,115,22,0.5)]">

        {/* table header */}
        <div className="attendance-table-header" className="md:grid md:grid-cols-[1.5fr_1fr_1fr_1.4fr_0.9fr_1.6fr] md:items-center md:py-[25px] md:pl-[55px] md:box-border md:bg-[#FFFBF0] md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-[#A6A09B] ">
          <span>CUSTOMER</span>
          <span>TYPE</span>
          <span>PLAN</span>
          <span>COUPON / PAYMENT</span>
          <span className="md:pl-[20px]">STATUS</span>
          <span className="md:pl-[30px]">ACTION</span>
        </div>

        {/* rahul */}
        <div className="attendance-row" className="md:grid md:grid-cols-[1.5fr_1fr_1fr_1.4fr_0.9fr_1.6fr] md:items-center md:min-h-[64px] md:p-[8px_12px] md:box-border md:bg-[#FFFFFF] md:text-[##2C1810] md:text-[12px] md:font-[400] md:font-['Nunito'] md:border-b-[#A6A09B]  md:last-child:border-b-none">

          <div className="customer-info" className="md:flex md:items-center md:pl-[20px] md:gap-[7px]">
            <span className="customer-avatar" className="md:border md:flex md:items-center md:justify-center md:rounded-[50%] md:w-[37px] md:h-[37px] md:shrink-0 md:bg-gradient-to-b md:from-[#FFDF20] md:to-[#FF8904] md:text-[BB4D00] md:text-[12px] md:text-[#FFFFFF] md:font-['Nunito']  md:font-[400]">R</span>
            <span className="md:font-['Nunito'] md:font-[400] md:font-normal md:text-[16px] md:text-[#292524]">Rahul Patil</span>
          </div>

          <span className="customer-type monthly" className="md:w-[80px] md:h-[30px] md:ml-[20px] md:flex md:items-center md:justify-center md:p-[4px_8px]  md:rounded-[30px] md:bg-[#fef9c2] md:border-[1px] md:border-solid md:border-[#FFF085] md:text-[14px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#894B00]">
            Monthly
          </span>

          <span className="md:text-[16px] md:ml-[30px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#79716B]">Monthly</span>

          <span className="coupon coupon-orange" className="md:w-[80px] md:h-[60px] md:ml-[60px] md:p-[4px_8px] md:rounded-[10px] md:inline-block md:items-center md:gap-[4px] md:text-[12px] md:font-[400] md:font-normal md:font-['Nunito'] md:text-[#CA3500] md:bg-[#FFF7ED]">Deduct 1
            <svg xmlns="http://www.w3.org/2000/svg" className="md:w-[7px] md:h-[11px] md:shrink-0 md:block md:text-[#CA3500] " viewBox="0 0 7 11" fill="none">
            <g clip-path="url(#clip0_29_818)">
            <path d="M0.52002 4.72005C0.726874 4.72005 0.925257 4.80223 1.07153 4.94849C1.21779 5.09476 1.29997 5.29314 1.29997 5.5C1.29997 5.70685 1.21779 5.90524 1.07153 6.05151C0.925257 6.19777 0.726874 6.27995 0.52002 6.27995V6.79991C0.52002 6.93782 0.574801 7.07007 0.672314 7.16758C0.769826 7.2651 0.902081 7.31988 1.03998 7.31988H5.1997C5.33761 7.31988 5.46986 7.2651 5.56738 7.16758C5.66489 7.07007 5.71967 6.93782 5.71967 6.79991V6.27995C5.51281 6.27995 5.31443 6.19777 5.16816 6.05151C5.02189 5.90524 4.93972 5.70685 4.93972 5.5C4.93972 5.29314 5.02189 5.09476 5.16816 4.94849C5.31443 4.80223 5.51281 4.72005 5.71967 4.72005V4.20009C5.71967 4.06218 5.66489 3.92993 5.56738 3.83242C5.46986 3.7349 5.33761 3.68012 5.1997 3.68012H1.03998C0.902081 3.68012 0.769826 3.7349 0.672314 3.83242C0.574801 3.92993 0.52002 4.06218 0.52002 4.20009V4.72005Z" stroke="#CA3500" stroke-width="0.519965" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.37988 3.68012V4.20009" stroke="#CA3500" stroke-width="0.519965" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.37988 6.79991V7.31988" stroke="#CA3500" stroke-width="0.519965" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.37988 5.24002V5.75998" stroke="#CA3500" stroke-width="0.519965" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_29_818">
            <rect width="6.23958" height="11" fill="white"/>
            </clipPath>
            </defs>
            </svg> 
           
            coupon
          </span>

          <span
            className={ 
              attendance.rahul === "Present"
                ? "present-count"
                : attendance.rahul === "Absent"
                ? "absent-count"
                : "md:bg-[#F3F4F6] md:border-[1px] md:w-[80px] md:h-[30px] md:ml-[40px]  md:border-solid md:border-[#E5E7EB] md:font-[400] md:font-['Nunito'] md:font-normal md:text-[14px] md:text-[#4A5565] md:w-fit md:p-[4px_8px] md:rounded-[30px] "
            }
          >
            {attendance.rahul}
          </span>

          <div className="action-buttons" className="flex items-center gap-[12px] whitespace-nowrap ml-[50px]">
            <button
              className="present-button"
              className="flex items-center justify-center gap-[8px] h-[30px] p-[0_9px] rounded-[6px] text-[12px] text-[#008236] font-['Nunito'] font-[400] font-normal cursor-pointer whitespace-nowrap bg-[#DCFCE7] "
              type="button"
              onClick={() => markAttendance("rahul", "Present")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[12px] h-[12px] text-[#008236]" viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_29_832)">
              <path d="M10.9003 5C11.1287 6.12065 10.9659 7.28571 10.4392 8.3009C9.91255 9.31608 9.05375 10.12 8.00606 10.5787C6.95837 11.0373 5.78512 11.1229 4.68196 10.8212C3.57879 10.5195 2.6124 9.8487 1.94394 8.92071C1.27549 7.99272 0.945367 6.86362 1.00864 5.72169C1.07191 4.57977 1.52475 3.49404 2.29163 2.64558C3.05852 1.79712 4.0931 1.23721 5.22284 1.05923C6.35258 0.881237 7.5092 1.09593 8.49981 1.6675" stroke="#008236" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 5.5L6 7L11 2" stroke="#008236" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_29_832">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
              </svg> Present
            </button>

            <button
              className="absent-button"
              className=" flex items-center justify-center gap-[8px] h-[30px] p-[0_9px] rounded-[6px] text-[12px] text-[#E7000B] font-['Nunito'] font-[400] font-normal cursor-pointer whitespace-nowrap bg-[#FFE2E2] "

              type="button"
              onClick={() => markAttendance("rahul", "Absent")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[12px] h-[12px] text-[#E7000B]" viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_29_838)">
              <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.5 4.5L4.5 7.5" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 4.5L7.5 7.5" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_29_838">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
              </svg> Absent
            </button>
          </div>

        </div>

        {/* amit */}
        <div className="attendance-row" className="md:grid md:grid-cols-[1.5fr_1fr_1fr_1.4fr_0.9fr_1.6fr] md:items-center md:min-h-[64px] md:p-[8px_12px] md:box-border md:bg-[#FFFFFF] md:text-[##2C1810] md:text-[12px] md:font-[400] md:font-['Nunito'] md:border-b-[#A6A09B]  md:last-child:border-b-none">

          <div className="customer-info" className=" md:flex  md:items-center   md:pl-[20px]  md:gap-[7px]">
            <span className="customer-avatar" className=" md:border  md:flex  md:items-center  md:justify-center  md:rounded-[50%]  md:w-[37px]  md:h-[37px]  md:shrink-0  md:bg-gradient-to-b  md:from-[#FFDF20]  md:to-[#FF8904]  md:text-[#BB4D00]  md:text-[12px]  md:text-[#FFFFFF]  md:font-['Nunito']   md:font-[400]">A</span>
            <span className=" md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[16px]  md:text-[#292524]">Amit Sharma</span>
          </div>

          <span className="customer-type yearly" className=" md:w-[80px]  md:h-[30px]  md:ml-[20px]  md:flex  md:items-center  md:justify-center  md:p-[4px_8px]   md:rounded-[30px]  md:bg-[#fef9c2]  md:border-[1px]  md:border-solid  md:border-[#FFF085]  md:text-[14px]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[#894B00]">
            Yearly
          </span>

          <span className=" md:text-[16px]  md:ml-[30px]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[#79716B]">Yearly</span>

          <span className="coupon coupon-orange" className=" md:w-[80px]  md:h-[60px]  md:ml-[60px]  md:p-[4px_8px]  md:rounded-[10px]  md:inline-block  md:items-center  md:gap-[4px]  md:text-[12px]  md:font-[400]  md:font-normal  md:font-['Nunito']  md:text-[#CA3500]  md:bg-[#FFF7ED]">Deduct 1
            <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-[7px]  md:h-[11px]  md:shrink-0  md:block  md:text-[#CA3500] " viewBox="0 0 7 11" fill="none">
            <g clip-path="url(#clip0_29_818)">
            <path d="M0.52002 4.72005C0.726874 4.72005 0.925257 4.80223 1.07153 4.94849C1.21779 5.09476 1.29997 5.29314 1.29997 5.5C1.29997 5.70685 1.21779 5.90524 1.07153 6.05151C0.925257 6.19777 0.726874 6.27995 0.52002 6.27995V6.79991C0.52002 6.93782 0.574801 7.07007 0.672314 7.16758C0.769826 7.2651 0.902081 7.31988 1.03998 7.31988H5.1997C5.33761 7.31988 5.46986 7.2651 5.56738 7.16758C5.66489 7.07007 5.71967 6.93782 5.71967 6.79991V6.27995C5.51281 6.27995 5.31443 6.19777 5.16816 6.05151C5.02189 5.90524 4.93972 5.70685 4.93972 5.5C4.93972 5.29314 5.02189 5.09476 5.16816 4.94849C5.31443 4.80223 5.51281 4.72005 5.71967 4.72005V4.20009C5.71967 4.06218 5.66489 3.92993 5.56738 3.83242C5.46986 3.7349 5.33761 3.68012 5.1997 3.68012H1.03998C0.902081 3.68012 0.769826 3.7349 0.672314 3.83242C0.574801 3.92993 0.52002 4.06218 0.52002 4.20009V4.72005Z" stroke="#CA3500" stroke-width="0.519965" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.37988 3.68012V4.20009" stroke="#CA3500" stroke-width="0.519965" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.37988 6.79991V7.31988" stroke="#CA3500" stroke-width="0.519965" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.37988 5.24002V5.75998" stroke="#CA3500" stroke-width="0.519965" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_29_818">
            <rect width="6.23958" height="11" fill="white"/>
            </clipPath>
            </defs>
            </svg> 
           
            coupon
          </span>

          <span
            className={
              attendance.amit === "Present"
                ? "present-count"
                : attendance.amit === "Absent"
                ? "absent-count"
                : " md:bg-[#F3F4F6]  md:border-[1px]  md:w-[80px]  md:h-[30px]  md:ml-[40px]   md:border-solid  md:border-[#E5E7EB]  md:font-[400]  md:font-['Nunito']  md:font-normal  md:text-[14px]  md:text-[#4A5565]  md:w-fit  md:p-[4px_8px]  md:rounded-[30px] "
            }
          >
            {attendance.amit}
          </span>

          <div className="action-buttons" className=" md:flex  md:items-center  md:gap-[12px]  md:whitespace-nowrap  md:ml-[50px]">
            <button
              className="present-button"
              className=" md:flex  md:items-center  md:justify-center  md:gap-[8px]  md:h-[30px]  md:p-[0_9px]  md:rounded-[6px]  md:text-[12px]  md:text-[#008236]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:cursor-pointer md: whitespace-nowrap  md:bg-[#DCFCE7] "
              type="button"
              onClick={() => markAttendance("amit", "Present")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-[12px]  md:h-[12px]  md:text-[#008236]" viewBox="0 0 12 12" fill="none" viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_29_832)">
              <path d="M10.9003 5C11.1287 6.12065 10.9659 7.28571 10.4392 8.3009C9.91255 9.31608 9.05375 10.12 8.00606 10.5787C6.95837 11.0373 5.78512 11.1229 4.68196 10.8212C3.57879 10.5195 2.6124 9.8487 1.94394 8.92071C1.27549 7.99272 0.945367 6.86362 1.00864 5.72169C1.07191 4.57977 1.52475 3.49404 2.29163 2.64558C3.05852 1.79712 4.0931 1.23721 5.22284 1.05923C6.35258 0.881237 7.5092 1.09593 8.49981 1.6675" stroke="#008236" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 5.5L6 7L11 2" stroke="#008236" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_29_832">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
              </svg> Present
            </button>

            <button
              className="absent-button"
              className=" md:flex  md:items-center  md:justify-center  md:gap-[8px]  md:h-[30px]  md:p-[0_9px]  md:rounded-[6px]  md:text-[12px]  md:text-[#E7000B]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:cursor-pointer  md:whitespace-nowrap  md:bg-[#FFE2E2] "
              type="button"
              onClick={() => markAttendance("amit", "Absent")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-[12px]  md:h-[12px]  md:text-[#E7000B]" viewBox="0 0 12 12" fill="none" viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_29_838)">
              <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.5 4.5L4.5 7.5" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 4.5L7.5 7.5" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_29_838">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
              </svg> Absent
            </button>
          </div>

        </div>

        {/* sneha */}
        <div className="attendance-row" className=" md:grid  md:grid-cols-[1.5fr_1fr_1fr_1.4fr_0.9fr_1.6fr]  md:items-center  md:min-h-[64px]  md:p-[8px_12px]  md:box-border  md:bg-[#FFFFFF]  md:text-[##2C1810]  md:text-[12px]  md:font-[400]  md:font-['Nunito']  md:border-b-[#A6A09B]    md:last-child:border-b-none">

          <div className="customer-info" className=" md:flex  md:items-center  md:gap-[7px]  md:pl-[20px]">
            <span className="customer-avatar" className=" md:border  md:flex  md:items-center  md:justify-center  md:rounded-[50%]  md:w-[37px]  md:h-[37px]  md:shrink-0  md:bg-gradient-to-b  md:from-[#FFDF20]  md:to-[#FF8904]  md:text-[BB4D00]  md:text-[12px]  md:text-[#FFFFFF]  md:font-['Nunito']   md:font-[400]">S</span>
            <span className=" md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[16px]  md:text-[#292524]">Sneha Joshi</span>
          </div>

          <span className="customer-type monthly" className=" md:w-[80px]  md:h-[30px]  md:ml-[20px]  md:flex  md:items-center  md:justify-center  md:p-[4px_8px]   md:rounded-[30px]  md:bg-[#fef9c2]  md:border-[1px]  md:border-solid  md:border-[#FFF085]  md:text-[14px]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[#894B00]">
            Monthly
          </span>

          <span className=" md:text-[16px]  md:ml-[30px]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[#79716B]">Monthly</span>

          <span className="coupon coupon-orange" className=" md:w-[80px]  md:h-[60px]  md:ml-[60px]  md:p-[4px_8px]  md:rounded-[10px]  md:inline-block  md:items-center  md:gap-[4px]  md:text-[12px]  md:font-[400]  md:font-normal  md:font-['Nunito']  md:text-[#CA3500]  md:bg-[#FFF7ED]">Deduct 1
            <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-[7px]  md:h-[11px]  md:shrink-0  md:block  md:text-[#CA3500] " viewBox="0 0 7 11" fill="none">
            <g clip-path="url(#clip0_29_818)">
            <path d="M0.52002 4.72005C0.726874 4.72005 0.925257 4.80223 1.07153 4.94849C1.21779 5.09476 1.29997 5.29314 1.29997 5.5C1.29997 5.70685 1.21779 5.90524 1.07153 6.05151C0.925257 6.19777 0.726874 6.27995 0.52002 6.27995V6.79991C0.52002 6.93782 0.574801 7.07007 0.672314 7.16758C0.769826 7.2651 0.902081 7.31988 1.03998 7.31988H5.1997C5.33761 7.31988 5.46986 7.2651 5.56738 7.16758C5.66489 7.07007 5.71967 6.93782 5.71967 6.79991V6.27995C5.51281 6.27995 5.31443 6.19777 5.16816 6.05151C5.02189 5.90524 4.93972 5.70685 4.93972 5.5C4.93972 5.29314 5.02189 5.09476 5.16816 4.94849C5.31443 4.80223 5.51281 4.72005 5.71967 4.72005V4.20009C5.71967 4.06218 5.66489 3.92993 5.56738 3.83242C5.46986 3.7349 5.33761 3.68012 5.1997 3.68012H1.03998C0.902081 3.68012 0.769826 3.7349 0.672314 3.83242C0.574801 3.92993 0.52002 4.06218 0.52002 4.20009V4.72005Z" stroke="#CA3500" stroke-width="0.519965" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.37988 3.68012V4.20009" stroke="#CA3500" stroke-width="0.519965" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.37988 6.79991V7.31988" stroke="#CA3500" stroke-width="0.519965" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.37988 5.24002V5.75998" stroke="#CA3500" stroke-width="0.519965" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_29_818">
            <rect width="6.23958" height="11" fill="white"/>
            </clipPath>
            </defs>
            </svg> 
           
            coupon
          </span>

          <span
            className={
              attendance.sneha === "Present"
                ? "present-count"
                : attendance.sneha === "Absent"
                ? "absent-count"
                : "md:bg-[#F3F4F6]  md:border-[1px]  md:w-[80px]  md:h-[30px]  md:ml-[40px]   md:border-solid  md:border-[#E5E7EB]  md:font-[400]  md:font-['Nunito']  md:font-normal  md:text-[14px]  md:text-[#4A5565]  md:w-fit  md:p-[4px_8px]  md:rounded-[30px]"
            }
          >
            {attendance.sneha}
          </span>

          <div className="action-buttons" className=" md:flex  md:items-center  md:gap-[12px]  md:whitespace-nowrap  md:ml-[50px]">
            <button
              className="present-button"
              className=" md:flex  md:items-center  md:justify-center  md:gap-[8px]  md:h-[30px]  md:p-[0_9px]  md:rounded-[6px]  md:text-[12px]  md:text-[#008236]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:cursor-pointer md: whitespace-nowrap  md:bg-[#DCFCE7] "
              type="button"
              onClick={() => markAttendance("sneha", "Present")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-[12px]  md:h-[12px]  md:text-[#008236]"  viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_29_832)">
              <path d="M10.9003 5C11.1287 6.12065 10.9659 7.28571 10.4392 8.3009C9.91255 9.31608 9.05375 10.12 8.00606 10.5787C6.95837 11.0373 5.78512 11.1229 4.68196 10.8212C3.57879 10.5195 2.6124 9.8487 1.94394 8.92071C1.27549 7.99272 0.945367 6.86362 1.00864 5.72169C1.07191 4.57977 1.52475 3.49404 2.29163 2.64558C3.05852 1.79712 4.0931 1.23721 5.22284 1.05923C6.35258 0.881237 7.5092 1.09593 8.49981 1.6675" stroke="#008236" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 5.5L6 7L11 2" stroke="#008236" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_29_832">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
              </svg> Present
            </button>

            <button
              className="absent-button"
              className=" md:flex  md:items-center  md:justify-center  md:gap-[8px]  md:h-[30px]  md:p-[0_9px]  md:rounded-[6px]  md:text-[12px]  md:text-[#E7000B]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:cursor-pointer  md:whitespace-nowrap  md:bg-[#FFE2E2] "
              type="button"
              onClick={() => markAttendance("sneha", "Absent")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-[12px]  md:h-[12px]  md:text-[#E7000B]" viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_29_838)">
              <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.5 4.5L4.5 7.5" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 4.5L7.5 7.5" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_29_838">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
              </svg> Absent
            </button>
          </div>

        </div>

        {/* akash */}
        <div className="attendance-row" className="md:grid md:grid-cols-[1.5fr_1fr_1fr_1.4fr_0.9fr_1.6fr] md:items-center md:min-h-[64px] md:p-[8px_12px] md:box-border md:bg-[#FFFFFF] md:text-[##2C1810] md:text-[12px] md:font-[400] md:font-['Nunito'] md:border-b-[#A6A09B]  md:last-child:border-b-none">

          <div className="customer-info" className=" md:flex  md:items-center  md:gap-[7px]  md:pl-[20px]">
            <span className="customer-avatar" className=" md:border  md:flex  md:items-center  md:justify-center  md:rounded-[50%]  md:w-[37px]  md:h-[37px]  md:shrink-0  md:bg-gradient-to-b  md:from-[#FFDF20]  md:to-[#FF8904]  md:text-[BB4D00]  md:text-[12px]  md:text-[#FFFFFF]  md:font-['Nunito']   md:font-[400]">A</span>
            <span className=" md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[16px]  md:text-[#292524]"> Akash More </span>
          </div>

          <span className="customer-type daily" className=" md:w-[80px]  md:h-[30px]  md:ml-[20px]  md:flex  md:items-center  md:justify-center  md:p-[4px_8px]   md:rounded-[30px]  md:bg-[#fef9c2]  md:border-[1px]  md:border-solid  md:border-[#FFF085]  md:text-[14px]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[#894B00]">
            Daily Payment
          </span>

          <span className=" md:text-[16px]  md:ml-[30px]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[#79716B]">Daily Payment</span>

          <span className="coupon coupon-blue" className=" md:w-[80px]  md:h-[60px]  md:ml-[60px]  md:p-[4px_8px]  md:rounded-[10px]  md:inline-block  md:items-center  md:gap-[4px]  md:text-[12px]  md:font-[400]  md:font-normal  md:font-['Nunito']  md:text-[#CA3500]  md:bg-[#FFF7ED]">
            <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-[7px]  md:h-[11px]  md:shrink-0  md:block  md:text-[#CA3500] " viewBox="0 0 8 11" fill="none">
            <path d="M1.79932 2.80078H5.39828" stroke="#1447E6" stroke-width="0.599827" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.79932 4.30035H5.39828" stroke="#1447E6" stroke-width="0.599827" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.79932 5.79991L4.34858 8.19922" stroke="#1447E6" stroke-width="0.599827" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.79932 5.79991H2.69906" stroke="#1447E6" stroke-width="0.599827" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.69922 5.79991C4.69874 5.79991 4.69874 2.80078 2.69922 2.80078" stroke="#1447E6" stroke-width="0.599827" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> Daily
            <br />
            payment
          </span>

          <span
            className={
              attendance.akash === "Present"
                ? "present-count"
                : attendance.akash === "Absent"
                ? "absent-count"
                : "md:bg-[#F3F4F6]  md:border-[1px]  md:w-[80px]  md:h-[30px]  md:ml-[40px]   md:border-solid  md:border-[#E5E7EB]  md:font-[400]  md:font-['Nunito']  md:font-normal  md:text-[14px]  md:text-[#4A5565]  md:w-fit  md:p-[4px_8px]  md:rounded-[30px]"
            }
          >
            {attendance.akash}
          </span>

          <div className="action-buttons" className=" md:flex  md:items-center  md:gap-[12px]  md:whitespace-nowrap  md:ml-[50px]">
            <button
              className="present-button"
              className=" md:flex  md:items-center  md:justify-center  md:gap-[8px]  md:h-[30px]  md:p-[0_9px]  md:rounded-[6px]  md:text-[12px]  md:text-[#008236]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:cursor-pointer md: whitespace-nowrap  md:bg-[#DCFCE7] "

              type="button"
              onClick={() => markAttendance("akash", "Present")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-[12px]  md:h-[12px]  md:text-[#008236]" viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_29_832)">
              <path d="M10.9003 5C11.1287 6.12065 10.9659 7.28571 10.4392 8.3009C9.91255 9.31608 9.05375 10.12 8.00606 10.5787C6.95837 11.0373 5.78512 11.1229 4.68196 10.8212C3.57879 10.5195 2.6124 9.8487 1.94394 8.92071C1.27549 7.99272 0.945367 6.86362 1.00864 5.72169C1.07191 4.57977 1.52475 3.49404 2.29163 2.64558C3.05852 1.79712 4.0931 1.23721 5.22284 1.05923C6.35258 0.881237 7.5092 1.09593 8.49981 1.6675" stroke="#008236" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 5.5L6 7L11 2" stroke="#008236" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_29_832">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
              </svg> Present
            </button>

            <button
              className="absent-button"
              className=" md:flex  md:items-center  md:justify-center  md:gap-[8px]  md:h-[30px]  md:p-[0_9px]  md:rounded-[6px]  md:text-[12px]  md:text-[#E7000B]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:cursor-pointer  md:whitespace-nowrap  md:bg-[#FFE2E2] "
              type="button"
              onClick={() => markAttendance("akash", "Absent")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-[12px]  md:h-[12px]  md:text-[#E7000B]" viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_29_838)">
              <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.5 4.5L4.5 7.5" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 4.5L7.5 7.5" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_29_838">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
              </svg> Absent
            </button>
          </div>

        </div>

        {/* priya */}
        <div className="attendance-row" className="md:grid md:grid-cols-[1.5fr_1fr_1fr_1.4fr_0.9fr_1.6fr] md:items-center md:min-h-[64px] md:p-[8px_12px] md:box-border md:bg-[#FFFFFF] md:text-[##2C1810] md:text-[12px] md:font-[400] md:font-['Nunito'] md:border-b-[#A6A09B]  md:last-child:border-b-none">

          <div className="customer-info" className=" md:flex  md:items-center  md:gap-[7px]  md:pl-[20px]">
            <span className="customer-avatar" className=" md:border  md:flex  md:items-center  md:justify-center  md:rounded-[50%]  md:w-[37px]  md:h-[37px]  md:shrink-0  md:bg-gradient-to-b  md:from-[#FFDF20]  md:to-[#FF8904]  md:text-[BB4D00]  md:text-[12px]  md:text-[#FFFFFF]  md:font-['Nunito']   md:font-[400]">P</span>
            <span className=" md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[16px]  md:text-[#292524]">Priya Deshmukh </span>
          </div>

          <span className="customer-type tiffin" className=" md:w-[80px]  md:h-[30px]  md:ml-[20px]  md:flex  md:items-center  md:justify-center  md:p-[4px_8px]   md:rounded-[30px]  md:bg-[#fef9c2]  md:border-[1px]  md:border-solid  md:border-[#FFF085]  md:text-[14px]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[#894B00]">
            Tiffin
          </span>

          <span className=" md:text-[16px]  md:ml-[30px]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[#79716B]">Tiffin</span>

          <span className="coupon coupon-blue" className=" md:w-[80px]  md:h-[60px]  md:ml-[60px]  md:p-[4px_8px]  md:rounded-[10px]  md:inline-block  md:items-center  md:gap-[4px]  md:text-[12px]  md:font-[400]  md:font-normal  md:font-['Nunito']  md:text-[#CA3500]  md:bg-[#FFF7ED]">
            <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-[7px]  md:h-[11px]  md:shrink-0  md:block  md:text-[#CA3500] " viewBox="0 0 8 11" fill="none">
            <path d="M1.79932 2.80078H5.39828" stroke="#1447E6" stroke-width="0.599827" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.79932 4.30035H5.39828" stroke="#1447E6" stroke-width="0.599827" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.79932 5.79991L4.34858 8.19922" stroke="#1447E6" stroke-width="0.599827" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.79932 5.79991H2.69906" stroke="#1447E6" stroke-width="0.599827" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.69922 5.79991C4.69874 5.79991 4.69874 2.80078 2.69922 2.80078" stroke="#1447E6" stroke-width="0.599827" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> Daily
            <br />
            payment
          </span>

          <span
            className={
              attendance.priya === "Present"
                ? "present-count"
                : attendance.priya === "Absent"
                ? "absent-count"
                : "md:bg-[#F3F4F6]  md:border-[1px]  md:w-[80px]  md:h-[30px]  md:ml-[40px]   md:border-solid  md:border-[#E5E7EB]  md:font-[400]  md:font-['Nunito']  md:font-normal  md:text-[14px]  md:text-[#4A5565]  md:w-fit  md:p-[4px_8px]  md:rounded-[30px]"
            }
          >
            {attendance.priya}
          </span>

          <div className="action-buttons" className=" md:flex  md:items-center  md:gap-[12px]  md:whitespace-nowrap  md:ml-[50px]">
            <button
              className="present-button"
              className=" md:flex  md:items-center  md:justify-center  md:gap-[8px]  md:h-[30px]  md:p-[0_9px]  md:rounded-[6px]  md:text-[12px]  md:text-[#008236]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:cursor-pointer md: whitespace-nowrap  md:bg-[#DCFCE7] "

              type="button"
              onClick={() => markAttendance("priya", "Present")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-[12px]  md:h-[12px]  md:text-[#008236]" viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_29_832)">
              <path d="M10.9003 5C11.1287 6.12065 10.9659 7.28571 10.4392 8.3009C9.91255 9.31608 9.05375 10.12 8.00606 10.5787C6.95837 11.0373 5.78512 11.1229 4.68196 10.8212C3.57879 10.5195 2.6124 9.8487 1.94394 8.92071C1.27549 7.99272 0.945367 6.86362 1.00864 5.72169C1.07191 4.57977 1.52475 3.49404 2.29163 2.64558C3.05852 1.79712 4.0931 1.23721 5.22284 1.05923C6.35258 0.881237 7.5092 1.09593 8.49981 1.6675" stroke="#008236" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 5.5L6 7L11 2" stroke="#008236" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_29_832">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
              </svg> Present
            </button>

            <button
              className="absent-button"
              className=" md:flex  md:items-center  md:justify-center  md:gap-[8px]  md:h-[30px]  md:p-[0_9px]  md:rounded-[6px]  md:text-[12px]  md:text-[#E7000B]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:cursor-pointer  md:whitespace-nowrap  md:bg-[#FFE2E2] "

              type="button"
              onClick={() => markAttendance("priya", "Absent")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-[12px]  md:h-[12px]  md:text-[#E7000B]" viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_29_838)">
              <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.5 4.5L4.5 7.5" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 4.5L7.5 7.5" stroke="#E7000B" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_29_838">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
              </svg> Absent
            </button>
          </div>

        </div>

      </div>

      {/* bottom */}
      <div className="attendance-bottom" className=" md:mt-[25px]  md:flex  md:items-center  md:justify-between">
        <span className=" md:text-[20px]  md:text-black">Showing 1 to 5</span>

        <div className="pagination" className="  md:flex  md:items-center  md:gap-[4px]">
          <button type="button" className=" md:w-[26px]  md:h-[26px]  md:flex  md:items-center  md:justify-center  md:border-[1px]  md:border-solid  md:border-[#A6A09B]  md:bg-[#FFFFFF]  md:text-[#79716B]  md:text-[16px]  md:cursor-pointer  md:rounded-[5px]">‹</button>
          <button className="active-page" className=" md:w-[26px]  md:h-[26px]  md:flex  md:items-center  md:justify-center  md:border-[1px]  md:border-solid  md:border-[#FF6900]  md:bg-[#FF6900]  md:text-[#FFFFFF]  md:text-[16px]  md:cursor-pointer  md:rounded-[5px] " type="button">
            1
          </button>
          <button className=" md:w-[26px]  md:h-[26px]  md:flex  md:items-center  md:justify-center  md:border-[1px]  md:border-solid  md:border-[#A6A09B]  md:bg-[#FFFFFF]  md:text-[#79716B]  md:text-[16px]  md:cursor-pointer  md:rounded-[5px] " type="button">2</button>
          <button className=" md:w-[26px]  md:h-[26px]  md:flex  md:items-center  md:justify-center  md:border-[1px]  md:border-solid  md:border-[#A6A09B]  md:bg-[#FFFFFF]  md:text-[#79716B]  md:text-[16px]  md:cursor-pointer  md:rounded-[5px] " type="button">3</button>
          <button className=" md:w-[26px]  md:h-[26px]  md:flex  md:items-center  md:justify-center  md:border-[1px]  md:border-solid  md:border-[#A6A09B]  md:bg-[#FFFFFF]  md:text-[#79716B]  md:text-[16px]  md:cursor-pointer  md:rounded-[5px] " type="button">›</button>
        </div>
      </div>

    </div>
  );
};

export default MealAttendance;