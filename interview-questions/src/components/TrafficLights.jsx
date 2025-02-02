import { useEffect, useState } from "react";

const TrafficLights = () => {
   const config = {
      red: {
         id: 1,
         duration: 5000,
         next: "yellow",
      },
      yellow: {
         id: 2,
         duration: 2000,
         next: "green",
      },
      green: {
         id: 3,
         duration: 3000,
         next: "red",
      },
   };

   const [activeLight, setActiveLight] = useState("red");
   const [duration, setDuration] = useState(config[activeLight].duration);

   useEffect(() => {
      let timerId;

      if (duration <= 0) {
         clearInterval(timerId);
         setActiveLight(config[activeLight].next);
         setDuration(config[config[activeLight].next].duration);
      } else {
         timerId = setInterval(() => {
            setDuration((p) => p - 1000);
         }, 1000);
      }

      return () => {
         clearInterval(timerId);
      };
   }, [activeLight, duration]);

   return (
      <div>
         <div>
            {Object.keys(config).map((light) => (
               <div
                  key={light}
                  className="w-10 h-10 border rounded-full"
                  style={{
                     backgroundColor: activeLight === light ? light : "",
                  }}
               />
            ))}
         </div>
         <span>{duration / 1000}</span>
      </div>
   );
};

export default TrafficLights;
