/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Hearing } from './hearing';

/**
 * 
 * @export
 * @interface Hearings
 */
export interface Hearings {
    /**
     * 
     * @type {Array<Hearing>}
     * @memberof Hearings
     */
    'hearingArray': Array<Hearing>;
    /**
     * Link to next page of a particular entity in a Case.
     * @type {string}
     * @memberof Hearings
     */
    'nextPageAPI': string | null;
    /**
     * Name of the object
     * @type {string}
     * @memberof Hearings
     */
    'object': string;
    /**
     * Page number for which results where obtained.
     * @type {number}
     * @memberof Hearings
     */
    'pageNumber': number;
    /**
     * Total number of parties of the Case entity in a Case.
     * @type {number}
     * @memberof Hearings
     */
    'totalCount': number;
    /**
     * Total number of pages to obtain all the objects of a party in the Case.
     * @type {number}
     * @memberof Hearings
     */
    'totalPages': number;
}

