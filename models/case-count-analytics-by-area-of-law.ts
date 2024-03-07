/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AreaOfLaw } from './area-of-law';

/**
 * 
 * @export
 * @interface CaseCountAnalyticsByAreaOfLaw
 */
export interface CaseCountAnalyticsByAreaOfLaw {
    /**
     * 
     * @type {AreaOfLaw}
     * @memberof CaseCountAnalyticsByAreaOfLaw
     */
    'areaOfLaw': AreaOfLaw;
    /**
     * 
     * @type {number}
     * @memberof CaseCountAnalyticsByAreaOfLaw
     */
    'caseCount': number;
    /**
     * Link to cases for this criteria.
     * @type {string}
     * @memberof CaseCountAnalyticsByAreaOfLaw
     */
    'caseSearchAPI': string;
    /**
     * 
     * @type {string}
     * @memberof CaseCountAnalyticsByAreaOfLaw
     */
    'object': string;
}

