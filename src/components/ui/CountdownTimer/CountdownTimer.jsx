import { useState, useEffect } from 'react'
import './CountdownTimer.css'

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear()
    const difference = +new Date(year, 1, 14) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return
    }

    timerComponents.push(
      <div key={interval} className="timer-interval">
        <span className="timer-value">{timeLeft[interval]}</span>
        <span className="timer-label">{interval}</span>
      </div>,
    )
  })

  return (
    <div className="countdown-timer">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="timer-finished">Happy Valentine's Day!</span>
      )}
    </div>
  )
}

export default CountdownTimer
