import { useState } from 'react'

export default function Img({ src, alt, className = '', gradient = 'linear-gradient(135deg,#EFE8DD,#a3c49a)' }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {(!loaded || error) && (
        <div className="absolute inset-0 animate-pulse" style={{ background: gradient }} />
      )}
      {!error && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  )
}
