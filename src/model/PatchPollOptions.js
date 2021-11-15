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
import PollLabel from './PollLabel';

/**
 * The PatchPollOptions model module.
 * @module model/PatchPollOptions
 * @version Develop
 */
class PatchPollOptions {
    /**
     * Constructs a new <code>PatchPollOptions</code>.
     * @alias module:model/PatchPollOptions
     */
    constructor() { 
        
        PatchPollOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchPollOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchPollOptions} obj Optional instance to populate.
     * @return {module:model/PatchPollOptions} The populated <code>PatchPollOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchPollOptions();

            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], [PollLabel]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/PollLabel>} labels
 */
PatchPollOptions.prototype['labels'] = undefined;

/**
 * @member {String} name
 */
PatchPollOptions.prototype['name'] = undefined;






export default PatchPollOptions;
