declare class Ember {
  static Route: any;
};

declare var console: {
  log (any: any);
};

var IndexRoute = Ember.Route.extend({
  model: function() {
    console.log('adfasdf');
    return ['red', 'yellow', 'blue'];
  }
});

export = IndexRoute;
