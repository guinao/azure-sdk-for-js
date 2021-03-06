/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/fileSystemOperationsMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a FileSystemOperations. */
export class FileSystemOperations {
  private readonly client: StorageClientContext;

  /**
   * Create a FileSystemOperations.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * Create a FileSystem rooted at the specified location. If the FileSystem already exists, the
   * operation fails.  This operation does not support conditional HTTP requests.
   * @summary Create FileSystem
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSystemCreateResponse>
   */
  create(options?: Models.FileSystemCreateOptionalParams): Promise<Models.FileSystemCreateResponse>;
  /**
   * @param callback The callback
   */
  create(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  create(options: Models.FileSystemCreateOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  create(options?: Models.FileSystemCreateOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileSystemCreateResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      createOperationSpec,
      callback) as Promise<Models.FileSystemCreateResponse>;
  }

  /**
   * Set properties for the FileSystem.  This operation supports conditional HTTP requests.  For more
   * information, see [Specifying Conditional Headers for Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   * @summary Set FileSystem Properties
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSystemSetPropertiesResponse>
   */
  setProperties(options?: Models.FileSystemSetPropertiesOptionalParams): Promise<Models.FileSystemSetPropertiesResponse>;
  /**
   * @param callback The callback
   */
  setProperties(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  setProperties(options: Models.FileSystemSetPropertiesOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  setProperties(options?: Models.FileSystemSetPropertiesOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileSystemSetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      setPropertiesOperationSpec,
      callback) as Promise<Models.FileSystemSetPropertiesResponse>;
  }

  /**
   * All system and user-defined filesystem properties are specified in the response headers.
   * @summary Get FileSystem Properties.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSystemGetPropertiesResponse>
   */
  getProperties(options?: Models.FileSystemGetPropertiesOptionalParams): Promise<Models.FileSystemGetPropertiesResponse>;
  /**
   * @param callback The callback
   */
  getProperties(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getProperties(options: Models.FileSystemGetPropertiesOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  getProperties(options?: Models.FileSystemGetPropertiesOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileSystemGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPropertiesOperationSpec,
      callback) as Promise<Models.FileSystemGetPropertiesResponse>;
  }

  /**
   * Marks the FileSystem for deletion.  When a FileSystem is deleted, a FileSystem with the same
   * identifier cannot be created for at least 30 seconds. While the filesystem is being deleted,
   * attempts to create a filesystem with the same identifier will fail with status code 409
   * (Conflict), with the service returning additional error information indicating that the
   * filesystem is being deleted. All other operations, including operations on any files or
   * directories within the filesystem, will fail with status code 404 (Not Found) while the
   * filesystem is being deleted. This operation supports conditional HTTP requests.  For more
   * information, see [Specifying Conditional Headers for Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   * @summary Delete FileSystem
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSystemDeleteResponse>
   */
  deleteMethod(options?: Models.FileSystemDeleteMethodOptionalParams): Promise<Models.FileSystemDeleteResponse>;
  /**
   * @param callback The callback
   */
  deleteMethod(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(options: Models.FileSystemDeleteMethodOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(options?: Models.FileSystemDeleteMethodOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileSystemDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.FileSystemDeleteResponse>;
  }

  /**
   * List FileSystem paths and their properties.
   * @summary List Paths
   * @param recursive Required
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSystemListPathsResponse>
   */
  listPaths(recursive: boolean, options?: Models.FileSystemListPathsOptionalParams): Promise<Models.FileSystemListPathsResponse>;
  /**
   * @param recursive Required
   * @param callback The callback
   */
  listPaths(recursive: boolean, callback: coreHttp.ServiceCallback<Models.PathList>): void;
  /**
   * @param recursive Required
   * @param options The optional parameters
   * @param callback The callback
   */
  listPaths(recursive: boolean, options: Models.FileSystemListPathsOptionalParams, callback: coreHttp.ServiceCallback<Models.PathList>): void;
  listPaths(recursive: boolean, options?: Models.FileSystemListPathsOptionalParams | coreHttp.ServiceCallback<Models.PathList>, callback?: coreHttp.ServiceCallback<Models.PathList>): Promise<Models.FileSystemListPathsResponse> {
    return this.client.sendOperationRequest(
      {
        recursive,
        options
      },
      listPathsOperationSpec,
      callback) as Promise<Models.FileSystemListPathsResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const createOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{filesystem}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.resource1,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.properties,
    Parameters.requestId,
    Parameters.version
  ],
  responses: {
    201: {
      headersMapper: Mappers.FileSystemCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileSystemCreateHeaders
    }
  },
  serializer
};

const setPropertiesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PATCH",
  path: "{filesystem}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.resource1,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.properties,
    Parameters.requestId,
    Parameters.version,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince
  ],
  responses: {
    200: {
      headersMapper: Mappers.FileSystemSetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileSystemSetPropertiesHeaders
    }
  },
  serializer
};

const getPropertiesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "HEAD",
  path: "{filesystem}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.resource1,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.requestId,
    Parameters.version
  ],
  responses: {
    200: {
      headersMapper: Mappers.FileSystemGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileSystemGetPropertiesHeaders
    }
  },
  serializer
};

const deleteMethodOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "{filesystem}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.resource1,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.requestId,
    Parameters.version,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince
  ],
  responses: {
    202: {
      headersMapper: Mappers.FileSystemDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileSystemDeleteHeaders
    }
  },
  serializer
};

const listPathsOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{filesystem}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.continuation,
    Parameters.path,
    Parameters.recursive0,
    Parameters.maxResults,
    Parameters.upn,
    Parameters.resource1,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.requestId,
    Parameters.version
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PathList,
      headersMapper: Mappers.FileSystemListPathsHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileSystemListPathsHeaders
    }
  },
  serializer
};
