"use strict";
define(['app','api'], function (app) {
    app.register.controller('StudentController',['$scope','$rootScope','api', function ($scope,$rootScope,api) {
		$scope.list=function(){
			$rootScope.__MODULE_NAME = 'Students';
			$scope.YearLevels=[];
			$scope.Students=[];
			$scope.Countries=[];
			$scope.Provinces=[];
			$scope.ClassLists=[];
			$scope.State='sections';
			$scope.hasInformation = false;
			$scope.hasNoInformation = true;
			api.GET('year_levels',function success(response){
				$scope.YearLevels = response.data;	
			});
			api.GET('students',function success(response){
				$scope.Students=response.data;	
			});
			api.GET('countries',function success(response){
				$scope.Countries = response.data;	
			});
			api.GET('provinces',function success(response){
				$scope.Provinces=response.data;	
			});
			api.GET('provinces',function success(response){
				$scope.Provinces=response.data;	
			});
			api.GET('class_lists',function success(response){
				console.log(response.data,'class list');
				$scope.ClassLists=response.data;	
			});
		};
		$scope.updateStatus=function(state){
			$scope.State=state;
		};
		$scope.openStudentInfo=function(student){
			$scope.Student=student;
			$scope.hasInformation = true;
			$scope.hasNoInformation = false;
		};
		$scope.removeStudentInfo = function(){
			$scope.hasInformation = false;
			$scope.hasNoInformation = true;
			$scope.Student = null;
		};
		$scope.openSectionInfo=function(classlist){
			$scope.ClassList=classlist;
		};
    }]);
});


