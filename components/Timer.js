import { useState, useRef, useEffect } from "react";
import { TimerWrapper, TimerDigit, Dot } from "./Timer.styles";
import { useSelector } from "react-redux";

const Timer = () => {
  const [timerDays, setTimerDays] = useState('');
  const [timerHours, setTimerHours] = useState('');
  const [timerMinutes, setTimerMinutes] = useState('');
  const [timerSeconds, setTimerSeconds] = useState('');
  const state = useSelector(state => state.timer.value)
   let interval = useRef();
  const startTimer = () => {
        const countDownDate = new Date(`${state}`);
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor((distance / (1000 * 60 * 60 * 24)));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
      const seconds = Math.floor((distance % (1000 * 60) / 1000))
      if (distance < 0) {
        //stop timer
        clearInterval(interval);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000)
  }

  useEffect(() => {
    startTimer(state);
    return () => {
      clearInterval(interval);
    }
    //eslint-disable-next-line
  }, [state])


  return (
    <TimerWrapper>
      <TimerDigit>{timerDays}</TimerDigit>
      <Dot>:</Dot>
      <TimerDigit>{timerHours}</TimerDigit>
      <Dot>:</Dot>
      <TimerDigit>{timerMinutes}</TimerDigit>
      <Dot>:</Dot>
      <TimerDigit>{timerSeconds}</TimerDigit>
    </TimerWrapper>
  )
}

export default Timer;