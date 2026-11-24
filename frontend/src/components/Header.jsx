import { useState } from "react";
import {
  LayoutDashboard,
  ListChecks,
  Users,
  CalendarCheck,
  CalendarDays,
  Box,
  Ticket,
  RefreshCcw,
  CreditCard,
  BarChart3,
  Settings,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

import { useLocation } from "react-router-dom";

import Admin from "../modal/Admin";

const Header = () => {

  const location = useLocation();

  //Gouravi add my points
    const [showAdmin, setShowAdmin] = useState(false);

    const today = new Date();

   const formattedDate = today.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

  const pageInfo = {
    "/dashboard": {
      title: "Dashboard",
      icon: LayoutDashboard,
    },

    "/items": {
      title: "All Items",
      icon: ListChecks,
    },

    "/customers": {
      title: "Customers",
      icon: Users,
    },

    "/meal-attendance": {
      title: "Meal Attendance",
      icon: CalendarCheck,
    },

    "/daily-customers": {
      title: "Daily Customers",
      icon: CalendarDays,
    },

    "/tiffin-management": {
      title: "Tiffin Management",
      icon: Box,
    },

    "/coupons": {
      title: "Coupons",
      icon: Ticket,
    },

    "/subscriptions": {
      title: "Subscriptions",
      icon: RefreshCcw,
    },

    "/payments": {
      title: "Payments",
      icon: CreditCard,
    },

    "/reports": {
      title: "Reports",
      icon: BarChart3,
    },

    "/settings": {
      title: "Settings",
      icon: Settings,
    },
    
    "/my-profile": {
      title: "My Profile",
      icon: LayoutDashboard
    }
  };


  const currentPage =
    pageInfo[location.pathname] ||
    pageInfo["/dashboard"];


  const PageIcon = currentPage.icon;


  return (
    <header className="top-header">

      {/* PAGE TITLE */}
      <div className="breadcrumb">

        <PageIcon
          size={21}
          strokeWidth={1.8}
        />

        <span>
          {currentPage.title}
        </span>

      </div>


      {/* RIGHT SIDE */}
      <div className="header-right">

        {/* SEARCH */}
        <div className="search-box">

          <Search size={16} />

          <input
            type="text"
            placeholder="Search..."
          />

        </div>


        {/* DATE */}
        <div className="date-box">

          <CalendarDays size={17} />

          <span>
            10 Aug 2026
          </span>

        </div>


        {/* NOTIFICATION */}
        <div className="notification">

          <Bell size={18} />

          <span className="notification-dot"></span>

        </div>


        {/* ADMIN */}
        {/* <div className="admin-profile">

          <div className="admin-avatar">
            A
          </div>

          <span>
            Admin
          </span>

          <ChevronDown size={14} />

        </div> */}

        <div
            className="admin-profile"
            onClick={() => setShowAdmin(!showAdmin)}
            style={{ cursor: "pointer" }}
          >
            <div className="admin-avatar">
              A
            </div>

            <span>Admin</span>

            <ChevronDown size={14} />
          </div>

          {showAdmin && (
            <Admin onClose={() => setShowAdmin(false)} />
          )}

      </div>

    </header>
  );
};

export default Header;