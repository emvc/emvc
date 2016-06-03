# emvc

[![Build Status](https://travis-ci.org/emvc/emvc.svg?branch=master)](https://travis-ci.org/emvc/emvc)
[![Coverage Status](https://coveralls.io/repos/github/emvc/emvc/badge.svg?branch=master)](https://coveralls.io/github/emvc/emvc?branch=master)
[![Quality](https://codeclimate.com/github/emvc/emvc/badges/gpa.svg)](https://codeclimate.com/github/emvc/emvc)
[![Dependencies](https://david-dm.org/emvc/emvc.png)](https://david-dm.org/emvc/emvc)


emvc is a framework that brings structure and MVC patterns to web
applications using [Node](http://nodejs.org) and [Express](http://expressjs.com/).

## Installation

    $ npm install emvc

## Quick Start

`emvc`, the command line interface to emvc, can be used to generate a
starter application.  To use it, install emvc globally.

    $ npm install emvc -g

Next, create an application and install dependencies.

    $ emvc create hello
    $ cd hello
    $ npm install

Start the server.

    $ emvc server

The application is available at [localhost:3000](http://localhost:3000).

Start the server with node debug mode

	$ emvc server --debug (node --debug mode)
	$ emvc server --debug-brk (node --debug-brk mode)

Then you can use debug tools like [node-inspector](https://github.com/dannycoates/node-inspector) to debug your application as usual.

## Guide

The [emvc Guide](http://emvcjs.org/guide/) is the official source
for documentation, and is a handy reference to have available when developing
web applications powered by emvc.

## Datastore Adapters

<table>
  <thead>
    <tr><th>Adapter</th><th>Description</th><th>Developer</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="https://github.com/jaredhanson/locomotive-mongoose">Mongoose</a></td><td>Mongoose ODM adapter.</td><td></td></tr>
  </tbody>
</table>

## Tests

    $ npm install
    $ make test

## Credits

  - [Nicholas Penree](http://github.com/drudge)
  - [Sérgio Ramos](http://github.com/ramitos)
  - [Jared Hanson](http://github.com/jaredhanson)

## License

(The MIT License)

Copyright (c) 2016 Nicholas Penree

Based on work Copyright (c) 2011 Jared Hanson

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.