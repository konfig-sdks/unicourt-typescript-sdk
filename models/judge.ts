/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Contact } from './contact';
import { JudgeType } from './judge-type';
import { PossibleNormJudge } from './possible-norm-judge';

/**
 * 
 * @export
 * @interface Judge
 */
export interface Judge {
    /**
     * 
     * @type {Contact}
     * @memberof Judge
     */
    'contact': Contact;
    /**
     * When was the judge first fetched from the court site.
     * @type {string}
     * @memberof Judge
     */
    'firstFetchDate': string;
    /**
     * First name of the judge. This is normalized by UniCourt.
     * @type {string}
     * @memberof Judge
     */
    'firstName': string | null;
    /**
     * Signifies if the judge as this judge type is currently isVisible or not for the case.
     * @type {boolean}
     * @memberof Judge
     */
    'isVisible': boolean;
    /**
     * ID for the judge in this case. This ID is unique within a case and NOT across cases. If the same Judge were to appear in another case this ID would be different.
     * @type {string}
     * @memberof Judge
     */
    'judgeId': string;
    /**
     * 
     * @type {JudgeType}
     * @memberof Judge
     */
    'judgeType': JudgeType | null;
    /**
     * When was the judge last fetched from the court site.
     * @type {string}
     * @memberof Judge
     */
    'lastFetchDate': string;
    /**
     * Last name of the judge. This is normalized by UniCourt.
     * @type {string}
     * @memberof Judge
     */
    'lastName': string | null;
    /**
     * Middle name of the judge. This is normalized by UniCourt.
     * @type {string}
     * @memberof Judge
     */
    'middleName': string | null;
    /**
     * Name of the judge as provided by Court.
     * @type {string}
     * @memberof Judge
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Judge
     */
    'namePrefix': string | null;
    /**
     * 
     * @type {string}
     * @memberof Judge
     */
    'nameSuffix': string | null;
    /**
     * Name of the object
     * @type {string}
     * @memberof Judge
     */
    'object': string;
    /**
     * 
     * @type {Array<PossibleNormJudge>}
     * @memberof Judge
     */
    'possibleNormJudgeArray': Array<PossibleNormJudge>;
    /**
     * 
     * @type {string}
     * @memberof Judge
     */
    'sourceJudgeType': string;
}
