import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import VolunteerHome from "./components/VolunteerHome.jsx";
import SignUpPage from "./components/SignUpPage.jsx"; // Assuming you have this component
import ContactPage from "./components/ContactPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import AdminDashboard from "./components/EventDashboard.jsx";
import ProfilePage from "./components/ProfilePage.jsx"; // Import ProfilePage for volunteer
import EditProfilePage from "./components/EditProfilePage.jsx"; // Import EditProfilePage for volunteer
import HostHome from "./components/HostHome.jsx"; // Import HostHome page for host
import EventEdit from "./components/EventEdit.jsx"; // Import EventEdit page for event editing
import LoginPage from "./components/LoginPage.jsx";

const App = () => {
  const [events, setEvents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  useEffect(() => {
    const fetchEvents = async () => {
      const mockEvents = [
        {
          id: 1,
          name: "Tree Plantation Drive",
          date: "2024-12-05",
          location: "Central Park",
          icon: "🌳", // Tree Plantation Icon
          description: "Join us for a fun-filled day planting trees in Central Park!",
        },
        {
          id: 2,
          name: "Beach Cleanup",
          date: "2024-12-12",
          location: "Seaside Beach",
          icon: "🏖️", // Beach Cleanup Icon
          description: "Help clean up the beaches for a cleaner, healthier environment.",
        },
        {
          id: 3,
          name: "DJ Night",
          date: "2024-12-20",
          location: "Community Hall",
          icon: "🎉", // DJ Night Icon
          description: "Organize a fun DJ night for the community to enjoy music and dancing.",
        },
      ];
      setEvents(mockEvents);
    };

    fetchEvents();
  }, []);

  const handleRegister = (eventId) => {
    console.log(`Registered for event with ID: ${eventId}`);
    alert("You have successfully registered for the event!");
  };

  const handleSignUpSuccess = () => {
    setIsAuthenticated(true); // Set authentication to true after signup
  };

  return (
    <BrowserRouter>
      {/* Only render Navbar after authentication */}
      {isAuthenticated && <Navbar />}
      <Routes>
        {/* Conditional route rendering: SignUpPage only if not authenticated */}
        <Route
          path="/signup"
          element={
            !isAuthenticated ? (
              <SignUpPage onSignUpSuccess={handleSignUpSuccess} />
            ) : (
              <Navigate to="/host-home" />
            )
          }
        />
        {/* Protected routes after authentication */}
        {isAuthenticated && (
          <>
            {/* Host Routes */}
            <Route
              path="/host-home"
              element={<HostHome events={events} />}
            />
            <Route
              path="/event-edit/:eventId"
              element={<EventEdit />}
            />
            {/* Volunteer Routes */}
            <Route
              path="/volunteer"
              element={<VolunteerHome events={events} onRegister={handleRegister} />}
            />
            <Route
              path="/profile"
              element={<ProfilePage />} // Profile page for volunteers
            />
            <Route
              path="/edit-profile"
              element={<EditProfilePage />} // Edit Profile page for volunteers
            />
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            {/* Additional Pages */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />

          </>
        )}
                    <Route path="/login" element={<LoginPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
