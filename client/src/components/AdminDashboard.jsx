import React, { useState } from "react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("current");

  // Mock event data
  const currentEvents = [
    { id: 1, name: "Tree Plantation Drive", date: "2024-12-05", location: "Central Park" },
    { id: 2, name: "Beach Cleanup", date: "2024-12-12", location: "Seaside Beach" },
  ];

  const upcomingEvents = [
    { id: 3, name: "Food Distribution", date: "2024-12-20", location: "Community Hall" },
    { id: 4, name: "Clothing Drive", date: "2024-12-25", location: "City Center" },
  ];

  const pastEvents = [
    { id: 5, name: "Animal Shelter Visit", date: "2024-11-10", location: "Animal Shelter" },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto bg-slate-800 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="flex space-x-4 justify-center mb-6">
          <button
            onClick={() => handleTabChange("current")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "current"
                ? "bg-white text-slate-900"
                : "bg-slate-700 hover:bg-slate-600 text-white"
            }`}
          >
            Current Events
          </button>
          <button
            onClick={() => handleTabChange("upcoming")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "upcoming"
                ? "bg-white text-slate-900"
                : "bg-slate-700 hover:bg-slate-600 text-white"
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => handleTabChange("past")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "past"
                ? "bg-white text-slate-900"
                : "bg-slate-700 hover:bg-slate-600 text-white"
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Event List */}
        <div className="space-y-4">
          {activeTab === "current" &&
            currentEvents.map((event) => (
              <div
                key={event.id}
                className="flex justify-between items-center bg-slate-700 border border-slate-600 rounded-lg p-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{event.name}</h3>
                  <p className="text-sm text-slate-300">Date: {event.date}</p>
                  <p className="text-sm text-slate-300">Location: {event.location}</p>
                </div>
                <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-slate-200">
                  Manage
                </button>
              </div>
            ))}
          {activeTab === "upcoming" &&
            upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex justify-between items-center bg-slate-700 border border-slate-600 rounded-lg p-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{event.name}</h3>
                  <p className="text-sm text-slate-300">Date: {event.date}</p>
                  <p className="text-sm text-slate-300">Location: {event.location}</p>
                </div>
                <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-slate-200">
                  Manage
                </button>
              </div>
            ))}
          {activeTab === "past" &&
            pastEvents.map((event) => (
              <div
                key={event.id}
                className="flex justify-between items-center bg-slate-700 border border-slate-600 rounded-lg p-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{event.name}</h3>
                  <p className="text-sm text-slate-300">Date: {event.date}</p>
                  <p className="text-sm text-slate-300">Location: {event.location}</p>
                </div>
                <button className="bg-slate-500 text-white px-4 py-2 rounded-lg font-medium cursor-not-allowed opacity-50">
                  No Action
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
