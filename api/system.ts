import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/system/info",
    alias: "getLearnapipublicv1systeminfo",
    description: `Gets the values of Cloud settings that are needed for interacting with platform services.

**Since**: 3900.56.0`,
    requestFormat: "json",
    parameters: [
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
    path: "/learn/api/public/v1/system/policies/privacy",
    alias: "getLearnapipublicv1systempoliciesprivacy",
    description: `Returns the links to the Blackboard and Institution privacy policies

**Since**: 3400.5.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "locale",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/learn/api/public/v1/system/tasks/:taskId",
    alias: "getLearnapipublicv1systemtasksTaskId",
    description: `Get the background task by the given task Id.

**Since**: 3800.1.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "taskId",
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
        description: `The task id is invalid or not properly formatted`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user is not authorized to view the specified Task object`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The task id is not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/system/version",
    alias: "getLearnapipublicv1systemversion",
    description: `Gets the current Learn server version.

**Since**: 3000.3.0`,
    requestFormat: "json",
    response: z.void(),
  },
]);

export const SystemApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
