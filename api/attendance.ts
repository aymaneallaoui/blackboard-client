import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/meetings",
    alias: "getLearnapipublicv1coursesCourseIdmeetings",
    description: `Returns a list of course meetings for a given course id.

The &quot;course.attendance.VIEW&quot; entitlement is required to view a Course Meeting.

**Since**: 3500.7.0`,
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
    path: "/learn/api/public/v1/courses/:courseId/meetings",
    alias: "postLearnapipublicv1coursesCourseIdmeetings",
    description: `Creates a new Course Meeting within the provided Course/Organization Id. An attendance grade book column will automatically be generated if one does not exist.

The &quot;course.attendance.CREATE&quot; entitlement is required to create a Course Meeting.

**Since**: 3500.7.0`,
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
        description: `The user does not have entitlements to create Meetings`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/meetings",
    alias: "deleteLearnapipublicv1coursesCourseIdmeetings",
    description: `Deletes all course meetings in the course for the given course Id.

The &#x27;course.attendance.DELETE&#x27; entitlement is required to delete Course Meetings.

**Since**: 3500.7.0`,
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
        description: `Invalid courseId provided`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user is not authorized to delete the specified Meetings in course object`,
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
    path: "/learn/api/public/v1/courses/:courseId/meetings/downloadUrl",
    alias: "getLearnapipublicv1coursesCourseIdmeetingsdownloadUrl",
    description: `Generate Download URL for Attendance Data.

The &quot;course.attendance.CREATE&quot; entitlement is required to generate download URL for attendance data.

**Since**: ????`,
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
        status: 403,
        description: `You are not authorized`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Check input parameters. This usually occurs when a supplied Id value could not be located`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/meetings/users/:userId",
    alias: "getLearnapipublicv1coursesCourseIdmeetingsusersUserId",
    description: `Returns a list of Course Meeting Attendance for a given user id regardless of courses and meetings.

The &quot;course.attendance.VIEW&quot; entitlement is required to view a Course Meeting attendance.

**Since**: 3500.7.0`,
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
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "sort",
        type: "Query",
        schema: z.unknown().optional(),
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
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/meetings/users/:userId",
    alias: "deleteLearnapipublicv1coursesCourseIdmeetingsusersUserId",
    description: `Deletes all attendance records for the user in specific course.

The &#x27;course.attendance.DELETE&#x27; entitlement is required to delete attendance records.

**Since**: 3500.7.0`,
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
        description: `Invalid user id provided`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user is not authorized to delete the specified records in meeting object`,
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
    path: "/learn/api/public/v1/courses/:courseId/meetings/users/:userId/all",
    alias: "deleteLearnapipublicv1coursesCourseIdmeetingsusersUserIdall",
    description: `Deletes all attendance records for the user. It will delete meeting attendance regardless of course.

The &#x27;course.attendance.DELETE&#x27; entitlement is required to delete attendance records.

**Since**: 3500.7.0`,
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
        description: `Invalid user id provided`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user is not authorized to delete the specified records in meeting object`,
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
    path: "/learn/api/public/v1/courses/:courseId/meetings/:meetingId",
    alias: "getLearnapipublicv1coursesCourseIdmeetingsMeetingId",
    description: `Returns a Course Meeting for the given meeting Id.

The &quot;course.attendance.VIEW&quot; entitlement is required to view a Course Meeting.

**Since**: 3500.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "meetingId",
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
        description: `Failed to get meeting; or The request did not specify a valid meetingId`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The meeting is not found `,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/meetings/:meetingId",
    alias: "deleteLearnapipublicv1coursesCourseIdmeetingsMeetingId",
    description: `Delete the Course Meeting for the given course meeting Id.

The &#x27;course.attendance.DELETE&#x27; entitlement is required to delete Course Meetings.

**Since**: 3500.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "meetingId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Invalid meetingId provided`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user is not authorized to delete the specified course meeting object`,
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
    path: "/learn/api/public/v1/courses/:courseId/meetings/:meetingId",
    alias: "patchLearnapipublicv1coursesCourseIdmeetingsMeetingId",
    description: `Update the Course Meeting for the given Course/Organization.

The &quot;course.attendance.MODIFY&quot; entitlement is required to update a Course Meeting. The &quot;course.attendance.VIEW&quot; entitlement is required to view a Course Meeting.

**Since**: 3500.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "meetingId",
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
        description: `The user does not have entitlements to update Meetings`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/meetings/:meetingId/users",
    alias: "getLearnapipublicv1coursesCourseIdmeetingsMeetingIdusers",
    description: `Returns a list of Course Meeting Attendance for a given meeting id.

The &quot;course.attendance.VIEW&quot; entitlement is required to view a Course Meeting attendance.

**Since**: 3500.7.0`,
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
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "sort",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "meetingId",
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
    path: "/learn/api/public/v1/courses/:courseId/meetings/:meetingId/users",
    alias: "postLearnapipublicv1coursesCourseIdmeetingsMeetingIdusers",
    description: `Creates a new Course Meeting Attendance within the provided Course/Organization Id.

The &quot;course.attendance.CREATE&quot; entitlement is required to create a Course Meeting Attendance.

**Since**: 3500.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "meetingId",
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
        description: `The user does not have entitlements to create attendace records`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/meetings/:meetingId/users",
    alias: "deleteLearnapipublicv1coursesCourseIdmeetingsMeetingIdusers",
    description: `Deletes all attendance records in the course meeting for a given meeting Id.

The &#x27;course.attendance.DELETE&#x27; entitlement is required to delete attendance records.

**Since**: 3500.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "meetingId",
        type: "Path",
        schema: z.unknown(),
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
        description: `The user is not authorized to delete the specified records in meeting object`,
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
    method: "post",
    path: "/learn/api/public/v1/courses/:courseId/meetings/:meetingId/users/bulk",
    alias: "postLearnapipublicv1coursesCourseIdmeetingsMeetingIdusersbulk",
    description: `Creates or updates attendance records for the meeting for all users in the course.

User required both of the entitlements below. If the user does not have the required entitlements,no records are created or modified.  Entitlement | User Access ------------|-----------  course.attendance.CREATE | Create Course/Organization Course Meeting Attendance course.attendance.MODIFY | Update Course/Organization Meeting Attendance

**Since**: 3500.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "meetingId",
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
        description: `The user does not have entitlements to create attendace records`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/meetings/:meetingId/users/:userId",
    alias: "getLearnapipublicv1coursesCourseIdmeetingsMeetingIdusersUserId",
    description: `Returns a Course Meeting Attendance information for the given meeting and user Id.

The &quot;course.attendance.VIEW&quot; entitlement is required to view a Course Meeting Attendance.

**Since**: 3500.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "meetingId",
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
        description: `Failed to get attendance record; or The request did not specify a valid User/Meeting Id`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The attendance record is not found `,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/meetings/:meetingId/users/:userId",
    alias: "deleteLearnapipublicv1coursesCourseIdmeetingsMeetingIdusersUserId",
    description: `Delete attendance record for meeting.It will delete meeting attendance within a course meeting.

The &#x27;course.attendance.DELETE&#x27; entitlement is required to delete Attendance Record.

**Since**: 3500.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "meetingId",
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
        description: `Invalid meetingId/userId  provided`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user is not authorized to delete the specified attendance record object`,
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
    path: "/learn/api/public/v1/courses/:courseId/meetings/:meetingId/users/:userId",
    alias: "patchLearnapipublicv1coursesCourseIdmeetingsMeetingIdusersUserId",
    description: `Update the Course Meeting Attendance data for the given Course/Organization.

The &quot;course.attendance.MODIFY&quot; entitlement is required to update a Course Meeting Attendance. The &quot;course.attendance.VIEW&quot; entitlement is required to view a Course Meeting attendance.

**Since**: 3500.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "meetingId",
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
        description: `The user does not have entitlements to update attendance records`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The attendance record is not found `,
        schema: z.void(),
      },
    ],
  },
]);

export const AttendanceApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
