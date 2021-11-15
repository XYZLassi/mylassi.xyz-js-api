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
import LessonPage from './LessonPage';

/**
 * The Lesson model module.
 * @module model/Lesson
 * @version Develop
 */
class Lesson {
    /**
     * Constructs a new <code>Lesson</code>.
     * @alias module:model/Lesson
     * @param id {Number} 
     * @param name {String} 
     * @param ownerId {Number} 
     * @param publicId {String} 
     */
    constructor(id, name, ownerId, publicId) { 
        
        Lesson.initialize(this, id, name, ownerId, publicId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, ownerId, publicId) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['owner_id'] = ownerId;
        obj['public_id'] = publicId;
    }

    /**
     * Constructs a <code>Lesson</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Lesson} obj Optional instance to populate.
     * @return {module:model/Lesson} The populated <code>Lesson</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Lesson();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');
            }
            if (data.hasOwnProperty('pages')) {
                obj['pages'] = ApiClient.convertToType(data['pages'], [LessonPage]);
            }
            if (data.hasOwnProperty('public_id')) {
                obj['public_id'] = ApiClient.convertToType(data['public_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Lesson.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Lesson.prototype['name'] = undefined;

/**
 * @member {Number} owner_id
 */
Lesson.prototype['owner_id'] = undefined;

/**
 * @member {Array.<module:model/LessonPage>} pages
 */
Lesson.prototype['pages'] = undefined;

/**
 * @member {String} public_id
 */
Lesson.prototype['public_id'] = undefined;






export default Lesson;
