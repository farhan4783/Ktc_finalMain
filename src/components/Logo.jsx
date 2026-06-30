import React from 'react'

function Logo({ size = 36, className = '' }) {
  return (
    <img 
      src="/logo.png" 
      alt="KodeToCareer Logo" 
      style={{ width: size, height: size }}
      className={`rounded-lg object-contain ${className}`}
    />
  )
}

export default Logo
