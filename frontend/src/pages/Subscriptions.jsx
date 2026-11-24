import { useState } from "react";

import { RotateCcw, Plus, Ticket, CreditCard, Pencil } from "lucide-react";
import SubscriptionsModal from "../modal/SubscriptionsModal";

const Subscriptions = () => {
  /* =========================================
     SUBSCRIPTIONS DATA
  ========================================= */

  const [subscriptions, setSubscriptions] = useState([
    {
      id: 1,
      customer: "Rahul Patil",
      meals: "Breakfast, Lunch, Dinner",
      price: 3000,
      coupons: 30,
      start: "01 Aug 2026",
      expiry: "31 Aug 2026",
      status: "Paid",
      plan: "Monthly",
    },

    {
      id: 2,
      customer: "Sneha Joshi",
      meals: "Lunch",
      price: 3000,
      coupons: 30,
      start: "01 Aug 2026",
      expiry: "31 Aug 2026",
      status: "Pending",
      plan: "Monthly",
    },

    {
      id: 3,
      customer: "Neha Shah",
      meals: "Breakfast, Lunch",
      price: 3000,
      coupons: 30,
      start: "01 Aug 2026",
      expiry: "31 Aug 2026",
      status: "Paid",
      plan: "Monthly",
    },

    {
      id: 4,
      customer: "Amit Sharma",
      meals: "Breakfast, Dinner",
      price: 12000,
      coupons: 365,
      start: "01 Aug 2026",
      expiry: "31 Jul 2027",
      status: "Pending",
      plan: "Yearly",
    },
  ]);

  /* =========================================
     FILTER
  ========================================= */

  const [selectedPlan, setSelectedPlan] = useState("Monthly");

  /* =========================================
     MODAL
  ========================================= */

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingSubscription, setEditingSubscription] = useState(null);

  /* =========================================
     FORM
  ========================================= */

  const emptyForm = {
    customer: "",
    meals: "",
    price: "",
    coupons: "",
    start: "",
    expiry: "",
    status: "Pending",
    plan: "Monthly",
  };

  const [formData, setFormData] = useState(emptyForm);

  /* =========================================
     FILTERED DATA
  ========================================= */

  const filteredSubscriptions = subscriptions.filter(
    (subscription) => subscription.plan === selectedPlan,
  );

  /* =========================================
     OPEN NEW MODAL
  ========================================= */

  const handleNewSubscription = () => {
    setEditingSubscription(null);

    setFormData({
      ...emptyForm,
      plan: selectedPlan,
    });

    setIsModalOpen(true);
  };

  /* =========================================
     OPEN EDIT MODAL
  ========================================= */

  const handleEdit = (subscription) => {
    setEditingSubscription(subscription);

    setFormData({
      customer: subscription.customer,
      meals: subscription.meals,
      price: subscription.price,
      coupons: subscription.coupons,
      start: subscription.start,
      expiry: subscription.expiry,
      status: subscription.status,
      plan: subscription.plan,
    });

    setIsModalOpen(true);
  };

  /* =========================================
     FORM CHANGE
  ========================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =========================================
     SAVE
  ========================================= */

  const handleSaveSubscription = (data) => {
    /* =========================================
     EDIT EXISTING SUBSCRIPTION
  ========================================= */

    if (editingSubscription) {
      setSubscriptions((previous) =>
        previous.map((subscription) =>
          subscription.id === editingSubscription.id
            ? {
                ...subscription,
                ...data,
              }
            : subscription,
        ),
      );
    } else {
      /* =========================================
     CREATE NEW SUBSCRIPTION
  ========================================= */
      const newSubscription = {
        id: Date.now(),

        ...data,
      };

      setSubscriptions((previous) => [...previous, newSubscription]);
    }

    /* =========================================
     CLOSE MODAL
  ========================================= */

    setIsModalOpen(false);

    setEditingSubscription(null);
  };

  /* =========================================
     PAY
  ========================================= */

  const handlePay = (id) => {
    setSubscriptions((previous) =>
      previous.map((subscription) =>
        subscription.id === id
          ? {
              ...subscription,
              status: "Paid",
            }
          : subscription,
      ),
    );
  };

  /* =========================================
     CLOSE MODAL
  ========================================= */

  const closeModal = () => {
    setIsModalOpen(false);

    setEditingSubscription(null);
  };

  /* =========================================
     JSX
  ========================================= */

  return (
    <section className="content" className=" md:w-[1155px] md:h-[100vh] md:ml-[75px] md:p-[2.1875rem_1.25rem_1.875rem_1.50rem] md:mt-[68px]">
      {/* =====================================
          PAGE HEADER
      ===================================== */}

      <div className="subscription-heading" className="md:flex md:w-full md:items-center md:justify-between md:mb-[18px]">
        <div className="subscription-title" className="md:flex md:items-center md:gap-[9px]">
          <RotateCcw size={21} strokeWidth={1.8}className="md:text-[#ff6500]"/>

          <h2 className="md:m-0 md:text-[#333333] md:text-[24px] md:font-medium">Subscriptions</h2>
        </div>

        <button
          className="subscription-add-btn"
          className="md:flex md:h-[36px] md:items-center md:gap-[7px] md:rounded-[9px] md:bg-[#ff6500] md:px-[17px] md:text-white md:font-inherit md:text-[12px] md:font-medium md:cursor-pointer md:transition-[background-color] md:duration-200 md:ease-in-out md:hover:bg-[#e95d00]"
          onClick={handleNewSubscription}
        >
          <Plus size={16} strokeWidth={1.8} />
          New Subscription
        </button>
      </div>

      {/* =====================================
          PLAN FILTER
      ===================================== */}

      <div className="subscription-tabs" className=" md:mt-[35px] md:flex md:items-center md:gap-[15px]">
        <button
          className={`md:flex md:h-[37px] md:items-center md:justify-center md:gap-[7px] md:rounded-[10px] md:border md:border-solid md:px-[17px] md:text-[14px] md:cursor-pointer md:transition-[background-color,border-color] md:duration-200 ease-in-out  ${
            selectedPlan === "Monthly"
              ? "subscription-tab active md:border-[#ff6500] md:bg-[#ff6500] md:text-white"
              : "subscription-tab md:border-[#f2d979] md:bg-white md:text-[#777777]"
          }`}
          onClick={() => setSelectedPlan("Monthly")}
        >
          <RotateCcw size={13} strokeWidth={1.8} className={
        selectedPlan === "Monthly"
          ? "md:text-white"
          : "md:text-[#777777]"
      }/>
          Monthly
        </button>

        <button
          className={`md:flex md:h-[37px] md:items-center md:justify-center md:gap-[7px] md:rounded-[10px] md:border md:border-solid md:px-[17px] md:text-[14px] md:cursor-pointer md:transition-[background-color,border-color] md:duration-200 md:ease-in-out ${
            selectedPlan === "Yearly"
              ? "subscription-tab active md:border-[#ff6500] md:bg-[#ff6500] md:text-white"
              : "subscription-tab md:border-[#f2d979] md:bg-white md:text-[#777777]"
          }`}
          onClick={() => setSelectedPlan("Yearly")}
        >
          <RotateCcw size={13} strokeWidth={1.8} className={
        selectedPlan === "Yearly"
          ? "md:text-white"
          : "md:text-[#777777]"
      }/>
          Yearly
        </button>
      </div>

      {/* =====================================
          TABLE
      ===================================== */}

      <div className="subscription-table-card" className="md:w-full md:overflow-x-auto md:rounded-[10px] md:mt-[40px] md:border md:border-solid md:border-[#FEF9C2] md:bg-white md:shadow-[0_0_8px] md:shadow-[rgba(249,115,22,0.5)]" >
        <table className="md:w-full md:min-w-[720px] md:table-fixed md:border-collapse[&_th:nth-child(1)]:w-[13%] [&_td:nth-child(1)]:w-[13%] [&_th:nth-child(2)]:w-[15%] [&_td:nth-child(2)]:w-[15%] [&_th:nth-child(3)]:w-[13%] [&_td:nth-child(3)]:w-[13%] [&_th:nth-child(4)]:w-[12%] [&_td:nth-child(4)]:w-[12%] [&_th:nth-child(5)]:w-[10%] [&_td:nth-child(5)]:w-[10%] [&_th:nth-child(6)]:w-[10%] [&_td:nth-child(6)]:w-[10%] [&_th:nth-child(7)]:w-[11%] [&_td:nth-child(7)]:w-[11%] [&_th:nth-child(8)]:w-[16%] [&_td:nth-child(8)]:w-[16%] [&_tbody_tr:last-child_td]:border-b-0">
          <thead className="md:bg-[#fffdf0]">
            <tr>
              {[
                  "CUSTOMER",
                  "MEALS",
                  "PRICE",
                  "COUPONS",
                  "START",
                  "EXPIRY",
                  "STATUS",
                  "ACTIONS",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="md:h-[70px] md:border-b md:border-solid md:border-[#FEF9C2] md:px-[15px]  md:text-[#BB4D00] md:text-[16px] md:text-uppercase md:font-['Nunito'] md:font-bold md:whitespace-nowrap"
                  >
                    {heading}
                  </th>
                ))}
            </tr>
          </thead>

          <tbody>
            {filteredSubscriptions.map((subscription) => (
              <tr key={subscription.id} className="md:hover:bg-[#fffdf8]">
                {/* CUSTOMER */}

                <td className="subscription-customer" className="md:border-b md:border-solid md:border-b-[#f2eee4] md:pl-[25px] md:py-4 md:text-[#292524] md:text-[18px] md:font-normal md:font-['Nunito'] md:font-[400]">
                  {subscription.customer}
                </td>

                {/* MEALS */}

                <td className="subscription-meals" className="md:border-b md:border-solid md:border-b-[#f2eee4] md:pl-[15px] md:py-[14px] md:text-[#79716B] md:text-[16px] md:leading-[16px] md:align-middle md:font-normal md:font-['Nunito']">
                  {subscription.meals.split(", ").map((meal, index) => (
                    <span key={index}>
                      {meal}
                      {index < subscription.meals.split(", ").length - 1
                        ? ","
                        : ""}
                    </span>
                  ))}
                </td>

                {/* PRICE */}

                <td className="subscription-price" className="md:border-b md:border-solid md:border-b-[#f2eee4] md:pl-[35px] md:py-[14px] md:text-[#ff5d19] text-[16px] md:whitespace-nowrap md:align-middle md:font-normal md:font-['Nunito']">
                  ₹{subscription.price.toLocaleString("en-IN")}
                  /mo
                </td>

                {/* COUPONS */}

                <td className="subscription-coupons" className="md:border-b md:border-solid md:border-b-[#f2eee4] md:pl-[35px] md:py-[14px] md:text-[#555555] md:text-[18px] md:align-middle md:font-normal md:font-['Nunito']">
                  <div className="md:flex md:items-center md:gap-[5px]">
                               <Ticket
                                  size={18}
                                  strokeWidth={1.8}
                                  className="md:shrink-0 md:text-[#ff6500]"
                                />
                                {subscription.coupons}
                              </div>
                </td>

                {/* START */}

                <td className="subscription-date" className="md:border-b md:border-solid md:border-b-[#f2eee4] md:pl-[15px] md:py-[14px] md:text-[#79716b] md:text-[16px] md:leading-[16px] md:whitespace-nowrap md:align-middle">{subscription.start}</td>

                {/* EXPIRY */}

                <td className="subscription-date" className="md:border-b md:border-solid md:border-b-[#f2eee4] md:pl-[15px] md:py-[14px] md:text-[#79716b] md:text-[16px] md:leading-[16px] md:whitespace-nowrap md:align-middle">{subscription.expiry}</td>

                {/* STATUS */}

                <td className="md:border-b md:border-solid md:border-b-[#f2eee4] md:pl-[25px] md:py-[14px] md:align-middle">
                  <span
                    className={`md:inline-flex md:w-[70px] md:items-center md:justify-center md:rounded-[30px] md:border md:border-solid md:px-[9px] md:py-[5px] md:text-[14px] md:font-medium ${
                      subscription.status === "Paid"
                        ? "subscription-status paid md:border-[#c2efd4] md:bg-[#dff8e9] md:text-[#19a65a]"
                        : "subscription-status pending md:border-[#ffcaca] md:bg-[#ffe3e3] md:text-[#ed4e4e]"
                    }`}
                  >
                    {subscription.status}
                  </span>
                </td>

                {/* ACTIONS */}

                <td className="subscription-actions" className="md:border-b md:border-solid md:border-b-[#f2eee4] md:py-[14px] md:whitespace-nowrap md:align-middle">
                  <button
                    className="pay-btn"
                    className="md:mr-[5px] md:inline-flex md:h-[35px] md:w-[80px] md:items-center md:justify-center md:gap-[12px] md:rounded-[30px] md:border md:border-solid md:border-[#d3e1ff] md:bg-[#e4efff] md:px-[10px] md:text-[#2868d8] md:font-[inherit] md:text-[14px] md:cursor-pointer md:transition-[background-color] md:duration-200 md:ease-in-out md:hover:enabled:bg-[#d5e6ff] md:disabled:cursor-default md:disabled:opacity-[0.65]"
                    onClick={() => handlePay(subscription.id)}
                    disabled={subscription.status === "Paid"}
                  >
                    <CreditCard size={12} strokeWidth={1.8} />

                    {subscription.status === "Paid" ? "Paid" : "Pay"}
                  </button>

                  <button
                    className="edit-btn"
                    className="md:mr-[5px] md:inline-flex md:h-[35px] md:w-[80px] md:items-center md:justify-center md:gap-[12px] md:rounded-[30px] md:border md:border-solid md:border-[#f5dcae] md:bg-[#fff0d7] md:px-[10px] md:text-[#ef6900] md:font-[inherit] md:text-[14px] md:cursor-pointer md:transition-[background-color] md:duration-200 md:ease-in-out md:hover:bg-[#ffe4bd]"
                    onClick={() => handleEdit(subscription)}
                  >
                    <Pencil size={12} strokeWidth={1.8} />
                    Edit
                  </button>
                </td>
              </tr>
            ))}

            {/* EMPTY */}

            {filteredSubscriptions.length === 0 && (
              <tr>
                <td colSpan="8" className="subscription-empty" className="md:h-[100px] md:border-b md:border-solid md:border-b-[#f2eee4] md:px-[15px] md:py-[14px] md:text-center md:text-[#999999] md:text-[11px] md:align-middle">
                  No {selectedPlan.toLowerCase()} subscriptions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* =====================================
          MODAL
      ===================================== */}

      {isModalOpen && (
        <SubscriptionsModal
          subscription={editingSubscription}
          customers={subscriptions}
          formData={formData}
          onChange={handleChange}
          onClose={closeModal}
          onSave={handleSaveSubscription}
        />
      )}
    </section>
  );
};

export default Subscriptions;
