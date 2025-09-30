"use client";

import { useEffect } from "react";

export default function VisualEditsMessenger() {
  useEffect(() => {
    const inIframe = window.parent !== window;
    if (!inIframe) return;

    const send = (payload: unknown) => window.parent.postMessage(payload, "*");

    // Send initial load message
    send({
      type: "VISUAL_EDITS_READY",
      timestamp: Date.now(),
    });

    // Listen for route changes
    const handleRouteChange = () => {
      send({
        type: "ROUTE_CHANGE",
        url: window.location.href,
        pathname: window.location.pathname,
        search: window.location.search,
        timestamp: Date.now(),
      });
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener("popstate", handleRouteChange);

    // Override pushState and replaceState to catch programmatic navigation
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      handleRouteChange();
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      handleRouteChange();
    };

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  return null;
}