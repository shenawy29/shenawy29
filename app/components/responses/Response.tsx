import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Response({children}: Props) {
  return (
    <div className="flex flex-col px-2 text-xl whitespace-nowrap">{children}</div>
  )
}