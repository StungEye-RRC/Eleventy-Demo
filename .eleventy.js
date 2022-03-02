const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/mvp.css");
  eleventyConfig.addPassthroughCopy("./src/img/");
  eleventyConfig.addPlugin(syntaxHighlight);

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
