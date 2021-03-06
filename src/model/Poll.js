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
import PollSessionInfo from './PollSessionInfo';

/**
 * The Poll model module.
 * @module model/Poll
 * @version Develop
 */
class Poll {
    /**
     * Constructs a new <code>Poll</code>.
     * @alias module:model/Poll
     * @param id {Number} 
     * @param labels {Array.<module:model/PollLabel>} 
     * @param name {String} 
     * @param ownerId {Number} 
     * @param sessions {Array.<module:model/PollSessionInfo>} 
     */
    constructor(id, labels, name, ownerId, sessions) { 
        
        Poll.initialize(this, id, labels, name, ownerId, sessions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, labels, name, ownerId, sessions) { 
        obj['id'] = id;
        obj['labels'] = labels;
        obj['name'] = name;
        obj['owner_id'] = ownerId;
        obj['sessions'] = sessions;
    }

    /**
     * Constructs a <code>Poll</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Poll} obj Optional instance to populate.
     * @return {module:model/Poll} The populated <code>Poll</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Poll();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], [PollLabel]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');
            }
            if (data.hasOwnProperty('sessions')) {
                obj['sessions'] = ApiClient.convertToType(data['sessions'], [PollSessionInfo]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Poll.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/PollLabel>} labels
 */
Poll.prototype['labels'] = undefined;

/**
 * @member {String} name
 */
Poll.prototype['name'] = undefined;

/**
 * @member {Number} owner_id
 */
Poll.prototype['owner_id'] = undefined;

/**
 * @member {Array.<module:model/PollSessionInfo>} sessions
 */
Poll.prototype['sessions'] = undefined;






export default Poll;

