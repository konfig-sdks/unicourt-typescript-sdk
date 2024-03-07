/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Phone object data schema.
 * @export
 * @interface Phone
 */
export interface Phone {
    /**
     * Date at which this record is created in UniCourt.
     * @type {string}
     * @memberof Phone
     */
    'firstFetchDate': string;
    /**
     * Boolean indicating if the phone is visible or not.
     * @type {boolean}
     * @memberof Phone
     */
    'isVisible': boolean;
    /**
     * Date at which this record was updated in UniCourt.
     * @type {string}
     * @memberof Phone
     */
    'lastFetchDate': string;
    /**
     * 
     * @type {string}
     * @memberof Phone
     */
    'object': string;
    /**
     * Phone Number
     * @type {string}
     * @memberof Phone
     */
    'phoneNumber': string;
    /**
     * Resolved phone type (ideally from master data).
     * @type {string}
     * @memberof Phone
     */
    'phoneType': PhonePhoneTypeEnum;
}

type PhonePhoneTypeEnum = 'DEFAULT' | 'OFFICE' | 'FAX' | 'PHONE'


