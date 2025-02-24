import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (3600 * 24 * 1000)),
      hours: Math.floor((difference % (3600 * 24 * 1000)) / (3600 * 1000)),
      minutes: Math.floor((difference % (3600 * 1000)) / (60 * 1000)),
      seconds: Math.floor((difference % (60 * 1000)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (
      timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0
    ) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="countdown">
      <div className="title">
        <h3 className="roboto">Hari Menuju Peluncuran!</h3>
      </div>
      <div className="content">
        <div className="count-flex">
          <div className="time day">
            <b className="inria-serif">{timeLeft.days}</b>
            <p className="alike">Hari</p>
          </div>
          <div className="time hour">
            <b className="inria-serif">{timeLeft.hours}</b>
            <p className="alike">Jam</p>
          </div>
          <div className="time minute">
            <b className="inria-serif">{timeLeft.minutes}</b>
            <p className="alike">Menit</p>
          </div>
          <div className="time second">
            <b className="inria-serif">{timeLeft.seconds}</b>
            <p className="alike">Detik</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;