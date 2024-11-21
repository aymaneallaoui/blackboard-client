import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/terms",
    alias: "getLearnapipublicv1terms",
    description: `Returns a list of terms.

Properties returned for each term will depend on whether or not the caller has one of the term entitlements.

Callers without either the entitlements &#x27;term.VIEW&#x27; or &#x27;term.MODIFY&#x27; will always get a minimal set of core properties:

- id
- name
- description
- availability.*

If the user has one of the entitlements, they will also get the following properties:

- externalId
- dataSourceId

**Since**: 3000.1.0`,
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
        name: "externalId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "dataSourceId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "availability.available",
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
    path: "/learn/api/public/v1/terms",
    alias: "postLearnapipublicv1terms",
    description: `Creates a term.

The &#x27;system.term.MODIFY&#x27; entitlement is needed.

**Since**: 2015.11.0`,
    requestFormat: "json",
    parameters: [
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
        status: 409,
        description: `Conflict`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/terms/:termId",
    alias: "getLearnapipublicv1termsTermId",
    description: `Loads a term.

Properties returned will depend on whether or not the caller has one of the term entitlements.

Callers without either the entitlements &#x27;term.VIEW&#x27; or &#x27;term.MODIFY&#x27; will always get a minimal set of core properties:

- id
- name
- description
- availability.*

If the user has one of the entitlements, they will also get the following properties:

- externalId
- dataSourceId

**Since**: 2015.11.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "termId",
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
    path: "/learn/api/public/v1/terms/:termId",
    alias: "deleteLearnapipublicv1termsTermId",
    description: `Deletes a term.

The &#x27;system.term.MODIFY&#x27; entitlement is needed.

**Since**: 2015.11.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "termId",
        type: "Path",
        schema: z.unknown(),
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
    path: "/learn/api/public/v1/terms/:termId",
    alias: "patchLearnapipublicv1termsTermId",
    description: `Updates a term.

The &#x27;system.term.MODIFY&#x27; entitlement is needed.

**Since**: 2015.11.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "termId",
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

export const TermsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
