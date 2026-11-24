import { useState } from "react";
import { Package, Plus, Pencil, Eye } from "lucide-react";
import AddTiffinOrder from "../modal/AddTiffinOrderModal";
import TiffinDetail from "../modal/TiffinDetailModal";

const initialOrders = [
  {
    id: 1,
    customer: "Priya Deshmukh",
    tiffinType: "Lunch Tiffin",
    meal: "Lunch",
    quantity: 1,
    date: "10 Aug 2026",
    amount: 90,
    payment: "Paid",
    status: "Ready",
  },
  {
    id: 2,
    customer: "Neha Shah",
    tiffinType: "Dinner Tiffin",
    meal: "Dinner",
    quantity: 2,
    date: "10 Aug 2026",
    amount: 180,
    payment: "Paid",
    status: "Preparing",
  },
  {
    id: 3,
    customer: "Rahul Patil",
    tiffinType: "Breakfast Tiffin",
    meal: "Breakfast",
    quantity: 1,
    date: "10 Aug 2026",
    amount: 60,
    payment: "Pending",
    status: "Picked Up",
  },
];

export default function TiffinManagement() {
  const [orders, setOrders] = useState(initialOrders);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);

  // Add new order
  const openAddModal = () => {
    setActiveOrder(null);
    setShowAddModal(true);
  };

  // Edit order
  const openEditModal = (order) => {
    setActiveOrder(order);
    setShowAddModal(true);
  };

  // View order
  const openDetailModal = (order) => {
    setActiveOrder(order);
    setShowDetailModal(true);
  };

  // Save / Update order
  const handleSave = (form) => {
    if (activeOrder) {
      // Update existing order
      setOrders((prev) =>
        prev.map((order) =>
          order.id === activeOrder.id
            ? {
                ...order,
                customer: form.customer,
                tiffinType: form.tiffinType,
                meal: form.tiffinType.replace(" Tiffin", ""),
                quantity: Number(form.quantity) || 1,
                date: form.date || order.date,
                amount: Number(form.amount) || 0,
                payment: form.payment,
                delivery: form.delivery,
              }
            : order
        )
      );
    } else {
      // Add new order
      setOrders((prev) => [
        ...prev,
        {
          id: Date.now(),
          customer: form.customer,
          tiffinType: form.tiffinType,
          meal: form.tiffinType.replace(" Tiffin", ""),
          quantity: Number(form.quantity) || 1,
          date: form.date || "-",
          amount: Number(form.amount) || 0,
          payment: form.payment,
          status: "Preparing",
          delivery: form.delivery,
        },
      ]);
    }

    setShowAddModal(false);
    setActiveOrder(null);
  };

  return (
    <div className="tiffin-page" className=" md:w-[1155px] md:h-[100vh] md:ml-[75px] md:p-[2.1875rem_1.25rem_1.875rem_1.50rem] md:mt-[68px]">
      <div className="tiffin-container">

        {/* ================= HEADER ================= */}
        <div className="tiffin-header" className=" md:flex md:items-center md:w-full md:justify-between ">
          <h1 className="tiffin-title" className="page-title" className="md:font-['Nunito'] md:text-[#292524] md:gap-[15px] md:text-[26px] md:font-[400] md:text-[#BB4D00] md:font-normal md:flex md:items-center md:pt-[10px] md:pl-[12px]">
            <Package />
            Tiffin Management
          </h1>

          <button
            type="button"
            onClick={openAddModal}
            className="tiffin-add-btn"
            className=" md:pt-[10px] md:flex md:gap-[10px] md:h-[45px] md:w-[200px] md:align-middle md:text-center md:justify-center md:text-[18px] md:text-[#FFFFFF] md:bg-[#FF6900] md:rounded-[10px] md:outline-none md:hover:bg-[#dc6007] md:hover:outline-none"
          >
            <Plus />
            Add Tiffin Order
          </button>
        </div>

        {/* ================= TABLE ================= */}
        <div  className="md:mt-[50px] md:w-full  md:bg-[#FFFFFF]  md:border-[1px] md:border-solid md:border-[#FEF9C2] md:rounded-[10px] md:overflow-x-auto md:overflow-y-hidden md:shadow-[0_0_8px] md:shadow-[rgba(249,115,22,0.5)]">
          <div  className="md:overflow-x-auto-auto">

            <table className="md:w-full md:min-w-[720px] md:border-collapse  md:text-left">
              <thead >
                <tr className="md:bg-[#fffbf0] md:h-[70px]">
                  <th  className=" md:items-center md:p-[20px_25px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">Customer</th>
                  <th  className=" md:items-center md:p-[16px_15px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">Type</th>
                  <th  className=" md:items-center md:p-[16px_15px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">Meal</th>
                  <th  className=" md:items-center md:p-[16px_15px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">Qty</th>
                  <th  className=" md:items-center md:p-[16px_25px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">Date</th>
                  <th  className=" md:items-center md:p-[16px_25px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">Amount</th>
                  <th  className=" md:items-center md:p-[16px_5px]   md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">Payment</th>
                  <th  className=" md:items-center md:p-[16px_25px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">Status</th>
                  <th  className=" md:items-center md:p-[16px_50px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">Actions</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="md:hover:bg-[#fffdf7]">

                    {/* Customer */}
                    <td  className="md:font-['Nunito'] md:font-[400] md:font-normal md:text-[18px] md:text-[#292524] md:pl-[20px]">
                      {order.customer}
                    </td>

                    {/* Type */}
                    <td  className="md:pl-[20px]  md:py-4 md:text-[18px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#79716B] ">
                      {order.tiffinType}
                    </td>

                    {/* Meal */}
                    <td className="md:pl-[20px] md:py-4 md:text-[18px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#2C1810] ">
                      {order.meal}
                    </td>

                    {/* Quantity */}
                    <td className="md:pl-[25px] md:py-4 md:text-[18px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#2C1810] ">
                      {order.quantity}
                    </td>

                    {/* Date */}
                    <td  className="md:pl-[5px]  md:py-4 md:text-[18px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#79716B] ">
                      {order.date}
                    </td>

                    {/* Amount */}
                    <td className="md:pl-[35px] md:text-[18px] md:font-['Nunito'] md:font-[400] md:font-normal md:font-[400] md:text-[#F54900]">
                      ₹{order.amount}
                    </td>

                    {/* Payment */}
                    <td className=" md:ml-[15px] md:py-4 md:text-sm md:text-[#444444] ">
                      <PaymentBadge payment={order.payment} />
                    </td>

                    {/* Status */}
                    <td className=" md:py-4 md:text-sm md:text-[#444444] ">
                      <StatusBadge status={order.status} />
                    </td>

                    {/* Actions */}
                    <td className=" md:py-4 md:flex md:gap-[10px] md:text-sm md:text-[#444444] md:ml-[30px] md:mr-[10px] ">
                      <div className="md:py-4 md:flex md:gap-[10px] md:text-sm md:text-[#444444] ">

                        <button
                          type="button"
                          className="md:bg-[#fff0dc] md:h-[40px] md:w-[90px] md:gap-[12px] md:rounded-[30px] md:flex md:items-center md:justify-center md:text-[#bb4d00] md:text-[14px] md:hover:bg-[#ffe5c7]" 
                          onClick={() => openEditModal(order)}
                        >
                          <Pencil size={14}/>
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => openDetailModal(order)}
                          className="md:bg-[#fde3e5] md:h-[40px] md:w-[90px] md:gap-[12px] md:rounded-[30px] md:text-[14px] md:flex md:items-center md:justify-center md:text-[#d76b75] md:hover:bg-[#fbd3d7]" 
                        >
                          <Eye size={14} />
                          View
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}

                {/* Empty State */}
                {orders.length === 0 && (
                  <tr>
                    <td colSpan={9} className="empty-row">
                      No tiffin orders yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

          </div>
        </div>
      </div>

      {/* ================= ADD / EDIT MODAL ================= */}
      <AddTiffinOrder
        open={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setActiveOrder(null);
        }}
        onSave={handleSave}
        initialData={
          activeOrder
            ? {
                customer: activeOrder.customer,
                tiffinType: activeOrder.tiffinType,
                date: activeOrder.date,
                quantity: activeOrder.quantity,
                amount: activeOrder.amount,
                payment: activeOrder.payment,
                delivery: activeOrder.delivery || "Pickup",
              }
            : {}
        }
      />

      {/* ================= DETAIL MODAL ================= */}
      <TiffinDetail
        open={showDetailModal}
        onClose={() => {
          setShowDetailModal(false);
          setActiveOrder(null);
        }}
        onEdit={() => {
          setShowDetailModal(false);
          setShowAddModal(true);
        }}
        order={activeOrder}
      />
    </div>
  );
}

/* =========================================================
   PAYMENT BADGE
========================================================= */

function PaymentBadge({ payment }) {
  const className =
    payment === "Paid"
      ? "md:flex md:justify-center md:align-middle md:pt-[8px]  md:bg-[#DCFCE7]  md:border-[1px] md:border-solid md:border-[#B9F8CF] md:rounded-[30px] md:w-[80px] md:h-[35px] md:text-[14px] md:text-[#008236] "
      : "md:flex md:justify-center md:align-middle md:pt-[8px]  md:bg-[#FFE2E2]  md:border-[1px] md:border-solid md:border-[#FFC9C9] md:rounded-[30px] md:w-[80px] md:h-[35px] md:text-[14px] md:text-[#C10007] ";

  return (
    <span className={className}>
      {payment}
    </span>
  );
}

/* =========================================================
   STATUS BADGE
========================================================= */

function StatusBadge({ status }) {
  const statusClass = {
    Ready:       "md:flex md:justify-center md:align-middle md:pt-[8px] md:ml-[20px] md:bg-[#DBEAFE] md:border-[1px] md:border-solid md:border-[#BEDBFF] md:rounded-[30px] md:w-[80px] md:h-[35px] md:text-[14px] md:text-[#1447E6] ",
    Preparing:   "md:flex md:justify-center md:align-middle md:pt-[8px] md:ml-[20px] md:bg-[#FEF9C2] md:border-[1px] md:border-solid md:border-[#FFF085] md:rounded-[30px] md:w-[80px] md:h-[35px] md:text-[14px] md:text-[#894B00] ",
    "Picked Up": "md:flex md:justify-center md:align-middle md:pt-[8px] md:ml-[20px] md:bg-[#DCFCE7] md:border-[1px] md:border-solid md:border-[#B9F8CF] md:rounded-[30px] md:w-[80px] md:h-[35px] md:text-[14px] md:text-[#008236] ",
  };

  return (
    <span className={`badge ${statusClass[status] || "badge-gray"}`}>
      {status}
    </span>
  );
}