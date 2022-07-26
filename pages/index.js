import Head from "next/head";
import styles from "../styles/Home.module.css";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 w-1/2 m-auto ls:grid-cols-4 p-4 md:p-0">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="m-2 p-4 rounded-xl overflow-hidden flex flex-col"
        >
          <Link href={`/post/${slug}`}>
            <a>
              <h2 className="text-yellow text-sm leading-8">
                {frontmatter.date} {frontmatter.tags}
              </h2>
              <h1 className="text-2xl text-white font-bold leading-8">{frontmatter.title}</h1>
            </a>
          </Link>
          <p className="text-white leading-8">{frontmatter.metaDesc}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");
  console.log(files);
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}
