import React from 'react'

const Bubbles = ({wrongLetters, count}) => {
    const errors = wrongLetters.length;
  return (
    <div className='Bubbles'>
        {errors < count && <img className='Bubbles_idle' src="sprites/Bubble_idle.png" alt='life' />}
        {errors >= count && <img className='Bubbles_pop' src='sprites/Bubble.png' alt='lost'/>}
    </div>
  )
}

export default Bubbles