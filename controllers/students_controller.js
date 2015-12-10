"use strict";
define(['app','api'], function (app) {
    app.register.controller('StudentController',['$scope','$rootScope','$uibModal','api', function ($scope,$rootScope,$uibModal,api) {
		$scope.list=function(){
			$rootScope.__MODULE_NAME = 'Class List';
			$scope.YearLevels=[];
			$scope.Students=[];
			$scope.Countries=[];
			$scope.Provinces=[];
			$scope.ClassLists=[];
			$scope.Sections=[];
			$scope.State={
						  list:"sections",
						  view:"move",
						  gender:"boys"
						 };
			$scope.hasInformation = false;
			$scope.hasNoInformation = true;
			api.GET('year_levels',{limit:'less'},function success(response){
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
				$scope.ClassLists=response.data;	
			});
			api.GET('sections',function success(response){
				$scope.Sections=response.data;	
			});
		};
		$scope.updateState=function(ui,state){
			$scope.State[ui]=state;
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
		$scope.removeClassListInfo = function(){
			$scope.ClassList = [];
		};
    }]);
});


