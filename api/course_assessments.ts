import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/assessments/:assessmentId/questions",
    alias: "getLearnapipublicv1coursesCourseIdassessmentsAssessmentIdquestions",
    description: `Get the list of questions for an Ultra Assessment.

Either &#x27;course.assessment.CREATE&#x27; or &#x27;course.assessment.MODIFY&#x27; entitlement is needed to view questions. If the assessment has the external submissions setting enabled, then either the &#x27;course.assessment.VIEW&#x27; or &#x27;course.assessment.EXECUTE&#x27; entitlement is needed to view questions, and only presentation questions are returned.

**Since**: 3300.9.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "assessmentId",
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
        status: 404,
        description: `Access Denied`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v1/courses/:courseId/assessments/:assessmentId/questions",
    alias:
      "postLearnapipublicv1coursesCourseIdassessmentsAssessmentIdquestions",
    description: `Creates a question for an Ultra Assessment.

The &#x27;course.assessment.MODIFY&#x27; entitlement is needed to create a question.

**Since**: 3300.9.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "assessmentId",
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
        description: `The request did not specify valid data`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user does not have entitlements to create questions`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `The question can not be created because it conflicts with other data`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/assessments/:assessmentId/questions/:questionId",
    alias:
      "getLearnapipublicv1coursesCourseIdassessmentsAssessmentIdquestionsQuestionId",
    description: `Get a question by Id from an Ultra Assessment.

Either &#x27;course.assessment.CREATE&#x27; or &#x27;course.assessment.MODIFY&#x27; entitlement is needed to view a question.

**Since**: 3300.9.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "assessmentId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "questionId",
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
        description: `Access Denied`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Question is not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/assessments/:assessmentId/questions/:questionId",
    alias:
      "deleteLearnapipublicv1coursesCourseIdassessmentsAssessmentIdquestionsQuestionId",
    description: `Delete a question, specified by Id, from an Ultra Assessment.

The &#x27;course.assessment.DELETE&#x27; entitlement is needed to perform the operation.

**Since**: 3300.9.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "assessmentId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "questionId",
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
        description: `Access Denied`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Question is not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "patch",
    path: "/learn/api/public/v1/courses/:courseId/assessments/:assessmentId/questions/:questionId",
    alias:
      "patchLearnapipublicv1coursesCourseIdassessmentsAssessmentIdquestionsQuestionId",
    description: `Update a Presentation Question, specified by Id, from an Ultra Assessment.

The &#x27;course.assessment.MODIFY&#x27; entitlement is needed to perform the operation.

**Since**: 3300.9.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "assessmentId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "questionId",
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
]);

export const Course_assessmentsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
