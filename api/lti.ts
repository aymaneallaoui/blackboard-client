import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/lti/domains",
    alias: "getLearnapipublicv1ltidomains",
    description: `This endpoint returns the list of LTI domain configs

No entitlements required to view the data exposed by this endpoint (Since: 3900.46.0)

Entitlement system.administration.VIEW required for versions 3900.45.0 and before

**Since**: 3300.9.0`,
    requestFormat: "json",
    parameters: [
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
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v1/lti/domains",
    alias: "postLearnapipublicv1ltidomains",
    description: `Creates an LTI Domain Config.

The &#x27;system.administration.VIEW&#x27; entitlement is needed to create a domain.

**Since**: 3300.9.0`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/lti/domains/:domainId",
    alias: "getLearnapipublicv1ltidomainsDomainId",
    description: `This endpoint returns the LTI domain config with the specified Id

No entitlements required to view the data exposed by this endpoint (Since: 3900.46.0)

Entitlement system.administration.VIEW required for versions 3900.45.0 and before

**Since**: 3300.9.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "domainId",
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
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/lti/domains/:domainId",
    alias: "deleteLearnapipublicv1ltidomainsDomainId",
    description: `Deletes an LTI Domain Config.

The &#x27;system.administration.VIEW&#x27; entitlement is needed to delete a domain.

**Since**: 3300.9.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "domainId",
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
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "patch",
    path: "/learn/api/public/v1/lti/domains/:domainId",
    alias: "patchLearnapipublicv1ltidomainsDomainId",
    description: `Updates an LTI Domain Config.

The &#x27;system.administration.VIEW&#x27; entitlement is needed to update a domain.

**Since**: 3300.9.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "domainId",
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
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Conflict`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/lti/placements",
    alias: "getLearnapipublicv1ltiplacements",
    description: `Returns a list of LTI placements

Supports the standard paging and sorting query parameters, with a maximum page size of 1000.

**Since**: 3300.0.0`,
    requestFormat: "json",
    parameters: [
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
        name: "handle",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "type",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "authorId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "courseId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "domainId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "availability.available",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "sort",
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
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v1/lti/placements",
    alias: "postLearnapipublicv1ltiplacements",
    description: `Creates an LTI placement

The &#x27;system.administration.VIEW&#x27; entitlement is required to create placements

**Since**: 3300.0.0`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Conflict`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/lti/placements/:placementId",
    alias: "getLearnapipublicv1ltiplacementsPlacementId",
    description: `Returns the LTI placement with the specified Id

**Since**: 3300.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "placementId",
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
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/lti/placements/:placementId",
    alias: "deleteLearnapipublicv1ltiplacementsPlacementId",
    description: `Deletes an LTI placement with the specified Id

The &#x27;system.administration.VIEW&#x27; entitlement is required to delete placements

**Since**: 3300.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "placementId",
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
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "patch",
    path: "/learn/api/public/v1/lti/placements/:placementId",
    alias: "patchLearnapipublicv1ltiplacementsPlacementId",
    description: `Updates an LTI placement with the given Id

The &#x27;system.administration.VIEW&#x27; entitlement is required to update placements

**Since**: 3300.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "placementId",
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
        status: 400,
        description: `Bad Request`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Conflict`,
        schema: z.void(),
      },
    ],
  },
]);

export const LtiApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
