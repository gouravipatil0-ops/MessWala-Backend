import { useState } from "react";
import { ClipboardList, X, CheckCircle2 } from "lucide-react";

export default function RecordDailyMeal({ open, onClose, onSave, initialData = {} }) {
  const [form, setForm] = useState({
    customer: initialData.customer || "",
    date: initialData.date || "",
    meal: initialData.meal || "",
    quantity: initialData.quantity || "",
    amount: initialData.amount || "",
    method: initialData.method || "",
    notes: initialData.notes || "",
  });

  if (!open) return null;

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div id="modal-overlay" className="md:fixed inset-0 md:bg-[rgba(0,0,0,0.5)] md:flex md:items-center md:justify-center md:p-[16px] md:mt-[50px] md:z-index-200" onClick={onClose}>
      <div className="modal-box modal-wide" className="md:bg-[#FFFFFF] md:rounded-[24px] md:w-full md:max-w-[480px] md:max-h-[80vh] md:overflow-y-auto md:shadow-[0_20px_40px] md:shadow-[rgba(0,0,0,0.2)]"  onClick={(e) => e.stopPropagation()}>

        <div id="modal-header" className="md:flex md:items-center md:justify-between md:p-[20px_24px] md:border-b-[1px] md:border-solid md:border-[#fdebc8]">

          <h2 className="md:flex md:items-center md:gap-[15px] md:text-[18px] md:font-[400] md:text-[#222222]"><ClipboardList className="md:size-[20px] md:text-[#ff6900]" /> Record Daily Meal</h2>
          <button id="modal-close" className="md:flex md:items-center md:justify-center md:p-[5px] md:bg-none md:border-none md:text-[#999999] md:cursor-pointer md:rounded-[8px] md:hover:bg-[#F5F5F5] md:hover:text-[#666666]" onClick={onClose}><X size={20} /></button>
        </div>

        <div id="modal-body grid-2" className="md:pl-[24px] md:pt-[5px] md:flex md:flex-col md:gap-[10px]">
          <Field label="Customer" placeholder="Enter customer name" value={form.customer} onChange={handleChange("customer")} />
          <Field label="Date" className="md:h-[42px] md:w-[380px] md:mt-[5px]  md:rounded-[13px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex md:outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" type="date" value={form.date} onChange={handleChange("date")} />
          <Field label="Meal" placeholder="Enter meal" value={form.meal} onChange={handleChange("meal")} />
          <Field label="Quantity" type="number" placeholder="Enter quantity" value={form.quantity} onChange={handleChange("quantity")} />
          <Field label="Amount (₹)" type="number" placeholder="Enter amount" value={form.amount} onChange={handleChange("amount")} />
          <Field label="Payment Method" placeholder="Enter payment method" value={form.method} onChange={handleChange("method")} />
          <div id="field-full" className="md:grid-column-[1/-1]">
            <Field label="Notes" placeholder="Add notes" value={form.notes} onChange={handleChange("notes")} />
          </div>
        </div>

        <div id="modal-footer" className="md:flex md:items-center md:justify-end md:gap-[16px] md:p-[16px_24px] md:border-b-[1px] md:border-solid md:border-[#fdebc8]">
          <button id="btn-cancel" className="md:bg-none md:border-none md:text-[#888888] md:text-[14px] md:font-[400] md:cursor-pointer md:rounded-[12px] md:h-[40px] md:w-[70px] md:hover:text-[#555555] md:hover:bg-[#aba8a8]" onClick={onClose}>Cancel</button>
          <button id="btn-save" className="md:flex md:items-center md:gap-[8px] md:bg-[#ff6900] md:text-[#FFFFFF] md:border-none md:p-[10px_22px] md:rounded-[12px] md:text-[14px] md:font-[500] md:cursor-pointer md:hover:bg-[#e85d00]" onClick={() => onSave?.(form)}>
            <CheckCircle2 size={18} /> Save
          </button>
        </div>
      </div>
    </div>
  );
}


function Field({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div id="field" className="md:flex md:flex-col md:gap-[6px]">
      <label id="field-label" className="md:text-[14px] md:pl-[10px] md:font-[400] md:text-[#57534D]">{label}</label>
      <input
        className="md:h-[32px] md:w-[380px] md:rounded-[10px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex md:outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}