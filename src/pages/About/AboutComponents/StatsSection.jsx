// import React from 'react';

// const StatsSection = () => {
//   const stats = [
//     {
//       icon: "/images/img_group_starts.svg",
//       count: "150 k",
//       label: "Project Done"
//     },
//     {
//       icon: "/images/img_group_53x55.svg",
//       count: "25 k",
//       label: "Happy Clients"
//     },
//     {
//       icon: "/images/img_group_51x48.svg",
//       count: "120 +",
//       label: "Experts Staff"
//     },
//     {
//       icon: "/images/img_award_2.svg",
//       count: "50 k",
//       label: "Win Awards"
//     }
//   ];

//   return (
//     <section className="py-16 bg-[#0a1e43] text-white relative overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute top-5 left-0">
//         <img src="/images/img_group_1171275968.svg" alt="Background pattern" className="opacity-30" />
//       </div>
      
//       <div className="absolute bottom-0 right-0">
//         <div className="border-2 border-white border-opacity-20 rounded-full w-80 h-80"></div>
//         <div className="absolute top-2 left-2 bg-gray-500 bg-opacity-20 rounded-full w-80 h-80"></div>
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div 
//               key={index} 
//               className="border border-white rounded-md p-4 flex flex-col items-center"
//             >
//               <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-4">
//                 <img src={stat.icon} alt={stat.label} className="w-12 h-12" />
//               </div>
//               <h3 className="text-4xl font-semibold mb-2">{stat.count}</h3>
//               <p className="text-2xl font-semibold">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;




import React, { useState, useEffect } from 'react';

const StatsSection = () => {
  const stats = [
    { icon: "/images/img_group_starts.svg", count: 150000, label: "Projects Done" },
    { icon: "/images/img_group_53x55.svg", count: 25000, label: "Happy Clients" },
    { icon: "/images/img_group_51x48.svg", count: 120, label: "Expert Staff" },
    { icon: "/images/img_award_2.svg", count: 50000, label: "Awards Won" },
  ];

  // State for dynamically updating stats
  const [counts, setCounts] = useState(stats.map(stat => ({ ...stat, current: 0 })));

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      const target = stat.count;
      let counter = 0;

      const timer = setInterval(() => {
        if (counter < target) {
          counter += Math.ceil(target / 100); // Adjust this for speed
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index].current = Math.min(counter, target);
            return newCounts;
          });
        } else {
          clearInterval(timer); // Stop when the target is reached
        }
      }, 20); // Adjust interval speed for smoother animation

      return timer;
    });

    return () => {
      timers.forEach(timer => clearInterval(timer)); // Cleanup on component unmount
    };
  }, []);

  return (
    <section className="py-16 mt-[-50px] bg-[#0a1e43] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-5 left-0">
        <img src="/images/img_group_1171275968.svg" alt="Background pattern" className="opacity-30" />
      </div>
      
      <div className="absolute bottom-0 right-0">
        <div className="border-2 border-white border-opacity-20 rounded-full w-80 h-80"></div>
        <div className="absolute top-2 left-2 bg-gray-500 bg-opacity-20 rounded-full w-80 h-80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counts.map((stat, index) => (
            <div 
              key={index} 
              className="border border-white rounded-md p-6 flex flex-col items-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <img src={stat.icon} alt={stat.label} className="w-12 h-12" />
              </div>
              <h3 className="text-4xl font-semibold mb-2">{stat.current.toLocaleString()}</h3>
              <p className="text-2xl font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
