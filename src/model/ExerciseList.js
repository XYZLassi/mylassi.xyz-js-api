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
import ExerciseInfo from './ExerciseInfo';

/**
 * The ExerciseList model module.
 * @module model/ExerciseList
 * @version Develop
 */
class ExerciseList {
    /**
     * Constructs a new <code>ExerciseList</code>.
     * @alias module:model/ExerciseList
     */
    constructor() { 
        
        ExerciseList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExerciseList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExerciseList} obj Optional instance to populate.
     * @return {module:model/ExerciseList} The populated <code>ExerciseList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExerciseList();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ExerciseInfo]);
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
 * @member {Array.<module:model/ExerciseInfo>} items
 */
ExerciseList.prototype['items'] = undefined;

/**
 * @member {Number} length
 */
ExerciseList.prototype['length'] = undefined;

/**
 * @member {Number} page
 */
ExerciseList.prototype['page'] = undefined;

/**
 * @member {Number} pages
 */
ExerciseList.prototype['pages'] = undefined;






export default ExerciseList;

