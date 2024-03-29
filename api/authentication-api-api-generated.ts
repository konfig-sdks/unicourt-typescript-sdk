/* tslint:disable */
/* eslint-disable */
/*
UniCourt Enterprise APIs

<button><a href=\"/enterpriseapi/download/UniCourt-Enterprise-API-Spec.yaml\" >Download UniCourt Enterprise APIs Specification</a></button>


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AccessTokenIdListResponse } from '../models';
// @ts-ignore
import { AccessTokenRequest } from '../models';
// @ts-ignore
import { AccessTokenResponse } from '../models';
// @ts-ignore
import { Exception } from '../models';
// @ts-ignore
import { InvalidateAccessTokenRequest } from '../models';
// @ts-ignore
import { Success } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AuthenticationApiApi - axios parameter creator
 * @export
 */
export const AuthenticationApiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint allows you to generate a new access token, which is a required field for all UniCourt API endpoints except for the Authentication API. To generate a new token, you must provide your Client ID and Client Secret ID which you can find by logging into your UniCourt account. At any time, you can have a maximum of 10 active access tokens. The tokens never expire and, if you make a request which would otherwise lead to you having more than 10 active tokens, you will receive an error message.
         * @summary Generate new token to access API.
         * @param {AccessTokenRequest} [accessTokenRequest] The endpoint accepts your Client ID and Client Secret ID as part of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateNewToken: async (accessTokenRequest?: AccessTokenRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/generateNewToken`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: accessTokenRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/generateNewToken',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(accessTokenRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * An endpoint which allows you to view all active access tokens associated with your Client ID and Client Secret ID.
         * @summary API to list all the access tokens Id.
         * @param {AccessTokenRequest} [accessTokenRequest] The endpoint accepts your Client ID and Client Secret ID as part of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllTokenIds: async (accessTokenRequest?: AccessTokenRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/listAllTokenIds`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: accessTokenRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/listAllTokenIds',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(accessTokenRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * An endpoint which allows you to invalidate a given access token.
         * @summary API to invalidate the access token.
         * @param {InvalidateAccessTokenRequest} [invalidateAccessTokenRequest] The endpoint accepts your Client ID, Client Secret ID and the Token ID for the access token you wish to invalidate as part of the request. You can obtain a list of all Token IDs from the /listAllTokenIds endpoint within this API.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invalidateAccessToken: async (invalidateAccessTokenRequest?: InvalidateAccessTokenRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/invalidateToken`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: invalidateAccessTokenRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/invalidateToken',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(invalidateAccessTokenRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * An endpoint which allows you to invalidate all existing access tokens associated with your UniCourt account.
         * @summary API to invalidate all access tokens.
         * @param {AccessTokenRequest} [accessTokenRequest] The endpoint accepts your Client ID and Secret Client ID as part of the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invalidateAllTokens: async (accessTokenRequest?: AccessTokenRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/invalidateAllTokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: accessTokenRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/invalidateAllTokens',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(accessTokenRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApiApi - functional programming interface
 * @export
 */
export const AuthenticationApiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint allows you to generate a new access token, which is a required field for all UniCourt API endpoints except for the Authentication API. To generate a new token, you must provide your Client ID and Client Secret ID which you can find by logging into your UniCourt account. At any time, you can have a maximum of 10 active access tokens. The tokens never expire and, if you make a request which would otherwise lead to you having more than 10 active tokens, you will receive an error message.
         * @summary Generate new token to access API.
         * @param {AuthenticationApiApiGenerateNewTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateNewToken(requestParameters: AuthenticationApiApiGenerateNewTokenRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccessTokenResponse>> {
            const accessTokenRequest: AccessTokenRequest = {
                clientId: requestParameters.clientId,
                clientSecret: requestParameters.clientSecret
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateNewToken(accessTokenRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * An endpoint which allows you to view all active access tokens associated with your Client ID and Client Secret ID.
         * @summary API to list all the access tokens Id.
         * @param {AuthenticationApiApiGetAllTokenIdsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllTokenIds(requestParameters: AuthenticationApiApiGetAllTokenIdsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccessTokenIdListResponse>> {
            const accessTokenRequest: AccessTokenRequest = {
                clientId: requestParameters.clientId,
                clientSecret: requestParameters.clientSecret
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllTokenIds(accessTokenRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * An endpoint which allows you to invalidate a given access token.
         * @summary API to invalidate the access token.
         * @param {AuthenticationApiApiInvalidateAccessTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invalidateAccessToken(requestParameters: AuthenticationApiApiInvalidateAccessTokenRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const invalidateAccessTokenRequest: InvalidateAccessTokenRequest = {
                clientId: requestParameters.clientId,
                clientSecret: requestParameters.clientSecret,
                tokenId: requestParameters.tokenId
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.invalidateAccessToken(invalidateAccessTokenRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * An endpoint which allows you to invalidate all existing access tokens associated with your UniCourt account.
         * @summary API to invalidate all access tokens.
         * @param {AuthenticationApiApiInvalidateAllTokensRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invalidateAllTokens(requestParameters: AuthenticationApiApiInvalidateAllTokensRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Success>> {
            const accessTokenRequest: AccessTokenRequest = {
                clientId: requestParameters.clientId,
                clientSecret: requestParameters.clientSecret
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.invalidateAllTokens(accessTokenRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationApiApi - factory interface
 * @export
 */
export const AuthenticationApiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiApiFp(configuration)
    return {
        /**
         * This endpoint allows you to generate a new access token, which is a required field for all UniCourt API endpoints except for the Authentication API. To generate a new token, you must provide your Client ID and Client Secret ID which you can find by logging into your UniCourt account. At any time, you can have a maximum of 10 active access tokens. The tokens never expire and, if you make a request which would otherwise lead to you having more than 10 active tokens, you will receive an error message.
         * @summary Generate new token to access API.
         * @param {AuthenticationApiApiGenerateNewTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateNewToken(requestParameters: AuthenticationApiApiGenerateNewTokenRequest, options?: AxiosRequestConfig): AxiosPromise<AccessTokenResponse> {
            return localVarFp.generateNewToken(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * An endpoint which allows you to view all active access tokens associated with your Client ID and Client Secret ID.
         * @summary API to list all the access tokens Id.
         * @param {AuthenticationApiApiGetAllTokenIdsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllTokenIds(requestParameters: AuthenticationApiApiGetAllTokenIdsRequest, options?: AxiosRequestConfig): AxiosPromise<AccessTokenIdListResponse> {
            return localVarFp.getAllTokenIds(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * An endpoint which allows you to invalidate a given access token.
         * @summary API to invalidate the access token.
         * @param {AuthenticationApiApiInvalidateAccessTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invalidateAccessToken(requestParameters: AuthenticationApiApiInvalidateAccessTokenRequest, options?: AxiosRequestConfig): AxiosPromise<Success> {
            return localVarFp.invalidateAccessToken(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * An endpoint which allows you to invalidate all existing access tokens associated with your UniCourt account.
         * @summary API to invalidate all access tokens.
         * @param {AuthenticationApiApiInvalidateAllTokensRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invalidateAllTokens(requestParameters: AuthenticationApiApiInvalidateAllTokensRequest, options?: AxiosRequestConfig): AxiosPromise<Success> {
            return localVarFp.invalidateAllTokens(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for generateNewToken operation in AuthenticationApiApi.
 * @export
 * @interface AuthenticationApiApiGenerateNewTokenRequest
 */
export type AuthenticationApiApiGenerateNewTokenRequest = {
    
} & AccessTokenRequest

/**
 * Request parameters for getAllTokenIds operation in AuthenticationApiApi.
 * @export
 * @interface AuthenticationApiApiGetAllTokenIdsRequest
 */
export type AuthenticationApiApiGetAllTokenIdsRequest = {
    
} & AccessTokenRequest

/**
 * Request parameters for invalidateAccessToken operation in AuthenticationApiApi.
 * @export
 * @interface AuthenticationApiApiInvalidateAccessTokenRequest
 */
export type AuthenticationApiApiInvalidateAccessTokenRequest = {
    
} & InvalidateAccessTokenRequest

/**
 * Request parameters for invalidateAllTokens operation in AuthenticationApiApi.
 * @export
 * @interface AuthenticationApiApiInvalidateAllTokensRequest
 */
export type AuthenticationApiApiInvalidateAllTokensRequest = {
    
} & AccessTokenRequest

/**
 * AuthenticationApiApiGenerated - object-oriented interface
 * @export
 * @class AuthenticationApiApiGenerated
 * @extends {BaseAPI}
 */
export class AuthenticationApiApiGenerated extends BaseAPI {
    /**
     * This endpoint allows you to generate a new access token, which is a required field for all UniCourt API endpoints except for the Authentication API. To generate a new token, you must provide your Client ID and Client Secret ID which you can find by logging into your UniCourt account. At any time, you can have a maximum of 10 active access tokens. The tokens never expire and, if you make a request which would otherwise lead to you having more than 10 active tokens, you will receive an error message.
     * @summary Generate new token to access API.
     * @param {AuthenticationApiApiGenerateNewTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiApiGenerated
     */
    public generateNewToken(requestParameters: AuthenticationApiApiGenerateNewTokenRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiApiFp(this.configuration).generateNewToken(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * An endpoint which allows you to view all active access tokens associated with your Client ID and Client Secret ID.
     * @summary API to list all the access tokens Id.
     * @param {AuthenticationApiApiGetAllTokenIdsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiApiGenerated
     */
    public getAllTokenIds(requestParameters: AuthenticationApiApiGetAllTokenIdsRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiApiFp(this.configuration).getAllTokenIds(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * An endpoint which allows you to invalidate a given access token.
     * @summary API to invalidate the access token.
     * @param {AuthenticationApiApiInvalidateAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiApiGenerated
     */
    public invalidateAccessToken(requestParameters: AuthenticationApiApiInvalidateAccessTokenRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiApiFp(this.configuration).invalidateAccessToken(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * An endpoint which allows you to invalidate all existing access tokens associated with your UniCourt account.
     * @summary API to invalidate all access tokens.
     * @param {AuthenticationApiApiInvalidateAllTokensRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiApiGenerated
     */
    public invalidateAllTokens(requestParameters: AuthenticationApiApiInvalidateAllTokensRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiApiFp(this.configuration).invalidateAllTokens(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
