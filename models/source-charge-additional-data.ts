/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Additional data that enchances the information of a given charge.
 * @export
 * @interface SourceChargeAdditionalData
 */
export interface SourceChargeAdditionalData {
    /**
     * Name of the object
     * @type {string}
     * @memberof SourceChargeAdditionalData
     */
    'object': string;
    /**
     * Describes what type of additional data.
     * @type {string}
     * @memberof SourceChargeAdditionalData
     */
    'type': string;
    /**
     * Value of additional data.
     * @type {string}
     * @memberof SourceChargeAdditionalData
     */
    'value': string | null;
}

