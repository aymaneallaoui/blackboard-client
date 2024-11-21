import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v2/courses/:courseId/groups/:groupId/users",
    alias: "getLearnapipublicv2coursesCourseIdgroupsGroupIdusers",
    description: `Returns a list of group memberships objects for the specified group.

Callers not enrolled in the group must have at least one of the following entitlements:

- course.group.VIEW

**Since**: 3600.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "groupId",
        type: "Path",
        schema: z.unknown(),
      },
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
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v2/courses/:courseId/groups/:groupId/users/:userId",
    alias: "getLearnapipublicv2coursesCourseIdgroupsGroupIdusersUserId",
    description: `Loads a group membership in the specified group.

Callers not enrolled in the group must have at least one of the following entitlements:

- course.group.VIEW

**Since**: 3600.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "groupId",
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
  {
    method: "put",
    path: "/learn/api/public/v2/courses/:courseId/groups/:groupId/users/:userId",
    alias: "putLearnapipublicv2coursesCourseIdgroupsGroupIdusersUserId",
    description: `Creates a group membership in the specified group for the user. For Ultra if the user is already enrolled in another group of the same content item (of the group he wishes to enroll) previously to creating the new membership the previous one is deleted (Move operation). If the conditions for the join operation are not fullfilled the operation will be canceled and a 409 Conflict error returned with a message specifying the reason.

Minimal entitlements required:

- course.group-user.manage.EXECUTE

**Since**: 3600.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "groupId",
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
        description: `Cloud Document is already launched by one group member`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Not Found`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Not allowed to enroll before enrollment start date; or Not allowed to enroll after enrollment end date; or Maximum number of members exceeded; or Enrolled group has an attempt submitted; or Group has an attempt submitted; or Enrolled group has a grade; or Group has a grade; or The user is already enrolled in the group`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v2/courses/:courseId/groups/:groupId/users/:userId",
    alias: "deleteLearnapipublicv2coursesCourseIdgroupsGroupIdusersUserId",
    description: `Deletes a group from the specified course.

Required entitlements:

- course.group-user.manage.EXECUTE

**Since**: 3600.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "groupId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "userId",
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

export const Course_group_usersApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
