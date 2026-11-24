import { useState } from "react";
import {
  Ticket,
  X,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const CouponModal = ({ onClose, onSave }) => {

  // ================================
  // CUSTOMER
  // ================================

  const [customer, setCustomer] = useState("Rahul Patil");


  // ================================
  // ACTION
  // ================================

  const [action, setAction] = useState("add");


  // ================================
  // PLAN
  // ================================

  const [selectedPlan, setSelectedPlan] = useState("monthly");


  // ================================
  // CUSTOM VALUES
  // ================================

  const [customCoupons, setCustomCoupons] = useState("");
  const [customValidity, setCustomValidity] = useState("");


  // ================================
  // BALANCE
  // ================================

  const [balance, setBalance] = useState("");


  // ================================
  // ERROR
  // ================================

  const [error, setError] = useState("");


  // ================================
  // PLANS
  // ================================

  const plans = {
    monthly: {
      name: "Monthly",
      coupons: 30,
      validity: 30,
      description: "30 coupons · 30 days",
    },

    twentyDays: {
      name: "20 Days",
      coupons: 20,
      validity: 20,
      description: "20 coupons · 20 days",
    },

    sixMonths: {
      name: "6 Months",
      coupons: 180,
      validity: 180,
      description: "180 coupons · 6 months",
    },

    custom: {
      name: "Custom",
      coupons: Number(customCoupons) || 0,
      validity: Number(customValidity) || 0,
      description: "Set your own count & validity",
    },
  };


  const currentPlan = plans[selectedPlan];


  // ================================
  // ACTION CHANGE
  // ================================

  const handleActionChange = (newAction) => {
    setAction(newAction);
    setError("");

    // Reset fields when changing action
    if (newAction !== "setBalance") {
      setBalance("");
    }
  };


  // ================================
  // PLAN CHANGE
  // ================================

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    setError("");
  };


  // ================================
  // SAVE
  // ================================

  const handleSave = () => {

    setError("");


    // ----------------------------
    // ADD COUPONS
    // ----------------------------

    if (action === "add") {

      if (selectedPlan === "custom") {

        if (!customCoupons || Number(customCoupons) <= 0) {
          setError("Please enter a valid coupon count.");
          return;
        }

        if (!customValidity || Number(customValidity) <= 0) {
          setError("Please enter a valid coupon validity.");
          return;
        }
      }

      const data = {
        customer,
        action: "add",
        plan: currentPlan.name,
        coupons: currentPlan.coupons,
        validity: currentPlan.validity,
      };

      console.log("Coupon Data:", data);

      onSave?.(data);
      onClose();

      return;
    }


    // ----------------------------
    // REMOVE COUPONS
    // ----------------------------

    if (action === "remove") {

      if (selectedPlan === "custom") {

        if (!customCoupons || Number(customCoupons) <= 0) {
          setError("Please enter the number of coupons to remove.");
          return;
        }
      }

      const data = {
        customer,
        action: "remove",
        plan: currentPlan.name,
        coupons: currentPlan.coupons,
      };

      console.log("Remove Coupon Data:", data);

      onSave?.(data);
      onClose();

      return;
    }


    // ----------------------------
    // SET BALANCE
    // ----------------------------

    if (action === "setBalance") {

      if (!balance || Number(balance) < 0) {
        setError("Please enter a valid balance.");
        return;
      }

      const data = {
        customer,
        action: "setBalance",
        balance: Number(balance),
      };

      console.log("Balance Data:", data);

      onSave?.(data);
      onClose();
    }
  };


  return (
    <div id="modal-overlay" className="md:fixed md:inset-0 md:flex md:items-center md:justify-center md:bg-[ rgba(0, 0, 0, 0.55)] md:z-index-[2000]">

      <div id="coupon-modal" className="md:w-[480px] md:mt-[50px] md:bg-[#FFFFFF] md:rounded-[13px] md:overflow-hidden md:shadow-[0_15px_40px] md:shadow-[rgba(0, 0, 0, 0.2)] md:font-['Nunito']">


        {/* =================================
            HEADER
        ================================= */}

        <div id="modal-header" className="md:h-[57px] md:flex md:items-center  md:justify-between md:p-[0_17px] md:border-b-[1px] md:border-b-solid md:border-b-[#EEE8DC]">

          <div id="modal-title" className=" md:flex md:items-center md:gap-[10px] md:text-[14px] md:font-['Nunito'] md:font-[400] md:text-[#333333]">

            <Ticket
              size={16}
              className="md:text-[#FF6900]"
              strokeWidth={1.8}
            />

            <span>
              Add / Adjust Coupon
            </span>

          </div>


          <button type="button" id="modal-close" className="md:flex md:w-[25px] md:h-[25px] md:p-0 md:border-none md:bg-[transparent] md:text-[#AAA39A] md:cursor-pointer md:items-center md:justify-center md:hover:text-[#555]" onClick={onClose}>
            <X size={17} />
          </button>

        </div>


        {/* =================================
            BODY
        ================================= */}

        <div id="modal-body" className="md:p-[15px_16px_16px]">


          {/* =================================
              CUSTOMER
          ================================= */}

          <div className="form-group">

            <label id="modal-label" className="md:block md:mb-[6px] md:text-[14px] md:font-[500] md:text-[#DF5F16]">
              Customer
            </label>


            <div className="customer-select-wrapper">

              <select
                id="customer-select"
                className="md:w-full md:h-[31px] md:p-[0_11px] md:border-[1px] md:border-solid md:border-[#F2D77B] md:rounded-[8px] md:outline-none md:bg-[#FFFFFF] md:text-[#444444] md:text-[10px] md:cursor-pointer md:bg-[#FF6500]"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              >

                <option value="Rahul Patil">
                  Rahul Patil
                </option>

                <option value="Amit Sharma">
                  Amit Sharma
                </option>

                <option value="Sneha Joshi">
                  Sneha Joshi
                </option>

                <option value="Neha Shah">
                  Neha Shah
                </option>

              </select>

            </div>

          </div>


          {/* =================================
              ACTION
          ================================= */}

        
              <div id="action-section" className="md:mt-[14px]">
                <label className="md:block md:mb-[6px] md:text-[14px] md:font-medium md:text-[#DF5F16]">
                  Action
                </label>

                <div id="action-buttons" className="md:flex md:items-center md:gap-[7px]">

                  <button
                    type="button"
                    className={`md:h-[25px] md:px-[11px] md:rounded-[7px] md:font-['Nunito'] md:text-[12px] md:cursor-pointer md:border md:border-solid ${
                      action === "add"
                        ? "md:border-[#ff6500] md:bg-[#ff6500] md:text-white"
                        : "md:border-[#f0d36b] md:bg-white md:text-[#777777] md:hover:bg-[#fffaf0]"
                    }`}
                    onClick={() => handleActionChange("add")}
                  >
                    Add Coupons
                  </button>

                  <button
                    type="button"
                    className={`md:h-[25px] md:px-[11px] md:rounded-[7px] md:font-['Nunito'] md:text-[12px] md:cursor-pointer md:border md:border-solid ${
                      action === "remove"
                        ? "md:border-[#ff6500] md:bg-[#ff6500] md:text-white"
                        : "md:border-[#f0d36b] md:bg-white md:text-[#777777] md:hover:bg-[#fffaf0]"
                    }`}
                    onClick={() => handleActionChange("remove")}
                  >
                    Remove Coupons
                  </button>

                  <button
                    type="button"
                    className={`md:h-[25px] md:px-[11px] md:rounded-[7px] md:font-['Nunito'] md:text-[12px] md:cursor-pointer md:border md:border-solid ${
                      action === "setBalance"
                        ? "md:border-[#ff6500] md:bg-[#ff6500] md:text-white"
                        : "md:border-[#f0d36b] md:bg-white md:text-[#777777] md:hover:bg-[#fffaf0]"
                    }`}
                    onClick={() => handleActionChange("setBalance")}
                  >
                    Set Balance
                  </button>

                </div>
              </div>



          {/* =================================
              COUPON PLAN
          ================================= */}

          {action !== "setBalance" && (

            <div className="plan-section" className="md:mt-[18px]">

              <label id="modal-label"  className="md:block md:mb-[6px] md:text-[14px] md:font-[500] md:text-[#DF5F16]">
                Select Coupon Plan
              </label>


              <div className="plan-grid" className="md:grid md:grid-cols-2 md:mt-[15px] md:gap-[7px]">


                {/* MONTHLY */}

                <button
                  type="button"
                  className={`md:relative md:min-h-[74px] md:p-[9px_10px] md:border md:border-solid md:rounded-[10px] md:text-[12px] md:bg-white md:cursor-pointer md:transition-all md:duration-200 md:hover:bg-[#fffdf4] ${
                    selectedPlan === "monthly"
                      ? "plan-card selected md:border-2 md:border-[#ff6500] md:bg-[#fff8ef]"
                      : "plan-card md:border-[#f2d84f]"
                   }` }
                  onClick={() => handlePlanChange("monthly")}
                >

                  <span className="plan-name" 
                          className={`md:block md:mb-[4px] md:text-[12px] md:font-medium ${
                          selectedPlan === "monthly"
                            ? "md:text-[#ff6500]"
                            : "md:text-[#444444]"
                        }`}>
                    Monthly
                  </span>

                  <span className="plan-description" className="md:block md:mb-[7px] md:text-[12px] md:text-[#999999]">
                    30 coupons · 30 days
                  </span>

                  <div className="plan-coupon-info" className="md:flex md:items-center md:justify-center md:gap-[4px] md:text-[12px] md:text-[#ff6500]">

                    <Ticket
                      size={10}
                      strokeWidth={1.8}
                    />

                    <span>
                      30 coupons
                    </span>

                    <span className="plan-validity" className="md:text-[12px] md:text-[#ff6500]">
                      · 30d validity
                    </span>

                  </div>

                </button>


                {/* 20 DAYS */}

                <button
                  type="button"
                  className={`md:relative md:min-h-[74px] md:p-[9px_10px] md:border md:border-solid md:rounded-[10px] md:bg-white md:cursor-pointer md:transition-all md:duration-200 md:hover:bg-[#fffdf4] ${
                    selectedPlan === "twentyDays"
                      ? "plan-card selected md:border-2 md:border-[#ff6500] md:bg-[#fff8ef]"
                      : "plan-card md:border-[#f2d84f]"
                  }`}
                  onClick={() => handlePlanChange("twentyDays")}
                >

                  <span className="plan-name" 
                          className={`md:block md:mb-[4px] md:text-[12px] md:font-medium ${
                          selectedPlan === "twentyDays"
                            ? "md:text-[#ff6500]"
                            : "md:text-[#444444]"
                             }`}>
                    20 Days
                  </span>

                  <span className="plan-description" className="md:block md:mb-[7px] md:text-[12px] md:text-[#999999]">
                    20 coupons · 20 days
                  </span>

                  <div className="plan-coupon-info" className="md:flex md:items-center md:gap-[4px] md:justify-center md:text-[12px] md:text-[#ff6500]">

                    <Ticket
                      size={10}
                      strokeWidth={1.8}
                    />

                    <span>
                      20 coupons
                    </span>

                    <span className="plan-validity" className="md:text-[12px] md:text-[#ff6500]">
                      · 20d validity
                    </span>

                  </div>

                </button>


                {/* 6 MONTHS */}

                <button
                  type="button"
                  className={`md:relative md:min-h-[74px]  md:p-[9px_10px] md:border md:border-solid md:rounded-[10px] md:bg-white md:cursor-pointer md:transition-all md:duration-200 md:hover:bg-[#fffdf4] ${
                    selectedPlan === "sixMonths"
                      ? "plan-card selected md:border-2 md:border-[#ff6500] md:bg-[#fff8ef]"
                      : "plan-card md:border-[#f2d84f]"
                  }`}
                  onClick={() => handlePlanChange("sixMonths")}
                >

                  <span className="plan-name" 
                              className={`md:block md:mb-[4px] md:text-[12px] md:font-medium ${
                              selectedPlan === "sixMonths"
                                ? "md:text-[#ff6500]"
                                : "md:text-[#444444]"
                            }`}>
                    6 Months
                  </span>

                  <span className="plan-description" className="md:block md:mb-[7px] md:text-[12px] md:text-[#999999]">
                    180 coupons · 6 months
                  </span>

                  <div className="plan-coupon-info" className="md:flex md:items-center md:gap-[4px] md:justify-center md:text-[12px] md:text-[#ff6500]">

                    <Ticket
                      size={10}
                      strokeWidth={1.8}
                    />

                    <span>
                      180 coupons
                    </span>

                    <span className="plan-validity" className="md:text-[12px] md:text-[#ff6500]">
                      · 180d validity
                    </span>

                  </div>


                  <span className="best-value" className="md:absolute md:top-[6px] md:right-[6px]">
                    Best Value
                  </span>

                </button>


                {/* CUSTOM */}

                <button
                  type="button"
                  className={`md:relative md:min-h-[74px] md:p-[9px_10px] md:border md:border-solid md:rounded-[10px] md:bg-white md:cursor-pointer md:transition-all md:duration-200 md:hover:bg-[#fffdf4] ${
                    selectedPlan === "Custom"
                      ? "plan-card selected md:border-2 md:border-[#ff6500] md:bg-[#fff8ef]"
                      : "plan-card md:border-[#f2d84f]"
                  }`}
                  onClick={() => handlePlanChange("custom")}
                >

                  <span className="plan-name"
                      className={`md:block md:mb-[4px] md:text-[12px] md:font-medium ${
                              selectedPlan === "monthly"
                                ? "md:text-[#ff6500]"
                                : "md:text-[#444444]"
                            }`}
                  >
                    Custom
                  </span>

                  <span className="plan-description" className="md:block md:mb-[7px] md:text-[12px] md:text-[#999999]">
                    Set your own count & validity
                  </span>

                </button>

              </div>


              {/* =================================
                  CUSTOM INPUTS
              ================================= */}

              {selectedPlan === "custom" && (

                <div className="custom-fields" className="md:mt-[9px] md:grid md:grid-cols-2 md:gap-[8px]">

                  <div className="custom-field" className="md:flex md:flex-col md:gap-[5px]">

                    <label className="md:text-[12px] md:font-medium md:text-[#df5f16]">
                      Coupon Count
                    </label>

                    <input
                      type="number"
                      min="1"
                      value={customCoupons}
                      onChange={(e) =>
                        setCustomCoupons(e.target.value)
                      }
                      placeholder="e.g. 50"
                      className="md:w-full md:h-[40px] md:px-[9px] md:border md:border-solid md:border-[#f2d77b] md:rounded-[7px] md:outline-none md:font-['Nunito'] md:text-[12px] md:focus:border-[#ff6500]"
                    />

                  </div>


                  <div className="custom-field" className="md:flex md:flex-col md:gap-[5px]">

                    <label className="md:text-[12px] md:font-medium md:text-[#df5f16]">
                      Validity (Days)
                    </label>

                    <input
                      type="number"
                      min="1"
                      value={customValidity}
                      onChange={(e) =>
                        setCustomValidity(e.target.value)
                      }
                      placeholder="e.g. 30"
                      className="md:w-full md:h-[40px] md:px-[9px] md:border md:border-solid md:border-[#f2d77b] md:rounded-[7px] md:outline-none md:font-['Nunito'] md:text-[12px] md:focus:border-[#ff6500]"
                    />

                  </div>

                </div>

              )}

            </div>

          )}


          {/* =================================
              SUMMARY
          ================================= */}

          <div className="summary-box" className="md:mt-[13px] md:min-h-[57px] md:p-[9px_11px] md:border md:border-solid md:border-[#f7d8b5] md:rounded-[9px] md:bg-[#fff7ee] md:flex md:items-center md:gap-[10px]">

            <div className="summary-icon" className="md:text-[#ff6500]">

              <Ticket
                size={21}
                strokeWidth={1.8}
              />

            </div>


            <div className="summary-content" className="md:flex md:flex-col md:gap-[3px]">

              <span className="summary-title" className="md:text-[14px] md:text-[#555555]">
                Summary
              </span>


              {action === "add" && (

                <span className="summary-text" className="md:text-[12px] md:text-[#9b4b17]">

                  <strong className="md:text-[#b64d0c]">
                    {currentPlan.coupons || 0} coupons will be added
                  </strong>

                  {" · "}

                  Valid for{" "}

                  <strong className="md:text-[#b64d0c]">
                    {currentPlan.validity || 0} days
                  </strong>

                </span>

              )}


              {action === "remove" && (

                <span className="summary-text" className="md:text-[8px] md:text-[#9b4b17]">

                  <strong className="md:text-[#b64d0c]">
                    {currentPlan.coupons || 0} coupons will be removed
                  </strong>

                </span>

              )}


              {action === "setBalance" && (

                <span className="summary-text" className="md:text-[8px] md:text-[#9b4b17]">

                  <strong className="md:text-[#b64d0c]">
                    Balance will be set to {balance || 0} coupons
                  </strong>

                </span>

              )}

            </div>

          </div>


          {/* =================================
              ERROR
          ================================= */}

          {error && (

            <div className="modal-error" className="md:mt-[9px] md:flex md:items-start md:gap-[6px] md:p-[8px_10px] md:rounded-[7px] md:bg-[#fff0ed] md:text-[#d94b32] md:text-[8px] md:leading-[12px]">

              <AlertTriangle
                size={12}
              />

              <span>
                {error}
              </span>

            </div>

          )}


          {/* =================================
              WARNING
          ================================= */}

          <div className="warning-box" className="md:mt-[11px] md:flex md:items-start md:gap-[7px] md:p-[9px_10px] md:rounded-[8px] md:bg-[#fffced] md:text-[#b96d18] md:text-[12px] md:leading-[12px]">

            <AlertTriangle
              size={14}
              strokeWidth={1.8}
              className="md:mt-[1px] md:shrink-0 md:text-[#e99518]"
            />

            <span>
              Manual coupon changes are permanent and
              cannot be undone. Please confirm before saving.
            </span>

          </div>

        </div>


        {/* =================================
            FOOTER
        ================================= */}

        <div className="modal-footer" className="md:h-[61px] md:flex md:items-center md:justify-end md:gap-[13px] md:px-[16px] md:border-t md:border-solid md:border-t-[#eee8dc] md:bg-white">

          <button
            type="button"
            className="modal-cancel"
            className="md:border-none md:bg-transparent md:text-[#777777] md:font-['Nunito'] md:text-[13px] md:cursor-pointer md:hover:text-[#333333]"
            onClick={onClose}
          >
            Cancel
          </button>


          <button
            type="button"
            className="modal-confirm"
            className="md:h-[31px] md:flex md:items-center md:justify-center md:gap-[5px] md:px-[13px] md:border-none md:rounded-[8px] md:bg-[#ff6500] md:text-white md:font-['Nunito'] md:text-[13px] md:font-medium md:cursor-pointer md:hover:bg-[#e95d00]"
            onClick={handleSave}
          >

            <CheckCircle
              size={12}
              strokeWidth={1.8}
              className="shrink-0"
            />

            Confirm & Save

          </button>

        </div>

      </div>

    </div>
  );
};

export default CouponModal;