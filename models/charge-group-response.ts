/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ChargeGroup } from './charge-group';

/**
 * 
 * @export
 * @interface ChargeGroupResponse
 */
export interface ChargeGroupResponse {
    /**
     * 
     * @type {Array<ChargeGroup>}
     * @memberof ChargeGroupResponse
     */
    'chargeGroupArray': Array<ChargeGroup>;
    /**
     * Link to next page.
     * @type {string}
     * @memberof ChargeGroupResponse
     */
    'nextPageAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof ChargeGroupResponse
     */
    'object': string;
    /**
     * Page number for which results where obtained.
     * @type {number}
     * @memberof ChargeGroupResponse
     */
    'pageNumber': number;
    /**
     * Link to previous page.
     * @type {string}
     * @memberof ChargeGroupResponse
     */
    'previousPageAPI': string | null;
    /**
     * Total number of matches found.
     * @type {number}
     * @memberof ChargeGroupResponse
     */
    'totalCount': number;
    /**
     * Total number of pages to obtain all the objects.
     * @type {number}
     * @memberof ChargeGroupResponse
     */
    'totalPages': number;
}

