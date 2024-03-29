/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AdditionalLevels } from './additional-levels';

/**
 * 
 * @export
 * @interface Court
 */
export interface Court {
    /**
     * 
     * @type {AdditionalLevels}
     * @memberof Court
     */
    'additionalLevels': AdditionalLevels | null;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'appealCourtsForCourtAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'container': string | null;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'containerType': string | null;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'courtId': string;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'courtLocationsForCourtAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'courtServiceStatusAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'courtSystemId': string;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'courtTypeId': string;
    /**
     * The date and time when the Court was first created. This date and time is in UTC. Formatted as YYYY-MM-DD HH:MM:SS.
     * @type {string}
     * @memberof Court
     */
    'createdDate': string;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'jurisdictionGeoForCourtAPI': string | null;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'nameAka': string;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'object': string;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'system': string;
    /**
     * 
     * @type {string}
     * @memberof Court
     */
    'type': string;
}

