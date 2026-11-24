import { useState } from "react";
// import "./AddNewCustomer.css";
import "../Rutuja-style/AddNewCustomer.css";

const AddNewCustomer = ({ onClose }) => {
  const [plan, setPlan] = useState("Monthly");
  const [mealType, setMealType] = useState("Single Meal");
  const [meals, setMeals] = useState([]);
  const [couponCount, setCouponCount] = useState(30);
  const [paymentMethod, setPaymentMethod] = useState("Cash");

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    startDate: "",
    endDate: "",
    planPrice: "0",
    discount: "0",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleMeal = (meal) => {
    setMeals((prev) =>
      prev.includes(meal)
        ? prev.filter((item) => item !== meal)
        : [...prev, meal]
    );
  };

  const handleSave = () => {
    if (!formData.fullName || !formData.mobile) {
      alert("Please enter Full Name and Mobile Number");
      return;
    }

    const customerData = {
      ...formData,
      plan,
      mealType,
      meals,
      couponCount,
      paymentMethod,
    };

    console.log("New Customer:", customerData);

    alert("Customer added successfully!");
    onClose();
  };

  const couponOptions = [10, 15, 20, 25, 30, 40, 50, 60];

  return (
    <div id="add-customer-overlay" className="md:fixed md:inset-0 md:z-index-[9999] md:flex md:items-center md:justify-center md:p-[8px] md:box-border md:bg-[rgba(0,0,0,0.72)] md:mt-[60px]">

      <div id="add-customer-modal" className="md:w-[480px] md:h-[554px] md:max-w-[calc(100vw-20px)] md:max-h-[calc(100vw-20px)] md:flex md:flex-col md:box-border md:bg-[#ffffff] md:rounded-[8px] md:overflow-hidden md:text-[#2C1810] md:font-['Nunito'] md:shadow-[0_10px_30px] md:shadow-[rgba(0,0,0,0.28)]">

        {/* Header */}
        <div id="add-customer-header" className=" md:h-[45px] md:flex md:items-center md:justify-between  md:p-[0_10px] md:box-border md:border-b-[1px] md:border-b-solid md:border-b-[#EEE7DD]">
          <div id="add-customer-heading" className="md:flex md:items-center md:ml-[15px] md:gap-[10px]">

            <span className="md:text-[#FF6900] md:text-[9px]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M12 15.75V14.25C12 13.4544 11.6839 12.6913 11.1213 12.1287C10.5587 11.5661 9.79565 11.25 9 11.25H4.5C3.70435 11.25 2.94129 11.5661 2.37868 12.1287C1.81607 12.6913 1.5 13.4544 1.5 14.25V15.75" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.75 8.25C8.40685 8.25 9.75 6.90685 9.75 5.25C9.75 3.59315 8.40685 2.25 6.75 2.25C5.09315 2.25 3.75 3.59315 3.75 5.25C3.75 6.90685 5.09315 8.25 6.75 8.25Z" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.25 6V10.5" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.5 8.25H12" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></span>
            <h2 className="md:text-[16px] md:m-0 md:text-[#292524] md:font-['Nunito'] md:font-[400]">Add New Customer</h2>
          </div>

          <button
            type="button"
            id="close-add-customer"
            className="md:w-[25px] md:h-[25px] md:font-['Nunito'] md:font-[400] md:flex md:items-center md:justify-center md:p-0 md:rounded-[6px] md:border-[1px] md:border-solid md:border-[#e5ddd2] md:bg-[#FFFFFF] md:text-[#79716b] md:text-[14px] md:cursor-pointer"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div id="add-customer-body" className="md:flex-1 md:min-h-[0] md:overflow-y-auto md:overflow-x-hidden md:p-[9px_10px_5px] md:box-border md:-webkit-scrollbar:w-[3px] md:-webkit-scrollbar-thumb:bg-[#ddd6ce] md:-webkit-scrollbar-thumb:rounded-[5px]  ">

          {/* person details */}
          <section id="customer-form-section" className="md:m-[0_0_6px]  ">
            <h3 className="md:m-[0_0_4px] md:text-[#bb4d00] md:flex md:gap-[10px] md:items-center md:text-[14px] md:pt-[10px] md:pl-[10px] md:font-[400]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M8 10.5V9.5C8 8.96957 7.78929 8.46086 7.41421 8.08579C7.03914 7.71071 6.53043 7.5 6 7.5H3C2.46957 7.5 1.96086 7.71071 1.58579 8.08579C1.21071 8.46086 1 8.96957 1 9.5V10.5" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 1.564C8.42888 1.67518 8.8087 1.92563 9.07984 2.27603C9.35098 2.62643 9.4981 3.05694 9.4981 3.5C9.4981 3.94305 9.35098 4.37357 9.07984 4.72396C8.8087 5.07436 8.42888 5.32481 8 5.436" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 10.5V9.5C10.9997 9.05687 10.8522 8.62639 10.5807 8.27616C10.3092 7.92593 9.92906 7.67579 9.5 7.565" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.5 5.5C5.60457 5.5 6.5 4.60457 6.5 3.5C6.5 2.39543 5.60457 1.5 4.5 1.5C3.39543 1.5 2.5 2.39543 2.5 3.5C2.5 4.60457 3.39543 5.5 4.5 5.5Z" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> PERSONAL DETAILS</h3>

            <div id="form-grid-two" className="md:flex md:grid-cols-[1fr 1fr]  md:justify-center md:items-center md:mt-[10px] md:ml-[20px] md:gap-[10px]">

              <div id="form-field" className="md:w-[50%] md:h-auto ">
                <label className="md:block md:mb-[2px] md:text-[#79716b] md:text-[14px]">Full Name</label>
                <input
                  className="md:w-full md:h-[35px] md:p-[0_6px] md:size-[box] md:border-[1px] md:border-solid md:border-[#ffdc73] md:rounded-[5px] md:outline-none md:bg-[#ffffff] md:text-[#2c1810] md:text-[13px] md:placeholder:text-[#a6a09b] md:focus:border-[#FFB900]" 
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div id="form-field" className="md:w-[50%] md:h-auto ">
                <label className="md:block md:mb-[2px] md:text-[#79716b] md:text-[14px]">Mobile Number</label>
                <input
                  className="md:w-full md:h-[35px] md:p-[0_6px] md:size-[box] md:border-[1px] md:border-solid md:border-[#ffdc73] md:rounded-[5px] md:outline-none md:bg-[#ffffff] md:text-[#2c1810] md:text-[13px] md:placeholder:text-[#a6a09b] md:focus:border-[#FFB900]" 
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

            </div>
             
             <div id="form-grid-two" className="md:flex md:grid-cols-[1fr 1fr] md:justify-center md:items-center md:mt-[10px] md:ml-[20px] md:gap-[10px]">
            <div id="form-field" className="md:w-[50%] md:h-auto ">
              <label className="md:block md:mb-[2px] md:text-[#79716b] md:text-[13px]">Email</label>
              <input
                className="md:w-full md:h-[35px] md:p-[0_6px] md:size-[box] md:border-[1px] md:border-solid md:border-[#ffdc73] md:rounded-[5px] md:outline-none md:bg-[#ffffff] md:text-[#2c1810] md:text-[13px] md:placeholder:text-[#a6a09b] md:focus:border-[#FFB900]" 
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div id="form-field" className="md:w-[50%] md:h-auto">
              <label className="md:block md:mb-[2px] md:text-[#79716b] md:text-[13px]">Address</label>
              <input
                className="md:w-full md:h-[35px] md:p-[0_6px] md:size-[box] md:border-[1px] md:border-solid md:border-[#ffdc73] md:rounded-[5px] md:outline-none md:bg-[#ffffff] md:text-[#2c1810] md:text-[13px] md:placeholder:text-[#a6a09b] md:focus:border-[#FFB900]" 
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            </div>
          </section>

          {/* customer type */}
          <section id="customer-form-section" className="md:m-[0_0_6px]  ">
            <h3 className="md:m-[20px_0_4px] md:ml-[10px] md:flex md:items-center md:gap-[10px] md:text-[#bb4d00] md:text-[14px] md:font-[400]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M8 10.5V9.5C8 8.96957 7.78929 8.46086 7.41421 8.08579C7.03914 7.71071 6.53043 7.5 6 7.5H3C2.46957 7.5 1.96086 7.71071 1.58579 8.08579C1.21071 8.46086 1 8.96957 1 9.5V10.5" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 1.564C8.42888 1.67519 8.8087 1.92564 9.07984 2.27603C9.35098 2.62643 9.4981 3.05695 9.4981 3.5C9.4981 3.94306 9.35098 4.37357 9.07984 4.72397C8.8087 5.07437 8.42888 5.32482 8 5.436" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 10.5V9.5C10.9997 9.05687 10.8522 8.62639 10.5807 8.27616C10.3092 7.92593 9.92906 7.67579 9.5 7.565" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.5 5.5C5.60457 5.5 6.5 4.60457 6.5 3.5C6.5 2.39543 5.60457 1.5 4.5 1.5C3.39543 1.5 2.5 2.39543 2.5 3.5C2.5 4.60457 3.39543 5.5 4.5 5.5Z" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> CUSTOMER TYPE</h3>

            <div id="option-row" className="md:w-full md:flex md:items-center md:gap-[8px] md:mt-[12px] md:flex-nowrap md:box-border">
              {["Monthly", "Yearly", "Daily Payment", "Tiffin", "Single Meal"].map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    className={
                      plan === item
                        ? "option-button active md:h-[30px] md:w-[87px] md:border-[1px] md:border-solid md:border-[#ff6900] md:bg-[#ff6900] md:whitespace-nowrap md:text-[#ffffff] md:rounded-[5px] md:text-[13px]"
                        : "option-button md:h-[30px] md:w-[87px]   md:items-center md:justify-center md:p-[0_1px]  md:whitespace-nowrap md:border-[1px] md:border-solid md:border-[#e5ddd2] md:rounded-[5px] md:bg-[#ffffff] md:text-[#79716b] md:font-['Nunito'] md:text-[13px] md:font-[400] md:cursor-pointer md:line-h-[1] md:nth-child(1):w-[45px] "
                    }

                    onClick={() => setPlan(item)}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </section>

          {/* meal selection */}
          <section id="customer-form-section" className="md:m-[0_0_6px] ">
            <h3 className="md:m-[0_0_4px] md:text-[#bb4d00] md:text-[14px] md:mt-[20px] md:flex md:gap-[10px] md:items-center md:font-[400]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="ml-[10px] " viewBox="0 0 12 12" fill="none">
            <g clip-path="url(#clip0_25_3866)">
            <path d="M1.5 1V4.5C1.5 5.05 1.95 5.5 2.5 5.5H4.5C4.76522 5.5 5.01957 5.39464 5.20711 5.20711C5.39464 5.01957 5.5 4.76522 5.5 4.5V1" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.5 1V11" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 7.5V1C9.83696 1 9.20107 1.26339 8.73223 1.73223C8.26339 2.20107 8 2.83696 8 3.5V6.5C8 7.05 8.45 7.5 9 7.5H10.5ZM10.5 7.5V11" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_25_3866">
            <rect width="12" height="12" fill="white"/>
            </clipPath>
            </defs>
            </svg> MEAL SELECTION</h3>

            <div id="meal-checkbox-row" className="md:flex md:items-center md:mt-[15px] md:gap-[20px] md:ml-[10px]">
              {["Breakfast", "Lunch", "Dinner"].map((meal) => (
                <label key={meal} className="meal-checkbox" className="md:flex md:items-center md:gap-[8px] md:text-[#79716b] md:text-[13px] md:cursor-pointer">
                  <input
                  className="md:w-[18px] md:h-[18px] md:m-0  md:accent-[#ff6900]"
                    type="checkbox"
                    checked={meals.includes(meal)}
                    onChange={() => toggleMeal(meal)}
                  />
                  <span>{meal}</span>
                </label>
              ))}
            </div>
          </section>

          {/* coupon allocation */}

          <div id="coupon-section-title" className=" md:p-[ 0_8px_0]">
              <h3 className="md:m-[0_0_4px] md:text-[#bb4d00] md:text-[14px] md:flex md:items-center md:gap-[10px] md:mt-[20px] md:font-[400]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="ml-[10px]" viewBox="0 0 12 12" fill="none">
              <path d="M1 4.5C1.39782 4.5 1.77936 4.65804 2.06066 4.93934C2.34196 5.22064 2.5 5.60218 2.5 6C2.5 6.39782 2.34196 6.77936 2.06066 7.06066C1.77936 7.34196 1.39782 7.5 1 7.5V8.5C1 8.76522 1.10536 9.01957 1.29289 9.20711C1.48043 9.39464 1.73478 9.5 2 9.5H10C10.2652 9.5 10.5196 9.39464 10.7071 9.20711C10.8946 9.01957 11 8.76522 11 8.5V7.5C10.6022 7.5 10.2206 7.34196 9.93934 7.06066C9.65804 6.77936 9.5 6.39782 9.5 6C9.5 5.60218 9.65804 5.22064 9.93934 4.93934C10.2206 4.65804 10.6022 4.5 11 4.5V3.5C11 3.23478 10.8946 2.98043 10.7071 2.79289C10.5196 2.60536 10.2652 2.5 10 2.5H2C1.73478 2.5 1.48043 2.60536 1.29289 2.79289C1.10536 2.98043 1 3.23478 1 3.5V4.5Z" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.5 2.5V3.5" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.5 8.5V9.5" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.5 5.5V6.5" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> COUPON ALLOCATION</h3>
            </div>
          <section id="coupon-allocation-box" className="md:p-[8px_6px_7px] md:mt-[15px] md:border-[1px]  md:border md:border-solid md:border-[#ffe28a] md:rounded-[7px] md:bg-[#fffdf2] md:box-border">

            

            <div id="coupon-inner" className=" md:p-[ 0px_8px_6px]">

              <div className="coupon-top-row" className=" md:flex md:items-center md:justify-between md:mb-[5px]" >
                <span className="md:text-[#79716b] md:text-[13px]">Assign Coupons for this Monthly Plan</span>

                <strong className="md:min-w-[26px] md:h-[15px] md:flex md:items-center md:justify-center md:sizing-[box] md:bg-[#ff6900] md:text-[#ffffff] md:rounded-[10px] md:text-[8px] md:font-[400]">{couponCount}</strong>
              </div>

              <div id="coupon-options" className="md:flex md:items-center md:gap-[5px] md:flex-nowrap">

                {couponOptions.map((count) => (
                  <button
                    type="button"
                    key={count}
                    className="md:h-[40px] md:w-[45px]  md:min-w-[31px] md:flex-[0 _0_31px] md:flex md:items-center md:justify-center md:p-0 md:sizing-[box] md:whitespace-nowrap md:border-[1px] md:border-solid md:border-[#e5ddd2] md:rounded-[5px] md:bg-[#ffffff] md:text-[#79716b] md:font-['Nunito'] md:text-[10px] md:font-[400] md:cursor-pointer md:line-h-[1] "
                    className={
                      couponCount === count
                        ? "coupon-option active md:border-[#ff6900] md:rounded-[5px] md:bg-[#ff6900] md:text-[#ffffff] md:text-[10px] md:mt-[10px]"
                        : "coupon-option md:h-[40px] md:w-[45px] md:min-w-[31px] md:flex-[0 _0_31px] md:flex md:items-center md:justify-center md:p-0 md:sizing-[box] md:whitespace-nowrap md:border-[1px] md:border-solid md:border-[#FFF085] md:mt-[10px] md:rounded-[5px] md:bg-[#ffffff] md:text-[#79716b] md:font-['Nunito'] md:text-[10px] md:font-[400] md:cursor-pointer md:line-h-[1]"
                    }
                    onClick={() => setCouponCount(count)}
                  >
                     {count}
                  </button>
                ))}

              </div>

              <div className="coupon-controls" className="md:flex md:items-center md:mt-[5px] md:gap-[8px] md:w-full md:flex-nowrap">

                <button
                className="md:first-of-type:w-[30px] md:h-[30px] md:flex md:items-center md:justify-center md:rounded-[5px] md:text-[#FF6900] md:border-[1px] md:border-solid md:border-[#FFF085] "
                  type="button"
                  onClick={() =>
                    setCouponCount((prev) =>  prev - 1)
                  }
                >
                  -
                </button>

                <span className="whiespace-nowrap" className="md:w-[50px] md:h-[30px] md:flex md:items-center md:justify-center md:rounded-[5px] md:border-[1px] md:border-solid md:border-[#e5ddd2]">{couponCount}</span>

                <button
                 className="md:last-of-type:w-[30px] md:flex md:items-center md:justify-center md:rounded-[5px]  md:h-[30px] md:text-[#FF6900] md:p-[0_12px] md:whitespace-nowrap md:border-[1px] md:border-solid md:border-[#FFF085]"
                  type="button"
                  onClick={() =>
                    setCouponCount((prev) => prev + 1)
                  }
                >
                  + 
                </button>
                <p className="md:font-['Nunito'] md:text-[#BB4d00] md:text-[12px]">coupons will be added</p>
              </div>

              <div id="coupon-note" className="md:flex md:items-center md:gap-[4px] md:mt-[5px] md:min-h-[16px] md:p-[4px_6px] md:sizing-[box] md:rounded-[5px] md:bg-[#fff4b8]">
                <span className="md:text-[#bb4d00] md:text-[6px]"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <g clip-path="url(#clip0_25_3992)">
                <path d="M6.49992 11.9167C9.49146 11.9167 11.9166 9.49155 11.9166 6.50001C11.9166 3.50847 9.49146 1.08334 6.49992 1.08334C3.50838 1.08334 1.08325 3.50847 1.08325 6.50001C1.08325 9.49155 3.50838 11.9167 6.49992 11.9167Z" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.5 8.66667V6.5" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.5 4.33334H6.50542" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_25_3992">
                <rect width="13" height="13" fill="white"/>
                </clipPath>
                </defs>
                </svg></span>
                <p className="md:m-0 md:text-[#79716b] md:text-[8px] md:line-h-8px">
                  Each meal attendance deducts 1 coupon automatically.
                  Unused coupons carry forward.
                </p>
              </div>

            </div>
          </section>

          {/* subscription deatils */}
          <section id="customer-form-section" className="md::nth-of-type(5) md:mb-[6px]  ">
            <h3 className="md:m-[0_0_4px] md:text-[#bb4d00] md:flex md:gap-[10px] md:items-center md:mt-[10px] md:text-[14px] md:pt-[10px] md:pl-[10px] md:font-[400]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12" fill="none" className="shrink-0">
            <path d="M4 1V2.5" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 1V2.5" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.5 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V9.5C1.5 10.0523 1.94772 10.5 2.5 10.5H9.5C10.0523 10.5 10.5 10.0523 10.5 9.5V2.5C10.5 1.94772 10.0523 1.5 9.5 1.5Z" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.5 4.5H10.5" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.5 7.5L5.5 8.5L7.5 6.5" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> SUBSCRIPTION DETAILS</h3>

            <div id="form-grid-two" className="md:flex md:grid-cols-[1fr 1fr]  md:justify-center md:items-center md:mt-[10px] md:ml-[20px] md:gap-[10px]">

              <div id="form-field" className="md:w-[50%] md:h-auto ">
                <label className="md:block md:mb-[2px] md:text-[#79716b] md:text-[14px]">Start Date</label>
                <input
                  className="md:w-full md:h-[35px] md:p-[0_6px] md:size-[box] md:border-[1px] md:border-solid md:border-[#ffdc73] md:rounded-[5px] md:outline-none md:bg-[#ffffff] md:text-[#2c1810] md:text-[13px] md:placeholder:text-[#a6a09b] md:focus:border-[#FFB900]" 
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>

              <div id="form-field" className="md:w-[50%] md:h-auto ">
                <label className="md:block md:mb-[2px] md:text-[#79716b] md:text-[14px]">End Date</label>
                <input
                  className="md:w-full md:h-[35px] md:p-[0_6px] md:size-[box] md:border-[1px] md:border-solid md:border-[#ffdc73] md:rounded-[5px] md:outline-none md:bg-[#ffffff] md:text-[#2c1810] md:text-[13px] md:placeholder:text-[#a6a09b] md:focus:border-[#FFB900]" 
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="md:flex md:grid-cols-[1fr 1fr]  md:justify-center md:items-center md:mt-[10px] md:ml-[20px] md:gap-[10px]">
              <div id="form-field" className="md:w-[50%] md:h-auto ">
                <label className="md:block md:mb-[2px] md:text-[#79716b] md:text-[14px]">Plan Price (₹)</label>
                <input
                  className="md:w-full md:h-[35px] md:p-[0_6px] md:size-[box] md:border-[1px] md:border-solid md:border-[#ffdc73] md:rounded-[5px] md:outline-none md:bg-[#ffffff] md:text-[#2c1810] md:text-[13px] md:placeholder:text-[#a6a09b] md:focus:border-[#FFB900]" 
                  type="number"
                  name="planPrice"
                  value={formData.planPrice}
                  onChange={handleChange}
                />
              </div>

              <div cid="form-field" className="md:w-[50%] md:h-auto ">
                <label className="md:block md:mb-[2px] md:text-[#79716b] md:text-[14px]">Discount (₹)</label>
                <input
                  className="md:w-full md:h-[35px] md:p-[0_6px] md:size-[box] md:border-[1px] md:border-solid md:border-[#ffdc73] md:rounded-[5px] md:outline-none md:bg-[#ffffff] md:text-[#2c1810] md:text-[13px] md:placeholder:text-[#a6a09b] md:focus:border-[#FFB900]" 
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* payment method */}
          <section className="md:customer-form-section md:payment-section">
            <h3 className="md:m-[0_0_4px] md:text-[#bb4d00] md:text-[14px] md:mt-[10px] md:font-[400]">PAYMENT METHOD</h3>

            <div id="option-row"  className="md:flex md:grid-col-[ repeat(4, 1fr)] md:gap-[8px]">

              {["Cash", "UPI", "Online", "Card"].map((method) => (
                <button
                className="md:h-[30px] md:w-[35px] md:flex md:items-center md:gap-[10px] md:justify-center md:p-0 md:sizing-[box] md:whitespace-nowrap md:border-[1px] md:border-solid md:border-[#e5ddd2] md:mt-[10px] md:rounded-[5px] md:bg-[#ffffff] md:text-[#79716b] md:font-['Nunito'] md:text-[10px] md:font-[400] md:cursor-pointer md:line-h-[1]"
                  type="button"
                  key={method}
                  className={
                    paymentMethod === method
                      ? "option-button active md:border-[#ff6900] md:rounded-[5px] md:bg-[#ff6900] md:text-[#ffffff] md:text-[12px] md:mt-[10px] md:gap-[10px]"
                      : "option-button md:border md:h-[30px] md:w-[35px] md:min-w-[31px] md:border-[1px] md:border-solid md:border-[#e5ddd2] md:mt-[10px] md:rounded-[5px] md:gap-[10px] md:text-[#79716b] md:font-['Nunito'] md:text-[12px] md:font-[400] md:cursor-pointer"
                  }
                  onClick={() => setPaymentMethod(method)}
                >
                  {method}
                </button>
              ))}

            </div>
          </section>

        </div>

        {/* footer */}
        <div id="add-customer-footer" className=" md:h-[40px] md:flex md:items-center md:justify-end md:gap-[15px] md:mt-[10px] ">

          <button
            className="md:bg-none md:border-none md:text-[#888888] md:text-[14px] md:font-[400] md:cursor-pointer md::hover text-[#555555]"            type="button"
            id="cancel-customer-button"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="md:flex md:items-center md:justify-center md:gap-[8px] md:mr-[15px] md:text-[#FFFFFF] md:border-none md:bg-[#ff6900] md:h-[25px] md:w-[110px] md:rounded-[5px] md:text-[12px] md:font-[500] md:cursor-pointer md:hover:bg-[#e85d00]"            type="button"
            id="save-customer-button"
            onClick={handleSave}
          > <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15 15" fill="none">
            <path d="M10 13.125V11.875C10 11.212 9.73661 10.5761 9.26777 10.1072C8.79893 9.63839 8.16304 9.375 7.5 9.375H3.75C3.08696 9.375 2.45107 9.63839 1.98223 10.1072C1.51339 10.5761 1.25 11.212 1.25 11.875V13.125" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.625 6.875C7.00571 6.875 8.125 5.75571 8.125 4.375C8.125 2.99429 7.00571 1.875 5.625 1.875C4.24429 1.875 3.125 2.99429 3.125 4.375C3.125 5.75571 4.24429 6.875 5.625 6.875Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.875 5V8.75" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.75 6.875H10" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
             Save Customer
          </button>

        </div>

      </div>
    </div>
  );
};

export default AddNewCustomer;