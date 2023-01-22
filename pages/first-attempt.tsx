import { FirstAttemptHeader } from '@/components/FirstAttemptHeader'
import { content } from '@/lib/content'
import Link from 'next/link'

export default function FirstAttemptPage() {
  return (
    <>
      <FirstAttemptHeader />
      <main>
        <nav>
          <Link href="/">Home</Link>
        </nav>
        <article>{content}</article>
      </main>
    </>
  )
}
