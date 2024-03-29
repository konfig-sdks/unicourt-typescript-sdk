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
 * @interface RelatedNormParty
 */
export interface RelatedNormParty {
    /**
     * 
     * @type {string}
     * @memberof RelatedNormParty
     */
    'normPartyId': string;
    /**
     * 
     * @type {string}
     * @memberof RelatedNormParty
     */
    'object': string;
    /**
     * 
     * @type {string}
     * @memberof RelatedNormParty
     */
    'relationshipType': RelatedNormPartyRelationshipTypeEnum;
}

type RelatedNormPartyRelationshipTypeEnum = 'Parent' | 'Child' | 'Same_Corporate_Group'


