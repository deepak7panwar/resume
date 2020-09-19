import Layout from "../components/Layout";
import { extractFrontMatter } from "../utility/extractFrontMatter";

export default function Home({
  frontmatter
}) {
  return (
    <Layout data={frontmatter}>
      <article>
        <header>
          <h3 className="mb-1 text-3xl font-semibold text-orange-600">
            {"title"}
          </h3>
        </header>
        <section>
          <p className="mb-8">{"description"}</p>
        </section>
      </article>
    </Layout>
  );
}

export async function getStaticProps() {
  return extractFrontMatter();
}
