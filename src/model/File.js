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
 * The File model module.
 * @module model/File
 * @version Develop
 */
class File {
    /**
     * Constructs a new <code>File</code>.
     * @alias module:model/File
     * @param id {String} 
     * @param name {String} 
     * @param url {String} 
     */
    constructor(id, name, url) { 
        
        File.initialize(this, id, name, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, url) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>File</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/File} obj Optional instance to populate.
     * @return {module:model/File} The populated <code>File</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new File();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('mime')) {
                obj['mime'] = ApiClient.convertToType(data['mime'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
File.prototype['id'] = undefined;

/**
 * @member {String} mime
 */
File.prototype['mime'] = undefined;

/**
 * @member {String} name
 */
File.prototype['name'] = undefined;

/**
 * @member {String} url
 */
File.prototype['url'] = undefined;






export default File;

