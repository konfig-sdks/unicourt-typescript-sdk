/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseTypeGroup } from './case-type-group';

/**
 * 
 * @export
 * @interface CaseCountAnalyticsByCaseTypeGroup
 */
export interface CaseCountAnalyticsByCaseTypeGroup {
    /**
     * 
     * @type {number}
     * @memberof CaseCountAnalyticsByCaseTypeGroup
     */
    'caseCount': number;
    /**
     * Link to cases for this criteria.
     * @type {string}
     * @memberof CaseCountAnalyticsByCaseTypeGroup
     */
    'caseSearchAPI': string;
    /**
     * 
     * @type {CaseTypeGroup}
     * @memberof CaseCountAnalyticsByCaseTypeGroup
     */
    'caseTypeGroup': CaseTypeGroup;
    /**
     * 
     * @type {string}
     * @memberof CaseCountAnalyticsByCaseTypeGroup
     */
    'object': string;
}

