import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import eventService from "../services/event-service";
import EventCard from "../components/EventCard";
import Loading from "./Loading";
import Error from "./Error";

const Events: React.FC = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: [`events`],
    queryFn: () =>
      eventService.getEvents({
        search: "",
        page: 1,
        limit: 100,
      }),
    refetchOnWindowFocus: false,
  });

  const handleViewDetails = (eventId: string) => {
    navigate(`/event/${eventId}`);
  };

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Danh Sách Sự Kiện</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(data?.data?.events) &&
            data?.data?.events?.map((event, index) => (
              <EventCard
                key={event._id}
                index={index}
                event={event}
                onClick={() => handleViewDetails(event._id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
