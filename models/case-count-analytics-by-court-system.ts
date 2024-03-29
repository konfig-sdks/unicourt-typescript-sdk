/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseCountAnalyticsByCourtGeo } from './case-count-analytics-by-court-geo';
import { CourtSystem } from './court-system';

/**
 * 
 * @export
 * @interface CaseCountAnalyticsByCourtSystem
 */
export interface CaseCountAnalyticsByCourtSystem {
    /**
     * 
     * @type {CaseCountAnalyticsByCourtGeo}
     * @memberof CaseCountAnalyticsByCourtSystem
     */
    'Geo': CaseCountAnalyticsByCourtGeo | null;
    /**
     * 
     * @type {number}
     * @memberof CaseCountAnalyticsByCourtSystem
     */
    'caseCount': number;
    /**
     * link to cases for this criteria.
     * @type {string}
     * @memberof CaseCountAnalyticsByCourtSystem
     */
    'caseSearchAPI': string;
    /**
     * 
     * @type {CourtSystem}
     * @memberof CaseCountAnalyticsByCourtSystem
     */
    'courtSystem': CourtSystem;
    /**
     * 
     * @type {string}
     * @memberof CaseCountAnalyticsByCourtSystem
     */
    'object': string;
}

