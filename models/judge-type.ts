/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface JudgeType
 */
export interface JudgeType {
    /**
     * The date and time when it was first created. This date and time is in UTC. Formatted as YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof JudgeType
     */
    'createdDate': string;
    /**
     * 
     * @type {string}
     * @memberof JudgeType
     */
    'judgeTypeId': string;
    /**
     * 
     * @type {string}
     * @memberof JudgeType
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof JudgeType
     */
    'object': string;
}
