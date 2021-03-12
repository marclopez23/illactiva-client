import React, { createContext, useState, useEffect, useCallback } from "react";
import {
  getEvent,
  getEvents,
  editEvent,
  deleteEvent,
  createEvent,
} from "../../service/event.service";

export const EventContext = createContext({});

function EventProvider({ children }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = getEvents().then(({ data }) => {
      setEvents([...data]);
    });
  }, []);

  const bringEvent = useCallback(async (id) => {
    try {
      const fetchEvent = await getEvent(id);
      return fetchEvent;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const newEvent = useCallback(async (info) => {
    try {
      console.log(info);
      const postEvent = await createEvent(info);
      const { event: newEvent } = postEvent.data;
      console.log(newEvent._id);
    } catch (e) {
      console.log(e);
      return "Algo ha salido mal, porfavor vuelve a intentarlo";
    }
  }, []);

  return (
    <EventContext.Provider value={{ events, bringEvent, newEvent }}>
      {children}
    </EventContext.Provider>
  );
}

export default EventProvider;