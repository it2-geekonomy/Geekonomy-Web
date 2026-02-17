"use client";

import { useEffect } from "react";

export default function DisableRightClick() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable common keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12 (Developer Tools)
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+P (Print)
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+A (Select All) - optional, comment out if you want to allow text selection
      // if (e.ctrlKey && e.key === "a") {
      //   e.preventDefault();
      //   return false;
      // }

      // Disable Ctrl+C (Copy) - optional, comment out if you want to allow copying
      // if (e.ctrlKey && e.key === "c") {
      //   e.preventDefault();
      //   return false;
      // }
    };

    // Disable text selection (optional - uncomment if needed)
    const handleSelectStart = (e: Event) => {
      // Uncomment the line below to disable text selection
      // e.preventDefault();
      return false;
    };

    // Disable image dragging
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement)?.tagName === "IMG") {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("dragstart", handleDragStart);

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return null;
}
