import { content } from '@/lib/content'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function FirstAttempt() {
  const nodeRef = useRef<HTMLElement>(null!)
  useEffect(() => {
    let previousY: number | undefined = undefined
    let translationY = 0
    window.addEventListener('scroll', () => {
      const currentY = window.scrollY
      if (previousY === undefined) {
        previousY = currentY
        return
      }
      const diff = currentY - previousY
      previousY = currentY

      const { height } = nodeRef.current.getBoundingClientRect()

      translationY = Math.min(Math.max(translationY - diff, -height), 0)

      nodeRef.current.style.transform = `translateY(${translationY}px)`
    })
  }, [])
  return (
    <>
      <header className="header" ref={nodeRef}>
        Header content!
      </header>
      <main>
        <nav>
          <Link href="/">Home</Link>
        </nav>
        <div className="content">{content}</div>
      </main>
    </>
  )
}
