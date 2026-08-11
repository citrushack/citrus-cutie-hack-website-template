interface types {
    color: string;
    background: string;
    type: string;
  }

  export type GoogleEvent = {
    id: string;
    description: string;
    end: {
      dateTime: string;
      timeZone: string;
    };
    start: {
      dateTime: string;
      timeZone: string;
    };
    summary: string;
    location: string;
  };
  
  export type HackathonEvent = {
    id: string;
    name: string;
    location: string;
    description: string;
    category: EventTypes;
    start: Date;
    end: Date;
    hidden: boolean;
    color: string;
    day: string;
  };
  
  
  export type EventTypes =
    | "all"
    | "other"
    | "workshop"
    | "general"
    | "food"
    | "social"
    | "activities";
  
  export const LABELS: Record<EventTypes, types> = {
    all: {
      color: "red",
      background: "bg-red-500",
      type: "leads",
    },
    other: {
      color: "gray",
      background: "bg-gray-500",
      type: "leads",
    },
    workshop: {
      color: "grayblue",
      background: "bg-red-500",
      type: "hackathon",
    },
    general: {
      color: "pink",
      background: "bg-pink-500",
      type: "hackathon",
    },
    food: {
      color: "yellow",
      background: "bg-yellow-500",
      type: "hackathon",
    },
    social: {
      color: "red",
      background: "bg-red-300",
      type: "hackathon",
    },
    activities: {
      color: "yellow",
      background: "bg-green-400",
      type: "hackathon",
    },
  };
  