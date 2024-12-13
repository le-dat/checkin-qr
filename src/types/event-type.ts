import { ICommonMongodb } from "./common";
import { IUser } from "./user-type";

export interface IEvent extends ICommonMongodb {
  eventName: string;
  location: string;
  description: string;
  eventDate: string;
  startTime: string;
  host: IUser;
  registeredParticipants: IUser[];
  statusEvent: "upcoming" | "passed" | "canceled";
  statusRequest: "pending" | "approved" | "rejected";
}
