define(
  'controller',
  ['jquery'],
  function () {
    

    function Controller (model, view) {
      $('.to-do-list__button--add').click(addItem);
      $('.to-do-list__button--delete').click(deleteItem);
      $('to-do-list__button--edit').click(editItem);
      $('.to-do-list__button--ok').click(applyEdit);
      $('.to-do-list__button--cancel').click(cancelEdit);

      function addItem(event) {
        var $target = $(event.target);
        var $input = $target.siblings('.to-do-list__input');
        var txt = $input.val();

        model.add(txt);
        view.render();

        $input.val('');

        event.preventDefault();
      }

      function deleteItem(event) {debugger
        var $target = $(event.target);
        var index = $('.to-do-list__button--delete').index($target);

        model.edit(index);
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
        var index = $('.to-do-list__button--ok').index($target);
        var txt = $target.siblings('.to-do-list__input').val();
        
        model.edit(index, txt);
        view.change($target).endEdit($target);

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