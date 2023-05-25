import React, { useState, useRef, useEffect } from 'react';
import '../tailwind.css';

const OutputComponent = ({ inputValue }) => {
  const [setContainerHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const { height } = containerRef.current.parentElement.getBoundingClientRect();
      setContainerHeight(height);
    }
  }, [containerRef.current]);

  return (
    <div className="flex flex-col bg-gray-800 w-full md:w-1/2  mx-5 overflow-auto">
      <form className="h-full"> 
        <textarea
          className="w-full h-full border-4 border-green-400 text-3xl outline-none min-h-[500px]"
          value={inputValue}
        ></textarea>
      </form>
    </div>
  );
};

export default OutputComponent;

