import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dojo',
  templateUrl: './dojo.component.html',
  styleUrls: ['./dojo.component.scss']
})
export class DojoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*app.controller('myCtrl', function($scope) {
    $scope.showMe = false;
    $scope.functionTxt = function() {
      $scope.showMe = !$scope.showMe;
    }
  }*/

}
