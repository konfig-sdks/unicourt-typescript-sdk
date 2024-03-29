/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseCountAnalyticsByPartyRoleGroup } from './case-count-analytics-by-party-role-group';

/**
 * Case Count by Party Type Group Response.
 * @export
 * @interface CaseCountAnalyticsByPartyRoleGroupResponse
 */
export interface CaseCountAnalyticsByPartyRoleGroupResponse {
    /**
     * Next page of results if applicable.
     * @type {string}
     * @memberof CaseCountAnalyticsByPartyRoleGroupResponse
     */
    'nextPageAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof CaseCountAnalyticsByPartyRoleGroupResponse
     */
    'object': string;
    /**
     * Link to previous page of results.
     * @type {string}
     * @memberof CaseCountAnalyticsByPartyRoleGroupResponse
     */
    'previousPageAPI': string | null;
    /**
     * 
     * @type {Array<CaseCountAnalyticsByPartyRoleGroup>}
     * @memberof CaseCountAnalyticsByPartyRoleGroupResponse
     */
    'results': Array<CaseCountAnalyticsByPartyRoleGroup>;
    /**
     * Total no. of Cases for this criteria.
     * @type {number}
     * @memberof CaseCountAnalyticsByPartyRoleGroupResponse
     */
    'totalCaseCount': number;
    /**
     * Total no. of pages.
     * @type {number}
     * @memberof CaseCountAnalyticsByPartyRoleGroupResponse
     */
    'totalPages': number;
    /**
     * Total no. of Party Role Group for this criteria.
     * @type {number}
     * @memberof CaseCountAnalyticsByPartyRoleGroupResponse
     */
    'totalPartyRoleGroupCount': number;
}

