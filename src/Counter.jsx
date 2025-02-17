import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store/counterSlice'

const Counter = () => {
  const state = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState('')
  const [isNumber, setIsNumber] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value

    if (!isNaN(value)) {
      setIsNumber(!isNaN(value))
      setAmount(value)
    } else {
      setIsNumber(false)
    }
  }

  const handleIncrement = (value) => {
    dispatch(increment(Number(value)))
    setAmount('')
  }
  const handleDecrement = (value) => {
    dispatch(decrement(Number(value)))
    setAmount('')
  }

  return (
    <div>
      <h3>Count: {state.conter.count}</h3>
      <input type="text" value={amount} onChange={handleChange} />
      {isNumber ? null : (
        <p style={{ color: 'red' }}>Please Enter the Number only</p>
      )}
      <button onClick={() => handleIncrement(amount)}>+</button>
      <button onClick={() => handleDecrement(amount)}>-</button>
    </div>
  )
}

export default Counter
