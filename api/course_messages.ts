import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/messages",
    alias: "getLearnapipublicv1coursesCourseIdmessages",
    description: `Retrieve all the messages for a course by specified folder. This endpoint currently supports only Original courses.

The &quot;course.message.VIEW&quot; entitlement is required to view Course Messages.

**Since**: 3900.2.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "folderType",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "folderName",
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
        description: `The specified course isn&#x27;t an Classic course`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user isn&#x27;t enrolled in the course`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified object is not found`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `The current course migration is in progress`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v1/courses/:courseId/messages",
    alias: "postLearnapipublicv1coursesCourseIdmessages",
    description: `Creates a new Course Message. This endpoint currently supports only Original courses.

The &quot;course.message.CREATE&quot; entitlement is required to create or reply a course message

**Since**: 3900.2.0`,
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
        description: `The specified course is an Ultra course`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user isn&#x27;t enrolled in the course`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified course can&#x27;t be found`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `The current course migration is in progress`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/messages/folders",
    alias: "getLearnapipublicv1coursesCourseIdmessagesfolders",
    description: `Retrieve all the folders for a course. This endpoint currently supports only Original courses.

The &quot;course.message.VIEW&quot; entitlement is required to view a Course Message folders.

**Since**: 3900.2.0`,
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
        description: `The specified course is an Ultra course`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user isn&#x27;t enrolled in the course`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified message is not found`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `The current course migration is in progress`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/messages/:messageId",
    alias: "deleteLearnapipublicv1coursesCourseIdmessagesMessageId",
    description: `Delete a message.

The &#x27;course.message.DELETE&#x27; entitlement is required to delete the message.

**Since**: 3900.2.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "messageId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "folderType",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "folderName",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `The specified course is an Ultra course`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user isn&#x27;t enrolled in the course`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified message is not found`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `The current course migration is in progress`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "patch",
    path: "/learn/api/public/v1/courses/:courseId/messages/:messageId",
    alias: "patchLearnapipublicv1coursesCourseIdmessagesMessageId",
    description: `Update the read status of the message. This endpoint currently supports only Original courses.

**Since**: 3900.2.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "messageId",
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
        description: `The specified course is an Ultra course`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user isn&#x27;t enrolled in the course`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified message is not found`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `The current course migration is in progress`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/messages/:messageId/participants",
    alias: "getLearnapipublicv1coursesCourseIdmessagesMessageIdparticipants",
    description: `Retrieve all participants for the specified message.

The &quot;course.message.VIEW&quot; entitlement is required to view a Course Message participants.

**Since**: 3900.2.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "messageId",
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
        name: "participationType",
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
        description: `The specified course is an Ultra course`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user isn&#x27;t enrolled in the course`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified message is not found`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `The current course migration is in progress`,
        schema: z.void(),
      },
    ],
  },
]);

export const Course_messagesApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
