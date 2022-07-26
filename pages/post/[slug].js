import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import hljs from "highlight.js";
import highlightjs from 'markdown-it-highlightjs'
export default function PostPage({ frontmatter, content }) {
  const mdd = md().use(highlightjs); 
  return (
    <div className="prose prose-invert mx-auto mt-5">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: mdd.render(content) }} />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
