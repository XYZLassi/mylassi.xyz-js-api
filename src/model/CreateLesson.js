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
 * The CreateLesson model module.
 * @module model/CreateLesson
 * @version Develop
 */
class CreateLesson {
    /**
     * Constructs a new <code>CreateLesson</code>.
     * @alias module:model/CreateLesson
     * @param name {String} 
     */
    constructor(name) { 
        
        CreateLesson.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateLesson</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLesson} obj Optional instance to populate.
     * @return {module:model/CreateLesson} The populated <code>CreateLesson</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLesson();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CreateLesson.prototype['name'] = undefined;






export default CreateLesson;
