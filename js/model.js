define(
  'model',
  [],
  function () {


    function Model (data) {
      this.data = data;
    }

    Model.prototype.add = function(txt) {
      if (!txt) return;
      this.data.push(txt);
    };

    Model.prototype.edit = function(index, txt) {
      if (!arguments.length) return;
      if (txt) {
        this.data.splice(index, 1, txt);
      } else {
        this.data.splice(index, 1);
      }
    };


    return Model;
  }
);