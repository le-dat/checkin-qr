import { useQuery } from "@tanstack/react-query";
import { AlarmClockCheck, MapPin } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import React, { useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import eventService from "../services/event-service";
import Loading from "./Loading";
import Error from "./Error";
import { formatDate } from "../lib/utils";

const TicketCard: React.FC = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");
  const qrRef = useRef<SVGSVGElement>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: [`events`],
    queryFn: () =>
      eventService.getCheckInData({
        eventId: id as string,
        userId: userId as string,
      }),
    refetchOnWindowFocus: false,
  });

  const downloadImage = () => {
    if (qrRef.current) {
      const svg = qrRef.current;
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = `data:image/svg+xml;base64,${btoa(svgString)}`;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = pngFile;
        link.download = "QR_Code.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  const eventData = data?.data?.event;
  const userData = data?.data?.user;

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6">
          <div className="text-sm font-medium uppercase text-gray-500 text-center mb-2">
            Vé của tôi
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            {eventData?.eventName}
          </h2>
          <div className="text-gray-600 mb-2 flex items-center gap-2">
            <AlarmClockCheck className="size-5" />
            {formatDate(eventData?.eventDate as string)} {eventData?.startTime}
          </div>
          <div className="text-gray-600 mb-2 flex items-center gap-2">
            <MapPin />
            {eventData?.location}
          </div>

          <div className="flex justify-center my-6">
            <QRCodeSVG value={userData?._id as string} size={200} ref={qrRef} />
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
            <div>
              <span className="font-medium">Khách mời:</span> {userData?.username}
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
            <button
              className="px-4 py-2 w-full bg-green-500 text-white rounded-lg hover:bg-green-600"
              onClick={downloadImage}
            >
              Tải ảnh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;