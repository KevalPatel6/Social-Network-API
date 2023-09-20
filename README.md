# Social-Network-API   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a repository that creates a backend API for a social network application. This application was created using MongoDB and mongoose to access the database and modify its contents. The main motivation for creating this application was to practice using a non-relational database and writing code to handle all REST API requests. This application can help solve the issue of handling and storing unique user data in a non-relational manner that gives the application the flexibility to save user input that is not dependent on any rigid schema. I learned a great deal from creating this application. I believe that my backend skills as a fullstack developer are greatly enhanced after creating this application and my understanding of using non-relational databases became much more clearer. 

## Usage

To use this application, you will need a front end application already built that takes user information using the user schema in the models folder and hits the endpoints in the routes folder. You will need to download these files and incorporate them into your server files for your application. However, for backend only purposes we will go through a brief tutorial on how to use this application. First, you can create a user by including a username and email in the body of a POST request to the server that hits the user routes end point. You can update the user using a PUT, get all users using the GET method, and delete a user using the DELETE method by using the user _id. Each document in the MongoDB that is created will be given a unique identifier '_id' and this is the id we will use for all the requests. You can also create thoughts that users can have by including the thoughtText and the username associated with that thought. To update the thought or delete it, you will need the thought _id that is generated with the creation of that particular thought. Use a GET on the thoughts route to get all the thoughts and find the '_id' of the thought you want to update or delete. The same can be done with reactions. Users can also add friends using the user '_id' of the user adding the friend and the '_id' of the friend that is being added. Check the endpoints in the routes folder to see which end points need to be hit for this and what to include. Finally, when you delete a user, the thoughts associated with that user is also deleted. 

## Credits 

I want to thank the instructional staff for helping me with questions when I got stuck. I also want to give credit to chat.openai.com for helping me answer some questions for when I woudl get errors I did not know how to fix. 

## License

MIT License

Copyright (c) [2023] [Keval Patel]
        
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions

If you would like to reach out to me with any questions, you can email me directly at: [nothanks@gmail.com](mailto:nothanks@gmail.com)

Also, you can visit my github profile page [here](https://github.com/KevalPatel6).