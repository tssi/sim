"use strict";
define(['model'],function($model){
	return new $model(
			{
				meta:{
					title: 'Class Lists',
				},
				data:[
					  {
					    "section": {
							"id": 1,
							"name": "Blue",
							"year_level": "Grade 9"
					    },
					    "students": 
							{
							 "boys": [
							  {
							    "id": "1",
							    "name": "Juan Dela Cruz",
							  },
							  {
							    "id": "2",
							    "name": "Juan Tamad",
							  },
							  {
							    "id": "3",
							    "name": "Pedro Penduko",
							  }
						     ],
							 "girls": [
							  {
							    "id": "1",
							    "name": "Anne Curtis",
							  },
							  {
							    "id": "2",
							    "name": "Marian Rivera",
							  },
							  {
							    "id": "3",
							    "name": "Rhian Ramos",
							  }
						     ]
							}
					  },
					  {
					    "section": {
							"id": 2,
							"name": "Green",
							"year_level": "Grade 8"
					    },
					    "students": 
							{
							 "boys": [
							  {
							    "id": "1",
							    "name": "Ding Dong Dantes",
							  },
							  {
							    "id": "2",
							    "name": "Coco Martin",
							  },
							  {
							    "id": "3",
							    "name": "Vhong Navarro",
							  },
							  {
							    "id": "4",
							    "name": "Jhong Hilario",
							  },
							  {
							    "id": "5",
							    "name": "Billy Crawford",
							  }
						     ],
							 "girls": [
							  {
							    "id": "1",
							    "name": "Maine Mendoza",
							  },
							  {
							    "id": "2",
							    "name": "Max Collins",
							  },
							  {
							    "id": "3",
							    "name": "Coleen Garcia",
							  },
							  {
							    "id": "4",
							    "name": "Yeng Constantino",
							  }
						     ]
							}
					  }
					]
			}
		);
});