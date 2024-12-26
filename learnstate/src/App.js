import React, { useState } from 'react'
export default function App() {
  const [name, setName] = useState('Neha')

  const handleclick = () => {
    setName('Akash');
  }
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick = {handleclick}>Click</button>
    </div>
  )
}