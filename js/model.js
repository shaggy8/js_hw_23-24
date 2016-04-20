define(
  'model',
  [],
  function () {
    function Model (data) {
      this.data = data;
    }

    Model.prototype.add = function(text) {
      if (!text) return;
      this.data.push(text);
    };

    Model.prototype.edit = function(index, text) {
      if (!arguments.length) return;
      if (text) {
        this.data.splice(index, 1, text);
      } else {
        this.data.splice(index, 1);
      }
    };


    return Model;
  }
);