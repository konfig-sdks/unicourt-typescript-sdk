/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SourceStructuredData } from './source-structured-data';

/**
 * Source data from different pages in the court website.
 * @export
 * @interface SourcePageData
 */
export interface SourcePageData {
    /**
     * 
     * @type {SourceStructuredData}
     * @memberof SourcePageData
     */
    'additionalSourceData': SourceStructuredData | null;
    /**
     * When was the page first fetched from the court site.
     * @type {string}
     * @memberof SourcePageData
     */
    'firstFetchDate': string;
    /**
     * When was the page last fetched from the court site.
     * @type {string}
     * @memberof SourcePageData
     */
    'lastFetchDate': string;
    /**
     * Name of the object
     * @type {string}
     * @memberof SourcePageData
     */
    'object': string;
    /**
     * Pages supported for PACER pacerCaseQuery, pacerDocketReport, pacerCaseSummary, pacerAssociatedCases, pacerCaseLocatorResults, hearing, relatedCases.
     * @type {string}
     * @memberof SourcePageData
     */
    'pageName': string;
}
