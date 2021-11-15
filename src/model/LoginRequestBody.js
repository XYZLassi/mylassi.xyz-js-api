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

import ApiClient from '../ApiClient';

/**
 * The LoginRequestBody model module.
 * @module model/LoginRequestBody
 * @version Develop
 */
class LoginRequestBody {
    /**
     * Constructs a new <code>LoginRequestBody</code>.
     * @alias module:model/LoginRequestBody
     * @param password {String} 
     * @param username {String} 
     */
    constructor(password, username) { 
        
        LoginRequestBody.initialize(this, password, username);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, password, username) { 
        obj['password'] = password;
        obj['username'] = username;
    }

    /**
     * Constructs a <code>LoginRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoginRequestBody} obj Optional instance to populate.
     * @return {module:model/LoginRequestBody} The populated <code>LoginRequestBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoginRequestBody();

            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} password
 */
LoginRequestBody.prototype['password'] = undefined;

/**
 * @member {String} username
 */
LoginRequestBody.prototype['username'] = undefined;






export default LoginRequestBody;
