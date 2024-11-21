import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/proctoring/services",
    alias: "getLearnapipublicv1proctoringservices",
    description: `Returns a list of proctoring services Supports the standard paging query parameters, with a maximum page size of 1000. No entitlement check is performed as this data is not restricted. Any secure fields such as keys/secrets are not included in the results.

**Since**: 3500.6.0`,
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
  },
  {
    method: "get",
    path: "/learn/api/public/v1/proctoring/services/:proctoringServiceId",
    alias: "getLearnapipublicv1proctoringservicesProctoringServiceId",
    description: `Returns the proctoring service with the specified Id No entitlement check is performed as this data is not restricted. Any secure fields such as keys/secrets are not included in the results.

**Since**: 3500.6.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "proctoringServiceId",
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
  },
]);

export const ProctoringApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
