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


import ApiClient from "../ApiClient";
import CreateLesson from '../model/CreateLesson';
import CreateLessonPageOption from '../model/CreateLessonPageOption';
import Error from '../model/Error';
import Lesson from '../model/Lesson';
import LessonList from '../model/LessonList';
import LessonMultiplexToken from '../model/LessonMultiplexToken';
import LessonPage from '../model/LessonPage';
import LessonPageOption from '../model/LessonPageOption';
import LessonPublic from '../model/LessonPublic';

/**
* Lessons service.
* @module api/LessonsApi
* @version Develop
*/
export default class LessonsApi {

    /**
    * Constructs a new LessonsApi. 
    * @alias module:api/LessonsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiV2LessonsDocIdGet operation.
     * @callback module:api/LessonsApi~apiV2LessonsDocIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Lesson} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} docId 
     * @param {module:api/LessonsApi~apiV2LessonsDocIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Lesson}
     */
    apiV2LessonsDocIdGet(docId, callback) {
      let postBody = null;
      // verify the required parameter 'docId' is set
      if (docId === undefined || docId === null) {
        throw new Error("Missing the required parameter 'docId' when calling apiV2LessonsDocIdGet");
      }

      let pathParams = {
        'doc_id': docId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Lesson;
      return this.apiClient.callApi(
        '/api/v2/lessons/{doc_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2LessonsDocIdMultiplexTokenGet operation.
     * @callback module:api/LessonsApi~apiV2LessonsDocIdMultiplexTokenGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LessonMultiplexToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} docId 
     * @param {module:api/LessonsApi~apiV2LessonsDocIdMultiplexTokenGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LessonMultiplexToken}
     */
    apiV2LessonsDocIdMultiplexTokenGet(docId, callback) {
      let postBody = null;
      // verify the required parameter 'docId' is set
      if (docId === undefined || docId === null) {
        throw new Error("Missing the required parameter 'docId' when calling apiV2LessonsDocIdMultiplexTokenGet");
      }

      let pathParams = {
        'doc_id': docId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LessonMultiplexToken;
      return this.apiClient.callApi(
        '/api/v2/lessons/{doc_id}/multiplexToken', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2LessonsDocIdPageIdDelete operation.
     * @callback module:api/LessonsApi~apiV2LessonsDocIdPageIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} docId 
     * @param {Number} pageId 
     * @param {module:api/LessonsApi~apiV2LessonsDocIdPageIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiV2LessonsDocIdPageIdDelete(docId, pageId, callback) {
      let postBody = null;
      // verify the required parameter 'docId' is set
      if (docId === undefined || docId === null) {
        throw new Error("Missing the required parameter 'docId' when calling apiV2LessonsDocIdPageIdDelete");
      }
      // verify the required parameter 'pageId' is set
      if (pageId === undefined || pageId === null) {
        throw new Error("Missing the required parameter 'pageId' when calling apiV2LessonsDocIdPageIdDelete");
      }

      let pathParams = {
        'doc_id': docId,
        'page_id': pageId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/lessons/{doc_id}/{page_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2LessonsDocIdPageIdPatch operation.
     * @callback module:api/LessonsApi~apiV2LessonsDocIdPageIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LessonPage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} docId 
     * @param {Number} pageId 
     * @param {module:model/LessonPageOption} lessonPageOption 
     * @param {module:api/LessonsApi~apiV2LessonsDocIdPageIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LessonPage}
     */
    apiV2LessonsDocIdPageIdPatch(docId, pageId, lessonPageOption, callback) {
      let postBody = lessonPageOption;
      // verify the required parameter 'docId' is set
      if (docId === undefined || docId === null) {
        throw new Error("Missing the required parameter 'docId' when calling apiV2LessonsDocIdPageIdPatch");
      }
      // verify the required parameter 'pageId' is set
      if (pageId === undefined || pageId === null) {
        throw new Error("Missing the required parameter 'pageId' when calling apiV2LessonsDocIdPageIdPatch");
      }
      // verify the required parameter 'lessonPageOption' is set
      if (lessonPageOption === undefined || lessonPageOption === null) {
        throw new Error("Missing the required parameter 'lessonPageOption' when calling apiV2LessonsDocIdPageIdPatch");
      }

      let pathParams = {
        'doc_id': docId,
        'page_id': pageId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LessonPage;
      return this.apiClient.callApi(
        '/api/v2/lessons/{doc_id}/{page_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2LessonsDocIdPost operation.
     * @callback module:api/LessonsApi~apiV2LessonsDocIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LessonPage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} docId 
     * @param {module:model/CreateLessonPageOption} createLessonPageOption 
     * @param {module:api/LessonsApi~apiV2LessonsDocIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LessonPage}
     */
    apiV2LessonsDocIdPost(docId, createLessonPageOption, callback) {
      let postBody = createLessonPageOption;
      // verify the required parameter 'docId' is set
      if (docId === undefined || docId === null) {
        throw new Error("Missing the required parameter 'docId' when calling apiV2LessonsDocIdPost");
      }
      // verify the required parameter 'createLessonPageOption' is set
      if (createLessonPageOption === undefined || createLessonPageOption === null) {
        throw new Error("Missing the required parameter 'createLessonPageOption' when calling apiV2LessonsDocIdPost");
      }

      let pathParams = {
        'doc_id': docId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LessonPage;
      return this.apiClient.callApi(
        '/api/v2/lessons/{doc_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2LessonsGet operation.
     * @callback module:api/LessonsApi~apiV2LessonsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LessonList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit 
     * @param {Number} opts.page 
     * @param {module:api/LessonsApi~apiV2LessonsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LessonList}
     */
    apiV2LessonsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LessonList;
      return this.apiClient.callApi(
        '/api/v2/lessons', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2LessonsPost operation.
     * @callback module:api/LessonsApi~apiV2LessonsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Lesson} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/CreateLesson} createLesson 
     * @param {module:api/LessonsApi~apiV2LessonsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Lesson}
     */
    apiV2LessonsPost(createLesson, callback) {
      let postBody = createLesson;
      // verify the required parameter 'createLesson' is set
      if (createLesson === undefined || createLesson === null) {
        throw new Error("Missing the required parameter 'createLesson' when calling apiV2LessonsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Lesson;
      return this.apiClient.callApi(
        '/api/v2/lessons', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2LessonsPublicIdPublicGet operation.
     * @callback module:api/LessonsApi~apiV2LessonsPublicIdPublicGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LessonPublic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} publicId 
     * @param {module:api/LessonsApi~apiV2LessonsPublicIdPublicGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LessonPublic}
     */
    apiV2LessonsPublicIdPublicGet(publicId, callback) {
      let postBody = null;
      // verify the required parameter 'publicId' is set
      if (publicId === undefined || publicId === null) {
        throw new Error("Missing the required parameter 'publicId' when calling apiV2LessonsPublicIdPublicGet");
      }

      let pathParams = {
        'public_id': publicId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LessonPublic;
      return this.apiClient.callApi(
        '/api/v2/lessons/{public_id}/public', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
