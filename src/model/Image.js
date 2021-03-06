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
 * The Image model module.
 * @module model/Image
 * @version Develop
 */
class Image {
    /**
     * Constructs a new <code>Image</code>.
     * @alias module:model/Image
     * @param id {String} 
     * @param name {String} 
     * @param url {String} 
     * @param urlThumbnail {String} 
     */
    constructor(id, name, url, urlThumbnail) { 
        
        Image.initialize(this, id, name, url, urlThumbnail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, url, urlThumbnail) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['url'] = url;
        obj['url_thumbnail'] = urlThumbnail;
    }

    /**
     * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Image} obj Optional instance to populate.
     * @return {module:model/Image} The populated <code>Image</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Image();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('url_thumbnail')) {
                obj['url_thumbnail'] = ApiClient.convertToType(data['url_thumbnail'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Image.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Image.prototype['name'] = undefined;

/**
 * @member {String} url
 */
Image.prototype['url'] = undefined;

/**
 * @member {String} url_thumbnail
 */
Image.prototype['url_thumbnail'] = undefined;






export default Image;

