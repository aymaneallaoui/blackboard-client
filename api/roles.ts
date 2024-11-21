import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courseRoles",
    alias: "getLearnapipublicv1courseRoles",
    description: `

Returns a list of course roles.  This list will contain all the course roles the context user has access to see. &lt;/p&gt;

If the context user has this entitlement, then the user can see all course roles:

- system.enrollment.CREATE
&lt;/p&gt;

Otherwise, at least one of these course role entitlements are checked for any course the context user is enrolled in:

- course.user-enroll.EXECUTE
- system.enrollment.CREATE
- course.user-role.MODIFY
&lt;/p&gt;

If the logged in user has at least one of those course role entitlements for a Course where Course.organization &#x3D; false, then the user can see course roles where Availability.Available &#x3D; Course or CourseAndOrganization &lt;/p&gt;

If the logged in user has any of those course role entitlements for a Course where Course.organization &#x3D; true, then the user can see course roles where Availability.Available &#x3D; Organization or CourseAndOrganization &lt;/p&gt;

Note that these entitlements will not grant the user the ability to create, modify or delete course roles without permission. &lt;/p&gt;

**Since**: 3300.5.0`,
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
        name: "custom",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "roleId",
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
        description: `Access Denied`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courseRoles/:roleId",
    alias: "getLearnapipublicv1courseRolesRoleId",
    description: `

Returns a single course role.  The path id can be either the CourseRole.id field like &quot;/courseRoles/_5_1&quot; or the CourseRole.roleId field like &quot;/courseRoles/roleId:Student&quot;. &lt;/p&gt;

A 403 (FORBIDDEN) status is returned if the context user does not have access to see the course role. &lt;/p&gt;

If the context user has this entitlement, then the user can see all course roles:

- system.enrollment.CREATE
&lt;/p&gt;

Otherwise, at least one of these course role entitlements are checked for any course the context user is enrolled in:

- course.user-enroll.EXECUTE
- system.enrollment.CREATE
- course.user-role.MODIFY
&lt;/p&gt;

If the logged in user has at least one of those course role entitlements for a Course where Course.organization &#x3D; false, then the user can see course roles where Availability.Available &#x3D; Course or CourseAndOrganization &lt;/p&gt;

If the logged in user has any of those course role entitlements for a Course where Course.organization &#x3D; true, then the user can see course roles where Availability.Available &#x3D; Organization or CourseAndOrganization &lt;/p&gt;

Note that these entitlements will not grant the user the ability to create, modify or delete course roles without permission. &lt;/p&gt;

**Since**: 3300.5.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "roleId",
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
        description: `The request did not specify a valid roleId`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The course role is not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/institutionRoles",
    alias: "getLearnapipublicv1institutionRoles",
    description: `Returns a list of institution roles.

Users must have the entitlement &#x27;system.institutionrole.VIEW&#x27; to access this endpoint.

**Since**: 3300.4.0`,
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
        name: "roleId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "custom",
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
        description: `Access Denied`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/institutionRoles/:roleId",
    alias: "getLearnapipublicv1institutionRolesRoleId",
    description: `Loads a specific institution role.

Users must have the entitlement &#x27;system.institutionrole.VIEW&#x27; to access this endpoint.

**Since**: 3300.4.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "roleId",
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
        description: `The request did not specify a valid roleId`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The institution role is not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/systemRoles",
    alias: "getLearnapipublicv1systemRoles",
    description: `Returns a list of system roles.

Users must have the &#x27;system.systemrole.manager.VIEW&#x27; entitlement to access this endpoint.

**Since**: 3300.5.0`,
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
        name: "roleId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "custom",
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
        status: 403,
        description: `Access Denied`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/systemRoles/:roleId",
    alias: "getLearnapipublicv1systemRolesRoleId",
    description: `Get a specific system role by roleId. See the roleId parameter for valid roleId formats.

Users must have the &#x27;system.systemrole.manager.VIEW&#x27; entitlement to access this endpoint.

**Since**: 3300.5.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "roleId",
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
        description: `The request did not specify a valid roleId`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Access Denied`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The system role is not found`,
        schema: z.void(),
      },
    ],
  },
]);

export const RolesApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
