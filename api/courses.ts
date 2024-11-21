import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/children",
    alias: "getLearnapipublicv1coursesCourseIdchildren",
    description: `Returns a list of course cross-listings.

The &#x27;system.course.cross-list.VIEW&#x27; or &#x27;system.org.cross-list.VIEW&#x27; or &#x27;course.children.VIEW&#x27; entitlement is needed.

**Since**: 3000.11.0`,
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
        description: `Course not a cross-listed parent`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Parent or child course not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/children/:childCourseId",
    alias: "getLearnapipublicv1coursesCourseIdchildrenChildCourseId",
    description: `Loads a specific course cross-listing.

The &#x27;system.course.cross-list.VIEW&#x27; or &#x27;system.org.cross-list.VIEW&#x27; entitlement is needed.

**Since**: 3000.11.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "childCourseId",
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
        description: `Course not a cross-listed parent`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Parent or child course not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/learn/api/public/v1/courses/:courseId/children/:childCourseId",
    alias: "putLearnapipublicv1coursesCourseIdchildrenChildCourseId",
    description: `Merges two courses (or organizations) together. Commonly referred to as cross-listing. Only a single level of parent/child relationship is supported (ie. Parent courses may not become children, similarly, a child cannot become a parent)

Minimal entitlements required:

- For courses: &#x27;system.course.cross-list.VIEW&#x27;
- For organizations: &#x27;system.org.cross-list.VIEW&#x27;

Upon being merged, all enrollments in the child course are replicated in the parent course, and any future enrollment changes in the child course are also synchronized automatically with the parent course. Duplicate student enrollments will result in a 409 CONFLICT unless the &#x27;ignoreEnrollmentErrors&#x27; query parameter is set to true. Users in other roles, such as grader, teaching assistant, or guest, are assigned roles based on the last time they are added to the parent course.

**Since**: 3400.1.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "childCourseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "ignoreEnrollmentErrors",
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
      {
        status: 409,
        description: `Conflict`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/children/:childCourseId",
    alias: "deleteLearnapipublicv1coursesCourseIdchildrenChildCourseId",
    description: `Delete a course-course relationship, resulting in two unrelated courses.

Minimal entitlements required:

- For courses: &#x27;system.course.separate-out.VIEW&#x27;
- For organizations: &#x27;system.org.separate-out.VIEW&#x27;

**Since**: 3900.4.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "childCourseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "separationStyle",
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
    path: "/learn/api/public/v1/courses/:courseId/crossListSet",
    alias: "getLearnapipublicv1coursesCourseIdcrossListSet",
    description: `Returns the course cross-listing set for the specified course. This will return any and all parent/child associations regardless of the specified course being a parent or child course. The result will be empty if the specified course is not cross-listed.

The &#x27;system.course.cross-list.VIEW&#x27; or &#x27;system.org.cross-list.VIEW&#x27; entitlement is needed.

**Since**: 3400.1.0`,
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
    path: "/learn/api/public/v1/courses/:courseId/tasks/:taskId",
    alias: "getLearnapipublicv1coursesCourseIdtasksTaskId",
    description: `Check the status of a queued task associated with a Course. Returns 200 unless task is complete. If task is complete this endpoint will return a 303 SEE OTHER with a Location header providing a URI to the GET Course endpoint. Statistical data shows that the average copy task duration is under a second. However, very large courses can take several minutes. Also important to note is that these background tasks can potentially be queued behind other system tasks therefore prolonging the time a task stays in the &#x60;Queued&#x60; status. We recommend that this endpoint be polled every 60 seconds while waiting for a Course copy to complete.

Users with entitlements &#x27;system.course.copy.EXECUTE&#x27; can view the task status.

**Since**: 3300.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "taskId",
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
        status: 303,
        description: `See Other`,
        schema: z.void(),
      },
      {
        status: 400,
        description: `Invalid task type`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Task not found for this course`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v2/courses/:courseId/copy",
    alias: "postLearnapipublicv2coursesCourseIdcopy",
    description: `Creates a copy of an existing Course into a new Course or an existing course. It is possible to limit the course content to be copied using options.

Using the payload without the &quot;copy&quot; object is equivalent to doing an exact copy of the course, which means all course settings will be replicated.

For a partial copy, set true in the supported settings inside the &quot;copy&quot; object.

Users with entitlements &#x27;system.course.copy.EXECUTE&#x27; can create a course copy. Users with entitlements &#x27;system.org.copy.EXECUTE&#x27; can create an organization copy. Users with entitlement &#x27;course.content.copy.exact.EXECUTE&#x27; can copy Course/Organization materials to a new or existing course Users with entitlement &#x27;course.content.copy.new.EXECUTE&#x27; can copy Course/Organization materials to a new course. All users&#x27;s must also have &#x27;course.content.copy.EXECUTE&#x27; entitlement associated with the specified source courseId.

**Since**: 3800.2.0`,
    requestFormat: "json",
    parameters: [
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
      {
        status: 409,
        description: `Conflict`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v3/courses",
    alias: "getLearnapipublicv3courses",
    description: `Returns a list of courses and organizations.

To view disabled courses a user must have the entitlement &#x27;system.course.VIEW&#x27;.

Users with the &#x27;course.configure-properties.EXECUTE&#x27; course entitlement, or the &#x27;system.course.properties.MODIFY&#x27; system entitlement can access all course properties.

Users enrolled in the course have read access to all properties except:

- uuid
- externalId
- dataSourceId
- created
- allowGuests
- enrollment.accessCode

Users who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:

- id
- courseId
- name
- description
- organization
- readOnly
- termId
- availability.available
- availability.duration.type
- availability.duration.start
- availability.duration.end
- availability.duration.daysOfUse
When courses are child courses, parent course data is also returned to provide a complete data representation of course relationships.

If the course enrollment is self-enroll, all users can view the course as though they were enrolled.

**Since**: 3800.1.0`,
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
        name: "courseId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "description",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "externalId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "created",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "allowGuests",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "createdCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "availability.available",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "dataSourceId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "termId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "organization",
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
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v3/courses",
    alias: "postLearnapipublicv3courses",
    description: `Creates a course or organization.

The &#x27;system.course.CREATE&#x27; entitlement is needed to create a course, while &#x27;system.org.CREATE&#x27; is needed for an organization.

**Since**: 3800.1.0`,
    requestFormat: "json",
    parameters: [
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
        description: `The user does not have entitlements to create courses`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `A course with the same courseId or externalId already exists`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v3/courses/:courseId",
    alias: "getLearnapipublicv3coursesCourseId",
    description: `Loads a specific course or organization.

To view disabled courses a user must have the entitlement &#x27;system.course.VIEW&#x27;.

Users with the &#x27;course.configure-properties.EXECUTE&#x27; entitlement can access all course properties.

Users enrolled in the course have read access to all properties except:

- uuid
- externalId
- dataSourceId
- created
- allowGuests
- enrollment.accessCode

Users with no access to the course only have read access to the following properties:

- id
- courseId
- name
- description
- organization
- closedComplete
- termId
- availability.available
- availability.duration.type
- availability.duration.start
- availability.duration.end
- availability.duration.daysOfUse
If the course enrollment is self-enroll, all users can view the course as though they were enrolled.

**Since**: 3800.1.0`,
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
        description: `Failed to create course; or The request did not specify a valid courseId`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The course is not found or is unavailable and the user does not have the permission to view unavailable courses`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v3/courses/:courseId",
    alias: "deleteLearnapipublicv3coursesCourseId",
    description: `Registers a queued task to delete a course or organization in asynchronous fashion.

The &#x27;system.course.DELETE&#x27; entitlement is needed to delete a course, while &#x27;system.org.DELETE&#x27; is needed for an organization.

**Since**: 3800.1.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "removeFiles",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Invalid courseId provided`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user is not authorized to delete the specified Course object`,
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
    path: "/learn/api/public/v3/courses/:courseId",
    alias: "patchLearnapipublicv3coursesCourseId",
    description: `Updates a course or organization.

To update a course, the user must have either &#x27;system.course|org.properties.MODIFY&#x27; or &#x27;course.configure-properties.EXECUTE&#x27; entitlements.  However, if the user has the latter entitlement, then additional entitlements are needed to be able to update certain fields, as shown below: 

 | Field                           | Entitlements Required                                                  |
 |---------------------------------|------------------------------------------------------------------------|
 | name                            | course.name.MODIFY                                                     |
 | description                     | course.name.MODIFY                                                     |
 | allowGuests                     | course.configure-guest-access.EXECUTE                                  |
 | enrollment.type                 | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |
 | enrollment.start                | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |
 | enrollment.end                  | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |
 | enrollment.accessCode           | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |
 | availability.available          | course.configure-properties.EXECUTE, course.availability.MODIFY        |
 | locale.id                       | course.configure-properties.EXECUTE, course.locale.MODIFY              |
 | locale.force                    | course.configure-properties.EXECUTE, course.locale.MODIFY              |
 | availability.duration.type      | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |
 | availability.duration.start     | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |
 | availability.duration.end       | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |
 | availability.duration.daysOfUse | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |
 

**Since**: 3800.1.0`,
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
        description: `The request did not specify a valid course`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user does not have entitlements to modify courses`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The course was not found or is unavailable and the user does not have the permission to view unavailable courses`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `A course with the same courseId or externalId already exists`,
        schema: z.void(),
      },
    ],
  },
]);

export const CoursesApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
