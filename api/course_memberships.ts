import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/users",
    alias: "getLearnapipublicv1coursesCourseIdusers",
    description: `Returns a list of user memberships for the specified course or organization.

Callers not enrolled in the course must have at least one of the following entitlements:

- For courses: &#x27;course.user.VIEW&#x27;, &#x27;system.user.course.enrollment.VIEW&#x27;, or &#x27;system.courseuserlist.VIEW&#x27;
- For organizations: &#x27;course.user.VIEW&#x27;, &#x27;system.user.org.enrollment.VIEW&#x27;, or &#x27;system.orguserlist.VIEW&#x27;
Callers enrolled in the course will only be able to see memberships that are available and that have opted to be included in the course roster.

For callers enrolled in the course as well as those with the &#x27;course.user.VIEW&#x27; entitlement, system fields such as externalId and dataSourceId will not be visible.

**Since**: 3000.1.0`,
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
        name: "role",
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
        name: "dataSourceId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "lastAccessed",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "lastAccessedCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "availability.available",
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
    path: "/learn/api/public/v1/courses/:courseId/users/:userId",
    alias: "getLearnapipublicv1coursesCourseIdusersUserId",
    description: `Loads a user membership in the specified course.

Entitlement and field visibility rules are the same as those when loading the memberships collection.

**Since**: 2015.11.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
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
        description: `Membership not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/learn/api/public/v1/courses/:courseId/users/:userId",
    alias: "putLearnapipublicv1coursesCourseIdusersUserId",
    description: `Creates a user membership in the specified course.

Minimal entitlements required:

- For courses: &#x27;system.enrollment.CREATE&#x27; with &#x27;system.user.VIEW&#x27; or just &#x27;course.user-enroll.EXECUTE&#x27; - For organizations: &#x27;org.enrollment.CREATE&#x27; with &#x27;system.user.VIEW&#x27; or just &#x27;course.user-enroll.EXECUTE&#x27; - For courses or organizations that have enabled self enrollment: &#x27;system.generic.VIEW&#x27;
If &#x27;system.enrollment.CREATE&#x27; or &#x27;org.enrollment.CREATE&#x27; are present, the user must be in the same domain as the logged on user.

By default courseRoleId is Student and availability.available is Yes.  Providing different values for these fields requires extra entitlements:

- For courses: &#x27;course.user-role.MODIFY&#x27; or &#x27;course.user.MODIFY&#x27;
- For organizations: &#x27;course.user-role.MODIFY&#x27; or &#x27;org.user.MODIFY&#x27;

**Since**: 2015.11.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
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
        description: `Invalid Course in body of request; or User not in same Domain as Logged-on User; or User is an Observer; or Access Code Incorrect; or User is the System Guest; or Invalid CourseMembership data`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `User is a System Admin and the Logged-on User is not a System Administrator; or Logged-on User has insufficient privileges`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `User does not exist; or Role does not exist`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `User already enrolled`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/users/:userId",
    alias: "deleteLearnapipublicv1coursesCourseIdusersUserId",
    description: `Deletes a user membership from the specified course.

Required entitlements:

- For courses: &#x27;system.enrollment.DELETE&#x27; or &#x27;course.user.DELETE&#x27;
- For organizations: &#x27;system.enrollment.DELETE&#x27; or &#x27;org.enrollment.DELETE&#x27;

**Since**: 2015.11.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
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
  {
    method: "patch",
    path: "/learn/api/public/v1/courses/:courseId/users/:userId",
    alias: "patchLearnapipublicv1coursesCourseIdusersUserId",
    description: `Updates a user membership in the specified course. 

 | Field                  | Entitlements Required                                                                    |
 |------------------------|------------------------------------------------------------------------------------------|
 | dataSourceId           | &#x27;course.user.MODIFY&#x27; or &#x27;org.user.MODIFY&#x27;                                                |
 | childCourseId          | &#x27;course.user.MODIFY&#x27; or &#x27;org.user.MODIFY&#x27;                                                |
 | courseRoleId           | &#x27;course.user.MODIFY&#x27;, &#x27;org.user.MODIFY&#x27;, or &#x27;course.user-role.MODIFY&#x27;                    |
 | availability.available | &#x27;course.user.MODIFY&#x27;, &#x27;org.user.MODIFY&#x27;, or &#x27;course.course-availability.MODIFY&#x27;          |
 | displayOrder           | &#x27;course.user.MODIFY&#x27;, &#x27;org.user.MODIFY&#x27;, or &#x27;course.user-role.primary-instructor.MODIFY&#x27; |
 

In addition, callers must have standard view entitlements to receive a response.  Without view entitlements the operation will be performed but an empty result object will be returned.

**Since**: 2015.11.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
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
        description: `The request did not specify valid data`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `User has insufficient privileges`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Course not found; or Course-membership not found`,
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
    path: "/learn/api/public/v1/users/:userId/courses",
    alias: "getLearnapipublicv1usersUserIdcourses",
    description: `Returns a list of course and organization memberships for the specified user.

Users can always view their own memberships.  Callers viewing the memberships of another user require at least one of the following entitlements:

- &#x27;system.user.course.enrollment.VIEW&#x27; allows callers to see course memberships
- &#x27;system.user.org.enrollment.VIEW&#x27; allows callers to see organization memberships

**Since**: 2015.11.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "userId",
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
        name: "role",
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
        name: "dataSourceId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "lastAccessed",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "lastAccessedCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "availability.available",
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
]);

export const Course_membershipsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
