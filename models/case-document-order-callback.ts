/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseDocument } from './case-document';
import { Exception } from './exception';
import { ExportFile } from './export-file';

/**
 * 
 * @export
 * @interface CaseDocumentOrderCallback
 */
export interface CaseDocumentOrderCallback {
    /**
     * Date when the job is run.
     * @type {string}
     * @memberof CaseDocumentOrderCallback
     */
    'callbackGeneratedDate': string | null;
    /**
     * 
     * @type {CaseDocument}
     * @memberof CaseDocumentOrderCallback
     */
    'caseDocument': CaseDocument | null;
    /**
     * UniCourt\'s Case Document ID.
     * @type {string}
     * @memberof CaseDocumentOrderCallback
     */
    'caseDocumentId': string;
    /**
     * 
     * @type {string}
     * @memberof CaseDocumentOrderCallback
     */
    'caseDocumentOrderCallbackAPI': string;
    /**
     * Unique Id for the Case Document Order Callback.
     * @type {string}
     * @memberof CaseDocumentOrderCallback
     */
    'caseDocumentOrderCallbackId': string;
    /**
     * 
     * @type {Exception}
     * @memberof CaseDocumentOrderCallback
     */
    'exception': Exception | null;
    /**
     * 
     * @type {ExportFile}
     * @memberof CaseDocumentOrderCallback
     */
    'file': ExportFile | null;
    /**
     * Name of the object.
     * @type {string}
     * @memberof CaseDocumentOrderCallback
     */
    'object': string;
    /**
     * Status of the request.
     * @type {string}
     * @memberof CaseDocumentOrderCallback
     */
    'status': CaseDocumentOrderCallbackStatusEnum;
}

type CaseDocumentOrderCallbackStatusEnum = 'COMPLETE' | 'FAILURE' | 'IN_PROGRESS'

