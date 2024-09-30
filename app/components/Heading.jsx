import { storyblokEditable } from "@storyblok/react";

const HeadLine = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      key={blok._uid}
      className="p-8 bg-gradient-to-r from-blue-300 to-blue-500 rounded-lg shadow-lg m-3"
    >
      <h1 className="text-3xl font-bold text-white mb-4">
        {blok.headline}
      </h1>
      <p className="text-lg text-gray-100 leading-relaxed">
        {blok.paragraph}
      </p>
    </div>
  );
};

export default HeadLine;
