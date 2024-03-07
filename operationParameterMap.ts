type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/normAttorney/{normAttorneyId}/associatedNormLawFirms-GET': {
        parameters: [
            {
                name: 'normAttorneyId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normAttorney/{normAttorneyId}/associatedNormJudges-GET': {
        parameters: [
            {
                name: 'normAttorneyId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normAttorney/{normAttorneyId}-GET': {
        parameters: [
            {
                name: 'normAttorneyId'
            },
        ]
    },
    '/normAttorneySearch/{normAttorneySearchId}-GET': {
        parameters: [
            {
                name: 'normAttorneySearchId'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/normAttorney/{normAttorneyId}/associatedNormParties-GET': {
        parameters: [
            {
                name: 'normAttorneyId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normAttorneySearch-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/generateNewToken-POST': {
        parameters: [
            {
                name: 'clientId'
            },
            {
                name: 'clientSecret'
            },
        ]
    },
    '/listAllTokenIds-PUT': {
        parameters: [
            {
                name: 'clientId'
            },
            {
                name: 'clientSecret'
            },
        ]
    },
    '/invalidateToken-PUT': {
        parameters: [
            {
                name: 'clientId'
            },
            {
                name: 'clientSecret'
            },
            {
                name: 'tokenId'
            },
        ]
    },
    '/invalidateAllTokens-PUT': {
        parameters: [
            {
                name: 'clientId'
            },
            {
                name: 'clientSecret'
            },
        ]
    },
    '/callbacks-GET': {
        parameters: [
            {
                name: 'date'
            },
            {
                name: 'status'
            },
        ]
    },
    '/caseCountAnalyticsByCaseClass-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByCaseFiledDate-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'groupBy'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByCaseTypeGroup-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByCourt-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByCourtLocation-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByCourtSystem-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByCourtType-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByJurisdictionGeo-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByNormAttorney-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByNormJudge-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByNormLawFirm-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByNormParty-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normAttorney/{normAttorneyId}/caseCountAnalyticsByOpposingNormAttorney-GET': {
        parameters: [
            {
                name: 'normAttorneyId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normLawFirm/{normLawFirmId}/caseCountAnalyticsByOpposingNormLawFirm-GET': {
        parameters: [
            {
                name: 'normLawFirmId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normParty/{normPartyId}/caseCountAnalyticsByOpposingNormParty-GET': {
        parameters: [
            {
                name: 'normPartyId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByPartyRole-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByPartyRoleGroup-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByAreaOfLaw-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/caseCountAnalyticsByCaseType-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/party/{partyId}/associatedAttorneys-GET': {
        parameters: [
            {
                name: 'partyId'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/attorney/{attorneyId}/associatedParties-GET': {
        parameters: [
            {
                name: 'attorneyId'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/attorney/{attorneyId}-GET': {
        parameters: [
            {
                name: 'attorneyId'
            },
        ]
    },
    '/case/{caseId}/attorneys-GET': {
        parameters: [
            {
                name: 'caseId'
            },
            {
                name: 'isVisible'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/case/{caseId}-GET': {
        parameters: [
            {
                name: 'caseId'
            },
        ]
    },
    '/case/{caseId}/parties-GET': {
        parameters: [
            {
                name: 'caseId'
            },
            {
                name: 'isVisible'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'partyRoleId'
            },
            {
                name: 'partyRoleGroupId'
            },
            {
                name: 'attorneyRepresentationTypeId'
            },
            {
                name: 'partyClassificationType'
            },
        ]
    },
    '/case/{caseId}/docketEntries-GET': {
        parameters: [
            {
                name: 'caseId'
            },
            {
                name: 'docketNumber'
            },
            {
                name: 'sortBy'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/case/{caseId}/hearings-GET': {
        parameters: [
            {
                name: 'caseId'
            },
            {
                name: 'sortBy'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/judge/{judgeId}-GET': {
        parameters: [
            {
                name: 'judgeId'
            },
        ]
    },
    '/case/{caseId}/judges-GET': {
        parameters: [
            {
                name: 'caseId'
            },
            {
                name: 'isVisible'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/party/{partyId}-GET': {
        parameters: [
            {
                name: 'partyId'
            },
        ]
    },
    '/case/{caseId}/docketEntries/primaryDocuments-GET': {
        parameters: [
            {
                name: 'caseId'
            },
            {
                name: 'docketNumber'
            },
            {
                name: 'inLibrary'
            },
            {
                name: 'afterFirstFetchDate'
            },
            {
                name: 'libraryDate'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/case/{caseId}/relatedCases-GET': {
        parameters: [
            {
                name: 'caseId'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/case/{caseId}/docketEntries/secondaryDocuments-GET': {
        parameters: [
            {
                name: 'caseId'
            },
            {
                name: 'docketNumber'
            },
            {
                name: 'inLibrary'
            },
            {
                name: 'afterFirstFetchDate'
            },
            {
                name: 'libraryDate'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/caseDocumentOrder-PUT': {
        parameters: [
            {
                name: 'caseDocumentId'
            },
            {
                name: 'isPreviewOnly'
            },
            {
                name: 'pacerOptions'
            },
        ]
    },
    '/caseDocumentOrder/callbacks/{caseDocumentOrderCallbackId}-GET': {
        parameters: [
            {
                name: 'caseDocumentOrderCallbackId'
            },
        ]
    },
    '/caseDocument/{caseDocumentId}-GET': {
        parameters: [
            {
                name: 'caseDocumentId'
            },
        ]
    },
    '/case/{caseId}/documents-GET': {
        parameters: [
            {
                name: 'caseId'
            },
            {
                name: 'inLibrary'
            },
            {
                name: 'afterFirstFetchDate'
            },
            {
                name: 'libraryDate'
            },
            {
                name: 'firstFetchDate'
            },
            {
                name: 'sortBy'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/caseDocumentDownload/{caseDocumentId}-GET': {
        parameters: [
            {
                name: 'caseDocumentId'
            },
            {
                name: 'isPreviewDocument'
            },
        ]
    },
    '/caseDocumentOrder/callbacks-GET': {
        parameters: [
            {
                name: 'date'
            },
            {
                name: 'status'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/caseExport/callbacks/{caseExportCallbackId}-GET': {
        parameters: [
            {
                name: 'caseExportCallbackId'
            },
        ]
    },
    '/caseExport/callbacks-GET': {
        parameters: [
            {
                name: 'date'
            },
            {
                name: 'status'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/caseExport/{caseId}-GET': {
        parameters: [
            {
                name: 'caseId'
            },
        ]
    },
    '/caseSearch/{caseSearchId}-GET': {
        parameters: [
            {
                name: 'caseSearchId'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/caseSearch-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/caseTrack-PUT': {
        parameters: [
            {
                name: 'caseTrackParams'
            },
            {
                name: 'schedule'
            },
        ]
    },
    '/caseTrack/{caseId}-GET': {
        parameters: [
            {
                name: 'caseId'
            },
        ]
    },
    '/caseTracks-GET': {
        parameters: [
            {
                name: 'lastFetchDate'
            },
            {
                name: 'lastFetchDateWithUpdates'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/caseTrack/{caseId}-DELETE': {
        parameters: [
            {
                name: 'caseId'
            },
        ]
    },
    '/caseUpdate-PUT': {
        parameters: [
            {
                name: 'caseId'
            },
            {
                name: 'pacerOptions'
            },
        ]
    },
    '/caseUpdates-GET': {
        parameters: [
            {
                name: 'caseId'
            },
            {
                name: 'requestedDate'
            },
            {
                name: 'status'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/caseUpdate/{caseId}-GET': {
        parameters: [
            {
                name: 'caseId'
            },
        ]
    },
    '/courtCoverage/{courtId}-GET': {
        parameters: [
            {
                name: 'courtId'
            },
        ]
    },
    '/masterData/jurisdictionGeo/{jurisdictionGeoId}/courts-GET': {
        parameters: [
            {
                name: 'jurisdictionGeoId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/chargeAdditionalData-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/court/{courtId}/appealCourts-GET': {
        parameters: [
            {
                name: 'courtId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/areaOfLaw/{areaOfLawId}-GET': {
        parameters: [
            {
                name: 'areaOfLawId'
            },
        ]
    },
    '/masterData/attorneyRepresentationType-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/attorneyRepresentationType/{attorneyRepresentationTypeId}-GET': {
        parameters: [
            {
                name: 'attorneyRepresentationTypeId'
            },
        ]
    },
    '/masterData/attorneyType/{attorneyTypeId}-GET': {
        parameters: [
            {
                name: 'attorneyTypeId'
            },
        ]
    },
    '/masterData/attorneyType-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/caseClass/{caseClassId}-GET': {
        parameters: [
            {
                name: 'caseClassId'
            },
        ]
    },
    '/masterData/caseClass-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/caseRelationshipType/{caseRelationshipTypeId}-GET': {
        parameters: [
            {
                name: 'caseRelationshipTypeId'
            },
        ]
    },
    '/masterData/caseRelationshipType-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/caseStatus/{caseStatusId}-GET': {
        parameters: [
            {
                name: 'caseStatusId'
            },
        ]
    },
    '/masterData/caseStatus-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/caseStatusGroup/{caseStatusGroupId}-GET': {
        parameters: [
            {
                name: 'caseStatusGroupId'
            },
        ]
    },
    '/masterData/caseStatusGroup-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/caseType/{caseTypeId}-GET': {
        parameters: [
            {
                name: 'caseTypeId'
            },
        ]
    },
    '/masterData/caseTypeGroup/{caseTypeGroupId}-GET': {
        parameters: [
            {
                name: 'caseTypeGroupId'
            },
        ]
    },
    '/masterData/caseType-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/causeOfAction/{causeOfActionId}-GET': {
        parameters: [
            {
                name: 'causeOfActionId'
            },
        ]
    },
    '/masterData/causeOfActionAdditionalData-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/causeOfActionAdditionalData/{causeOfActionAdditionalDataId}-GET': {
        parameters: [
            {
                name: 'causeOfActionAdditionalDataId'
            },
        ]
    },
    '/masterData/causeOfAction-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/causeOfActionGroup-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/causeOfActionGroup/{causeOfActionGroupId}-GET': {
        parameters: [
            {
                name: 'causeOfActionGroupId'
            },
        ]
    },
    '/masterData/chargeAdditionalData/{chargeAdditionalDataId}-GET': {
        parameters: [
            {
                name: 'chargeAdditionalDataId'
            },
        ]
    },
    '/masterData/charge/{chargeId}-GET': {
        parameters: [
            {
                name: 'chargeId'
            },
        ]
    },
    '/masterData/chargeDegree/{chargeDegreeId}-GET': {
        parameters: [
            {
                name: 'chargeDegreeId'
            },
        ]
    },
    '/masterData/chargeDegree-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/chargeGroup/{chargeGroupId}-GET': {
        parameters: [
            {
                name: 'chargeGroupId'
            },
        ]
    },
    '/masterData/chargeGroup-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/chargeSeverity/{chargeSeverityId}-GET': {
        parameters: [
            {
                name: 'chargeSeverityId'
            },
        ]
    },
    '/masterData/chargeSeverity-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/charge-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/courtLocation-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/courtLocation/{courtLocationId}-GET': {
        parameters: [
            {
                name: 'courtLocationId'
            },
        ]
    },
    '/masterData/court/{courtId}/courtLocations-GET': {
        parameters: [
            {
                name: 'courtId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/court/{courtId}-GET': {
        parameters: [
            {
                name: 'courtId'
            },
        ]
    },
    '/masterData/courtServiceStatus-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/courtServiceStatus/{courtServiceStatusId}-GET': {
        parameters: [
            {
                name: 'courtServiceStatusId'
            },
        ]
    },
    '/masterData/courtSystem/{courtSystemId}-GET': {
        parameters: [
            {
                name: 'courtSystemId'
            },
        ]
    },
    '/masterData/courtType/{courtTypeId}-GET': {
        parameters: [
            {
                name: 'courtTypeId'
            },
        ]
    },
    '/masterData/courtType-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/court-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/courtLocation/{courtLocationId}/courts-GET': {
        parameters: [
            {
                name: 'courtLocationId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/judgeType-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/judgeType/{judgeTypeId}-GET': {
        parameters: [
            {
                name: 'judgeTypeId'
            },
        ]
    },
    '/masterData/jurisdictionGeo/{jurisdictionGeoId}-GET': {
        parameters: [
            {
                name: 'jurisdictionGeoId'
            },
        ]
    },
    '/masterData/jurisdictionGeo-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/court/{courtId}/jurisdictionGeo-GET': {
        parameters: [
            {
                name: 'courtId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/partyRole/{partyRoleId}-GET': {
        parameters: [
            {
                name: 'partyRoleId'
            },
        ]
    },
    '/masterData/partyRoleGroup/{partyRoleGroupId}-GET': {
        parameters: [
            {
                name: 'partyRoleGroupId'
            },
        ]
    },
    '/masterData/partyRoleGroup-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/partyRole-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/areaOfLaw-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/caseTypeGroup-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/masterData/courtSystem-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'sort'
            },
            {
                name: 'order'
            },
        ]
    },
    '/normJudge/{normJudgeId}/associatedNormParties-GET': {
        parameters: [
            {
                name: 'normJudgeId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normJudge/{normJudgeId}-GET': {
        parameters: [
            {
                name: 'normJudgeId'
            },
        ]
    },
    '/normJudgeSearch/{normJudgeSearchId}-GET': {
        parameters: [
            {
                name: 'normJudgeSearchId'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/normJudge/{normJudgeId}/associatedNormAttorneys-GET': {
        parameters: [
            {
                name: 'normJudgeId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normJudge/{normJudgeId}/associatedNormLawFirms-GET': {
        parameters: [
            {
                name: 'normJudgeId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normJudgeSearch-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/normLawFirm/{normLawFirmId}/associatedNormJudges-GET': {
        parameters: [
            {
                name: 'normLawFirmId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normLawFirm/{normLawFirmId}-GET': {
        parameters: [
            {
                name: 'normLawFirmId'
            },
        ]
    },
    '/normLawFirmSearch/{normLawFirmSearchId}-GET': {
        parameters: [
            {
                name: 'normLawFirmSearchId'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/normLawFirm/{normLawFirmId}/associatedNormAttorneys-GET': {
        parameters: [
            {
                name: 'normLawFirmId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normLawFirm/{normLawFirmId}/associatedNormParties-GET': {
        parameters: [
            {
                name: 'normLawFirmId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normLawFirmSearch-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacer/importCaseByCourtUsingCaseNumber-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'pacerClientCode'
            },
            {
                name: 'caseNumber'
            },
            {
                name: 'courtId'
            },
        ]
    },
    '/pacerCaseLocator/caseSearch/allCourts-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'pacerClientCode'
            },
            {
                name: 'caseNumber'
            },
            {
                name: 'pacerCaseId'
            },
            {
                name: 'caseTitle'
            },
            {
                name: 'caseOffice'
            },
            {
                name: 'caseSequenceNumber'
            },
            {
                name: 'caseYear'
            },
            {
                name: 'caseTypeArray'
            },
            {
                name: 'courtRegionIdArray'
            },
            {
                name: 'caseFiledStartDate'
            },
            {
                name: 'caseFiledEndDate'
            },
            {
                name: 'caseTerminatedStartDate'
            },
            {
                name: 'caseTerminatedEndDate'
            },
            {
                name: 'sortParameterQuery'
            },
            {
                name: 'caseStatus'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacerCaseLocator/partySearch/allCourts-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'pacerClientCode'
            },
            {
                name: 'caseNumber'
            },
            {
                name: 'pacerCaseId'
            },
            {
                name: 'lastName'
            },
            {
                name: 'firstName'
            },
            {
                name: 'middleName'
            },
            {
                name: 'generation'
            },
            {
                name: 'partyType'
            },
            {
                name: 'partyExactNameMatch'
            },
            {
                name: 'partyRoleArray'
            },
            {
                name: 'caseTitle'
            },
            {
                name: 'caseOffice'
            },
            {
                name: 'caseSequenceNumber'
            },
            {
                name: 'caseYear'
            },
            {
                name: 'caseTypeArray'
            },
            {
                name: 'courtRegionIdArray'
            },
            {
                name: 'caseYearFrom'
            },
            {
                name: 'caseYearTo'
            },
            {
                name: 'caseFiledStartDate'
            },
            {
                name: 'caseFiledEndDate'
            },
            {
                name: 'caseTerminatedStartDate'
            },
            {
                name: 'caseTerminatedEndDate'
            },
            {
                name: 'sortParameterQuery'
            },
            {
                name: 'caseStatus'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacerCaseLocator/caseSearch/appealCourts-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'pacerClientCode'
            },
            {
                name: 'caseNumber'
            },
            {
                name: 'pacerCaseId'
            },
            {
                name: 'caseTitle'
            },
            {
                name: 'caseOffice'
            },
            {
                name: 'caseSequenceNumber'
            },
            {
                name: 'caseYear'
            },
            {
                name: 'caseTypeArray'
            },
            {
                name: 'natureOfSuitsArray'
            },
            {
                name: 'courtRegionIdArray'
            },
            {
                name: 'caseFiledStartDate'
            },
            {
                name: 'caseFiledEndDate'
            },
            {
                name: 'caseTerminatedStartDate'
            },
            {
                name: 'caseTerminatedEndDate'
            },
            {
                name: 'sortParameterQuery'
            },
            {
                name: 'caseStatus'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacerCaseLocator/partySearch/appealCourts-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'pacerClientCode'
            },
            {
                name: 'caseNumber'
            },
            {
                name: 'pacerCaseId'
            },
            {
                name: 'lastName'
            },
            {
                name: 'firstName'
            },
            {
                name: 'middleName'
            },
            {
                name: 'generation'
            },
            {
                name: 'partyType'
            },
            {
                name: 'partyExactNameMatch'
            },
            {
                name: 'partyRoleArray'
            },
            {
                name: 'caseTitle'
            },
            {
                name: 'caseOffice'
            },
            {
                name: 'caseSequenceNumber'
            },
            {
                name: 'caseYear'
            },
            {
                name: 'caseTypeArray'
            },
            {
                name: 'courtRegionIdArray'
            },
            {
                name: 'caseYearFrom'
            },
            {
                name: 'caseYearTo'
            },
            {
                name: 'caseFiledStartDate'
            },
            {
                name: 'caseFiledEndDate'
            },
            {
                name: 'caseTerminatedStartDate'
            },
            {
                name: 'caseTerminatedEndDate'
            },
            {
                name: 'sortParameterQuery'
            },
            {
                name: 'caseStatus'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacerCaseLocator/caseSearch/bankruptcyCourts-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'pacerClientCode'
            },
            {
                name: 'caseNumber'
            },
            {
                name: 'pacerCaseId'
            },
            {
                name: 'caseTitle'
            },
            {
                name: 'caseOffice'
            },
            {
                name: 'caseSequenceNumber'
            },
            {
                name: 'caseYear'
            },
            {
                name: 'caseTypeArray'
            },
            {
                name: 'federalBankruptcyChapterArray'
            },
            {
                name: 'courtRegionIdArray'
            },
            {
                name: 'caseFiledStartDate'
            },
            {
                name: 'caseFiledEndDate'
            },
            {
                name: 'caseTerminatedStartDate'
            },
            {
                name: 'caseTerminatedEndDate'
            },
            {
                name: 'caseDischargedStartDate'
            },
            {
                name: 'caseDischargedEndDate'
            },
            {
                name: 'caseDismissedStartDate'
            },
            {
                name: 'caseDismissedEndDate'
            },
            {
                name: 'sortParameterQuery'
            },
            {
                name: 'caseStatus'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacerCaseLocator/partySearch/bankruptcyCourts-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'pacerClientCode'
            },
            {
                name: 'caseNumber'
            },
            {
                name: 'pacerCaseId'
            },
            {
                name: 'lastName'
            },
            {
                name: 'firstName'
            },
            {
                name: 'middleName'
            },
            {
                name: 'generation'
            },
            {
                name: 'partyType'
            },
            {
                name: 'partyExactNameMatch'
            },
            {
                name: 'partyRoleArray'
            },
            {
                name: 'caseTitle'
            },
            {
                name: 'caseOffice'
            },
            {
                name: 'caseSequenceNumber'
            },
            {
                name: 'caseYear'
            },
            {
                name: 'caseTypeArray'
            },
            {
                name: 'courtRegionIdArray'
            },
            {
                name: 'caseYearFrom'
            },
            {
                name: 'caseYearTo'
            },
            {
                name: 'ssnOrEin'
            },
            {
                name: 'fourDigitSsn'
            },
            {
                name: 'caseFiledStartDate'
            },
            {
                name: 'caseFiledEndDate'
            },
            {
                name: 'caseTerminatedStartDate'
            },
            {
                name: 'caseTerminatedEndDate'
            },
            {
                name: 'caseDischargedStartDate'
            },
            {
                name: 'caseDischargedEndDate'
            },
            {
                name: 'caseDismissedStartDate'
            },
            {
                name: 'caseDismissedEndDate'
            },
            {
                name: 'sortParameterQuery'
            },
            {
                name: 'caseStatus'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacerCaseLocator/caseSearch/civilCourts-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'pacerClientCode'
            },
            {
                name: 'caseNumber'
            },
            {
                name: 'pacerCaseId'
            },
            {
                name: 'caseTitle'
            },
            {
                name: 'caseOffice'
            },
            {
                name: 'caseSequenceNumber'
            },
            {
                name: 'caseYear'
            },
            {
                name: 'caseTypeArray'
            },
            {
                name: 'natureOfSuitsArray'
            },
            {
                name: 'courtRegionIdArray'
            },
            {
                name: 'caseFiledStartDate'
            },
            {
                name: 'caseFiledEndDate'
            },
            {
                name: 'caseTerminatedStartDate'
            },
            {
                name: 'caseTerminatedEndDate'
            },
            {
                name: 'sortParameterQuery'
            },
            {
                name: 'caseStatus'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacerCaseLocator/partySearch/civilCourts-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'pacerClientCode'
            },
            {
                name: 'caseNumber'
            },
            {
                name: 'pacerCaseId'
            },
            {
                name: 'lastName'
            },
            {
                name: 'firstName'
            },
            {
                name: 'middleName'
            },
            {
                name: 'generation'
            },
            {
                name: 'partyType'
            },
            {
                name: 'partyExactNameMatch'
            },
            {
                name: 'partyRoleArray'
            },
            {
                name: 'caseTitle'
            },
            {
                name: 'caseOffice'
            },
            {
                name: 'caseSequenceNumber'
            },
            {
                name: 'caseYear'
            },
            {
                name: 'caseTypeArray'
            },
            {
                name: 'courtRegionIdArray'
            },
            {
                name: 'caseYearFrom'
            },
            {
                name: 'caseYearTo'
            },
            {
                name: 'caseFiledStartDate'
            },
            {
                name: 'caseFiledEndDate'
            },
            {
                name: 'caseTerminatedStartDate'
            },
            {
                name: 'caseTerminatedEndDate'
            },
            {
                name: 'sortParameterQuery'
            },
            {
                name: 'caseStatus'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacerCaseLocator/caseSearch/criminalCourts-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'pacerClientCode'
            },
            {
                name: 'caseNumber'
            },
            {
                name: 'pacerCaseId'
            },
            {
                name: 'caseTitle'
            },
            {
                name: 'caseOffice'
            },
            {
                name: 'caseSequenceNumber'
            },
            {
                name: 'caseYear'
            },
            {
                name: 'caseTypeArray'
            },
            {
                name: 'courtRegionIdArray'
            },
            {
                name: 'caseFiledStartDate'
            },
            {
                name: 'caseFiledEndDate'
            },
            {
                name: 'caseTerminatedStartDate'
            },
            {
                name: 'caseTerminatedEndDate'
            },
            {
                name: 'sortParameterQuery'
            },
            {
                name: 'caseStatus'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacerCaseLocator/partySearch/criminalCourts-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'pacerClientCode'
            },
            {
                name: 'caseNumber'
            },
            {
                name: 'pacerCaseId'
            },
            {
                name: 'lastName'
            },
            {
                name: 'firstName'
            },
            {
                name: 'middleName'
            },
            {
                name: 'generation'
            },
            {
                name: 'partyType'
            },
            {
                name: 'partyExactNameMatch'
            },
            {
                name: 'partyRoleArray'
            },
            {
                name: 'caseTitle'
            },
            {
                name: 'caseOffice'
            },
            {
                name: 'caseSequenceNumber'
            },
            {
                name: 'caseYear'
            },
            {
                name: 'caseTypeArray'
            },
            {
                name: 'courtRegionIdArray'
            },
            {
                name: 'caseYearFrom'
            },
            {
                name: 'caseYearTo'
            },
            {
                name: 'caseFiledStartDate'
            },
            {
                name: 'caseFiledEndDate'
            },
            {
                name: 'caseTerminatedStartDate'
            },
            {
                name: 'caseTerminatedEndDate'
            },
            {
                name: 'sortParameterQuery'
            },
            {
                name: 'caseStatus'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacerCaseLocator/caseSearch/multiDistrictCourts-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'pacerClientCode'
            },
            {
                name: 'caseNumber'
            },
            {
                name: 'jpmlNumber'
            },
            {
                name: 'pacerCaseId'
            },
            {
                name: 'caseTitle'
            },
            {
                name: 'caseOffice'
            },
            {
                name: 'caseSequenceNumber'
            },
            {
                name: 'caseYear'
            },
            {
                name: 'caseTypeArray'
            },
            {
                name: 'courtRegionIdArray'
            },
            {
                name: 'caseFiledStartDate'
            },
            {
                name: 'caseFiledEndDate'
            },
            {
                name: 'caseTerminatedStartDate'
            },
            {
                name: 'caseTerminatedEndDate'
            },
            {
                name: 'sortParameterQuery'
            },
            {
                name: 'caseStatus'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacerCaseLocator/partySearch/multiDistrictCourts-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'pacerClientCode'
            },
            {
                name: 'caseNumber'
            },
            {
                name: 'jpmlNumber'
            },
            {
                name: 'pacerCaseId'
            },
            {
                name: 'lastName'
            },
            {
                name: 'firstName'
            },
            {
                name: 'middleName'
            },
            {
                name: 'generation'
            },
            {
                name: 'partyType'
            },
            {
                name: 'partyExactNameMatch'
            },
            {
                name: 'partyRoleArray'
            },
            {
                name: 'caseTitle'
            },
            {
                name: 'caseOffice'
            },
            {
                name: 'caseSequenceNumber'
            },
            {
                name: 'caseYear'
            },
            {
                name: 'caseTypeArray'
            },
            {
                name: 'courtRegionIdArray'
            },
            {
                name: 'caseYearFrom'
            },
            {
                name: 'caseYearTo'
            },
            {
                name: 'caseFiledStartDate'
            },
            {
                name: 'caseFiledEndDate'
            },
            {
                name: 'caseTerminatedStartDate'
            },
            {
                name: 'caseTerminatedEndDate'
            },
            {
                name: 'sortParameterQuery'
            },
            {
                name: 'caseStatus'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacerCredential/{pacerUserId}-GET': {
        parameters: [
            {
                name: 'pacerUserId'
            },
        ]
    },
    '/pacerCredential-GET': {
        parameters: [
            {
                name: 'pageNumber'
            },
        ]
    },
    '/pacerCredential-PUT': {
        parameters: [
            {
                name: 'pacerUserId'
            },
            {
                name: 'password'
            },
            {
                name: 'defaultPacerClientCode'
            },
        ]
    },
    '/pacerCredential/{pacerUserId}-DELETE': {
        parameters: [
            {
                name: 'pacerUserId'
            },
        ]
    },
    '/normParty/{normPartyId}/associatedNormAttorneys-GET': {
        parameters: [
            {
                name: 'normPartyId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normParty/{normPartyId}-GET': {
        parameters: [
            {
                name: 'normPartyId'
            },
        ]
    },
    '/normPartySearch/{normPartySearchId}-GET': {
        parameters: [
            {
                name: 'normPartySearchId'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/normParty/{normPartyId}/associatedNormLawFirms-GET': {
        parameters: [
            {
                name: 'normPartyId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normParty/{normPartyId}/associatedNormJudges-GET': {
        parameters: [
            {
                name: 'normPartyId'
            },
            {
                name: 'pageNumber'
            },
            {
                name: 'q'
            },
        ]
    },
    '/normPartySearch-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'pageNumber'
            },
        ]
    },
    '/billingCycleUsage/{billingCycle}-GET': {
        parameters: [
            {
                name: 'billingCycle'
            },
        ]
    },
    '/dailyUsage/{date}-GET': {
        parameters: [
            {
                name: 'date'
            },
        ]
    },
    '/billingCycles-GET': {
        parameters: [
        ]
    },
}