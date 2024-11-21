import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/categories",
    alias: "getLearnapipublicv1coursesCourseIdgradebookcategories",
    description: `Returns a list of gradebook categories in a particular course.

Users with entitlements &#x27;course.gradebook.MODIFY&#x27; or &#x27;course.user.grades.VIEW&#x27;, or users enrolled in the specified course can retrieve the list of gradebook categories.

**Since**: 3400.2.0`,
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
    path: "/learn/api/public/v1/courses/:courseId/gradebook/categories/:categoryId",
    alias: "getLearnapipublicv1coursesCourseIdgradebookcategoriesCategoryId",
    description: `Returns the details of a gradebook category

Users with entitlements &#x27;course.gradebook.MODIFY&#x27; or &#x27;course.user.grades.VIEW&#x27;, or users enrolled in the specified course can retrieve gradebook category details.

**Since**: 3400.2.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "categoryId",
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

export const Course_gradebook_categoriesApi = new Zodios(
  "localhost:3000/",
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
