/// <reference path="../../app/definitions/ember/ember.d.ts"/>
/// <reference path="../../app/definitions/almond.d.ts"/>
/// <reference path="../../app/app.ts"/>

import Application = require('app/app');

function startApp(attrs: any): Ember.Application {
  var App;

  var _attributes: any = Ember.merge({
    // useful Test defaults
    rootElement: '#ember-testing',
    LOG_ACTIVE_GENERATION: false,
    LOG_VIEW_LOOKUPS: false
  }, attrs); // but you can override;

  Ember.run.join(function(){
    App = Application.create(_attributes);
    App.setupForTesting();
    App.injectTestHelpers();
  });

  App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

  return App;
}

export = startApp;
