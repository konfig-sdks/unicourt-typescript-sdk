/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseStatus } from './case-status';
import { CaseType } from './case-type';
import { Court } from './court';
import { CourtLocation } from './court-location';
import { MatchedObject } from './matched-object';

/**
 * 
 * @export
 * @interface CaseSearchResult
 */
export interface CaseSearchResult {
    /**
     * 
     * @type {string}
     * @memberof CaseSearchResult
     */
    'caseAPI': string;
    /**
     * 
     * @type {string}
     * @memberof CaseSearchResult
     */
    'caseId': string;
    /**
     * 
     * @type {string}
     * @memberof CaseSearchResult
     */
    'caseName': string | null;
    /**
     * 
     * @type {string}
     * @memberof CaseSearchResult
     */
    'caseNumber': string;
    /**
     * 
     * @type {CaseStatus}
     * @memberof CaseSearchResult
     */
    'caseStatus': CaseStatus | null;
    /**
     * 
     * @type {CaseType}
     * @memberof CaseSearchResult
     */
    'caseType': CaseType | null;
    /**
     * 
     * @type {Court}
     * @memberof CaseSearchResult
     */
    'court': Court | null;
    /**
     * 
     * @type {CourtLocation}
     * @memberof CaseSearchResult
     */
    'courtLocation': CourtLocation | null;
    /**
     * 
     * @type {string}
     * @memberof CaseSearchResult
     */
    'filedDate': string;
    /**
     * 
     * @type {string}
     * @memberof CaseSearchResult
     */
    'firstFetchDate': string;
    /**
     * 
     * @type {string}
     * @memberof CaseSearchResult
     */
    'lastFetchDate': string;
    /**
     * 
     * @type {string}
     * @memberof CaseSearchResult
     */
    'lastFetchDateWithUpdates': string;
    /**
     * 
     * @type {Array<MatchedObject>}
     * @memberof CaseSearchResult
     */
    'matchedObjectArray': Array<MatchedObject>;
    /**
     * 
     * @type {string}
     * @memberof CaseSearchResult
     */
    'object': string;
    /**
     * 
     * @type {string}
     * @memberof CaseSearchResult
     */
    'participantsLastFetchDate': string | null;
}
