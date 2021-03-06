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
    instance = new MyLassiXyz.CreateLessonPageOption();
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

  describe('CreateLessonPageOption', function() {
    it('should create an instance of CreateLessonPageOption', function() {
      // uncomment below and update the code to test CreateLessonPageOption
      //var instance = new MyLassiXyz.CreateLessonPageOption();
      //expect(instance).to.be.a(MyLassiXyz.CreateLessonPageOption);
    });

    it('should have the property baseTemplateId (base name: "base_template_id")', function() {
      // uncomment below and update the code to test the property baseTemplateId
      //var instance = new MyLassiXyz.CreateLessonPageOption();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instance = new MyLassiXyz.CreateLessonPageOption();
      //expect(instance).to.be();
    });

    it('should have the property previousPage (base name: "previous_page")', function() {
      // uncomment below and update the code to test the property previousPage
      //var instance = new MyLassiXyz.CreateLessonPageOption();
      //expect(instance).to.be();
    });

  });

}));
