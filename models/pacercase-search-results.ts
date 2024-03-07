/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseSearchResult } from './case-search-result';
import { PACERCaseSearchContent } from './pacercase-search-content';

/**
 * 
 * @export
 * @interface PACERCaseSearchResults
 */
export interface PACERCaseSearchResults {
    /**
     * This field determines if the UniCourt Content has only meta information. If the value is true and you require to get the latest updates of the case you will need to make a request to the updateCase API.
     * @type {boolean}
     * @memberof PACERCaseSearchResults
     */
    'hasOnlyMetaInfo': boolean;
    /**
     * Name of the object
     * @type {string}
     * @memberof PACERCaseSearchResults
     */
    'object': string;
    /**
     * 
     * @type {PACERCaseSearchContent}
     * @memberof PACERCaseSearchResults
     */
    'pacerContent': PACERCaseSearchContent;
    /**
     * 
     * @type {CaseSearchResult}
     * @memberof PACERCaseSearchResults
     */
    'uniCourtContent': CaseSearchResult;
}
