/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useParams } from "react-router-dom";
import { IUser } from "../types/user-type";

const CheckInScanner = () => {
  const { id = "" } = useParams();
  const [_scanResult, setScanResult] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async (result: { getText: () => string }) => {
    if (result) {
      setScanResult(result?.getText());
      setLoading(true);

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_PUBLIC_API_ENDPOINT}/events/${id}/check-in`,
          {
            userId: result?.getText(),
          }
        );
        setUser(response?.data?.data?.user);
        setMessage(response?.data?.message);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setMessage(error?.response?.data?.error || "Lỗi khi check-in");
        } else {
          setMessage("Lỗi khi check-in");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleError = (error: unknown) => {
    console.error("Lỗi máy quét QR:", error);
    // setMessage("Lỗi khi quét mã QR.");
  };

  return (
    <div className="h-full max-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-sm lg:text-3xl font-bold text-gray-800 mb-6">Check-In Sự Kiện</h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-sm lg:text-xl font-semibold text-gray-700 mb-4">Quét Mã QR</h2>
        <div className="bg-gray-200 rounded-lg overflow-hidden mb-4">
          {loading ? (
            <p className="text-yellow-500 text-center">Đang xử lý...</p>
          ) : (
            <QrReader
              onResult={(result, error) => {
                if (result) handleScan(result as { getText: () => string });
                if (error) handleError(error);
              }}
              constraints={{ facingMode: "environment" }}
            />
          )}
        </div>

        <p
          className={`text-center mt-4 ${
            message.includes("success") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      </div>

      {/* info user */}
      {user ? (
        <div className="flex flex-col gap-4">
          <p className="text-gray-600 flex ">Họ và tên: {user?.username}</p>
          <p className="text-gray-600 flex ">Khóa: {user?.level}</p>
          <p className="text-gray-600 flex ">Email: {user?.email}</p>
          <p className="text-gray-600 flex ">số điện thoại: {user?.phone}</p>
        </div>
      ) : (
        <p className="mt-6 text-gray-600">Quét mã QR để check-in cho sự kiện.</p>
      )}
    </div>
  );
};

export default CheckInScanner;
