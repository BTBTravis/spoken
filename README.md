
### Development mode

To start the auto compiler and node server, navigate to the project folder and run the following commands in seprate terminal:

```
lein cljsbuild auto
```
```
env PORT=3000 nodemon server.js
or
heroku local web
```

Once this is underway have for front end connect on port 3000.


### Building for production

```
lein clean
./deploy.sh
```
