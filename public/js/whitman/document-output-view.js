var DocumentOutputView = Backbone.View.extend({
  el: 'article',

  initialize: function() {
    _.bindAll(this);

    this.initializeMarked();
    this.model.on('change', this.render);
  },

  render: function() {
    $(this.el).html(marked(this.model.get('body')));
    return this;
  },

  initializeMarked: function() {
    marked.setOptions({
      breaks: true,
      smartLists: true,
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      }
    });
  }
});