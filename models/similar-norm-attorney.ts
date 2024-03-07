/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BarRecordPreview } from './bar-record-preview';

/**
 * 
 * @export
 * @interface SimilarNormAttorney
 */
export interface SimilarNormAttorney {
    /**
     * 
     * @type {Array<BarRecordPreview>}
     * @memberof SimilarNormAttorney
     */
    'barRecordPreviewArray': Array<BarRecordPreview>;
    /**
     * 
     * @type {string}
     * @memberof SimilarNormAttorney
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof SimilarNormAttorney
     */
    'normAttorneyAPI': string;
    /**
     * 
     * @type {string}
     * @memberof SimilarNormAttorney
     */
    'normAttorneyId': string;
    /**
     * 
     * @type {number}
     * @memberof SimilarNormAttorney
     */
    'normAttorneySimilarityScore': number;
    /**
     * 
     * @type {string}
     * @memberof SimilarNormAttorney
     */
    'object': string;
}

