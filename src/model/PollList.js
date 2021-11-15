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
import Poll from './Poll';

/**
 * The PollList model module.
 * @module model/PollList
 * @version Develop
 */
class PollList {
    /**
     * Constructs a new <code>PollList</code>.
     * @alias module:model/PollList
     */
    constructor() { 
        
        PollList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PollList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PollList} obj Optional instance to populate.
     * @return {module:model/PollList} The populated <code>PollList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PollList();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Poll]);
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'Number');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('pages')) {
                obj['pages'] = ApiClient.convertToType(data['pages'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Poll>} items
 */
PollList.prototype['items'] = undefined;

/**
 * @member {Number} length
 */
PollList.prototype['length'] = undefined;

/**
 * @member {Number} page
 */
PollList.prototype['page'] = undefined;

/**
 * @member {Number} pages
 */
PollList.prototype['pages'] = undefined;






export default PollList;

