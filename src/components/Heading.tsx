import React, { FC } from 'react'
import img1 from '../assets/Easy-eml.png'
interface IHeading {
  children?: React.ReactNode,
  title: string;
  emoji: string;
}

export const Heading: FC<IHeading> = ({ children, title, emoji }) => {
  return (
    <>
      <header>
        {/* <img src={img1} alt="heading" /> */}
        <h1 className='text-6xl text-center text-blue-700 tracking-widest font-bold'>
          {title}{' '}
          <span className='text-6xl' role="img" aria-label="email">{emoji}</span>
        </h1>
      </header>
    </>
  )
}
