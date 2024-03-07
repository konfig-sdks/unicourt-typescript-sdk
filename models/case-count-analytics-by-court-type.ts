/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseCountAnalyticsByCourtGeo } from './case-count-analytics-by-court-geo';
import { CourtType } from './court-type';

/**
 * 
 * @export
 * @interface CaseCountAnalyticsByCourtType
 */
export interface CaseCountAnalyticsByCourtType {
    /**
     * 
     * @type {CaseCountAnalyticsByCourtGeo}
     * @memberof CaseCountAnalyticsByCourtType
     */
    'Geo': CaseCountAnalyticsByCourtGeo | null;
    /**
     * 
     * @type {number}
     * @memberof CaseCountAnalyticsByCourtType
     */
    'caseCount': number;
    /**
     * link to cases for this criteria.
     * @type {string}
     * @memberof CaseCountAnalyticsByCourtType
     */
    'caseSearchAPI': string;
    /**
     * 
     * @type {CourtType}
     * @memberof CaseCountAnalyticsByCourtType
     */
    'courtType': CourtType;
    /**
     * 
     * @type {string}
     * @memberof CaseCountAnalyticsByCourtType
     */
    'object': string;
}
