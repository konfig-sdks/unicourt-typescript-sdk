/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Total number of API calls billed for the billing cycle.
 * @export
 * @interface BillingCycleUsageResponseApiCallsBillable
 */
export interface BillingCycleUsageResponseApiCallsBillable {
    /**
     * Total API calls billed  for the billing cycle
     * @type {number}
     * @memberof BillingCycleUsageResponseApiCallsBillable
     */
    'count': number;
    /**
     * Last Updated date and time for the field apiCallsBillable
     * @type {string}
     * @memberof BillingCycleUsageResponseApiCallsBillable
     */
    'lastUpdated': string | null;
}

