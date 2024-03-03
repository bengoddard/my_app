"use client";
import { useState } from 'react'
import styles from 'src/app/page.module.css'

function HabitInputBox() {
  const pageTitle = "Habit Tracker"
  const [habit, setHabit] = useState('')
  const [listHabits, setListHabits] = useState<string[]>([])

  function handleInsert(){
    let temp_listHabits = [...listHabits] // Make a copy of the list
    temp_listHabits.push(habit) // Add the new habit to the list

    setListHabits(temp_listHabits) // Update the list with the new habit
  }

  return (
    <div>
      <h3 className={styles.TrackerBoxTitle}>{pageTitle}</h3>
        
      <input className={styles.TrackerBoxInput} type="text" value={habit} onChange={e => setHabit(e.target.value)} />
      <button className={styles.TrackerBoxButton} onClick={handleInsert}>Insert</button>

      <ul className={styles.TrackBoxList}>
        {listHabits.map( (habit, index) => (
          <li className={styles.TrackBoxListItem} key={index}>{habit}</li>
        ))}
      </ul>
    </div>
  )
}

export default HabitInputBox
