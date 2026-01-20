"use client";
import React from 'react'
import "./input.css"

const Input = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className='Input' {...props} />
  )
}

export default Input
