import { useState } from "react";
import {
  CreditCard,
  X,
  Wallet,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

// import "./PaymentModal.css";

const PaymentModal = ({
  customers = [],
  onClose,
  onSave,
}) => {

  /* =========================================
     FORM STATE
  ========================================= */

  const [customer, setCustomer] = useState(
    customers[0] || ""
  );

  const [paymentType, setPaymentType] =
    useState("Monthly");

  const [amount, setAmount] = useState("");

  const [date, setDate] = useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("Cash");

  const [transactionId, setTransactionId] =
    useState("");

  const [notes, setNotes] = useState("");


  /* =========================================
     PAYMENT TYPE
  ========================================= */

  const paymentTypes = [
    "Monthly",
    "Yearly",
    "Daily",
    "Tiffin",
    "Single Meal",
  ];


  /* =========================================
     SUBMIT
  ========================================= */

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!customer) {
      alert("Please select a customer.");
      return;
    }

    if (!amount) {
      alert("Please enter amount.");
      return;
    }

    if (!date) {
      alert("Please select payment date.");
      return;
    }

    const paymentData = {

      customer,

      date: new Date(date).toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ),

      type: paymentType,

      amount: Number(amount),

      method: paymentMethod,

      transactionId:
        transactionId.trim() || "—",

      status: "Completed",

      notes,

    };

    onSave(paymentData);
  };


  return (

    <div className="payment-modal-overlay" className="md:fixed md:inset-0 md:z-[9999] md:flex md:items-center md:justify-center md:bg-[rgba(0,0,0,0.76)] md:p-[15px]">

      <div className="payment-modal" className=" md:w-[480px] md:max-h-[95vh] md:overflow-y-auto md:rounded-[15px] md:bg-white md:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="payment-modal-header" className="md:flex md:h-[61px] md:items-center md:justify-between md:border-b md:border-solid md:border-b-[#f1eadb] md:px-[18px]">

          <div className="payment-modal-title" className="md:flex md:items-center md:gap-[8px] md:text-[#333333] md:text-[14px]">

            <CreditCard size={16}  className="md:text-[#ff6500]" />

            <span>
              Add Payment
            </span>

          </div>


          <button
            type="button"
            className="payment-modal-close"
            className="md:border-none md:bg-transparent md:text-[#999999] md:cursor-pointer"
            onClick={onClose}
          >
            <X size={17} />
          </button>

        </div>


        {/* =====================================
            FORM
        ===================================== */}

        <form
          className="payment-modal-form"
          className="md:p-[17px_18px_0]"
          onSubmit={handleSubmit}
        >

          {/* CUSTOMER */}

          <div className="payment-form-section" className="md:mb-[13px]">

            <label className="md:mb-[6px] md:block md:text-[14px] md:text-[#e85d04] md:uppercase">
              Customer
            </label>

            <select
              value={customer}
              className="md:box-border md:h-[34px] md:w-full md:rounded-[9px] md:border md:border-solid md:border-[#f2dc8b] md:bg-white md:px-[11px] md:text-[12px] md:text-[#444444] md:outline-none md:focus:border-[#ff6500]"
              onChange={(e) =>
                setCustomer(e.target.value)
              }
            >

              <option value="">
                Select Customer
              </option>

              {customers.map((item) => (

                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>

              ))}

            </select>

          </div>


          {/* PAYMENT TYPE */}

          <div className="payment-form-section" className="md:mb-[13px]">

            <label className="md:mb-[6px] md:block md:text-[14px] md:text-[#e85d04] md:uppercase">
              Payment Type
            </label>

            <div className="payment-type-options" className="md:flex md:flex-wrap md:gap-[7px]">

              {paymentTypes.map((type) => (

                <button
                  key={type}
                  type="button"
                  className={`md:h-[29px] md:rounded-[8px] md:border md:border-solid md:px-[11px] md:text-[9px] md:cursor-pointer ${
                    paymentType === type
                      ? "payment-type-option active md:border-[#ff6500] md:bg-[#ff6500] md:text-white"
                      : "payment-type-option md:border-[#f1dc92] md:bg-white md:text-[#777777]"
                  }`}
                  onClick={() =>
                    setPaymentType(type)
                  }
                >
                  {type}
                </button>

              ))}

            </div>

          </div>


          {/* AMOUNT + DATE */}

          <div className="payment-two-column" className="md:grid md:grid-cols-2 md:gap-[10px]">

            <div className="payment-form-section" className="md:mb-[13px]">

              <label className="md:mb-[6px] md:block md:text-[14px] md:text-[#e85d04] md:uppercase">
                Amount (₹)
              </label>

              <input
                type="number"
                className="md:box-border md:h-[34px] md:w-full md:rounded-[9px] md:border md:border-solid md:border-[#f2dc8b] md:bg-white md:px-[11px] md:text-[11px] md:text-[#444444] md:outline-none md:focus:border-[#ff6500]"
                min="0"
                placeholder="0"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value)
                }
              />

            </div>


            <div className="payment-form-section" className="md:mb-[13px]">

              <label className="md:mb-[6px] md:block md:text-[14px] md:text-[#e85d04] md:uppercase">
                Date
              </label>

              <input
                type="date"
                className="md:box-border md:h-[34px] md:w-full md:rounded-[9px] md:border md:border-solid md:border-[#f2dc8b] md:bg-white md:px-[11px] md:text-[11px] md:text-[#444444] md:outline-none md:focus:border-[#ff6500]"
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)
                }
              />

            </div>

          </div>


          {/* PAYMENT METHOD */}

          <div className="payment-form-section" className="md:mb-[13px]">

            <label className="md:mb-[6px] md:block md:text-[14px] md:text-[#e85d04] md:uppercase">
              Payment Method
            </label>

            <div className="payment-method-options" className="md:grid md:grid-cols-4 md:gap-[8px]">

              <button
                type="button"
                className={`md:flex md:h-[53px] md:flex-col md:items-center md:justify-center md:gap-[4px] md:rounded-[9px] md:border md:border-solid md:text-[14px] md:cursor-pointer ${
                  paymentMethod === "Cash"
                    ? "payment-method-option active md:border-2 md:border-[#ff6500] md:bg-[#fffaf4] md:text-[#ff6500]"
                    : "payment-method-option md:border-[#f1dc92] md:bg-white md:text-[#777777]"
                }`}
                onClick={() =>
                  setPaymentMethod("Cash")
                }
              >

                <Wallet size={15}
                className={
                    paymentMethod === "Cash"
                      ? "md:text-[#ff6500]"
                      : "md:text-[#777777]"
                  } 
                />

                <span>
                  Cash
                </span>

              </button>


              <button
                type="button"
                className={`md:flex md:h-[53px] md:flex-col md:items-center md:justify-center md:gap-[4px] md:rounded-[9px] md:border md:border-solid md:text-[14px] md:cursor-pointer ${
                  paymentMethod === "UPI"
                    ? "payment-method-option active md:border-2 md:border-[#ff6500] md:bg-[#fffaf4] md:text-[#ff6500]"
                    : "payment-method-option md:border-[#f1dc92] md:bg-white md:text-[#777777]"
                }`}
                onClick={() =>
                  setPaymentMethod("UPI")
                }
              >

                <CreditCard size={15} className={
                          paymentMethod === "UPI"
                            ? "md:text-[#ff6500]"
                            : "md:text-[#777777]"
                        }/>

                <span>
                  UPI
                </span>

              </button>


              <button
                type="button"
                className={`md:flex md:h-[53px] md:flex-col md:items-center md:justify-center md:gap-[4px] md:rounded-[9px] md:border md:border-solid md:text-[14px] md:cursor-pointer ${
                  paymentMethod === "Online"
                    ? "payment-method-option active md:border-2 md:border-[#ff6500] md:bg-[#fffaf4] md:text-[#ff6500]"
                    : "payment-method-option md:border-[#f1dc92] md:bg-white md:text-[#777777]"
                }`}
                onClick={() =>
                  setPaymentMethod("Online")
                }
              >

                <ArrowUpRight size={15} className={
                              paymentMethod === "Online"
                                ? "md:text-[#ff6500]"
                                : "md:text-[#777777]"
                            }/>

                <span>
                  Online
                </span>

              </button>


              <button
                type="button"
                className={`md:flex md:h-[53px] md:flex-col md:items-center md:justify-center md:gap-[4px] md:rounded-[9px] md:border md:border-solid md:text-[14px] md:cursor-pointer ${
                  paymentMethod === "Card"
                    ? "payment-method-option active md:border-2 md:border-[#ff6500] md:bg-[#fffaf4] md:text-[#ff6500]"
                    : "payment-method-option md:border-[#f1dc92] md:bg-white md:text-[#777777]"
                }`}
                onClick={() =>
                  setPaymentMethod("Card")
                }
              >

                <CreditCard size={15} className={
                              paymentMethod === "Card"
                                ? "md:text-[#ff6500]"
                                : "md:text-[#777777]"
                            } />

                <span>
                  Card
                </span>

              </button>

            </div>

          </div>


          {/* TRANSACTION ID */}

          <div className="payment-form-section" className="md:mb-[13px]">

            <label className="md:mb-[6px] md:block md:text-[14px] md:text-[#e85d04] md:uppercase">
              Transaction ID (optional)
            </label>

            <input
              type="text"
              className="md:box-border md:h-[34px] md:w-full md:rounded-[9px] md:border md:border-solid md:border-[#f2dc8b] md:bg-white md:px-[11px] md:text-[12px] md:text-[#444444] md:outline-none md:focus:border-[#ff6500]"
              placeholder="UPI / Online Txn ID"
              value={transactionId}
              onChange={(e) =>
                setTransactionId(e.target.value)
              }
            />

          </div>


          {/* NOTES */}

          <div className="payment-form-section" className="md:mb-[13px]">

            <label className="md:mb-[6px] md:block md:text-[14px] md:text-[#e85d04] md:uppercase">
              Notes
            </label>

            <textarea
              placeholder="Any notes..."
               className="md:box-border md:w-full md:rounded-[9px] md:border md:border-solid md:border-[#f2dc8b] md:bg-white md:p-[9px_11px] md:text-[12px] md:text-[#444444] md:outline-none md:resize-none md:focus:border-[#ff6500]"
              value={notes}
              onChange={(e) =>
                setNotes(e.target.value)
              }
              rows="2"
            />

          </div>


          {/* FOOTER */}

          <div className="payment-modal-footer" className="md:mt-[16px] md:mx-[-18px] md:flex md:items-center md:justify-end md:gap-[15px] md:border-t md:border-solid md:border-t-[#f1eadb] md:px-[18px] md:py-[13px]">

            <button
              type="button"
              className="payment-cancel-btn"
              className="md:border-none md:bg-transparent md:text-[#666666] md:text-[13px] md:cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>


            <button
              type="submit"
              className="payment-save-btn"
              className="md:flex md:h-[33px] md:items-center md:gap-[6px] md:rounded-[9px] md:border-none md:bg-[#ff6500] md:px-[14px] md:text-[13px] md:text-white md:cursor-pointer"
            >

              <CheckCircle size={14} />

              Save Payment

            </button>

          </div>

        </form>

      </div>

    </div>

  );
};

export default PaymentModal;