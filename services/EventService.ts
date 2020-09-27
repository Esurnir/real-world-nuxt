import axios from "axios";
import { Event } from "~/types/event";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export function getEvents() {
  return apiClient.get<Event[]>("/events");
}

export function getEvent(id: string) {
  return apiClient.get<Event>("/events/" + id);
}
