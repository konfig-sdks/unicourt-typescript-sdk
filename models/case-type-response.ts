/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseType } from './case-type';

/**
 * 
 * @export
 * @interface CaseTypeResponse
 */
export interface CaseTypeResponse {
    /**
     * 
     * @type {Array<CaseType>}
     * @memberof CaseTypeResponse
     */
    'caseTypeArray': Array<CaseType>;
    /**
     * Link to next page.
     * @type {string}
     * @memberof CaseTypeResponse
     */
    'nextPageAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof CaseTypeResponse
     */
    'object': string;
    /**
     * Page number for which results where obtained.
     * @type {number}
     * @memberof CaseTypeResponse
     */
    'pageNumber': number;
    /**
     * Link to previous page.
     * @type {string}
     * @memberof CaseTypeResponse
     */
    'previousPageAPI': string | null;
    /**
     * Total number of matches found.
     * @type {number}
     * @memberof CaseTypeResponse
     */
    'totalCount': number;
    /**
     * Total number of pages to obtain all the objects.
     * @type {number}
     * @memberof CaseTypeResponse
     */
    'totalPages': number;
}
