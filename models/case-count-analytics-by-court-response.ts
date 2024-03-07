/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseCountAnalyticsByCourt } from './case-count-analytics-by-court';

/**
 * Case Counts by Court.
 * @export
 * @interface CaseCountAnalyticsByCourtResponse
 */
export interface CaseCountAnalyticsByCourtResponse {
    /**
     * Next page of results if applicable.
     * @type {string}
     * @memberof CaseCountAnalyticsByCourtResponse
     */
    'nextPageAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof CaseCountAnalyticsByCourtResponse
     */
    'object': string;
    /**
     * Link to previous page of results.
     * @type {string}
     * @memberof CaseCountAnalyticsByCourtResponse
     */
    'previousPageAPI': string | null;
    /**
     * 
     * @type {Array<CaseCountAnalyticsByCourt>}
     * @memberof CaseCountAnalyticsByCourtResponse
     */
    'results': Array<CaseCountAnalyticsByCourt>;
    /**
     * Total no. of Cases for this criteria.
     * @type {number}
     * @memberof CaseCountAnalyticsByCourtResponse
     */
    'totalCaseCount': number;
    /**
     * Total no. of Court for this criteria.
     * @type {number}
     * @memberof CaseCountAnalyticsByCourtResponse
     */
    'totalCourtCount': number;
    /**
     * Total no. of pages.
     * @type {number}
     * @memberof CaseCountAnalyticsByCourtResponse
     */
    'totalPages': number;
}

