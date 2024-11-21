import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/users/:userId/reviewStatus",
    alias:
      "getLearnapipublicv1coursesCourseIdcontentsContentIdusersUserIdreviewStatus",
    description: `Obtain the review status for a content item. This endpoint will only fetch the reviewStatus if the corresponding content was previously marked as reviewable.

**Since**: 3700.16.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "contentId",
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
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/users/:userId/reviewStatus",
    alias:
      "patchLearnapipublicv1coursesCourseIdcontentsContentIdusersUserIdreviewStatus",
    description: `Update the review status for a content item. This endpoint will only update the reviewStatus if the corresponding content was previously marked as reviewable. Updating a content&#x27;s review status to be reviewed is allowed in an Ultra course but updating a content item as unreviewed is not allowed in an Ultra course starting in 3900.19.0

**Since**: 3700.16.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "contentId",
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
]);

export const Content_reviewApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
