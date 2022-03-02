const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/mvp.css");
  eleventyConfig.addPassthroughCopy("./src/img/");
  eleventyConfig.addPlugin(syntaxHighlight);

  const md = new markdownIt({
    html: true,
  });

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
      includes: "_components",
      layouts: "_layouts",
    },
  };
};
