import styles from "./page.module.css";
import { TaskList } from "./_components/TaskList";
import { Tasks } from "./_components/TaskList";

const myTasks: Tasks[] = [
  {title: "Title 1" , description: "Sample description here", completionStatus: 'incomplete'},
  {title: "Title 2" , description: "Sample description here", completionStatus: 'incomplete'},
  {title: "Title 3" , description: "Sample description here", completionStatus: 'incomplete'},
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
