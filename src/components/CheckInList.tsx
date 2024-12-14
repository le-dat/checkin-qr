import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import React from "react";
import eventService from "../services/event-service";
import Loading from "../pages/Loading";
import Error from "../pages/Error";
import { useParams } from "react-router-dom";

const CheckInList: React.FC = () => {
  const { id = "" } = useParams();

  // const list = [
  //   { name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
  //   { name: "Bob", email: "bob@example.com", phone: "098-765-4321" },
  //   { name: "Charlie", email: "charlie@example.com", phone: "555-555-5555" },
  // ];

  const { data, isLoading, error } = useQuery({
    queryKey: [`events`],
    queryFn: () =>
      eventService.getListCheckIn({
        eventId: id,
      }),
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-purple-400 via-pink-300 to-red-300 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Checked-In Users (10)</h2>
      <ul className="divide-y divide-gray-200">
        {data?.data?.user && data?.data?.user?.length > 0 ? (
          data?.data?.user?.map((user, index) => (
            <motion.li
              key={index}
              className="py-4 px-6 bg-white rounded-lg mb-2 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <p className="text-md font-semibold text-gray-800">
                <strong>Name:</strong> {user.username}
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> {user.phone}
              </p>
            </motion.li>
          ))
        ) : (
          <p className="text-white text-center">No users have checked in yet.</p>
        )}
      </ul>
    </div>
  );
};

export default CheckInList;
