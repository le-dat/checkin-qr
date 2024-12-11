import React from "react";

const CheckInList: React.FC = () => {
  const list = [
    { name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
    { name: "Bob", email: "bob@example.com", phone: "098-765-4321" },
    { name: "Charlie", email: "charlie@example.com", phone: "555-555-5555" },
  ];

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Checked-In Users</h2>
      <ul className="divide-y divide-gray-300">
        {list.length > 0 ? (
          list.map((user, index) => (
            <li key={index} className="py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">No users have checked in yet.</p>
        )}
      </ul>
    </div>
  );
};

export default CheckInList;
