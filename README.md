# URL-shortener-service


## Installation
1. Clone this repository.
2. cd into the newly created directory.
3. Run npm install.
4. Run npm run dev. This command will spin up a server on port 5000 that will automatically restart when changes are made to source files.
5. When you navigate to localhost:5000 initially, you should see a Not found: / message in the browser because none of the routes have been implemented yet.

## Description
URL shortener service API using Node.js and Express. It should allow users to submit a URL and receive a "shortened" code, or ID, that can be used to retrieve the original URL later. It should also keep track of how often each shortened URL is retrieved so that you can calculate the most popular URLs.

Here's an example: www.shoppingsite.com/category/shoe/product/nike132032.

If a customer wants to share a link to the product on Twitter, they may run into restrictions on the text length.

A URL shortener service overcomes this issue by shortening www.shoppingsite.com/category/shoe/product/nike/132032 to www.shoppingsite.com/8d13lk2k.


## 1 . Create
* The following Postman screenshot shows the data posted to /urls and the response from the server.
* POST	/urls	  Create a new short URL
* POST { data: {"href":"www.some-url.com"} } to /urls should assign an id to the object, save it, and return the saved object as a response to the client.
![image](https://user-images.githubusercontent.com/86864383/183713056-2f11d655-ce81-4956-8709-309280b32203.png)

## 2. Read
* The following Postman screenshot shows a GET request to /urls/:urlId and the response from the server.

* Additionally, use records are created as a side effect of a GET request to /urls/:urlId. Each use record contains an id, a urlId which corresponds to ID of the URL being tracked by the use metric, and a time property (set to Date.now()) indicating when the use metric was recorded.
* GET	/urls/:urlId	Retrieve a short URL by ID
![image](https://user-images.githubusercontent.com/86864383/183713935-549f9ca5-a82f-444f-8272-d1c40649807b.png)



## 3. Update
* The following Postman screenshot shows a PUT request to /urls/:urlId and the response from the server.
* PUT	/urls/:urlId	Update a short URL by ID
![image](https://user-images.githubusercontent.com/86864383/183714581-279e085f-9885-4200-8e51-36a989e412ca.png)

## 4. List
* The following Postman screenshot shows a GET request to /urls and the response from the server.
* GET	/urls	Retrieve a list of all short URLs
![image](https://user-images.githubusercontent.com/86864383/183714760-e366c51d-7540-439d-a67f-8b861401bc0b.png)


## 5. Delete
* The following Postman screenshot shows a DELETE request to /urls/:urlId and the response from the server.
* DELETE request to /urls/:urlId
![image](https://user-images.githubusercontent.com/86864383/183715153-611979a2-727e-4443-9ea0-09cb61c788c1.png)

## 6. List short URL uses
* The following Postman screenshot shows a GET request to /urls/:urlId/uses and the response from the server.
* GET	/urls/:urlId/uses	Retrieve a list of use metrics for a given short URL ID
![image](https://user-images.githubusercontent.com/86864383/183715327-cb99cad5-1720-4075-93fa-518893822c85.png)

## 7. Read short URL use
* The following Postman screenshot shows a GET request to /urls/:urlId/uses/:useId and the response from the server.
* GET	/urls/:urlId/uses/:useId	Retrieve a use metric by ID for a given short URL ID
![image](https://user-images.githubusercontent.com/86864383/183715534-3c262024-1860-42f8-bc27-5a42c064e459.png)



__The uses resources have a path of /uses and are a record of every GET request for a specific short URL.__

## 1. Create
* Creating use records through the API is not allowed. Use records are created as a side effect of a GET request to /urls/:urlId.
* The following Postman screenshot shows the data posted to /urls/:urlId and the response from the server.

![image](https://user-images.githubusercontent.com/86864383/183716439-f23cc78b-d763-4aa5-bd00-c9a4e471a011.png)


## 2. Read
* The following Postman screenshot shows a GET request to /uses/:useId and the response from the server.
![image](https://user-images.githubusercontent.com/86864383/183716668-61abede6-0e02-4f59-b5f6-474fa28b8ea8.png)


## 3. Update
* The following Postman screenshot shows a PUT request to /uses/:useId and the response from the server.
![image](https://user-images.githubusercontent.com/86864383/183716928-66f93e26-c77c-4275-9256-e4fea7d412e1.png)

## 4. Delete
* The following Postman screenshot shows a DELETE request to /uses/:useId and the 204 response from the server.
![image](https://user-images.githubusercontent.com/86864383/183717181-022adccb-1d70-40ba-a030-55802445fabd.png)

## 5. List
* The following Postman screenshot shows a GET request to /uses and the response from the server.
![image](https://user-images.githubusercontent.com/86864383/183717395-a1b1e28e-60fa-4882-af05-4710bb9e0d68.png)

## Handle errors properly
* Return a 404 error for any nonexistent path or resource.
* Methods that are not allowed should return 405 (e.g., a DELETE request sent to /urls/:urlId)/
## Saving data
* There is no database in use for this project. All changes are stored in-memory.

* The short URL data is exported from /src/data/urls-data.js.

* The use data is exported from /src/data/uses-data.js.

* There is some existing data in each file to give you a starting place.

* Add and remove data from the arrays using push() and splice(), respectively.

* When you restart your server, any changes made to these arrays will be lost.















__The service should return a 404 error if the :urlId and :useId are mismatched. For example, if you send a GET request to /42/uses/79, and useId 79 isn't associated with urlId 42, the server should respond with 404.__
