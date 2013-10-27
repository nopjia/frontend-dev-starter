define ["backbone"], (Backbone) ->
  Backbone.View.extend {
    initialize: () ->
      $("body").append("<p>Backbone.View Hello World!</p>");
  }