"use strict";
define(['app','api'], function (app) {
    app.register.controller('StudentController',['$scope','$rootScope','$uibModal','api', function ($scope,$rootScope,$uibModal,api) {
		$scope.list=function(){
			$rootScope.__MODULE_NAME = 'Class List';
			function getClassLists(data){
				$scope.DataLoading = true;
				api.GET('class_lists',data,function success(response){
					$scope.ClassLists=response.data;
					$scope.NextPage=response.meta.next;
					$scope.PrevPage=response.meta.prev;
					$scope.TotalItems=response.meta.count;
					$scope.LastItem=response.meta.page*response.meta.limit;
					$scope.FirstItem=$scope.LastItem-(response.meta.limit-1);
					if($scope.LastItem>$scope.TotalItems){
						$scope.LastItem=$scope.TotalItems;
					};
					$scope.DataLoading = false;		
				});
			}
			$scope.initLedgers=function(){
				$scope.ActivePage = 1;
				$scope.NextPage=null;
				$scope.PrevPage=null;
				$scope.DataLoading = false;
				getClassLists({page:$scope.ActivePage});
			};
			$scope.initLedgers();
			$scope.navigatePage=function(page){
				$scope.ActivePage=page;
				getClassLists({page:$scope.ActivePage});
			};
			
			$scope.YearLevels=[];
			$scope.Students=[];
			$scope.Countries=[];
			$scope.Provinces=[];
			$scope.ClassLists=[];
			$scope.Sections=[];
			$scope.SelectedStudents={};
			$scope.ActiveStudents=[];
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
			api.GET('sections',function success(response){
				$scope.Sections=response.data;	
			});
			$scope.$watch('State.view',function(newValue, oldValue){
				$scope.SelectedStudents={};
				$scope.ActiveStudents=[];
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
			$scope.State.gender='boys';
			for(var index in $scope.YearLevels){
				var yearlevel=$scope.YearLevels[index];
				if(yearlevel.id===$scope.ClassList.section.year_level_id){
					$scope.ClassList.order=yearlevel.order;
				}
			};
		};
		$scope.removeClassListInfo = function(){
			$scope.ClassList = null;
		};
		$scope.toggleSelectStudents=function(id){
			$scope.SelectedStudents[id] = !$scope.SelectedStudents[id]; 
		};
		$scope.saveSelectedStudents=function(){
			$scope.ActiveStudents=[];
			for(var id in $scope.SelectedStudents){
				if($scope.SelectedStudents[id]){
					$scope.ActiveStudents.push(id);
				}
			};
			var data = {
						section_id:$scope.ClassList.section.id,
						students:$scope.ActiveStudents,
						action:$scope.SelectedAction
					   };
			api.POST('class_lists',data,function(success){
				//update current class list
				$scope.State.view='edit';
			});
		};
		$scope.newStudent=function(){
			var data = {
						section_id:$scope.ClassList.section.id,
						students:[$scope.studentID],
						action:'assign'
					   };
			api.POST('class_lists',data,function(success){
				//newStudent should come from response.data
				var newStudent={
						    id:$scope.studentID,
							name:$scope.studentName
						   };
				$scope.ClassList.students[$scope.State.gender].push(newStudent);
				$scope.studentID=null;
				$scope.studentName=null;
			});
		};
		$scope.removeStudent=function(index){
			var gender=$scope.State.gender;
			var student=$scope.ClassList.students[gender][index];
			var data = {
						section_id:$scope.ClassList.section.id,
						students:[student.id]
					   };
			api.DELETE('class_lists',data,function(response){
				$scope.ClassList.students[gender].splice(index,1);
				});		   
		};
		$scope.filterClassList=function(classlist){
			var searchBox = $scope.searchClassList;
			var keyword = new RegExp(searchBox,'i');	
			var test = keyword.test(classlist.section.name) || keyword.test(classlist.section.year_level);
			return !searchBox || test;
		};
		$scope.confirmSearch = function(){
			getClassLists({page:$scope.ActivePage,keyword:$scope.searchClassList,fields:['section.year_level','section.name']});
		}
		$scope.clearSearch = function(){
			$scope.searchClassList = null;
		};
    }]);
});


