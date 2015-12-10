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
							"id": 5,
							"name": "Earth",
							"year_level": "Grade 9",
							"year_level_id": "G9"
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
							    "id": "4",
							    "name": "Anne Curtis",
							  },
							  {
							    "id": "5",
							    "name": "Marian Rivera",
							  },
							  {
							    "id": "6",
							    "name": "Rhian Ramos",
							  }
						     ]
							}
					  },
					  {
					    "section": {
							"id": 3,
							"name": "Gold",
							"year_level": "Grade 8",
							"year_level_id": "G8"
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
							    "id": "6",
							    "name": "Maine Mendoza",
							  },
							  {
							    "id": "7",
							    "name": "Max Collins",
							  },
							  {
							    "id": "8",
							    "name": "Coleen Garcia",
							  },
							  {
							    "id": "9",
							    "name": "Yeng Constantino",
							  }
						     ]
							}
					  }
					]
			}
		);
});