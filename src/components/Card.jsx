import React from 'react'

const Card = ({imgSrc,name,key,price}) => {
  return (
    <div className='Card'>
      <img src={imgSrc} alt={name}/>
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default Card
