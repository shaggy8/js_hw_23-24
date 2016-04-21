require(
  ['jquery', 'tmpl', 'model', 'view', 'controller'],
  function ($, tmpl, Model, View, Controller) {

    var firstList = ['fuck', 'my', 'brain!', 'i', 'did', 'it!'];

    var model = new Model(firstList);
    model.edit(2); console.log(model.data);
    var view = new View(model, $('.to-do-list__list'), 'list');

    var controller = new Controller(model, view);
    
  }
);

require.config({
  paths: {'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min'},
  shim: {'tmpl': {exports: 'tmpl'}}
});