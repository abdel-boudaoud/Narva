import { useLoaderData } from "@remix-run/react";
import ArticleTeaser from "./ArticleTeaser";
import { storyblokEditable } from "@storyblok/react";
 
const AllArticles = ({ blok }) => {
  const { articles } = useLoaderData();
  console.log(`these are the logged articles`, articles)
  return (
    <>
      <p className="text-3xl">{blok.title}</p>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3   lg:px-24 md:px-16"
        {...storyblokEditable(blok)}
      >
        {articles?.length &&
          articles.map((article) => {
            article.content.slug = article.slug;
            return (
              <ArticleTeaser article={article.content} key={article.uuid} />
            );
          })}
      </div>
    </>
  );
};

// const AllArticles = () =>{
//   return(
//     <div>
//       <p> test from all articles</p>
//     </div>
//   )
// }
export default AllArticles;

