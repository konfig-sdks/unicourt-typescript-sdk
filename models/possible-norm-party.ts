/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PossibleNormPartyScoreConstituents } from './possible-norm-party-score-constituents';

/**
 * 
 * @export
 * @interface PossibleNormParty
 */
export interface PossibleNormParty {
    /**
     * 
     * @type {string}
     * @memberof PossibleNormParty
     */
    'associatedNormAttorneysAPI': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormParty
     */
    'associatedNormJudgesAPI': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormParty
     */
    'associatedNormLawFirmsAPI': string;
    /**
     * 
     * @type {boolean}
     * @memberof PossibleNormParty
     */
    'bestMatch': boolean;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormParty
     */
    'caseCountAnalyticsByNormPartyAPI': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormParty
     */
    'caseCountAnalyticsByOpposingNormPartyAPI': string;
    /**
     * 
     * @type {number}
     * @memberof PossibleNormParty
     */
    'confidenceScore': number;
    /**
     * Link to Details For the Party.
     * @type {string}
     * @memberof PossibleNormParty
     */
    'normPartyAPI': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormParty
     */
    'normPartyId': string;
    /**
     * 
     * @type {string}
     * @memberof PossibleNormParty
     */
    'normPartyName': string;
    /**
     * Name of the object
     * @type {string}
     * @memberof PossibleNormParty
     */
    'object': string;
    /**
     * 
     * @type {PossibleNormPartyScoreConstituents}
     * @memberof PossibleNormParty
     */
    'scoreConstituents': PossibleNormPartyScoreConstituents;
}

