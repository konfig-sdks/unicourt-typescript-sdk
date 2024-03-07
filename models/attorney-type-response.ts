/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AttorneyType } from './attorney-type';

/**
 * 
 * @export
 * @interface AttorneyTypeResponse
 */
export interface AttorneyTypeResponse {
    /**
     * 
     * @type {Array<AttorneyType>}
     * @memberof AttorneyTypeResponse
     */
    'attorneyTypeArray': Array<AttorneyType>;
    /**
     * Link to next page.
     * @type {string}
     * @memberof AttorneyTypeResponse
     */
    'nextPageAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyTypeResponse
     */
    'object': string;
    /**
     * Page number for which results where obtained.
     * @type {number}
     * @memberof AttorneyTypeResponse
     */
    'pageNumber': number;
    /**
     * Link to previous page.
     * @type {string}
     * @memberof AttorneyTypeResponse
     */
    'previousPageAPI': string | null;
    /**
     * Total number of matches found.
     * @type {number}
     * @memberof AttorneyTypeResponse
     */
    'totalCount': number;
    /**
     * Total number of pages to obtain all the objects.
     * @type {number}
     * @memberof AttorneyTypeResponse
     */
    'totalPages': number;
}
