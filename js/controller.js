define(
  'controller',
  ['jquery'],
  function () {
    

    function Controller (model, view, $dom) {
      $dom.on('click', manipulateByButtons);
      $dom.on('keypress', '.to-do-list__input--edit', applyEdit);
      $('.to-do-list__button--add').click(addItem);
      $('.to-do-list__input--add').keypress(addItem);

      function manipulateByButtons(event) {
        event.preventDefault();

        var $target = $(event.target);
        var $li = $target.parent();
        var index = $('.to-do-list__item').index($li);
        var text = $('.to-do-list__input--edit').val();

        if ($target.is('.to-do-list__button--delete')) {
            model.edit(index);
            view.render();
        } else if ($target.is('.to-do-list__button--edit')) {
            view.render();
            view.startEdit(index);
        } else if ($target.is('.to-do-list__button--apply')) {
            if (!text) {
              view.endEdit(index);
            } else {
              model.edit(index, text);
              view.render();
            }
        } else if ($target.is('.to-do-list__button--cancel')) {
            view.endEdit(index);
        }
      }

      function addItem(event) {
        if ($(event.target).is('input') && event.which != 13) return;
        event.preventDefault();

        var $input = $('.to-do-list__input--add');
        var text = $input.val();

        model.add(text);
        view.render();

        $input.val('');
      }
      
      function applyEdit(event) {
        var $target = $(event.target);
        if (event.which != 13) return;
        event.preventDefault();

        var $li = $target.parent();
        var index = $('.to-do-list__item').index($li);
        var text = $target.val();
        
        if (!text) {
          view.endEdit(index);
        } else {
          model.edit(index, text);
          view.render();
        }
      }
    }


    return Controller;
  }
);