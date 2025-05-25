import React, { useState, useEffect } from 'react';
import '../../styles/spark.css';

const SparkClick = () => {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    // Function to create a spark animation at a specific position
    const createSpark = (x, y) => {
      const newSparks = [];
      const colors = ['#22a8ff', '#ffcc00', '#ffffff']; // Blue, yellow, white
      
      // Create 6-10 spark stars per click
      const sparkCount = Math.floor(Math.random() * 5) + 6;
      
      for (let i = 0; i < sparkCount; i++) {
        // Generate random angle, size and color for each spark
        const angle = Math.random() * 360;
        const size = 4 + Math.random() * 8;
        const distance = 30 + Math.random() * 50;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        newSparks.push({
          id: `spark-${Date.now()}-${i}`,
          x,
          y,
          angle,
          size,
          distance,
          color
        });
      }
      
      setSparks(prev => [...prev, ...newSparks]);
      
      // Remove sparks after animation completes
      setTimeout(() => {
        setSparks(prev => prev.filter(spark => !newSparks.includes(spark)));
      }, 600);
    };

    // Event listener for clicks
    const handleClick = (e) => {
      createSpark(e.clientX, e.clientY);
    };
    
    // Add event listener
    document.addEventListener('click', handleClick);
    
    // Clean up
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            transform: `translate(-50%, -50%) rotate(${spark.angle}deg)`,
          }}
        >
          <div
            className="spark"
            style={{
              width: `${spark.size}px`,
              height: `${spark.size}px`,
              backgroundColor: spark.color,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
            }}
          />
        </div>
      ))}
    </>
  );
};

export default SparkClick;