/*
 * Copyright 2014 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * Directive for creating a single code cell
 */
/// <reference path="../../../../../../../../externs/ts/angularjs/angular.d.ts" />
/// <amd-dependency path="app/components/editorcell/EditorCellDirective" />
import logging = require('app/common/Logging');
import constants = require('app/common/Constants');
import app = require('app/App');


var log = logging.getLogger(constants.scopes.codeCell);

interface CodeCellScope extends ng.IScope { // FIXME: naming convention for local scopes
  cell: any;
  keymap?: any;
}

class CodeCellController {

  _rootScope: ng.IRootScopeService;
  _scope: CodeCellScope;

  static $inject: string[] = ['$scope', '$rootScope'];
  constructor (scope: CodeCellScope, rootScope: ng.IRootScopeService) {
    this._scope = scope;
    this._rootScope = rootScope;

    scope.keymap = this._createKeymap();
  }

  _createKeymap () {
    return {
      'Shift-Enter': this._handleExecute.bind(this)
    };
  }

  // FIXME: move event name string constants to constants file and put these particular constants
  // somewhere that the node and ui-side code can access/build against. These event names and messages
  // are effectively the "datalab websocket api" and should be well documented
  _handleExecute () {
    this._rootScope.$emit('execute-cell', this._scope.cell);
  }
}

/**
 * Creates a directive definition.
 */
function codeCellDirective (): ng.IDirective {
  return {
    restrict: 'E',
    scope: {
      cell: '='
    },
    templateUrl: constants.scriptPaths.app + '/components/codecell/codecell.html',
    replace: true,
    controller: CodeCellController
  }
}

app.registrar.directive(constants.codeCell.directiveName, codeCellDirective);
log.debug('Registered markdown cell directive');
