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
 * The PollSessionInfo model module.
 * @module model/PollSessionInfo
 * @version Develop
 */
class PollSessionInfo {
    /**
     * Constructs a new <code>PollSessionInfo</code>.
     * @alias module:model/PollSessionInfo
     * @param isRunning {Boolean} 
     * @param name {String} 
     */
    constructor(isRunning, name) { 
        
        PollSessionInfo.initialize(this, isRunning, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isRunning, name) { 
        obj['is_running'] = isRunning;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>PollSessionInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PollSessionInfo} obj Optional instance to populate.
     * @return {module:model/PollSessionInfo} The populated <code>PollSessionInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PollSessionInfo();

            if (data.hasOwnProperty('is_running')) {
                obj['is_running'] = ApiClient.convertToType(data['is_running'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} is_running
 */
PollSessionInfo.prototype['is_running'] = undefined;

/**
 * @member {String} name
 */
PollSessionInfo.prototype['name'] = undefined;






export default PollSessionInfo;

