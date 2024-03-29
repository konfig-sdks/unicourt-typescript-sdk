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
 * @interface AccessTokenIdResponse
 */
export interface AccessTokenIdResponse {
    /**
     * Ip address.
     * @type {string}
     * @memberof AccessTokenIdResponse
     */
    'issueAddress': string;
    /**
     * Date when access token was created.
     * @type {string}
     * @memberof AccessTokenIdResponse
     */
    'issuedDate': string;
    /**
     * Name of the object.
     * @type {string}
     * @memberof AccessTokenIdResponse
     */
    'object': string;
    /**
     * Unique Id for the access token.
     * @type {string}
     * @memberof AccessTokenIdResponse
     */
    'tokenId': string;
}

