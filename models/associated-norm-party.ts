/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CaseTimeline } from './case-timeline';
import { SOSDataPreview } from './sosdata-preview';

/**
 * 
 * @export
 * @interface AssociatedNormParty
 */
export interface AssociatedNormParty {
    /**
     * 
     * @type {number}
     * @memberof AssociatedNormParty
     */
    'caseCount': number;
    /**
     * Link to related cases for this association.
     * @type {string}
     * @memberof AssociatedNormParty
     */
    'caseSearchAPI': string;
    /**
     * 
     * @type {CaseTimeline}
     * @memberof AssociatedNormParty
     */
    'caseTimeline': CaseTimeline;
    /**
     * 
     * @type {string}
     * @memberof AssociatedNormParty
     */
    'name': string;
    /**
     * Link to Details for the Party.
     * @type {string}
     * @memberof AssociatedNormParty
     */
    'normPartyAPI': string;
    /**
     * 
     * @type {string}
     * @memberof AssociatedNormParty
     */
    'normPartyId': string;
    /**
     * 
     * @type {string}
     * @memberof AssociatedNormParty
     */
    'object': string;
    /**
     * 
     * @type {Array<SOSDataPreview>}
     * @memberof AssociatedNormParty
     */
    'sosDataArray': Array<SOSDataPreview>;
}

