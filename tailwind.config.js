const marked = require('marked');

module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: ['./src/**/*.{html,ts}', './blog/**/*.md'],
    options: {
      extractors: [
        {
          extensions: ['md'],
          extractor: (content) => {
            content = marked(content);

            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches =
              content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) ||
              [];

            return broadMatches.concat(innerMatches);
          },
        },
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
