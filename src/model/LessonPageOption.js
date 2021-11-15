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
import LessonPageVariable from './LessonPageVariable';

/**
 * The LessonPageOption model module.
 * @module model/LessonPageOption
 * @version Develop
 */
class LessonPageOption {
    /**
     * Constructs a new <code>LessonPageOption</code>.
     * @alias module:model/LessonPageOption
     */
    constructor() { 
        
        LessonPageOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LessonPageOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LessonPageOption} obj Optional instance to populate.
     * @return {module:model/LessonPageOption} The populated <code>LessonPageOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LessonPageOption();

            if (data.hasOwnProperty('base_template_id')) {
                obj['base_template_id'] = ApiClient.convertToType(data['base_template_id'], 'Number');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], [LessonPageVariable]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} base_template_id
 */
LessonPageOption.prototype['base_template_id'] = undefined;

/**
 * @member {String} note
 */
LessonPageOption.prototype['note'] = undefined;

/**
 * @member {Array.<module:model/LessonPageVariable>} variables
 */
LessonPageOption.prototype['variables'] = undefined;






export default LessonPageOption;

