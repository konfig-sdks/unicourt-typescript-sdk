/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseClass } from './case-class';

/**
 * 
 * @export
 * @interface CaseCountAnalyticsByCaseClass
 */
export interface CaseCountAnalyticsByCaseClass {
    /**
     * 
     * @type {CaseClass}
     * @memberof CaseCountAnalyticsByCaseClass
     */
    'caseClass': CaseClass;
    /**
     * 
     * @type {number}
     * @memberof CaseCountAnalyticsByCaseClass
     */
    'caseCount': number;
    /**
     * Link to cases for this criteria.
     * @type {string}
     * @memberof CaseCountAnalyticsByCaseClass
     */
    'caseSearchAPI': string;
    /**
     * 
     * @type {string}
     * @memberof CaseCountAnalyticsByCaseClass
     */
    'object': string;
}

