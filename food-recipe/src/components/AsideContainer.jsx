import React from 'react'

export const AsideContainer = ({children}) => {
  return (
    <div className='hidden lg:flex lg:w-[50%]'>{children}</div>
  )
}
