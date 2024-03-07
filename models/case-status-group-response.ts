/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseStatusGroup } from './case-status-group';

/**
 * 
 * @export
 * @interface CaseStatusGroupResponse
 */
export interface CaseStatusGroupResponse {
    /**
     * 
     * @type {Array<CaseStatusGroup>}
     * @memberof CaseStatusGroupResponse
     */
    'caseStatusGroupArray': Array<CaseStatusGroup>;
    /**
     * Link to next page.
     * @type {string}
     * @memberof CaseStatusGroupResponse
     */
    'nextPageAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof CaseStatusGroupResponse
     */
    'object': string;
    /**
     * Page number for which results where obtained.
     * @type {number}
     * @memberof CaseStatusGroupResponse
     */
    'pageNumber': number;
    /**
     * Link to previous page.
     * @type {string}
     * @memberof CaseStatusGroupResponse
     */
    'previousPageAPI': string | null;
    /**
     * Total number of matches found.
     * @type {number}
     * @memberof CaseStatusGroupResponse
     */
    'totalCount': number;
    /**
     * Total number of pages to obtain all the objects.
     * @type {number}
     * @memberof CaseStatusGroupResponse
     */
    'totalPages': number;
}
