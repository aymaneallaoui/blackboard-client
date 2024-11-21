import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/alignments",
    alias: "getLearnapipublicv1coursesCourseIdalignments",
    description: `Returns the list of Goal Alignments for the course specified by Id in the URL.

The &#x27;course.learningstandards.alignment.VIEW&#x27; or &#x27;course.learningstandards.alignment.student.VIEW&#x27; entitlement is required.

**Since**: 3900.62.00`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "goalId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "blogId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "contentId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "discussionId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "gradebookColumnId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "messageId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "questionId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "resourceId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "reference",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "rubricRowId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "rubricId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "type",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "sort",
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
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/goals",
    alias: "getLearnapipublicv1goals",
    description: `Returns a list of Goals.

The &#x27;system.learningstandards.VIEW&#x27; entitlement is required.

**Since**: 3900.53.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "goalSetId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "type",
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
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/goals/sets",
    alias: "getLearnapipublicv1goalssets",
    description: `Returns a list of Goal Sets.

The &#x27;system.learningstandards.VIEW&#x27; entitlement is required.

**Since**: 3900.53.0`,
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
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/goals/sets/types",
    alias: "getLearnapipublicv1goalssetstypes",
    description: `Returns a list of Goals Set Types.

The &#x27;system.learningstandards.VIEW&#x27; entitlement is required.

**Since**: 3900.53.0`,
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
        status: 403,
        description: `Forbidden`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/goals/sets/:goalSetId",
    alias: "getLearnapipublicv1goalssetsGoalSetId",
    description: `Returns the Goal Set specified by Id.

The &#x27;system.learningstandards.VIEW&#x27; entitlement is required.

**Since**: 3900.53.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "goalSetId",
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
    path: "/learn/api/public/v1/goals/sets/:goalSetId/categories",
    alias: "getLearnapipublicv1goalssetsGoalSetIdcategories",
    description: `Returns a list of Categories for a given Goal Set.

The &#x27;system.learningstandards.VIEW&#x27; entitlement is required.

**Since**: 3900.53.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "goalSetId",
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
    path: "/learn/api/public/v1/goals/sets/:goalSetId/categories/:goalSetCategoryId",
    alias: "getLearnapipublicv1goalssetsGoalSetIdcategoriesGoalSetCategoryId",
    description: `Returns the Goal Set Category specified by Id.

The &#x27;system.learningstandards.VIEW&#x27; entitlement is required.

**Since**: 3900.53.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "goalSetId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "goalSetCategoryId",
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
    path: "/learn/api/public/v1/goals/sets/:goalSetId/categories/:goalSetCategoryId/goals",
    alias:
      "getLearnapipublicv1goalssetsGoalSetIdcategoriesGoalSetCategoryIdgoals",
    description: `Returns a list of Goals from a Goal Set and Category

The &#x27;system.learningstandards.VIEW&#x27; entitlement is required.

**Since**: 3900.53.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "goalSetId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "goalSetCategoryId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "recursive",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "categoryId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "goalSetId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "type",
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
    path: "/learn/api/public/v1/goals/:goalId",
    alias: "getLearnapipublicv1goalsGoalId",
    description: `Returns the Goal specified by Id.

The &#x27;system.learningstandards.VIEW&#x27; entitlement is required.

**Since**: 3900.53.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "goalId",
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
    path: "/learn/api/public/v1/goals/:goalId/alignments",
    alias: "getLearnapipublicv1goalsGoalIdalignments",
    description: `Returns a list of Goal Alignments.

The &#x27;system.goal.align.VIEW&#x27; entitlement is required.

**Since**: 3900.62.00`,
    requestFormat: "json",
    parameters: [
      {
        name: "goalId",
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
        name: "courseId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "blogId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "contentId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "discussionId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "gradebookColumnId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "messageId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "questionId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "resourceId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "reference",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "rubricRowId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "rubricId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "type",
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
    path: "/learn/api/public/v1/goals/:goalId/children",
    alias: "getLearnapipublicv1goalsGoalIdchildren",
    description: `Returns the list of Children Goals from the specified Parent Goal.

The &#x27;system.learningstandards.VIEW&#x27; entitlement is required.

**Since**: 3900.53.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "goalId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "categoryId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "goalSetId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "type",
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

export const GoalsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
