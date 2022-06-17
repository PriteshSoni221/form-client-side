import React from 'react'

export const Audio = (props) => {
  return (
    <div>
      <audio controls ><source src={props.track}/></audio>
    </div>
  )
}
