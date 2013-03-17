var DocumentOutputView = Backbone.View.extend({
  el: 'article',

  initialize: function() {
    _.bindAll(this);
    this.model.on('change', this.render);
  },

  render: function() {
    $(this.el).html(marked(this.model.get('body')));
    return this;
  }
});