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
    instance = new MyLassiXyz.ExercisesApi();
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

  describe('ExercisesApi', function() {
    describe('apiV2ExercisesDocIdDelete', function() {
      it('should call apiV2ExercisesDocIdDelete successfully', function(done) {
        //uncomment below and update the code to test apiV2ExercisesDocIdDelete
        //instance.apiV2ExercisesDocIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2ExercisesDocIdGet', function() {
      it('should call apiV2ExercisesDocIdGet successfully', function(done) {
        //uncomment below and update the code to test apiV2ExercisesDocIdGet
        //instance.apiV2ExercisesDocIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2ExercisesDocIdPatch', function() {
      it('should call apiV2ExercisesDocIdPatch successfully', function(done) {
        //uncomment below and update the code to test apiV2ExercisesDocIdPatch
        //instance.apiV2ExercisesDocIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2ExercisesGet', function() {
      it('should call apiV2ExercisesGet successfully', function(done) {
        //uncomment below and update the code to test apiV2ExercisesGet
        //instance.apiV2ExercisesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2ExercisesPost', function() {
      it('should call apiV2ExercisesPost successfully', function(done) {
        //uncomment below and update the code to test apiV2ExercisesPost
        //instance.apiV2ExercisesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
