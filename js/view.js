define(
  'view',
  ['jquery', 'tmpl'],
  function () {


    function View (model, $dom, template) {
      var self = this;

      this.render = function() {
        var htmlText = tmpl(template, {data: model.data});
        $dom.html(htmlText);
        return self;
      };

      this.startEdit = function($elem) {
        var $li = $elem.parent();
        var elems = {
          '$span': $li.children('.to-do-list__item-text'),
          '$btns': $li.children('a'),
          '$btnEdit': $li.children('.to-do-list__button--edit'),
        }
        var txt = elems.$span.text();

        elems.$span.css({'display': 'none'});
        elems.$btns.css({'display': 'block'});
        elems.$btnEdit.css({'display': 'none'});
        $li.prepend('<input type="text" class="to-do-list__input to-do-list__input--edit">');
        $li.children('.to-do-list__input').focus().val(txt);

        return self;
      };

      this.change = function($elem) {
        var txt = $elem.siblings('.to-do-list__input').val();
        $elem.siblings('.to-do-list__item-text').text(txt);

        return self;
      };

      this.endEdit = function($elem) {
        var $li = $elem.parent();
        var elems = {
          '$span': $li.children('.to-do-list__item-text'),
          '$input': $li.children('.to-do-list__input'),
          '$btns': $li.children('a'),
          '$btnEdit': $li.children('.to-do-list__button--edit'),
          '$btnDelete': $li.children('.to-do-list__button--delete'),
        }
        
        elems.$span.css({'display': 'inline'});
        elems.$btns.css({'display': 'none'});
        elems.$btnEdit.css({'display': 'block'})
        elems.$btnDelete.css({'display': 'block'});
        elems.$input.remove();

        return self;
      };

      this.render();
    }


    return View;
  }
);