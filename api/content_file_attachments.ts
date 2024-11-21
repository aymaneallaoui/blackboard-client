import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/attachments",
    alias: "getLearnapipublicv1coursesCourseIdcontentsContentIdattachments",
    description: `Get the file attachment meta data associated to the Content Item

Supported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment (resource/x-bb-assignment) (Since 3400.9.0) for a Classic Course

**Since**: 3200.8.0`,
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
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/attachments",
    alias: "postLearnapipublicv1coursesCourseIdcontentsContentIdattachments",
    description: `Attach an uploaded file to a Content item.

Supported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment (resource/x-bb-assignment) for a Classic Course

**Since**: 3400.9.0`,
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
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/attachments/:attachmentId",
    alias:
      "getLearnapipublicv1coursesCourseIdcontentsContentIdattachmentsAttachmentId",
    description: `Get the file attachment meta data by an attachment ID

Supported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment(resource/x-bb-assignment) (Since 3400.9.0) for a Classic Course

**Since**: 3200.8.0`,
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
        name: "attachmentId",
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
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/attachments/:attachmentId",
    alias:
      "deleteLearnapipublicv1coursesCourseIdcontentsContentIdattachmentsAttachmentId",
    description: `Delete file attachment meta data by attachment ID

Supported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment(resource/x-bb-assignment) for a Classic Course

**Since**: 3400.9.0`,
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
        name: "attachmentId",
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
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/attachments/:attachmentId/download",
    alias:
      "getLearnapipublicv1coursesCourseIdcontentsContentIdattachmentsAttachmentIddownload",
    description: `Download the contents of a Content Item.

Supported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment (resource/x-bb-assignment) (Since 3400.9.0) for a Classic Course

**Since**: 3200.8.0`,
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
        name: "attachmentId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 302,
        description: `Found`,
        schema: z.void(),
      },
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

export const Content_file_attachmentsApi = new Zodios(
  "localhost:3000/",
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
