import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/users",
    alias: "getLearnapipublicv1users",
    description: `Returns a list of users.

At least one of the entitlements &#x27;system.user.VIEW&#x27; or &#x27;user.VIEW&#x27; are needed.

Note: Users with the &#x27;SystemAdmin&#x27; role are only included in the results if the logged on user also has this role.

**Since**: 3000.1.0`,
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
        name: "userName",
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
        name: "modified",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "lastLogin",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "createdCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "modifiedCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "lastLoginCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "dataSourceId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "institutionRoleIds",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "name.family",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "studentId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "contact.email",
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
    path: "/learn/api/public/v1/users",
    alias: "postLearnapipublicv1users",
    description: `Creates a user.

The &#x27;system.user.CREATE&#x27; entitlement is needed.

**Since**: 2015.11.0`,
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
        description: `An error occurred while creating the new user`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The currently authenticated user has insufficient privileges to create a new user`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `A user with the same userName or externalId already exists`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/users/:userId",
    alias: "getLearnapipublicv1usersUserId",
    description: `Loads a user.

Properties returned will depend on the caller&#x27;s entitlements.

Callers with the entitlement &#x27;user.VIEW&#x27; will always get a minimal set of core properties:

- id
- name.given
- name.family
- name.middle
- systemRoleIds

Depending on the Learn administrator customizable user field display settings, as well as the target user&#x27;s personal visibility settings, the following fields might also be included:

- userName
- educationLevel
- gender
- birthDate
- name.other
- name.suffix
- name.title
- job.*
- contact.*
- address.*

Callers asking for their own user record get all fields listed above, plus:

- locale.*

All user properties are provided to callers with one of the entitlements &#x27;system.user.properties.MODIFY&#x27;, &#x27;system.useradmin.generic.VIEW&#x27;, or &#x27;system.user.VIEW&#x27;.

**Since**: 2015.11.0`,
    requestFormat: "json",
    parameters: [
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
        description: `The id is invalid or not properly formatted`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user is not authorized to view the specified User object`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The user is not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/users/:userId",
    alias: "deleteLearnapipublicv1usersUserId",
    description: `Deletes a user.

The &#x27;system.user.DELETE&#x27; entitlement is needed.

**Since**: 2015.11.0`,
    requestFormat: "json",
    parameters: [
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
        description: `Invalid userid provided`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user is not authorized to delete the specified User object`,
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
    path: "/learn/api/public/v1/users/:userId",
    alias: "patchLearnapipublicv1usersUserId",
    description: `Updates a user.

Callers may update their own user record if they have the &#x27;self.user.MODIFY&#x27; entitlement.  Updating other users requires the &#x27;system.user.properties.MODIFY&#x27; entitlement.

Certain properties may be edited by callers with more finely grained entitlements: 

 | Field                  | Entitlements Required                               |
 |------------------------|-----------------------------------------------------|
 | systemRoleIds          | system.user.MODIFY, system.user-system-role.MODIFY  |
 | availability.available | system.user.MODIFY, system.user.availability.MODIFY |
 | password               | system.user.MODIFY, system.user-password.MODIFY     |
 

**Since**: 2015.11.0`,
    requestFormat: "json",
    parameters: [
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
        description: `The request did not specify correct parameters; or The resourceId and uploadId fields cannot both be populated at the same time; or Resource referenced by ResourceId not found or not usable by current user (if ResourceId is specified); or Resource Id provided is for an unsupported file format, only image formats are supported; or Resource Id provided is for a folder, only images are supported`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user is not authorized to update the specified User object`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The user is not found`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `A user with the same username or batchUid already exists`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/users/:userId/avatar",
    alias: "getLearnapipublicv1usersUserIdavatar",
    description: `Gets a user&#x27;s avatar image.

The response is an HTTP redirect rather then image raw data. It is up to the caller of the api to follow the redirect and download the image.

The redirect link returned is signed on behalf of the user of the API. It is expiring, so it is not recommended for bookmarking. The caller of this API is checked for permissions to see the requested user&#x27;s resource.

**Since**: 3800.10.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "userId",
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
        description: `The id is invalid or not properly formatted`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user is not authorized to view the specified User object`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The user is not found; or The user&#x27;s avatar is not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/users/:userId/observees",
    alias: "getLearnapipublicv1usersUserIdobservees",
    description: `Returns a list of users being observed by a given user.

The &#x27;observer.associations.VIEW&#x27; entitlement is needed as well as being able to view the provided user.

**Since**: 3500.5.0`,
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
    method: "get",
    path: "/learn/api/public/v1/users/:userId/observers",
    alias: "getLearnapipublicv1usersUserIdobservers",
    description: `Returns a list of users observing a given user.

The &#x27;observer.associations.VIEW&#x27; entitlement is needed as well as being able to view the provided user.

**Since**: 3500.5.0`,
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
    path: "/learn/api/public/v1/users/:userId/observers/:observerId",
    alias: "putLearnapipublicv1usersUserIdobserversObserverId",
    description: `Creates an observer/observee association. The user identified by userId must not have the OBSERVER system role. Similarly, the user identified by observerId must have the OBSERVER system role.

The &#x27;system.observer_user.CREATE&#x27; entitlement is needed as well as being able to view the provided users.

**Since**: 3500.5.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "userId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "observerId",
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
    method: "delete",
    path: "/learn/api/public/v1/users/:userId/observers/:observerId",
    alias: "deleteLearnapipublicv1usersUserIdobserversObserverId",
    description: `Removes an observer/observee association.

The &#x27;system.observer_user.DELETE&#x27; entitlement is needed as well as being able to view the provided users.

**Since**: 3500.5.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "userId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "observerId",
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
    path: "/learn/api/public/v1/users/:userId/pronunciationAudio",
    alias: "getLearnapipublicv1usersUserIdpronunciationAudio",
    description: `Gets a user&#x27;s pronunciation audio

The response is an HTTP redirect rather than an audio file. It is up to the caller of the api to follow the redirect and download the image.

The redirect link returned is signed on behalf of the user of the API. It is expiring, so it is not recommended for bookmarking. The caller of this API is checked for permissions to see the requested user&#x27;s resource.

**Since**: 3900.32.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "userId",
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
        description: `The id is invalid or not properly formatted`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user is not authorized to view the specified User object`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The user is not found; or The user&#x27;s pronunciation audio is not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/users/:userId/sessions",
    alias: "getLearnapipublicv1usersUserIdsessions",
    description: `Displays active session information for a specific user.

The entitlement system.user.sessions.VIEW is needed to request a user&#x27;s active sessions.

**Since**: 3800.4.0`,
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
        name: "fields",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `User does not have the appropriate entitlement to view active sessions`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Invalid userid provided`,
        schema: z.void(),
      },
    ],
  },
]);

export const UsersApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
