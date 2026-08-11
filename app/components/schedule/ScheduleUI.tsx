"use client";
import { useMemo, useState } from "react";
import { GoogleEvent, EventTypes, LABELS } from "@/app/types/schedule";
import ToggleTypes from "./ToggleTypes";
import EventCard from "./EventCard";	

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

type Props = {
  eventList: GoogleEvent[];
}
{/*gets the event type from the description*/}
function getEventType(description?: string): EventTypes {
    const type = description?.split("\n")[0]?.replace(/^#/, "").trim().toLowerCase();

    if (type && type in LABELS) {return type as EventTypes;}
    else {return "other";}
}
{/*converts date key into date object*/}
function getDay(dateTime: string) {
    return new Date(dateTime).toLocaleDateString("en-CA", {timeZone: "America/Los_Angeles"});
}
{/*gets nearest day with event, or if none then today*/}
function getNearestDate(dayKeys: string[]) {
    const today = new Date().toLocaleDateString("en-CA", {timeZone: "America/Los_Angeles"});

    return dayKeys.find((d) => d >= today) ?? dayKeys.at(-1) ?? today;
}


const ScheduleUI = ({ eventList }: Props) => {
    {/*active days*/}
    const [selectedDay, setSelectedDay] = useState(() => {
        if (!eventList[0]?.start?.dateTime) return "Monday";
        return new Date() > new Date(eventList[0].start.dateTime)
          ? new Date().toLocaleString("en-US", {
              timeZone: "America/Los_Angeles",
              weekday: "long",
            })
          : "Monday";
      });

      {/*active categories of events*/}
      const [activeTypes, setActiveTypes] = useState<Set<EventTypes>>(
        () => new Set((Object.keys(LABELS) as EventTypes[]).filter((t) => t !== "all")),
      );

      const handleToggle = (type: EventTypes) => {
        setActiveTypes((prev) => {
            const next = new Set(prev);
            if (next.has(type)) next.delete(type);
            else next.add(type);
            return next;
        });
      };

      const visibleEvents = eventList.filter((event) => {
        if (!event.start?.dateTime) return false;

        const weekday = new Date(event.start.dateTime).toLocaleString("en-US", {timeZone: "America/Los_Angeles", weekday: "long",});

        const type = getEventType(event.description);

        return weekday === selectedDay && activeTypes.has(type);
        
      });

      {/*whether an event card is expanded or not*/}
      const [expandedCard, setExpandedCard] = useState<string | null>(null);
    
  return (
    <div className="mx-auto mt-6 flex w-11/12 max-w-3xl flex-col items-center">
      <div className="grid w-full grid-cols-7 rounded border-2 border-black text-base">
        {days.map((day) => (
          <button
            key={day}
            type="button"
            className={`flex justify-center rounded p-2 text-black focus:outline-none ${
              selectedDay === day ? "bg-black text-white" : "bg-transparent"
            }`}
            onClick={() => {
              setSelectedDay(day);
              setExpandedCard(null);
            }}
          >
            {day.slice(0, 3)}
          </button>
        ))}
      </div>

      <div className="mt-4 w-full">
        <ToggleTypes activeTypes={activeTypes} onToggle={handleToggle} />
      </div>

      <div className="mt-4 w-full space-y-2">
        {visibleEvents.length === 0 ? (
          <p className="text-center text-lg font-semibold">No events available</p>
        ) : (
          visibleEvents.map((event) => {
            const category = getEventType(event.description);
            return (
              <EventCard
                key={event.id}
                event={{ ...event, category }}
                color={LABELS[category].background}
                expanded={expandedCard === event.id}
                onToggle={() =>
                  setExpandedCard((id) => (id === event.id ? null : event.id))
                }
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ScheduleUI;
