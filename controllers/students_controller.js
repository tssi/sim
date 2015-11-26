"use strict";
define(['app','api'], function (app) {
    app.register.controller('StudentController',['$scope','$rootScope','api', function ($scope,$rootScope,api) {
		$scope.list=function(){
			$rootScope.__MODULE_NAME = 'Students';
			$scope.YearLevels=[];
			$scope.Students=[];
			$scope.Countries=[];
			$scope.Provinces=[];
			$scope.hasInformation = false;
			$scope.hasNoInformation = true;
			api.GET('year_levels',function success(response){
				console.log(response.data);
				$scope.YearLevels = response.data;	
			});
			api.GET('students',function success(response){
				console.log(response.data);
				$scope.Students=response.data;	
			});
			$scope.openStudentInfo=function(student){
				$scope.Student=student;
				$scope.hasInformation = true;
				$scope.hasNoInformation = false;
				console.log(student);
			};
			$scope.removeStudentInfo = function(){
				$scope.hasInformation = false;
				$scope.hasNoInformation = true;
				$scope.Student = null;
			};
			api.GET('countries',function success(response){
				console.log(response.data);
				$scope.Countries = response.data;	
			});
			api.GET('provinces',function success(response){
				console.log(response.data);
				$scope.Provinces=response.data;	
			});
		};
    }]);
});


