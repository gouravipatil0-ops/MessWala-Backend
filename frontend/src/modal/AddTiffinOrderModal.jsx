
import { useState } from "react";
import { Package, X, Sun, Utensils, Moon, CheckCircle2 } from "lucide-react";

const TIFFIN_TYPES = [
  { id: "Breakfast Tiffin", label: "Breakfast Tiffin", icon: Sun },
  { id: "Lunch Tiffin", label: "Lunch Tiffin", icon: Utensils },
  { id: "Dinner Tiffin", label: "Dinner Tiffin", icon: Moon },
];
const PAYMENT_METHODS = ["Cash", "UPI", "Online", "Card"];
const CUSTOMERS = ["Priya Deshmukh", "Neha Shah", "Rahul Patil"];

export default function AddTiffinOrder({ open, onClose, onSave, initialData = {} }) {
  const [form, setForm] = useState({
    customer: initialData.customer || "",
    tiffinType: initialData.tiffinType || "Lunch Tiffin",
    date: initialData.date || "",
    quantity: initialData.quantity || 1,
    amount: initialData.amount || "",
    delivery: initialData.delivery || "Pickup",
    payment: initialData.payment || "Cash",
  });

  if (!open) return null;

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div id="modal-overlay" className="md:fixed md:inset-0 md:bg-[rgba(0,0,0,0.5)] md:flex md:items-center md:justify-center md:p-[16px] mt-[50px] md:z-index-200" onClick={onClose}>
      <div id="modal-box" className="md:bg-[#FFFFFF] md:rounded-[24px] md:w-full md:max-w-[480px] md:max-h-[80vh] md:overflow-y-auto md:shadow-[0_20px_40px] md:shadow-[rgba(0,0,0,0.2)]"  onClick={(e) => e.stopPropagation()}>

        <div id="modal-header" className="md:flex md:items-center md:justify-between md:p-[20px_24px] md:border-b-[1px] md:border-solid md:border-[#fdebc8]">
          <h2 className="md:flex md:items-center md:gap-[15px] md:text-[18px] md:font-[400] md:text-[#222222]"><Package className="md:size-[20px] md:text-[#ff6900]" /> Add Tiffin Order</h2>
          <button id="modal-close" className="md:flex md:items-center md:justify-center md:p-[5px] md:bg-none md:border-none md:text-[#999999] md:cursor-pointer md:rounded-[8px] md:hover:bg-[#F5F5F5] md:hover:text-[#666666]" onClick={onClose}><X size={20} /></button>
        </div>

        <div id="modal-body" className="md:p-[15px_16px_16px] md:flex md:flex-col md:gap-[10px]">
          <div id="field" className="md:flex md:flex-col md:gap-[6px]">
            <label className="md:text-[14px] md:pl-[10px] md:font-[400] md:text-[#BB4D00]">Customer</label>
            <select className="md:h-[32px] md:w-[390px] md:rounded-[10px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex md:outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" value={form.customer} onChange={(e) => update("customer", e.target.value)}>
              <option value="" disabled>Select customer</option>
              {CUSTOMERS.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div id="field" className="md:flex md:flex-col md:gap-[10px]">
            <label className="md:text-[14px] md:pl-[10px] md:font-[400] md:text-[#BB4D00] md:font-['Nunito']"  >Tiffin Type</label>
            <div id="option-grid-3" className="md:flex md:grid-col-[repeat(3, 1fr)] md:gap-[30px]">
              {TIFFIN_TYPES.map(({ id, label, icon: Icon }) => (
                <button
                  type="button"
                  key={id}
                  className={`option-card md:flex md:flex-col md:h-[90px] md:w-[220px] md:items-center md:justify-center md:gap-[6px] md:border-[1px] md:border-solid md:border-[#fce3b0] md:rounded-[12px] md:p-[16px_16px] md:text-[12px] md:font-[400] md:text-[#777777] md:cursor-pointer md:bg-[#ffffff] md:transition-[0.2s ease]
                    ${form.tiffinType === id ? "selected md:border-[1px] md:border-solid md:border-[#FF6900] md:bg-[#fff7ed] md:text-[#FF6900] " : ""}`}
                  onClick={() => update("tiffinType", id)}
                >
                  <Icon className="md:w-[20px] md:h-[20px] md:text-[#FF6900]" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div id="modal-body grid-2" className="md:grid md:grid-cols-[1fr_1fr] md:gap-[14px_16px]">
            <div id="field" className="md:flex md:flex-col md:gap-[6px]">
              <label className="md:text-[14px] md:pl-[10px] md:font-[400] md:text-[#BB4D00] md:font-['Nunito']" >Date</label>
              <input className="md:h-[38px] md:w-full md:rounded-[10px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex md:outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none"  type="date" value={form.date} onChange={(e) => update("date", e.target.value)} />
            </div>
            <div id="field" className="md:flex md:flex-col md:gap-[6px]">
              <label className="md:text-[14px] md:pl-[10px] md:font-[400] md:text-[#BB4D00] md:font-['Nunito']" >Quantity</label>
              <input className="md:h-[38px] md:w-full md:rounded-[10px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex md:outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none"  type="number" min={1} value={form.quantity} onChange={(e) => update("quantity", e.target.value)} />
            </div>
            <div id="field" className="md:flex md:flex-col md:gap-[6px]">
              <label className="md:text-[14px] md:pl-[10px] md:font-[400] md:text-[#BB4D00] md:font-['Nunito']" >Amount (₹)</label>
              <input className="md:h-[38px] md:w-full md:rounded-[10px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex md:outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none"  type="number" value={form.amount} onChange={(e) => update("amount", e.target.value)} />
            </div>
            
            <div id="field" className="md:flex md:flex-col md:gap-[6px]">
              <label className="md:text-[14px] md:pl-[10px] md:font-[400] md:text-[#BB4D00] md:font-['Nunito']" >Delivery / Pickup</label>
              <select className="md:h-[38px] md:w-full md:rounded-[10px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex md:outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none"  value={form.delivery} onChange={(e) => update("delivery", e.target.value)}>
                <option value="Pickup">Pickup</option>
                <option value="Delivery">Delivery</option>
              </select>
            </div>
          </div>

          <div id="field" className="md:flex md:flex-col md:gap-[6px]">
            <label className="md:text-[12px] md:font-[400] md:text-[] md:text-[uppercase]" >Payment Method</label>
            <div id="option-row-4" className="md:flex md:grid-col-[ repeat(4, 1fr)] md:gap-[8px]">
              {["Cash", "UPI", "Online", "Card"].map((method) => (
                <button
                  type="button"
                  key={method}
                  className={`option-pill md:border-[1px] md:border-solid md:border-[#fce3b0] md:rounded-[12px] md:p-[10px_8px] md:text-[14px] md:font-[400] md:text-[#666666] md:cursor-pointer md:bg-[#ffffff] md:transition-[0.2s_ease]
                     ${form.payment === method ? "selected md:bg-[#ff6900] md:border-[#FF6900] md:vvtext-[#ffffff]" : ""}`}
                  onClick={() => update("payment", method)}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer" className=" md:h-[60px] md:flex md:items-center md:justify-end md:gap-[15px] md:mt-[10px] ">
          <button id="btn-cancel" className="md:bg-none md:border-none md:text-[#888888] md:text-[14px] md:font-[400] md:cursor-pointer md::hover md:text-[#555555]" onClick={onClose}>Cancel</button>
          <button id="btn-save" className="md:flex md:items-center md:gap-[8px] md:text-[#FFFFFF] md:border-none md:bg-[#ff6900] md:p-[10px_22px] md:rounded-[10px] md:text-[12px]  md:font-[500] md:mr-[20px] md:cursor-pointer md:hover:bg-[#e85d00]" onClick={() => onSave?.(form)}>
            <CheckCircle2 className="md:size-[18]" /> Save
          </button>
        </div>
      </div>
    </div>
  );
}