/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Case } from './case';
import { CaseUpdatePacerOptionsResponse } from './case-update-pacer-options-response';
import { LastTrackedDetails } from './last-tracked-details';
import { Schedule } from './schedule';

/**
 * 
 * @export
 * @interface CaseTrack
 */
export interface CaseTrack {
    /**
     * 
     * @type {Case}
     * @memberof CaseTrack
     */
    'case': Case | null;
    /**
     * 
     * @type {string}
     * @memberof CaseTrack
     */
    'caseAPI': string;
    /**
     * Unique Id for a Case in UniCourt.
     * @type {string}
     * @memberof CaseTrack
     */
    'caseId': string;
    /**
     * The date and time when the case was last fetched from the Court. This date and time is in UTC. Formatted as YYYY-MM-DDTHH:MM:SS+ZZ:zz, Note: It is not necessary that every time the case is fetched from Court we find changes in the case information. It could be that we already have the latest information from the Court and no changes exist.
     * @type {string}
     * @memberof CaseTrack
     */
    'lastFetchDate': string | null;
    /**
     * The date and time when the case was last fetched from the Court where we found changes in the case information. This date and time is in UTC. Formatted as YYYY-MM-DDTHH:MM:SS+ZZ:zz,
     * @type {string}
     * @memberof CaseTrack
     */
    'lastFetchDateWithUpdates': string | null;
    /**
     * 
     * @type {LastTrackedDetails}
     * @memberof CaseTrack
     */
    'lastTrackedDetails': LastTrackedDetails;
    /**
     * Name of the object.
     * @type {string}
     * @memberof CaseTrack
     */
    'object': string;
    /**
     * 
     * @type {CaseUpdatePacerOptionsResponse}
     * @memberof CaseTrack
     */
    'pacerOptions': CaseUpdatePacerOptionsResponse | null;
    /**
     * 
     * @type {Schedule}
     * @memberof CaseTrack
     */
    'schedule': Schedule;
}

