import { useMemo, useState } from "react";
import {
  CreditCard,
  Wallet,
  Banknote,
  Clock3,
  CalendarDays,
  Eye,
} from "lucide-react";

import PaymentModal from "../modal/PaymentModal";
import PaymentDetailModal from "../modal/PaymentDetailModal";


// import "./Payments.css";

const Payments = () => {
  /* =========================================
     PAYMENT DATA
  ========================================= */

  const [payments, setPayments] = useState([
    {
      id: 1,
      customer: "Rahul Patil",
      date: "10 Aug 2026",
      type: "Monthly",
      amount: 3000,
      method: "Cash",
      transactionId: "—",
      status: "Completed",
      notes: "",
    },

    {
      id: 2,
      customer: "Amit Sharma",
      date: "15 Jan 2026",
      type: "Yearly",
      amount: 32000,
      method: "UPI",
      transactionId: "UPI2026011",
      status: "Completed",
      notes: "",
    },

    {
      id: 3,
      customer: "Sneha Joshi",
      date: "01 Aug 2026",
      type: "Monthly",
      amount: 1800,
      method: "Cash",
      transactionId: "—",
      status: "Pending",
      notes: "",
    },

    {
      id: 4,
      customer: "Akash More",
      date: "10 Aug 2026",
      type: "Daily",
      amount: 80,
      method: "Cash",
      transactionId: "—",
      status: "Completed",
      notes: "",
    },

    {
      id: 5,
      customer: "Rohit Kulkarni",
      date: "10 Aug 2026",
      type: "Daily",
      amount: 60,
      method: "UPI",
      transactionId: "UPI202608",
      status: "Pending",
      notes: "",
    },
  ]);


  /* =========================================
     MODAL STATES
  ========================================= */

  const [isPaymentModalOpen, setIsPaymentModalOpen] =
    useState(false);

  const [isDetailModalOpen, setIsDetailModalOpen] =
    useState(false);

  const [selectedPayment, setSelectedPayment] =
    useState(null);


  /* =========================================
     FILTER
  ========================================= */

  const [activeFilter, setActiveFilter] = useState("All");


  /* =========================================
     UNIQUE CUSTOMERS
  ========================================= */

  const customers = useMemo(() => {
    return [
      ...new Set(
        payments.map((payment) => payment.customer)
      ),
    ];
  }, [payments]);


  /* =========================================
     FILTERED PAYMENTS
  ========================================= */

  const filteredPayments = useMemo(() => {

    if (activeFilter === "All") {
      return payments;
    }

    if (activeFilter === "Cash") {
      return payments.filter(
        (payment) => payment.method === "Cash"
      );
    }

    if (activeFilter === "Online / UPI") {
      return payments.filter(
        (payment) =>
          payment.method === "UPI" ||
          payment.method === "Online"
      );
    }

    if (activeFilter === "Pending") {
      return payments.filter(
        (payment) => payment.status === "Pending"
      );
    }

    if (activeFilter === "Completed") {
      return payments.filter(
        (payment) => payment.status === "Completed"
      );
    }

    return payments;

  }, [payments, activeFilter]);


  /* =========================================
     SUMMARY VALUES
  ========================================= */

  const totalAmount = payments.reduce(
    (total, payment) => total + payment.amount,
    0
  );

  const cashAmount = payments
    .filter((payment) => payment.method === "Cash")
    .reduce(
      (total, payment) => total + payment.amount,
      0
    );

  const onlineAmount = payments
    .filter(
      (payment) =>
        payment.method === "UPI" ||
        payment.method === "Online"
    )
    .reduce(
      (total, payment) => total + payment.amount,
      0
    );

  const pendingAmount = payments
    .filter((payment) => payment.status === "Pending")
    .reduce(
      (total, payment) => total + payment.amount,
      0
    );


  /* =========================================
     ADD PAYMENT
  ========================================= */

  const handleAddPayment = (paymentData) => {

    const newPayment = {
      id: Date.now(),
      ...paymentData,
    };

    setPayments((previousPayments) => [
      ...previousPayments,
      newPayment,
    ]);

    setIsPaymentModalOpen(false);
  };


  /* =========================================
     VIEW PAYMENT
  ========================================= */

  const handleViewPayment = (payment) => {

    setSelectedPayment(payment);

    setIsDetailModalOpen(true);
  };


  /* =========================================
     CLOSE DETAIL
  ========================================= */

  const closeDetailModal = () => {

    setIsDetailModalOpen(false);

    setSelectedPayment(null);
  };


  /* =========================================
     FORMAT CURRENCY
  ========================================= */

  const formatAmount = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };


  return (
    <div className="payments-page" className="  md:ml-[75px]  md:w-[1155px]  md:h-auto   md:p-[2.1875rem_1.25rem_1.875rem_1.50rem]  md:mt-[68px]">

      {/* =====================================
          PAGE HEADER
      ===================================== */}

      <div className="payments-page-header"  className=" md:mb-[18px]  md:flex  md:items-center  md:justify-between">

        <div className="payments-page-title"  className=" md:flex  md:items-center  md:gap-[12px]">

          <CreditCard size={23} className=" md:text-[#ff6500]"/>

          <h2 className=" md:m-0  md:text-[24px]  md:font-medium  md:text-[#333333]">Payments</h2>

        </div>


        <button
          className="payments-add-btn"
          className=" md:flex  md:h-[33px]  md:items-center  md:gap-[7px]  md:rounded-[9px]  md:border-none  md:bg-[#ff6500]  md:px-[15px]  md:text-[11px]  md:text-white  md:cursor-pointer"
          onClick={() =>
            setIsPaymentModalOpen(true)
          }
        >
          <span className=" md:text-[17px]  md:leading-none">+</span>
          Add Payment
        </button>

      </div>


      {/* =====================================
          SUMMARY CARDS
      ===================================== */}

      <div className="payment-summary-grid" className=" md:h-[180px]  md:flex  md:items-center  md:mt-[25px]  md:justify-around ">

        {/* TOTAL */}

        <div className="payment-summary-card" className=" md:h-[160px]  md:w-[252px]  md:border-[#FEF9C2]  md:bg-white  md:rounded-2xl   md:pt-[15px]  md:pl-[55px]  md:items-center  md:justify-around  md:shadow-[0_0_7px]  md:shadow-[rgba(249,115,22,0.5)]">

          <div className="summary-card-icon" className=" md:h-[42px]  md:w-[132px]  md:text-[#BB4D00]  md:flex  md:justify-center  md:items-center">
            <Wallet size={23} />
          </div>

          <div className="summary-card-amount" className=" md:h-[42px]  md:w-[132px]  md:flex  md:items-center  md:justify-center   md:text-[#292524]  md:font-['Nunito']  md:text-[25px]  md:font-[400]  md:font-normal  md:pl-[1px]  md:pt-[10px]">
            {formatAmount(totalAmount)}
          </div>

          <div className="summary-card-label" className=" md:h-[42px]  md:w-[132px]  md:flex  md:items-center  md:justify-center   md:text-[#BB4D00]  md:font-['Nunito']    md:text-[18px]  md:font-[600]  md:font-normal  md:pl-[1px]">
            Total
          </div>

        </div>


        {/* CASH */}

        <div className="payment-summary-card" className=" md:h-[160px]  md:w-[252px]  md:border-[#FEF9C2]  md:bg-white  md:rounded-2xl   md:pt-[15px]  md:pl-[55px]  md:items-center  md:justify-around  md:shadow-[0_0_7px]  md:shadow-[rgba(249,115,22,0.5)]">

          <div className="summary-card-icon"className="summary-card-icon" className=" md:h-[42px]  md:w-[132px]  md:text-[#BB4D00]  md:flex  md:justify-center  md:text-[23px]  md:items-center">
            ₹
          </div>

          <div className="summary-card-amount" className=" md:h-[42px]  md:w-[132px]  md:flex  md:items-center  md:justify-center   md:text-[#292524]  md:font-['Nunito']  md:text-[25px]  md:font-[400]  md:font-normal  md:pl-[1px]  md:pt-[10px]">
            {formatAmount(cashAmount)}
          </div>

          <div className="summary-card-label" className=" md:h-[42px]  md:w-[132px]  md:flex  md:items-center  md:justify-center   md:text-[#BB4D00]  md:font-['Nunito']    md:text-[18px]  md:font-[600]  md:font-normal  md:pl-[1px]">
            Cash
          </div>

        </div>


        {/* ONLINE */}

        <div className="payment-summary-card" className=" md:h-[160px]  md:w-[252px]  md:border-[#FEF9C2]  md:bg-white  md:rounded-2xl   md:pt-[15px]  md:pl-[55px]  md:items-center  md:justify-around  md:shadow-[0_0_7px]  md:shadow-[rgba(249,115,22,0.5)]">

          <div className="summary-card-icon" className="summary-card-icon" className=" md:h-[42px]  md:w-[132px]  md:text-[#BB4D00]  md:flex  md:justify-center  md:items-center">
            <CreditCard size={23} />
          </div>

          <div className="summary-card-amount" className=" md:h-[42px]  md:w-[132px]  md:flex  md:items-center  md:justify-center   md:text-[#292524]  md:font-['Nunito']  md:text-[25px]  md:font-[400]  md:font-normal  md:pl-[1px]  md:pt-[10px]">
            {formatAmount(onlineAmount)}
          </div>

          <div className="summary-card-label" className=" md:h-[42px]  md:w-[132px]  md:flex  md:items-center  md:justify-center   md:text-[#BB4D00]  md:font-['Nunito']    md:text-[18px]  md:font-[600]  md:font-normal  md:pl-[1px]">
            Online
          </div>

        </div>


        {/* PENDING */}

        <div className="payment-summary-card" className=" md:h-[160px]  md:w-[252px]  md:border-[#FEF9C2]  md:bg-white  md:rounded-2xl   md:pt-[15px]  md:pl-[55px]  md:items-center  md:justify-around  md:shadow-[0_0_7px]  md:shadow-[rgba(249,115,22,0.5)]">

          <div className="summary-card-icon" className="summary-card-icon" className=" md:h-[42px]  md:w-[132px]  md:text-[#BB4D00]  md:flex  md:justify-center  md:items-center">
            <Clock3 size={23} />
          </div>

          <div className="summary-card-amount" className=" md:h-[42px]  md:w-[132px]  md:flex  md:items-center  md:justify-center   md:text-[#292524]  md:font-['Nunito']  md:text-[25px]  md:font-[400]  md:font-normal  md:pl-[1px]  md:pt-[10px]">
            {formatAmount(pendingAmount)}
          </div>

          <div className="summary-card-label" className=" md:h-[42px]  md:w-[132px]  md:flex  md:items-center  md:justify-center   md:text-[#BB4D00]  md:font-['Nunito']    md:text-[18px]  md:font-[600]  md:font-normal  md:pl-[1px]">
            Pending
          </div>

        </div>

      </div>  
        {/* TODAY */}
        
        <div className=" md:h-[180px]  md:p-[15px]  md:flex  md:items-center  md:mt-[5px]  md:justify-baseline">
        
        <div className="payment-summary-card" className=" md:h-[160px]  md:w-[252px]  md:border-[#FEF9C2]  md:bg-white  md:rounded-2xl   md:pt-[15px]  md:pl-[55px]  md:items-center  md:justify-around  md:shadow-[0_0_7px]  md:shadow-[rgba(249,115,22,0.5)]">

          <div className="summary-card-icon" className="summary-card-icon" className=" md:h-[42px]  md:w-[132px]  md:text-[#BB4D00]  md:flex  md:justify-center  md:items-center">
            <CalendarDays size={23} />
          </div>

          <div className="summary-card-amount" className=" md:h-[42px]  md:w-[132px]  md:flex  md:items-center  md:justify-center   md:text-[#292524]  md:font-['Nunito']  md:text-[25px]  md:font-[400]  md:font-normal  md:pl-[1px]  md:pt-[10px]">
            ₹4,280
          </div>

          <div className="summary-card-label" className=" md:h-[42px]  md:w-[132px]  md:flex  md:items-center  md:justify-center   md:text-[#BB4D00]  md:font-['Nunito']    md:text-[18px]  md:font-[600]  md:font-normal  md:pl-[1px]">
            Today's
          </div>

        </div>

        </div>



      


      {/* =====================================
          FILTERS
      ===================================== */}

      <div className="payment-filters" className=" md:mb-[14px]  md:mt-[20px]  md:gap-[15px]  md:flex-wrap  md:flex ">

        {[
          "All",
          "Cash",
          "Online / UPI",
          "Pending",
          "Completed",
        ].map((filter) => (

          <button
            key={filter}
            className={` md:h-[40px]   md:rounded-[15px]  md:border  md:border-solid  md:px-[12px]  md:text-[18px]   md:cursor-pointer ${
              activeFilter === filter
                ? "payment-filter active  md:border-[#ff6500]  md:bg-[#ff6500]  md:text-white"
                : "payment-filter  md:border-[#f0dfaa]  md:bg-white  md:text-[#777777]"
            }`}
            onClick={() =>
              setActiveFilter(filter)
            }
          >
            {filter}
          </button>

        ))}

      </div>


      {/* =====================================
          PAYMENT TABLE
      ===================================== */}

      <div className="payments-table-card" className=" md:w-full  md:overflow-x-auto  md:mt-[40px]  md:rounded-[12px]  md:border  md:border-solid  md:border-[#f1e4b8]  md:bg-white  md:shadow-[0_2px_5px_rgba(100,80,20,0.06)]">

        <table className="payments-table" className=" md:w-full  md:min-w-[720px]  md:border-collapse">

          <thead className=" md:bg-[#fffbed]  md:h-[70px]">

            <tr>
              <th className=" md:h-[37px]  md:whitespace-nowrap    md:text-[#b84f00]  md:text-[16px]  md:font-bold  md:font-['Nunito']  md:font-[700]  md:text-uppercase  md:border-[1px]  md:border-solid  md:border-[#FEFCE8]">CUSTOMER</th>
              <th className=" md:h-[37px]  md:whitespace-nowrap    md:text-[#b84f00]  md:text-[16px]  md:font-bold  md:font-['Nunito']  md:font-[700]  md:text-uppercase  md:border-[1px]  md:border-solid  md:border-[#FEFCE8]">DATE</th>
              <th className=" md:h-[37px]  md:whitespace-nowrap    md:text-[#b84f00]  md:text-[16px]  md:font-bold  md:font-['Nunito']  md:font-[700]  md:text-uppercase  md:border-[1px]  md:border-solid  md:border-[#FEFCE8]">TYPE</th>
              <th className=" md:h-[37px]  md:whitespace-nowrap    md:text-[#b84f00]  md:text-[16px]  md:font-bold  md:font-['Nunito']  md:font-[700]  md:text-uppercase  md:border-[1px]  md:border-solid  md:border-[#FEFCE8]">AMOUNT</th>
              <th className=" md:h-[37px]  md:whitespace-nowrap    md:text-[#b84f00]  md:text-[16px]  md:font-bold  md:font-['Nunito']  md:font-[700]  md:text-uppercase  md:border-[1px]  md:border-solid  md:border-[#FEFCE8]">METHOD</th>
              <th className=" md:h-[37px]  md:whitespace-nowrap    md:text-[#b84f00]  md:text-[16px]  md:font-bold  md:font-['Nunito']  md:font-[700]  md:text-uppercase  md:border-[1px]  md:border-solid  md:border-[#FEFCE8]">TXN ID</th>
              <th className=" md:h-[37px]  md:whitespace-nowrap    md:text-[#b84f00]  md:text-[16px]  md:font-bold  md:font-['Nunito']  md:font-[700]  md:text-uppercase  md:border-[1px]  md:border-solid  md:border-[#FEFCE8]">STATUS</th>
              <th className=" md:h-[37px]  md:whitespace-nowrap    md:text-[#b84f00]  md:text-[16px]  md:font-bold  md:font-['Nunito']  md:font-[700]  md:text-uppercase  md:border-[1px]  md:border-solid  md:border-[#FEFCE8]  md:pl-[10px]">ACTION</th>
            </tr>

          </thead>


          <tbody>

            {filteredPayments.map((payment) => (

              <tr key={payment.id} className=" md:h-[68px]  md:border-t  md:border-solid  md:border-t-[#f5f1e5]   md:py-[7px] ">

                {/* CUSTOMER */}

                <td className=" md:h-[58px]  md:border-t  md:border-solid  md:border-t-[#f5f1e5]   md:py-[7px]  md:text-[#555555]  md:text-[11px]">
                  <span className="payment-customer" className=" md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[16px]  md:text-[#292524]  md:pl-[20px]">
                    {payment.customer}
                  </span>
                </td>


                {/* DATE */}

                <td className=" md:pl-[10px]   md:py-4  md:text-[16px]  md:font-['Nunito']  md:font-[400]  md:font-normal  md:text-[#79716B] ">
                  <span className="payment-date">
                    {payment.date}
                  </span>
                </td>


                {/* TYPE */}

                <td className=" md:h-[58px]  md:border-t  md:border-solid  md:border-t-[#f5f1e5]  md:pl-[20px]   md:py-[7px]  md:text-[#555555]  md:text-[11px]">
                  <span className="payment-type-badge" className=" md:inline-flex  md:items-center  md:rounded-[30px]  md:border  md:border-solid  md:border-[#f6e7a9]  md:bg-[#fff6cf]  md:px-[9px]  md:py-[4px]  md:text-[#d99b00]  md:text-[14px]">
                    {payment.type}
                  </span>
                </td>


                {/* AMOUNT */}

                <td className=" md:h-[58px]  md:border-t  md:border-solid  md:border-t-[#f5f1e5]  md:pl-[20px]  md:py-[7px]  md:text-[#555555]  md:text-[11px]">
                  <span className="payment-amount" className=" md:text-[#ff4d00]  md:text-[16px]">
                    {formatAmount(payment.amount)}
                  </span>
                </td>


                {/* METHOD */}

                <td className=" md:h-[58px]  md:border-t  md:border-solid  md:border-t-[#f5f1e5]  md:pl-[20px]  md:py-[7px]  md:text-[#555555]  md:text-[11px]">

                  <span
                        className={` md:inline-flex  md:items-center  md:justify-center  md:rounded-[30px]  md:px-[9px]  md:py-[4px]  md:text-[14px] ${
                          payment.method === "Cash"
                            ? " md:bg-[#dce9ff]  md:text-[#3e78c4]"
                            : " md:bg-[#dce9ff]  md:text-[#3e78c4]"
                        }`}
                      >
                        {payment.method}
                      </span>

                </td>


                {/* TRANSACTION ID */}

                <td className=" md:h-[58px]  md:border-t  md:border-solid  md:border-t-[#f5f1e5]  md:pl-[70px]  md:py-[7px]  md:text-[#555555]  md:text-[11px]">
                  <span className="payment-txn" className=" md:text-[#aaaaaa]  md:text-[16px]">
                    {payment.transactionId}
                  </span>
                </td>


                {/* STATUS */}

                <td className=" md:h-[58px]  md:border-t  md:border-solid  md:border-t-[#f5f1e5]  md:py-[7px]  md:text-[#555555]  md:vtext-[11px]">

                  <span
                    className={` md:inline-flex  md:items-center  md:rounded-[10px]  md:px-[9px]  md:py-[4px]  md:text-[9px] ${
                      payment.status === "Completed"
                        ? "payment-status completed  md:flex  md:justify-center  md:align-middle  md:pt-[8px]  md:ml-[40px]  md:bg-[#DCFCE7]   md:border-[1px]  md:border-solid  md:border-[#B9F8CF]  md:rounded-[30px]  md:w-[90px]  md:h-[30px]  md:text-[14px]  md:text-[#008236] "
                        : "payment-status pending  md:flex  md:justify-center  md:align-middle  md:pt-[8px]  md:ml-[40px]  md:bg-[#FFE2E2]   md:border-[1px]  md:border-solid  md:border-[#FFC9C9]  md:rounded-[30px]  md:w-[90px]  md:h-[30px]  md:text-[14px]  md:text-[#C10007] "
                    }`}
                  >
                    {payment.status}
                  </span>

                </td>


                {/* ACTION */}

                <td className=" md:h-[68px]  md:border-t  md:border-solid  md:border-t-[#f5f1e5]  md:pl-[40px]   md:py-[7px]  md:text-[#555555]  md:text-[11px]">

                  <button
                    className="payment-view-btn"
                     className=" md:inline-flex  md:h-[35px]  md:w-[90px]  md:flex  md:justify-center  md:items-center  md:gap-[10px]  md:rounded-[30px]  md:border-none  md:bg-[#fff4bd]  md:px-[10px]  md:text-[#bd8700]  md:text-[14px]  md:cursor-pointer  md:hover:bg-[#ffed91]"
                    onClick={() =>
                      handleViewPayment(payment)
                    }
                  >
                    <Eye size={16} />
                    View
                  </button>

                </td>

              </tr>

            ))}


            {filteredPayments.length === 0 && (

              <tr>

                <td
                  colSpan="8"
                  className="no-payments"
                  className=" md:!p-[30px]  md:!text-center  md:!text-[#999999]"
                >
                  No payments found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>


      {/* =====================================
          ADD PAYMENT MODAL
      ===================================== */}

      {isPaymentModalOpen && (

        <PaymentModal
          customers={customers}
          onClose={() =>
            setIsPaymentModalOpen(false)
          }
          onSave={handleAddPayment}
        />

      )}


      {/* =====================================
          PAYMENT DETAIL MODAL
      ===================================== */}

      {isDetailModalOpen && selectedPayment && (

        <PaymentDetailModal
          payment={selectedPayment}
          onClose={closeDetailModal}
        />

      )}

    </div>
  );
};

export default Payments;