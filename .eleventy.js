module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  // eleventyConfig.addPassthroughCopy('img');
  // eleventyConfig.addPassthroughCopy('js');

  return {
    dir: {
      input: 'src/_includes',
      output: '_site'
    }
  };
};
