import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/user/home-page";
import ContactPage from "../pages/user/contact-page";
import PrivacyPolicyPage from "../pages/user/privacy-policy-page";
import AuthPage from "../pages/common/auth-page";
import VehiclePage from "../pages/user/vehicle-page";
import VehicleDetailsPage from "../pages/user/vehicle-details-page";
import UnauthorizedPage from "../pages/common/unauthorized-page";
import ProfilePage from "../pages/user/profile-page";
import ReservationPage from "../pages/user/reservation-page";
import ReservationDetailsPage from "../pages/user/reservation-page-details";
import NotFoundPage from "../pages/common/not-found-page";
import AboutPage from "../pages/user/about";

const CustomRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route path="privacy-policy" element={<PrivacyPolicyPage />}></Route>
          <Route path="auth" element={<AuthPage />}></Route>
          <Route path="unautorized" element={<UnauthorizedPage />}></Route>
          <Route path="vehicles">
            <Route index element={<VehiclePage />} />
            <Route path=":vehicleId" element={<VehicleDetailsPage />} />
          </Route>
          <Route path="user">
            <Route index element={<ProfilePage />}></Route>
            <Route path="reservations">
              <Route index element={<ReservationPage />} />
              <Route
                path=":reservationId"
                element={<ReservationDetailsPage />}
              />
            </Route>
          </Route>
          <Route path="admin"></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRouter;
