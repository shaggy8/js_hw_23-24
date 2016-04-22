require(
  ['jquery', 'tmpl', 'model', 'view', 'controller'],
  function ($, tmpl, Model, View, Controller) {

    var firstList = ['заварити чай',
                     'вивчити javaScript',
                     'попити чаю',
                     'зробити гімнастику',
                     'полити кактуси'];

    if (!localStorage['to-do-list']) {
      localStorage['to-do-list'] = JSON.stringify(firstList);
    }
    var savedList = JSON.parse(localStorage['to-do-list']);

    var model = new Model(savedList);

    var view = new View(model, 'list', $('.to-do-list__list'));

    var controller = new Controller(model, view, $('.to-do-list__list'));
    
  }
);

require.config({
  paths: {'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min'},
  shim: {'tmpl': {exports: 'tmpl'}}
});