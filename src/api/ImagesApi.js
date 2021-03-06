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
import Error from '../model/Error';
import Image from '../model/Image';
import ImageList from '../model/ImageList';

/**
* Images service.
* @module api/ImagesApi
* @version Develop
*/
export default class ImagesApi {

    /**
    * Constructs a new ImagesApi. 
    * @alias module:api/ImagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiV2ImagesDocIdGet operation.
     * @callback module:api/ImagesApi~apiV2ImagesDocIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Image} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} docId 
     * @param {module:api/ImagesApi~apiV2ImagesDocIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Image}
     */
    apiV2ImagesDocIdGet(docId, callback) {
      let postBody = null;
      // verify the required parameter 'docId' is set
      if (docId === undefined || docId === null) {
        throw new Error("Missing the required parameter 'docId' when calling apiV2ImagesDocIdGet");
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
      let returnType = Image;
      return this.apiClient.callApi(
        '/api/v2/images/{doc_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2ImagesGet operation.
     * @callback module:api/ImagesApi~apiV2ImagesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ImagesApi~apiV2ImagesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImageList}
     */
    apiV2ImagesGet(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = ImageList;
      return this.apiClient.callApi(
        '/api/v2/images', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
