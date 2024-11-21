import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/tocItems",
    alias: "getLearnapipublicv1coursesCourseIdtocItems",
    description: `Returns a list of Course TOC entries associated to a course.

Entitlement course.configure-areas.EXECUTE required

**Since**: 3900.31.0`,
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
    path: "/learn/api/public/v1/courses/:courseId/tocItems/:tocId",
    alias: "patchLearnapipublicv1coursesCourseIdtocItemsTocId",
    description: `Updates a specific TOC entry. Only allowGuests and allowObservers flags are modifiable, the remaining fields are read-only. User should keep in mind that in order to modify such TOC fields, Course&#x27;s allowGuest and allowObservers configuration must be enabled. Also, if user wants to update a TOC register&#x27;s allowGuest flag and TOC is associated to a CONTENT or APPLICATION target type, Course Tool Settings must have allowGuests flag enabled. If user wants to update a TOC register&#x27;s allowObserver flag and TOC is associated to an APPLICATION target type, Course Tool Settings must have allowObservers flag enabled.

Entitlement course.configure-areas.EXECUTE required

**Since**: 3900.31.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "tocId",
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

export const Course_tocApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
