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
        var elems = {
          '$span': $elem.siblings('.to-do-list__item-text'),
          '$li': $elem.parent(),
          '$btnEdit': $elem.siblings('.to-do-list__button--edit'),
          '$btnsOkCancel': $elem.siblings('.to-do-list__button--ok, .to-do-list__button--cancel'),
        }
        var txt = $span.text();

        elems.$span.css({'display': 'none'});
        elems.$btnEdit.css({'display': 'none'});
        elems.$btnsOkCancel.css({'display': 'block'});
        elems.$li.prepend('<input type="text" class="to-do-list__input">')
          .val(txt);
        // $span.siblings('.to-do-list__input');
        return self;
      };

      this.change = function($elem) {
        var txt = $elem.siblings('.to-do-list__input').val();
        $elem.siblings('.to-do-list__item-text').text(txt);
        return self;
      };

      this.endEdit = function($elem) {
        var elems = {
          '$span': $elem.siblings('.to-do-list__item-text'),
          '$input': $elem.siblings('.to-do-list__input'),
          '$btnEdit': $elem.siblings('.to-do-list__button--edit'),
          '$btnsOkCancel': $elem.siblings('.to-do-list__button--ok, .to-do-list__button--cancel'),
        }
        var txt = $span.text();

        elems.$span.css({'display': 'block'});
        elems.$btnEdit.css({'display': 'block'})
        elems.$btnsOkCancel.css({'display': 'none'});
        elems.$input.remove();

        return self;
      };

      this.delete = function($elem) {
        $elem.parent().remove();
        return self;
      };

      this.render();
    }


    return View;
  }
);