/**
 * MyLassi.XYZ
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: Develop
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MyLassiXyz);
  }
}(this, function(expect, MyLassiXyz) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MyLassiXyz.PollSession();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PollSession', function() {
    it('should create an instance of PollSession', function() {
      // uncomment below and update the code to test PollSession
      //var instance = new MyLassiXyz.PollSession();
      //expect(instance).to.be.a(MyLassiXyz.PollSession);
    });

    it('should have the property isRunning (base name: "is_running")', function() {
      // uncomment below and update the code to test the property isRunning
      //var instance = new MyLassiXyz.PollSession();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new MyLassiXyz.PollSession();
      //expect(instance).to.be();
    });

    it('should have the property votes (base name: "votes")', function() {
      // uncomment below and update the code to test the property votes
      //var instance = new MyLassiXyz.PollSession();
      //expect(instance).to.be();
    });

  });

}));
