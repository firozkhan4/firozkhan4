import { useEffect } from "react";

export default function useGlobalEvent(
  eventType: string,
  handler: (event: Event) => void
) {
  useEffect(() => {
    const eventListener = (e: Event) => handler(e);

    window.addEventListener(eventType, eventListener);

    return () => {
      window.removeEventListener(eventType, eventListener);
    };
  }, [eventType, handler]);
}
