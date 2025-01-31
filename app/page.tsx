import styles from "./page.module.css";
import { TaskList } from "./_components/TaskList";
import { Tasks } from "./_components/TaskList";

const myTasks: Tasks[] = [
  {title: "Kitten" , description: "I really need a small ginger cat", completionStatus: 'incomplete'},
  {title: "Lottery" , description: "Try to win the lottery this week", completionStatus: 'incomplete'},
  {title: "Invention" , description: "Invent something new and amazing", completionStatus: 'incomplete'},
]

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TaskList initialTasks={myTasks}/>
      </main>
    </div>
  );
}
