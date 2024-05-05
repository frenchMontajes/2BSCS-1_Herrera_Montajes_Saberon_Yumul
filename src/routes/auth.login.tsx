import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/auth/login')({
  component: Component
})

// html 
function Component() {
  const [count, setCount] = useState(1);

  

  return (
    <div>
      {count}

      <button onClick={() => console.log("hi")}>print</button>
    <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  )
}