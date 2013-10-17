/// <reference path="../../app/definitions/ember/ember.d.ts"/>
/// <reference path="../../app/definitions/resolver.d.ts"/>

import Resolver = require('resolver');

function isolatedContainer(fullNames) {
  var container = new Ember.Container();
  var resolver = Resolver.default.create();

  resolver.namespace = {
    modulePrefix: 'app'
  };

  for (var i = fullNames.length; i > 0; i--) {
    var fullName = fullNames[i - 1];
    container.register(fullName, resolver.resolve(fullName));
  }

  return container;
}

export = isolatedContainer;
