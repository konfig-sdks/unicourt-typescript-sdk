/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AssociatedNormParty } from './associated-norm-party';

/**
 * 
 * @export
 * @interface AssociatedNormPartyResponse
 */
export interface AssociatedNormPartyResponse {
    /**
     * 
     * @type {Array<AssociatedNormParty>}
     * @memberof AssociatedNormPartyResponse
     */
    'associatedNormPartyArray': Array<AssociatedNormParty>;
    /**
     * Next page of results if applicable.
     * @type {string}
     * @memberof AssociatedNormPartyResponse
     */
    'nextPageAPI': string | null;
    /**
     * Link to previous page of results.
     * @type {string}
     * @memberof AssociatedNormPartyResponse
     */
    'previousPageAPI': string | null;
    /**
     * Total no. of results for this criteria.
     * @type {number}
     * @memberof AssociatedNormPartyResponse
     */
    'totalCount': number;
    /**
     * Total no. of pages.
     * @type {number}
     * @memberof AssociatedNormPartyResponse
     */
    'totalPages': number;
}
