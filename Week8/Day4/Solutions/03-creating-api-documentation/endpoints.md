## Web API

Get all the posts
GET /posts

Create a new post
POST /posts

Edit a post
PATCH /posts/:postId
PUT /posts/:postId

Create a new user
POST /users

Get the comments for a post
GET /posts/:postId/comments

Create a comment for a post
POST /posts/:postId/comments

Edit a comment for a post
PATCH /posts/:postId/comments/:commentId
PUT /posts/:postId/comments/:commentId

Delete a comment for a post
DELETE /posts/:postId/comments/:commentId
or
DELETE /comments/:commentId

Add a like for a post
POST /posts/:postId/likes

Remove a like for a post
DELETE /posts/:postId/likes/:likeId
or
DELETE /likes/:likeId

Get all the posts of a user
GET /users/:userId/posts

Submit a search on posts
POST /posts/search
GET /search/posts




## API Endpoints from live apps/sites

### YouTube
technically should have a delete id 
delete	DELETE /comments	Deletes a comment.

### https://restfulapi.net/http-methods/
most appropriate would be the first example below though you will see 
endpoints written as the second example as well. 
HTTP DELETE http://www.appdomain.com/users/123
HTTP DELETE http://www.appdomain.com/users/123/accounts/456

Technically, if we don't need it we don't need to mention it: ie
## Apple
DELETE https://news-api.apple.com/articles/{articleId}

Lots of approaches so best thing to do when working with any API is just look at their documentation so see how the endpoint has been defined. 
More endpoint practice in mod 4 in much more detail once we learn how to associate data. :)

