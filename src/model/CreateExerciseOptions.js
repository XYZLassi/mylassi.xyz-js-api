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
 * The CreateExerciseOptions model module.
 * @module model/CreateExerciseOptions
 * @version Develop
 */
class CreateExerciseOptions {
    /**
     * Constructs a new <code>CreateExerciseOptions</code>.
     * @alias module:model/CreateExerciseOptions
     * @param title {String} 
     */
    constructor(title) { 
        
        CreateExerciseOptions.initialize(this, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title) { 
        obj['title'] = title;
    }

    /**
     * Constructs a <code>CreateExerciseOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateExerciseOptions} obj Optional instance to populate.
     * @return {module:model/CreateExerciseOptions} The populated <code>CreateExerciseOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateExerciseOptions();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'String');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
            if (data.hasOwnProperty('solution_text')) {
                obj['solution_text'] = ApiClient.convertToType(data['solution_text'], 'String');
            }
            if (data.hasOwnProperty('task_text')) {
                obj['task_text'] = ApiClient.convertToType(data['task_text'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
CreateExerciseOptions.prototype['description'] = undefined;

/**
 * @member {String} level
 */
CreateExerciseOptions.prototype['level'] = undefined;

/**
 * @member {Boolean} public
 */
CreateExerciseOptions.prototype['public'] = undefined;

/**
 * @member {String} solution_text
 */
CreateExerciseOptions.prototype['solution_text'] = undefined;

/**
 * @member {String} task_text
 */
CreateExerciseOptions.prototype['task_text'] = undefined;

/**
 * @member {String} title
 */
CreateExerciseOptions.prototype['title'] = undefined;






export default CreateExerciseOptions;
