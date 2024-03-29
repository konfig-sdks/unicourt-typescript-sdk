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
 * @interface AccessTokenResponse
 */
export interface AccessTokenResponse {
    /**
     * Access token for API.
     * @type {string}
     * @memberof AccessTokenResponse
     */
    'accessToken': string;
    /**
     * Name of the object.
     * @type {string}
     * @memberof AccessTokenResponse
     */
    'object': string;
    /**
     * Unique Id for the access token.
     * @type {string}
     * @memberof AccessTokenResponse
     */
    'tokenId': string;
    /**
     * Token type.
     * @type {string}
     * @memberof AccessTokenResponse
     */
    'tokenType': string;
}

