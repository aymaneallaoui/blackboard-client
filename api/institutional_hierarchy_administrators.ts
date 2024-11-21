import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/admins",
    alias: "getLearnapipublicv1institutionalHierarchynodesNodeIdadmins",
    description: `Lists all the Administrators from an Institutional Hierarchy Node.

The &#x27;system.multiinst.node.admin.association.VIEW&#x27; entitlement is required.

**Since**: 3900.37.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "nodeId",
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
  {
    method: "get",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/admins/:userId",
    alias: "getLearnapipublicv1institutionalHierarchynodesNodeIdadminsUserId",
    description: `Gets information of the specified user as an administrator of the specified node.

The &#x27;system.multiinst.node.admin.association.VIEW&#x27; entitlement is required.

**Since**: 3900.37.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "nodeId",
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
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/admins/:userId",
    alias: "putLearnapipublicv1institutionalHierarchynodesNodeIdadminsUserId",
    description: `Create an association between the specified user as an administrator and the specified node with the provided system roles, giving a &lt;strong&gt;201 CREATED&lt;/strong&gt; status code as a result. If the association already exists, system roles are updated giving a &lt;strong&gt;200 OK&lt;/strong&gt; code as a result. Custom roles are supported, also by adding ´:custom´ as role sufix, for example &#x27;aCustomRole:custom&#x27;. This sufix helps to distinguish custom roles with same name as system-created roles, for example: &#x27;SystemSupport:custom&#x27; would be taken as a custom role, otherwise will be taken as System Support role. Non-administrative system roles (Guest, Integration, User/None, Observer) are not supported. &lt;/p&gt; User with &#x27;system.multiinst.node.admin.association.shared.roles.CREATE&#x27; entitlement are able to create associations on nodes where they are currently administrators and only with System Roles they already have. &lt;/p&gt; User with &#x27;system.multiinst.node.admin.association.all.roles.CREATE&#x27; entitlement can assign any administrators to any nodes without restrictions and with any amount of administrative System Roles.

**Since**: 3900.37.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "nodeId",
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
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/admins/:userId",
    alias:
      "deleteLearnapipublicv1institutionalHierarchynodesNodeIdadminsUserId",
    description: `Removes an user as node administrator.

The &#x27;system.multiinst.node.admin.association.DELETE&#x27; entitlement is required.

**Since**: 3900.37.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "nodeId",
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
]);

export const Institutional_hierarchy_administratorsApi = new Zodios(
  "localhost:3000/",
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
