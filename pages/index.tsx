import { Header } from '@/components/Header'
import { content } from '@/lib/content'

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <article>{content}</article>
      </main>
    </>
  )
}
