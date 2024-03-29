/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NormJudgeSearchResult } from './norm-judge-search-result';

/**
 * 
 * @export
 * @interface NormJudgeSearchResponse
 */
export interface NormJudgeSearchResponse {
    /**
     * Link to next page.
     * @type {string}
     * @memberof NormJudgeSearchResponse
     */
    'nextPageAPI': string | null;
    /**
     * Query been sent by client
     * @type {string}
     * @memberof NormJudgeSearchResponse
     */
    'normJudgeSearchId': string;
    /**
     * 
     * @type {Array<NormJudgeSearchResult>}
     * @memberof NormJudgeSearchResponse
     */
    'normJudgeSearchResultArray': Array<NormJudgeSearchResult>;
    /**
     * 
     * @type {string}
     * @memberof NormJudgeSearchResponse
     */
    'object': string;
    /**
     * 
     * @type {number}
     * @memberof NormJudgeSearchResponse
     */
    'pageNumber': number;
    /**
     * Link to previous page.
     * @type {string}
     * @memberof NormJudgeSearchResponse
     */
    'previousPageAPI': string | null;
    /**
     * Query been sent by client
     * @type {string}
     * @memberof NormJudgeSearchResponse
     */
    'q': string;
    /**
     * The number of matches that were found in the index.
     * @type {number}
     * @memberof NormJudgeSearchResponse
     */
    'totalCount': number;
    /**
     * Total pages for matches that were found in the index.
     * @type {number}
     * @memberof NormJudgeSearchResponse
     */
    'totalPages': number;
}

