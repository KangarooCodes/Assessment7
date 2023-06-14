### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  *JSON Web Token, used for API authentication. Consists of a Header, Payload and Signature.*

- What is the signature portion of the JWT?  What does it do?
  *Signature portion is used to verify the identity of the sender. One's signature should never be uploaded or shared, as it can be used/stolen for malicous intent. Using signatures can help identify who sends JWTs.*

- If a JWT is intercepted, can the attacker see what's inside the payload?
  *If correctly written, the attacker would need access to the signature, or else they will not have access to the payload.*

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  *Starting with installation (npm i jsonwebtoken) and requiring it via require('jsonwebtoken')*
  *Assuming you have a payload to send, you create your token signature via let "  token = jwt.sign(payload, SECRET_KEY);  "*
  *Verify the correct token with " jwt.verify(token_header, SECRET_KEY) "*

  **Without the correct key being sent, it will return an error**
      **Using " jwt.decode(token_header) " you will skip the crucial key in validation**

  **Install dependencies > sign the token > pass in a payload > hash encoded base64 > a new token is created with header/payload/signature**


- Compare and contrast unit, integration and end-to-end tests.
  *Unit Testing is designed to make sure a single 'unit' or function works as expected.*
  *Integration Testing is designed to make sure modules and functions work together as expected, as a group.*
  *End-To-End Testing is designed to test the entire application as a whole, simulating what the end user would experience*

- What is a mock? What are some things you would mock?
  *A way of using Jest to mock how a unit/function will work, given expected inputs without having to edit the application's code*
  *AJAX Requests would be a good thing to mock, so you don't need to incorporate the API during testing and wait for API responses*
  *If using Math.random(), you can test the function by hardcoding what number Math.random() returns*
      **Math.random = jest.fn(() => 0.9);**

- What is continuous integration?
  *The practice of testing smaller increments/units and merging them in, instead of waiting for large changes at the end of the development cycle*
  **Git(VCS) >> Continuous Integration >> App Server**
  *Integrates with GitHub and tests/builds code if used by the likes of Travis CI or Jenkins*

- What is an environment variable and what are they used for?
  *Environment Variables are values set outside of the application/program and are usually built into the OS. Made up of name/value pairs, they help prevent the need to update/moddify code when the configuration is changed (like testing/staging)*

- What is TDD? What are some benefits and drawbacks?
  **Test-Driven Development**
  *A practice based on building unit test cases before any of the actual application code is developed*
  *Benefits include*

- What is the value of using JSONSchema for validation?
  *It is a standard spec and helps us understand incoming JSON in human-readable format. Also useful for automated testing*

- What are some ways to decide which code to test?
  *It is better to test API instead of your own database(more than just a response code)*
  *Test import code that the application relies on*

- What does `RETURNING` do in SQL? When would you use it?
  *When updating data in SQL, using `RETURNING` will return the data that was updated. Without this, the data is correctly updated, but nothing is shown/returned*

- What are some differences between Web Sockets and HTTP?
  *HTTP: the client or server may only communicate one at a time, and must wait for the other. Once both have finished, the connection is terminated*
  *Web Sockets: the client and server may 'handshake' and send requests/responses back and forth simultaneously* 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  *Flask seems to make a lot more sense to me, and is inherently more favored in my opinion for that reason. I also seem to enjoy Python a lot more than Node.JS*