import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { formatDate } from "../lib/utils";
import { IEvent } from "../types/event-type";
import { Card } from "./ui/card";

interface EventCardProps {
  event: IEvent;
  index: number;
  className?: string;
  onClick?: () => void;
}
export default function EventCard({ event, index, onClick }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="p-6 group hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{event.eventName}</h3>
            <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{formatDate(event.eventDate)}</span>
            <Clock className="h-4 w-4 text-muted-foreground ml-2" />
            <span className="text-sm">{event.startTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{event?.registeredParticipants?.length} người tham gia</span>
          </div>
          {event?.statusRequest === "pending" && event.host && (
            <p className="text-sm text-muted-foreground">Người tổ chức: {event?.host?.username}</p>
          )}
        </div>

        <button
          className="mt-4 w-full bg-blue-400 text-white py-2 rounded-md transition-all duration-300 hover:bg-blue-600"
          onClick={onClick}
        >
          Xem chi tiết
        </button>
      </Card>
    </motion.div>
  );
}
