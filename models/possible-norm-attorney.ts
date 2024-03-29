/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PossibleNormAttorneyScoreConstituents } from './possible-norm-attorney-score-constituents';

/**
 * 
 * @export
 * @interface PossibleNormAttorney
 */
export interface PossibleNormAttorney {
    /**
     * 
     * @type {string}
     * @memberof PossibleNormAttorney
     */
    'associatedNormJudgesAPI': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormAttorney
     */
    'associatedNormLawFirmsAPI': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormAttorney
     */
    'associatedNormPartiesAPI': string;
    /**
     * 
     * @type {boolean}
     * @memberof PossibleNormAttorney
     */
    'bestMatch': boolean;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormAttorney
     */
    'caseCountAnalyticsByNormAttorneyAPI': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormAttorney
     */
    'caseCountAnalyticsByOpposingNormAttorneyAPI': string;
    /**
     * 
     * @type {number}
     * @memberof PossibleNormAttorney
     */
    'confidenceScore': number;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormAttorney
     */
    'normAttorneyAPI': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormAttorney
     */
    'normAttorneyId': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormAttorney
     */
    'normAttorneyName': string;
    /**
     * Name of the object
     * @type {string}
     * @memberof PossibleNormAttorney
     */
    'object': string;
    /**
     * 
     * @type {PossibleNormAttorneyScoreConstituents}
     * @memberof PossibleNormAttorney
     */
    'scoreConstituents': PossibleNormAttorneyScoreConstituents;
}

