/// <reference path="../definitions/ember/ember.d.ts"/>

var IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

export = IndexRoute;
