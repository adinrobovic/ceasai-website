import { useEffect } from "react";

console.log("VoiceflowWidget mounted");

export default function VoiceflowWidget() {
  useEffect(() => {
    // Prevent loading twice (important with React StrictMode in dev)
    if (window.__voiceflowWidgetLoaded) return;
    window.__voiceflowWidgetLoaded = true;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

    script.onload = () => {
      window.voiceflow?.chat?.load({
        verify: { projectID: "6830d8b026ff7ff4d3e6cc0c" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
      });
    };

    document.body.appendChild(script);

    // Optional cleanup (usually fine to keep it loaded)
    return () => {
      // If you ever want to remove:
      // document.body.removeChild(script);
    };
  }, []);

  return null;
}