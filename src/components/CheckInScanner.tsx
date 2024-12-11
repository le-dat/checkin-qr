/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

const App = () => {
  const [scanResult, setScanResult] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScan = async (result: { getText: () => string }) => {
    if (result) {
      setScanResult(result.getText());
      setLoading(true);

      try {
        const response = await axios.post("http://localhost:3001/api/checkin", {
          userId: result.getText(),
          eventId: "event-123", // Example event ID
        });
        setMessage(response.data.message);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setMessage(error.response?.data?.error || "Error during check-in");
        } else {
          setMessage("Error during check-in");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleError = (error: unknown) => {
    console.error("QR Scanner Error:", error);
    setMessage("Error scanning QR Code.");
  };

  return (
    <div className="h-full max-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Event Check-In</h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Scan QR Code</h2>
        <div className="bg-gray-200 rounded-lg overflow-hidden mb-4">
          <QrReader
            onResult={(result, error) => {
              if (result) handleScan(result as { getText: () => string });
              if (error) handleError(error);
            }}
            constraints={{ facingMode: "environment" }}
          />
        </div>

        {loading ? (
          <p className="text-yellow-500 text-center">Processing...</p>
        ) : (
          <p
            className={`text-center mt-4 ${
              message.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>

      <p className="mt-6 text-gray-600">Scan the QR code to check in for the event.</p>
    </div>
  );
};

export default App;
