/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="openExistingTemplateDialog/OpenDialog.controller.ts" />

module ArmViz {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/?load',
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        });
  
      $urlRouterProvider.otherwise('/');
    }
  }
}
