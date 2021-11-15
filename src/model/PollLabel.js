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
 * The PollLabel model module.
 * @module model/PollLabel
 * @version Develop
 */
class PollLabel {
    /**
     * Constructs a new <code>PollLabel</code>.
     * @alias module:model/PollLabel
     * @param label {String} 
     */
    constructor(label) { 
        
        PollLabel.initialize(this, label);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, label) { 
        obj['label'] = label;
    }

    /**
     * Constructs a <code>PollLabel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PollLabel} obj Optional instance to populate.
     * @return {module:model/PollLabel} The populated <code>PollLabel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PollLabel();

            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} label
 */
PollLabel.prototype['label'] = undefined;






export default PollLabel;

