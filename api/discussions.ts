import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/discussions",
    alias: "getLearnapipublicv1coursesCourseIddiscussions",
    description: `Get all discussions associated with the specified Ultra Course. The course must have ultra view enabled.

Requires the following entitlement:

- discussion.forum.VIEW
&lt;/p&gt; Enrolled users should be able to access this resource regardless of entitlement if the discussion is set to available. Any non-enrolled user with the required entitlements already mentioned above will be able to get an empty list response if consulted courseId does not have any discussion, otherwise, a 403 error should rise.

**Since**: 3900.19.0`,
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
        name: "sort",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "title",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "gradable",
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
        status: 429,
        description: `Too Many Requests`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v1/courses/:courseId/discussions",
    alias: "postLearnapipublicv1coursesCourseIddiscussions",
    description: `Create a discussion within the specified Ultra Course. If the discussion is created as gradable an associated gradebook column is also created. Such gradebook column can be updated via the course grades API.

Requires the following entitlements:

- discussion.forum.CREATE
- discussion.post.CREATE
- discussion.thread.CREATE
- course.content.CREATE.
&lt;/p&gt;

**Since**: 3900.27.0`,
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
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/discussions/:discussionId",
    alias: "getLearnapipublicv1coursesCourseIddiscussionsDiscussionId",
    description: `Get a discussion in the Ultra Course with the specified id.

Requires the following entitlement:

- discussion.forum.VIEW
&lt;/p&gt; Enrolled users should be able to access this resource regardless of entitlement if the discussion is set to available

**Since**: 3900.19.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "discussionId",
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
    method: "patch",
    path: "/learn/api/public/v1/courses/:courseId/discussions/:discussionId",
    alias: "patchLearnapipublicv1coursesCourseIddiscussionsDiscussionId",
    description: `Update a discussion in an Ultra Course.

This operation is always a partial-update. So user should only send data that he want to change. If the discussion is updated to be gradable an associated gradebook column is also created. Such gradebook column can be updated via the course grades API. List of entitlements which allow a logged on user to update a forum.

- discussion.forum.MODIFY

**Since**: 3900.27.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "discussionId",
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
    path: "/learn/api/public/v1/courses/:courseId/discussions/:discussionId/groups",
    alias: "getLearnapipublicv1coursesCourseIddiscussionsDiscussionIdgroups",
    description: `Get the groups associated to a discussion from an Ultra Course, or an empty list if there are none.

Requires the following entitlement:

- course.content.designer.VIEW
&lt;/p&gt;

**Since**: 3900.27.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "discussionId",
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
    path: "/learn/api/public/v1/courses/:courseId/discussions/:discussionId/groups/:groupId",
    alias:
      "putLearnapipublicv1coursesCourseIddiscussionsDiscussionIdgroupsGroupId",
    description: `Sets the specified group inside a discussion from an Ultra Course. This will create a group thread. A discussion that already has messages, including drafts, will not be able to be changed into a group discussion. After the first group has been set, all subsequent groups must belong to the same group set. If the forum content is conditioned behind a memberships criteria, no group associations shall be created by this endpoint.

Requires the following entitlement:

- course.content.MODIFY
&lt;/p&gt;

**Since**: 3900.27.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "discussionId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "groupId",
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
    path: "/learn/api/public/v1/courses/:courseId/discussions/:discussionId/messages",
    alias: "getLearnapipublicv1coursesCourseIddiscussionsDiscussionIdmessages",
    description: `Get the messages of the specified discussion in an Ultra Course.

Requires the following entitlement:

- discussion.post.VIEW

Enrolled users should be able to access this resource regardless of entitlement if the discussion is set to available For group discussions, students will be able to access only the messages associated with groups in which they are enrolled. Entitled users will have access to messages associated with all groups, but can filter returned messages based on groupId using the groupId query parameter A draft message can only be seen by its own author

**Since**: 3900.19.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "discussionId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "groupId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "userId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "status",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "isRead",
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
        name: "posted",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "edited",
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
        name: "postedCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "editedCompare",
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
    method: "post",
    path: "/learn/api/public/v1/courses/:courseId/discussions/:discussionId/messages",
    alias: "postLearnapipublicv1coursesCourseIddiscussionsDiscussionIdmessages",
    description: `Create a message in the main thread of a discussion from an Ultra Course. This corresponds to a direct reply to the topic.

Requires the following entitlements:

- discussion.post.CREATE

For group discussions, instructors must specify a valid group id for the message to be created in the specific group thread.

**Since**: 3900.27.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "discussionId",
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
    path: "/learn/api/public/v1/courses/:courseId/discussions/:discussionId/messages/:messageId",
    alias:
      "deleteLearnapipublicv1coursesCourseIddiscussionsDiscussionIdmessagesMessageId",
    description: `Deletes a message in a discussion from an Ultra Course. If the message has no replies, it is fully deleted. Otherwise, it is soft-deleted unless explicitly requested for complete deletion using the query parameter &#x60;deleteReplies&#x60;.

Requires the following entitlement:

- discussion.post.MODIFY
- discussion.draft.DELETE
- discussion.post.DELETE
- discussion.post.author.DELETE
- discussion.post.author.DELETE

**Since**: 3900.27.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "discussionId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "messageId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "deleteReplies",
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
    path: "/learn/api/public/v1/courses/:courseId/discussions/:discussionId/messages/:messageId",
    alias:
      "patchLearnapipublicv1coursesCourseIddiscussionsDiscussionIdmessagesMessageId",
    description: `Update a message of a discussion from an Ultra Course.

Requires the following entitlement:

- discussion.draft.MODIFY
- discussion.post.MODIFY
- discussion.post.author.MODIFY

**Since**: 3900.27.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "discussionId",
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
    path: "/learn/api/public/v1/courses/:courseId/discussions/:discussionId/messages/:messageId/replies",
    alias:
      "getLearnapipublicv1coursesCourseIddiscussionsDiscussionIdmessagesMessageIdreplies",
    description: `Get the replies of the specified message in a discussion from an Ultra Course.

Requires the following entitlement:

- discussion.post.VIEW

Enrolled users should be able to access this resource regardless of entitlement if the discussion is set to available A draft message can only be seen by its own author

**Since**: 3900.19.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "discussionId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "messageId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "groupId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "userId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "status",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "isRead",
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
        name: "posted",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "edited",
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
        name: "postedCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "editedCompare",
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
    method: "post",
    path: "/learn/api/public/v1/courses/:courseId/discussions/:discussionId/messages/:messageId/replies",
    alias:
      "postLearnapipublicv1coursesCourseIddiscussionsDiscussionIdmessagesMessageIdreplies",
    description: `Create a reply to the specified message in a discussion from an Ultra Course.

Requires the following entitlement:

- discussion.post.CREATE

**Since**: 3900.27.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "discussionId",
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

export const DiscussionsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
