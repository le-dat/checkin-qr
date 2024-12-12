import { AlarmClockCheck, MapPin } from "lucide-react";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const TicketCard: React.FC = () => {
  const { id } = useParams();
  const query = useSearchParams();
  // const [data, setData] = useState<Event | null>(null);

  console.log(id, query);

  // fetch api get data detail
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.example.com/events/${id}`
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setEvent(data);
  //     } catch (error) {
  //       console.error("Error fetching event data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  const downloadImage = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `QR_Code.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6">
          <div className="text-sm font-medium uppercase text-gray-500 text-center mb-2">
            Vé của tôi
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Hội nghị Đổi mới Thanh niên SG-VN
          </h2>
          <div className="text-gray-600 mb-2 flex items-center gap-2">
            <AlarmClockCheck className="size-5" />
            13 Tháng 12, 2024, 5:00 PM GMT+7
          </div>
          <div className="text-gray-600 mb-2 flex items-center gap-2">
            <MapPin />
            16 Nguyễn Đăng Giai, Thảo Điền, Quận 2, Hồ Chí Minh 70000, Việt Nam
          </div>

          <div className="flex justify-center my-6">
            <img
              src="https://via.placeholder.com/200x200.png?text=QR+Code"
              alt="Mã QR"
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
            <div>
              <span className="font-medium">Khách mời:</span> Lê Đạt
            </div>
            <div>
              <span className="font-medium">Trạng thái:</span>{" "}
              <span className="text-green-500">Sẽ tham gia</span>
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-6">
            <span className="font-medium">Vé:</span> 1× Thường
          </div>
          <div className="flex justify-between">
            {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Chỉ đường
            </button> */}
            <button
              className="px-4 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              onClick={() => downloadImage("https://via.placeholder.com/200x200.png?text=QR+Code")}
            >
              Lưu vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
