import React from "react";
import { useNavigate } from "react-router-dom";

const Events: React.FC = () => {
  const navigate = useNavigate();
  const events = [
    { id: "event-1", name: "Event 1", date: "2023-10-01" },
    { id: "event-2", name: "Event 2", date: "2023-10-15" },
    { id: "event-3", name: "Event 3", date: "2023-11-01" },
  ];

  const handleViewDetails = (eventId: string) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Danh Sách Sự Kiện</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.name}</h3>
              <p className="text-gray-600 mb-4">{event.date}</p>
              <button
                onClick={() => handleViewDetails(event.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Xem Chi Tiết
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
