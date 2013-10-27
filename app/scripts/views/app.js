define(["backbone"], function(Backbone) {
  var App = Backbone.View.extend({
    initialize: function () {
      $("body").append("<p>Backbone.View Hello World!</p>");
    }
  });

  return App;
});