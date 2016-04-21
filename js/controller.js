define(
  'controller',
  ['jquery'],
  function () {
    

    function Controller (model, view) {
      $('.to-do-list__button--add').click(addItem);
      $('.to-do-list__button--delete').click(deleteItem);
      $('.to-do-list__button--edit').click(editItem);
      $('.to-do-list__button--ok').click(applyEdit);
      $('.to-do-list__button--cancel').click(cancelEdit);
      $('.to-do-list__input--add').keypress(addItem);
      $('.to-do-list__input--edit').keypress(applyEdit);

      function addItem(event) {
        if ($(event.target).is('input') && event.which != 13) return;

        var $parent = $(event.target).parent();
        var $input = $parent.children('.to-do-list__input');
        var txt = $input.val();

        model.add(txt);
        view.render();

        $input.val('');

        event.preventDefault();
      }

      function deleteItem(event) {
        var $target = $(event.target);
        var $li = $target.parent();
        var idx = $('.to-do-list__item').index($li);debugger
        // var index = $('.to-do-list__button--delete').index($target);

        model.edit(idx);
        view.render();

        event.preventDefault();
      }

      function editItem(event) {
        var $target = $(event.target);
        
        view.startEdit($target);

        event.preventDefault();
      }
      
      function applyEdit(event) {
        var $target = $(event.target);
        if ($target.is('input') && event.which != 13) return;

        var $li = $target.parent();
        var indexx = $('.to-do-list__item').index($li);
        var txt = $li.children('.to-do-list__input').val();
        
        model.edit(indexx, txt);
        view.render();
        event.preventDefault();
      }

      function cancelEdit(event) {
        var $target = $(event.target);
        
        view.endEdit($target);

        event.preventDefault();
      }
    }


    return Controller;
  }
);