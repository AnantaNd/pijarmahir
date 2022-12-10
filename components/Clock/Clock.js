import { useEffect, useState } from "react";
import styles from './Clock.module.css';

export default function Clock(){
  const [clock, setClock] = useState(new Date());

  const refreshClock=()=>{
    setClock(new Date());
  }
  useEffect(()=>{
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup(){
      clearInterval(timerId)
    }
  }, [])

  return (
    <div className={styles.container}>
      <span className={styles.clock}>{clock.toLocaleTimeString()}</span>
    </div>
  )
}