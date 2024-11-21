import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/columns/:columnId/attempts/:attemptId/rubric/evaluations",
    alias:
      "getLearnapipublicv1coursesCourseIdgradebookcolumnsColumnIdattemptsAttemptIdrubricevaluations",
    description: `Returns the list of Rubric Evaluations related to the specified attempt.

User must have the following entitlement in order to see the evaluations.

- course.gradebook.MODIFY

**Since**: 3900.69.0`,
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
        name: "attemptId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "submitted",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "submittedCompare",
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
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/columns/:columnId/groupAttempts/:groupAttemptId/rubric/evaluations",
    alias:
      "getLearnapipublicv1coursesCourseIdgradebookcolumnsColumnIdgroupAttemptsGroupAttemptIdrubricevaluations",
    description: `Returns the list of Rubric Evaluations related to the specified group attempt.

User must have the following entitlement in order to see the evaluations.

- course.gradebook.MODIFY

**Since**: 3900.100.0`,
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
        name: "groupAttemptId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "submitted",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "submittedCompare",
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
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/rubrics/:rubricId/associations/:rubricAssociationId/evaluations",
    alias:
      "getLearnapipublicv1coursesCourseIdrubricsRubricIdassociationsRubricAssociationIdevaluations",
    description: `Returns a list of rubric evaluations for a given course Id, rubric Id and rubric association Id.

User must have the following entitlement in order to see the provided course&#x27;s rubrics.

- course.gradebook.MODIFY

**Since**: 3900.69.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "rubricId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "rubricAssociationId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "submitted",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "submittedCompare",
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
    path: "/learn/api/public/v1/courses/:courseId/rubrics/:rubricId/associations/:rubricAssociationId/evaluations",
    alias:
      "postLearnapipublicv1coursesCourseIdrubricsRubricIdassociationsRubricAssociationIdevaluations",
    description: `Creates a rubric evaluation related with the given course Id, rubric Id, rubric association Id and evaluation Id. This endpoint only supports Ultra courses in Blackboard Learn.

Creation require the selected scores for all rubric evaluation cells.

User must have the following entitlement in order to create the provided rubric evaluation.

- course.gradebook.MODIFY

**Since**: 3900.89.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "rubricId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "rubricAssociationId",
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
    path: "/learn/api/public/v1/courses/:courseId/rubrics/:rubricId/associations/:rubricAssociationId/evaluations/:rubricEvaluationId",
    alias:
      "getLearnapipublicv1coursesCourseIdrubricsRubricIdassociationsRubricAssociationIdevaluationsRubricEvaluationId",
    description: `Returns a rubric evaluation for a given course Id, rubric Id, rubric association Id and evaluation Id.

User must have the following entitlement in order to see the provided course&#x27;s rubrics.

- course.gradebook.MODIFY

**Since**: 3900.69.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "rubricId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "rubricAssociationId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "rubricEvaluationId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "fields",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "expand",
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
    path: "/learn/api/public/v1/courses/:courseId/rubrics/:rubricId/associations/:rubricAssociationId/evaluations/:rubricEvaluationId",
    alias:
      "patchLearnapipublicv1coursesCourseIdrubricsRubricIdassociationsRubricAssociationIdevaluationsRubricEvaluationId",
    description: `Updates a rubric evaluation related with the given course Id, rubric Id, rubric association Id and evaluation Id. This endpoint only supports Ultra courses in Blackboard Learn.

Partial update is allowed, it accepts 1 to all cells in the rubric evaluation body.

User must have the following entitlement in order to update the provided rubric evaluation.

- course.gradebook.MODIFY

**Since**: 3900.89.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "rubricId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "rubricAssociationId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "rubricEvaluationId",
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

export const Rubric_evaluationsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
