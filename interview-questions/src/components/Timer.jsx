import { useEffect, useState } from "react";

const Timer = () => {
   const [time, setTime] = useState(10);
   let timerId;

   const reset = () => {
      if (timerId) {
         clearInterval(timerId);
      }
      setTime(10);
   };

   const startTimer = () => {
      timerId = setInterval(() => {
         setTime((p) => p - 0.2);
      }, 200);
   };

   const pauseTimer = () => {
      if (timerId) {
         clearInterval(timerId);
      }
   };

   useEffect(() => {
      if (time <= 0) {
         clearInterval(timerId);
         setTime(0);
      } else {
         timerId = setInterval(() => {
            setTime((p) => p - 0.2);
         }, 200);
      }

      return () => {
         clearInterval(timerId);
      };
   }, [time]);

   return (
      <div>
         {time.toFixed(2)} seconds
         <button onClick={pauseTimer}>Pause</button>
         <button onClick={startTimer}>Start</button>
         <button onClick={reset}>Reset</button>
      </div>
   );
};

export default Timer;
