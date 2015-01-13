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
 * Cross-module constants
 */


/**
 * Path to the root of the Angular app
 */
export var scriptPaths = {
  app: 'scripts/app'
};

export var appModuleName = 'app';

// Generic angular component names used for dependency injection
export var layouts = {
  sidebar: {
    directiveName: 'sidebarLayout'
  }
}
export var codeEditor = {
  directiveName: 'datalabCodeEditor'
};
export var editorCell = {
  directiveName: 'datalabEditorCell'
}
export var codeCell = {
  directiveName: 'datalabCodeCell'
}
export var markdownCell = {
  directiveName: 'datalabMarkdownCell'
}
export var markdownViewer = {
  directiveName: 'datalabMarkdownViewer'
}
export var notebookEditor = {
  directiveName: 'datalabNotebookEditor'
}

// Route-specific angular component names used for dependency injection
export var notebooks = {
  pageControllerName: 'NotebooksPageController',
  edit: {
    pageControllerName: 'EditPageController'
  }
};

// Logging scope names
export var scopes = {
  // Generic components
  codeCell: 'codeCell',
  editorCell: 'editorCell',
  markdownCell: 'markdownCell',

  codeEditor: 'codeEditor',
  markdownViewer: 'markdownViewer',
  notebookEditor: 'notebookEditor',

  layouts: 'layouts',
  kernel: 'kernel',

  // Route-specific components
  notebooks: {
    page: 'notebooks.page',
    edit: {
      page: 'notebooks.edit.page'
    }
  }
};
