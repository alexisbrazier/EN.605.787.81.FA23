angular.module('MenuApp')
.component('categories', {
  bindings: { categories: '<' },
  template: `
    <h1>categories</h1>
    
    <ul>
      <li ng-repeat="user in $ctrl.categories[0]" ui-sref-active="userselected" >
      <a href="#!/item?categoryselect={{user}}">{{user}}
      </a>
      </li>
    </ul>
    
    <div ui-view></div>
`,
})
