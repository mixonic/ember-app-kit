/// <reference path="../../../app/definitions/ember/ember.d.ts"/>
/// <reference path="../../../app/definitions/qunit/qunit.d.ts"/>
/// <reference path="../../../app/definitions/qunit-globals.d.ts"/>
/// <reference path="../../../app/routes/index.ts"/>

import Index = require('app/routes/index');

var route;
module("Unit - IndexRoute", {
  setup: function(){
    var container = isolatedContainer([
      'route:index'
    ]);

    route = container.lookup('route:index');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Ember.Route);
});

test("#model", function(){
  deepEqual(route.model(), ['red', 'yellow', 'blue']);
});
