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
    instance = new MyLassiXyz.ImageList();
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

  describe('ImageList', function() {
    it('should create an instance of ImageList', function() {
      // uncomment below and update the code to test ImageList
      //var instance = new MyLassiXyz.ImageList();
      //expect(instance).to.be.a(MyLassiXyz.ImageList);
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new MyLassiXyz.ImageList();
      //expect(instance).to.be();
    });

    it('should have the property length (base name: "length")', function() {
      // uncomment below and update the code to test the property length
      //var instance = new MyLassiXyz.ImageList();
      //expect(instance).to.be();
    });

    it('should have the property page (base name: "page")', function() {
      // uncomment below and update the code to test the property page
      //var instance = new MyLassiXyz.ImageList();
      //expect(instance).to.be();
    });

    it('should have the property pages (base name: "pages")', function() {
      // uncomment below and update the code to test the property pages
      //var instance = new MyLassiXyz.ImageList();
      //expect(instance).to.be();
    });

  });

}));
