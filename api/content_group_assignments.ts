import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/groups",
    alias: "getLearnapipublicv1coursesCourseIdcontentsContentIdgroups",
    description: `Returns a list of content group associations for the specified content.

Callers not enrolled in the course must have at least one of the following entitlements:

- course.content.designer.VIEW  Callers enrolled in the course will only be able to see Groups that are available to them.

**Since**: 3100.5.0`,
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
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/groups/:groupId",
    alias: "getLearnapipublicv1coursesCourseIdcontentsContentIdgroupsGroupId",
    description: `Returns a content group association for the specified content and group.

Callers not enrolled in the course must have at least one of the following entitlements:

- course.content.designer.VIEW  Callers enrolled in the course will only be able to see Groups that are available to them.

**Since**: 3100.5.0`,
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
        name: "groupId",
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
        description: `Invalid data specified in the request`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `User has insufficient privileges`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Group association not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/groups/:groupId",
    alias: "putLearnapipublicv1coursesCourseIdcontentsContentIdgroupsGroupId",
    description: `Creates a content group association.

Callers not enrolled in the course must have at least one of the following entitlements:

- course.content.MODIFY  If the content is going to be accessed in Ultra, the following rules should be followed by the caller:

- If the group is part of a set, all groups with the set should be associated with the content. - The content should be associated exclusively to individual groups or groups within a set, but not both.

**Since**: 3100.5.0`,
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
        name: "groupId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "allowChildCourseContent",
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
        description: `Invalid Course in body of request; or Invalid association data`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Logged-on User has insufficient privileges`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Content does not exist; or Group does not exist`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Group already associated; or Cannot associate individual groups, and groups in a set to the same content item`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/groups/:groupId",
    alias:
      "deleteLearnapipublicv1coursesCourseIdcontentsContentIdgroupsGroupId",
    description: `Deletes a content group association.

Individual Groups without Content association are not supported in Ultra. Groups existing in this state have undefined behavior, and may be removed.  In Ultra courses, for best performance, immediately either delete the associated group, or associated it with a new Content item.

If the content is going to be accessed in Ultra, and the group being removed is part of a group set, then the caller should ensure that all groups within that set are removed from the content.

Required entitlements:

- course.content.DELETE

**Since**: 3100.5.0`,
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
        name: "allowChildCourseContent",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "groupId",
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

export const Content_group_assignmentsApi = new Zodios(
  "localhost:3000/",
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
