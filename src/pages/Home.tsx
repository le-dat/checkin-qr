import React, { useState } from "react";
import TabNavigation from "../components/TabNavigation";
import CheckInList from "../components/CheckInList";
import CheckInScanner from "../components/CheckInScanner";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("scanner");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "scanner" && <CheckInScanner />}
      {activeTab === "list" && <CheckInList />}
    </div>
  );
};

export default Home;
