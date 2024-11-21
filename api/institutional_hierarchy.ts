import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/nodes",
    alias: "getLearnapipublicv1coursesCourseIdnodes",
    description: `Obtains a list of nodes to which a given course is directly associated.

Users with the &#x27;system.multiinst.node.course.association.VIEW&#x27; entitlement and the &#x27;system.multiinst.node.org.association.VIEW&#x27; system entitlement can access all node association information.

**Since**: 3800.10.0`,
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
    path: "/learn/api/public/v1/institutionalHierarchy/nodes",
    alias: "getLearnapipublicv1institutionalHierarchynodes",
    description: `Returns the Top-level institutional hierarchy nodes

Entitlement system.multiinst.hierarchy.manager.VIEW required

Users with entitlement &quot;system.multiinst.hierarchy.manager.VIEW&quot; for Node management can view all fields.

**Since**: 3800.10.0`,
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
        name: "recursive",
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
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes",
    alias: "postLearnapipublicv1institutionalHierarchynodes",
    description: `Creates a new institutional hierarchy node

Entitlement system.multiinst.hierarchy.manager.CREATE required

Users with entitlement &quot;system.multiinst.hierarchy.manager.CREATE&quot; for Node management can create a new Node.

**Since**: 3800.15.0`,
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
        status: 403,
        description: `Forbidden`,
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
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId",
    alias: "getLearnapipublicv1institutionalHierarchynodesNodeId",
    description: `Returns the institutional hierarchy node corresponding the provided ID

Entitlement system.multiinst.hierarchy.manager.VIEW required

Users with entitlement &quot;system.multiinst.hierarchy.manager.VIEW&quot; for Node management can view all fields.

**Since**: 3800.10.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "nodeId",
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
    method: "delete",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId",
    alias: "deleteLearnapipublicv1institutionalHierarchynodesNodeId",
    description: `Deletes an institutional hierarchy node. The root node cannot be deleted. This deletes orphan children in a cascading fashion.

The &#x27;system.multiinst.hierarchy.manager.DELETE&#x27; entitlement is required.

**Since**: 3800.15.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "nodeId",
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
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId",
    alias: "patchLearnapipublicv1institutionalHierarchynodesNodeId",
    description: `Updates Institutional Hierarchy Node information.

If parentId is sent a move node task would be processed on background, this returns a location header where this task status can be consulted.

Entitlement system.multiinst.hierarchy.manager.MODIFY is required

**Since**: 3800.15.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "nodeId",
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
    method: "get",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/children",
    alias: "getLearnapipublicv1institutionalHierarchynodesNodeIdchildren",
    description: `Returns the children of the institutional hierarchy node corresponding to the provided ID

Entitlement system.multiinst.hierarchy.manager.VIEW required

Users with entitlement &quot;system.multiinst.hierarchy.manager.VIEW&quot; for Node management can view all fields.

**Since**: 3800.10.0`,
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
        name: "recursive",
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
    method: "post",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/children",
    alias: "postLearnapipublicv1institutionalHierarchynodesNodeIdchildren",
    description: `Create a new institutional hierarchy node whose parent corresponds to the supplied nodeId

Entitlement system.multiinst.hierarchy.manager.CREATE required

Users with entitlement &quot;system.multiinst.hierarchy.manager.CREATE&quot; for Node management can create a new Node.

**Since**: 3800.15.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "nodeId",
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
    method: "get",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/courses",
    alias: "getLearnapipublicv1institutionalHierarchynodesNodeIdcourses",
    description: `Returns a list of node-course relationships for the specified node.

Users with the &#x27;system.multiinst.node.course.association.VIEW&#x27; entitlement and the &#x27;system.multiinst.node.org.association.VIEW&#x27; system entitlement can access all node association information.

**Since**: 3800.10.0`,
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
        name: "course.organization",
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
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/courses/:courseId",
    alias:
      "putLearnapipublicv1institutionalHierarchynodesNodeIdcoursesCourseId",
    description: `Creates a node-course relationship for the specified node and course.

Users with the &#x27;system.multiinst.node.course.association.CREATE&#x27; entitlement can create Course - Hierarchy Node associations. Users with the &#x27;system.multiinst.node.org.association.CREATE&#x27; entitlement can create Organization - Hierarchy Node associations

**Since**: 3800.17.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "nodeId",
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
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/courses/:courseId",
    alias:
      "deleteLearnapipublicv1institutionalHierarchynodesNodeIdcoursesCourseId",
    description: `Deletes the association between a given Node and a Course

Entitlement system.multiinst.node.course.association.DELETE required to delete Node-Course associations Entitlement system.multiinst.node.org.association.DELETE required to delete Node-Organization associations

**Since**: 3800.17.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "nodeId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
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
    method: "patch",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/courses/:courseId",
    alias:
      "patchLearnapipublicv1institutionalHierarchynodesNodeIdcoursesCourseId",
    description: `Update a specified node-course association.

Users with the &#x27;system.multiinst.node.course.association.CREATE&#x27; entitlement can update Course - Hierarchy Node associations Users with the &#x27;system.multiinst.node.org.association.CREATE&#x27; entitlement can update Organization - Hierarchy Node associations

**Since**: 3800.17.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "nodeId",
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
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/tools/:toolType",
    alias: "getLearnapipublicv1institutionalHierarchynodesNodeIdtoolsToolType",
    description: `Returns a list of tools associated to a node

Entitlement system.multiinst.node.tools.MODIFY required

Users with entitlement &quot;system.multiinst.node.tools.MODIFY&quot; for Node management can make use of this Endpoint.

**Since**: 3900.16.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "nodeId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "toolType",
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
    method: "patch",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/tools/:toolType/:toolId",
    alias:
      "patchLearnapipublicv1institutionalHierarchynodesNodeIdtoolsToolTypeToolId",
    description: `Modifies a tool related to a specific node and tool type. The modified tool is returned if modification runs succesfuly

Entitlements system.multiinst.node.tools.MODIFY and system.multiinst.node.tools.lock.override.MODIFY are required

Users with entitlement &quot;system.multiinst.node.tools.MODIFY&quot; and &quot;system.multiinst.node.tools.lock.override.MODIFY&quot; for Node management can make use of this Endpoint.

**Since**: 3900.16.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "nodeId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "toolType",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "toolId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "updateExistingOriginalCourses",
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
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/users",
    alias: "getLearnapipublicv1institutionalHierarchynodesNodeIdusers",
    description: `Returns a list of node-user relationships for the specified node.

Users with the &#x27;system.multiinst.node.user.association.VIEW&#x27; entitlement can access all node association information.

**Since**: 3900.8.0`,
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
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/users/:userId",
    alias: "putLearnapipublicv1institutionalHierarchynodesNodeIdusersUserId",
    description: `Creates the association between a given Node and a User.

Entitlement &#x27;system.multiinst.node.user.association.CREATE&#x27; is required.

**Since**: 3900.8.0`,
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
      {
        status: 409,
        description: `Conflict`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/:nodeId/users/:userId",
    alias: "deleteLearnapipublicv1institutionalHierarchynodesNodeIdusersUserId",
    description: `Deletes the association between a given Node and a User.

Entitlement &#x27;system.multiinst.node.user.association.DELETE&#x27; is required.

**Since**: 3900.8.0`,
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
  {
    method: "get",
    path: "/learn/api/public/v1/users/:userId/nodes",
    alias: "getLearnapipublicv1usersUserIdnodes",
    description: `Obtains the Institutional Hierarchy Nodes associated to a User.

Entitlement system.multiinst.node.user.association.VIEW is required

**Since**: 3900.8.0`,
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

export const Institutional_hierarchyApi = new Zodios(
  "localhost:3000/",
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
