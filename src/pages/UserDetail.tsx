import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    checkedInAt?: string;
}

// Dummy data to simulate user information
const dummyUsers: User[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', checkedInAt: '2024-12-11 10:00 AM' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', checkedInAt: '2024-12-11 10:30 AM' },
];

const UserDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Find the user based on the ID in the URL
    const user = dummyUsers.find((user) => user.id === id);

    if (!user) {
        return (
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">User Not Found</h2>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">User Details</h2>
            <div className="space-y-2">
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Checked-In Time:</strong> {user.checkedInAt || 'N/A'}</p>
            </div>
            <button
                className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => navigate(-1)}
            >
                Go Back
            </button>
        </div>
    );
};

export default UserDetailPage;
