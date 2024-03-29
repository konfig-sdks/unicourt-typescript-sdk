/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PartyRoleGroup } from './party-role-group';

/**
 * 
 * @export
 * @interface PartyRoleGroupResponse
 */
export interface PartyRoleGroupResponse {
    /**
     * Link to next page.
     * @type {string}
     * @memberof PartyRoleGroupResponse
     */
    'nextPageAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof PartyRoleGroupResponse
     */
    'object': string;
    /**
     * Page number for which results where obtained.
     * @type {number}
     * @memberof PartyRoleGroupResponse
     */
    'pageNumber': number;
    /**
     * 
     * @type {Array<PartyRoleGroup>}
     * @memberof PartyRoleGroupResponse
     */
    'partyRoleGroupArray': Array<PartyRoleGroup>;
    /**
     * Link to previous page.
     * @type {string}
     * @memberof PartyRoleGroupResponse
     */
    'previousPageAPI': string | null;
    /**
     * Total number of matches found.
     * @type {number}
     * @memberof PartyRoleGroupResponse
     */
    'totalCount': number;
    /**
     * Total number of pages to obtain all the objects.
     * @type {number}
     * @memberof PartyRoleGroupResponse
     */
    'totalPages': number;
}

