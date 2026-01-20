"use client";
import React from 'react'
import "./input.css"

const TextArea = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea 
      className='Input' 
      {...props}
      maxLength={2000}
      rows={6}
    />
  )
}

export default TextArea