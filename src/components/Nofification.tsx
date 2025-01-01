import { useNotificationStore } from "../stores/notificationStore";

export default function Notification() {
  const { message, show } = useNotificationStore();

  return (
    <div className={`notification ${show ? "" : "hide"}`} id="notification">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-bell"
          width="24"
          height="24"
        >
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      </div>
      <div id="notification-msg">{message}</div>
    </div>
  );
}
