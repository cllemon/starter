module.exports = {
  plugins: {
    autoprefixer: {},
  },
  'postcss-reporter': {
    clearReportedMessages: true,
    throwError: true,
  },
  'postcss-px-to-viewport': {
    viewportWidth: 375,
    viewportHeight: 812,
    unitPrecision: 5,
    viewportUnit: 'vw',
    fontViewportUnit: 'vw',
    selectorBlackList: ['.ignore', '.hairlines'],
    minPixelValue: 1,
    mediaQuery: false,
    exclude: [/node_modules/],
  },
};
