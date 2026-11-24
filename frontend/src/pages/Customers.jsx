import { useState } from "react";
// import "./Customers.css";
import "../Rutuja-style/Customers.css";
import AddNewCustomer from "../modal/AddNewCustomer";
import CustomerDetails from "../pages/CustomerDetails";

const Customers = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const customers = [
    {
      name: "Rahul Patil",
      mobile: "9876543210",
      type: "Monthly",
      meals: ["Breakfast", "Lunch", "Dinner"],
      coupons: 10,
      status: "Paid",
      expiry: "31 Aug 2026",
    },
    {
      name: "Amit Sharma",
      mobile: "9823456789",
      type: "Yearly",
      meals: ["Lunch", "Dinner"],
      coupons: 22,
      status: "Paid",
      expiry: "15 Jan 2027",
    },
    {
      name: "Sneha Joshi",
      mobile: "9812345678",
      type: "Monthly",
      meals: ["Lunch"],
      coupons: 8,
      status: "Pending",
      expiry: "31 Aug 2026",
    },
  ];

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.mobile.includes(search);

    const matchesFilter =
      filter === "All" || customer.status === filter;
    return matchesSearch && matchesFilter;
  });

      const customersPerPage = filteredCustomers.length;

    const startIndex = (currentPage - 1) * customersPerPage;

    const paginatedCustomers = filteredCustomers.slice(
      startIndex,
      startIndex + customersPerPage
    );

  const handleAddCustomer = () => {
    setShowAddCustomer(true);
  };

  const handleView = (customer) => {
    window.location.href = `/customer-details?name=${encodeURIComponent(
      customer.name
    )}&mobile=${customer.mobile}&type=${customer.type}`;
  };

  const handleEdit = (customer) => {
    alert(`Edit ${customer.name}`);
  };

  {showAddCustomer && (
    <AddNewCustomer
      onClose={() => setShowAddCustomer(false)}
    />
  )}

  return (
    <div id="customers-page" className=" md:ml-[75px]  md:w-[1155px]  md:h-auto   md:p-[2.1875rem_1.25rem_1.875rem_1.50rem]  md:mt-[68px]">

      {/* page title */}
    <div className="customers-page-title" className="  md:flex  md:items-center  md:justify-betweem  md:gap-[10px]  md:mb-[20px]">
      <div className="customers-title-left" className=" md:flex  md:items-center  md:gap-[10px]">
        <span className="customers-title-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
        <path d="M12 15.75V14.25C12 13.4544 11.6839 12.6913 11.1213 12.1287C10.5587 11.5661 9.79565 11.25 9 11.25H4.5C3.70435 11.25 2.94129 11.5661 2.37868 12.1287C1.81607 12.6913 1.5 13.4544 1.5 14.25V15.75" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 2.34599C12.6433 2.51277 13.213 2.88844 13.6198 3.41404C14.0265 3.93964 14.2471 4.58541 14.2471 5.24999C14.2471 5.91458 14.0265 6.56035 13.6198 7.08595C13.213 7.61155 12.6433 7.98722 12 8.15399" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5 15.75V14.25C16.4995 13.5853 16.2783 12.9396 15.871 12.4142C15.4638 11.8889 14.8936 11.5137 14.25 11.3475" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.75 8.25C8.40685 8.25 9.75 6.90685 9.75 5.25C9.75 3.59315 8.40685 2.25 6.75 2.25C5.09315 2.25 3.75 3.59315 3.75 5.25C3.75 6.90685 5.09315 8.25 6.75 8.25Z" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></span>
        <h1  className=" md:font-['Nunito']  md:text-[#292524]  md:gap-[15px]  md:text-[24px]  md:font-[400]  md:font-normal  md:flex  md:items-center ">Customers</h1>
      </div>
    </div>

    <div className="customers-actions" className=" md:grid  md:grid-cols-[minmax(300px,1fr)_120px_auto]  md:items-center  md:gap-4  md:mb-5  md:max-[700px]:grid-cols-1">

        <div className="customer-search-box" className=" md:flex  md:h-[38px]  md:min-w-0  md:items-center  md:gap-2  md:box-border  md:px-3  md:bg-white  md:border  md:border-solid  md:border-[#FFF085]  md:rounded-[8px]">

          <input
            type="text"
            placeholder="Search by name or mobile..."
            value={search}
            onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className=" md:w-full  md:h-full  md:min-w-0  md:flex-1  md:border-0  md:outline-none  md:bg-transparent  md:text-[11px]  md:text-[#2c1810]  md:placeholder:text-[#a6a09b]"
          />
        </div>

        <select
          className="customer-filter"
           className=" md:h-[38px]  md:px-[10px]  md:border  md:border-solid  md:border-[#FFF085]  md:rounded-lg  md:bg-white  md:text-[#2c1810]  md:text-[10px]  md:outline-none  md:cursor-pointer  md:max-[700px]:w-full"
          value={filter}
          onChange={(e) => {
          setFilter(e.target.value);
          setCurrentPage(1);
        }}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button
          type="button"
          className="add-customer-button"
           className=" md:h-[38px]  md:w-[136px]  md:p-0  md:border-0  md:rounded-[9px]  md:bg-[#ff6900]  md:text-white  md:text-[11px]  md:cursor-pointer  md:hover:bg-[#bb4d00]"
          onClick={() => setShowAddCustomer(true)}
        >
          + Add Customer
        </button>

      </div>

      {/* customers table */}
      <div className="customers-table" className=" md:w-full  md:bg-white  md:border  md:border-solid  md:border-[#FFF085]  md:rounded-[10px]  md:overflow-hidden  md:box-border">

        {/* table table */}
        <div className="customer-table-header" className="min-h-[42px] grid grid-cols-[1.55fr_1.05fr_0.85fr_0.75fr_0.75fr_0.85fr_1fr_0.9fr] items-center  box-border bg-[#fffbf0] border-b border-solid border-b-[#FFF085] text-[#79716b] text-[9px] font-medium uppercase">
          <span className="  md:items-center  md:p-[20px_30px]   md:text-[#BB4D00]  md:text-[16px]  md:font-[700]  md:font-bold  md:text-uppercase  md:font-['Nunito']  md:border-[#FEFCE8] ">Customer</span>
          <span className="  md:items-center  md:p-[20px_40px]   md:text-[#BB4D00]  md:text-[16px]  md:font-[700]  md:font-bold  md:text-uppercase  md:font-['Nunito']  md:border-[#FEFCE8] ">Mobile</span>
          <span className="  md:items-center  md:p-[20px_40px]   md:text-[#BB4D00]  md:text-[16px]  md:font-[700]  md:font-bold  md:text-uppercase  md:font-['Nunito']  md:border-[#FEFCE8] ">Type</span>
          <span className="  md:items-center  md:p-[20px_40px]   md:text-[#BB4D00]  md:text-[16px]  md:font-[700]  md:font-bold  md:text-uppercase  md:font-['Nunito']  md:border-[#FEFCE8] ">Meals</span>
          <span className="  md:items-center  md:p-[20px_30px]   md:text-[#BB4D00]  md:text-[16px]  md:font-[700]  md:font-bold  md:text-uppercase  md:font-['Nunito']  md:border-[#FEFCE8] ">Coupons</span>
          <span className="  md:items-center  md:p-[20px_40px]   md:text-[#BB4D00]  md:text-[16px]  md:font-[700]  md:font-bold  md:text-uppercase  md:font-['Nunito']  md:border-[#FEFCE8] ">Status</span>
          <span className="  md:items-center  md:p-[20px_40px]   md:text-[#BB4D00]  md:text-[16px]  md:font-[700]  md:font-bold  md:text-uppercase  md:font-['Nunito']  md:border-[#FEFCE8] ">Expiry</span>
          <span className="  md:items-center  md:p-[20px_40px]   md:text-[#BB4D00]  md:text-[16px]  md:font-[700]  md:font-bold  md:text-uppercase  md:font-['Nunito']  md:border-[#FEFCE8] ">Actions</span>
        </div>

        {/* customer row */}
        {paginatedCustomers.map((customer, index) => (

          <div className="customer-row" className=" md:hover:bg-[#fffdf7]  md:flex h-[98px]"  key={index}>

            {/* customer */}
            <div className="customer-name" className=" md:flex  md:items-center  md:ml-[5px]  md:w-[160px]  md:gap-2">

              <span className="  md:flex  md:items-center  md:justify-center  md:rounded-[50%]  md:w-[37px]  md:h-[37px]  md:shrink-0  md:bg-gradient-to-b  md:from-[#FFDF20]  md:to-[#FF8904]  md:text-[BB4D00]  md:text-[12px]  md:text-[#FFFFFF]  md:font-['Nunito']   md:font-[400]">
                {customer.name.charAt(0)}
              </span>

              <span className=" md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[16px]  md:text-[#292524] ">{customer.name}</span>

            </div>

            {/* mobile */}
            <span className="  md:ml-[10px]  md:flex  md:items-center  md:justify-center  md:w-[120px]  md:py-4  md:text-[18px]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[#79716B] ">{customer.mobile}</span>

            {/* type */}
            <span>
              <span
                className={` md:inline-flex  md:items-center   md:h-[40px]  md:w-[80px]  md:flex  md:items-center  md:justify-center  md:ml-[30px]  md:mt-[30px]  md:rounded-[10px]  md:text-[8px] ${

                   customer.type.toLowerCase() === "monthly" ||
                   customer.type.toLowerCase() === "weekly"
                      ? " md:bg-[#fff085]  md:text-[#bb4d00]  md:text-[12px]"
                      : " md:bg-[#fff085]  md:text-[#bb4d00]  md:text-[12px]"

                }`}
              >
                {customer.type}
              </span>
            </span>

            {/* meals */}
            <span className=" meal-list" className=" md:text-[16px]  md:w-[160px]  md:flex  md:items-center  md:justify-center  md:ml-[10px]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[#79716B]">
              {Array.isArray(customer.meals) ? (
                customer.meals.map((meal) => (
                  <span key={meal}>{meal}</span>
                ))
              ) : (
                <span>{customer.meals}</span>
              )}
            </span>

            {/* coupons */}
            <span className="coupon-count" className=" md:flex  md:items-center  md:text-[16px]  md:w-[50px]  md:justify-center  md:gap-[5px]  md:ml-[25px]  md:text-[#F54900]">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <g clip-path="url(#clip0_20_2976)">
              <path d="M1.08325 4.875C1.51423 4.875 1.92755 5.04621 2.2323 5.35095C2.53705 5.6557 2.70825 6.06903 2.70825 6.5C2.70825 6.93098 2.53705 7.3443 2.2323 7.64905C1.92755 7.9538 1.51423 8.125 1.08325 8.125V9.20834C1.08325 9.49565 1.19739 9.7712 1.40055 9.97437C1.60372 10.1775 1.87927 10.2917 2.16659 10.2917H10.8333C11.1206 10.2917 11.3961 10.1775 11.5993 9.97437C11.8024 9.7712 11.9166 9.49565 11.9166 9.20834V8.125C11.4856 8.125 11.0723 7.9538 10.7675 7.64905C10.4628 7.3443 10.2916 6.93098 10.2916 6.5C10.2916 6.06903 10.4628 5.6557 10.7675 5.35095C11.0723 5.04621 11.4856 4.875 11.9166 4.875V3.79167C11.9166 3.50435 11.8024 3.2288 11.5993 3.02564C11.3961 2.82247 11.1206 2.70834 10.8333 2.70834H2.16659C1.87927 2.70834 1.60372 2.82247 1.40055 3.02564C1.19739 3.2288 1.08325 3.50435 1.08325 3.79167V4.875Z" stroke="#F54900" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.04175 2.70834V3.79167" stroke="#F54900" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.04175 9.20834V10.2917" stroke="#F54900" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.04175 5.95834V7.04167" stroke="#F54900" stroke-width="1.08333" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_20_2976">
              <rect width="13" height="13" fill="white"/>
              </clipPath>
              </defs>
              </svg>
                 {customer.coupons}
            </span>

            {/* status */}
            <span>
              <span
              className={
                customer.status === "Paid"
                  ? "status-badge paid md:flex md:justify-center md:align-middle md:pt-[8px] md:ml-[80px] md:mt-[30px] md:bg-[#DCFCE7]  md:border-[1px] md:border-solid md:border-[#B9F8CF] md:rounded-[30px] md:w-[80px] md:h-[35px] md:text-[14px] md:text-[#008236] "
                  : "status-badge pending md:flex md:justify-center md:align-middle md:pt-[8px] md:ml-[80px] md:mt-[30px] md:bg-[#FFE2E2]  md:border-[1px] md:border-solid md:border-[#FFC9C9] md:rounded-[30px] md:w-[80px] md:h-[35px] md:text-[14px] md:text-[#C10007] "
              }
            >
              {customer.status}
            </span>
            </span>

            {/* expiry */}
            <span className=" md:text-[16px]  md:items-center  md:flex  md:font-['Nunito']  md:ml-[55px]  md:font-[400]  md:font-normal  md:text-[#79716B]">{customer.expiry}</span>

            {/* actions */}
            <div className="customer-actions-buttons" className="  md:mt-[5px]   md:gap-[10px]  md:text-sm  md:text-[#444444]  md:ml-[50px]  md:mr-[10px] ">

              <button
                className="edit-button"
                className=" md:bg-[#fff0dc]  md:h-[40px]  md:w-[90px]  md:gap-[12px]  md:rounded-[30px]  md:flex  md:items-center  md:justify-center  md:text-[#bb4d00]  md:text-[14px]  md:hover:bg-[#ffe5c7]" 
                type="button"
                onClick={() => handleEdit(customer)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <g clip-path="url(#clip0_20_2991)">
                <path d="M10.587 3.406C10.8513 3.14171 10.9999 2.78323 10.9999 2.40943C11 2.03562 10.8515 1.6771 10.5872 1.41275C10.3229 1.1484 9.96445 0.999856 9.59064 0.999809C9.21684 0.999762 8.85832 1.14821 8.59397 1.4125L1.92097 8.087C1.80488 8.20275 1.71902 8.34527 1.67097 8.502L1.01047 10.678C0.997545 10.7212 0.996569 10.7672 1.00764 10.8109C1.01872 10.8547 1.04143 10.8946 1.07337 10.9265C1.1053 10.9584 1.14528 10.981 1.18905 10.992C1.23282 11.003 1.27875 11.002 1.32197 10.989L3.49847 10.329C3.65505 10.2814 3.79755 10.196 3.91347 10.0805L10.587 3.406Z" stroke="#CA3500" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 2.5L9.5 4.5" stroke="#CA3500" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_20_2991">
                <rect width="12" height="12" fill="white"/>
                </clipPath>
                </defs>
                </svg> Edit
              </button>

              <button
                className="view-button"
                className=" md:bg-[#fde3e5]  md:h-[40px]  md:w-[90px]  md:gap-[12px]  md:mt-[5px]  md:rounded-[30px]  md:text-[14px]  md:flex  md:items-center  md:justify-center  md:text-[#d76b75]  md:hover:bg-[#fbd3d7]  md:mb-[10px]" 
                type="button"
                onClick={() => handleView(customer)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1.03101 5.826C0.989338 5.93825 0.989338 6.06174 1.03101 6.174C1.43686 7.15807 2.12577 7.99948 3.01039 8.59155C3.89502 9.18362 4.93553 9.49969 6.00001 9.49969C7.06449 9.49969 8.105 9.18362 8.98962 8.59155C9.87425 7.99948 10.5632 7.15807 10.969 6.174C11.0107 6.06174 11.0107 5.93825 10.969 5.826C10.5632 4.84192 9.87425 4.00052 8.98962 3.40845C8.105 2.81638 7.06449 2.50031 6.00001 2.50031C4.93553 2.50031 3.89502 2.81638 3.01039 3.40845C2.12577 4.00052 1.43686 4.84192 1.03101 5.826Z" stroke="#894B00" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 7.5C6.82843 7.5 7.5 6.82843 7.5 6C7.5 5.17157 6.82843 4.5 6 4.5C5.17157 4.5 4.5 5.17157 4.5 6C4.5 6.82843 5.17157 7.5 6 7.5Z" stroke="#894B00" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> View
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* pagination */}
      <div className="customers-pagination" className=" md:mt-[25px]  md:flex  md:items-center  md:justify-between">
        <span  className=" md:text-[20px]  md:text-black">Showing 1 to {filteredCustomers.length}</span>

        <div className="pagination-buttons" className=" md:flex  md:gap-[10px]">
          <button
            type="button"
            className="md:w-[26px]  md:h-[26px]  md:flex  md:items-center  md:justify-center  md:border-[1px]  md:border-solid  md:border-[#A6A09B]  md:bg-[#FFFFFF]  md:text-[#79716B]  md:text-[16px]  md:cursor-pointer  md:rounded-[5px]"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ‹
          </button>

          <button
            type="button"
            className={currentPage === 1 ? "active-page md:w-[26px]  md:h-[26px]  md:flex  md:items-center  md:justify-center  md:border-[1px]  md:border-solid  md:border-[#FF6900]  md:bg-[#FF6900]  md:text-[#FFFFFF]  md:text-[16px]  md:cursor-pointer  md:rounded-[5px] " : "md:w-[26px]  md:h-[26px]  md:flex  md:items-center  md:justify-center  md:border-[1px]  md:border-solid  md:border-[#A6A09B]  md:bg-[#FFFFFF]  md:text-[#79716B]  md:text-[16px]  md:cursor-pointer  md:rounded-[5px]"}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>

          <button
            type="button"
            className={currentPage === 2 ? "active-page md:w-[26px]  md:h-[26px]  md:flex  md:items-center  md:justify-center  md:border-[1px]  md:border-solid  md:border-[#FF6900]  md:bg-[#FF6900]  md:text-[#FFFFFF]  md:text-[16px]  md:cursor-pointer  md:rounded-[5px] " : "md:w-[26px]  md:h-[26px]  md:flex  md:items-center  md:justify-center  md:border-[1px]  md:border-solid  md:border-[#A6A09B]  md:bg-[#FFFFFF]  md:text-[#79716B]  md:text-[16px]  md:cursor-pointer  md:rounded-[5px]"}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>

          <button
            type="button"
            className={currentPage === 3 ? "active-page md:w-[26px]  md:h-[26px]  md:flex  md:items-center  md:justify-center  md:border-[1px]  md:border-solid  md:border-[#FF6900]  md:bg-[#FF6900]  md:text-[#FFFFFF]  md:text-[16px]  md:cursor-pointer  md:rounded-[5px] " : "md:w-[26px]  md:h-[26px]  md:flex  md:items-center  md:justify-center  md:border-[1px]  md:border-solid  md:border-[#A6A09B]  md:bg-[#FFFFFF]  md:text-[#79716B]  md:text-[16px]  md:cursor-pointer  md:rounded-[5px]"}
            onClick={() => setCurrentPage(3)}
          >
            3
          </button>

          <button
            type="button"
            className="md:w-[26px]  md:h-[26px]  md:flex  md:items-center  md:justify-center  md:border-[1px]  md:border-solid  md:border-[#A6A09B]  md:bg-[#FFFFFF]  md:text-[#79716B]  md:text-[16px]  md:cursor-pointer  md:rounded-[5px]"
            disabled={currentPage === 3}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            ›
          </button>

          {showAddCustomer && (
            <AddNewCustomer
              onClose={() => setShowAddCustomer(false)}
            />
          )}
                  </div>
                </div>

    </div>
  );
};

export default Customers;