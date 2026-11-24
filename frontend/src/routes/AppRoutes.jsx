import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import WelcomeBack from "../pages/WelcomeBack";
import Register from "../pages/Register";
import Register2 from "../pages/Register2";
import Register3 from "../pages/Register3";
import ResetP from "../pages/ResetP";
import ChangeP from "../pages/ChangeP";
import Otp from "../pages/Otp";

import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/Dashboard";
import Items from "../pages/AllItems";
import Customers from "../pages/Customers";
import MealAttendance from "../pages/MealAttendance";
import DailyCustomers from "../pages/DailyCustomers";
import TiffinManagement from "../pages/TiffinManagement";
import Coupons from "../pages/Coupons";
import Subscriptions from "../pages/Subscriptions";
import Payments from "../pages/Payments";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import AdminProfile from "../pages/AdminProfile";
import Myprofile from "../pages/Myprofile";
import EditItemMenu from "../pages/EditItemMenu";
import CustomerDetails from "../pages/CustomerDetails";
import DailyReport from "../pages/DailyReport";
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/WelcomeBack" element={<WelcomeBack/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Register2" element={<Register2/>}/>
                <Route path="/Register3" element={<Register3/>}/>
                <Route path="/ResetP" element={<ResetP/>}/>
                <Route path="/ChangeP" element={<ChangeP/>}/>
                <Route path="/Otp" element={<Otp/>}/>
                <Route path="/" element={<AdminLayout />}>
                    {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> //Main this  */}
                    <Route path="/" element={<Navigate to="/coupons" replace />} />
                    
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/items" element={<Items />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/meal-attendance" element={<MealAttendance />} /> 
                    <Route path="/tiffin-management" element={<TiffinManagement />} /> 
                    <Route path="/daily-customers" element={<DailyCustomers />} />
                    <Route path="/coupons" element={<Coupons />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/payments" element={<Payments />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="my-profile" element={<AdminProfile />} />
                    <Route path="/myprofile" element={<Myprofile />} />
                    <Route path="/edit-item-menu" element={<EditItemMenu />}/>
                    <Route path="/customer-details" element={<CustomerDetails />}/>
                    <Route path="/daily-report" element={<DailyReport />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;