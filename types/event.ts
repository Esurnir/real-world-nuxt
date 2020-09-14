export interface User {
  id: number;
  name: string;
}

export interface Attendee {}

export interface Event {
  id: number;
  user: User;
  category?: string;
  organizer?: string;
  title: string;
  description?: string;
  location?: string;
  date: Date;
  time?: string;
  attendees: Attendee[];
}
