import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/contents",
    alias: "getLearnapipublicv1coursesCourseIdcontents",
    description: `List top-level content items in a course.

Users with at least one of the following entitlements may access any content item:

- course.adaptiverelease.CREATE
- course.adaptiverelease.DELETE
- course.adaptiverelease.MODIFY
- course.adaptiverelease.VIEW
- course.configure-areas.EXECUTE
- course.content-item.copy.EXECUTE
- course.content.DELETE
- course.content.MODIFY
- course.learningstandards.alignment.CREATE
- course.performance.dashboard.VIEW
&lt;/p&gt;

For other users, permission to view the content item will depend on the availability settings of the course and  the content item.  The following fields will be filtered out:

- availability.available
- availability.allowGuests
- availability.adaptiveRelease
&lt;/p&gt;

**Since**: 3000.1.0`,
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
        name: "recursive",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "title",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "contentHandler",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "created",
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
        name: "modifiedCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "reviewable",
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
    path: "/learn/api/public/v1/courses/:courseId/contents",
    alias: "postLearnapipublicv1coursesCourseIdcontents",
    description: `Create a new top-level content item. Currently only folders may be created as top-level content items in a Classic course. For Ultra courses any content item is allowed and will be placed under the ROOT folder. Entitlement &quot;course.content.CREATE&quot; required to create Course Content.

**Since**: 3000.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "allowChildCourseContent",
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
        status: 507,
        description: `Folder quota exceeded`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v1/courses/:courseId/contents/createAssignment",
    alias: "postLearnapipublicv1coursesCourseIdcontentscreateAssignment",
    description: `Create assignment content, grade column and file attachments in one POST. Any files specified with assignment creation must be previously uploaded using the uploads endpoint. Ultra courses supported since 3300.9.0 Classic courses supported since 3400.9.0 &lt;/p&gt; For Ultra courses, this will create:

- A content item with a contentHandler.id &#x3D; resource/x-bb-asmt-test-link
- A gradebook column with contentId &#x3D; id of the new content
- In the new Ultra assignment, instructions are saved as assignment instructions only, unlike in the old Ultra assignment where instructions were created as presentation questions.
&lt;/p&gt; The following entitlements are required to create an assignment in Ultra:

- course.content.CREATE
- course.assessment.CREATE
- course.content.assessment.deploy.EXECUTE
- course.gradebook.MODIFY
- course.assessment.MODIFY, if instructions or files are specified
&lt;/p&gt; For Classic courses, this will create:

- A content item with contentHandler.id &#x3D; resource/x-bb-assignment
- A gradebook column with contentId &#x3D; id of the new content
- A file attachment for each given file attachment id
The following entitlements are required to create a Classic assignment:

- course.content.CREATE
- course.gradebook.MODIFY
- course.content.MODIFY, if files are specified
&lt;/p&gt;

**Since**: 3300.9.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "allowChildCourseContent",
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
        description: `Logged-on User has insufficient privileges`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId",
    alias: "getLearnapipublicv1coursesCourseIdcontentsContentId",
    description: `Load a specific content item from a course.

Users with at least one of the following entitlements may access any content item:

- course.adaptiverelease.CREATE
- course.adaptiverelease.DELETE
- course.adaptiverelease.MODIFY
- course.adaptiverelease.VIEW
- course.configure-areas.EXECUTE
- course.content-item.copy.EXECUTE
- course.content.DELETE
- course.content.MODIFY
- course.learningstandards.alignment.CREATE
- course.performance.dashboard.VIEW
&lt;/p&gt;

For other users, permission to view the content item will depend on the availability settings of the course and the content item.  The following fields will be filtered out:

- availability.available
- availability.allowGuests
- availability.adaptiveRelease
Include includeInActivityTracking to define if the content should be included in the activity tracking. By default, this value is true so the content will be included in the activity tracking. &lt;/p&gt;

**Since**: 3000.1.0`,
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
        name: "includeInActivityTracking",
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
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId",
    alias: "deleteLearnapipublicv1coursesCourseIdcontentsContentId",
    description: `Delete a content item.

The &#x27;course.content.DELETE&#x27; entitlement is required.

**Since**: 3000.1.0`,
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
        name: "allowChildCourseContent",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "deleteGrades",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Content Handler has not been implemented; or Top Level Content Folders can not be deleted`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Logged-on User has insufficient privileges`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Invalid Content ID`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Cannot delete assessments which contain responses or questions used in other assessments`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "patch",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId",
    alias: "patchLearnapipublicv1coursesCourseIdcontentsContentId",
    description: `Update a content item.

The &#x27;course.content.MODIFY&#x27; entitlement is required.

**Since**: 3000.1.0`,
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
        name: "allowChildCourseContent",
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
        status: 507,
        description: `Folder quota exceeded`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/children",
    alias: "getLearnapipublicv1coursesCourseIdcontentsContentIdchildren",
    description: `List all child content items directly beneath another content item.  This is only valid for content items that are allowed to have children (e.g. Folders).

Users with at least one of the following entitlements may access all child contents from a content item:

- course.adaptiverelease.CREATE
- course.adaptiverelease.DELETE
- course.adaptiverelease.MODIFY
- course.adaptiverelease.VIEW
- course.configure-areas.EXECUTE
- course.content-item.copy.EXECUTE
- course.content.DELETE
- course.content.MODIFY
- course.learningstandards.alignment.CREATE
- course.performance.dashboard.VIEW
In any of the following cases, the user may also get the child contents from a content item.

- The user has a role in the course other than guest or observer, and doesn&#x27;t have any of the previously mentioned entitlements.
- The user has the role of observer, and both the course and the underlying content allow observer access.
- The user accesses the course as guest, both the course and the underlying content allow guest access, further, the course content menu allows guest access as well for the original courses.
&lt;/p&gt;

For other users, permission to view the content item will depend on the availability settings of the course and  the content item. The following fields will be filtered out:

- availability.available
- availability.allowGuests
- availability.adaptiveRelease
Include includeInActivityTracking to define if the content should be included in the activity tracking.  By default, this value is true so the content will be included in the activity tracking. &lt;/p&gt;

Usage of userMessageState field into expand, is only legal with a limit up to 10 items, a protection was set so that users can request the field  setting a limit &lt;&#x3D; 10. In all the other cases, status BAD_REQUEST (400) will be returns to the client. &lt;/p&gt;

**Since**: 3000.1.0`,
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
      {
        name: "recursive",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "title",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "contentHandler",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "created",
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
        name: "modifiedCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "reviewable",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "includeInActivityTracking",
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
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/children",
    alias: "postLearnapipublicv1coursesCourseIdcontentsContentIdchildren",
    description: `Create a new child content item beneath an existing content item.  This is only valid for content items that are allowed to have children (e.g. Folders). Entitlement &quot;course.content.CREATE&quot; required to create Course Content.

**Since**: 3000.1.0`,
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
        name: "allowChildCourseContent",
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
        status: 507,
        description: `Folder quota exceeded`,
        schema: z.void(),
      },
    ],
  },
]);

export const ContentApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
