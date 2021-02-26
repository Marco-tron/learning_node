to installl third party code you need to first initialize npm in your project, with:

npm init

it will create a file like so:

{
  "name": "notes-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


to install the package you need to run

npm i "modulename"

when you do this it will create a package-lock.json file and a node_modules folder, those shold not be edited, as they cnsist of the files used by the modules you installed