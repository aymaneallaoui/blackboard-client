import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/contentCollection/resources",
    alias: "getLearnapipublicv1contentCollectionresources",
    description: `Get the top-level content collection folders.

Users with the entitlement &#x27;bbcms.cs.filesystem.REST.VIEW&#x27; or filesystem access can use this endpoint.

**Since**: 3900.41.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "modified",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "created",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "modifiedCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "createdCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "size",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "creatorId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "sizeCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "type",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "fields",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
      {
        status: 429,
        description: `The endpoint is being overloaded with requests`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/contentCollection/resources/:resourceId",
    alias: "getLearnapipublicv1contentCollectionresourcesResourceId",
    description: `Retrieves a content collection resource by id.

Resource objects only returned if the requesting User has been granted &#x27;Read&#x27; permission on the Resource, or the User has the &#x27;bbcms.cs.fileSystem.REST.VIEW&#x27; entitlement.

**Since**: 3900.41.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "resourceId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "fields",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 404,
        description: `The specified item could not be found`,
        schema: z.void(),
      },
      {
        status: 429,
        description: `The endpoint is being overloaded with requests`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/contentCollection/resources/:resourceId/children",
    alias: "getLearnapipublicv1contentCollectionresourcesResourceIdchildren",
    description: `Get the direct children resources of the specified content collection resource. The specified resource must be a folder.

Users with the entitlement &#x27;bbcms.cs.filesystem.REST.VIEW&#x27; or filesystem access can use this endpoint.

**Since**: 3900.41.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "resourceId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "modified",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "created",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "modifiedCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "createdCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "size",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "creatorId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "sizeCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "type",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "fields",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
      {
        status: 429,
        description: `The endpoint is being overloaded with requests`,
        schema: z.void(),
      },
    ],
  },
]);

export const Content_collection_resourcesApi = new Zodios(
  "localhost:3000/",
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
