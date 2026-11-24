// import "./DailyReport.css";
import { Calendar } from "lucide-react";
const DailyReport = () => {
  const customers = [
    {
      name: "Rahul Patil",
      type: "Monthly",
      meals: 21,
      coupons: 20,
      amount: "₹3,063",
      status: "Paid",
    },
    {
      name: "Amit Sharma",
      type: "Yearly",
      meals: 24,
      coupons: 8,
      amount: "₹2,138",
      status: "Paid",
    },
    {
      name: "Sneha Joshi",
      type: "Monthly",
      meals: 10,
      coupons: 22,
      amount: "₹2,431",
      status: "Pending",
    },
    {
      name: "Akash More",
      type: "Daily Payment",
      meals: 12,
      coupons: "—",
      amount: "₹3,381",
      status: "Paid",
    },
    {
      name: "Priya Deshmukh",
      type: "Tiffin",
      meals: 9,
      coupons: "—",
      amount: "₹1,511",
      status: "Paid",
    },
  ];

  const summaryCards = [
    {
      value: "4",
      label: "Breakfast Count",
    },
    {
      value: "6",
      label: "Lunch Count",
    },
    {
      value: "3",
      label: "Dinner Count",
    },
    {
      value: "3",
      label: "Tiffin Count",
    },
    {
      value: "2",
      label: "Daily Customers",
    },
    {
      value: "₹4,280",
      label: "Total Collection",
    },
    {
      value: "₹1,200",
      label: "Cash Collection",
    },
    {
      value: "₹3,080",
      label: "Online Collection",
    },
  ];

  return (
    <div className="daily-report-page" className="md:ml-[75px]  md:w-[1155px]  md:min-h-[100vh]   md:p-[2.1875rem_1.25rem_1.875rem_1.25rem]  md:mt-[68px]" >

      {/* content */}
      <div className="daily-report-content" className="md:w-full md:box-border md:px-[22px] md:pt-[20px] md:pb-[28px] ">

        <button
          className="back-reports-button"
          className="md:m-[0_0_11px] md:flex md:gap-[10px] md:p-0 md:border-0 md:bg-transparent md:text-[#ff6900] md:text-[14px] md:cursor-pointer"
          type="button"
          onClick={() => {
            window.location.href = "/reports";
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15" fill="none">
          <path d="M7.5 11.875L3.125 7.5L7.5 3.125" stroke="#F54900" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.875 7.5H3.125" stroke="#F54900" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> Back to Reports
        </button>


        {/* heading */}
        <div className="daily-report-heading" className="md:flex md:items-center md:gap-[8px] md:mb-[15px]">

          <span className="md:text-[#ff6900] md:text-[13px]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4.5 16.5C4.10218 16.5 3.72064 16.342 3.43934 16.0607C3.15804 15.7794 3 15.3978 3 15V3C3 2.60218 3.15804 2.22065 3.43934 1.93934C3.72064 1.65804 4.10218 1.5 4.5 1.5H10.5C10.7374 1.49962 10.9726 1.5462 11.1919 1.63708C11.4112 1.72795 11.6104 1.86132 11.778 2.0295L14.469 4.7205C14.6376 4.88813 14.7714 5.08751 14.8625 5.30712C14.9537 5.52674 15.0004 5.76223 15 6V15C15 15.3978 14.842 15.7794 14.5607 16.0607C14.2794 16.342 13.8978 16.5 13.5 16.5H4.5Z" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.5 1.5V5.25C10.5 5.44891 10.579 5.63968 10.7197 5.78033C10.8603 5.92098 11.0511 6 11.25 6H15" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.5 6.75H6" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 9.75H6" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 12.75H6" stroke="#FF6900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></span>

          <h1 className="md:m-0 md:text-[#2c1810] md:text-[18px] md:font-medium">Daily Report</h1>

          <span className="md:text-[#a6a09b] md:text-[11px]">—</span>

          <strong className="md:text-[#79716b] md:text-[12px] md:font-normal">10 Aug 2026</strong>

        </div>


        {/* summary card */}
        <div className="report-summary-grid" className=" md:grid md:grid-cols-[repeat(4,minmax(0,1fr))] md:gap-[10px] md:mb-[16px]">

          {summaryCards.map((card, index) => (

            <div
              className="report-summary-card"
              className="relative  md:h-[160px] md:min-h-[74px] md:flex md:items-center md:gap-[10px] md:flex-col md:justify-center md:p-[10px_12px] md:box-border md:bg-white  md:border-[#eee7dd] md:rounded-[8px] md:shadow-[0_0_7px]  md:shadow-[rgba(249,115,22,0.5)]"
              key={index}
            >

              <span className="report-card-icon" className="md:mb-[4px]   md:text-[#ff6900] md:text-[14px]">
                {index === 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.99967 10.6667C9.47243 10.6667 10.6663 9.47275 10.6663 7.99999C10.6663 6.52724 9.47243 5.33333 7.99967 5.33333C6.52692 5.33333 5.33301 6.52724 5.33301 7.99999C5.33301 9.47275 6.52692 10.6667 7.99967 10.6667Z"
                      stroke="#FF8904"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 1.33333V2.66666"
                      stroke="#FF8904"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 13.3333V14.6667"
                      stroke="#FF8904"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.28711 3.28667L4.22711 4.22667"
                      stroke="#FF8904"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.7734 11.7733L12.7134 12.7133"
                      stroke="#FF8904"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.33301 8H2.66634"
                      stroke="#FF8904"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.333 8H14.6663"
                      stroke="#FF8904"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.22711 11.7733L3.28711 12.7133"
                      stroke="#FF8904"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.7134 3.28667L11.7734 4.22667"
                      stroke="#FF8904"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                {index === 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2 1.33333V6C2 6.73333 2.6 7.33333 3.33333 7.33333H6C6.35362 7.33333 6.69276 7.19285 6.94281 6.9428C7.19286 6.69276 7.33333 6.35362 7.33333 6V1.33333"
                      stroke="#FF8904"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.66699 1.33333V14.6667"
                      stroke="#FF8904"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.0003 10V1.33333C13.1163 1.33333 12.2684 1.68452 11.6433 2.30964C11.0182 2.93476 10.667 3.78261 10.667 4.66666V8.66666C10.667 9.4 11.267 10 12.0003 10H14.0003ZM14.0003 10V14.6667"
                      stroke="#FF8904"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                  {/* 3 - Dinner */}
                  {index === 2 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path d="M13.9903 8.324C13.9278 9.48143 13.5314 10.596 12.849 11.5329C12.1666 12.4699 11.2274 13.1891 10.145 13.6037C9.06254 14.0183 7.88319 14.1104 6.74948 13.869C5.61578 13.6276 4.57627 13.063 3.75661 12.2434C2.93695 11.4239 2.37223 10.3844 2.13071 9.25074C1.8892 8.11706 1.98123 6.9377 2.39569 5.85521C2.81014 4.77273 3.52927 3.83346 4.46615 3.15096C5.40303 2.46846 6.51754 2.07194 7.67497 2.00933C7.94497 1.99467 8.0863 2.316 7.94297 2.54467C7.46356 3.3117 7.25828 4.21858 7.36063 5.1173C7.46298 6.01602 7.86692 6.85352 8.50652 7.49312C9.14612 8.13272 9.98361 8.53665 10.8823 8.639C11.7811 8.74135 12.6879 8.53607 13.455 8.05667C13.6843 7.91333 14.005 8.054 13.9903 8.324Z"
                        stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}

                  {/* 4 - Tiffin */}
                  {index === 3 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path d="M7.33333 14.4867C7.53603 14.6037 7.76595 14.6653 8 14.6653C8.23405 14.6653 8.46397 14.6037 8.66667 14.4867L13.3333 11.82C13.5358 11.7031 13.704 11.535 13.821 11.3326C13.938 11.1301 13.9998 10.9005 14 10.6667V5.33333C13.9998 5.09952 13.938 4.86987 13.821 4.66744C13.704 4.46501 13.5358 4.29691 13.3333 4.18L8.66667 1.51333C8.46397 1.39631 8.23405 1.3347 8 1.3347C7.76595 1.3347 7.53603 1.39631 7.33333 1.51333L2.66667 4.18C2.46418 4.29691 2.29599 4.46501 2.17897 4.66744C2.06196 4.86987 2.00024 5.09952 2 5.33333V10.6667C2.00024 10.9005 2.06196 11.1301 2.17897 11.3326C2.29599 11.535 2.46418 11.7031 2.66667 11.82L7.33333 14.4867Z"
                        stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 14.6667V8" stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.19336 4.66667L8.00003 8.00001L13.8067 4.66667" stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 2.84666L11 6.28" stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}

                  {/* 5 - Daily Customers */}
                  {index === 4 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path d="M10.6663 14V12.6667C10.6663 11.9594 10.3854 11.2811 9.88529 10.781C9.3852 10.281 8.70692 10 7.99967 10H3.99967C3.29243 10 2.61415 10.281 2.11406 10.781C1.61396 11.2811 1.33301 11.9594 1.33301 12.6667V14"
                        stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.667 2.08533C11.2388 2.23358 11.7453 2.56751 12.1068 3.03471C12.4683 3.50191 12.6645 4.07593 12.6645 4.66667C12.6645 5.25741 12.4683 5.83143 12.1068 6.29862C11.7453 6.76582 11.2388 7.09975 10.667 7.248"
                        stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.667 14V12.6667C14.6666 12.0758 14.4699 11.5018 14.1079 11.0349C13.7459 10.5679 13.2391 10.2344 12.667 10.0867"
                        stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52692 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52692 7.33333 5.99967 7.33333Z"
                        stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}

                    {/* 6 - Total Collection */}
                    {index === 5 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path d="M4 2H12" stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 5.33333H12" stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 8.66667L9.66667 14" stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 8.66667H6" stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 8.66667C10.4447 8.66667 10.4447 2 6 2" stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}

                    {/* 7 - Cash Collection */}
                    {index === 6 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path d="M12.6667 4.66667V2.66667C12.6667 2.48986 12.5964 2.32029 12.4714 2.19526C12.3464 2.07024 12.1768 2 12 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333C2 3.68696 2.14048 4.02609 2.39052 4.27614C2.64057 4.52619 2.97971 4.66667 3.33333 4.66667H13.3333C13.5101 4.66667 13.6797 4.7369 13.8047 4.86193C13.9298 4.98695 14 5.15652 14 5.33333V8M14 8H12C11.6464 8 11.3072 8.14048 11.0572 8.39052C10.8071 8.64057 10.6667 8.97971 10.6667 9.33333C10.6667 9.68696 10.8071 10.0262 11.0572 10.2761C11.3072 10.5262 11.6464 10.6667 12 10.6667H14C14.1768 10.6667 14.3464 10.5964 14.4714 10.4714C14.5964 10.3464 14.6667 10.1768 14.6667 10V8.66667C14.6667 8.48986 14.5964 8.32029 14.4714 8.19526C14.3464 8.07024 14.1768 8 14 8Z"
                          stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H13.3333C13.5101 14 13.6797 13.9298 13.8047 13.8047C13.9298 13.6797 14 13.5101 14 13.3333V10.6667"
                          stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}

                    {/* 8 - Online Collection */}
                    {index === 7 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_68_313)">
                          <path d="M13.333 3.33333H2.66634C1.92996 3.33333 1.33301 3.93029 1.33301 4.66667V11.3333C1.33301 12.0697 1.92996 12.6667 2.66634 12.6667H13.333C14.0694 12.6667 14.6663 12.0697 14.6663 11.3333V4.66667C14.6663 3.93029 14.0694 3.33333 13.333 3.33333Z"
                            stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1.33301 6.66667H14.6663"
                            stroke="#FF8904" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_68_313">
                            <rect width="16" height="16" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    )}

                  </span>

        

              <strong className="md:text-[#2c1810] md:text-[24px] md:font-medium md:leading-[19px]">
                {card.value}
              </strong>

              <small className="md:mt-[3px] md:text-[#ff6900] md:text-[16px]">
                {card.label}
              </small>

            </div>

          ))}

        </div>


        {/* customer summary */}
        <div className="customer-summary-card" className="md:mt-[15px] md:text-[#ff6900] md:text-[10px]">

            <div className="customer-summary-title" className="md:h-[63px] md:flex md:items-center md:gap-[5px] md:px-[13px] md:box-border md:border-b md:border-[#eee7dd] md:whitespace-nowrap">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                className="w-[14px] h-[14px] shrink-0 block"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_68_400)">
                  <path
                    d="M8.75033 1.16666H5.25033C4.92816 1.16666 4.66699 1.42783 4.66699 1.75V2.91666C4.66699 3.23883 4.92816 3.5 5.25033 3.5H8.75033C9.07249 3.5 9.33366 3.23883 9.33366 2.91666V1.75C9.33366 1.42783 9.07249 1.16666 8.75033 1.16666Z"
                    stroke="#FF6900"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M9.33301 2.33334H10.4997C10.8091 2.33334 11.1058 2.45625 11.3246 2.67504C11.5434 2.89384 11.6663 3.19058 11.6663 3.5V11.6667C11.6663 11.9761 11.5434 12.2728 11.3246 12.4916C11.1058 12.7104 10.8091 12.8333 10.4997 12.8333H3.49967C3.19026 12.8333 2.89351 12.7104 2.67472 12.4916C2.45592 12.2728 2.33301 11.9761 2.33301 11.6667V3.5C2.33301 3.19058 2.45592 2.89384 2.67472 2.67504C2.89351 2.45625 3.19026 2.33334 3.49967 2.33334H4.66634"
                    stroke="#FF6900"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M7 6.41666H9.33333"
                    stroke="#FF6900"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M7 9.33334H9.33333"
                    stroke="#FF6900"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M4.66699 6.41666H4.67283"
                    stroke="#FF6900"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M4.66699 9.33334H4.67283"
                    stroke="#FF6900"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                <defs>
                  <clipPath id="clip0_68_400">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h2 className="md:m-0 md:text-[#79716b] md:text-[16px] md:font-medium md:whitespace-nowrap">Customer Summary</h2>

            </div>


          {/* table */}
          <div className="report-table" className="md:w-full  ">

            {/* table headers */}
            <div className="report-table-header" className="md:grid md:grid-cols-[1.7fr_1.15fr_0.8fr_0.95fr_1fr_0.75fr] md:items-center md:px-[13px] md:box-border md:min-h-[65px] md:bg-[#fffbf0] md:text-[#bb4d00] md:text-[14px] md:font-[400] md:font-['Nunito'] ">

              <span>CUSTOMER</span>

              <span>TYPE</span>

              <span>
                MEALS
                <br />
                TAKEN
              </span>

              <span>
                COUPONS
                <br />
                USED
              </span>

              <span>
                AMOUNT
                <br />
                PAID
              </span>

              <span>STATUS</span>

            </div>


            {/* table rows */}
            {customers.map((customer, index) => (

              <div
                className="report-table-row"
                className="md:grid md:grid-cols-[1.7fr_1.15fr_0.8fr_0.95fr_1fr_0.75fr] md:items-center md:px-[13px] md:box-border md:min-h-[60px] md:text-[#79716b] md:text-[13px]"
                key={index}
              >

                {/* customers */}
                <span className="report-customer-name" className="md:text-[#2c1810] md:text-[14px] md:font-medium">
                  {customer.name}
                </span>


                {/* type */}
                <span>

                  <span
                    className={`report-type-badge md:inline-flex md:items-center md:justify-center md:px-[8px] md:py-[5px] md:rounded-[15px] md:bg-[#fff085] md:text-[#bb4d00] md:text-[12px] md:whitespace-nowrap ${customer.type
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {customer.type}
                  </span>

                </span>


                {/* meals */}
                <span>
                  {customer.meals}
                </span>


                {/* coupons */}
                <span
                  className={
                    customer.coupons === "—"
                      ? "report-no-coupon md:text-[#a6a09b] md:text-[12px]"
                      : "report-coupon md:text-[#ff6900] md:text-[12px]"
                  }
                >
                  {customer.coupons}
                </span>


                {/* amount */}
                <span>
                  {customer.amount}
                </span>


                {/* status */}
                <span>

                  <span
                    className={
                      customer.status === "Paid"
                        ? "report-paid md:bg-[#dcfce7] md:text-[#16a34a] md:inline-flex md:items-center md:justify-center md:min-w-[38px] md:px-[7px] md:py-[5px] md:box-border md:rounded-[10px] md:text-[12px]"
                        : "report-pending md:bg-[#ffe4e6] md:text-[#f43f5e] md:inline-flex md:items-center md:justify-center md:min-w-[38px] md:px-[7px] md:py-[5px] md:box-border md:rounded-[10px] md:text-[12px]"
                    }
                  >
                    {customer.status}
                  </span>

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default DailyReport;