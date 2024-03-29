/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface BillingCyclesResponse
 */
export interface BillingCyclesResponse {
    /**
     * Array of previous 12 Billing Cycles.
     * @type {Array<string>}
     * @memberof BillingCyclesResponse
     */
    'billingCycleArray': Array<string> | null;
    /**
     * Name of the object.
     * @type {string}
     * @memberof BillingCyclesResponse
     */
    'object': string;
}

