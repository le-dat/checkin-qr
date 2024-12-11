import React from "react";
import BackButton from "./BackButton";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-10 justify-center">
      <BackButton />

      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={() => setActiveTab("scanner")}
            className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-l-lg focus:z-10 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
              activeTab === "scanner"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Quét QR
          </button>
          <button
            onClick={() => setActiveTab("list")}
            className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-r-lg focus:z-10 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
              activeTab === "list"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Danh Sách Đã Check-In
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
