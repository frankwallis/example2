/// <reference path="./_references.d.ts" />
import angular = require("angular");

export var Module = angular.module("example2", [

]);

import ExampleService = require('./example-service');
Module.service("exampleService", ExampleService);
