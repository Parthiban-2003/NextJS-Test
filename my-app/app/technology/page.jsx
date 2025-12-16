import { SiHtml5, SiCss3, SiJavascript, SiReact, SiVite, SiJest } from "react-icons/si";
import styles from './Technology.module.css';
import Link from 'next/link';

export default function Technology() {
    return (
        <div className={styles.hero_Technology}>
            <h1>Frontend Technology</h1>
            <div className={styles.hero_Section}>

                <div className={styles.techIcon}>
                    <SiHtml5 />
                    <span>HTML: HyperText Markup Language - the backbone of the web used to structure content.</span>
                    <ul>
                        <li>Semantic HTML5 elements for meaningful structure</li>
                        <li>Forms and inputs for user interaction</li>
                        <li>Embedding video and audio content</li>
                        <li>Ordered and unordered lists</li>
                    </ul>
                    <Link href="/html" className={styles.techButton}>More</Link>
                </div>

                <div className={styles.techIcon}>
                    <SiCss3 />
                    <span>CSS: Cascading Style Sheets for styling web pages, controlling layout, colors, fonts, and responsive design.</span>
                    <ul>
                        <li>Flexbox and Grid layouts</li>
                        <li>Animations and transitions</li>
                        <li>CSS Variables and custom properties</li>
                        <li>Media queries for responsive design</li>
                    </ul>
                    <Link href="/css" className={styles.techButton}>More</Link>
                </div>

                <div className={styles.techIcon}>
                    <SiJavascript />
                    <span>JavaScript: Programming language for adding interactivity, dynamic content, and logic to websites.</span>
                    <ul>
                        <li>ES6+ features (let/const, arrow functions, modules)</li>
                        <li>DOM manipulation</li>
                        <li>Event handling</li>
                        <li>Fetch API and async/await</li>
                    </ul>
                    <Link href="/javascript" className={styles.techButton}>More</Link>
                </div>

                <div className={styles.techIcon}>
                    <SiReact />
                    <span>Frameworks & Libraries: Tools to build modern, component-based, and interactive user interfaces.</span>
                    <ul>
                        <li>ReactJS</li>
                        <li>Angular</li>
                        <li>NextJS</li>
                        <li>VueJS</li>
                    </ul>
                    <Link href="/frameworks" className={styles.techButton}>More</Link>
                </div>

                <div className={styles.techIcon}>
                    <SiVite />
                    <span>Tools: Development utilities and build tools to streamline workflow and productivity.</span>
                    <ul>
                        <li>Git & GitHub for version control</li>
                        <li>NPM Packages</li>
                        <li>Vite, Webpack, Parcel</li>
                        <li>Browser Developer Tools</li>
                    </ul>
                    <Link href="/tools" className={styles.techButton}>More</Link>
                </div>

                <div className={styles.techIcon}>
                    <SiJest />
                    <span>Testing: Tools and frameworks to test and ensure application quality and reliability.</span>
                    <ul>
                        <li>Jest</li>
                        <li>Vitest</li>
                        <li>React Testing Library</li>
                        <li>Unit & Integration Testing</li>
                    </ul>
                    <Link href="/testing" className={styles.techButton}>More</Link>
                </div>

            </div>
        </div>
    );
}
