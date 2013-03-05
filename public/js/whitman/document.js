var Document = Backbone.Model.extend({
  url: '/document',

  initialize: function() {
    this.on('change', this.onChange);
  },

  onChange: _.debounce(
    function() {
      this.save(); 
    }, 500)
});