/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AttorneyRepresentationType } from './attorney-representation-type';

/**
 * 
 * @export
 * @interface AttorneyRepresentationTypeResponse
 */
export interface AttorneyRepresentationTypeResponse {
    /**
     * 
     * @type {Array<AttorneyRepresentationType>}
     * @memberof AttorneyRepresentationTypeResponse
     */
    'attorneyRepresentationTypeArray': Array<AttorneyRepresentationType>;
    /**
     * Link to next page.
     * @type {string}
     * @memberof AttorneyRepresentationTypeResponse
     */
    'nextPageAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRepresentationTypeResponse
     */
    'object': string;
    /**
     * Page number for which results where obtained.
     * @type {number}
     * @memberof AttorneyRepresentationTypeResponse
     */
    'pageNumber': number;
    /**
     * Link to previous page.
     * @type {string}
     * @memberof AttorneyRepresentationTypeResponse
     */
    'previousPageAPI': string | null;
    /**
     * Total number of matches found.
     * @type {number}
     * @memberof AttorneyRepresentationTypeResponse
     */
    'totalCount': number;
    /**
     * Total number of pages to obtain all the objects.
     * @type {number}
     * @memberof AttorneyRepresentationTypeResponse
     */
    'totalPages': number;
}

