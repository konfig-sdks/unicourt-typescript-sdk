/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NormAttorneySearchResult } from './norm-attorney-search-result';

/**
 * 
 * @export
 * @interface NormAttorneySearchResponse
 */
export interface NormAttorneySearchResponse {
    /**
     * Link to next page.
     * @type {string}
     * @memberof NormAttorneySearchResponse
     */
    'nextPageAPI': string | null;
    /**
     * Query been sent by client
     * @type {string}
     * @memberof NormAttorneySearchResponse
     */
    'normAttorneySearchId': string;
    /**
     * 
     * @type {Array<NormAttorneySearchResult>}
     * @memberof NormAttorneySearchResponse
     */
    'normAttorneySearchResultArray': Array<NormAttorneySearchResult>;
    /**
     * 
     * @type {string}
     * @memberof NormAttorneySearchResponse
     */
    'object': string;
    /**
     * 
     * @type {number}
     * @memberof NormAttorneySearchResponse
     */
    'pageNumber': number;
    /**
     * Link to previous page.
     * @type {string}
     * @memberof NormAttorneySearchResponse
     */
    'previousPageAPI': string | null;
    /**
     * Query been sent by client
     * @type {string}
     * @memberof NormAttorneySearchResponse
     */
    'q': string;
    /**
     * The number of matches that were found in the index.
     * @type {number}
     * @memberof NormAttorneySearchResponse
     */
    'totalCount': number;
    /**
     * Total pages for matches that were found in the index.
     * @type {number}
     * @memberof NormAttorneySearchResponse
     */
    'totalPages': number;
}
