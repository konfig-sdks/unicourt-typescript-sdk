/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseDocument } from './case-document';

/**
 * Primary Documents refers to documents that are directly related to a docket entry. Primary Documents could be specific to a courts or case type in courts. For isntance the below example is in PACER. PACER District Courts - Here the primary document is one which is attached to the docket number. Because in district for a primary document it can have many attachments associatated to it. PACER Appeal Courts - Here the attachments for a docket entry are the primary documents. Because in appeal for those attachments there is no primary documents.
 * @export
 * @interface DocketEntryPrimaryDocuments
 */
export interface DocketEntryPrimaryDocuments {
    /**
     * 
     * @type {Array<CaseDocument>}
     * @memberof DocketEntryPrimaryDocuments
     */
    'caseDocumentArray': Array<CaseDocument>;
    /**
     * Link to next page of a particular entity in a Case.
     * @type {string}
     * @memberof DocketEntryPrimaryDocuments
     */
    'nextPageAPI': string | null;
    /**
     * Name of the object
     * @type {string}
     * @memberof DocketEntryPrimaryDocuments
     */
    'object': string;
    /**
     * Page number for which results where obtained.
     * @type {number}
     * @memberof DocketEntryPrimaryDocuments
     */
    'pageNumber': number;
    /**
     * Total number of parties of the Case. entity in a Case.
     * @type {number}
     * @memberof DocketEntryPrimaryDocuments
     */
    'totalCount': number;
    /**
     * Total number of pages to obtain all the objects of a party in the Case.
     * @type {number}
     * @memberof DocketEntryPrimaryDocuments
     */
    'totalPages': number;
}

