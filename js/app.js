require(
  ['jquery', 'tmpl', 'model', 'view', 'controller'],
  function ($, tmpl, Model, View, Controller) {

    var firstList = ['fuck', 'my', 'brain!', 'i', 'did', 'it!'];

    var mod = new Model(firstList);

    var vie = new View(mod, $('.to-do-list__list'), 'list');

    var contr = new Controller(mod, vie);
    
  }
);

require.config({
  paths: {'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min'},
  shim: {'tmpl': {exports: 'tmpl'}}
});