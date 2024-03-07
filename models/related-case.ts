/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseRelationshipType } from './case-relationship-type';
import { SourceStructuredData } from './source-structured-data';

/**
 * 
 * @export
 * @interface RelatedCase
 */
export interface RelatedCase {
    /**
     * 
     * @type {SourceStructuredData}
     * @memberof RelatedCase
     */
    'additionalSourceData': SourceStructuredData | null;
    /**
     * Link to the Case API of the current related case.
     * @type {string}
     * @memberof RelatedCase
     */
    'caseAPI': string | null;
    /**
     * Case ID of the related Case. This can be null if this case in not found in our database. However the meta information of the related case will be present.
     * @type {string}
     * @memberof RelatedCase
     */
    'caseId': string | null;
    /**
     * Case Name of the related Case.
     * @type {string}
     * @memberof RelatedCase
     */
    'caseName': string | null;
    /**
     * Case Number of the related Case.
     * @type {string}
     * @memberof RelatedCase
     */
    'caseNumber': string;
    /**
     * 
     * @type {CaseRelationshipType}
     * @memberof RelatedCase
     */
    'caseRelationshipType': CaseRelationshipType | null;
    /**
     * This specifies if the related cases is still related to the parent case or not.
     * @type {boolean}
     * @memberof RelatedCase
     */
    'isVisible': boolean;
    /**
     * Name of the object
     * @type {string}
     * @memberof RelatedCase
     */
    'object': string;
    /**
     * Case Relationship Type provided by court.
     * @type {string}
     * @memberof RelatedCase
     */
    'sourceCaseRelationshipType': string;
}
