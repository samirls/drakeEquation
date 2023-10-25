import React, { useState } from "react";
import './DragAstronaut2.css'

function DragAstrounaut2() {
  const [widgets, setWidgets] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  function handleOnDragStart(e: React.DragEvent, widgetType: string) {
    e.dataTransfer.setData("widgetType", widgetType);
    setIsDragging(true);
  }

  function handleOnDrop(e: React.DragEvent) {
    const widgetType = e.dataTransfer.getData("widgetType") as string;
    console.log("widgetType", widgetType);
    setWidgets([...widgets, widgetType]);
    setIsDragging(false);
    alert("Astronauta no foguete!");
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
          className={`draggable ${isDragging ? "invisible" : ""}`}
          draggable
          onDragStart={(e) => handleOnDragStart(e, "widget A")}
        >
          👨🏻‍🚀
        </div>
        <div
          className="droppable"
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
        >
          🚀
        </div>
      </div>
    </div>
  );
}

export default DragAstrounaut2;
