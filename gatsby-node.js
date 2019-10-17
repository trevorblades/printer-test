const {createPrinterNode} = require('gatsby-plugin-printer');

exports.createPages = () => {
  createPrinterNode({
    id: `test123`,
    fileName: 'test123',
    outputDir: 'social-cards',
    data: {
      title: 'test'
    },
    component: require.resolve('./src/components/social-card.js')
  });
};
