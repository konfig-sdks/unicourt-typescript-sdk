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
 * @interface PreviewDocument
 */
export interface PreviewDocument {
    /**
     * Date and time when the preview document was downloaded and added to the UniCourt CrowdSourced Library.
     * @type {string}
     * @memberof PreviewDocument
     */
    'addedToLibraryDate': string | null;
    /**
     * Link to get the file url for the preview document which is already present in the UniCourt CrowdSourced Library.
     * @type {string}
     * @memberof PreviewDocument
     */
    'downloadAPI': string | null;
    /**
     * Determines if the preview document is present in the UniCourt Library or not.
     * @type {boolean}
     * @memberof PreviewDocument
     */
    'inLibrary': boolean;
    /**
     * Name of the object
     * @type {string}
     * @memberof PreviewDocument
     */
    'object': string;
}

