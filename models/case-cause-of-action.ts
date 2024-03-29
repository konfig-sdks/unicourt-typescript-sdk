/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CauseOfAction } from './cause-of-action';
import { CauseOfActionAdditionalData } from './cause-of-action-additional-data';

/**
 * 
 * @export
 * @interface CaseCauseOfAction
 */
export interface CaseCauseOfAction {
    /**
     * 
     * @type {CauseOfAction}
     * @memberof CaseCauseOfAction
     */
    'causeOfAction': CauseOfAction | null;
    /**
     * 
     * @type {Array<CauseOfActionAdditionalData>}
     * @memberof CaseCauseOfAction
     */
    'causeOfActionAdditionalDataArray': Array<CauseOfActionAdditionalData>;
    /**
     * Name of the object
     * @type {string}
     * @memberof CaseCauseOfAction
     */
    'object': string;
}

