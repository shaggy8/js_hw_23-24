({
  baseUrl: "../js",
  paths: {
    requireLib: 'require',
    jquery: 'empty:',
  },
  shim: {'tmpl': {exports: 'tmpl'}},
  optimize: "uglify2",
  include: ["requireLib"],
  name: "app",
  out: "../built/scripts-min.js"
})