/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Attorney } from './attorney';

/**
 * 
 * @export
 * @interface Attorneys
 */
export interface Attorneys {
    /**
     * 
     * @type {Array<Attorney>}
     * @memberof Attorneys
     */
    'attorneyArray': Array<Attorney>;
    /**
     * Link to next page of a particular entity in a Case.
     * @type {string}
     * @memberof Attorneys
     */
    'nextPageAPI': string | null;
    /**
     * Name of the object
     * @type {string}
     * @memberof Attorneys
     */
    'object': string;
    /**
     * Page number for which results where obtained.
     * @type {number}
     * @memberof Attorneys
     */
    'pageNumber': number;
    /**
     * Total number of parties of the Case entity in a Case.
     * @type {number}
     * @memberof Attorneys
     */
    'totalCount': number;
    /**
     * Total number of pages to obtain all the objects of a party in the Case.
     * @type {number}
     * @memberof Attorneys
     */
    'totalPages': number;
}

