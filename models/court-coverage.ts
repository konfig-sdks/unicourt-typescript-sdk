/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseClassCoverage } from './case-class-coverage';
import { Court } from './court';

/**
 * 
 * @export
 * @interface CourtCoverage
 */
export interface CourtCoverage {
    /**
     * 
     * @type {Array<CaseClassCoverage>}
     * @memberof CourtCoverage
     */
    'caseClassCoverageArray': Array<CaseClassCoverage>;
    /**
     * 
     * @type {Court}
     * @memberof CourtCoverage
     */
    'court': Court | null;
    /**
     * Date when it was last updated.
     * @type {string}
     * @memberof CourtCoverage
     */
    'lastUpdateCountDate': string;
    /**
     * Name of the object
     * @type {string}
     * @memberof CourtCoverage
     */
    'object': string;
    /**
     * Total Cases for a specific court.
     * @type {number}
     * @memberof CourtCoverage
     */
    'totalCaseCount': number;
    /**
     * Count of total Case Documents added in UniCourt Library.
     * @type {number}
     * @memberof CourtCoverage
     */
    'totalCaseDocumentInLibraryCount': number;
    /**
     * Count of total Case Documents added in UniCourt Library in last 30 days
     * @type {number}
     * @memberof CourtCoverage
     */
    'totalCaseDocumentInLibraryInLastThirtyDaysCount': number;
    /**
     * Total Cases in last 30 days that were added to UniCourt
     * @type {number}
     * @memberof CourtCoverage
     */
    'totalCasesInLastThirtyDaysCount': number;
    /**
     * Total Free Case Documents for a specific court.
     * @type {number}
     * @memberof CourtCoverage
     */
    'totalFreeCaseDocumentCount': number;
    /**
     * Total Free Case Documents in last 30 days that were added to UniCourt
     * @type {number}
     * @memberof CourtCoverage
     */
    'totalFreeCaseDocumentsInLastThirtyDaysCount': number;
    /**
     * Total Paid Case Documents for a specific court.
     * @type {number}
     * @memberof CourtCoverage
     */
    'totalPaidCaseDocumentCount': number;
    /**
     * Total Paid Case Documents in last 30 days that were added to UniCourt
     * @type {number}
     * @memberof CourtCoverage
     */
    'totalPaidCaseDocumentsInLastThirtyDaysCount': number;
}
