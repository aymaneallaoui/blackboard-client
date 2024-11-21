import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/announcements",
    alias: "getLearnapipublicv1coursesCourseIdannouncements",
    description: `Return a list of Course Announcements. Users with the &#x27;course.announcements.VIEW&#x27; entitlement can view &#x27;available&#x27; Course Announcements. Users with the &#x27;course.announcements.VIEW&#x27; &amp; &#x27;course.announcements.MODIFY&#x27; entitlement can view &#x27;available&#x27; &amp; &#x27;unavailable&#x27; Course Announcements.

**Since**: 3500.3.0`,
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
        name: "creatorUserId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "creatorUsername",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "created",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "createdUntil",
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
        name: "modifiedUntil",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "modifiedCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "title",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "startDate",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "startDateUntil",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "startDateCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "endDate",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "endDateUntil",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "endDateCompare",
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
    path: "/learn/api/public/v1/courses/:courseId/announcements",
    alias: "postLearnapipublicv1coursesCourseIdannouncements",
    description: `Create a Course Announcement. Users with the &#x27;course.announcements.CREATE&#x27; and &#x27;course.announcements.VIEW&#x27; entitlements can create Course Announcements.

**Since**: 3500.3.0`,
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
        description: `The request did not specify valid data`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user does not have entitlements to create announcements`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/announcements/:announcementId",
    alias: "getLearnapipublicv1coursesCourseIdannouncementsAnnouncementId",
    description: `Get a Course Announcement. Users with the &#x27;course.announcements.VIEW&#x27; entitlement can view &#x27;available&#x27; Course Announcements. Users with the &#x27;course.announcements.VIEW&#x27; &amp; &#x27;course.announcements.MODIFY&#x27; entitlement can view &#x27;available&#x27; &amp; &#x27;unavailable&#x27; Course Announcements.

**Since**: 3500.3.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "announcementId",
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
        status: 403,
        description: `The currently authenticated user has insufficient privileges to update an announcement`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Announcement cannot be found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/announcements/:announcementId",
    alias: "deleteLearnapipublicv1coursesCourseIdannouncementsAnnouncementId",
    description: `Delete a Course Announcement. Users with the &#x27;course.announcements.DELETE&#x27; and &#x27;course.announcements.VIEW&#x27; entitlements can delete Course Announcements.

**Since**: 3500.3.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "announcementId",
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
        description: `Invalid request data was found while deleting an announcement`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The currently authenticated user has insufficient privileges to delete an announcement`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Announcement cannot be found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "patch",
    path: "/learn/api/public/v1/courses/:courseId/announcements/:announcementId",
    alias: "patchLearnapipublicv1coursesCourseIdannouncementsAnnouncementId",
    description: `Update a Course Announcement. Users with the &#x27;course.announcements.MODIFY&#x27; and &#x27;course.announcements.VIEW&#x27; entitlements can update Course Announcements.

**Since**: 3500.3.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "announcementId",
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
        description: `An invalid request state was found while updating an announcement`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The currently authenticated user has insufficient privileges to update an announcement`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Announcement cannot be found`,
        schema: z.void(),
      },
    ],
  },
]);

export const Course_announcementsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
