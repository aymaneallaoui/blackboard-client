import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/pronouns",
    alias: "getLearnapipublicv1pronouns",
    description: `Returns a list of pronouns

Supports the standard paging query parameters, with a maximum page size of 200.

**Since**: 3900.26.0`,
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
  },
  {
    method: "post",
    path: "/learn/api/public/v1/pronouns",
    alias: "postLearnapipublicv1pronouns",
    description: `Create a pronoun

Users with the &#x27;system.pronouns.MODIFY&#x27; entitlement can create pronouns.

Pending pronouns created will be submitted to the System Administrator for approval and will not be immediately added to the list, regardless of entitlement.

**Since**: 3900.26.0`,
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
        description: `Pronoun text (name property) must pass XSS validation`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/pronouns/:pronounId",
    alias: "deleteLearnapipublicv1pronounsPronounId",
    description: `Delete a pronoun

The &#x27;system.pronouns.MODIFY&#x27; entitlement is needed in order to delete the pronoun.

**Since**: 3900.26.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "pronounId",
        type: "Path",
        schema: z.unknown(),
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
    method: "patch",
    path: "/learn/api/public/v1/pronouns/:pronounId",
    alias: "patchLearnapipublicv1pronounsPronounId",
    description: `Update a pronoun

The &#x27;system.pronouns.MODIFY&#x27; entitlement is needed in order to update the pronoun.

**Since**: 3900.26.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "pronounId",
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
        description: `Pronoun text (name property) must pass XSS validation`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
    ],
  },
]);

export const PronounsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
