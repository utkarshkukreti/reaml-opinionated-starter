const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['src/**/*.*'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.PURGE === 'true' ? [purgecss] : []),
  ],
};
