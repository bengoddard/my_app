import Image from 'next/image'
import styles from './page.module.css'
import HabitInputBox from '@/components/HabitInputBox'

export default function Home() {
  return (
    <main className={styles.main}>
      <HabitInputBox />
    </main>
  )
}
