/// <reference path="../../app/definitions/ember/ember.d.ts"/>
/// <reference path="../../app/definitions/qunit/qunit.d.ts"/>
/// <reference path="../../app/definitions/qunit-globals.d.ts"/>
/// <reference path="../../app/definitions/ember-testing-globals.d.ts"/>
/// <reference path="../test_helper.d.ts"/>

var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('index renders', function(){
  expect(3);

  visit('/').then(function(){
    var title = find('h2#title');
    var list = find('ul li');

    equal(title.text(), 'Welcome to Ember.js');

    equal(list.length, 3);
    equal(list.text(), 'redyellowblue');
  });
});
