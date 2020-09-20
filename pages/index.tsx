import Layout from "../components/Layout";
import { extractFrontMatter } from "../utility/extractFrontMatter";
import { FunctionComponent } from "react";

export const Home: FunctionComponent<{ frontmatter: any }> = ({
  frontmatter,
}) => {
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
};

export async function getStaticProps() {
  return extractFrontMatter();
}
export default Home;
