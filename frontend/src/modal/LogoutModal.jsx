export default function LogoutModal({ open, onCancel, onConfirm }) {
  if (!open) return null;

  return (
    <div id="modal-overlay" className="md:fixed md:inset-0 md:bg-[rgba(0,0,0,0.5)] md:flex md:items-center md:justify-center md:p-[16px] md:z-index-[200]">
      <div id="logout-modal" className="md:bg-[#FFFFFF] md:rounded-[20px] md:p-[24px] md:max-w-[400px] md:w-full md:items-center">

        <div id="logout-icon-wrap" className="md:bg-[#fee2e2] md:rounded-[50%] md:w-[56px] md:h-[56px] md:flex md:justify-center md:m-[0_auto_16px] md:items-center">
          <div id="logout-icon-inner"  className=" md:rounded-[50%]  md:w-[32px] md:h-[32px] md:flex md:justify-center md:items-center md:text-[#ef4444] md:text-[20px] font-[700] border-[2px] border-solid border-[#ef4444] ">×</div>
        </div>
        <h2 id="logout-title" className="md:font-[20px] md:font-[400] md:text-[#222222] md:m-b-[8px] flex items-center justify-center ">Log out?</h2>

        <p id="logout-desc" className="md:font-[14px] md:text-[#888888] md:m-b-[20px] flex items-center justify-center">You want to logout this account.</p>

        <div id="logout-actions " className="md:flex md:justify-between md:px-[20px] md:mt-[15px] md:gap-[16px]">

          <button id="btn-logout-cancel" className="md:h-[40px] md:w-[120px]  md:bg-[#f8efc4] md:b-[1px] md:border-solid md:border-[#e5e5e5] md:text-[ #666666] md:rounded-[10px]" onClick={onCancel}>Cancel</button>
          <button id="btn-logout-confirm" className="md:h-[40px] md:w-[120px] md:bg-[#ef4444] md:text-[#ffffff] md:rounded-[10px]" onClick={onConfirm}>Yes, Logout</button>
        </div>
      </div>
    </div>
  );
}