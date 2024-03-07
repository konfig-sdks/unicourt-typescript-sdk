/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BarSourceDataAdministrativeActionsArrayInner } from './bar-source-data-administrative-actions-array-inner';
import { BarSourceDataAdvancedDegreeArrayInner } from './bar-source-data-advanced-degree-array-inner';
import { BarSourceDataBarStatusArrayInner } from './bar-source-data-bar-status-array-inner';
import { BarSourceDataBoardCertificationsArrayInner } from './bar-source-data-board-certifications-array-inner';
import { BarSourceDataCommitteesArrayInner } from './bar-source-data-committees-array-inner';
import { BarSourceDataCourtHistoryArrayInner } from './bar-source-data-court-history-array-inner';
import { BarSourceDataCourtOfAdmissions } from './bar-source-data-court-of-admissions';
import { BarSourceDataDisciplinaryHistoryArrayInner } from './bar-source-data-disciplinary-history-array-inner';
import { BarSourceDataDisciplineSummariesArrayInner } from './bar-source-data-discipline-summaries-array-inner';
import { BarSourceDataEmploymentHistoryArrayInner } from './bar-source-data-employment-history-array-inner';
import { BarSourceDataFeesOptionsArrayInner } from './bar-source-data-fees-options-array-inner';
import { BarSourceDataInvolvementsArrayInner } from './bar-source-data-involvements-array-inner';
import { BarSourceDataLawSchoolArrayInner } from './bar-source-data-law-school-array-inner';
import { BarSourceDataName } from './bar-source-data-name';
import { BarSourceDataOpenActionStatusArrayInner } from './bar-source-data-open-action-status-array-inner';
import { BarSourceDataOtherJurisdictionArrayInner } from './bar-source-data-other-jurisdiction-array-inner';
import { BarSourceDataPublicHearingArrayInner } from './bar-source-data-public-hearing-array-inner';
import { BarSourceDataReasonForInactivation } from './bar-source-data-reason-for-inactivation';
import { BarSourceDataRelatedCasesArrayInner } from './bar-source-data-related-cases-array-inner';
import { BarSourceDataSourceInfo } from './bar-source-data-source-info';
import { BarSourceDataStatewideGrievanceCommitteeHistoryArrayInner } from './bar-source-data-statewide-grievance-committee-history-array-inner';
import { BarSourceDataStatusHistoryArrayInner } from './bar-source-data-status-history-array-inner';
import { BarSourceDataTenYearDisciplineArrayInner } from './bar-source-data-ten-year-discipline-array-inner';

/**
 * 
 * @export
 * @interface BarSourceData
 */
export interface BarSourceData {
    /**
     * 
     * @type {Array<BarSourceDataAdministrativeActionsArrayInner>}
     * @memberof BarSourceData
     */
    'administrativeActionsArray': Array<BarSourceDataAdministrativeActionsArrayInner>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'admissionType': string | null;
    /**
     * 
     * @type {Array<BarSourceDataAdvancedDegreeArrayInner>}
     * @memberof BarSourceData
     */
    'advancedDegreeArray': Array<BarSourceDataAdvancedDegreeArrayInner>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'appellateCourtDistrict': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'appellateDivisionDepartment': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'attorneyGroup': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'authorized': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'barLawFirm': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'barServiceClass': string | null;
    /**
     * 
     * @type {Array<BarSourceDataBarStatusArrayInner>}
     * @memberof BarSourceData
     */
    'barStatusArray': Array<BarSourceDataBarStatusArrayInner>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'bio': string | null;
    /**
     * 
     * @type {Array<BarSourceDataBoardCertificationsArrayInner>}
     * @memberof BarSourceData
     */
    'boardCertificationsArray': Array<BarSourceDataBoardCertificationsArrayInner>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'boardDistrict': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'circuit': string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof BarSourceData
     */
    'clientsRepresentedArray': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'comments': string | null;
    /**
     * 
     * @type {Array<BarSourceDataCommitteesArrayInner>}
     * @memberof BarSourceData
     */
    'committeesArray': Array<BarSourceDataCommitteesArrayInner>;
    /**
     * 
     * @type {Array<BarSourceDataCourtHistoryArrayInner>}
     * @memberof BarSourceData
     */
    'courtHistoryArray': Array<BarSourceDataCourtHistoryArrayInner>;
    /**
     * 
     * @type {BarSourceDataCourtOfAdmissions}
     * @memberof BarSourceData
     */
    'courtOfAdmissions': BarSourceDataCourtOfAdmissions | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'courtServiceEmail': string | null;
    /**
     * 
     * @type {Array<BarSourceDataDisciplinaryHistoryArrayInner>}
     * @memberof BarSourceData
     */
    'disciplinaryHistoryArray': Array<BarSourceDataDisciplinaryHistoryArrayInner>;
    /**
     * 
     * @type {Array<BarSourceDataDisciplineSummariesArrayInner>}
     * @memberof BarSourceData
     */
    'disciplineSummariesArray': Array<BarSourceDataDisciplineSummariesArrayInner>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BarSourceData
     */
    'dismissalsArray': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'district': string | null;
    /**
     * 
     * @type {Array<BarSourceDataEmploymentHistoryArrayInner>}
     * @memberof BarSourceData
     */
    'employmentHistoryArray': Array<BarSourceDataEmploymentHistoryArrayInner>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'expirationDate': string | null;
    /**
     * 
     * @type {Array<BarSourceDataFeesOptionsArrayInner>}
     * @memberof BarSourceData
     */
    'feesOptionsArray': Array<BarSourceDataFeesOptionsArrayInner>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'firmSize': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'firmWebsite': string | null;
    /**
     * The firstAdmittedDate is the date when an attorney was admitted to the bar for the very first time regardless of which U.S state.
     * @type {string}
     * @memberof BarSourceData
     */
    'firstAdmittedDate': string | null;
    /**
     * 
     * @type {number}
     * @memberof BarSourceData
     */
    'firstAdmittedYear': number | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'homeCounty': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'inGoodStanding': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'insurance': string | null;
    /**
     * 
     * @type {Array<BarSourceDataInvolvementsArrayInner>}
     * @memberof BarSourceData
     */
    'involvementsArray': Array<BarSourceDataInvolvementsArrayInner>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'judicialDistrict': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'jurisType': string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof BarSourceData
     */
    'languagesArray': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'lastRenewalDate': string | null;
    /**
     * 
     * @type {Array<BarSourceDataLawSchoolArrayInner>}
     * @memberof BarSourceData
     */
    'lawSchoolArray': Array<BarSourceDataLawSchoolArrayInner>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BarSourceData
     */
    'legalSpecialityArray': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'licenseType': string | null;
    /**
     * 
     * @type {BarSourceDataName}
     * @memberof BarSourceData
     */
    'name': BarSourceDataName;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'nextRegistration': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'nextRenewalDate': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'object': string;
    /**
     * 
     * @type {Array<BarSourceDataOpenActionStatusArrayInner>}
     * @memberof BarSourceData
     */
    'openActionStatusArray': Array<BarSourceDataOpenActionStatusArrayInner>;
    /**
     * 
     * @type {Array<BarSourceDataOtherJurisdictionArrayInner>}
     * @memberof BarSourceData
     */
    'otherJurisdictionArray': Array<BarSourceDataOtherJurisdictionArrayInner>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BarSourceData
     */
    'otherNameArray': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'parish': string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof BarSourceData
     */
    'pendingProceedingArray': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'position': string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof BarSourceData
     */
    'practiceAreaArray': Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BarSourceData
     */
    'practiceLocationArray': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'privateLawPractice': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'profileLastCertified': string | null;
    /**
     * 
     * @type {Array<BarSourceDataPublicHearingArrayInner>}
     * @memberof BarSourceData
     */
    'publicHearingArray': Array<BarSourceDataPublicHearingArrayInner>;
    /**
     * 
     * @type {BarSourceDataReasonForInactivation}
     * @memberof BarSourceData
     */
    'reasonForInactivation': BarSourceDataReasonForInactivation | null;
    /**
     * 
     * @type {Array<BarSourceDataRelatedCasesArrayInner>}
     * @memberof BarSourceData
     */
    'relatedCasesArray': Array<BarSourceDataRelatedCasesArrayInner>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BarSourceData
     */
    'sectionsArray': Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BarSourceData
     */
    'servicesArray': Array<string>;
    /**
     * 
     * @type {BarSourceDataSourceInfo}
     * @memberof BarSourceData
     */
    'sourceInfo': BarSourceDataSourceInfo | null;
    /**
     * 
     * @type {Array<BarSourceDataStatewideGrievanceCommitteeHistoryArrayInner>}
     * @memberof BarSourceData
     */
    'statewideGrievanceCommitteeHistoryArray': Array<BarSourceDataStatewideGrievanceCommitteeHistoryArrayInner>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'status': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'statusDate': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'statusHint': string | null;
    /**
     * 
     * @type {Array<BarSourceDataStatusHistoryArrayInner>}
     * @memberof BarSourceData
     */
    'statusHistoryArray': Array<BarSourceDataStatusHistoryArrayInner>;
    /**
     * 
     * @type {Array<BarSourceDataTenYearDisciplineArrayInner>}
     * @memberof BarSourceData
     */
    'tenYearDisciplineArray': Array<BarSourceDataTenYearDisciplineArrayInner>;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'undergraduateSchool': string | null;
    /**
     * 
     * @type {string}
     * @memberof BarSourceData
     */
    'yearsOfPractice': string | null;
}

