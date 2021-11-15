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
    instance = new MyLassiXyz.LessonInfo();
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

  describe('LessonInfo', function() {
    it('should create an instance of LessonInfo', function() {
      // uncomment below and update the code to test LessonInfo
      //var instance = new MyLassiXyz.LessonInfo();
      //expect(instance).to.be.a(MyLassiXyz.LessonInfo);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MyLassiXyz.LessonInfo();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new MyLassiXyz.LessonInfo();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "owner_id")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new MyLassiXyz.LessonInfo();
      //expect(instance).to.be();
    });

    it('should have the property publicId (base name: "public_id")', function() {
      // uncomment below and update the code to test the property publicId
      //var instance = new MyLassiXyz.LessonInfo();
      //expect(instance).to.be();
    });

  });

}));