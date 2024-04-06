import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Loginas from "./pages/Loginas";
import Signuppartner from "./pages/Signuppartner";
import Customtrip from "./pages/Customtrip";
import Userdetails from "./pages/Userdetails";
import DashboardPartner from "./pages/DashboardPartner";
import AdminDashboard from "./pages/AdminDashboard";
import Cabregister from "./pages/Cabregister";
import Trippackage from "./pages/Trippackage";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import OnlyPartnerPrivateRoute from "./components/OnlyPartnerPrivateRoute";
import ScrollToTop from "./components/ScrollToTop";
import Setting from "./pages/Setting";
import FavouriteTour from "./pages/FavouriteTour";
import BookedTour from "./pages/BookedTour";
import PlaceRegister from "./pages/PlaceRegister";
import HotelRegister from "./pages/HotelRegister";
import OnGoingBooking from "./pages/OnGoingBooking";
import CompletedBooking from "./pages/CompletedBooking";
import UpCommingBooking from "./pages/UpCommingBooking";
import CreateNewTripPlans from "./pages/CreateNewTripPlans";
import Partners from "./pages/Partners";
import Customers from "./pages/Customers";
import MonthlyTripAndEarning from "./pages/MonthlyTripAndEarning";
import OngoingTrip from "./pages/OngoingTrip";
import UpcomingTrip from "./pages/UpcomingTrip";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/favorite-tour" element={<FavouriteTour />} />
          <Route path="/booked-tour" element={<BookedTour />} />
          <Route path="/ongoing-booking" element={<OnGoingBooking />} />
          <Route path="/upcomming-booking" element={<UpCommingBooking />} />
          <Route path="/completed-booking" element={<CompletedBooking />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/dashboard-admin" element={<AdminDashboard />} />
          <Route path="/ongoing-trip" element={<OngoingTrip/>}/>
          <Route path="/upcoming-trip" element={<UpcomingTrip/>}/>
          <Route path="/create-new-trip-plan" element={<CreateNewTripPlans/>}/>
          <Route path="/partners" element={<Partners/>}/>
          <Route path="/monthly-trip-and-earning" element={<MonthlyTripAndEarning/>}/>
          <Route path="/customers" element={<Customers/>}/>
        </Route>
        <Route element={<OnlyPartnerPrivateRoute />}>
          <Route path="/dashboard-partner" element={<DashboardPartner />} />
          <Route path="/cab-register" element={<Cabregister />} />
          <Route path="/hotel-register" element={<HotelRegister />} />
          <Route path="/place-register" element={<PlaceRegister />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/loginas" element={<Loginas />} />
        <Route path="/signup-partner" element={<Signuppartner />} />
        <Route path="/customtrip" element={<Customtrip />} />
        <Route path="/userdetails" element={<Userdetails />} />
        <Route path="/trippackage" element={<Trippackage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
