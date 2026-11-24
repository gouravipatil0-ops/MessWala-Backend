import { useState } from "react";

import {
  RotateCcw,
  X,
  CalendarDays,
  TrendingUp,
  Sun,
  Utensils,
  Moon,
  CheckCircle,
  CreditCard,
} from "lucide-react";

const SubscriptionsModal = ({ subscription, customers, onClose, onSave }) => {
  /* =========================================
     PLAN
  ========================================= */

  const [plan, setPlan] = useState(subscription?.plan || "Monthly");

  /*   =================================================
      CUSTOMER
 ==================================================== */

  const [customer, setCustomer] = useState(subscription?.customer || "");

  /* =========================================
     MEALS
  ========================================= */

  const [meals, setMeals] = useState(
    subscription?.meals
      ? subscription.meals.split(", ")
      : ["Breakfast", "Lunch", "Dinner"],
  );

  /* =========================================
     DATES
  ========================================= */

  const [startDate, setStartDate] = useState(subscription?.start || "");

  const [endDate, setEndDate] = useState(subscription?.expiry || "");

  /* =========================================
     PAYMENT
  ========================================= */

  const [paymentMethod, setPaymentMethod] = useState(
    subscription?.paymentMethod || "Cash",
  );

  /* =========================================
     PLAN DATA
  ========================================= */

  const planData = {
    Monthly: {
      price: 3000,
      coupons: 30,
    },

    Yearly: {
      price: 32000,
      coupons: 360,
    },
  };

  /* =========================================
     TOGGLE MEAL
  ========================================= */

  const toggleMeal = (meal) => {
    setMeals((previousMeals) => {
      if (previousMeals.includes(meal)) {
        return previousMeals.filter((item) => item !== meal);
      }

      return [...previousMeals, meal];
    });
  };

  /* =========================================
     SAVE
  ========================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subscription && !customer) {
      alert("Please select a customer.");

      return;
    }

    if (!startDate || !endDate) {
      alert("Please select start and end date.");

      return;
    }

    if (meals.length === 0) {
      alert("Please select at least one meal.");

      return;
    }

    const data = {
      customer: subscription?.customer || customer,

      plan,

      price: planData[plan].price,

      coupons: planData[plan].coupons,

      meals: meals.join(", "),

      start: startDate,

      expiry: endDate,

      paymentMethod,

      status: subscription?.status || "Pending",
    };

    onSave(data);
  };

  return (
    <div className="subscription-modal-overlay" className="md:fixed md:inset-0 md:z-[2000] md:flex md:items-center md:justify-center md:p-[20px] md:bg-[rgba(20,18,12,0.55)]">
      <div className="subscription-modal" className="md:w-[480px] md:max-w-full md:max-h-[90vh] md:overflow-y-auto md:bg-white md:rounded-[13px] md:shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
        {/* =====================================
            HEADER
        ===================================== */}

        <div className="subscription-modal-header" className="md:min-h-[60px] md:flex md:items-center md:justify-between md:p-[12px_17px] md:border-b md:border-solid md:border-b-[#eee8dc]">
          <div className="subscription-modal-title" className="md:flex md:items-center md:gap-[8px]">
            <RotateCcw size={18} className="md:text-[#FF6900]" strokeWidth={1.8} />

            <h3  className="md:m-[0_0_3px] md:text-[#333333] md:text-[14px] md:font-[400] md:font-['Nunito']">{subscription ? "Edit Subscription" : "New Subscription"}</h3>
          </div>

          <button
            type="button"
            className="subscription-close-btn"
             className="md:w-[28px] md:h-[28px] md:flex md:items-center md:justify-center md:border-none md:bg-transparent md:text-[#999999] md:cursor-pointer md:hover:text-[#333333]"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        {/* =====================================
            FORM
        ===================================== */}

        <form className="subscription-modal-form" className="md:p-[17px]" onSubmit={handleSubmit}>
          {/* =====================================
    CUSTOMER
===================================== */}

          {!subscription && (
            <div className="subscription-modal-section" className="md:mb-[17px]">
              <label className="subscription-modal-label" className="md:block md:mb-[8px] md:text-[#d65c18] md:text-[14px] md:font-medium md:uppercase md:tracking-[0.2px]">Customer</label>

              <select
                className="subscription-customer-select"
                className="md:w-full md:h-[38px] md:px-[12px] md:border md:border-solid md:border-[#e7d9a7] md:rounded-[8px] md:bg-white md:text-[#333333] md:text-[12px] md:outline-none md:cursor-pointer md:hover:border-[#ff6500] md:focus:border-[#ff6500]"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              >
                <option value="">Select Customer</option>

                {customers.map((item) =>(
                  <option
                    key={item.id}
                    value={item.customer}
                  >
                    {item.customer}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* =====================================
              SUBSCRIPTION PLAN
          ===================================== */}

          <div className="subscription-modal-section" className="md:mb-[17px]">
            <label className="subscription-modal-label" className="md:block md:mb-[8px] md:text-[#d65c18] md:text-[14px] md:font-medium md:uppercase md:tracking-[0.2px]">
              Subscription Plan
            </label>

            <div className="subscription-plan-grid" className="md:grid md:grid-cols-2 md:gap-[9px]">
              {/* MONTHLY */}

              <button
                type="button"
                className={`md:relative md:min-h-[91px] md:flex md:items-start md:gap-[10px] md:p-[14px_13px] md:border md:border-solid md:rounded-[11px] md:bg-white md:text-left md:font-[inherit] md:cursor-pointer md:transition-all md:duration-[180ms] md:hover:bg-[#fffaf1] ${
                  plan === "Monthly"
                    ? "subscription-plan-card selected md:border-2 md:border-[#ff6500] md:bg-[#fff8ef]"
                    : "subscription-plan-card md:border-[1.5px] md:border-[#f1d957]"
                }`}
                onClick={() => setPlan("Monthly")}
              >
                <div className="subscription-plan-icon"  className="md:text-[#ff6500] md:pt-[1px]">
                  <CalendarDays size={17} strokeWidth={1.8} />
                </div>

                <div className="subscription-plan-content" className="md:flex md:flex-col md:gap-[4px]">
                  <span className="subscription-plan-name" className="md:text-[#444444] md:text-[14px] md:font-normal">Monthly</span>

                  <span className="subscription-plan-details" className="md:text-[#888888] md:text-[12px]">
                    ₹3,000 · 30 coupons
                  </span>
                </div>
              </button>

              {/* YEARLY */}

              <button
                type="button"
                className={`md:relative md:min-h-[91px] md:flex md:items-start md:gap-[10px] md:p-[14px_13px] md:border md:border-solid md:rounded-[11px] md:bg-white md:text-left md:font-[inherit] md:cursor-pointer md:transition-all md:duration-[180ms] md:hover:bg-[#fffaf1] ${
                  plan === "Yearly"
                    ? "subscription-plan-card selected md:border-2 md:border-[#ff6500] md:bg-[#fff8ef]"
                    : "subscription-plan-card md:border-[1.5px] md:border-[#f1d957]"
                }`}
                onClick={() => setPlan("Yearly")}
              >
                <div className="subscription-plan-icon" className="md:text-[#ff6500] md:pt-[1px]">
                  <TrendingUp size={17} strokeWidth={1.8} />
                </div>

                <div className="subscription-plan-content" className="md:flex md:flex-col md:gap-[4px]">
                  <span className="subscription-plan-name" className="md:text-[#444444] md:text-[14px] md:font-normal">Yearly</span>

                  <span className="subscription-plan-details" className="md:text-[#888888] md:text-[12px]">
                    ₹32,000 · 360 coupons
                  </span>
                </div>

                <span className="discount-badge" className="md:absolute md:top-[6px] md:right-[6px]">11% OFF</span>
              </button>
            </div>
          </div>

          {/* =====================================
              MEAL SELECTION
          ===================================== */}

          <div className="subscription-modal-section" className="md:mb-[17px]">
            <label className="subscription-modal-label" className="md:block md:mb-[8px] md:text-[#d65c18] md:text-[14px] md:font-medium md:uppercase md:tracking-[0.2px]">Meal Selection</label>

            <div className="meal-selection" className="md:flex md:items-center md:gap-[10px] md:flex-wrap" >
              {/* BREAKFAST */}

              <button
                type="button"
                className={`md:h-[37px] md:flex md:items-center md:gap-[7px] md:px-[11px] md:border md:border-solid md:rounded-[9px] md:font-['Nunito'] md:text-[13px] md:cursor-pointer md:hover:bg-[#fffaf1] ${
                  meals.includes("Breakfast")
                    ? "meal-option selected md:border-[#ff6500] md:bg-[#fff8ef] md:text-[#444444]"
                    : "meal-option md:border-[#f0df9c] md:bg-white md:text-[#555555]"
                }`}
                onClick={() => toggleMeal("Breakfast")}
              >
                <span className="meal-checkbox">
                  {meals.includes("Breakfast") && (
                    <CheckCircle size={13}  />
                  )}
                </span>

                <Sun size={14} />

                <span>Breakfast</span>
              </button>

              {/* LUNCH */}

              <button
                type="button"
                className={`md:h-[37px] md:flex md:items-center md:gap-[7px] md:px-[11px] md:border md:border-solid md:rounded-[9px] md:font-[inherit] md:text-[13px] md:cursor-pointer md:hover:bg-[#fffaf1] ${
                  meals.includes("Lunch")
                    ? "meal-option selected md:border-[#ff6500] md:bg-[#fff8ef] md:text-[#444444]"
                    : "meal-option md:border-[#f0df9c] md:bg-white md:text-[#555555]"
                }`}
                onClick={() => toggleMeal("Lunch")}
              >
                <span className="meal-checkbox">
                  {meals.includes("Lunch") && (
                    <CheckCircle size={13}  />
                  )}
                </span>

                <Utensils size={14} />

                <span>Lunch</span>
              </button>

              {/* DINNER */}

              <button
                type="button"
                className={`md:h-[37px] md:flex md:items-center md:gap-[7px] md:px-[11px] md:border md:border-solid md:rounded-[9px] md:font-[inherit] md:text-[13px] md:cursor-pointer md:hover:bg-[#fffaf1] ${
                  meals.includes("Dinner")
                    ? "meal-option selected md:border-[#ff6500] md:bg-[#fff8ef] md:text-[#444444]"
                    : "meal-option md:border-[#f0df9c] md:bg-white md:text-[#555555]"
                }`}
                onClick={() => toggleMeal("Dinner")}
              >
                <span className="meal-checkbox">
                  {meals.includes("Dinner") && (
                    <CheckCircle size={13}  />
                  )}
                </span>

                <Moon size={14} />

                <span>Dinner</span>
              </button>
            </div>
          </div>

          {/* =====================================
              DATES
          ===================================== */}

          <div className="subscription-date-row" className="md:grid md:grid-cols-2 md:gap-[12px] md:mb-[17px]">
            {/* START DATE */}

            <div className="subscription-date-group" className="md:flex md:flex-col">
              <label className="subscription-modal-label" className="md:block md:mb-[8px] md:text-[#d65c18] md:text-[14px] md:font-medium md:uppercase md:tracking-[0.2px]">Start Date</label>

              <input
                type="date"
                value={startDate}
                className="md:w-full md:h-[37px] md:px-[11px] md:border md:border-solid md:border-[#f0df9c] md:rounded-[9px] md:outline-none md:text-[#555555] md:bg-white md:font-[inherit] md:text-[12px] md:focus:border-[#ff6500]"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {/* END DATE */}

            <div className="subscription-date-group" className="md:flex md:flex-col">
              <label className="subscription-modal-label" className="md:block md:mb-[8px] md:text-[#d65c18] md:text-[14px] md:font-medium md:uppercase md:tracking-[0.2px]">End Date</label>

              <input
                type="date"
                value={endDate}
                className="md:w-full md:h-[37px] md:px-[11px] md:border md:border-solid md:border-[#f0df9c] md:rounded-[9px] md:outline-none md:text-[#555555] md:bg-white md:font-[inherit] md:text-[12px] md:focus:border-[#ff6500]"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          {/* =====================================
              PAYMENT METHOD
          ===================================== */}

          <div className="subscription-modal-section" className="md:mb-[17px]">
            <label className="subscription-modal-label" className="md:block md:mb-[8px] md:text-[#d65c18] md:text-[14px] md:font-medium md:uppercase md:tracking-[0.2px]">Payment Method</label>

            <div className="payment-methods" className="md:flex md:items-center md:gap-[8px]">
              {["Cash", "UPI", "Online", "Card"].map((method) => (
                <button
                  key={method}
                  type="button"
                  className={`md:h-[34px] md:px-[13px] md:border md:border-solid md:rounded-[9px] md:font-[inherit] md:text-[11px] md:cursor-pointer md:transition-all md:duration-[180ms] ${
                    paymentMethod === method
                      ? "payment-option selected md:border-[#ff6500] md:bg-[#ff6500] md:text-white"
                      : "payment-option md:border-[#f0df9c] md:bg-white md:text-[#666666] md:hover:bg-[#fffaf1]"
                  }`}
                  onClick={() => setPaymentMethod(method)}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* =====================================
              FOOTER
          ===================================== */}

          <div className="subscription-modal-footer" className="md:h-[75px] flex items-center justify-end gap-[13px] mx-[-21px] px-[21px] border-t border-solid border-t-[#f1ead9]">
            <button
              type="button"
              className="subscription-cancel-btn"
              className="md:h-[36px] md:px-[12px] md:border-none md:bg-transparent md:text-[#666666] md:font-[inherit] md:text-[14px] md:cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="subscription-save-btn" className="md:h-[36px] md:flex md:items-center md:justify-center md:gap-[7px] md:px-[16px] md:border-none md:rounded-[9px] md:bg-[#ff6500] md:text-white md:font-[inherit] md:text-[11px] md:cursor-pointer md:transition-all md:duration-[180ms] md:hover:bg-[#e95d00]">
              <CheckCircle size={14} strokeWidth={1.8} />
              Save Subscription
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionsModal;
