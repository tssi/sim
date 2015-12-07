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
					    "students": [
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
							  },
						     ]
							},
							{
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
							  },
						     ]
							}
					    ]
					  }
					]
			}
		);
});