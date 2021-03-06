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
    instance = new MyLassiXyz.LessonsApi();
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

  describe('LessonsApi', function() {
    describe('apiV2LessonsDocIdGet', function() {
      it('should call apiV2LessonsDocIdGet successfully', function(done) {
        //uncomment below and update the code to test apiV2LessonsDocIdGet
        //instance.apiV2LessonsDocIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2LessonsDocIdMultiplexTokenGet', function() {
      it('should call apiV2LessonsDocIdMultiplexTokenGet successfully', function(done) {
        //uncomment below and update the code to test apiV2LessonsDocIdMultiplexTokenGet
        //instance.apiV2LessonsDocIdMultiplexTokenGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2LessonsDocIdPageIdDelete', function() {
      it('should call apiV2LessonsDocIdPageIdDelete successfully', function(done) {
        //uncomment below and update the code to test apiV2LessonsDocIdPageIdDelete
        //instance.apiV2LessonsDocIdPageIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2LessonsDocIdPageIdPatch', function() {
      it('should call apiV2LessonsDocIdPageIdPatch successfully', function(done) {
        //uncomment below and update the code to test apiV2LessonsDocIdPageIdPatch
        //instance.apiV2LessonsDocIdPageIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2LessonsDocIdPost', function() {
      it('should call apiV2LessonsDocIdPost successfully', function(done) {
        //uncomment below and update the code to test apiV2LessonsDocIdPost
        //instance.apiV2LessonsDocIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2LessonsGet', function() {
      it('should call apiV2LessonsGet successfully', function(done) {
        //uncomment below and update the code to test apiV2LessonsGet
        //instance.apiV2LessonsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2LessonsPost', function() {
      it('should call apiV2LessonsPost successfully', function(done) {
        //uncomment below and update the code to test apiV2LessonsPost
        //instance.apiV2LessonsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2LessonsPublicIdPublicGet', function() {
      it('should call apiV2LessonsPublicIdPublicGet successfully', function(done) {
        //uncomment below and update the code to test apiV2LessonsPublicIdPublicGet
        //instance.apiV2LessonsPublicIdPublicGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
