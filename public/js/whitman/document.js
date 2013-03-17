var Document = Backbone.Model.extend({
  url: '/document',

  initialize: function() {
    this.on('change', this.onChange);
  },

  onChange: _.debounce(
    function() {
      var markup = marked(this.get('body'));
      var title = $(markup).filter(':header').first().text() || 'Untitled';
      this.set('title', title);
      
      this.save(); 
    }, 500)
});