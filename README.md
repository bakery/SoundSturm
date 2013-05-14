##Dev Journal

###Day 1 - Setting up the project

We use our home made [Baker](https://github.com/thebakeryio/baker) to booststrap. Grab the [marionette branch](https://github.com/thebakeryio/baker/tree/feature/marionette) of the baker to get all the goodness needed to get going fast.  

```
Baker is Yeoman's younger and lazier brother. It is not as powerful and feature rich as Yeoman but it does things in a way that makes sense to us and it's more lightweight. Plus reinventing the wheel is so much fun. Always.  
```

Once all the core pieces from the Marionette branch of baker are in place, you need to install the dependencies for the project. The only thing you already need to have on your machine is [Grunt.js 0.4+](http://gruntjs.com/). From the root of the project (where package.json lives) do the following

```
npm install
```

This will look through all the dependenecies listed in package.json and will install them locally in node_modules folder in the project.

Once all the dependencies are installed, you should be able to launch the app using grunt

```
grunt
```

The app is going to run on [localhost:9001/](http://localhost:9001/).    

**Note on project structure**

```
SoundSturm is using Backbone Marionette with require.js for modules and Handlebars.js as a template engine (as opposed to default underscore templates).

All the styling is done through SASS that gets compiled to CSS by the Baker 
```


=======
Bootstrap your project
=======

```
npm install
cd test
ln -s ../app/scripts scripts
ln -s ../app/templates templates
cd ..
```

Run the app (http://localhost:9001)
=======

```
grunt 
```

Test (http://localhost:9001)
=======
```
grunt test
```

Build ()
======
```
grunt build
```

Dependencies
=======
[Grunt.js 0.4+](http://gruntjs.com/)




Happy baking!
