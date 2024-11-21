import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/logs/sis/dataSets/:id",
    alias: "getLearnapipublicv1logssisdataSetsId",
    description: `

Returns a list of SIS Integration logs. Users with &#x27;system.dataintegrations.log.VIEW&#x27; entitlement can view these logs. &lt;/p&gt; &lt;/p&gt; NOTE: If integration is processing the feed file then 423 (LOCKED) will be returned as response.

**Since**: 3200.0.1`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "level",
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
        status: 423,
        description: `Locked`,
        schema: z.void(),
      },
    ],
  },
]);

export const SIS_LogsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
