# SurpriseJS-cors
Middleware for including CORS to Your express.js application.

# Installation
```
npm install --save surprisejs-cors
```

# Setup
There are 2 ways: 

_app.js_
```
const cors = require('surprisejs-cors')

app.use(cors( allowedOrigins, allowedHeaders ))
```

OR one line option:

_app.js_

```
app.use(require('surprisejs-cors)( allowedOrigins, allowedHeaders ))
```

That's all! :) But...now, You have to understand what means arguments in `cors` function and how to set them properly

# Configuration

## AllowedOrigins
AllowedOrigins variable can be String[] ( array of strings ) OR just a String. These strings are hostnames of front end applications. For example:

Array of strings:
```
const allowedOrigins = ['http://localhost:3000', 'https://testapp.firebaseapp.com']
```

String
```
const allowedOrigins = 'https://testapp.firebaseapp.com'
```

## AllowedHeaders
Headers is an String containing available HTTP headers which You want to use.
For example:

```
const headers = 'Content-Type, Accept, Authorization'
```

You can find list of headers here: [List of headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers)

# Problems 
If You get some problems, don't be afraid to contact or create an issue :)

# Links

## Github
	https://github.com/RobertMrowiec/surprisejs-cors

## NPM
	https://www.npmjs.com/package/surprisejs-cors
