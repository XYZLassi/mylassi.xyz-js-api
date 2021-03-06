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
    instance = new MyLassiXyz.PollsApi();
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

  describe('PollsApi', function() {
    describe('apiV2PollsDocIdGet', function() {
      it('should call apiV2PollsDocIdGet successfully', function(done) {
        //uncomment below and update the code to test apiV2PollsDocIdGet
        //instance.apiV2PollsDocIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2PollsDocIdPatch', function() {
      it('should call apiV2PollsDocIdPatch successfully', function(done) {
        //uncomment below and update the code to test apiV2PollsDocIdPatch
        //instance.apiV2PollsDocIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2PollsDocIdSessionNameGet', function() {
      it('should call apiV2PollsDocIdSessionNameGet successfully', function(done) {
        //uncomment below and update the code to test apiV2PollsDocIdSessionNameGet
        //instance.apiV2PollsDocIdSessionNameGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2PollsDocIdSessionNameStartPost', function() {
      it('should call apiV2PollsDocIdSessionNameStartPost successfully', function(done) {
        //uncomment below and update the code to test apiV2PollsDocIdSessionNameStartPost
        //instance.apiV2PollsDocIdSessionNameStartPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2PollsDocIdSessionNameStopPost', function() {
      it('should call apiV2PollsDocIdSessionNameStopPost successfully', function(done) {
        //uncomment below and update the code to test apiV2PollsDocIdSessionNameStopPost
        //instance.apiV2PollsDocIdSessionNameStopPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2PollsDocIdSessionNameVoteLabelNamePost', function() {
      it('should call apiV2PollsDocIdSessionNameVoteLabelNamePost successfully', function(done) {
        //uncomment below and update the code to test apiV2PollsDocIdSessionNameVoteLabelNamePost
        //instance.apiV2PollsDocIdSessionNameVoteLabelNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2PollsGet', function() {
      it('should call apiV2PollsGet successfully', function(done) {
        //uncomment below and update the code to test apiV2PollsGet
        //instance.apiV2PollsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2PollsPost', function() {
      it('should call apiV2PollsPost successfully', function(done) {
        //uncomment below and update the code to test apiV2PollsPost
        //instance.apiV2PollsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
