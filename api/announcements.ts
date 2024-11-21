import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/announcements",
    alias: "getLearnapipublicv1announcements",
    description: `Return a list of System Announcements. Users with the &#x27;system.announcements.VIEW&#x27; entitlement can view &#x27;available&#x27; System Announcements. Users with the &#x27;system.announcements.admin.VIEW&#x27; entitlement can view &#x27;available&#x27; &amp; &#x27;unavailable&#x27; System Announcements.

**Since**: 3100.7.0`,
    requestFormat: "json",
    parameters: [
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
    method: "post",
    path: "/learn/api/public/v1/announcements",
    alias: "postLearnapipublicv1announcements",
    description: `Create a System Announcement. Users with the &#x27;system.announcements.CREATE&#x27; entitlement can create System Announcements.

**Since**: 3100.7.0`,
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
        description: `The user does not have entitlements to create announcements`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/announcements/:announcementId",
    alias: "getLearnapipublicv1announcementsAnnouncementId",
    description: `Get a System Announcement. Users with the &#x27;system.announcements.VIEW&#x27; entitlement can view &#x27;available&#x27; System Announcements. Users with the &#x27;system.announcements.admin.VIEW&#x27; entitlement can view &#x27;available&#x27; &amp; &#x27;unavailable&#x27; System Announcements.

**Since**: 3100.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "announcementId",
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
    path: "/learn/api/public/v1/announcements/:announcementId",
    alias: "deleteLearnapipublicv1announcementsAnnouncementId",
    description: `Delete a System Announcement. Users with the &#x27;system.announcements.DELETE&#x27; entitlement can delete System Announcements.

**Since**: 3100.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "announcementId",
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
        description: `An error occurred while deleting an announcement`,
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
    path: "/learn/api/public/v1/announcements/:announcementId",
    alias: "patchLearnapipublicv1announcementsAnnouncementId",
    description: `Update a System Announcement. Users with the &#x27;system.announcements.MODIFY&#x27; entitlement can update System Announcements.

**Since**: 3100.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "announcementId",
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
        description: `Invalid request data found while updating an announcement`,
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

export const AnnouncementsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
