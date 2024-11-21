import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/periods",
    alias: "getLearnapipublicv1coursesCourseIdgradebookperiods",
    description: `Returns a list of grading periods.

The entitlement &quot;course.gradebook.MODIFY&quot; or &quot;course.gradebook-metadata.VIEW&quot; is needed. Note that grading period Ids may be visible on GradableItems based on GradableItem (column / assignment) entitlement restrictions.

This endpoint supports paging, sorting, and the filtering of fields returned on result object.

**Since**: 3300.3.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
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
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/periods",
    alias: "postLearnapipublicv1coursesCourseIdgradebookperiods",
    description: `Create a grading period.

The entitlement &quot;course.gradebook.MODIFY&quot; is needed.

This endpoint supports the filtering of fields returned on result object.

This endpoint has an optional request parameter &quot;associate&quot;, which will default false. If associate&#x3D;true, then when the period is updated all assignments in this course  with a due date within the bounds of the grading period&#x27;s start and end dates (if set)  will associate themselves to the updated grading period.

**Since**: 3300.3.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "associate",
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
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/periods/:periodId",
    alias: "getLearnapipublicv1coursesCourseIdgradebookperiodsPeriodId",
    description: `Returns a specific grading period.

The entitlement &quot;course.gradebook.MODIFY&quot; or &quot;course.gradebook-metadata.VIEW&quot; is needed. Note that grading period Ids may be visible on GradableItems based on GradableItem (column / assignment) entitlement restrictions.

This endpoint supports the filtering of fields returned on result object.

**Since**: 3300.3.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "periodId",
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
    path: "/learn/api/public/v1/courses/:courseId/gradebook/periods/:periodId",
    alias: "deleteLearnapipublicv1coursesCourseIdgradebookperiodsPeriodId",
    description: `Delete a specific grading period. The entitlement &quot;course.gradebook.MODIFY&quot; is needed.

**Since**: 3300.3.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "periodId",
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
    path: "/learn/api/public/v1/courses/:courseId/gradebook/periods/:periodId",
    alias: "patchLearnapipublicv1coursesCourseIdgradebookperiodsPeriodId",
    description: `Update a grading period. The entitlement &quot;course.gradebook.MODIFY&quot; is needed.

This endpoint supports the filtering of fields returned on result object.

This endpoint has an optional request parameter &quot;associate&quot;, which will default false. If associate&#x3D;true, then when the period is updated all assignments in this course  with a due date within the bounds of the grading period&#x27;s start and end dates (if set)  will associate themselves to the updated grading period.

**Since**: 3300.3.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "periodId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "associate",
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
]);

export const Course_grading_periodsApi = new Zodios(
  "localhost:3000/",
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
