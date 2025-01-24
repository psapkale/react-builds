import { useEffect, useState } from "react";

const Countdown = () => {
   const [time, setTime] = useState(10);

   useEffect(() => {
      if (time === 0) return;

      const timer = setInterval(() => {
         setTime((t) => t - 1);
      }, 1000);

      return () => clearInterval(timer);
   }, [time]);

   return (
      <div>
         10s Countdown
         <h1>{time === 0 ? "Time's up" : time}</h1>
      </div>
   );
};

export default Countdown;
