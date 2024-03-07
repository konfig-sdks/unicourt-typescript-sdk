/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseCountAnalyticsByAreaOfLaw } from './case-count-analytics-by-area-of-law';

/**
 * Case Counts by Area Of Law Response.
 * @export
 * @interface CaseCountAnalyticsByAreaOfLawResponse
 */
export interface CaseCountAnalyticsByAreaOfLawResponse {
    /**
     * Next page of results if applicable.
     * @type {string}
     * @memberof CaseCountAnalyticsByAreaOfLawResponse
     */
    'nextPageAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof CaseCountAnalyticsByAreaOfLawResponse
     */
    'object': string;
    /**
     * Link to previous page of results.
     * @type {string}
     * @memberof CaseCountAnalyticsByAreaOfLawResponse
     */
    'previousPageAPI': string | null;
    /**
     * 
     * @type {Array<CaseCountAnalyticsByAreaOfLaw>}
     * @memberof CaseCountAnalyticsByAreaOfLawResponse
     */
    'results': Array<CaseCountAnalyticsByAreaOfLaw>;
    /**
     * Total no. of Area Of Law for this criteria.
     * @type {number}
     * @memberof CaseCountAnalyticsByAreaOfLawResponse
     */
    'totalAreaOfLawCount': number;
    /**
     * Total no. of Cases for this criteria.
     * @type {number}
     * @memberof CaseCountAnalyticsByAreaOfLawResponse
     */
    'totalCaseCount': number;
    /**
     * Total no. of pages.
     * @type {number}
     * @memberof CaseCountAnalyticsByAreaOfLawResponse
     */
    'totalPages': number;
}
