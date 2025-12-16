import styles from "../about/About.module.css";

export default function AboutPage() {
  return (
    <div className={styles.hero_about}>
      <h1>About this Blog</h1>
      <div className={styles.about_Content}>
        <ul>
          <li>Welcome to WEB TECHKY, a frontend technology blog dedicated to helping developers build modern, fast, and user-friendly web applications.</li>
          <li>This blog focuses on HTML, CSS, JavaScript, and modern frontend frameworks. You’ll find practical tutorials, real-world examples, performance tips, and UI best practices that you can apply directly to your projects.</li>
          <li>Whether you are a beginner learning the basics or an experienced developer sharpening your skills, this blog aims to make frontend development simpler, clearer, and more enjoyable.</li>
        </ul>
      </div>

      <div className={styles.about_Mission}>
        <h1>🎯 Our Mission</h1>
        <p>Our mission is to share clear, practical, and up-to-date frontend knowledge that helps developers:</p>
        <ul>
          <li>Write clean and maintainable code</li>
          <li>Build accessible and responsive interfaces</li>
          <li>Stay updated with modern frontend tools and trends</li>
        </ul>
      </div>

      <div className={styles.about_learn}>
        <h1>📚 What You’ll Learn Here</h1>
        <ul>
          <li>HTML & web accessibility best practices</li>
          <li>Modern CSS (Flexbox, Grid, animations, responsive design)</li>
          <li>JavaScript fundamentals and advanced concepts</li>
          <li>Frontend frameworks like React</li>
          <li>Performance optimization techniques</li>
        </ul>
      </div>

      <div className={styles.abougt_Blog}>
        <h1>👨‍🎓 Who This Blog Is For</h1>
        <ul>
          <li>Frontend beginners</li>
          <li>Students learning web development</li>
          <li>Self-taught developers</li>
          <li>Professional frontend engineers</li>
        </ul>
      </div>

      <div className={styles.about_para}>
        <p>
          Hi, I’m Web Techky, a frontend developer passionate about creating clean UI and great user experiences. I enjoy learning new web technologies and sharing what I learn through simple, easy-to-understand articles.
          This blog is a place where I document my learning journey and help others grow in frontend development.
        </p>
      </div>
    </div>
  );
}
