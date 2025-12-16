import Image from "next/image"
import Img from '../../public/Img/FrontendImg.jpg'
import styles from '../homeContent/HomeContent.module.css'
import Link from "next/link"

export default function HomeContent() {
  return (
    <div className={styles.hero_HomeContent}>
      <div className={styles.hero_leftImg}>
        <Image
          src={Img}
          width={700}
          alt="Frontend development illustration showing modern web technologies"
          priority
        />
      </div>

      <div className={styles.hero_right}>
        <h1><b>FRONTEND</b> Development Blogs</h1>
        <p>
          Tutorials, tips, and best practices for HTML, CSS, JavaScript, and modern frameworks.
        </p>
        <Link className={styles.ReadMore} href="homeContent/readMore">Read More</Link>
        <Link className={styles.Subscribe} href="/">Subscribe to NewsLetter</Link>
      </div>
    </div>
  )
}
