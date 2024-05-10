import React, { useRef } from "react";
function InputScroll() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  let isDragging = false;
  let startPosition = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    isDragging = true;
    startPosition = e.clientX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - containerRef.current.offsetLeft - startPosition;
    containerRef.current.scrollLeft = scrollLeft - delta;
  };

  const handleMouseUp = () => {
    isDragging = false;
    containerRef.current.style.cursor = "grab";
  };

  const handleMouseLeave = () => {
    isDragging = false;
    containerRef.current.style.cursor = "grab";
  };
  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    containerRef,
  };
}

export default InputScroll;
