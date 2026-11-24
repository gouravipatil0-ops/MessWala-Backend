import { useState } from "react";
import {
  Calendar, Plus, Users, Utensils, Wallet,
  CreditCard, Clock, Pencil, Trash2,
} from "lucide-react";
import RecordDailyMeal from "../modal/RecordDailyMealModal"

const FILTERS = ["Today", "Yesterday", "This Week", "This Month", "Custom"];

const initialRecords = [
  { id: 1, customer: "Akash More", date: "10 Aug", meal: "Lunch", qty: 1, amount: 80, method: "Cash", status: "Paid" },
  { id: 2, customer: "Rohit Kulkarni", date: "10 Aug", meal: "Breakfast", qty: 1, amount: 60, method: "UPI", status: "Pending" },
];

export default function DailyCustomers() {
  const [records, setRecords] = useState(initialRecords);
  const [activeFilter, setActiveFilter] = useState("Today");
  const [showModal, setShowModal] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  const totalCustomers = new Set(records.map((r) => r.customer)).size;
  const totalMeals = records.reduce((s, r) => s + r.qty, 0);
  const cashTotal = records.filter((r) => r.method === "Cash").reduce((s, r) => s + r.amount, 0);
  const onlineTotal = records.filter((r) => r.method === "UPI" || r.method === "Online").reduce((s, r) => s + r.amount, 0);
  const pendingTotal = records.filter((r) => r.status === "Pending").reduce((s, r) => s + r.amount, 0);

  const openAddModal = () => { setEditingRecord(null); setShowModal(true); };
  const openEditModal = (record) => { setEditingRecord(record); setShowModal(true); };
  const handleDelete = (id) => setRecords((prev) => prev.filter((r) => r.id !== id));

  const handleSave = (form) => {
    if (editingRecord) {
      setRecords((prev) =>
        prev.map((r) =>
          r.id === editingRecord.id
            ? { ...r, customer: form.customer, date: form.date || r.date, meal: form.meal, qty: Number(form.quantity) || r.qty, amount: Number(form.amount) || r.amount, method: form.method }
            : r
        )
      );
    } else {
      setRecords((prev) => [...prev, {
        id: Date.now(), customer: form.customer, date: form.date || "-", meal: form.meal,
        qty: Number(form.quantity) || 1, amount: Number(form.amount) || 0, method: form.method, status: "Pending",
      }]);
    }
    setShowModal(false);
  };

  return (
    <div className="page-inner" className=" md:ml-[75px] md:w-[1155px] md:h-auto  md:p-[2.1875rem_1.25rem_1.875rem_1.50rem] md:mt-[68px]">
      <div className="page-header" className=" md:flex md:items-center md:w-full md:justify-between ">
        <h1 className="page-title" className="md:font-['Nunito'] md:text-[#292524] md:gap-[15px] md:text-[26px] md:font-[400]  md:font-normal md:flex md:items-center md:pt-[10px] md:pl-[12px]" >
          <Calendar className="md:text-[#BB4D00]" />
          Daily Customers
        </h1>
        <button className="btn-primary" className="md:pt-[10px] md:flex md:gap-[6px] md:h-[40px] md:w-[190px] md:align-middle md:text-center md:justify-center md:text-[18px] md:text-[#FFFFFF] md:bg-[#FF6900] md:rounded-[10px] md:outline-none md:hover:bg-[#dc6007] md:hover:outline-none" onClick={openAddModal}>
          <Plus  className=" md:h-[18px] md:w-[18px] md:mt-[3px]" />
          Record Daily Meal
        </button>
      </div>

      <div className="summary-grid" className="md:h-[180px] md:flex md:items-center md:mt-[25px] md:justify-around ">
        <SummaryCard icon={Users } value={totalCustomers} label="Total Customers"  />
        <SummaryCard icon={Utensils} value={totalMeals} label="Total Meals" />
        <SummaryCard icon={Wallet} value={`₹${cashTotal}`} label="Cash" />
        <SummaryCard icon={CreditCard} value={`₹${onlineTotal}`} label="Online" />
      </div>
      <div className="md:h-[180px] md:p-[15px] md:flex md:items-center md:mt-[5px] md:justify-baseline ">
        <SummaryCard icon={Clock} value={`₹${pendingTotal}`} label="Pending" />
      </div>

      <div className="filter-row" className="md:flex md:flex-wrap md:gap-[15px] md:mt-[20px]">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-pill md:p-[8px_16px] md:rounded-[999px] md:text-[16px] md:font-[400] md:bg-[#FFF085] md:text-[#7a4a00] md:border-none md:cursor-pointer md:transition-[0.2s_ease] md:hover:bg-[#ffe66d] ${activeFilter === f ? "active md:bg-[#ff6900] md:text-[#FFFFFF]" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="data-table-wrap" className="md:mt-[30px] md:w-full md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FEF9C2] md:rounded-[10px] md:overflow-x-auto md:overflow-y-hidden md:shadow-[0_0_8px] md:shadow-[rgba(249,115,22,0.5)]">
        <div className="data-table-scroll" className="md:overflow-x-auto-auto">
          <table className="data-table" className="md:w-full md:border-collapse md:min-w-[720px]">
            <thead className="attendance-table-header" >
              <tr className="md:bg-[#fffbf0] md:h-[70px]">
                <th className=" md:items-center md:p-[16px_20px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-[#FEFCE8] ">Customer</th>
                <th className=" md:items-center md:p-[16px_20px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-[#FEFCE8] ">Date</th>
                <th className=" md:items-center md:p-[16px_20px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-[#FEFCE8] ">Meal</th>
                <th className=" md:items-center md:p-[16px_20px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-[#FEFCE8] ">Qty</th>
                <th className=" md:items-center md:p-[16px_20px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-[#FEFCE8] ">Amount</th>
                <th className=" md:items-center md:p-[16px_20px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-[#FEFCE8] ">Method</th>
                <th className=" md:items-center md:p-[16px_20px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-[#FEFCE8] ">Status</th>
                <th className=" md:items-center md:p-[16px_20px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-[#FEFCE8] ">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id} className="md:hover:bg-[#fffdf7]">
                  <td className="md:font-['Nunito'] md:font-[400] md:font-normal md:text-[18px] md:text-[#292524] md:pl-[50px]">{record.customer}</td>
                  <td className="md:pl-[30px]  md:py-4 md:text-[18px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#79716B] ">{record.date}</td>
                  <td  className="md:pl-[35px] md:py-4 md:text-[18px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#2C1810] ">{record.meal}</td>
                  <td className="md:pl-[35px] md:py-4 md:text-[18px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#2C1810] ">{record.qty}</td>
                  <td className="md:pl-[40px] md:text-[18px] md:font-['Nunito'] md:font-[400] md:font-normal md:font-[400] md:text-[#F54900]">₹{record.amount}</td>
                  <td className=" md:flex md:align-middle md:h-[30px] md:pt-[5px] md:w-[80px] md:ml-[30px] md:justify-center   md:font-['Nunito'] md:font-[400] md:font-normal md:rounded-[30px] md:bg-[#DBEAFE] md:border md:text-[14px] md:text-[#1447E6] "><MethodBadge method={record.method} /></td>
                  <td ><StatusBadge status={record.status} /></td>
                  <td className="md:pl-[30px] md:py-4 md:flex md:gap-[10px]  md:ml-[30px] ">
                    <button className="action-btn action-edit"  className="md:bg-[#fff0dc] md:h-[40px] md:w-[90px] md:gap-[12px] md:rounded-[30px] md:flex md:items-center md:justify-center md:text-[#bb4d00] md:text-[14px] md:hover:bg-[#ffe5c7]"  onClick={() => openEditModal(record)}>
                      <Pencil size={14} /> Edit
                    </button>
                    <button className="action-btn action-delete" className="md:bg-[#fde3e5] md:h-[40px] md:w-[90px] md:gap-[12px] md:rounded-[30px] md:text-[14px] md:flex md:items-center md:justify-center md:text-[#d76b75] md:hover:bg-[#fbd3d7]"  onClick={() => handleDelete(record.id)}>
                      <Trash2 size={14} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
              {records.length === 0 && (
                <tr><td colSpan={8} className="empty-row" className="md:p-[40px] md:text-center md:text-[#a6a09b]">No records yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <RecordDailyMeal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        initialData={
          editingRecord
            ? { customer: editingRecord.customer, meal: editingRecord.meal, quantity: editingRecord.qty, amount: editingRecord.amount, method: editingRecord.method }
            : {}
        }
      />
    </div>
  );
}


function SummaryCard({ className = "", icon: Icon, value, label }) {
  return (
     <div className="md:h-[160px] md:w-[252px] md:border-[#FEF9C2] md:bg-white md:rounded-2xl  md:pt-[15px] md:pl-[17px] md:items-center md:justify-around md:shadow-[0_0_7px] md:shadow-[rgba(249,115,22,0.5)]">

       <div className="md:h-[42px] md:w-[132px] md:text-[#BB4D00]  md:flex md:justify-center md:items-center ">
        <Icon />
      </div>
       <p className="md:h-[42px] md:w-[132px] md:flex md:items-center md:justify-center  md:text-[#292524] md:font-['Nunito'] md:text-[25px] md:font-[400] md:font-normal md:pl-[1px] md:pt-[10px]">
        {value}
      </p>
      <p className="md:h-[42px] md:w-[132px]  md:flex md:items-center md:justify-center  md:text-[#BB4D00] md:font-['Nunito']   md:text-[15px] md:font-[600] md:font-normal md:pl-[1px]">
        {label}
      </p>
    </div>
  );
}


function MethodBadge({ method }) {
  const cls = method === "Cash" || method === "UPI" || method === "Online" ? "badge-blue" : "badge-gray";
  return <span className={`badge ${cls}`}>{method || "-"}</span>;
}

function StatusBadge({ status }) {
  const cls = status === "Paid" ? " md:flex md:justify-center md:align-middle md:pt-[8px] md:ml-[30px] md:bg-[#DCFCE7]  md:border-[1px] md:border-solid md:border-[#B9F8CF] md:rounded-[30px] md:w-[80px] md:h-[35px] md:text-[14px] md:text-[#008236] " :"md:flex md:justify-center md:align-middle md:pt-[8px] md:ml-[30px] md:bg-[#FFE2E2]  md:border-[1px] md:border-solid md:border-[#FFC9C9] md:rounded-[30px] md:w-[80px] md:h-[35px] md:text-[14px] md:text-[#C10007] ";
  return <span className={`badge ${cls}`}>{status}</span>;
}