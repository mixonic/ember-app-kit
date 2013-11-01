/// <reference path="../../../app/routes/index.ts"/>
import Index = require('app/routes/index');

declare var module: any;
declare var test: any;
declare var isolatedContainer: any;
declare var deepEqual: any;
declare var ok: any;
declare var Ember: any;

var route: any;

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
  ok(route instanceof Index);
});

test("#model", function(){
  deepEqual(route.model(), ['red', 'yellow', 'blue']);
});
