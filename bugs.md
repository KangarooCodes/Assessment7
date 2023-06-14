# Bug 1
* getAll() was returning too much information, updated function to only return basic info, as stated by docstrings.
<located in models/user.js>

# Bug 2
* GET Route to users/:username had no error-handling if looking for incorrect/invalid usernames.
<located in routes/users.js>

# Bug 3
* PATCH route required admin, meaning users could not update their own profiles without admin status.
<located in routes/users.js>

# Bug 4
* Login was not awaiting in async function. (I do not have a test for this)
<located in routes/auth.js>

# Bug 5
* User registration was not checking for valid email/phone formatting.
<located in routes/auth.js>

# Bug 6
* authUser() was not verifying jwt; bad actors could act badly.
<located in middleware/auth.js>


# Some additional edits I made to the code:
* Additional test to make sure incorrect username/password gave 401 status
* Changed requireAdmin() error response; to differentiate from requireLogin() error
* Deleted a redundant module.exports=app
* Fixed some cosmetics on routes/users.js
* Changed getAll() to use $1 variable for username
* Some spelling/grammatical errors