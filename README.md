# Music Database Exercise

This APP is publicly available in Heroku [MusicDatabaseExercise][heroku]

Music Database Exercise is the name given to an skill test exercise developed by Pedro Rocha during it's free time.
This exercise is based in the popular framework Django powered by the powerfull Python Programing language. The versions used to build and necessary to run this exercise are:

  - [Python 3.5.4][python]
  - [Pip 8.1.2][pip]
  - [VirtualEnv 15.0.3][virtualenv]
  - [PostgreSQL 9.5.4][postgresql]


Has requested by the test examinatores, this exercise has to be able to :

  - Add, Edit, Remove Users;
  - Add, Edit, Remove Musics,
  - Add, Remove Musics to the User Music Favorite List.
  - Populate the Music Database with data from http://freemusicarchive.org/recent.json

### Please notice that,
I focused on learning the base fundamentals of the Django Framework and  Django Rest Framework, every piece of code has been writen based on the result of 3 days of learning/coding.

### Development Notes,
The API has been built on top of Django Python Framework using the Django Rest Framework 'module'.
The AngularJS webapp has been scafolded using [Yeoman][yo] with the Angular [generator][yoangular].



## Aplication Folder Structure

This folder has the following structure ( Only folders that have been modified will be referenced, all others are just Scafolded by the default by the Django generator ):
  - `MusicDatabase` ( Django Framework Project Init/Setup Files )
    -  `static` ( Folder containing static assets )
    -  `staticfiles` ( Folder containing all static files from all the Aplications of this Project )
        -  `bower_components` ( Folder containg bootstrap font's / icons )
        -  `images` ( Folder containg the webapp minified image assets )
        -  `scripts` ( Folder containing the webapp Angular JS Files )
            -  `scripts.js` ( Minified JS File, containing AngularJS Controllers,Directives,Routes,Filters,Services )
            -  `vendor.js` ( Minified JS File, containing Aditional javascript libraries )
        -  `styles` ( Folder containing the webapp CSS Files )
            -  `main.css` ( Minified CSS File, containing all web APP CSS classes )
            -  `vendor.css` ( Minified CSS File, containing bootstrap CSS Classes )
    -  `__init__.py` ( Python package initializer )
    -  `settings.py` ( Project Application Global Settings *DATABASE CONFIG* )
    -  `urls.py` ( Django Urls Setup File )
    -  `wsgi.py` ( Web Server Config for Deployment Purposes )
 - `api` ( Api Application files, API routes )
    -  `management` ( Folder containing aditional management files )
        -  `commands` ( Folder containg aditional command definition files )
            -  `__init__.py` ( Python package initializer )
            -  `_private.py` ( Python private package definition )
            -  `populate.py` ( Management command for database population )
        -  `__init__.py` ( Python package initializer )
    -  `migrations` ( Database migration files )
    -  `serializers` ( Django Rest Framework data serializers )
        -  `__init__.py` ( Python package initializer )
        -  `music.py` ( Music Object Serializers )
        -  `user.py` ( User Object Serializers )
    -  `static` ( Folder containing static assets )
    -  `serializers` ( Django Rest Framework data ViewSets )
        -  `__init__.py` ( Python package initializer )
        -  `music.py` ( Music Data ViewSet )
        -  `user.py` ( User Data ViewSet )
    -  `__init__.py` ( Python package initializer )
    -  `admin.py` ( Django Admin Interface View Setup )
    -  `apps.py` ( Application setup file )
    -  `models.py` ( Application data models )
    -  `tests.py` ( Application tests )
    -  `urls.py` ( Application exclusive Urls )
    -  `views.py` ( Application view handlers )
 - `heroku` ( Heroku Exclusive Project Settings )
    -  `__init__.py` ( Python package initializer )
    -  `settings.py` ( Project Settings *DATABASE CONFIG*)
 - `website` ( Api Application files, WEBAPP routes )
    -  `migrations` ( Database migration files )
    -  `static` ( Folder containing static assets )
        -  `bower_components` ( Folder containg bootstrap font's / icons )
        -  `images` ( Folder containg the webapp minified image assets )
        -  `scripts` ( Folder containing the webapp Angular JS Files )
            -  `scripts.js` ( Minified JS File, containing AngularJS Controllers,Directives,Routes,Filters,Services )
            -  `vendor.js` ( Minified JS File, containing Aditional javascript libraries )
        -  `styles` ( Folder containing the webapp CSS Files )
            -  `main.css` ( Minified CSS File, containing all web APP CSS classes )
            -  `vendor.css` ( Minified CSS File, containing bootstrap CSS Classes )
        -  `favicon.ico` ( Web APP Favicon )
    -  `templates` ( Django Framework view templates folder )
        -  `website` ( Folder containg the website APP template files )
            -  `index.html` ( WebAPP Index File )
        -  `user.py` ( User Data ViewSet )
    -  `__init__.py` ( Python package initializer )
    -  `admin.py` ( Django Admin Interface View Setup )
    -  `apps.py` ( Application setup file )
    -  `models.py` ( Application data models )
    -  `tests.py` ( Application tests )
    -  `urls.py` ( Application exclusive Urls )
    -  `views.py` ( Application view handlers )
 - `websitedev` ( Web APP Development Files )
    -  `app` ( Web APP scripts, styles, images and views )
        -  `images` ( Folder containg the webapp image assets )
        -  `scripts` ( Folder containing the webapp Angular JS Files )
            -  `controllers` ( Folder containing the webapp Angular JS Controllers )
                -  `musics.js` ( Musics View Controller )
                -  `users.js` ( Users View Controller )
            -  `directives` ( Folder containing the webapp Angular JS Directives )
                -  `navigation.js` ( Web APP Navigational Menu  )
            -  `filters` ( Folder containing the webapp Angular JS Filters )
                -  `musicfilter.js` ( Filters the music array, returning only the items that the current user already has in is fav list )
                -  `musicselectionfilter.js` ( Filters the music array, removing items that the current user already has in is fav list )
            -  `services` ( Folder containing the webapp Angular JS Services )
                -  `apidata.js` ( This service is responsible for all the Communications between this webapp and our Django API. This service returns a promisse for each method )
                -  `routenavigation.js` ( This service is responsible for collecting all APP routes, and verifing the current route ( Navigational Top Menu purposes ) )
            -  `app.js` ( AngularJS APP Startup  and Route Config File )
        -  `styles` ( WebAPP SCSS Files )
            -  `main.scss` ( WebAPP SCSS main File )
        -  `views` ( WebAPP View Controller/Directives Template Files )
            -  `music.html` ( Music View Template File )
            -  `navigation.html` ( Navigation View Template File )
            -  `users.html` ( Users View Template File )
        -  `favicon.ico` ( Web APP Favicon )
        -  `index.html` ( WebAPP Main Index File )
    -  `test` ( Folder containing karma test files )
        -  `spec` ( Folder containing karma test files  for each javascript file in the scripts folder )
        -  `.jshintrc` ( jshint settings file )
        -  `karma.conf.js` ( Karma Testing Module settings file )
    -  `.bowerrc` ( Bower repository settings )
    -  `.gitattributes` ( Git encoding attributes )
    -  `.gitignore` ( Git ignore settings )
    -  `.jscsrc` ( ... )
    -  `.jshintrc` ( jshint settings file )
    -  `.yo-rc.json` ( Yeoman install settings )
    -  `bower.json` ( Bower Dependencies file )
    -  `Gruntfile.js` ( Grunt CLI tasks )
    -  `package.json` ( NodeJS NPM package list)


## Setting up the APP
Before you run the Django server, first you need to setup a new virtualenv. Run the following bash command, inside the project root folder:

```sh
$ python3 -m venv myvenv
```

With the command above a new Virtualenv, named myenv, will be created in your system, next you should activate/enter the created virtual env. For that purpose run the following shell command, inside the project root folder:

```sh
$ source myenv/bin/activate
```

##Installing Dependencies
This app requires some dependencies to run properly, Django is on of them.
To install all dependecies run the following in your bash , inside the project root folder:


```sh
$ pip install -r requirements.txt
```



##Databases
This app requires the use of a postgres database, for the app to run you have to install PostgreSQL and create a new user, and a new database with the created user as it's owner.

Example, on your PostgreSQL shell run the following commands:
```sql
CREATE USER musicdatabase;

CREATE DATABASE musicdatabase OWNER musicdatabase;

```

With the databases created you have to edit the Project settings file to change the Database default settings MusicDatabase/settings.py:
The Database configs should be placed in this file, on the line 88, where you will find the following text:

```py

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'musicdatabase',
        'USER': 'musicdatabase',
        'PASSWORD': '',
        'HOST': 'localhost',
        'PORT': '',
    }
}

```

Now and finaly you have to tell Django to create all required Data Tables through it's migration process, to do this you have to run the following shell command in your project root folder:


```sh
$ python manage.py migrate
```


##Optional
If you wish to populate the Musics Data Table with fresh data from http://freemusicarchive.org/recent.json, run the following shell command inside your project root folder.

```sh
$ python manage.py populate
```



## Running the APP

To start the webserver and run the app, just type the following in your shell, while located on your app's root folder:

```sh
$ python manage.py runserver
```

And finaly open the following url in your browser

 - [http://localhost:8000][localhost]

Please notice that your firewall may block this communication, allow communications on the port 8000.




##WebSite Development Notes
To run the WebAPP in development mode, you are required to do a couple of more initialization steps.
The WebAPP uses bower to manage it's dependencies, and requires some NPM Modules to be built and tested.

###Dependencies

  - [NodeJS 4.4.7][nodejs]
  - [NPM 3.10.5][npm]
  - [Bower][bower]
  - [Grunt][grunt]
  - [Compass][compass]
  - [Ruby][ruby]

To install some of these dependecies ( Grunt, Bower, Compass *( Ruby First! )* ), you have to open your shell inside the Project Root folder and type the following command:


```sh
$ cd websitedev
$ npm install -g grunt-cli bower
$ gem install compass

```

###Setup Dev Environment

After installing the dependecies listed above, you need to run the following commands:

Installs all required npm modules

```sh
$ npm install
```

Installs all required bower dependencies

```sh
$ bower install --save
```

###Run Dev Server
To run the webserver and see the APP Running, type in the <Project Root>/websitedev:

```sh
$ grunt serve
```

###Building the Website
To build the website you need to run the following grunt task

```sh
$ grunt build
```

Please note that changes made on the index.html file, have to be manually merged with the file present at <ProjectRoot>/website/templates/website/index.html , this file contains python template tags that allow the webapp static files to be served by the django web server.







License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [python]: <https://www.python.org/>
   [pip]: <https://pypi.python.org/pypi/pip>
   [virtualenv]: <https://virtualenv.pypa.io/en/stable/>
   [postgres]: <https://www.postgresql.org/>
   [heroku]: <https://musicdatabaseexercise.herokuapp.com>
   [yo]: <http://yeoman.io>
   [yoangular]: <https://github.com/yeoman/generator-angular#readme>
   [localhost]: <http://localhost:8000>
   [nodejs]: <https://nodejs.org/en/>
   [npm]: <https://www.npmjs.com/>
   [bower]: <https://bower.io/>
   [grunt]: <http://gruntjs.com/>
   [compass]: <https://rubygems.org/gems/compass/versions/1.0.3>
   [ruby]: <http://rubyinstaller.org/downloads/>