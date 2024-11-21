import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/attempts/:attemptId/files",
    alias: "getLearnapipublicv1coursesCourseIdgradebookattemptsAttemptIdfiles",
    description: `Get the list of file metadata for a Student Submission associated to the course and attempt.

- Id
- Name

**Since**: 3400.6.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "attemptId",
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
    method: "post",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/attempts/:attemptId/files",
    alias: "postLearnapipublicv1coursesCourseIdgradebookattemptsAttemptIdfiles",
    description: `

Attach a file to an Attempt for a Student Submission. Currently only supports Classic/9.1 Course Assignments. &lt;/p&gt;

**Since**: 3500.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "attemptId",
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
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/attempts/:attemptId/files/:attemptFileId",
    alias:
      "getLearnapipublicv1coursesCourseIdgradebookattemptsAttemptIdfilesAttemptFileId",
    description: `Get the file metadata for a Student Submission associated to the course and attempt.

- Id
- Name

**Since**: 3400.6.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "attemptId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "attemptFileId",
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
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/attempts/:attemptId/files/:attemptFileId",
    alias:
      "deleteLearnapipublicv1coursesCourseIdgradebookattemptsAttemptIdfilesAttemptFileId",
    description: `Delete the file for a Student Submission associated to an attempt.

The student who owns the file can delete it while the attempt is in progress.

**Since**: 3500.2.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "attemptId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "attemptFileId",
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
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/attempts/:attemptId/files/:attemptFileId/download",
    alias:
      "getLearnapipublicv1coursesCourseIdgradebookattemptsAttemptIdfilesAttemptFileIddownload",
    description: `Download the contents of the file for a Student Submission.

**Since**: 3400.6.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "attemptId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "attemptFileId",
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

export const Course_grade_attemptsApi = new Zodios(
  "localhost:3000/",
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
