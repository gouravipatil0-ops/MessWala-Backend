import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./AllItems.css";
import "../Rutuja-style/AllItems.css";

const AllItems = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState("Today");
  const [selectedDate, setSelectedDate] = useState(
    new Date(2026, 7, 10)
  );

  const changeDay = (day) => {
    setSelectedDay(day);

    if (day === "Today") {
      setSelectedDate(new Date(2026, 7, 10));
    }

    if (day === "Tomorrow") {
      setSelectedDate(new Date(2026, 7, 11));
    }

    if (day === "Custom") {
      const customDate = prompt(
        "Enter date (DD/MM/YYYY):",
        "10/08/2026"
      );

      if (customDate) {
        const [dayValue, monthValue, yearValue] =
          customDate.split("/");

        if (dayValue && monthValue && yearValue) {
          setSelectedDate(
            new Date(
              Number(yearValue),
              Number(monthValue) - 1,
              Number(dayValue)
            )
          );
        }
      }
    }
  };

  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const handleEditMenu = () => {
  navigate("/edit-item-menu");
};
  return (
    <div id="all-items-page" className="md:w-[1155px] md:h-auto md:ml-[75px] md:p-[2.1875rem_1.25rem_1.875rem_1.50rem]  md:text-[#2C1810]  md:mt-[67px] ">

      {/* Page Title */}
      <div id="all-items-title-row" className=" md:flex md:items-center md:justify-between md:mb-[16px]">

        <div id="all-items-title" className="md:flex md:items-center md:gap-[8px]">
          <span id="title-icon" className="md:text-[#FF6900] md:text-[18px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 18 18" fill="none">
              <path d="M9.75 3.75H15.75" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.75 9H15.75" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.75 14.25H15.75" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.25 12.75L3.75 14.25L6.75 11.25" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.25 5.25L3.75 6.75L6.75 3.75" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </span>
          <h1 className="md:m-0 md:text-[24px] md:ml-[10px] md:font-[400]">All Items</h1>
        </div>

        <div id="live-overview" className="md:p-[5px_12px] md:rounded-2xl md:bg-[#FFF085] md:text-[#BB4D00] md:text-[14px]">
          Live overview of all data
        </div>

      </div>


      {/* mess menu card */}
      <div id="mess-menu-box" className="md:w-[610px]  md:w-full md:bg-[#FFFFFF] md:mt-[30px] md:rounded-[14px] md:overflow-hidden md:shadow-[0_0_6px_rgba(249,115,22,0.5)]">

        {/* header */}
        <div id="mess-menu-header" className="md:h-[72px] md:p-[12px_18px] md:flex md:items-center md:justify-between md:bg-gradient-to-r md:from-[#FEFCE8] md:to-[#FFF7ED] md:border-[1px] md:border-solid md:border-[#FEF9C2] md:size-[box]">

          {/* menu information */}
          <div id="menu-info" className="md:flex md:items-center md:gap-[10px]">

            <div id="menu-icon" className="md:w-[36px] md:h-[36px] md:flex md:items-center md:justify-center md:rounded-[10px] md:bg-[#FFF085] md:text-[#FF6900] md:text-[16px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17" viewBox="0 0 17 17" fill="none">
              <g clip-path="url(#clip0_20_824)">
              <path d="M8.5 3.54166V14.875" stroke="#FF6900" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.1674 13.4583C14.543 13.4581 14.9031 13.3088 15.1687 13.0432C15.4342 12.7775 15.5834 12.4173 15.5834 12.0417V3.54167C15.5834 3.16607 15.4342 2.80584 15.1687 2.54018C14.9031 2.27453 14.543 2.12519 14.1674 2.125L11.3334 2.12642C10.7836 2.12625 10.2414 2.25405 9.74968 2.49969C9.25791 2.74533 8.83006 3.10207 8.50002 3.54167C8.17012 3.10181 7.74235 2.74479 7.25057 2.4989C6.75879 2.25301 6.21651 2.125 5.66669 2.125H2.83335C2.45763 2.125 2.0973 2.27426 1.83162 2.53993C1.56594 2.80561 1.41669 3.16594 1.41669 3.54167V12.0417C1.41669 12.4173 1.56585 12.7775 1.83137 13.0432C2.09689 13.3088 2.45704 13.4581 2.83265 13.4583H5.66669C6.21651 13.4583 6.75879 13.5863 7.25057 13.8322C7.74235 14.0781 8.17012 14.4351 8.50002 14.875C8.82992 14.4351 9.25769 14.0781 9.74947 13.8322C10.2413 13.5863 10.7835 13.4583 11.3334 13.4583H14.1674Z" stroke="#FF6900" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_20_824">
              <rect width="17" height="17" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>

            <div> 
              <h2 className="md:m-0 md:text-[16px] md:font-[400]">Mess Menu</h2>

              <p className="md:m-[3px_0_0] md:text-[12px] md:text-[#FF6900]">
                Daily meal plan — {formattedDate}
              </p>
            </div>

          </div>


          {/* menu actions */}
          <div id="menu-actions" className="md:flex md:items-center md:gap-[10px]">

            <div id="menu-tabs" className="md:flex md:border-[1px] md:border-solid md:border-[#A6A09B] md:rounded-[9px] md:overflow-hidden md:bg-[#FFFFFF]">

              <button
                className={`menu-tab md:h-[30px] md:p-[0_14px] md:border-none md:bg-[#FFFFFF] md:text-[#79716B] md:text-[10px]${
                  selectedDay === "Today" ? "active bg-[#FF6900] border text-[12px] rounded-[5px] text-[#FFFFFF]" : ""
                }`}
                type="button"
                onClick={() => changeDay("Today")}
              >
                Today
              </button>

              <button
                className={`menu-tab md:h-[30px] md:p-[0_14px] md:border-none md:bg-[#FFFFFF] md:text-[#79716B] md:text-[10px] ${
                  selectedDay === "Tomorrow" ? "active bg-[#FF6900] text-[#FFFFFF]" : ""
                }`}
                type="button"
                onClick={() => changeDay("Tomorrow")}
              >
                Tomorrow
              </button>

              <button
                className={`menu-tab md:h-[30px] md:p-[0_14px] md:border-none md:bg-[#FFFFFF] md:text-[#79716B] md:text-[10px] ${
                  selectedDay === "Custom" ? "active" : ""
                }`}
                type="button"
                onClick={() => changeDay("Custom")}
              >
                Custom
              </button>

            </div>


            <button
              id="edit-menu-button" className="md:h-[40px] md:w-[110px] md:peer-[0_13px] md:rounded-[9px] md:bg-[#FFEDD4] md:text-[#CA3500] md:text-[14px] md:flex md:items-center md:justify-center md:gap-[5px]"
              type="button"
              onClick={handleEditMenu}
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 11 11" fill="none">
              <path d="M10.087 2.90619C10.3513 2.6419 10.4999 2.28342 10.4999 1.90962C10.5 1.53581 10.3515 1.1773 10.0872 0.912941C9.82293 0.648586 9.46445 0.500047 9.09064 0.5C8.71684 0.499953 8.35832 0.648402 8.09397 0.912691L1.42097 7.58719C1.30488 7.70294 1.21902 7.84546 1.17097 8.00219L0.510467 10.1782C0.497545 10.2214 0.496569 10.2674 0.507643 10.3111C0.518717 10.3549 0.541427 10.3948 0.573365 10.4267C0.605303 10.4586 0.645277 10.4812 0.689046 10.4922C0.732815 10.5032 0.778747 10.5022 0.821967 10.4892L2.99847 9.82919C3.15505 9.78157 3.29755 9.69624 3.41347 9.58069L10.087 2.90619Z" stroke="#CA3500" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> Edit Menu 
            </button>

          </div>

        </div>


        {/* meal cards */}
        <div id="meal-grid" className=" md:mt-[10px] md:grid md:grid-cols-[repeat(2,minmax(0,1fr))] md:gap-[14px] md:p-[16px_18px] md:size-[box]" >

          {/* breakfast */}
          <div id="meal-card breakfast-card" className="border md:w-full md:h-[250px] md:p-[14px] md:size-[box] md:border-[3px ] md:border-solid md:border-[#FFF085] md:rounded-[10px] md:bg-[#FEFCE8] md:flex md:flex-col">

            <div id="meal-card-top" className="md:flex md:items-center md:justify-between">
              <div id="meal-name" className=" md:flex md:items-center md:gap-[10px]">
                <span id="meal-icon" className="md:text-[16px] md:text-[#FF6900]"><svg xmlns="http://www.w3.org/2000/svg" className="text-[#FF6900] w-[16px] h-[16px]" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_20_855)">
                  <path d="M7.99998 10.6667C9.47274 10.6667 10.6666 9.47276 10.6666 8C10.6666 6.52724 9.47274 5.33333 7.99998 5.33333C6.52722 5.33333 5.33331 6.52724 5.33331 8C5.33331 9.47276 6.52722 10.6667 7.99998 10.6667Z" stroke="#D08700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 1.33333V2.66667" stroke="#D08700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 13.3333V14.6667" stroke="#D08700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3.28668 3.28667L4.22668 4.22667" stroke="#D08700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.7733 11.7733L12.7133 12.7133" stroke="#D08700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1.33331 8H2.66665" stroke="#D08700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.3333 8H14.6666" stroke="#D08700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.22668 11.7733L3.28668 12.7133" stroke="#D08700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.7133 3.28667L11.7733 4.22667" stroke="#D08700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_20_855">
                  <rect width="16" height="16" fill="white"/>
                  </clipPath></defs></svg></span>
                <h3 className="md:m-0 vtext-[16px] md:font-[500]">Breakfast</h3>
              </div>

              <span id="price-tag" className="md:p-[4px_9px] md:border-[1px] md:border-solid md:border-[#A6A09B] md:rounded-[12px] md:bg-[#FFFFFF] md:text-[#BB4D00] md:text-[10px]">
                ₹60
              </span>

            </div>   
            <p id="meal-time" className="md:m-[15px_0_7px] md:text-[12px] md:text-[#FF6900] md:flex md:justify-left md:gap-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg"  className="md:w-[13px] md:h-[13px] md:mt-[2px] md:ml-[5px]" viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_20_940)">
              <path d="M5.49996 10.0833C8.03126 10.0833 10.0833 8.0313 10.0833 5.5C10.0833 2.96869 8.03126 0.916666 5.49996 0.916666C2.96865 0.916666 0.916626 2.96869 0.916626 5.5C0.916626 8.0313 2.96865 10.0833 5.49996 10.0833Z" stroke="#BB4D00" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.5 2.75V5.5L7.33333 6.41667" stroke="#BB4D00" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_20_940">
              <rect width="11" height="11" fill="white"/>
              </clipPath>
              </defs>
              </svg>7:00 AM  9:30 AM
            </p>

            <ul id="meal-items" className="md:m-[8px] md:pl-[17px] md:list-disc md:text-[#79716B] md:text-[12px] md:line-h-[17px]">
              <li className="md:text-[#FFB900]">Poha / Upma</li>
              <li className="md:text-[#FFB900]">Bread & Butter</li>
              <li className="md:text-[#FFB900]">Boiled Eggs (2)</li>
              <li className="md:text-[#FFB900]">Chai / Milk</li>
              <li className="md:text-[#FFB900]">Seasonal Fruit</li>
            </ul>

            <div id="meal-status" className="md:mt-auto md:flex md:justify-between md:items-center md:text-[9px]">

              <span className="md:text-[#79716B]  md:text-[12px]">Serves today</span>

              <strong className="md:text-[#16A34A] md:text-[12px] md:font-[400] md:flex md:justify-left md:gap-[5px]"><svg xmlns="http://www.w3.org/2000/svg" className="md:w-[12px] md:h-[12] " viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_20_918)">
              <path d="M9.99211 4.58333C10.2014 5.61059 10.0523 6.67856 9.56946 7.60915C9.08666 8.53974 8.29944 9.27669 7.33905 9.6971C6.37867 10.1175 5.30319 10.196 4.29196 9.91941C3.28072 9.64285 2.39486 9.02797 1.78211 8.17731C1.16936 7.32666 0.866749 6.29165 0.924747 5.24488C0.982746 4.19812 1.39785 3.20287 2.10082 2.42512C2.8038 1.64736 3.75217 1.13411 4.78776 0.970953C5.82336 0.807797 6.88359 1.0046 7.79165 1.52854" stroke="#00A63E" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.125 5.04166L5.5 6.41666L10.0833 1.83333" stroke="#00A63E" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_20_918">
              <rect width="11" height="11" fill="white"/>
              </clipPath>
              </defs>
              </svg> Active</strong>
            </div>

          </div>


          {/* lunch */}
          <div className="meal-card lunch-card" className="md:border md:w-full md:h-[250px] md:p-[14px] md:size-[box] md:border-[3px ] md:border-solid md:border-[#FFD6A8] md:rounded-[10px] md:bg-[#FFF7ED] md:flex md:flex-col">

            <div id="meal-card-top" className="md:flex md:items-center md:justify-between">

              <div id="meal-name" className="md:flex md:items-center md:gap-[10px]">
                <span id="meal-icon" className="md:text-[15px] md:text-[#FF6900]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 1.33333V6C2 6.73333 2.6 7.33333 3.33333 7.33333H6C6.35362 7.33333 6.69276 7.19286 6.94281 6.94281C7.19286 6.69276 7.33333 6.35362 7.33333 6V1.33333" stroke="#FF6900" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.66663 1.33333V14.6667" stroke="#FF6900" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 10V1.33333C13.1159 1.33333 12.2681 1.68452 11.6429 2.30964C11.0178 2.93477 10.6666 3.78261 10.6666 4.66667V8.66667C10.6666 9.4 11.2666 10 12 10H14ZM14 10V14.6667" stroke="#FF6900" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                <h3 className="md:m-0 md:text-[16px] md:font-[500]">Lunch</h3>
              </div>

              <span id="price-tag" className="md:p-[4px_9px] md:border-[1px] md:border-solid md:border-[#A6A09B] md:rounded-[12px] md:bg-[#FFFFFF] md:text-[#BB4D00] md:text-[10px]">
                ₹80
              </span>

            </div>

            <p id="meal-time" className="md:m-[15px_0_7px] md:text-[12px] md:text-[#FF6900] md:flex md:justify-left md:gap-[10px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="md:w-[13px] md:h-[13px] md:mt-[2px] md:ml-[5px]" viewBox="0 0 11 11" fill="none">
                <g clip-path="url(#clip0_20_940)">
                <path d="M5.49996 10.0833C8.03126 10.0833 10.0833 8.0313 10.0833 5.5C10.0833 2.96869 8.03126 0.916666 5.49996 0.916666C2.96865 0.916666 0.916626 2.96869 0.916626 5.5C0.916626 8.0313 2.96865 10.0833 5.49996 10.0833Z" stroke="#BB4D00" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.5 2.75V5.5L7.33333 6.41667" stroke="#BB4D00" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_20_940">
                <rect width="11" height="11" fill="white"/>
                </clipPath>
                </defs>
                </svg> 12:00 PM  2:30 PM
            </p>

            <ul id="meal-items" className="md:m-[8px] md:pl-[17px] md:list-disc md:text-[#79716B] md:text-[12px] md:line-h-[17px]">
              <li className="md:text-[#FF6900]">Dal Tadka</li>
              <li className="md:text-[#FF6900]">Sabzi (2 types)</li>
              <li className="md:text-[#FF6900]">Rice</li>
              <li className="md:text-[#FF6900]">Roti (4 pcs)</li>
              <li className="md:text-[#FF6900]">Salad</li>
              <li className="md:text-[#FF6900]">Buttermilk</li>
            </ul>

            <div id="meal-status" className="md:mt-auto md:flex md:justify-between md:items-center md:text-[9px]">

              <span className="md:text-[#79716B]  md:text-[12px]">Serves today</span>

              <strong className="md:text-[#16A34A] md:font-[400] md:text-[12px] md:flex md:justify-left md:gap-[5px]"><svg xmlns="http://www.w3.org/2000/svg" className="md:w-[12px] md:h-[12] " viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_20_918)">
              <path d="M9.99211 4.58333C10.2014 5.61059 10.0523 6.67856 9.56946 7.60915C9.08666 8.53974 8.29944 9.27669 7.33905 9.6971C6.37867 10.1175 5.30319 10.196 4.29196 9.91941C3.28072 9.64285 2.39486 9.02797 1.78211 8.17731C1.16936 7.32666 0.866749 6.29165 0.924747 5.24488C0.982746 4.19812 1.39785 3.20287 2.10082 2.42512C2.8038 1.64736 3.75217 1.13411 4.78776 0.970953C5.82336 0.807797 6.88359 1.0046 7.79165 1.52854" stroke="#00A63E" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.125 5.04166L5.5 6.41666L10.0833 1.83333" stroke="#00A63E" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_20_918">
              <rect width="11" height="11" fill="white"/>
              </clipPath>
              </defs>
              </svg> Active</strong>
            </div>

          </div>


          {/* dinner */}
          <div className="meal-card dinner-card" className="md:border md:w-full md:h-[250px] md:p-[14px] md:size-[box] md:border-[3px ] md:border-solid md:border-[#FEE685] md:rounded-[10px] md:bg-[#FFFBEB] md:flex md:flex-col">

            <div id="meal-card-top" className="md:flex md:items-center md:justify-between">

              <div id="meal-name" className="md:flex md:items-center md:gap-[10px]">
                <span className="meal-icon" className="md:text-[15px] md:text-[#FF6900]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M12.658 6.98187C12.5955 8.1393 12.1991 9.25386 11.5167 10.1908C10.8343 11.1278 9.89509 11.847 8.81265 12.2616C7.7302 12.6761 6.55085 12.7683 5.41715 12.5269C4.28345 12.2855 3.24393 11.7209 2.42427 10.9013C1.60461 10.0817 1.03989 9.04228 0.798376 7.90861C0.556862 6.77493 0.648895 5.59557 1.06335 4.51308C1.4778 3.43059 2.19694 2.49133 3.13382 1.80883C4.07069 1.12632 5.18521 0.729805 6.34263 0.667202C6.61263 0.652536 6.75397 0.973869 6.61063 1.20254C6.13123 1.96957 5.92595 2.87645 6.0283 3.77517C6.13065 4.67389 6.53458 5.51139 7.17418 6.15099C7.81378 6.79059 8.65128 7.19452 9.55 7.29687C10.4487 7.39922 11.3556 7.19394 12.1226 6.71454C12.352 6.5712 12.6726 6.71187 12.658 6.98187Z" stroke="#E17100" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg></span>
                <h3 className="md:m-0 md:text-[16px] md:font-[500]">Dinner</h3>
              </div>

              <span id="price-tag" className="md:p-[4px_9px] md:border-[1px] md:border-solid md:border-[#A6A09B] md:rounded-[12px] md:bg-[#FFFFFF] md:text-[#BB4D00] md:text-[10px]">
                ₹80
              </span>

            </div>

            <p id="meal-time" className="md:m-[15px_0_7px] md:text-[12px] md:text-[#FF6900] md:flex md:justify-left md:gap-[10px]">

            <svg xmlns="http://www.w3.org/2000/svg" className="md:w-[13px] md:h-[13px] md:mt-[2px] md:ml-[5px]" viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_20_940)">
              <path d="M5.49996 10.0833C8.03126 10.0833 10.0833 8.0313 10.0833 5.5C10.0833 2.96869 8.03126 0.916666 5.49996 0.916666C2.96865 0.916666 0.916626 2.96869 0.916626 5.5C0.916626 8.0313 2.96865 10.0833 5.49996 10.0833Z" stroke="#BB4D00" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.5 2.75V5.5L7.33333 6.41667" stroke="#BB4D00" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_20_940">
              <rect width="11" height="11" fill="white"/>
              </clipPath>
              </defs>
              </svg>  7:30 PM  9:30 PM
            </p>

            <ul id="meal-items" className="md:mt-[8px] md:pl-[17px] md:list-disc md:text-[#79716B] md:text-[12px] md:line-h-[17px]">
              <li className="md:text-[#FF6900]">Paneer/Chicken Curry</li>
              <li className="md:text-[#FF6900]">Dal Fry</li>
              <li className="md:text-[#FF6900]">Roti (4 pcs)</li>
              <li className="md:text-[#FF6900]">Rice</li>
              <li className="md:text-[#FF6900]">Pickle & Papad</li>
              <li className="md:text-[#FF6900]">Sweet (alternating days)</li>
            </ul>

            <div id="meal-status" className="md:mt-auto md:flex md:justify-between md:items-center md:text-[9px]">

              <span className="md:text-[#79716B]  md:text-[12px]">Serves today</span>

              <strong className="md:text-[#16A34A] md:text-[12px] md:font-[400] md:flex md:justify-left md:gap-[5px]"><svg xmlns="http://www.w3.org/2000/svg" className="md:w-[12px] md:h-[12] " viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_20_918)">
              <path d="M9.99211 4.58333C10.2014 5.61059 10.0523 6.67856 9.56946 7.60915C9.08666 8.53974 8.29944 9.27669 7.33905 9.6971C6.37867 10.1175 5.30319 10.196 4.29196 9.91941C3.28072 9.64285 2.39486 9.02797 1.78211 8.17731C1.16936 7.32666 0.866749 6.29165 0.924747 5.24488C0.982746 4.19812 1.39785 3.20287 2.10082 2.42512C2.8038 1.64736 3.75217 1.13411 4.78776 0.970953C5.82336 0.807797 6.88359 1.0046 7.79165 1.52854" stroke="#00A63E" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.125 5.04166L5.5 6.41666L10.0833 1.83333" stroke="#00A63E" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_20_918">
              <rect width="11" height="11" fill="white"/>
              </clipPath>
              </defs>
              </svg>  Active</strong>
            </div>

          </div>


          {/* tiffin */}
          <div className="meal-card tiffin-card" className="md:border md:w-full md:h-[250px] md:p-[14px] md:size-[box] md:border-[3px ] md:border-solid md:border-[#FEF9C2] md:rounded-[10px] md:bg-[#FEFCE8] md:flex md:flex-col">

            <div id="meal-card-top" className="md:flex md:items-center md:justify-between">

              <div id="meal-name" className="md:flex md:items-center md:gap-[10px]">
                <span id="meal-icon" className="md:text-[15px] md:text-[#FF6900]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_20_1074)">
                <path d="M7.33333 14.4867C7.53603 14.6037 7.76595 14.6653 8 14.6653C8.23405 14.6653 8.46397 14.6037 8.66667 14.4867L13.3333 11.82C13.5358 11.7031 13.704 11.535 13.821 11.3325C13.938 11.1301 13.9998 10.9005 14 10.6667V5.33332C13.9998 5.0995 13.938 4.86986 13.821 4.66743C13.704 4.465 13.5358 4.29689 13.3333 4.17999L8.66667 1.51332C8.46397 1.39629 8.23405 1.33469 8 1.33469C7.76595 1.33469 7.53603 1.39629 7.33333 1.51332L2.66667 4.17999C2.46418 4.29689 2.29599 4.465 2.17897 4.66743C2.06196 4.86986 2.00024 5.0995 2 5.33332V10.6667C2.00024 10.9005 2.06196 11.1301 2.17897 11.3325C2.29599 11.535 2.46418 11.7031 2.66667 11.82L7.33333 14.4867Z" stroke="#A65F00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 14.6667V8" stroke="#A65F00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.19336 4.66666L8.00003 7.99999L13.8067 4.66666" stroke="#A65F00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 2.84668L11 6.28001" stroke="#A65F00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_20_1074">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                  </svg>
                </span>
                <h3 className="m-0 text-[16px] font-[500]">Tiffin</h3>
              </div>

              <span id="price-tag" className="md:p-[4px_9px] md:border-[1px] md:border-solid md:border-[#A6A09B] md:rounded-[12px] md:bg-[#FFFFFF] md:text-[#BB4D00] md:text-[10px]">
                ₹90
              </span>

            </div>

            <p id="meal-time" className="md:m-[15px_0_7px] md:text-[10px] md:text-[#FF6900] md:flex md:justify-left md:gap-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="md:w-[13px] md:h-[13px] md:mt-[2px]md: ml-[5px]" viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_20_940)">
              <path d="M5.49996 10.0833C8.03126 10.0833 10.0833 8.0313 10.0833 5.5C10.0833 2.96869 8.03126 0.916666 5.49996 0.916666C2.96865 0.916666 0.916626 2.96869 0.916626 5.5C0.916626 8.0313 2.96865 10.0833 5.49996 10.0833Z" stroke="#BB4D00" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.5 2.75V5.5L7.33333 6.41667" stroke="#BB4D00" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_20_940">
              <rect width="11" height="11" fill="white"/>
              </clipPath>
              </defs>
              </svg>   Pickup: 1:00 PM / 8:00 PM
            </p>

            <ul id="meal-items" className="md:m-[8px] md:pl-[17px] md:list-disc md:text-[#79716B] md:text-[12px] md:line-h-[17px]">
              <li className="md:text-[#FFB900]">Packed Meal Box</li>
              <li className="md:text-[#FFB900]">Dal + Sabzi</li>
              <li className="md:text-[#FFB900]">Roti (4 pcs) / Rice</li>
              <li className="md:text-[#FFB900]">Salad</li>
              <li className="md:text-[#FFB900]">Sweet (Sun/Wed/Fri)</li>
            </ul>

            <div id="meal-status" className="md:mt-auto md:flex md:justify-between md:items-center md:text-[9px]">

              <span className="md:text-[#79716B] md:text-[12px]">Serves today</span>

              <strong className="md:text-[#16A34A] md:text-[12px] md:font-[400] md:flex md:justify-left md:gap-[5px]"><svg xmlns="http://www.w3.org/2000/svg" className="w-[12px] h-[12] " viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_20_918)">
              <path d="M9.99211 4.58333C10.2014 5.61059 10.0523 6.67856 9.56946 7.60915C9.08666 8.53974 8.29944 9.27669 7.33905 9.6971C6.37867 10.1175 5.30319 10.196 4.29196 9.91941C3.28072 9.64285 2.39486 9.02797 1.78211 8.17731C1.16936 7.32666 0.866749 6.29165 0.924747 5.24488C0.982746 4.19812 1.39785 3.20287 2.10082 2.42512C2.8038 1.64736 3.75217 1.13411 4.78776 0.970953C5.82336 0.807797 6.88359 1.0046 7.79165 1.52854" stroke="#00A63E" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.125 5.04166L5.5 6.41666L10.0833 1.83333" stroke="#00A63E" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_20_918">
              <rect width="11" height="11" fill="white"/>
              </clipPath>
              </defs>
              </svg>  Active</strong>
            </div>

          </div>

        </div>


        {/* today's special */}
        <div id="todays-special" className="md:m-[10px_18px_16px] md:p-[10px_13px] md:border-[1px] md:border-solid md:border-[#A6A09B] md:rounded-[9px] md:bg-[#FFF085] md:size-[box]">

          <div id="special-title" className=" md:font-[400] md:text-[10px] md:flex md:items-center md:gap-[6px]">

            <span className="md:text-[#FF6900]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <g clip-path="url(#clip0_20_1141)">
            <path d="M7.00002 12.8334C10.2217 12.8334 12.8334 10.2217 12.8334 7.00002C12.8334 3.77836 10.2217 1.16669 7.00002 1.16669C3.77836 1.16669 1.16669 3.77836 1.16669 7.00002C1.16669 10.2217 3.77836 12.8334 7.00002 12.8334Z" stroke="#FE9A00" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 9.33333V7" stroke="#FE9A00" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 4.66669H7.00583" stroke="#FE9A00" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_20_1141">
            <rect width="14" height="14" fill="white"/>
            </clipPath>
            </defs>
            </svg></span>
            <span>Today's Special</span>
          </div>

          <p className=" md:m-[5px_0_0] md:pl-[19px] md:text-[#BB4D00] md:text-[10px] md:line-h-[15px]">
            Sunday special: Shrikhand + Puri added to Lunch.
            Chicken curry available for Dinner.
          </p>

        </div>

      </div>

    </div>
  );
};

export default AllItems;