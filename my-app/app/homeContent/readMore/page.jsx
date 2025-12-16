import Link from "next/link";
import styles from "../../homeContent/HomeContent.module.css";

export default function ReadMore() {
  return (
    <div className={styles.readMoreContainer}>
      <div className={styles.readMoreContent}>
        <h1><b>Frontend Development</b> In-Depth</h1>
        <p>
          Welcome to our detailed tutorials on Frontend Development! Here we dive deep into HTML, CSS, JavaScript, and modern frameworks like React, Next.js, and Vue.js.
        </p>
        <p>
          Learn best practices, optimize your workflow, and build responsive, interactive web applications. Each tutorial is designed for both beginners and intermediate developers.
        </p>
        <p>Topics include:</p>
        <ul>
          <li>HTML semantics and accessibility</li>
          <li>CSS Flexbox, Grid, and animations</li>
          <li>JavaScript ES6+ features and patterns</li>
          <li>React & Next.js component-based architecture</li>
          <li>Performance optimization and SEO strategies</li>
        </ul>
        <p>
          Keep exploring, practice the examples, and enhance your frontend skills step by step.
        </p>
        <Link className={styles.backButton} href="/homeContent">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
