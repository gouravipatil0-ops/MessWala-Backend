import { useState } from "react";
import {
  Ticket,
  CheckCircle,
  WalletCards,
  RotateCcw,
  Pencil,
  History,
  Plus,
} from "lucide-react";
import CouponModal from "../modal/CouponModal";


const Coupons = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    {
      number: 150,
      label: "Total Issued",
      icon: Ticket,
    },
    {
      number: 95,
      label: "Used",
      icon: CheckCircle,
    },
    {
      number: 55,
      label: "Available",
      icon: WalletCards,
    },
    {
      number: 20,
      label: "Carry Forward",
      icon: RotateCcw,
    },
  ];

  const coupons = [
    {
      id: 1,
      customer: "Rahul Patil",
      plan: "Monthly",
      total: 30,
      used: 20,
      remaining: 10,
      carryForward: 10,
      expiry: "31 Aug 2026",
    },
    {
      id: 2,
      customer: "Amit Sharma",
      plan: "Yearly",
      total: 30,
      used: 8,
      remaining: 22,
      carryForward: 10,
      expiry: "15 Jan 2027",
    },
    {
      id: 3,
      customer: "Sneha Joshi",
      plan: "Monthly",
      total: 30,
      used: 22,
      remaining: 8,
      carryForward: 10,
      expiry: "31 Aug 2026",
    },
    {
      id: 4,
      customer: "Neha Shah",
      plan: "Monthly",
      total: 30,
      used: 15,
      remaining: 15,
      carryForward: 10,
      expiry: "31 Aug 2026",
    },
  ];

  return (
    <section className="content" className="  md:w-[1155px] md:h-[100vh] md:ml-[75px] md:p-[2.1875rem_1.25rem_1.875rem_1.50rem] md:mt-[68px]">
      {/* PAGE HEADER */}
      <div className="page-heading" className="  md:flex md:items-center md:w-full md:justify-between ">

        <div className="page-title" className="md:font-['Nunito'] md:text-[#292524] md:gap-[15px] md:text-[26px] md:font-[400] md:text-[#BB4D00] md:font-normal md:flex md:items-center md:pt-[10px] md:pl-[12px]" >
          <Ticket size={21} strokeWidth={1.8} />
          <h2>Coupon Management</h2>
        </div>

        <div className="page-actions">

          <button 
            className="btn btn-primary"
            className=" md:pt-[10px] md:flex md:gap-[10px] md:h-[45px] md:w-[200px] md:align-middle md:text-center md:justify-center md:text-[18px] md:text-[#FFFFFF] md:bg-[#FF6900] md:rounded-[10px] md:outline-none md:hover:bg-[#dc6007] md:hover:outline-none"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus size={16} strokeWidth={1.8} />
            Add Coupon
          </button>
          
        </div>

      </div>

      {/* STATISTICS */}
      <div className="stats-container" className="md:h-[180px] md:w-[1114px]  md:flex md:items-center md:justify-around md:mt-[25px]">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="stat-card" className="md:h-[160px] md:w-[252px]  md:bg-white md:rounded-2xl md:pt-[17px] md:pl-[55px]  md:items-center md:justify-around md:shadow-[0_0_7px] md:shadow-[rgba(249,115,22,0.5)]" key={stat.label}>
              <div className="md:h-[42px] md:w-[132px] md:text-[#BB4D00]  md:flex md:justify-center md:items-center"><Icon size={23} /></div>
              <div className="md:h-[42px] md:w-[132px] md:flex md:items-center md:justify-center  md:text-[#292524] md:font-['Nunito'] md:text-[25px] md:font-[400] md:font-normal md:pl-[1px] md:pt-[10px]">{stat.number}</div>
              <span className="md:h-[42px] md:w-[132px] md:flex md:items-center md:justify-center  md:text-[#BB4D00] md:font-['Nunito'] md:text-[18px] md:font-[600] md:font-normal md:pl-[1px]">{stat.label}</span>
            </div>
          );
        })}
      </div>

      {/* TABLE */}
      <div className="table-card" className="md:mt-[30px] md:w-full md:bg-[#FFFFFF] md:border-[1px] md:border-solid md:border-[#FEF9C2] md:rounded-[10px] md:overflow-x-auto md:overflow-y-hidden md:shadow-[0_0_8px] md:shadow-[rgba(249,115,22,0.5)]">
        <table className="md:w-full md:min-w-[720px] md:border-collapse md:text-left">
          <thead className="md:bg-[#fffbf0] md:h-[70px]">
            <th className=" md:items-center md:p-[7px_40px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">
              CUSTOMER
            </th>
            <th className=" md:items-center md:p-[7px_20px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">
              PLAN
            </th>
            <th className=" md:items-center md:p-[7px_20px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">
              TOTAL
            </th>
            <th className=" md:items-center md:p-[7px_10px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">
              USED
            </th>
            <th className=" md:items-center md:p-[7px_10px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">
              REMAINING
            </th>
            <th className=" md:items-center md:p-[7px_10px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">
              CARRY FWD
            </th>
            <th className=" md:items-center md:p-[7px_10px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">
              EXPIRY
            </th>
            <th className=" md:items-center md:p-[7px_40px]  md:text-[#BB4D00] md:text-[16px] md:font-[700] md:font-bold md:text-uppercase md:font-['Nunito'] md:border-b-[#A6A09B] ">
              ACTION
            </th>
          </thead>

          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.id} className="md:hover:bg-[#fffdf7]">
                <td className="md:font-['Nunito'] md:font-[400] md:font-normal md:text-[18px] md:text-[#292524] md:pl-[45px]">
                  {coupon.customer}
                </td>
                <td className="md:w-[80px] md:h-[30px] md:ml-[10px] md:flex md:items-center md:justify-center md:p-[4px_8px]  md:rounded-[30px] md:bg-[#fef9c2] md:border-[1px] md:border-solid md:border-[#FFF085] md:text-[14px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#894B00]">
                  <span className="plan">
                    {coupon.plan}
                  </span>
                </td> 
                <td className="md:pl-[30px] md:py-4 md:text-[18px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#2C1810] ">
                  {coupon.total}
                </td>
                <td className="md:pl-[20px] md:py-4 md:text-[18px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#FE4900] ">
                  {coupon.used}
                </td>
                <td className="md:pl-[35px] md:py-4 md:text-[18px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#00A63E] ">
                  {coupon.remaining}
                </td>
                <td className="md:pl-[25px] md:py-4 md:text-[18px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#2C1810] ">
                  {coupon.carryForward}
                </td>
                <td className="  md:py-4 md:text-[16px] md:font-['Nunito'] md:font-[400] md:font-normal md:text-[#79716B] ">
                  {coupon.expiry}
                </td>
                <td className="md:py-4 md:pl-[10px] md:ml-[20px] md:flex md:gap-[10px] md:text-sm md:text-[#444444] ">
                  <button className="md:bg-[#fff0dc] md:h-[40px] md:w-[90px] md:gap-[12px] md:rounded-[30px] md:flex md:items-center md:justify-center md:text-[#bb4d00] md:text-[14px] md:hover:bg-[#ffe5c7]" >
                    <Pencil className="md:h-[14px] md:w-[14px]"/>
                    Adjust
                  </button>

                  <button className="md:bg-[#fde3e5] md:h-[40px] md:w-[90px] md:gap-[12px] md:rounded-[30px] md:text-[14px] md:flex md:items-center md:justify-center md:text-[#d76b75] md:hover:bg-[#fbd3d7]">
                    <History className="md:h-[14px] md:w-[14px]"/>
                    History
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* { MODAL } */}
      {isModalOpen && (
        <CouponModal
          onClose={() => setIsModalOpen(false)}
          onSave={(data) => {
            console.log(`Saved: ${data}`)
          }}
        />
      )}

    </section>
  );
};

export default Coupons;
