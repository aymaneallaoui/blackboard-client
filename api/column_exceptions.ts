import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "post",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/columns/:columnId/exceptions",
    alias:
      "postLearnapipublicv1coursesCourseIdgradebookcolumnsColumnIdexceptions",
    description: `Returns a paged list of all user exceptions associated with the course and gradebook column. The entitlement(course.gradebook-item.exceptions.VIEW) and be enrolled to the course is needed. &lt;/pre&gt;

**Since**: 3900.103.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "columnId",
        type: "Path",
        schema: z.unknown(),
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
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/columns/:columnId/exceptions/users/:userId",
    alias:
      "getLearnapipublicv1coursesCourseIdgradebookcolumnsColumnIdexceptionsusersUserId",
    description: `Returns specific user exception associated with the course and gradebook column. The entitlement(course.gradebook-item.exceptions.VIEW) and be enrolled to the course is needed. &lt;/pre&gt;

**Since**: 3900.103.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "userId",
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
    method: "put",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/columns/:columnId/exceptions/users/:userId",
    alias:
      "putLearnapipublicv1coursesCourseIdgradebookcolumnsColumnIdexceptionsusersUserId",
    description: `Creates/updates an exception associated with the course and gradable item for a user The entitlement(course.gradebook-item.exceptions.MODIFY) is checked.

**Since**: 3900.103.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "userId",
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
    path: "/learn/api/public/v1/courses/:courseId/gradebook/columns/:columnId/exceptions/users/:userId",
    alias:
      "deleteLearnapipublicv1coursesCourseIdgradebookcolumnsColumnIdexceptionsusersUserId",
    description: `Deletes an exception associated with the course and gradable item for a user. The entitlement(course.gradebook-item.exceptions.MODIFY) is checked.

**Since**: 3900.103.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "columnId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "userId",
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
]);

export const Column_exceptionsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
