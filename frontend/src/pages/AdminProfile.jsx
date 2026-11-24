import { useState } from "react";
import { ArrowLeft, Pencil, BadgeCheck, Users, BookOpen, LogOut } from "lucide-react";
import LogoutModal from "../modal/LogoutModal";
import { useNavigate } from "react-router-dom";



export default function AdminProfile() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    localStorage.removeItem("token");
    setShowLogoutModal(false);
    window.location.href = "/login";
  };

  return (
    <div className="page-inner admin-profile-page" className=" md:ml-[75px]  md:w-[1155px]  md:min-h-[100vh]   md:p-[2.1875rem_1.25rem_1.875rem_1.25rem]  md:mt-[68px]">
      <button className="profile-back" className=" md:text-[#BB4D00] md:flex md:items-center" onClick={() => window.history.back()}>
        <ArrowLeft size={16} /> Back to Dashboard
      </button>

      <div className="profile-header" className="md:flex md:items-center md:justify-between md:flex-wrap md:gap-[16px] md:bg-[#FFFFFF] md:rounded-[16px] md:p-[24px] md:mb-[20px] md:shadow-[0_1px_3px] md:shadow-[rgba(249,115,22,0.5)]">
        <div className="profile-avatar-wrap" className="md:flex md:items-center md:gap-[16px]">
          <div className="profile-avatar-box" className="md:relative">
            <div className="profile-avatar" className="md:w-[64px] md:h-[64px] md:rounded-[16px] md:bg-linear-[135deg,#ffb347,#ff6900] md:text-[#FFFFFF] md:flex md:items-center md:justify-center md:text-[24px] md:font-[600] ">A</div>
            <button className="profile-avatar-edit" className="md:absolute md:b-[-4px] md:r-[-4px] md:w-[24px] md:h-[24px] md:rounded-[50%] md:bg-[#ff6900] md:border-[2px] md:border-solid md:border-[#ffffff] md:flex md:items-center md:justify-center md:text-[#ffffff] md:cursor-pointer"><Pencil size={12} /></button>
          </div>
          <div>
            <h1 className="profile-name" className="md:font-[18px] md:font-[600] md:text-[#222222]">Admin</h1>
            <p className="profile-role" className="md:text-[14px] md:text-[#ff6900] md:font-[500] md:mt-[2px]">Owner · Messwala</p>
            <p className="profile-verified" className="md:flex md:items-center md:gap-[4px] md:text-[12px] md:text-[#16a34a] md:mt-[4px]"><BadgeCheck size={14} /> Verified account</p>
          </div>
        </div>
        <button className="profile-edit-btn" 
        onClick={() => navigate("/myprofile")}
        className="md:flex md:items-center md:gap-[8px] md:bg-[#ea580c] md:border-none md:p-[10px_16px] md:rounded-[12px] md:text-[14px] md:font-[500] md:cursor-pointer"><Pencil size={14} /> Edit Profile</button>
      </div>

      <div className="profile-section" className="md:bg-[#ffffff] md:rounded-[16px] md:p-[24px] md:mb-[20px] md:shadow-[0_1px_3px] md:shadow-[rgba(249,115,22,0.5)]">
        <h3 className="md:flex md:items-center md:gap-[8px] md:text-[13px] md:font-[600] md:text-[#ff6900] md:transform-uppercase md:mb-[16px]"><Users size={16} /> Personal Information</h3>
        <div className="profile-fields" className="md:grid md:grid-cols-[1fr_1fr] md:gap-[16px]">
          <ProfileField label="Full Name" value="Admin" />
          <ProfileField label="Mobile Number" value="+91 9876543210" locked />
          <ProfileField label="Email" value="eer@gmail.com" />
          <ProfileField label="Role" value="Owner" locked />
        </div>
      </div>

      <div className="profile-section" className="md:bg-[#ffffff] md:rounded-[16px] md:p-[24px] md:mb-[20px] md:shadow-[0_1px_3px] md:shadow-[rgba(249,115,22,0.5)]">
        <h3  className="md:flex md:items-center md:gap-[8px] md:text-[13px] md:font-[600] md:text-[#ff6900] md:transform-uppercase md:mb-[16px]"><BookOpen size={16} /> Mess Information</h3>
        <div className="profile-fields" className="md:grid md:grid-cols-[1fr_1fr] md:gap-[16px]">
          <ProfileField label="Mess Name" value="Smart Mess" />
          <ProfileField label="Plan" value="Smart Mess Pro" />
          <ProfileField label="Joined" value="August 2026" />
          <ProfileField label="Status" value="Active" statusDot />
        </div>
      </div>

      <div className="logout-row" className="md:flex md:justify-end">
        <button className="logout-btn" className="md:flex md:items-center md:gap-[8px] md:bg-[#ef4444] md:text-[#ffffff] md:border-none md:p-[12px_20px] md:rounded-[12px] md:text-[14px] md:font-[400] md:cursor-pointer md:hover:bg-[#dc2626]" onClick={() => setShowLogoutModal(true)}>
          <LogOut size={16} /> Logout
        </button>
      </div>

      <LogoutModal open={showLogoutModal} onCancel={() => setShowLogoutModal(false)} onConfirm={handleConfirmLogout} />
    </div>
  );
}

function ProfileField({ label, value, locked, statusDot }) {
  return (
    <div className="profile-field">
      <label className="md:block md:text-[16px] md:text-[#999999] md:pl-[10px] md:mb-[8px]">{label}</label>
      <div className="box" className="md:flex md:items-center md:justify-between md:bg-[#fefce8] md:border-[2px] md:border-solid md:border-[#FEF9C2] md:rounded-[12px] md:p-[12px_16px] md:text-[14px] md:text-[#333333]">
        <span>{value}</span>
        {locked && <span className="locked" className="md:text-[14px] md:text-[#aaaaaa]">Locked</span>}
        {statusDot && <span className="status-dot" className="md:w-[12px] md:h-[12px] md:rounded-[50%] md:bg-[#22c55e]" />}
      </div>
    </div>
  );
}