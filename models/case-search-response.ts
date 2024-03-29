/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseSearchResult } from './case-search-result';

/**
 * 
 * @export
 * @interface CaseSearchResponse
 */
export interface CaseSearchResponse {
    /**
     * Query been sent by client
     * @type {string}
     * @memberof CaseSearchResponse
     */
    'caseSearchId': string;
    /**
     * 
     * @type {Array<CaseSearchResult>}
     * @memberof CaseSearchResponse
     */
    'caseSearchResultArray': Array<CaseSearchResult>;
    /**
     * Link to next page.
     * @type {string}
     * @memberof CaseSearchResponse
     */
    'nextPageAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof CaseSearchResponse
     */
    'object': string;
    /**
     * 
     * @type {number}
     * @memberof CaseSearchResponse
     */
    'pageNumber': number;
    /**
     * Link to previous page.
     * @type {string}
     * @memberof CaseSearchResponse
     */
    'previousPageAPI': string | null;
    /**
     * Query been sent by client
     * @type {string}
     * @memberof CaseSearchResponse
     */
    'q': string;
    /**
     * The number of matches that were found in the index.
     * @type {number}
     * @memberof CaseSearchResponse
     */
    'totalCount': number;
    /**
     * Total pages for matches that were found in the index.
     * @type {number}
     * @memberof CaseSearchResponse
     */
    'totalPages': number;
}

