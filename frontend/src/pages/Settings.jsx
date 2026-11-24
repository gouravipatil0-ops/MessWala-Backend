import { useState } from "react";
import { Settings as SettingsIcon, BookOpen, Utensils, Ticket, IndianRupee, CheckCircle2 } from "lucide-react";

const CARRY_FORWARD_RULES = [
  "All unused coupons carry forward",
  "Only 50% of unused coupons carry forward",
  "No carry forward",
];

export default function Settings() {
  const [form, setForm] = useState({
    messName: "Smart Mess", address: "", phone: "",
    breakfastPrice: 60, lunchPrice: 80, dinnerPrice: 80, tiffinPrice: 90,
    monthlyCouponLimit: 30, enableCarryForward: true, carryForwardRule: CARRY_FORWARD_RULES[0],
    monthlyPlan: 3000, yearlyPlan: 32000, yearlyDiscount: 4000,
  });

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div id="page-inner" className=" md:p-[25px] md:max-w-[1050px] md:h-[144vh]  md:mt-[68px] md:ml-[130px] ">
      <h1 id="page-title" className="md:flex md:items-center md:gap-[8px] md:text-[25px] md:font-[400] md:text-[#292524] md:mt-[15px]" >
        <SettingsIcon  className=" md:ml-[50px] md:text-[#FF6900] md:w-[25px] md:h-[25px]"/> Settings
      </h1>

      <div id="settings-grid" className="md:grid md:grid-cols-[1fr_1fr]  md:w-[1000px] md:p-[30px] md:gap-[24px] md:mt-0">

        <div id="settings-card" className=" md:h-[400px] md:w-[450px] md:bg-[#ffffff ] md:border-[1px] md:border-solid md:border-[#FEF9C2] md:rounded-[16px]  md:p-[24px] md:ml-0 md:shadow-[0_1px_3px] md:shadow-[rgba(0,0,0,0.04)]">

          <h3 className=" md:flex md:items-center md:gap-[8px] md:text-[13px] md:font-[400] md:text-[#BB4D00] md:transform-[uppercase] md:mb-[16px] md:letter-spacing[ 0.03em]"><BookOpen  className=" md:text-[#BB4D00] md:size-[16px]" /> Mess Information</h3>
          <div id="field" className="md:mb-[16px]"><label className="md:text-[#57534D]" >Mess Name</label><input className="md:h-[42px] md:w-[380px] md:mt-[5px]  md:rounded-[13px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" value={form.messName} onChange={(e) => update("messName", e.target.value)} /></div>
          <div id="field" className="md:mb-[16px]"><label className="md:text-[#57534D]" >Address  </label><input className="md:h-[42px] md:w-[380px] md:mt-[5px]  md:rounded-[13px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" placeholder="Address" value={form.address} onChange={(e) => update("address", e.target.value)} /></div>
          <div id="field" className="md:mb-[16px]"><label className="md:text-[#57534D]" >Phone    </label><input className="md:h-[42px] md:w-[380px] md:mt-[5px]  md:rounded-[13px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" type="tel" placeholder="Phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} /></div>
        </div>

        <div id="settings-card" className="  md:h-[400px] md:w-[450px] md:bg-[#ffffff ] md:border-[1px] md:border-solid md:border-[#FEF9C2] md:rounded-[16px] md:p-[24px] md:mr-0  md:shadow-[0_1px_3px] md:shadow-[rgba(0,0,0,0.04)]">
          <h3 className="  md:text-[#BB4D00] md:flex md:items-center md:gap-[8px] md:text-[13px] md:font-[400] md:text-[] md:transform-[uppercase] md:mb-[16px] md:letter-spacing[ 0.03em]"><Utensils className=" md:text-[#BB4D00] md:size-[16px]" /> Meal Pricing (₹)</h3>
          <div id="field" className="md:mb-[16px]"><label className="md:text-[#57534D]" >Breakfast </label><input className="md:h-[42px] md:w-[380px] md:mt-[5px]  md:rounded-[13px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" type="number" value={form.breakfastPrice} onChange={(e) => update("breakfastPrice", e.target.value)} /></div>
          <div id="field" className="md:mb-[16px]"><label className="md:text-[#57534D]" >Lunch     </label><input className="md:h-[42px] md:w-[380px] md:mt-[5px]  md:rounded-[13px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" type="number" value={form.lunchPrice} onChange={(e) => update("lunchPrice", e.target.value)} /></div>
          <div id="field" className="md:mb-[16px]"><label className="md:text-[#57534D]" >Dinner    </label><input className="md:h-[42px] md:w-[380px] md:mt-[5px]  md:rounded-[13px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" type="number" value={form.dinnerPrice} onChange={(e) => update("dinnerPrice", e.target.value)} /></div>
          <div id="field" className="md:mb-[16px]"><label className="md:text-[#57534D]" >Tiffin    </label><input className="md:h-[42px] md:w-[380px] md:mt-[5px]  md:rounded-[13px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" type="number" value={form.tiffinPrice} onChange={(e) => update("tiffinPrice", e.target.value)} /></div>
        </div>

        <div id="settings-card" className=" md:h-[400px] md:w-[450px] md:bg-[#ffffff ] md:rounded-[16px] md:border-[1px] md:border-solid md:border-[#FEF9C2] md:p-[24px] md:shadow-[0_1px_3px] md:shadow-[rgba(0,0,0,0.04)]">
          <h3 className="  md:text-[#BB4D00] md:flex md:items-center md:gap-[8px] md:text-[13px] md:font-[400] md:text-[] md:transform-[uppercase] md:mb-[16px] md:letter-spacing[ 0.03em]"><Ticket className=" md:text-[#BB4D00] md:size-[16px]" /> Coupon Settings</h3>
          <div id="field" className="md:mb-[16px]"><label className="md:text-[#57534D]" >Monthly Coupon Limit</label><input className="md:h-[42px] md:w-[380px] md:mt-[5px]  md:rounded-[13px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex md:outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" type="number" value={form.monthlyCouponLimit} onChange={(e) => update("monthlyCouponLimit", e.target.value)} /></div>
   
           <div className=" md:flex md:items-center md:mt-[30px] ">
            <input className="md:h-[18px] md:w-[18px]  md:rounded-[3px]  md:bg-[#FFFFFF]  md:border-[1px]  md:border-solid md:border-[#FFF085] md:cursor-pointer md:appearance-none md:checked:after:content-['✓'] md:checked:bg-[#FF6900] md:checked:after:text-[#FFFFFF] md:checked:text-[12px] md:checked:font-bold md:checked:text-center " type="checkbox"  checked={form.enableCarryForward} onChange={(e) => update("enableCarryForward", e.target.checked)} />
            <label id="checkbox-row" className=" md:ml-[10px] md:flex md:items-center md:gap-[8px] md:text-[#57534D] md:text-[14px]   md:font-[400]">Enable Carry Forward Coupons</label>
           </div>

          {form.enableCarryForward && (
            <div  id="field"  className=" md:mt-[25px]">
              <label className="md:text-[#57534D]" >Carry Forward Rule</label>
              <select className="md:h-[42px] md:w-[380px] md:mt-[5px]  md:rounded-[13px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex md:outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" value={form.carryForwardRule} onChange={(e) => update("carryForwardRule", e.target.value)}>
                {CARRY_FORWARD_RULES.map((rule) => <option key={rule} value={rule}>{rule}</option>)}
              </select>
            </div>
          )}
        </div>

        <div id="settings-card"  className=" md:h-[400px] md:w-[450px] md:bg-[#ffffff ] md:rounded-[16px] md:border-[1px] md:border-solid md:border-[#FEF9C2] md:p-[24px] md:mr-[35px] md:shadow-[0_1px_3px] md:shadow-[rgba(0,0,0,0.04)]">
          <h3 className=" md:text-[#BB4D00] md:flex md:items-center md:gap-[8px] md:text-[13px] md:font-[400] md:text-[] md:transform-[uppercase] md:mb-[16px] md:letter-spacing[ 0.03em]"><IndianRupee className=" md:text-[#BB4D00] md:size-[16px]" /> Subscription Pricing (₹)</h3>
          <div id="field" className="md:mb-[16px]"><label className="md:text-[#57534D]" >Monthly Plan   </label><input type="number" className="md:h-[42px] md:w-[380px] md:mt-[5px]  md:rounded-[13px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex md:outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" value={form.monthlyPlan} onChange={(e) => update("monthlyPlan", e.target.value)} /></div>
          <div id="field" className="md:mb-[16px]"><label className="md:text-[#57534D]" >Yearly Plan    </label><input               className="md:h-[42px] md:w-[380px] md:mt-[5px]  md:rounded-[13px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex md:outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" type="number" value={form.yearlyPlan} onChange={(e) => update("yearlyPlan", e.target.value)} /></div>
          <div id="field" className="md:mb-[16px]"><label className="md:text-[#57534D]" >Yearly Discount</label><input               className="md:h-[42px] md:w-[380px] md:mt-[5px]  md:rounded-[13px] md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FFF085] md:flex md:outline-none md:text-[#2C1810] md:pl-[20px] md:font-normal md:font-[400] md:text-[15px] md:focus:border-[1px] md:focus:border-solid md:focus:border-[#F97316] md:focus:shadow-[0_0_8px_rgba(249,115,22,0.5)] md:focus:outline-none" type="number" value={form.yearlyDiscount} onChange={(e) => update("yearlyDiscount", e.target.value)} /></div>
        </div>
      </div>

      <div className="md:flex md:justify-end md:mt-[24px]">
        <button id="btn-save" className="md:flex md:items-center md:gap-[8px] md:rounded-[12px] md:text-[#ffffff] md:border-none md:p-[10px_22px] md:text-[14px] md:font-[400] md:cursor-pointer md:hover:bg-[#e85d00]" onClick={() => console.log("Saving settings:", form)}>
          <CheckCircle2 className="size-[16px]" /> Save Settings
        </button>
      </div>
    </div>
  );
}