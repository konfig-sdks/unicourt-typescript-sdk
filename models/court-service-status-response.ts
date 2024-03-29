/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CourtServiceStatus } from './court-service-status';

/**
 * 
 * @export
 * @interface CourtServiceStatusResponse
 */
export interface CourtServiceStatusResponse {
    /**
     * 
     * @type {Array<CourtServiceStatus>}
     * @memberof CourtServiceStatusResponse
     */
    'courtServiceStatusArray': Array<CourtServiceStatus>;
    /**
     * Link to next page.
     * @type {string}
     * @memberof CourtServiceStatusResponse
     */
    'nextPageAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof CourtServiceStatusResponse
     */
    'object': string;
    /**
     * Page number for which results where obtained.
     * @type {number}
     * @memberof CourtServiceStatusResponse
     */
    'pageNumber': number;
    /**
     * Link to previous page.
     * @type {string}
     * @memberof CourtServiceStatusResponse
     */
    'previousPageAPI': string | null;
    /**
     * Total number of matches found.
     * @type {number}
     * @memberof CourtServiceStatusResponse
     */
    'totalCount': number;
    /**
     * Total number of pages to obtain all the objects.
     * @type {number}
     * @memberof CourtServiceStatusResponse
     */
    'totalPages': number;
}

