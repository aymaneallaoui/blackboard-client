import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/columns/:columnId/rubrics/associations",
    alias:
      "getLearnapipublicv1coursesCourseIdgradebookcolumnsColumnIdrubricsassociations",
    description: `Returns the list of Rubric Associations related to the specified gradebook column within the specified course.

User must have the following entitlements in order to see the associations.

- course.rubrics.VIEW
- course.gradebook-metadata.VIEW
- course.gradebook.MODIFY

**Since**: 3900.60.0`,
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
    path: "/learn/api/public/v1/courses/:courseId/rubrics/:rubricId/associations",
    alias: "getLearnapipublicv1coursesCourseIdrubricsRubricIdassociations",
    description: `Returns a list of rubric associations for a given course Id and rubric Id. If provided course Id is from an Original course, associations might include both Gradebook and Assessments entities. If provided course Id is from an Ultra course, only associations with Gradebook entities will be fetched.

User must have the following entitlement in order to see the provided course&#x27;s rubrics.

- course.rubrics.VIEW

**Since**: 3900.60.0`,
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
    path: "/learn/api/public/v1/courses/:courseId/rubrics/:rubricId/associations",
    alias: "postLearnapipublicv1coursesCourseIdrubricsRubricIdassociations",
    description: `Creates a rubric association for a given course Id, rubric Id and association entity Id (can be a gradebook column or question Id).

User must have the following entitlement in order to see the provided course&#x27;s rubrics.

- course.rubrics.CREATE

**Since**: 3900.86.0`,
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
    path: "/learn/api/public/v1/courses/:courseId/rubrics/:rubricId/associations/:rubricAssociationId",
    alias:
      "getLearnapipublicv1coursesCourseIdrubricsRubricIdassociationsRubricAssociationId",
    description: `Returns a rubric association for a given course Id, rubric Id and rubric association Id.

User must have the following entitlement in order to see the provided course&#x27;s rubrics.

- course.rubrics.VIEW

**Since**: 3900.60.0`,
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
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/rubrics/:rubricId/associations/:rubricAssociationId",
    alias:
      "deleteLearnapipublicv1coursesCourseIdrubricsRubricIdassociationsRubricAssociationId",
    description: `Deletes a rubric association for a given course Id, rubric Id and rubric association Id.

User must have the following entitlement in order to see the provided course&#x27;s rubrics.

- course.rubrics.DELETE

**Since**: 3900.86.0`,
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
        name: "forceDelete",
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
    method: "patch",
    path: "/learn/api/public/v1/courses/:courseId/rubrics/:rubricId/associations/:rubricAssociationId",
    alias:
      "patchLearnapipublicv1coursesCourseIdrubricsRubricIdassociationsRubricAssociationId",
    description: `Updates a rubric association for a given course Id, rubric Id and rubric association Id. The associated entity cannot be changed through this endpoint. Use create and delete to move rubric associations entities.

User must have the following entitlement in order to see the provided course&#x27;s rubrics.

- course.rubrics.MODIFY

**Since**: 3900.86.0`,
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
]);

export const Rubric_associationsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
