/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { NormCorporateGroup } from './norm-corporate-group';
import { NormOrganizationTickerArrayInner } from './norm-organization-ticker-array-inner';
import { SOSData } from './sosdata';

/**
 * 
 * @export
 * @interface NormOrganization
 */
export interface NormOrganization {
    /**
     * 
     * @type {string}
     * @memberof NormOrganization
     */
    'cik': string | null;
    /**
     * 
     * @type {boolean}
     * @memberof NormOrganization
     */
    'isInvolvedInLitigation': boolean;
    /**
     * 
     * @type {string}
     * @memberof NormOrganization
     */
    'lei': string | null;
    /**
     * 
     * @type {string}
     * @memberof NormOrganization
     */
    'naics': string | null;
    /**
     * 
     * @type {string}
     * @memberof NormOrganization
     */
    'naicsDescription': string | null;
    /**
     * 
     * @type {string}
     * @memberof NormOrganization
     */
    'name': string;
    /**
     * 
     * @type {Array<NormCorporateGroup>}
     * @memberof NormOrganization
     */
    'normCorporateGroupArray': Array<NormCorporateGroup>;
    /**
     * 
     * @type {string}
     * @memberof NormOrganization
     */
    'normOrganizationId': string;
    /**
     * 
     * @type {string}
     * @memberof NormOrganization
     */
    'normPartyAPI': string;
    /**
     * 
     * @type {string}
     * @memberof NormOrganization
     */
    'object': string;
    /**
     * 
     * @type {string}
     * @memberof NormOrganization
     */
    'organizationType': NormOrganizationOrganizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof NormOrganization
     */
    'sic': string | null;
    /**
     * 
     * @type {string}
     * @memberof NormOrganization
     */
    'sicDescription': string | null;
    /**
     * 
     * @type {Array<SOSData>}
     * @memberof NormOrganization
     */
    'sosDataArray': Array<SOSData>;
    /**
     * 
     * @type {Array<NormOrganizationTickerArrayInner>}
     * @memberof NormOrganization
     */
    'tickerArray': Array<NormOrganizationTickerArrayInner>;
}

type NormOrganizationOrganizationTypeEnum = 'Business' | 'GovernmentAgency'

