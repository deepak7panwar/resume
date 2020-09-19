import fs from "fs";
import matter from "gray-matter";
export const extractFrontMatter = () => {
  const files = fs.readdirSync(`${process.cwd()}/content/`);
  let frontmatter = {};
  files.forEach((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/${filename}`)
      .toString();
    const { data } = matter(markdownWithMetadata);
    frontmatter = {
      ...frontmatter,
      ...data,
    };
  });
  console.log("helayyasf", frontmatter);

  return {
    props: {
      frontmatter,
    },
  };
};
