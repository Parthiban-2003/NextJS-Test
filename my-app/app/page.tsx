import BlogPost from '@/app/blog/[slug]/blogPost'
import Layout from './layout';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Hi Hello Welcome</h1>
        <BlogPost />
      </div>
    </Layout>
  );
}
