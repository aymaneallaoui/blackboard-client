import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v2/courses/:courseId/groups",
    alias: "getLearnapipublicv2coursesCourseIdgroups",
    description: `Returns a list of all top-level groups in the specified course.

Callers with the following entitlement can view all groups in the course:

- course.groups.VIEW
Callers enrolled in course can view all groups they&#x27;re enrolled in, and all self-enrollment groups

**Since**: 3800.6.0`,
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
        name: "name",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "nameCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "inGroupSet",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "created",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "createdCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "modified",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "modifiedCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "nonEmptyGroupSets",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "onlyAvailableGroupSets",
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
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v2/courses/:courseId/groups",
    alias: "postLearnapipublicv2coursesCourseIdgroups",
    description: `Creates a group in the specified course.

For Ultra Courses, Individual Groups are only supported when associated with a Content Item. To avoid undefined behavior, groups created this way in Ultra courses should be linked to Content Items via the Create Content Group endpoint as soon as possible after creation.

Individual Groups without Content association cannot be copied to Ultra courses, and will be removed as part of the Course Conversion process if converted to Ultra.

Callers must have the following entitlement:

- &#x27;course.groups.CREATE&#x27;

**Since**: 3800.6.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
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
        status: 409,
        description: `Conflict`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v2/courses/:courseId/groups/sets",
    alias: "getLearnapipublicv2coursesCourseIdgroupssets",
    description: `Returns a list of all groupsets

Callers not enrolled in the course must have the following entitlement:

- course.groups.VIEW
- course.groups.admin.VIEW

**Since**: 3800.6.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "nameCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "created",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "createdCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "modified",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "modifiedCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "nonEmptyGroupSets",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "onlyAvailableGroupSets",
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
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v2/courses/:courseId/groups/sets",
    alias: "postLearnapipublicv2coursesCourseIdgroupssets",
    description: `Creates a groupset in the specified course.

Callers must have the following entitlement:

- &#x27;course.groups.CREATE&#x27;

**Since**: 3800.6.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
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
        status: 409,
        description: `Conflict`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v2/courses/:courseId/groups/sets/:groupId",
    alias: "getLearnapipublicv2coursesCourseIdgroupssetsGroupId",
    description: `Loads a groupset in the specified course.

Users calling this end point should meet at least one of these entitlement checks.

- course.groups.VIEW
- course.groups.admin.VIEW

**Since**: 3800.6.0`,
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
    path: "/learn/api/public/v2/courses/:courseId/groups/sets/:groupId",
    alias: "deleteLearnapipublicv2coursesCourseIdgroupssetsGroupId",
    description: `Deletes a groupset from the specified course.

Required entitlements:

- course.group.DELETE

**Since**: 3800.6.0`,
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
    path: "/learn/api/public/v2/courses/:courseId/groups/sets/:groupId",
    alias: "patchLearnapipublicv2coursesCourseIdgroupssetsGroupId",
    description: `Updates a groupset in the specified course.

Minimal entitlements required:

- course.group.MODIFY

**Since**: 3800.6.0`,
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
      {
        status: 409,
        description: `Conflict`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v2/courses/:courseId/groups/sets/:groupId/groups",
    alias: "getLearnapipublicv2coursesCourseIdgroupssetsGroupIdgroups",
    description: `Returns a list of all groups within a groupset

Callers not enrolled in the group must have the following entitlement:

- course.groups.VIEW

**Since**: 3800.6.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "groupId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "nameCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "created",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "createdCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "modified",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "modifiedCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "nonEmptyGroupSets",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "onlyAvailableGroupSets",
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
        name: "courseId",
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
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v2/courses/:courseId/groups/sets/:groupId/groups",
    alias: "postLearnapipublicv2coursesCourseIdgroupssetsGroupIdgroups",
    description: `Creates a group within a groupset.

Callers must have the following entitlement:

- &#x27;course.groups.CREATE&#x27;

**Since**: 3800.6.0`,
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
        status: 409,
        description: `Conflict`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v2/courses/:courseId/groups/:groupId",
    alias: "getLearnapipublicv2coursesCourseIdgroupsGroupId",
    description: `Loads a group in the specified course.

Callers not enrolled in the course must have the following entitlement:

- course.groups.VIEW

**Since**: 3800.6.0`,
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
    method: "delete",
    path: "/learn/api/public/v2/courses/:courseId/groups/:groupId",
    alias: "deleteLearnapipublicv2coursesCourseIdgroupsGroupId",
    description: `Deletes a groupset from the specified course.

Required entitlements:

- course.group.DELETE

**Since**: 3800.6.0`,
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
    path: "/learn/api/public/v2/courses/:courseId/groups/:groupId",
    alias: "patchLearnapipublicv2coursesCourseIdgroupsGroupId",
    description: `Updates a group in the specified course.

Minimal entitlements required:

- course.group.MODIFY

**Since**: 3800.6.0`,
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
      {
        status: 409,
        description: `Conflict`,
        schema: z.void(),
      },
    ],
  },
]);

export const Course_groupsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
