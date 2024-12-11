import { motion } from "framer-motion";
import React from "react";

const CheckInList: React.FC = () => {
  const list = [
    { name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
    { name: "Bob", email: "bob@example.com", phone: "098-765-4321" },
    { name: "Charlie", email: "charlie@example.com", phone: "555-555-5555" },
  ];

  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-purple-400 via-pink-300 to-red-300 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Checked-In Users (10)</h2>
      <ul className="divide-y divide-gray-200">
        {list.length > 0 ? (
          list.map((user, index) => (
            <motion.li
              key={index}
              className="py-4 px-6 bg-white rounded-lg mb-2 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <p className="text-md font-semibold text-gray-800">
                <strong>Name:</strong> {user.name}
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
