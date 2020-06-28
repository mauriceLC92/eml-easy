import React, { FC } from 'react'

interface IHeading {
  children?: React.ReactNode,
  title: string;
  emoji: string;
}

export const Heading: FC<IHeading> = ({ children, title, emoji }) => {
  return (
    <>
      <header>
        <h1 className='text-6xl text-center text-gray-700 tracking-widest font-bold'>
          {title}{' '}
          <span className='text-6xl' role="img" aria-label="email">{emoji}</span>
        </h1>
      </header>
    </>
  )
}
