import React, { useState } from "react";

const HostEventDescription = ({ event }) => {
  const [timeSlots, setTimeSlots] = useState([
    { slot: "9:00 AM - 11:00 AM", volunteers: 2, limit: 5 },
    { slot: "11:00 AM - 1:00 PM", volunteers: 3, limit: 5 },
  ]);

  const [eventProgress, setEventProgress] = useState("In Progress");
  const [volunteers, setVolunteers] = useState([
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
  ]);

  const totalVolunteers = timeSlots.reduce((sum, slot) => sum + slot.volunteers, 0);
  const maxVolunteers = timeSlots.reduce((sum, slot) => sum + slot.limit, 0);

  const sendInvitations = () => {
    alert("Invitations sent to all registered volunteers!");
  };

  const sendReminders = () => {
    alert("Reminders sent to all registered volunteers!");
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Event Details */}
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <p className="text-xl mb-2">📍 Location: {event.location}</p>
        <p className="text-xl mb-6">🕒 Time: {event.time}</p>

        {/* Max Volunteers */}
        <p className="text-lg font-medium mb-6">
          <strong>Max Volunteers Allowed:</strong> {maxVolunteers}
        </p>

        {/* Time Slot Management */}
        <h2 className="text-2xl font-semibold mb-4">Time Slots</h2>
        <div className="grid grid-cols-1 gap-6">
          {timeSlots.map((slot, index) => (
            <div key={index} className="p-4 border rounded-lg bg-gray-100">
              <p className="text-lg font-medium">
                {slot.slot} - Volunteers: {slot.volunteers}/{slot.limit}
              </p>
              {slot.volunteers >= slot.limit ? (
                <p className="text-red-600 font-semibold mt-2">Slot Full</p>
              ) : (
                <button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => {
                    const updatedSlots = [...timeSlots];
                    updatedSlots[index].volunteers += 1;
                    setTimeSlots(updatedSlots);
                  }}
                >
                  Lock Slot
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Total Volunteers */}
        <p className="text-lg font-medium mt-8">
          <strong>Total Registered Volunteers:</strong> {totalVolunteers}
        </p>

        {/* Event Progress */}
        <h2 className="text-2xl font-semibold mt-8">Event Status</h2>
        <p className="text-lg mb-4">Current Status: {eventProgress}</p>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          onClick={() => setEventProgress("Completed")}
        >
          Mark as Completed
        </button>

        {/* Manage Invitations */}
        <h2 className="text-2xl font-semibold mt-8">Manage Invitations</h2>
        <div className="flex gap-4 mt-4">
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            onClick={sendInvitations}
          >
            Send Invitations
          </button>
          <button
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
            onClick={sendReminders}
          >
            Send Reminders
          </button>
        </div>

        {/* Registered Volunteers */}
        <h2 className="text-2xl font-semibold mt-8">Registered Volunteers</h2>
        <ul className="mt-4 space-y-2">
          {volunteers.map((volunteer, index) => (
            <li key={index} className="text-lg">
              {volunteer.name} - <span className="text-gray-600">{volunteer.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HostEventDescription;