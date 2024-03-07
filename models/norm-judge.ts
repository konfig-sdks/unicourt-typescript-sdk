/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseAnalyticsAPI } from './case-analytics-api';
import { JudgeAnalyticsAPI } from './judge-analytics-api';
import { NormJudgePublicData } from './norm-judge-public-data';

/**
 * Norm Judge
 * @export
 * @interface NormJudge
 */
export interface NormJudge {
    /**
     * 
     * @type {CaseAnalyticsAPI}
     * @memberof NormJudge
     */
    'caseAnalyticsAPI': CaseAnalyticsAPI;
    /**
     * 
     * @type {string}
     * @memberof NormJudge
     */
    'caseSearchAPI': string;
    /**
     * 
     * @type {string}
     * @memberof NormJudge
     */
    'firstName': string;
    /**
     * 
     * @type {boolean}
     * @memberof NormJudge
     */
    'hasAssociatedPublicData': boolean;
    /**
     * 
     * @type {JudgeAnalyticsAPI}
     * @memberof NormJudge
     */
    'judgeAnalyticsAPI': JudgeAnalyticsAPI;
    /**
     * 
     * @type {Array<NormJudgePublicData>}
     * @memberof NormJudge
     */
    'judicialDataArray': Array<NormJudgePublicData>;
    /**
     * 
     * @type {string}
     * @memberof NormJudge
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof NormJudge
     */
    'middleName': string | null;
    /**
     * 
     * @type {string}
     * @memberof NormJudge
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof NormJudge
     */
    'normJudgeId': string;
    /**
     * 
     * @type {string}
     * @memberof NormJudge
     */
    'object': string;
}

