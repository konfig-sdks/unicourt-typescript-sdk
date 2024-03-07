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
 * @interface ServiceStatusDownDetails
 */
export interface ServiceStatusDownDetails {
    /**
     * Details of the reason.
     * @type {string}
     * @memberof ServiceStatusDownDetails
     */
    'details': string | null;
    /**
     * Estimated Time this Service could be Up again for the use.
     * @type {string}
     * @memberof ServiceStatusDownDetails
     */
    'eta': string | null;
    /**
     * Name of the object
     * @type {string}
     * @memberof ServiceStatusDownDetails
     */
    'object': string;
    /**
     * This field determines the reason behind status being down. Following are the possible reason for the service to be down:   underMaintenance: It means that the site is under scheduled maintenance.   notIntegrated: When an court with specific case type is not integrated in UniCourt.   brokenIntegration: Due to some updates made to the court site our existing Integration has broken and will require a fix to be made to support this court again for a spcific case type category.   sourceMigrated: When a source is migrated from one site to another for a specific case type category.
     * @type {string}
     * @memberof ServiceStatusDownDetails
     */
    'reason': ServiceStatusDownDetailsReasonEnum;
}

type ServiceStatusDownDetailsReasonEnum = 'underMaintenance' | 'notIntegrated' | 'brokenIntegration' | 'sourceMigrated'


