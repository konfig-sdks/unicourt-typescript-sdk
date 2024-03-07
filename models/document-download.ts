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
 * @interface DocumentDownload
 */
export interface DocumentDownload {
    /**
     * API call to download the document again if the above fileUrl is expired.
     * @type {string}
     * @memberof DocumentDownload
     */
    'caseDocumentDownloadAPI': string;
    /**
     * Requested Document ID.
     * @type {string}
     * @memberof DocumentDownload
     */
    'caseDocumentId': string;
    /**
     * Expiry date-time for the fileUrl provided in this object.
     * @type {string}
     * @memberof DocumentDownload
     */
    'expiryDate': string;
    /**
     * Link to download the file.
     * @type {string}
     * @memberof DocumentDownload
     */
    'fileUrl': string;
    /**
     * Name of the object.
     * @type {string}
     * @memberof DocumentDownload
     */
    'object': string;
}
