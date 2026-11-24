import { Package, X, Pencil } from "lucide-react";

export default function TiffinDetail({ open, onClose, onEdit, order }) {
  if (!open || !order) return null;
  const initial = order.customer?.charAt(0)?.toUpperCase() || "?";
  const statusMap = { Ready: "badge-blue", Preparing: "badge-amber", "Picked Up": "badge-green" };

  return (
    <div id="modal-overlay" className="md:fixed md:inset-0 md:bg-[rgba(0, 0, 0, 0.5)] md:flex md:items-center md:justify-center md:p-[16px] md:z-index-[200]" onClick={onClose}>
      <div id="modal-box" className="md:bg-[#ffffff] md:rounded-[24px] md:w-full md:max-w-[480px] md:max-h-[90vh] md:overflow-y-auto md:shadow-[0_20px_40px] md:shadow-[rgba(0,0,0,0.2)]" onClick={(e) => e.stopPropagation()}>

        <div id="modal-header" className="md:flex md:items-center md:justify-between md:p-[20px_24px] md:border-b-[1px] md:border-solid md:border-[#fdebc8] ">
          <h2 className="md:flex md:items-center md:gap-[8px] md:text-[18px] md:font-[400] md:text-[#222222]"><Package size={20} className="md:text-[#BB4D00]" /> Tiffin Detail</h2>
          <button id="modal-close" className="md:flex md:items-center md:justify-center md:p-[5px] md:bg-none md:border-none md:text-[#999999] md:cursor-pointer md:rounded-[8px] md:hover:bg-[#F5F5F5] md:hover:text-[#666666]" onClick={onClose}><X size={20} /></button>
        </div>

        <div id="modal-body" className="md:p-[15px_16px_16px] ">
          <div className="md:flex md:items-center md:justify-between md:bg-[#fef3e2] md:rounded-[16px] md:p-[12px_16px]">
            <div  className="md:flex md:items-center md:gap-[12px]">
              <div id="profile-avatar" className="md:w-[40px] md:h-[40px] md:flex md:items-center md:justify-center  md:md:rounded-[50%]  md:md:w-[37px]  md:md:h-[37px]  md:shrink-0  md:bg-gradient-to-b  md:from-[#FFDF20]  md:to-[#FF8904]  md:text-[16px]  md:text-[#FFFFFF]  md:font-['Nunito']   md:font-[400]  md:text-[14px] md:rounded-[999]">{initial}</div>
              <div className="">
                <p className=" md:text-[16px] md:font-['Nunito'] md:font-[400] md:text-[#292524]" >{order.customer}</p>
                <p className="md:text-[#BB4D00] md:font-['Nunito'] md:font-[400] md:text-[14px]">{order.tiffinType} · {order.date}</p>
              </div>
            </div>
            <span className={`badge ${statusMap[order.status] || "badge-gray"}`}>{order.status}</span>
          </div>

          <div id="modal-body grid-2" className="md:p-0 md:grid md:grid-cols-[1fr_1fr] md:mt-[10px] md:gap-[5px] ">
            <DetailField label="Meal" value={order.meal} />
            <DetailField label="Quantity" value={order.quantity} />
            <DetailField label="Amount" value={`₹${order.amount}`} />
            <DetailField label="Payment" value={order.payment} />
          </div>
        </div>

        <div id="modal-footer" className="md:h-[61px] md:flex items-center md:justify-end md:gap-[13px] md:p-[0_16px]  md:border-t-[1px] md:border-t-solid md:border-[#eee8dc] md:bg-[#FFFFFF]">
          <button id="btn-cancel" className="md:bg-none md:border-none md:text-[#888888] md:text-[14px] md:font-[400] md:cursor-pointer md:hover:text-[#555555]" onClick={onClose}>Close</button>
          <button id="profile-edit-btn" className="md:flex md:items-center md:gap-[8px] md:bg-[#FFEDD5] md:text-[#ea580c] md:border-none md:p-[10px_16px] md:rounded-[12px] md:text-[14px] md:font-[400] md:cursor-pointer" onClick={onEdit}>
            <Pencil size={14} /> Edit Order
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailField({ label, value }) {
  return (
    <div className="md:bg-[#fef3e2] md:rounded-[12px] md:p-[10px_14px]">
      <p className="md:text-[#ff6900] md:text-[12px] md:font-[400]">{label}</p>
      <p className="md:text-[#333] md:text-[14px] md:font-[400] md:mt-[2px]">{value}</p>
    </div>
  );
}