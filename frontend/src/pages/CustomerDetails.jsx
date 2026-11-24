import { useState } from "react";
// import "./CustomerDetails.css";
import { useSearchParams } from "react-router-dom";

const CustomerDetails = () => {
  const [searchParams] = useSearchParams();

  const customerName = searchParams.get("name") || "Rahul Patil";
  const customerMobile =
    searchParams.get("mobile") || "9876543210";
  const customerTypeFromUrl =
    searchParams.get("type") || "Monthly";
  const customerExpiry =
    searchParams.get("expiry") || "31 Aug 2026";

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(customerName);
  const [editedMobile, setEditedMobile] =
    useState(customerMobile);
  const [customerType, setCustomerType] =
    useState(customerTypeFromUrl);

  const [activeTab, setActiveTab] = useState("Meal History");

  const customerStatus =
    customerName === "Sneha Joshi" ? "Pending" : "Paid";

  const customerCoupons =
    customerName === "Amit Sharma"
      ? 22
      : customerName === "Sneha Joshi"
      ? 8
      : 10;

  const handleSave = () => {
    setIsEditing(false);
    alert("Customer details updated successfully");
  };

  const handleCancel = () => {
    setEditedName(customerName);
    setEditedMobile(customerMobile);
    setCustomerType(customerTypeFromUrl);
    setIsEditing(false);
  };

  const handleAction = (action) => {
    alert(`${action} clicked for ${editedName}`);
  };

  const mealHistory = [
    {
      date: "10 Aug 2026",
      meal: " Lunch",
      coupon: "Deducted",
      status: "Present",
    },
    {
      date: "09 Aug 2026",
      meal: " Dinner",
      coupon: "Deducted",
      status: "Present",
    },
    {
      date: "09 Aug 2026",
      meal: " Breakfast",
      coupon: "—",
      status: "Absent",
    },
    {
      date: "08 Aug 2026",
      meal: " Lunch",
      coupon: "Deducted",
      status: "Present",
    },
  ];

  return (
    <div id="customer-details-page" className=" md:ml-[75px]  md:w-[1155px]  md:h-auto   md:p-[2.1875rem_1.25rem_1.875rem_1.50rem]  md:mt-[68px]">

      {/* back */}
      <button
        id="back-customers-button"
        className=" md:box-border   md:w-full   md:flex  md:items-center  md:gap-[10px]  md:font-['Nunito']  md:text-[#BB4D00]  md:max-[600px]:p-3"        type="button"
        onClick={() => (window.location.href = "/customers")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M7.5 11.875L3.125 7.5L7.5 3.125" stroke="#F54900" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.875 7.5H3.125" stroke="#F54900" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> Back to Customers
      </button>

      {/* top section */}
      <div id="customer-details-top" className=" md:mt-[20px]  md:grid md:grid-cols-1 md:items-stretch md:gap-3 md:min-[901px]:grid-cols-[minmax(0,2.15fr)_minmax(210px,1fr)]">

        {/* customer card */}
        <div id="customer-info-card" className=" md:box-border  md:min-w-0  md:rounded-[10px]  md:border  md:border-solid  md:border-[#e5e0da]  md:bg-white  md:p-4  md:shadow-[0_1px_3px_rgba(44,24,16,0.06)]">

  
          <div id="customer-avatar-large" className=" md:w-[42px]  md:h-[42px]  md:flex  md:items-center  md:justify-center  md:float-left  md:mr-[10px]  md:rounded-[50%]  md:text-[#ffffff]  md:bg-[#ffb900]  md:text-[15px]  md:font-[400]">
            {editedName.charAt(0).toUpperCase()}
          </div>

          <div id="customer-info" className=" md:min-h-[48]  md:p-[1px] ">
            {isEditing ? (
              <>
                <input
                  className="customer-edit-input"
                  className=" md:block  md:w-[150px]  md:h-[23px]  md:mb-[4px]  md:px-[7px]  md:box-border  md:border  md:border-[#a6a09b]  md:rounded-[5px]  md:outline-none  md:text-[#2c1810]  md:text-[9px]  md:focus:border-[#ffb900]"
                  type="text"
                  value={editedName}
                  onChange={(e) =>
                    setEditedName(e.target.value)
                  }
                />

                <input
                  className="customer-edit-input"
                  className=" md:block  md:w-[150px]  md:h-[23px]  md:mb-[4px]  md:px-[7px]  md:box-border  md:border  md:border-[#a6a09b]  md:rounded-[5px]  md:outline-none  md:text-[#2c1810]  md:text-[9px]  md:focus:border-[#ffb900]"
                  type="text"
                  value={editedMobile}
                  onChange={(e) =>
                    setEditedMobile(e.target.value)
                  }
                />
              </>
            ) : (
              <>
                <h2 className=" md:text-[#2c1810]  md:m-[0_0_3px]  md:text-[15px]  md:font-[400]">{editedName}</h2>
                <p className=" md:text-[#ff6900]  md:m-0  md:text-[9px]  md:font-[400]">{editedMobile}</p>
              </>
            )}
          </div>

          {/* plan */}
          {isEditing ? (
            <select
              className="customer-plan-select"
              className=" md:float-right  md:-mt-[39px]  md:h-[25px]  md:rounded-md  md:border  md:border-[#ffb900]  md:bg-[#fff085]  md:px-[6px]  md:text-[8px]  md:text-[#bb4d00]  md:outline-none"
              value={customerType}
              onChange={(e) =>
                setCustomerType(e.target.value)
              }
            >
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          ) : (
            <span id="customer-plan-badge" className="  md:inline-flex  md:items-center  md:p-[4px_9px]  md:rounded-[10px]  md:text-[#bb4d00]  md:bg-[#fff085]  md:text-[8px]  md:font-[400]">
              {customerType}
            </span>
          )}

          {/* meta */}
          <div className="customer-meta-cards" className=" md:clear-both  md:mt-[20px]  md:grid  md:grid-cols-1  md:gap-2  md:min-[601px]:grid-cols-3">

            <div className="customer-meta-card" className=" md:box-border  md:min-h-[55px]  md:rounded-[7px]  md:border-0  md:bg-[#fffbed]  md:p-2.5">
              <span className=" md:mb-[3px]  md:block  md:text-[12px]  md:text-[#ff6900]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 13 13" fill="none">
              <path d="M11.375 6.5C11.375 5.20707 10.8614 3.96709 9.94715 3.05285C9.03291 2.13861 7.79293 1.625 6.5 1.625C5.13714 1.63013 3.82903 2.16191 2.84917 3.10917L1.625 4.33333" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.625 1.625V4.33333H4.33333" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.625 6.5C1.625 7.79293 2.13861 9.03291 3.05285 9.94715C3.96709 10.8614 5.20707 11.375 6.5 11.375C7.86286 11.3699 9.17098 10.8381 10.1508 9.89083L11.375 8.66667" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.66663 8.66669H11.375V11.375" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></span>
              <small className=" md:mb-1  md:block  md:text-[12px]  md:text-[#ff6900]">Plan</small>
              <strong className=" md:block  md:text-[12px]  md:font-normal  md:text-[#2c1810]">{customerType}</strong>
            </div>

            <div className="customer-meta-card" className=" md:box-border  md:min-h-[55px]  md:rounded-[7px]  md:border-0  md:bg-[#fffbed]  md:p-2.5">
              <span className=" md:mb-[3px]  md:block  md:text-[12px]  md:text-[#ff6900]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 13 13" fill="none">
              <g clip-path="url(#clip0_110_740)">
              <path d="M4.33325 1.08331V2.70831" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.66675 1.08331V2.70831" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.2917 1.625H2.70833C2.11002 1.625 1.625 2.11002 1.625 2.70833V10.2917C1.625 10.89 2.11002 11.375 2.70833 11.375H10.2917C10.89 11.375 11.375 10.89 11.375 10.2917V2.70833C11.375 2.11002 10.89 1.625 10.2917 1.625Z" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.625 4.875H11.375" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.33325 7.04169H4.33867" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.5 7.04169H6.50542" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.66675 7.04169H8.67216" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.33325 9.20831H4.33867" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.5 9.20831H6.50542" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.66675 9.20831H8.67216" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_110_740">
              <rect width="13" height="13" fill="white"/>
              </clipPath>
              </defs>
              </svg></span>
              <small className="md:mb-1 md:block md:text-[12px] md:text-[#ff6900]">Expiry</small>
              <strong className=" md:block  md:text-[12px]  md:font-normal  md:text-[#2c1810]">{customerExpiry}</strong>
            </div>

            <div className="customer-meta-card" className=" md:box-border  md:min-h-[55px]  md:rounded-[7px]  md:border-0  md:bg-[#fffbed]  md:p-2.5">
              <span className=" md:mb-[3px]  md:block  md:text-[12px]  md:text-[#ff6900]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 13 13" fill="none">
              <g clip-path="url(#clip0_110_758)">
              <path d="M11.809 5.41666C12.0564 6.6307 11.8801 7.89285 11.3095 8.99263C10.7389 10.0924 9.80856 10.9634 8.67356 11.4602C7.53856 11.9571 6.26754 12.0498 5.07244 11.7229C3.87735 11.3961 2.83043 10.6694 2.10626 9.6641C1.3821 8.65878 1.02447 7.43558 1.09302 6.1985C1.16156 4.96141 1.65213 3.78521 2.48293 2.86605C3.31372 1.94688 4.43451 1.34031 5.6584 1.14749C6.88229 0.954669 8.13529 1.18725 9.20845 1.80645" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.875 5.95835L6.5 7.58335L11.9167 2.16669" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_110_758">
              <rect width="13" height="13" fill="white"/>
              </clipPath>
              </defs>
              </svg></span>
              <small className=" md:mb-1  md:block  md:text-[12px]  md:text-[#ff6900]">Status</small>
              <strong className=" md:block  md:text-[12px]  md:font-normal  md:text-[#2c1810]">{customerStatus}</strong>
            </div>

          </div>

          {/* meal preferences */}
          <div className="customer-meal-preferences" className=" md:mt-[15px]">
            <span classname=" md:block   md:text-[rgb(255,105,0)]  md:text-[14px]">Meal Preferences</span>

            <div className="mt-[10px]">
              <button className=" md:h-[30px]  md:w-[80px]  md:mr-[5px]  md:px-[8px]  md:border-0  md:rounded-[15px]  md:bg-[#fff085]  md:text-[#bb4d00]  md:text-[12px]  md:cursor-pointer  md:hover:bg-[#ffb900]" type="button">Breakfast</button>
              <button className=" md:h-[30px]  md:w-[80px]  md:mr-[5px]  md:px-[8px]  md:border-0  md:rounded-[15px]  md:bg-[#fff085]  md:text-[#bb4d00]  md:text-[12px]  md:cursor-pointer  md:hover:bg-[#ffb900]" type="button">Lunch</button>
              <button className=" md:h-[30px]  md:w-[80px]  md:mr-[5px]  md:px-[8px]  md:border-0  md:rounded-[15px]  md:bg-[#fff085]  md:text-[#bb4d00]  md:text-[12px]  md:cursor-pointer  md:hover:bg-[#ffb900]" type="button">Dinner</button>
            </div>
          </div>

          {/* action button */}
          <div className="customer-detail-actions" className=" md:flex  md:items-center  md:gap-[10px]  md:mt-[12px]  md:max-[600px]:flex-wrap">

            <button
              className="record-meal-button"
              className=" md:flex  md:h-[60px]  md:w-[90px]  md:items-center  md:justify-center  md:gap-[5px]  md:bg-[#00c853]  md:text-white  md:rounded-2xl"
              type="button"
              onClick={() => handleAction("Record Meal")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
              <path d="M5.47529 3.34985H3.28518C3.08359 3.34985 2.92017 3.51328 2.92017 3.71487V4.44491C2.92017 4.6465 3.08359 4.80992 3.28518 4.80992H5.47529C5.67688 4.80992 5.84031 4.6465 5.84031 4.44491V3.71487C5.84031 3.51328 5.67688 3.34985 5.47529 3.34985Z" stroke="white" stroke-width="0.730035" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.84029 4.07983H6.57033C6.76395 4.07983 6.94963 4.15675 7.08654 4.29366C7.22345 4.43056 7.30036 4.61625 7.30036 4.80987V9.92011C7.30036 10.1137 7.22345 10.2994 7.08654 10.4363C6.94963 10.5732 6.76395 10.6501 6.57033 10.6501H2.19012C1.9965 10.6501 1.81081 10.5732 1.67391 10.4363C1.537 10.2994 1.46008 10.1137 1.46008 9.92011V4.80987C1.46008 4.61625 1.537 4.43056 1.67391 4.29366C1.81081 4.15675 1.9965 4.07983 2.19012 4.07983H2.92015" stroke="white" stroke-width="0.730035" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.38025 6.63501H5.84032" stroke="white" stroke-width="0.730035" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.38025 8.46008H5.84032" stroke="white" stroke-width="0.730035" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.92017 6.63501H2.92382" stroke="white" stroke-width="0.730035" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.92017 8.46008H2.92382" stroke="white" stroke-width="0.730035" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> Record
              <br />
              Meal
            </button>

            {!isEditing ? (
              <button
                className="edit-customer-button"
                className=" md:flex  md:h-[60px]  md:w-[90px]  md:items-center  md:justify-center md:gap-[5px] md:bg-[#fff0dc] md:text-[#bb4d00] md:border md:border-[#ffb900] md:rounded-2xl"
                type="button"
                onClick={() => setIsEditing(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <g clip-path="url(#clip0_110_794)">
                <path d="M12.3515 3.97373C12.66 3.66539 12.8333 3.24717 12.8333 2.81106C12.8334 2.37495 12.6602 1.95668 12.3518 1.64827C12.0435 1.33985 11.6253 1.16656 11.1892 1.1665C10.7531 1.16645 10.3348 1.33964 10.0264 1.64798L2.24121 9.43489C2.10577 9.56993 2.00561 9.7362 1.94954 9.91906L1.17896 12.4577C1.16388 12.5082 1.16275 12.5618 1.17566 12.6128C1.18858 12.6638 1.21508 12.7104 1.25234 12.7476C1.2896 12.7848 1.33624 12.8113 1.3873 12.8241C1.43837 12.8369 1.49195 12.8357 1.54238 12.8206L4.08163 12.0506C4.26431 11.995 4.43056 11.8954 4.56579 11.7606L12.3515 3.97373Z" stroke="#CA3500" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.75 2.91663L11.0833 5.24996" stroke="#CA3500" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_110_794">
                <rect width="14" height="14" fill="white"/>
                </clipPath>
                </defs>
                </svg> Edit
              </button>
            ) : (
              <>
                <button
                  className="edit-customer-button"
                  className=" md:flex  md:items-center  md:justify-center  md:gap-[5px]  md:bg-[#fff0dc]  md:text-[#bb4d00]  md:border  md:border-[#ffb900]"

                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>

                <button
                  className="save-customer-button"
                  className="md:bg-[#ff6900] md:text-white"
                  type="button"
                  onClick={handleSave}
                >
                  Save
                </button>
              </>
            )}

            <button
              className="add-payment-button"
              className="md:flex  md:h-[60px]  md:w-[90px]  md:items-center  md:justify-center  md:gap-[5px]  md:bg-[#dbeafe]  md:rounded-2xl  md:text-[#2563eb]"
              type="button"
              onClick={() => handleAction("Add Payment")}
            ><svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
            <g clip-path="url(#clip0_110_800)">
            <path d="M8.14233 4.15015H1.62844C1.17875 4.15015 0.814209 4.51469 0.814209 4.96438V9.03556C0.814209 9.48525 1.17875 9.8498 1.62844 9.8498H8.14233C8.59202 9.8498 8.95657 9.48525 8.95657 9.03556V4.96438C8.95657 4.51469 8.59202 4.15015 8.14233 4.15015Z" stroke="#1447E6" stroke-width="0.814236" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M0.814209 6.18579H8.95657" stroke="#1447E6" stroke-width="0.814236" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_110_800">
            <rect width="9.77083" height="14" fill="white"/>
            </clipPath>
            </defs>
            </svg>
              Add
              <br />
              Payment
            </button>

            <button
              className="renew-button"
              className="md:flex  md:items-center  md:justify-center  md:gap-[5px]  md:bg-[#f0e5ff]  md:rounded-2xl  md:text-[#7c3aed] "
              type="button"
              onClick={() => handleAction("Renew")}
            > <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1.75 7C1.75 8.03835 2.05791 9.05339 2.63478 9.91674C3.21166 10.7801 4.0316 11.453 4.99091 11.8504C5.95022 12.2477 7.00582 12.3517 8.02422 12.1491C9.04262 11.9466 9.97808 11.4465 10.7123 10.7123C11.4465 9.97808 11.9466 9.04262 12.1491 8.02422C12.3517 7.00582 12.2477 5.95022 11.8504 4.99091C11.453 4.0316 10.7801 3.21166 9.91674 2.63478C9.05339 2.05791 8.03835 1.75 7 1.75C5.53231 1.75552 4.12357 2.32821 3.06833 3.34833L1.75 4.66667" stroke="#8200DB" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.75 1.75V4.66667H4.66667" stroke="#8200DB" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
               Renew
            </button>

          </div>

        </div>

        {/* coupon balance card */}
        <div className="coupon-balance-card" className="md:box-border md:w-full md:rounded-[10px] md:border md:border-solid md:border-[#e5e0da] md:bg-white md:p-[14px] md:shadow-[0_1px_3px_rgba(44,24,16,0.06)]">

          <h3 className="md:mb-[13px] md:flex md:items-center md:gap-[5px] md:text-[16px] md:font-normal md:text-[#2c1810]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <g clip-path="url(#clip0_110_816)">
            <path d="M1.16675 5.25002C1.63088 5.25002 2.076 5.43439 2.40418 5.76258C2.73237 6.09077 2.91675 6.53589 2.91675 7.00002C2.91675 7.46415 2.73237 7.90927 2.40418 8.23746C2.076 8.56565 1.63088 8.75002 1.16675 8.75002V9.91669C1.16675 10.2261 1.28966 10.5229 1.50846 10.7416C1.72725 10.9604 2.024 11.0834 2.33341 11.0834H11.6667C11.9762 11.0834 12.2729 10.9604 12.4917 10.7416C12.7105 10.5229 12.8334 10.2261 12.8334 9.91669V8.75002C12.3693 8.75002 11.9242 8.56565 11.596 8.23746C11.2678 7.90927 11.0834 7.46415 11.0834 7.00002C11.0834 6.53589 11.2678 6.09077 11.596 5.76258C11.9242 5.43439 12.3693 5.25002 12.8334 5.25002V4.08335C12.8334 3.77393 12.7105 3.47719 12.4917 3.2584C12.2729 3.0396 11.9762 2.91669 11.6667 2.91669H2.33341C2.024 2.91669 1.72725 3.0396 1.50846 3.2584C1.28966 3.47719 1.16675 3.77393 1.16675 4.08335V5.25002Z" stroke="#FF6900" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.58325 2.91669V4.08335" stroke="#FF6900" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.58325 9.91669V11.0834" stroke="#FF6900" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.58325 6.41669V7.58335" stroke="#FF6900" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_110_816">
            <rect width="14" height="14" fill="white"/>
            </clipPath>
            </defs>
            </svg> Coupon Balance</h3>

          <div className="coupon-balance-item" className="md:mb-3">
            <div className="md:mb-1 md:flex md:items-center md:justify-between">
              <span className="md:text-[12px] md:text-[#bb4d00]">Total Issued</span>
              <strong className="md:text-[12px] md:font-normal md:text-[#2c1810]">30</strong>
            </div>

            <div className="coupon-progress" className="md:h-[8px] md:w-full md:overflow-hidden md:rounded-[5px] md:bg-[#f0ece7]">
              <div className="coupon-progress-fill issued" className="md:h-full md:w-full md:rounded-[5px] md:bg-[#ffb900]"></div>
            </div>
          </div>

          <div className="coupon-balance-item" className="md:mb-3">
            <div className="md:mb-1 md:flex md:items-center md:justify-between">
              <span className="md:text-[12px] md:text-[#bb4d00]">Used</span>
              <strong className="md:text-[12px] md:font-normal md:text-[#2c1810]">20</strong>
            </div>

            <div className="coupon-progress" className="md:h-[8px] md:w-full md:overflow-hidden md:rounded-[5px] md:bg-[#f0ece7]">
              <div className="coupon-progress-fill used" className="md:h-full md:w-[67%] md:rounded-[5px] md:bg-[#ff6900]"></div>
            </div>
          </div>

          <div className="coupon-balance-item" className="md:mb-3">
            <div className="md:mb-1 md:flex md:items-center md:justify-between">
              <span className="md:text-[12px] md:text-[#bb4d00]">Remaining</span>
              <strong className="md:text-[12px] md:font-normal md:text-[#2c1810]">{customerCoupons}</strong>
            </div>

            <div className="coupon-progress"  className="md:h-[8px] md:w-full md:overflow-hidden md:rounded-[5px] md:bg-[#f0ece7]">
              <div className="coupon-progress-fill remaining" className="md:h-full md:w-[33%] md:rounded-[5px] md:bg-[#00c853]"></div>
            </div>
          </div>

          <div className="coupon-balance-item" className="md:mb-3">
            <div className="md:mb-1 md:flex md:items-center md:justify-between">
              <span className="md:text-[12px] md:text-[#bb4d00]">Carry Forward</span>
              <strong className="md:text-[12px] md:font-normal md:text-[#2c1810]">10</strong>
            </div>

            <div className="coupon-progress" className="md:h-[8px] md:w-full md:overflow-hidden md:rounded-[5px] md:bg-[#f0ece7]">
              <div className="coupon-progress-fill carry" className="md:h-full md:w-[33%] md:rounded-[5px] md:bg-[#ffb900]"></div>
            </div>
          </div>

        </div>

      </div>

      {/* history section */}
      <div className="customer-history-card" className="md:mt-[14px] md:overflow-hidden md:rounded-[10px] md:border md:border-solid md:border-[#e5e0da] md:bg-white md:shadow-[0_1px_3px_rgba(44,24,16,0.06)]">

        {/* tabs */}
        <div className="customer-history-tabs" className="md:flex md:h-[64px] md:items-center md:gap-[18px] md:overflow-x-auto md:border-b md:border-[#e5e0da] md:px-[10px] md:max-[600px]:gap-3 ">

          {[ 
           { name : "Meal History" ,
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 13 13" fill="none">
            <path d="M1.625 1.08337V4.87504C1.625 5.47087 2.1125 5.95837 2.70833 5.95837H4.875C5.16232 5.95837 5.43787 5.84424 5.64103 5.64107C5.8442 5.43791 5.95833 5.16236 5.95833 4.87504V1.08337" stroke="#F54900" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.79163 1.08337V11.9167" stroke="#F54900" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.375 8.12504V1.08337C10.6567 1.08337 9.96779 1.36872 9.45988 1.87663C8.95197 2.38454 8.66663 3.07341 8.66663 3.79171V7.04171C8.66663 7.63754 9.15413 8.12504 9.74996 8.12504H11.375ZM11.375 8.12504V11.9167" stroke="#F54900" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>),
            },

              {name: "Coupon History",
                icon:(<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 13 13" fill="none">
                <g clip-path="url(#clip0_110_882)">
                <path d="M1.08325 4.87504C1.51423 4.87504 1.92755 5.04625 2.2323 5.35099C2.53705 5.65574 2.70825 6.06906 2.70825 6.50004C2.70825 6.93102 2.53705 7.34434 2.2323 7.64909C1.92755 7.95384 1.51423 8.12504 1.08325 8.12504V9.20837C1.08325 9.49569 1.19739 9.77124 1.40055 9.97441C1.60372 10.1776 1.87927 10.2917 2.16659 10.2917H10.8333C11.1206 10.2917 11.3961 10.1776 11.5993 9.97441C11.8024 9.77124 11.9166 9.49569 11.9166 9.20837V8.12504C11.4856 8.12504 11.0723 7.95384 10.7675 7.64909C10.4628 7.34434 10.2916 6.93102 10.2916 6.50004C10.2916 6.06906 10.4628 5.65574 10.7675 5.35099C11.0723 5.04625 11.4856 4.87504 11.9166 4.87504V3.79171C11.9166 3.50439 11.8024 3.22884 11.5993 3.02567C11.3961 2.82251 11.1206 2.70837 10.8333 2.70837H2.16659C1.87927 2.70837 1.60372 2.82251 1.40055 3.02567C1.19739 3.22884 1.08325 3.50439 1.08325 3.79171V4.87504Z" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.04175 2.70837V3.79171" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.04175 9.20837V10.2917" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.04175 5.95837V7.04171" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_110_882">
                <rect width="13" height="13" fill="white"/>
                </clipPath>
                </defs>
                </svg>),
              },

              {
                name:"Payment History",
                icon:(<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <g clip-path="url(#clip0_110_890)">
                <path d="M10.8333 2.70837H2.16659C1.56828 2.70837 1.08325 3.1934 1.08325 3.79171V9.20837C1.08325 9.80668 1.56828 10.2917 2.16659 10.2917H10.8333C11.4316 10.2917 11.9166 9.80668 11.9166 9.20837V3.79171C11.9166 3.1934 11.4316 2.70837 10.8333 2.70837Z" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.08325 5.41663H11.9166" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_110_890">
                <rect width="13" height="13" fill="white"/>
                </clipPath>
                </defs>
                </svg>),
              },

              {
                name:"Subscription",
                icon:(<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M11.375 6.5C11.375 5.20707 10.8614 3.96709 9.94715 3.05285C9.03291 2.13861 7.79293 1.625 6.5 1.625C5.13714 1.63013 3.82903 2.16191 2.84917 3.10917L1.625 4.33333" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.625 1.625V4.33333H4.33333" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.625 6.5C1.625 7.79293 2.13861 9.03291 3.05285 9.94715C3.96709 10.8614 5.20707 11.375 6.5 11.375C7.86286 11.3699 9.17098 10.8381 10.1508 9.89083L11.375 8.66667" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.66675 8.66663H11.3751V11.375" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>),
              },

              {
                name:"Tiffin",
                icon:(<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M5.95833 11.7704C6.12302 11.8655 6.30984 11.9156 6.5 11.9156C6.69016 11.9156 6.87698 11.8655 7.04167 11.7704L10.8333 9.60378C10.9979 9.50879 11.1345 9.37221 11.2296 9.20773C11.3247 9.04326 11.3748 8.85667 11.375 8.6667V4.33336C11.3748 4.14339 11.3247 3.9568 11.2296 3.79232C11.1345 3.62785 10.9979 3.49127 10.8333 3.39628L7.04167 1.22961C6.87698 1.13453 6.69016 1.08447 6.5 1.08447C6.30984 1.08447 6.12302 1.13453 5.95833 1.22961L2.16667 3.39628C2.00214 3.49127 1.86549 3.62785 1.77042 3.79232C1.67534 3.9568 1.62519 4.14339 1.625 4.33336V8.6667C1.62519 8.85667 1.67534 9.04326 1.77042 9.20773C1.86549 9.37221 2.00214 9.50879 2.16667 9.60378L5.95833 11.7704Z" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.5 11.9167V6.5" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.78198 3.79163L6.4999 6.49996L11.2178 3.79163" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.0625 2.31287L8.9375 5.10245" stroke="#79716B" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>),
              },
            
            
          ].map((tab) => (
            <button
              key={tab.name}
              type="button"
              className={`md:flex md:flex-shrink-0 md:items-center md:text-[20px] md:pl-[25px] md:justify-center md:gap-[5px] md:h-[34px] md:mr-[18px] md:p-0 md:bg-transparent md:text-[8px] md:cursor-pointer md:max-[600px]:mr-[12px] ${
                activeTab === tab.name
                  ? "history-tab active md:border-b-[#ff6900] md:text-[#bb4d00]"
                  : "history-tab md:flex md:flex-shrink-0 md:items-center md:justify-center md:gap-[5px] md:h-[34px] md:mr-[18px] md:p-0  md:bg-transparent md:text-[#79716b] md:text-[8px] md:cursor-pointer md:max-[600px]:mr-[12px]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}

        </div>

        {/* tab content */}
        {activeTab === "Meal History" ? (
          <div className="meal-history-table" className="md:w-full">

            <div className="meal-history-header" className="md:grid md:h-[60px] md:grid-cols-[1fr_1.2fr_1fr_0.8fr] md:items-center md:px-[15px] md:box-border md:h-[32px] md:bg-[#fffbf0] md:text-[#bb4d00] md:text-[8px] md:font-[400]">
              <span className="md:grid md:min-h-8 md:grid-cols-[1fr_1.2fr_1fr_0.8fr] md:items-center  md:px-[15px] md:text-[16px] md:font-[400] md:font-['Nunito'] md:text-[#BB4D00]">DATE</span>
              <span className="md:grid md:min-h-8 md:grid-cols-[1fr_1.2fr_1fr_0.8fr] md:items-center  md:px-[15px] md:text-[16px] md:font-[400] md:font-['Nunito'] md:text-[#BB4D00]">MEAL</span>
              <span className="md:grid md:min-h-8 md:grid-cols-[1fr_1.2fr_1fr_0.8fr] md:items-center  md:px-[15px] md:text-[16px] md:font-[400] md:font-['Nunito'] md:text-[#BB4D00]">COUPON</span>
              <span className="md:grid md:min-h-8 md:grid-cols-[1fr_1.2fr_1fr_0.8fr] md:items-center  md:px-[15px] md:text-[16px] md:font-[400] md:font-['Nunito'] md:text-[#BB4D00]">STATUS</span>
            </div>

            {mealHistory.map((item, index) => (
              <div
                className="meal-history-row"
                className="md:grid md:grid-cols-[1fr_1.2fr_1fr_0.8fr] md:h-[60px] md:items-center md:px-[15px] md:box-border md:min-h-[32px] md:border-b md:border-[#f0ece7] md:text-[#79716b] md:text-[14px] md:pl-[20px] md:last:border-b-0"
                key={index}
              >
                <span>{item.date}</span>

                <span className="meal-cell" className="md:flex md:items-center md:gap-[5px]">
                {item.meal.trim() === "Lunch" && (
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <g clip-path="url(#clip0_110_933)">
                    <path d="M1.625 1.08337V4.87504C1.625 5.47087 2.1125 5.95837 2.70833 5.95837H4.875C5.16232 5.95837 5.43787 5.84424 5.64103 5.64107C5.8442 5.43791 5.95833 5.16236 5.95833 4.87504V1.08337" stroke="#FF6900" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.79175 1.08337V11.9167" stroke="#FF6900" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.3751 8.12504V1.08337C10.6568 1.08337 9.96791 1.36872 9.46 1.87663C8.95209 2.38454 8.66675 3.07341 8.66675 3.79171V7.04171C8.66675 7.63754 9.15425 8.12504 9.75008 8.12504H11.3751ZM11.3751 8.12504V11.9167" stroke="#FF6900" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_110_933">
                    <rect width="13" height="13" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </svg>
                )}

                {item.meal.trim() === "Dinner" && (
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M11.3669 6.76326C11.3162 7.70368 10.9941 8.60925 10.4396 9.37052C9.88519 10.1318 9.1221 10.7162 8.24262 11.053C7.36313 11.3898 6.4049 11.4647 5.48377 11.2686C4.56264 11.0725 3.71804 10.6137 3.05206 9.94781C2.38609 9.2819 1.92725 8.43735 1.73102 7.51624C1.53479 6.59512 1.60957 5.63689 1.94631 4.75737C2.28306 3.87785 2.86735 3.1147 3.62856 2.56017C4.38978 2.00563 5.29532 1.68346 6.23573 1.6326C6.4551 1.62068 6.56994 1.88176 6.45348 2.06755C6.06396 2.69077 5.89717 3.42761 5.98033 4.15782C6.06349 4.88803 6.39169 5.5685 6.91136 6.08817C7.43104 6.60785 8.1115 6.93604 8.84171 7.0192C9.57193 7.10236 10.3088 6.93557 10.932 6.54605C11.1183 6.4296 11.3789 6.54389 11.3669 6.76326Z" stroke="#E17100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </svg>
                )}

                {item.meal.trim() === "Breakfast" && (
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <g clip-path="url(#clip0_110_969)">
                    <path d="M6.49992 8.66671C7.69654 8.66671 8.66659 7.69666 8.66659 6.50004C8.66659 5.30342 7.69654 4.33337 6.49992 4.33337C5.3033 4.33337 4.33325 5.30342 4.33325 6.50004C4.33325 7.69666 5.3033 8.66671 6.49992 8.66671Z" stroke="#F0B100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.5 1.08337V2.16671" stroke="#F0B100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.5 10.8334V11.9167" stroke="#F0B100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.67041 2.67041L3.43416 3.43416" stroke="#F0B100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.56592 9.5658L10.3297 10.3295" stroke="#F0B100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.08325 6.5H2.16659" stroke="#F0B100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.8333 6.5H11.9166" stroke="#F0B100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.43416 9.5658L2.67041 10.3295" stroke="#F0B100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.3297 2.67041L9.56592 3.43416" stroke="#F0B100" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_110_969">
                    <rect width="13" height="13" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </svg>
                )}

                {item.meal.trim()}
              </span>

                <span>
                  <span
                    className={
                      item.coupon === "—"
                        ? "coupon-none md:inline-flex md:pl-[10px] md:ml-[10px] md:h-[30px] md:w-[80px] md:items-center md:justify-center md:rounded-[15px] md:bg-[#f0f0f0] md:px-[7px] md:py-[3px] md:text-[12px] md:text-[#79716b]"
                        : "coupon-deducted md:inline-flex md:pl-[10px] md:ml-[10px] md:h-[30px] md:w-[80px] md:items-center md:justify-center md:rounded-[15px] md:bg-[#fff0dc] md:px-[7px] md:py-[3px] md:text-[12px] md:text-[#ff6900]"
                    }
                  >
                    {item.coupon}
                  </span>
                </span>

                <span>
                  <span
                    className={
                      item.status === "Present"
                        ? "meal-present md:pl-[10px] md:inline-flex md:ml-[10px] md:h-[30px] md:w-[80px] md:items-center md:justify-center md:rounded-[15px] md:bg-[#dcfce7] md:px-[7px] md:py-[3px] md:text-[12px] md:text-[#16a34a]"
                        : "meal-absent md:inline-flex md:items-center md:ml-[10px] md:h-[30px] md:w-[80px] md:justify-center md:rounded-[15px] md:bg-[#ffe4e6] md:px-[7px] md:py-[3px] md:text-[12px] md:text-[#f43f5e]"
                    }
                  >
                    {item.status}
                  </span>
                </span>
              </div>
            ))}

          </div>
        ) : (
          <div className="empty-history" className="md:flex md:min-h-[100px] md:flex-col md:items-center md:justify-center">
            <p className="md:mb-[5px] md:text-[10px] md:text-[#2c1810]">{activeTab} details</p>
            <span className="md:text-[8px] md:text-[#a6a09b]">No records available.</span>
          </div>
        )}

      </div>

    </div>
  );
};

export default CustomerDetails;