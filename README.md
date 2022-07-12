
# NODE REST API


Creation of REST API Using Node.JS and express

Note: project exist only local, to see this use:
```terminal 
git clone https://github.com/GHamb/NodeSimpleRestApi.git

npm install

npm start 
```

## Author

- [@Ghamb](https://www.github.com/GHamb)


## Stack


**Back-End:** Node.js v16+, express v4.18.1, uuid v8.3.2, nodemon(dev Dependencie) v2+

**DOC API**

*Create user*

Route type (POST): http://localhost:5000/users
Requisition Body (JSON):

{
 
 
	"firstName":"anyName",
    "lastName":"anyLastName",
    "age": anyAge
    
}

Response:
 User anyName is added to Database


*Get user*

Route type (GET): http://localhost:5000/users

Response:
 User anyName is added to Database

[

	{
  
		"firstName": "anyName",
		"lastName": "anyLastName",
		"age": anyAge,
		"id": "59414e96-1b89-43f0-9358-00d5b178eefc" -> uuid example
    
	}
  
]

*Get especific id*

Route type (GET): http://localhost:5000/users/59414e96-1b89-43f0-9358-00d5b178eefc (uuid example)

Response:

[

	{
  
		"firstName": "anyName",
		"lastName": "anyLastName",
		"age": anyAge,
		"id": "59414e96-1b89-43f0-9358-00d5b178eefc" -> uuid example
    
	}
  
]

*Update User*

Route type (PATCH): http://localhost:5000/users/59414e96-1b89-43f0-9358-00d5b178eefc (uuid example)

Requisition Body (JSON):

[

	{
  
		"firstName": "anyName",
		"lastName": "anyLastName",
		"age": anyAge,
    
	}
  
]

NOTE: You can use one or more fields at data to updated user 

Response: User with id 59414e96-1b89-43f0-9358-00d5b178eefc has been updated


*Delete User*

Route type (DELETE): http://localhost:5000/users/59414e96-1b89-43f0-9358-00d5b178eefc (uuid example)


Response: User with id 59414e96-1b89-43f0-9358-00d5b178eefc deleted from database

