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
import LessonPageTemplate from './LessonPageTemplate';
import LessonPageVariable from './LessonPageVariable';

/**
 * The LessonPage model module.
 * @module model/LessonPage
 * @version Develop
 */
class LessonPage {
    /**
     * Constructs a new <code>LessonPage</code>.
     * @alias module:model/LessonPage
     * @param id {Number} 
     * @param order {Number} 
     */
    constructor(id, order) { 
        
        LessonPage.initialize(this, id, order);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, order) { 
        obj['id'] = id;
        obj['order'] = order;
    }

    /**
     * Constructs a <code>LessonPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LessonPage} obj Optional instance to populate.
     * @return {module:model/LessonPage} The populated <code>LessonPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LessonPage();

            if (data.hasOwnProperty('base_template')) {
                obj['base_template'] = ApiClient.convertToType(data['base_template'], LessonPageTemplate);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'Number');
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], [LessonPageVariable]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LessonPageTemplate} base_template
 */
LessonPage.prototype['base_template'] = undefined;

/**
 * @member {Number} id
 */
LessonPage.prototype['id'] = undefined;

/**
 * @member {String} note
 */
LessonPage.prototype['note'] = undefined;

/**
 * @member {Number} order
 */
LessonPage.prototype['order'] = undefined;

/**
 * @member {Array.<module:model/LessonPageVariable>} variables
 */
LessonPage.prototype['variables'] = undefined;






export default LessonPage;
