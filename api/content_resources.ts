import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/resources",
    alias: "getLearnapipublicv1coursesCourseIdresources",
    description: `Returns a list of the top-level course resources.

Users with the &#x27;bbcms.cs.fileSystem.REST.VIEW&#x27; entitlement can view all resources.

All other users can view resources for which they have been granted the &#x27;Read&#x27; permission.

**Since**: 3700.12.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
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
        status: 404,
        description: `The specified course could not be found`,
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
    path: "/learn/api/public/v1/courses/:courseId/resources/:resourceId",
    alias: "getLearnapipublicv1coursesCourseIdresourcesResourceId",
    description: `Loads a Course Resource by Id.

Users with the &#x27;bbcms.cs.fileSystem.REST.VIEW&#x27; entitlement can view all resources.

All other users can view resources for which they have been granted the &#x27;Read&#x27; permission.

**Since**: 3700.13.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
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
        description: `The specified resource could not be loaded for the specified course`,
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
    path: "/learn/api/public/v1/courses/:courseId/resources/:resourceId/children",
    alias: "getLearnapipublicv1coursesCourseIdresourcesResourceIdchildren",
    description: `Returns a list of Course Resources that are children of the specified Resource.

Users with the &#x27;bbcms.cs.fileSystem.REST.VIEW&#x27; entitlement can view all resources.

All other users can view resources for which they have been granted the &#x27;Read&#x27; permission.

**Since**: 3700.13.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "resourceId",
        type: "Path",
        schema: z.unknown(),
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
        description: `The specified resource was not a folder; or The children type parameter was not valid. Use File or Folder`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user does not have permission to view the specified resource`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified resource could not be found in the specified course`,
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

export const Content_resourcesApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
