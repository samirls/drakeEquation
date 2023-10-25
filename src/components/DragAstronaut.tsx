import React, { useState } from "react";
import "animate.css";

/* style={{ fontSize: "3rem"}}
className="animate__animated animate__wobble animate__infinite animate__slow" */

function DragAstrounaut() {
  const [widgets, setWidgets] = useState<string[]>([]);

  function handleOnDrag(e: React.DragEvent, widgetType: string) {
    e.dataTransfer.setData("widgetType", widgetType);
  }

  function handleOnDrop(e: React.DragEvent) {
    const widgetType = e.dataTransfer.getData("widgetType") as string;
    console.log("widgetType", widgetType);
    setWidgets([...widgets, widgetType]);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: 100,
          justifyContent: "center",
          paddingTop: "200px",
        }}
      >
        <div
          style={{ fontSize: "3rem", cursor: 'grab' }}
          className="animate__animated animate__wobble animate__infinite animate__slow"
          draggable
          onDragStart={(e) => handleOnDrag(e, "widget A")}
        >
          👨🏻‍🚀
        </div>
        <div 
          style={{ fontSize: "3rem" }}
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
        >
          🚀
        </div>
      </div>
    </div>
  );
}

export default DragAstrounaut;
