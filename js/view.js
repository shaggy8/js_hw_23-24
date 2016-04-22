define(
  'view',
  ['jquery', 'tmpl'],
  function () {


    function View (model, template, $dom) {
      var elems;

      this.render = function() {
        var htmlText = tmpl(template, {data: model.data});
        $dom.html(htmlText);

        elems = {
          '$li': $('.to-do-list__item'),
          '$span': $('.to-do-list__item-text'),
          '$btnEdit': $('.to-do-list__button--edit'),
          '$btnDelete': $('.to-do-list__button--delete'),
          '$btnApply': $('.to-do-list__button--apply'),
          '$btnCancel': $('.to-do-list__button--cancel'),
        }
      };

      this.startEdit = function(index) {
        var text = elems.$span.eq(index).text();

        elems.$span.eq(index).hide();
        elems.$btnEdit.eq(index).hide();
        elems.$btnApply.eq(index).show();
        elems.$btnCancel.eq(index).show();
        elems.$li.eq(index).prepend('<input type="text" class="to-do-list__input to-do-list__input--edit" value="' + text + '">');
        $('.to-do-list__input--edit').focus();
      };

      this.endEdit = function(index) {
        elems.$span.eq(index).show();
        elems.$btnEdit.eq(index).show();
        elems.$btnApply.eq(index).hide();
        elems.$btnCancel.eq(index).hide();
        elems.$li.eq(index).children('.to-do-list__input--edit').remove();
      };

      this.render();
    }


    return View;
  }
);