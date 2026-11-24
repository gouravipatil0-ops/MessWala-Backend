import { NavLink } from "react-router-dom";
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
    Utensils
} from "lucide-react";

const sidebarItems = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard
    },
    {
        name: "All Items",
        path: "/items",
        icon: ListChecks
    },
    {
        name: "Customers",
        path: "/customers",
        icon: Users
    },
    {
        name: "Meal Attendance",
        path: "/meal-attendance",
        icon: CalendarCheck
    },
    {
        name: "Daily Customers",
        path: "/daily-customers",
        icon: CalendarDays
    },
    {
        name: "Tiffin Management",
        path: "/tiffin-management",
        icon: Box
    },
    {
        name: "Coupons",
        path: "/coupons",
        icon: Ticket
    },
    {
        name: "Subscriptions",
        path: "/subscriptions",
        icon: RefreshCcw
    },
    {
        name: "Payments",
        path: "/payments",
        icon: CreditCard
    },
    {
        name: "Reports",
        path: "/reports",
        icon: BarChart3
    },
    {
        name: "Settings",
        path: "/settings",
        icon: Settings
    }
];

const Sidebar = () => {
    return (
        <aside className="sidebar">

            {/* Logo */}
            <div className="logo-section">
                <div className="logo-icon">
                    <Utensils size={30} />
                </div>

                <div className="logo-text">
                    <h2>Messwala</h2>
                    <span>Admin Panel</span>
                </div>
            </div>

            {/* Menu */}
            <nav className="sidebar-menu">
                {sidebarItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "menu-item active"
                                    : "menu-item"
                            }
                        >
                            <Icon size={17} strokeWidth={1.8} />
                            <span>{item.name}</span>
                        </NavLink>
                    );
                })}
            </nav>

        </aside>
    );
};

export default Sidebar;