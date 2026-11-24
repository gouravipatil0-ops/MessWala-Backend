import { useState } from "react";
// import "./EditItemMenu.css";

const EditItemMenu = () => {
  const [selectedDay, setSelectedDay] = useState("Today");

  const [selectedDate, setSelectedDate] = useState(
    new Date(2026, 7, 10)
  );

  const [meals, setMeals] = useState({
    Breakfast: {
      price: "60",
      time: "7:00 AM – 9:30 AM",
      items: [
        "Poha / Upma",
        "Bread & Butter",
        "Boiled Eggs (2)",
        "Chai / Milk",
        "Seasonal Fruit",
      ],
    },

    Lunch: {
      price: "80",
      time: "12:00 PM – 2:30 PM",
      items: [
        "Dal Tadka",
        "Sabzi (2 types)",
        "Rice",
        "Roti (4 pcs)",
        "Salad",
        "Buttermilk",
      ],
    },

    Dinner: {
      price: "80",
      time: "7:30 PM – 9:30 PM",
      items: [
        "Paneer/Chicken Curry",
        "Dal Fry",
        "Roti (4 pcs)",
        "Rice",
        "Pickle & Papad",
        "Sweet (alternating days)",
      ],
    },

    Tiffin: {
      price: "90",
      time: "Pickup: 1:00 PM / 8:00 PM",
      items: [
        "Packed Meal Box",
        "Dal + Sabzi",
        "Roti (4 pcs) / Rice",
        "Salad",
        "Sweet (Sun/Wed/Fri)",
      ],
    },
  });

  const [special, setSpecial] = useState(
    "Sunday special: Shrikhand + Puri added to Lunch. Chicken curry available for Dinner."
  );

  const [editingSpecial, setEditingSpecial] = useState(false);

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
          const newDate = new Date(
            Number(yearValue),
            Number(monthValue) - 1,
            Number(dayValue)
          );

          if (!isNaN(newDate.getTime())) {
            setSelectedDate(newDate);
          }
        }
      }
    }
  };

  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const updateItem = (mealName, itemIndex, value) => {
    setMeals((prev) => ({
      ...prev,
      [mealName]: {
        ...prev[mealName],
        items: prev[mealName].items.map((item, index) =>
          index === itemIndex ? value : item
        ),
      },
    }));
  };

  const updatePrice = (mealName, value) => {
    setMeals((prev) => ({
      ...prev,
      [mealName]: {
        ...prev[mealName],
        price: value,
      },
    }));
  };

  const addItem = (mealName) => {
    setMeals((prev) => ({
      ...prev,
      [mealName]: {
        ...prev[mealName],
        items: [...prev[mealName].items, "New Item"],
      },
    }));
  };

  const deleteItem = (mealName, itemIndex) => {
    setMeals((prev) => ({
      ...prev,
      [mealName]: {
        ...prev[mealName],
        items: prev[mealName].items.filter(
          (_, index) => index !== itemIndex
        ),
      },
    }));
  };

  const handleSaveMenu = () => {
    alert("Menu saved successfully!");
  };

  return (
    <div className="edit-item-menu-page" className="md:w-[1155px] md:h-auto md:ml-[75px] md:p-[2.1875rem_1.25rem_1.875rem_1.50rem]  md:text-[#2C1810]  md:mt-[67px]">

      {/* page title */}
      <div className="edit-page-title" className="md:flex md:items-center md:gap-[20px] " >
        <span className="text-[#FF6900] text-[22px]"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 18 18" fill="none">
        <path d="M9.74963 3.74988H15.7494" stroke="#FF6900" stroke-width="1.49994" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.74963 8.99963H15.7494" stroke="#FF6900" stroke-width="1.49994" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.74963 14.2495H15.7494" stroke="#FF6900" stroke-width="1.49994" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.24994 12.7495L3.74988 14.2495L6.74976 11.2496" stroke="#FF6900" stroke-width="1.49994" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.24994 5.24982L3.74988 6.74976L6.74976 3.74988" stroke="#FF6900" stroke-width="1.49994" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></span>
        <h1 className=" md:m-0  md:text-[22px]  md:font-medium">Edit Item Menu</h1>
      </div>


      {/* mess menu box */}
      <div className="edit-menu-box" className="md:w-[610px]  md:w-full md:bg-[#FFFFFF] md:mt-[30px] md:rounded-[14px] md:overflow-hidden md:shadow-[0_0_6px_rgba(249,115,22,0.5)]">

        {/* header */}
        <div className="edit-menu-header" className=" md:col-span-full  md:h-[72px]  md:px-[18px]  md:py-3  md:flex  md:items-center  md:justify-between  md:bg-[#FFFBF0]  md:box-border">

          <div className="edit-menu-info" className=" md:flex  md:items-center  md:gap-[10px]">

            <div className="edit-menu-icon" className=" md:w-9  md:h-9  md:flex  md:items-center  md:justify-center  md:rounded-[10px]  md:bg-[#FFF085]  md:text-[#FF6900]  md:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.49542 3.53973V14.8669" stroke="#FF6900" stroke-width="1.4159" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.1597 13.451C14.5351 13.4509 14.8951 13.3016 15.1604 13.0361C15.4258 12.7706 15.5749 12.4105 15.5749 12.0351V3.53974C15.5749 3.16434 15.4258 2.80431 15.1604 2.5388C14.8951 2.27329 14.5351 2.12403 14.1597 2.12384L11.3272 2.12526C10.7778 2.12509 10.2359 2.25282 9.74437 2.49832C9.25287 2.74383 8.82526 3.10038 8.49539 3.53974C8.16568 3.10012 7.73813 2.7433 7.24662 2.49754C6.7551 2.25178 6.21312 2.12384 5.66359 2.12384H2.83179C2.45627 2.12384 2.09613 2.27302 1.8306 2.53855C1.56507 2.80408 1.41589 3.16422 1.41589 3.53974V12.0351C1.41589 12.4105 1.56497 12.7706 1.83035 13.0361C2.09573 13.3016 2.45569 13.4509 2.83109 13.451H5.66359C6.21312 13.451 6.7551 13.579 7.24662 13.8247C7.73813 14.0705 8.16568 14.4273 8.49539 14.8669C8.82511 14.4273 9.25266 14.0705 9.74417 13.8247C10.2357 13.579 10.7777 13.451 11.3272 13.451H14.1597Z" stroke="#FF6900" stroke-width="1.4159" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <div>
              <h2 className=" md:m-0  md:text-[14px]  md:font-medium">Mess Menu</h2>

              <p className=" md:mt-[3px]  md:mb-0  md:text-[10px]  md:text-[#FF6900]">
                Daily meal plan — {formattedDate}
              </p>
            </div>

          </div>


          {/* menu actions */}
          <div className="edit-menu-actions" className=" md:flex  md:items-center  md:gap-[10px] ">

            <div className="edit-menu-tabs" className=" md:flex  md:border  md:border-[#A6A09B]   md:rounded-[9px]  md:overflow-hidden  md:bg-white">

              <button
                className={`edit-tab  md:h-[30px]  md:px-[14px]  md:border-0  md:bg-white  md:text-[#79716B]  md:text-[10px] ${
                  selectedDay === "Today" ? "active  md:bg-[#FF6900]  md:text-white" : ""
                }`}
                type="button"
                onClick={() => changeDay("Today")}
              >
                Today
              </button>

              <button
                className={`edit-tab  md:h-[30px]  md:px-[14px]  md:border-0  md:bg-white  md:text-[#79716B]  md:text-[10px] ${
                  selectedDay === "Tomorrow" ? "active  md:bg-[#FF6900]  md:text-white" : ""
                }`}
                type="button"
                onClick={() => changeDay("Tomorrow")}
              >
                Tomorrow
              </button>

              <button
                className={`edit-tab  md:h-[30px]  md:px-[14px]  md:border-0  md:bg-white  md:text-[#79716B]  md:text-[10px] ${
                  selectedDay === "Custom" ? "active  md:bg-[#FF6900]  md:text-white" : ""
                }`}
                type="button"
                onClick={() => changeDay("Custom")}
              >
                Custom
              </button>

            </div>


            <button
              className="save-menu-button"
              className=" md:h-[30px]  md:px-[13px]  md:flex  md:items-center  md:justify-center  md:gap-[5px]  md:whitespace-nowrap  md:border  md:border-[#A6A09B]  md:rounded-[9px]  md:bg-[#FF6900]  md:text-[#f9f5f2]  md:text-[10px]  md:cursor-pointer  md:transition-[background-color,color]  md:duration-200  md:ease-in-out  md:hover:bg-[#FFB900]  md:hover:text-[#2C1810]"
              type="button"
              onClick={handleSaveMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <g clip-path="url(#clip0_218_1814)">
              <path d="M10.5784 3.40319C10.8425 3.13912 10.991 2.78093 10.991 2.40743C10.9911 2.03393 10.8427 1.6757 10.5787 1.41157C10.3146 1.14743 9.9564 0.999009 9.5829 0.998962C9.20939 0.998916 8.85117 1.14724 8.58703 1.41132L1.91948 8.08037C1.80349 8.19602 1.7177 8.33842 1.66969 8.49503L1.00973 10.6692C0.996814 10.7125 0.995839 10.7584 1.0069 10.8021C1.01797 10.8458 1.04066 10.8857 1.07257 10.9175C1.10448 10.9494 1.14443 10.972 1.18816 10.983C1.23189 10.994 1.27779 10.993 1.32097 10.98L3.49569 10.3205C3.65215 10.2729 3.79454 10.1877 3.91036 10.0722L10.5784 3.40319Z" stroke="white" stroke-width="0.999183" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.4939 2.49799L9.49226 4.49635" stroke="white" stroke-width="0.999183" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_218_1814">
              <rect width="11.9902" height="11.9902" fill="white"/>
              </clipPath>
              </defs>
              </svg> Save Menu
            </button>

          </div>

        </div>


        {/* meal cards */}
        <div className="edit-meal-grid" className="  md:mt-[20px]  md:col-span-full  md:grid  md:grid-cols-2  md:gap-[14px]  md:px-4  md:pb-[14px]  md:box-border">

          {/* breakfast */}
          <div className="edit-meal-card breakfast-edit-card" className=" md:min-w-0 p-3  md:border  md:border-[#A6A09B]  md:rounded-[10px]  md:bg-[#FFFBF0]  md:box-border">

            <div className="edit-meal-top" className=" md:flex  md:items-center  md:justify-between">

              <div className="edit-meal-name" className=" md:flex  md:items-center  md:gap-2">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_218_1823)">
                <path d="M7.99814 10.6642C9.47056 10.6642 10.6642 9.47056 10.6642 7.99814C10.6642 6.52572 9.47056 5.33209 7.99814 5.33209C6.52572 5.33209 5.33209 6.52572 5.33209 7.99814C5.33209 9.47056 6.52572 10.6642 7.99814 10.6642Z" stroke="#D08700" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99817 1.33301V2.66603" stroke="#D08700" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99817 13.3303V14.6633" stroke="#D08700" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.28589 3.28589L4.22567 4.22567" stroke="#D08700" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.7706 11.7706L12.7104 12.7104" stroke="#D08700" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.33301 7.99817H2.66603" stroke="#D08700" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.3303 7.99817H14.6633" stroke="#D08700" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.22567 11.7706L3.28589 12.7104" stroke="#D08700" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.7104 3.28589L11.7706 4.22567" stroke="#D08700" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_218_1823">
                <rect width="15.9963" height="15.9963" fill="white"/>
                </clipPath>
                </defs>
                </svg></span>
                <h3 className=" md:m-0  md:text-[16px]  md:font-medium  md:text-[#2C1810]">Breakfast</h3>
              </div>

              <input
                className="edit-price"
                className=" md:!w-[42px]  md:!h-[22px]   md:!m-0  md:!px-[5px]  md:text-center  md:text-[#BB4D00]  md:!border-[#FFB900]  md:!rounded-[10px]"
                type="text"
                value={`₹${meals.Breakfast.price}`}
                onChange={(e) =>
                  updatePrice(
                    "Breakfast",
                    e.target.value.replace("₹", "")
                  )
                }
              />

            </div>

            <p className="edit-meal-time" className=" md:my-2 md:mb-[10px]  md:flex  md:justify-start  md:gap-[5px]  md:text-[12px]  md:text-[#FF6900]">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_218_1841)">
              <path d="M5.49786 10.0794C8.02818 10.0794 10.0794 8.02818 10.0794 5.49786C10.0794 2.96755 8.02818 0.916321 5.49786 0.916321C2.96755 0.916321 0.916321 2.96755 0.916321 5.49786C0.916321 8.02818 2.96755 10.0794 5.49786 10.0794Z" stroke="#BB4D00" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.49786 2.7489V5.49783L7.33048 6.41413" stroke="#BB4D00" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_218_1841">
              <rect width="10.9957" height="10.9957" fill="white"/>
              </clipPath>
              </defs>
              </svg>
               {meals.Breakfast.time}
            </p>

            {meals.Breakfast.items.map((item, index) => (
              <div
                className="edit-item-row"
                className=" md:flex  md:items-center  md:gap-[5px]  md:w-full"
                key={index}
              >
                <input
                  type="text"
                  className=" md:flex-1  md:min-w-0 md:h-[30px]  md:mb-[5px]  md:px-2  md:border  md:border-[#FFB900]  md:rounded-[5px]  md:bg-white  md:text-[14px] md:font-[400] md:fonnt-['Nunito']  md:box-border"
                  value={item}
                  onChange={(e) =>
                    updateItem(
                      "Breakfast",
                      index,
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  className=" md:w-[22px]  md:h-[22px]  md:shrink-0  md:mb-[5px]  md:border  md:border-[#A6A09B]  md:rounded-[5px]  md:bg-white  md:text-[#BB4D00]  md:cursor-pointer  md:hover:bg-[#FFF085]"
                  onClick={() =>
                    deleteItem("Breakfast", index)
                  }
                >
                  ×
                </button>
              </div>
            ))}
               
            <button
              className="add-item-button"
              className=" md:w-full  md:h-[30px]  md:mt-[10px]  md:border  md:border-dashed  md:border-[#A6A09B]  md:rounded-[7px]  md:bg-[#FFFBF0]  md:text-[#BB4D00]  md:text-[14px]  md:cursor-pointer  md:hover:bg-[#FFF085]"
              type="button"
              onClick={() => addItem("Breakfast")}
            >
              + Add Item
            </button>

            <div className="edit-meal-status" className=" md:mt-[15px]  md:flex  md:items-center  md:justify-between  md:text-[9px]">
              <span className="md:text-[#79716B]">Serves today</span>
              <strong className=" md:flex  md:items-center  md:justify-start  md:gap-[5px]  md:text-[9px]  md:font-medium  md:text-[#16A34A]"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_218_1887)">
              <path d="M9.9882 4.58159C10.1974 5.60845 10.0483 6.67601 9.56571 7.60623C9.0831 8.53645 8.29618 9.27311 7.33618 9.69336C6.37617 10.1136 5.30111 10.192 4.29027 9.91559C3.27943 9.63913 2.39392 9.02449 1.78141 8.17417C1.16889 7.32385 0.866403 6.28924 0.924378 5.24288C0.982354 4.19653 1.39729 3.20167 2.1 2.42422C2.8027 1.64677 3.75069 1.13372 4.78589 0.970626C5.82108 0.807534 6.88089 1.00426 7.7886 1.52799" stroke="#00A63E" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.12341 5.03972L5.49788 6.41418L10.0794 1.83264" stroke="#00A63E" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_218_1887">
              <rect width="10.9957" height="10.9957" fill="white"/>
              </clipPath>
              </defs>
              </svg> Active</strong>
            </div>

          </div>


          {/* lunch */}
          <div className="edit-meal-card lunch-edit-card" className=" md:min-w-0 p-3  md:border  md:border-[#A6A09B]  md:rounded-[10px]  md:bg-[#FFFBF0]  md:box-border">

            <div className="edit-meal-top" className=" md:flex  md:items-center  md:justify-between">

              <div className="edit-meal-name" className=" md:flex  md:items-center  md:gap-2">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_218_1898)">
                  <path d="M1.99951 1.33301V5.9986C1.99951 6.73176 2.59937 7.33162 3.33254 7.33162H5.99859C6.35213 7.33162 6.69119 7.19118 6.94118 6.94119C7.19117 6.6912 7.33161 6.35214 7.33161 5.9986V1.33301" stroke="#FF6900" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.66553 1.33301V14.6633" stroke="#FF6900" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.9967 9.99767V1.33301C13.1129 1.33301 12.2652 1.68412 11.6403 2.30909C11.0153 2.93407 10.6642 3.78172 10.6642 4.66557V8.66465C10.6642 9.39781 11.264 9.99767 11.9972 9.99767H13.9967ZM13.9967 9.99767V14.6633" stroke="#FF6900" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_218_1898">
                  <rect width="15.9963" height="15.9963" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg></span>
                <h3  className=" md:m-0 text-[16px]  md:font-medium  md:text-[#2C1810]">Lunch</h3>
              </div>

              <input
                className="edit-price"
                className=" md:!w-[42px]  md:!h-[22px]  md:!m-0 !px-[5px]  md:text-center  md:text-[#BB4D00]  md:!border-[#FFB900]  md:!rounded-[10px]"
                type="text"
                value={`₹${meals.Lunch.price}`}
                onChange={(e) =>
                  updatePrice(
                    "Lunch",
                    e.target.value.replace("₹", "")
                  )
                }
              />

            </div>

            <p className="edit-meal-time" className=" md:my-2  md:mb-[10px]  md:flex  md:justify-start  md:gap-[5px]  md:text-[12px]  md:text-[#FF6900]">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_218_1841)">
              <path d="M5.49786 10.0794C8.02818 10.0794 10.0794 8.02818 10.0794 5.49786C10.0794 2.96755 8.02818 0.916321 5.49786 0.916321C2.96755 0.916321 0.916321 2.96755 0.916321 5.49786C0.916321 8.02818 2.96755 10.0794 5.49786 10.0794Z" stroke="#BB4D00" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.49786 2.7489V5.49783L7.33048 6.41413" stroke="#BB4D00" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_218_1841">
              <rect width="10.9957" height="10.9957" fill="white"/>
              </clipPath>
              </defs>
              </svg>
               {meals.Lunch.time}
            </p>

            {meals.Lunch.items.map((item, index) => (
              <div
                className="edit-item-row"
                className=" md:flex  md:items-center  md:gap-[5px]  md:w-full"
                key={index}
              >
                <input
                  type="text"
                  className=" md:flex-1  md:min-w-0 md:h-[30px]  md:mb-[5px]  md:px-2  md:border  md:border-[#FFB900]  md:rounded-[5px]  md:bg-white  md:text-[14px] md:font-[400] md:fonnt-['Nunito']  md:box-border"
                  value={item}
                  onChange={(e) =>
                    updateItem(
                      "Lunch",
                      index,
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  className=" md:w-[22px]  md:h-[22px]  md:shrink-0  md:mb-[5px]  md:border  md:border-[#A6A09B]  md:rounded-[5px]  md:bg-white  md:text-[#BB4D00]  md:cursor-pointer  md:hover:bg-[#FFF085]"
                  onClick={() =>
                    deleteItem("Lunch", index)
                  }
                >
                  ×
                </button>
              </div>
            ))}

            <button
              className="add-item-button"
              className=" md:w-full  md:h-[25px]  md:mt-[10px]  md:border  md:border-dashed  md:border-[#A6A09B]  md:rounded-[7px]  md:bg-[#FFFBF0]  md:text-[#BB4D00]  md:text-[10px]  md:cursor-pointer  md:hover:bg-[#FFF085]"
              type="button"
              onClick={() => addItem("Lunch")}
            >
              + Add Item
            </button>

            <div className="edit-meal-status" className=" md:mt-[15px]  md:flex  md:items-center  md:justify-between  md:text-[9px]">
              <span className="md:text-[#79716B]">Serves today</span>
              <strong className=" md:flex  md:items-center  md:justify-start  md:gap-[5px]  md:text-[14px]  md:font-medium  md:text-[#16A34A]"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_218_1887)">
              <path d="M9.9882 4.58159C10.1974 5.60845 10.0483 6.67601 9.56571 7.60623C9.0831 8.53645 8.29618 9.27311 7.33618 9.69336C6.37617 10.1136 5.30111 10.192 4.29027 9.91559C3.27943 9.63913 2.39392 9.02449 1.78141 8.17417C1.16889 7.32385 0.866403 6.28924 0.924378 5.24288C0.982354 4.19653 1.39729 3.20167 2.1 2.42422C2.8027 1.64677 3.75069 1.13372 4.78589 0.970626C5.82108 0.807534 6.88089 1.00426 7.7886 1.52799" stroke="#00A63E" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.12341 5.03972L5.49788 6.41418L10.0794 1.83264" stroke="#00A63E" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_218_1887">
              <rect width="10.9957" height="10.9957" fill="white"/>
              </clipPath>
              </defs>
              </svg> Active</strong>
            </div>

          </div>


          {/* dinner */}
          <div className="edit-meal-card dinner-edit-card" className=" md:min-w-0 p-3  md:border  md:border-[#A6A09B]  md:rounded-[10px]  md:bg-[#FFFBF0]  md:box-border">

            <div className="edit-meal-top" className=" md:flex  md:items-center  md:justify-between">

              <div className="edit-meal-name" className=" md:flex  md:items-center  md:gap-2">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.9867 8.32211C13.9243 9.47928 13.528 10.5936 12.8457 11.5303C12.1635 12.467 11.2245 13.1861 10.1423 13.6006C9.06011 14.0151 7.88103 14.1072 6.74759 13.8659C5.61415 13.6245 4.57488 13.06 3.75541 12.2406C2.93594 11.4213 2.37135 10.3821 2.12989 9.24864C1.88843 8.11522 1.98044 6.93613 2.3948 5.8539C2.80916 4.77166 3.52813 3.83261 4.46479 3.15027C5.40145 2.46792 6.51571 2.0715 7.67286 2.00891C7.9428 1.99424 8.0841 2.3155 7.9408 2.54412C7.4615 3.31098 7.25627 4.21764 7.3586 5.11616C7.46093 6.01467 7.86477 6.85197 8.50422 7.49142C9.14367 8.13088 9.98097 8.53472 10.8795 8.63704C11.778 8.73937 12.6847 8.53414 13.4515 8.05484C13.6808 7.91154 14.0014 8.05218 13.9867 8.32211Z" stroke="#E17100" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg></span>
                <h3  className=" md:m-0  md:text-[16px]  md:font-medium  md:text-[#2C1810]">Dinner</h3>
              </div>

              <input
                className="edit-price"
                className=" md:!w-[42px]  md:!h-[22px]  md:!m-0  md:!px-[5px]  md:text-center  md:text-[#BB4D00]  md:!border-[#FFB900]  md:!rounded-[10px]"
                type="text"
                value={`₹${meals.Dinner.price}`}
                onChange={(e) =>
                  updatePrice(
                    "Dinner",
                    e.target.value.replace("₹", "")
                  )
                }
              />

            </div>

            <p className="edit-meal-time" className=" md:my-2  md:mb-[10px]  md:flex  md:justify-start  md:gap-[5px]  md:text-[12px]  md:text-[#FF6900]">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_218_1841)">
              <path d="M5.49786 10.0794C8.02818 10.0794 10.0794 8.02818 10.0794 5.49786C10.0794 2.96755 8.02818 0.916321 5.49786 0.916321C2.96755 0.916321 0.916321 2.96755 0.916321 5.49786C0.916321 8.02818 2.96755 10.0794 5.49786 10.0794Z" stroke="#BB4D00" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.49786 2.7489V5.49783L7.33048 6.41413" stroke="#BB4D00" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_218_1841">
              <rect width="10.9957" height="10.9957" fill="white"/>
              </clipPath>
              </defs>
              </svg>
               {meals.Dinner.time}
            </p>

            {meals.Dinner.items.map((item, index) => (
              <div
                className="edit-item-row"
                className=" md:flex  md:items-center  md:gap-[5px]  md:w-full"
                key={index}
              >
                <input
                  type="text"
                  className=" md:flex-1  md:min-w-0 md:h-[30px]  md:mb-[5px]  md:px-2  md:border  md:border-[#FFB900]  md:rounded-[5px]  md:bg-white  md:text-[14px] md:font-[400] md:fonnt-['Nunito']  md:box-border"
                  value={item}
                  onChange={(e) =>
                    updateItem(
                      "Dinner",
                      index,
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  className=" md:w-[22px]  md:h-[22px]  md:shrink-0  md:mb-[5px]  md:border  md:border-[#A6A09B]  md:rounded-[5px]  md:bg-white  md:text-[#BB4D00]  md:cursor-pointer  md:hover:bg-[#FFF085]"
                  onClick={() =>
                    deleteItem("Dinner", index)
                  }
                >
                 × 
                </button>
              </div>
            ))}

            <button
              className="add-item-button"
              className=" md:w-full  md:h-[30px]  md:mt-[10px]  md:border  md:border-dashed  md:border-[#A6A09B]  md:rounded-[7px]  md:bg-[#FFFBF0]  md:text-[#BB4D00]  md:text-[14px]  md:cursor-pointer  md:hover:bg-[#FFF085]"
              type="button"
              onClick={() => addItem("Dinner")}
            >
              + Add Item
            </button>

            <div className="edit-meal-status" className=" md:mt-[15px]  md:flex  md:items-center  md:justify-between  md:text-[9px]">
              <span className=" md:text-[#79716B]">Serves today</span>
              <strong className=" md:flex  md:items-center  md:justify-start  md:gap-[5px]  md:text-[9px]  md:font-medium  md:text-[#16A34A]"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_218_1887)">
              <path d="M9.9882 4.58159C10.1974 5.60845 10.0483 6.67601 9.56571 7.60623C9.0831 8.53645 8.29618 9.27311 7.33618 9.69336C6.37617 10.1136 5.30111 10.192 4.29027 9.91559C3.27943 9.63913 2.39392 9.02449 1.78141 8.17417C1.16889 7.32385 0.866403 6.28924 0.924378 5.24288C0.982354 4.19653 1.39729 3.20167 2.1 2.42422C2.8027 1.64677 3.75069 1.13372 4.78589 0.970626C5.82108 0.807534 6.88089 1.00426 7.7886 1.52799" stroke="#00A63E" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.12341 5.03972L5.49788 6.41418L10.0794 1.83264" stroke="#00A63E" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_218_1887">
              <rect width="10.9957" height="10.9957" fill="white"/>
              </clipPath>
              </defs>
              </svg> Active</strong>
            </div>

          </div>


          {/* tiffin */}
          <div className="edit-meal-card tiffin-edit-card" className=" md:min-w-0  md:p-3  md:border  md:border-[#A6A09B]  md:rounded-[10px]  md:bg-[#FFFBF0]  md:box-border">

            <div className="edit-meal-top" className=" md:flex  md:items-center  md:justify-between">

              <div className="edit-meal-name" className=" md:flex  md:items-center  md:gap-2">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clip-path="url(#clip0_218_2046)">
                  <path d="M7.33161 14.4833C7.53426 14.6003 7.76413 14.6619 7.99812 14.6619C8.23212 14.6619 8.46199 14.6003 8.66464 14.4833L13.3302 11.8172C13.5327 11.7003 13.7008 11.5323 13.8178 11.3299C13.9348 11.1275 13.9965 10.8979 13.9967 10.6642V5.33206C13.9965 5.0983 13.9348 4.86871 13.8178 4.66632C13.7008 4.46394 13.5327 4.29587 13.3302 4.17899L8.66464 1.51294C8.46199 1.39594 8.23212 1.33435 7.99812 1.33435C7.76413 1.33435 7.53426 1.39594 7.33161 1.51294L2.66602 4.17899C2.46358 4.29587 2.29543 4.46394 2.17844 4.66632C2.06146 4.86871 1.99975 5.0983 1.99951 5.33206V10.6642C1.99975 10.8979 2.06146 11.1275 2.17844 11.3299C2.29543 11.5323 2.46358 11.7003 2.66602 11.8172L7.33161 14.4833Z" stroke="#A65F00" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.99817 14.6633V7.99817" stroke="#A65F00" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.19287 4.66553L7.99819 7.99809L13.8035 4.66553" stroke="#A65F00" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.9989 2.84607L10.9975 6.27861" stroke="#A65F00" stroke-width="1.33302" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_218_2046">
                  <rect width="15.9963" height="15.9963" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg></span>
                <h3 className=" md:m-0  md:text-[16px]  md:font-medium  md:text-[#2C1810]">Tiffin</h3>
              </div>

              <input
                className="edit-price"
                className=" md:!w-[42px]  md:!h-[22px]  md:!m-0  md:!px-[5px]  md:text-center  md:text-[#BB4D00]  md:!border-[#FFB900]  md:!rounded-[10px]"
                type="text"
                value={`₹${meals.Tiffin.price}`}
                onChange={(e) =>
                  updatePrice(
                    "Tiffin",
                    e.target.value.replace("₹", "")
                  )
                }
              />

            </div>

            <p className="edit-meal-time" className=" md:my-2  md:mb-[10px]  md:flex  md:justify-start  md:gap-[5px]  md:text-[12px]  md:text-[#FF6900]">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_218_1841)">
              <path d="M5.49786 10.0794C8.02818 10.0794 10.0794 8.02818 10.0794 5.49786C10.0794 2.96755 8.02818 0.916321 5.49786 0.916321C2.96755 0.916321 0.916321 2.96755 0.916321 5.49786C0.916321 8.02818 2.96755 10.0794 5.49786 10.0794Z" stroke="#BB4D00" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.49786 2.7489V5.49783L7.33048 6.41413" stroke="#BB4D00" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_218_1841">
              <rect width="10.9957" height="10.9957" fill="white"/>
              </clipPath>
              </defs>
              </svg>
               {meals.Tiffin.time}
            </p>

            {meals.Tiffin.items.map((item, index) => (
              <div
                className="edit-item-row"
                className=" md:flex  md:items-center  md:gap-[5px]  md:w-full"
                key={index}
              >
                <input
                  type="text"
                  className=" md:flex-1  md:min-w-0 md:h-[30px]  md:mb-[5px]  md:px-2  md:border  md:border-[#FFB900]  md:rounded-[5px]  md:bg-white  md:text-[14px] md:font-[400] md:fonnt-['Nunito']  md:box-border"
                  value={item}
                  onChange={(e) =>
                    updateItem(
                      "Tiffin",
                      index,
                      e.target.value
                    )
                  }
                />

                <button
                  type="button"
                  className=" md:w-[22px]  md:h-[22px]  md:shrink-0  md:mb-[5px]  md:border  md:border-[#A6A09B]  md:rounded-[5px]  md:bg-white  md:text-[#BB4D00]  md:cursor-pointer  md:hover:bg-[#FFF085]"
                  onClick={() =>
                    deleteItem("Tiffin", index)
                  }
                >
                  ×
                </button>
              </div>
            ))}

            <button
              className="add-item-button"
              className=" md:w-full  md:h-[30px]  md:mt-[10px]  md:border  md:border-dashed  md:border-[#A6A09B]  md:rounded-[7px]  md:bg-[#FFFBF0]  md:text-[#BB4D00]  md:text-[14px]  md:cursor-pointer  md:hover:bg-[#FFF085]"
              type="button"
              onClick={() => addItem("Tiffin")}
            >
              + Add Item
            </button>

            <div className="edit-meal-status" className=" md:mt-[15px]  md:flex  md:items-center  md:justify-between  md:text-[9px]">
              <span className=" md:text-[#79716B]">Serves today</span>
              <strong className=" md:flex  md:items-center  md:justify-start  md:gap-[5px]  md:text-[9px]  md:font-medium  md:text-[#16A34A]"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <g clip-path="url(#clip0_218_1887)">
              <path d="M9.9882 4.58159C10.1974 5.60845 10.0483 6.67601 9.56571 7.60623C9.0831 8.53645 8.29618 9.27311 7.33618 9.69336C6.37617 10.1136 5.30111 10.192 4.29027 9.91559C3.27943 9.63913 2.39392 9.02449 1.78141 8.17417C1.16889 7.32385 0.866403 6.28924 0.924378 5.24288C0.982354 4.19653 1.39729 3.20167 2.1 2.42422C2.8027 1.64677 3.75069 1.13372 4.78589 0.970626C5.82108 0.807534 6.88089 1.00426 7.7886 1.52799" stroke="#00A63E" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.12341 5.03972L5.49788 6.41418L10.0794 1.83264" stroke="#00A63E" stroke-width="0.916308" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_218_1887">
              <rect width="10.9957" height="10.9957" fill="white"/>
              </clipPath>
              </defs>
              </svg> Active</strong>
            </div>

          </div>

        </div>


        {/* todays special */}
        <div className="edit-todays-special" className=" md:col-span-full  md:mx-4  md:mt-[14px]  md:mb-4 p-3  md:bg-[#FFF085]  md:border  md:border-[#A6A09B]  md:rounded-[9px]  md:box-border">

          <div className="special-header" className=" md:flex  md:items-center  md:justify-between">

            <div className="special-title" className=" md:flex  md:items-center  md:gap-[6px]  md:text-[10px]  md:font-medium  md:text-[#2C1810]">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clip-path="url(#clip0_218_2115)">
              <path d="M6.99668 12.8272C10.2168 12.8272 12.8272 10.2168 12.8272 6.99668C12.8272 3.77656 10.2168 1.16614 6.99668 1.16614C3.77656 1.16614 1.16614 3.77656 1.16614 6.99668C1.16614 10.2168 3.77656 12.8272 6.99668 12.8272Z" stroke="#FE9A00" stroke-width="1.16611" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.99664 9.32892V6.9967" stroke="#FE9A00" stroke-width="1.16611" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.99664 4.66443H7.00247" stroke="#FE9A00" stroke-width="1.16611" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_218_2115">
              <rect width="13.9933" height="13.9933" fill="white"/>
              </clipPath>
              </defs>
              </svg></span>
              <span>Today's Special</span>
            </div>

            <button
              className="edit-special-button"
              className=" md:px-[9px]  md:py-1  md:border  md:border-[#A6A09B]  md:rounded-[7px]  md:bg-white  md:text-[#BB4D00]  md:text-[9px]  md:cursor-pointer"
              type="button"
              onClick={() =>
                setEditingSpecial(!editingSpecial)
              }
            >
               {editingSpecial ? "Done" : "Edit"}
            </button>

          </div>


          <textarea
            value={special}
            readOnly={!editingSpecial}
            className=" md:w-full  md:min-h-[45px]  md:mt-2  md:px-[9px]  md:py-[7px]  md:box-border  md:resize-none  md:border  md:border-[#A6A09B]  md:rounded-[7px]  md:bg-white  md:text-[#BB4D00]  md:text-[10px]  md:leading-[15px]  md:outline-none"
            onChange={(e) =>
              setSpecial(e.target.value)
            }
          />

        </div>

      </div>

    </div>
  );
};

export default EditItemMenu;