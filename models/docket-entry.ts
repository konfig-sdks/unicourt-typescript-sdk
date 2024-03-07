/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DocketEntryPrimaryDocuments } from './docket-entry-primary-documents';
import { DocketEntrySecondaryDocuments } from './docket-entry-secondary-documents';
import { ReferencedDocketNumber } from './referenced-docket-number';
import { SourceStructuredData } from './source-structured-data';

/**
 * 
 * @export
 * @interface DocketEntry
 */
export interface DocketEntry {
    /**
     * Determines if it is the first docket entry or the last docket entry. This value will be set only for the first and last docket entry. For other docket entries it will be null. However, this will be set as single_docket_entry when the Case contains only one docket entry.
     * @type {string}
     * @memberof DocketEntry
     */
    'boundary': DocketEntryBoundaryEnum;
    /**
     * Docket Badge helps you to know what type of a docket entry it is.
     * @type {string}
     * @memberof DocketEntry
     */
    'docketBadge': DocketEntryDocketBadgeEnum;
    /**
     * Docket Action Date
     * @type {string}
     * @memberof DocketEntry
     */
    'docketEntryDate': string;
    /**
     * 
     * @type {DocketEntryPrimaryDocuments}
     * @memberof DocketEntry
     */
    'docketEntryPrimaryDocuments': DocketEntryPrimaryDocuments | null;
    /**
     * 
     * @type {DocketEntrySecondaryDocuments}
     * @memberof DocketEntry
     */
    'docketEntrySecondaryDocuments': DocketEntrySecondaryDocuments | null;
    /**
     * The respective docket entry number which is defined in the court website.
     * @type {number}
     * @memberof DocketEntry
     */
    'docketNumber': number | null;
    /**
     * When this docket entry was last fetched from the source.
     * @type {string}
     * @memberof DocketEntry
     */
    'lastFetchDate': string;
    /**
     * Name of the object
     * @type {string}
     * @memberof DocketEntry
     */
    'object': string;
    /**
     * Other Docket Numbers that referenced for a particular docket entry.
     * @type {Array<ReferencedDocketNumber>}
     * @memberof DocketEntry
     */
    'referencedDocketNumberArray': Array<ReferencedDocketNumber>;
    /**
     * Order number how the dockets have stored in UniCourt.
     * @type {number}
     * @memberof DocketEntry
     */
    'sortOrder': number;
    /**
     * Source Docket Entry
     * @type {string}
     * @memberof DocketEntry
     */
    'text': string;
    /**
     * 
     * @type {SourceStructuredData}
     * @memberof DocketEntry
     */
    'textStructured': SourceStructuredData | null;
}

type DocketEntryBoundaryEnum = 'first' | 'last' | 'single_docket_entry' | 'null'
type DocketEntryDocketBadgeEnum = 'DOCKET' | 'CHARGE' | 'HEARING' | 'JUDGEMENT' | 'FINANCIAL' | 'DISPOSITION' | 'SENTENCE' | 'BOND' | 'BAIL' | 'CAUSE_OF_ACTION' | 'ARREST' | 'WARRANT' | 'SUMMON' | 'TICKLER' | 'OPINION'


