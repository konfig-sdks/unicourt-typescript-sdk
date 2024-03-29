/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PossibleNormLawFirmScoreConstituents } from './possible-norm-law-firm-score-constituents';
import { PossibleNormLawFirmSourceDetails } from './possible-norm-law-firm-source-details';

/**
 * 
 * @export
 * @interface PossibleNormLawFirm
 */
export interface PossibleNormLawFirm {
    /**
     * 
     * @type {string}
     * @memberof PossibleNormLawFirm
     */
    'associatedNormAttorneyAPI': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormLawFirm
     */
    'associatedNormJudgeAPI': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormLawFirm
     */
    'associatedNormPartiesAPI': string;
    /**
     * 
     * @type {boolean}
     * @memberof PossibleNormLawFirm
     */
    'bestMatch': boolean;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormLawFirm
     */
    'caseCountAnalyticsByNormLawFirmAPI': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormLawFirm
     */
    'caseCountAnalyticsByOpposingNormLawFirmAPI': string;
    /**
     * 
     * @type {number}
     * @memberof PossibleNormLawFirm
     */
    'confidenceScore': number;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormLawFirm
     */
    'normLawFirmAPI': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormLawFirm
     */
    'normLawFirmId': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormLawFirm
     */
    'normLawFirmName': string;
    /**
     * Name of the object
     * @type {string}
     * @memberof PossibleNormLawFirm
     */
    'object': string;
    /**
     * 
     * @type {PossibleNormLawFirmScoreConstituents}
     * @memberof PossibleNormLawFirm
     */
    'scoreConstituents': PossibleNormLawFirmScoreConstituents;
    /**
     * 
     * @type {PossibleNormLawFirmSourceDetails}
     * @memberof PossibleNormLawFirm
     */
    'sourceDetails': PossibleNormLawFirmSourceDetails;
}

