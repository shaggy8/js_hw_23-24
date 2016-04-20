require(
  ['jquery', 'tmpl', 'model', 'view', 'controller'],
  function ($, tmpl, model, view, controller) {
    var mod = new model(['fuck', 'my', 'brain']);
    mod.edit(1, 'your');
    console.log(mod.data);
  }
);

require.config({
  paths: {'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min'},
  shim: {'tmpl': {exports: 'tmpl'}}
});