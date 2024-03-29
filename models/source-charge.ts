/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SourceChargeAdditionalData } from './source-charge-additional-data';

/**
 * Source charge data from the source site.
 * @export
 * @interface SourceCharge
 */
export interface SourceCharge {
    /**
     * When this charge was first fetched from the court site.
     * @type {string}
     * @memberof SourceCharge
     */
    'firstFetchDate': string;
    /**
     * Signifies if the charge is currently isVisible or not for the case.
     * @type {boolean}
     * @memberof SourceCharge
     */
    'isVisible': boolean;
    /**
     * When this charge was last fetched from the court site.
     * @type {string}
     * @memberof SourceCharge
     */
    'lastFetchDate': string;
    /**
     * Name of the object
     * @type {string}
     * @memberof SourceCharge
     */
    'object': string;
    /**
     * Charge data from the source site.
     * @type {string}
     * @memberof SourceCharge
     */
    'sourceCharge': string | null;
    /**
     * Additional data related to the charge which is available in the source site.
     * @type {Array<SourceChargeAdditionalData>}
     * @memberof SourceCharge
     */
    'sourceChargeAdditionalDataArray': Array<SourceChargeAdditionalData>;
    /**
     * Charge degree data from the source site.
     * @type {string}
     * @memberof SourceCharge
     */
    'sourceChargeDegree': string | null;
    /**
     * Raw charge data from the source site.
     * @type {string}
     * @memberof SourceCharge
     */
    'sourceChargeRaw': string;
    /**
     * Charge severity data from the source site.
     * @type {string}
     * @memberof SourceCharge
     */
    'sourceChargeSeverity': string | null;
    /**
     * Statute of a charge.
     * @type {string}
     * @memberof SourceCharge
     */
    'sourceStatute': string | null;
}

