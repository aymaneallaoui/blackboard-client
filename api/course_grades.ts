import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/columns/:columnId/groupAttempts",
    alias:
      "getLearnapipublicv1coursesCourseIdgradebookcolumnsColumnIdgroupAttempts",
    description: `Returns a list of Group Attempts for the specified Course and Column. Group Attempts with a &#x27;NeedsGrading&#x27; status will be filtered out if they are associated with a &#x27;Manual&#x27; Grade Column.

User must have the following entitlement in order to view group attempts.

- course.gradebook.attempts.VIEW
- course.gradebook-grades.VIEW
- course.gradebook-grades.EXECUTE
- course.gradebook.MODIFY

**Since**: 3900.98.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "columnId",
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
        name: "attemptDate",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "attemptDateCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "attemptStatuses",
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
    path: "/learn/api/public/v1/courses/:courseId/gradebook/columns/:columnId/groupAttempts",
    alias:
      "postLearnapipublicv1coursesCourseIdgradebookcolumnsColumnIdgroupAttempts",
    description: `Creates a Group Attempt for the specified Course and grade column.

User must have the following entitlement in order to create a group attempt.

- course.gradebook-grades.EXECUTE
- course.gradebook.MODIFY
- course.assessment.MODIFY

**Since**: 3900.98.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
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
    path: "/learn/api/public/v1/courses/:courseId/gradebook/columns/:columnId/groupAttempts/:groupAttemptId",
    alias:
      "getLearnapipublicv1coursesCourseIdgradebookcolumnsColumnIdgroupAttemptsGroupAttemptId",
    description: `Return a Group Attempt for the specified Course &amp; Group Attempt Id. Users with the &#x27;course.gradebook.MODIFY&#x27; entitlement can view Group Attempts for the specified Course and Column. If user does not have &#x27;course.gradebook.MODIFY&#x27; entitlement, then they can view the GroupAttempt if: [1] User is a member of the Group Attempt&#x27;s Group [2] User is in set of Users who have made a submission for this Group Attempt (excluding Group members who were not a member at the time of submission)

**Since**: 3900.98.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "groupAttemptId",
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
    path: "/learn/api/public/v1/courses/:courseId/gradebook/columns/:columnId/groupAttempts/:groupAttemptId",
    alias:
      "deleteLearnapipublicv1coursesCourseIdgradebookcolumnsColumnIdgroupAttemptsGroupAttemptId",
    description: `Deletes a group attempt for a given course.

User must have the following entitlements in order to delete the group attempt in a course.

- course.assessment.MODIFY
- course.gradebook.MODIFY

**Since**: 3900.98.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "groupAttemptId",
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
    path: "/learn/api/public/v1/courses/:courseId/gradebook/columns/:columnId/groupAttempts/:groupAttemptId",
    alias:
      "patchLearnapipublicv1coursesCourseIdgradebookcolumnsColumnIdgroupAttemptsGroupAttemptId",
    description: `Update an existing group Attempt on a Grade Column. &lt;/p&gt; Students can only modify the groupSubmission, groupComments and status of their own attempt if the status is InProgress. Moving status to NeedsGrading is the equivalent of submitting the attempt. &lt;/p&gt;

Not enrolled users with the required entitlements are only able to submit the attempt (change status to NeedsGrading). Required entitlements:

- course.gradebook.MODIFY
- course.assessment.MODIFY
&lt;/p&gt;

**Since**: 3900.98.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "groupAttemptId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "applyToAll",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "columnId",
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
    path: "/learn/api/public/v1/courses/:courseId/gradebook/columns/:columnId/logs",
    alias: "getLearnapipublicv1coursesCourseIdgradebookcolumnsColumnIdlogs",
    description: `Returns a list of log entries related to the provided Gradebook Column.

User must have the following entitlements in order to see the provided course&#x27;s GradebookLog.

- course.gradebook-grades.VIEW
- course.gradebook.MODIFY
- course.gradebook-grades.EXECUTE

**Since**: 3900.71.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "until",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "since",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "user.userId",
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
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/logs",
    alias: "getLearnapipublicv1coursesCourseIdgradebooklogs",
    description: `Returns a list of Gradebook Logs for a given course ID.

User must have the following entitlements in order to see the provided course&#x27;s GradebookLog.

- course.gradebook-grades.VIEW
- course.gradebook.MODIFY
- course.gradebook-grades.EXECUTE

**Since**: 3900.71.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "until",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "since",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "user.userId",
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
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/schemas",
    alias: "getLearnapipublicv1coursesCourseIdgradebookschemas",
    description: `Returns a list of grade schemas associated with the specified course.

Users with entitlements &#x27;course.gradebook.MODIFY&#x27; or &#x27;course.user.grades.VIEW&#x27;, or users enrolled in the specified course can retrieve grade schema details.

A subset of the schema properties are available to enrolled users without the &#x27;course.gradebook.MODIFY&#x27; entitlement:

- id
- scaleType

**Since**: 3300.2.0`,
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
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `Access Denied`,
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
    path: "/learn/api/public/v1/courses/:courseId/gradebook/schemas",
    alias: "postLearnapipublicv1coursesCourseIdgradebookschemas",
    description: `Create a Tabular Grade Schema on this course. Currently only supports Classic/9.1 Courses.

The entitlement &quot;course.gradebook.MODIFY&quot; is needed.

**Since**: 3300.2.0`,
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
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/gradebook/schemas/:schemaId",
    alias: "getLearnapipublicv1coursesCourseIdgradebookschemasSchemaId",
    description: `Loads the grade schema associated with the specified course and schema Id.

Users with entitlements &#x27;course.gradebook.MODIFY&#x27; or &#x27;course.user.grades.VIEW&#x27;, or users enrolled in the specified course can retrieve the grade schema details.

A subset of the schema properties are available to enrolled users without the &#x27;course.gradebook.MODIFY&#x27; entitlement:

- id
- scaleType

**Since**: 3300.2.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "schemaId",
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
    path: "/learn/api/public/v1/courses/:courseId/gradebook/schemas/:schemaId",
    alias: "deleteLearnapipublicv1coursesCourseIdgradebookschemasSchemaId",
    description: `Deletes the grade schema associated with the specified course and schema Id.

Requires entitlement &#x27;course.gradebook.MODIFY&#x27;

Grade schemas in Ultra courses may not be deleted

A schema must be removable (not in-use, and either tabular or user-created) to be deleted

**Since**: 3300.2.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "schemaId",
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
    path: "/learn/api/public/v1/courses/:courseId/gradebook/schemas/:schemaId",
    alias: "patchLearnapipublicv1coursesCourseIdgradebookschemasSchemaId",
    description: `

Updates the grade schema associated with the specified course and schema Id. &lt;/p&gt;

Requires entitlement &#x27;course.gradebook.MODIFY&#x27; &lt;/p&gt;

A schema must have a scaleType of Tabular to be updated &lt;/p&gt;

If updating the symbols field, the following criteria must be true:

- All symbols for the schema must be included. Any existing symbols not included in the patch will be deleted.
- There must be at least 1 symbol for schemas associated with Classic courses, and 2 for Ultra courses.
- When sorted descending by lowerBound, The lowerBound of a symbol must be equal to the upperBound of the following symbol.  In other words,      there should be no gaps or overlaps between the symbols.
- The lowerBound, upperBound and absoluteValue of all symbols must be nonnegative.
- The text field must be unique for each symbol in a schema.
- The lowerBound and upperBound fields must have a maximum of 3 digits after the decimal point.
- The absoluteValue field must have a maximum of 3 digits after the decimal point for Classic courses, and 4 for Ultra courses.-  -  &lt;/p&gt;

**Since**: 3300.2.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "schemaId",
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
    path: "/learn/api/public/v2/courses/:courseId/gradebook/columns",
    alias: "getLearnapipublicv2coursesCourseIdgradebookcolumns",
    description: `Returns a list of grade columns.

The entitlement &quot;course.gradebook.MODIFY&quot; is needed. Alternatively, student users may view the grade columns if they are enrolled in the course, and the mygrade tool is available in the course, and the columns are visible to the student. Observers may view grade columns if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.

Student or observer users may view a limited subset of grade column fields:

- id
- name
- displayName
- description
- externalGrade
- contentId
- score.possible
- scoreProviderHandle
- grading.type
- grading.due
- grading.attemptsAllowed
- grading.scoringModel
- formula
- availability.available

**Since**: 3200.10.0`,
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
        name: "contentId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "displayName",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "gradebookCategoryId",
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
    method: "post",
    path: "/learn/api/public/v2/courses/:courseId/gradebook/columns",
    alias: "postLearnapipublicv2coursesCourseIdgradebookcolumns",
    description: `Create a manual grade column. The entitlement &quot;course.gradebook.MODIFY&quot; is needed.

**Since**: 3200.10.0`,
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
        description: `Bad Request`,
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
    path: "/learn/api/public/v2/courses/:courseId/gradebook/columns/:columnId",
    alias: "getLearnapipublicv2coursesCourseIdgradebookcolumnsColumnId",
    description: `Loads a specific grade column.

The entitlement &quot;course.gradebook.MODIFY&quot; is needed. Alternatively, student users may view the grade column if they are enrolled in the course, and the mygrade tool is available in the course, and the column is visible to the student. Observers may view the grade column if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.

Student or observer users may view a limited subset of grade column fields:

- id
- name
- description
- externalGrade
- contentId
- score.possible
- grading.type
- grading.due
- grading.attemptsAllowed
- grading.scoringModel
- formula
- availability.available

**Since**: 3200.10.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
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
    method: "delete",
    path: "/learn/api/public/v2/courses/:courseId/gradebook/columns/:columnId",
    alias: "deleteLearnapipublicv2coursesCourseIdgradebookcolumnsColumnId",
    description: `Delete a specific grade column. The entitlement &quot;course.gradebook.MODIFY&quot; is needed.

**Since**: 3200.10.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "onlyIfEmpty",
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
        description: `Insufficient Permission to delete the requested resource`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Requested resource could not be found`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Conflict in deleting this grade column due to associated grades`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "patch",
    path: "/learn/api/public/v2/courses/:courseId/gradebook/columns/:columnId",
    alias: "patchLearnapipublicv2coursesCourseIdgradebookcolumnsColumnId",
    description: `Update a manual grade column. The entitlement &quot;course.gradebook.MODIFY&quot; is needed.

**Since**: 3200.10.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
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
    path: "/learn/api/public/v2/courses/:courseId/gradebook/columns/:columnId/attempts",
    alias: "getLearnapipublicv2coursesCourseIdgradebookcolumnsColumnIdattempts",
    description: `Returns a list of attempts associated with the specified grade column.

The &#x27;course.gradebook.MODIFY&#x27; entitlement is needed to view column attempts. Alternatively, if the &#x27;userId&#x27; query parameter is specified, and the user making the request matches the specified &#x27;userId&#x27;, then the user may view his/her own attempt.  When querying an anonymous grade column, if the release criteria has not yet been met, then the &#x27;userId&#x27; attribute will not be populated for the returned column attempts.  If the release criteria has not been met and the &#x27;userId&#x27; query parameter is specified, a 403 response is returned, unless the requesting user matches the specified &#x27;userId&#x27; value.

A subset of attempt properties are available to a student when requesting his or her own attempts:

- id
- userId
- groupAttemptId
- status
- displayGrade.scaleType
- displayGrade.score
- displayGrade.text
- groupOverride
- feedback
- studentComments
- studentSubmission
- exempt
- created

When this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student&#x27;s submission &amp; comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student&#x27;s submission &amp; comments are visible to the API Gateway User. &lt;/p&gt; If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.

If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.

**Since**: 3300.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
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
        name: "userId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "attemptStatuses",
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
        name: "attemptDate",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "attemptDateCompare",
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
    path: "/learn/api/public/v2/courses/:courseId/gradebook/columns/:columnId/attempts",
    alias:
      "postLearnapipublicv2coursesCourseIdgradebookcolumnsColumnIdattempts",
    description: `Create an Attempt on the specified Grade Column. Currently supports Classic and Ultra Course Assignments. Student attributes (studentSubmission &amp; studentComments) can only be specified by Student Users. Grader attributes (text, score, notes &amp; feedback, attemptDate) can only be specified by Grader Users. Graders must have the entitlement &quot;course.gradebook.MODIFY&quot; for the course.  Graders are allowed to create attempts that contain &quot;studentSubmission&quot; text on behalf of a student if the authenticated application for this request has the &quot;course.attempt.nonowner.SUBMIT&quot; entitlement and the attempt has a &quot;status&quot; of NeedsGrading. &lt;/p&gt; If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, then the caller must be in a secure browser in order to create the attempt.

**Since**: 3300.12.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "columnId",
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
      {
        status: 422,
        description: `Unprocessable Entity`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v2/courses/:courseId/gradebook/columns/:columnId/attempts/:attemptId",
    alias:
      "getLearnapipublicv2coursesCourseIdgradebookcolumnsColumnIdattemptsAttemptId",
    description: `Loads the grade column attempt for the specified id.

The &#x27;course.gradebook.MODIFY&#x27; entitlement is needed to view an attempt. Alternatively, if the user making the request is also the user associated with the attempt grade, then the user may view his/her own attempt.  When accessing an anonymous grade column attempt, if the release criteria has not yet been met, then the &#x27;userId&#x27; attribute will not be populated for the returned attempt.

A subset of attempt properties are available to a student when requesting his or her own attempt:

- id
- userId
- groupAttemptId
- status
- displayGrade.scaleType
- displayGrade.score
- displayGrade.text
- groupOverride
- feedback
- studentComments
- studentSubmission
- exempt
- created

When this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student&#x27;s submission &amp; comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student&#x27;s submission &amp; comments are visible to the API Gateway User. &lt;/p&gt; If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.

If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.

**Since**: 3300.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "attemptId",
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
    method: "patch",
    path: "/learn/api/public/v2/courses/:courseId/gradebook/columns/:columnId/attempts/:attemptId",
    alias:
      "patchLearnapipublicv2coursesCourseIdgradebookcolumnsColumnIdattemptsAttemptId",
    description: `Update an existing Attempt on a Grade Column. &lt;/p&gt; Students can only modify the studentSubmission, studentComments and status of their own attempt if the status is InProgress. The status can only be set to NeedsGrading.  Doing so is the equivalent of submitting the attempt. &lt;/p&gt; Instructors can modify all mutable fields but studentSubmission and studentComments as long as the status is not InProgress. Setting the status to Complete is the equivalent of posting a graded attempt.  The &quot;course.gradebook.MODIFY&quot; entitlement is required to update score, text, notes, feedback and set the status to Complete. &lt;/p&gt; If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, then the caller must be in a secure browser in order to create the attempt. Classic course support since 3500.2.0

**Since**: 3300.12.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "columnId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "attemptId",
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
        status: 422,
        description: `Unprocessable Entity`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v2/courses/:courseId/gradebook/columns/:columnId/users",
    alias: "getLearnapipublicv2coursesCourseIdgradebookcolumnsColumnIdusers",
    description: `Returns a list of grades associated with the specified grade column. By default, this operation does not include &#x27;ReadyToPost&#x27; grades when returning grade details for calculated grade columns. This can be changed by setting the query parameter &quot;includeUnpostedGrades&quot; to true. The columns considered as &#x27;ReadyToPost&#x27; are those which have a grade associated but have the status NEEDS_GRADING. By default, grade details for disabled memberships will not be included while returning. The query parameter &quot;includeDisabledMemberships&quot; has to be set to true to return grade details of disabled memberships.

Users with entitlement &#x27;course.gradebook.MODIFY&#x27; can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of &quot;403 - Forbidden.&quot;

Enrolled users without the &#x27;course.gradebook.MODIFY&#x27; entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status &quot;403 - Forbidden.&quot;.  A subset of grade properties are available to a student when requesting his or her own grades:

- userId
- columnId
- status
- displayGrade
- exempt
- feedback
- changeIndex

**Since**: 3300.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
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
        name: "changeIndex",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "includeUnpostedGrades",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "includeDisabledMemberships",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "firstRelevantDate",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "firstRelevantDateCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "lastRelevantDate",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "lastRelevantDateCompare",
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
      {
        status: 404,
        description: `Grade detail values have not yet been populated`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v2/courses/:courseId/gradebook/columns/:columnId/users/lastChanged",
    alias:
      "getLearnapipublicv2coursesCourseIdgradebookcolumnsColumnIduserslastChanged",
    description: `Loads the grade column grade with the maximum change index. This change index can be used to determine the relative order in which the grades were created and/or updated. This operation does not include &#x27;ReadyToPost&#x27; grades when determining the maximum change index grade.

Users with entitlement &#x27;course.gradebook.MODIFY&#x27; can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of &quot;403 - Forbidden.&quot;

Enrolled users without the &#x27;course.gradebook.MODIFY&#x27; entitlement may only view their own grade; such users cannot retrieve grades of other users. A request for the grade in a columns that has been hidden from students in the gradebook will return with a status &quot;403 - Forbidden.&quot;.

**Since**: 3300.4.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
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
        description: `Grade detail values have not yet been populated`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v2/courses/:courseId/gradebook/columns/:columnId/users/:userId",
    alias:
      "getLearnapipublicv2coursesCourseIdgradebookcolumnsColumnIdusersUserId",
    description: `Loads the grade column grade for a specific user.  If grade details have yet to be entered for the specified user, then no grade details will be included in the returned grade object.  This operation does not include &#x27;ReadyToPost&#x27; grades when returning grade details for calculated grade columns.

Users with entitlement &#x27;course.gradebook.MODIFY&#x27; can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of &quot;403 - Forbidden.&quot;

Enrolled users without the &#x27;course.gradebook.MODIFY&#x27; entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status &quot;403 - Forbidden.&quot;.  A subset of grade properties are available to a student when requesting his or her own grades:

- userId
- columnId
- status
- displayGrade
- exempt
- feedback
- changeIndex

**Since**: 3300.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
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
        description: `Grade detail values have not yet been populated`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "patch",
    path: "/learn/api/public/v2/courses/:courseId/gradebook/columns/:columnId/users/:userId",
    alias:
      "patchLearnapipublicv2coursesCourseIdgradebookcolumnsColumnIdusersUserId",
    description: `Update the grade column grade for a specific user, including the text grade, score, instructor notes and feedback, and exempt status.  When updating text grade or score, the resulting grade is always marked as &#x27;Posted&#x27;.  This end-point, currently, does not support marking the grade as &#x27;ReadyToPost&#x27;.  Grade overrides may be cleared by either specifying the &#x27;score&#x27; attribute as null, or the &#x27;text&#x27;; attribute as null, &#x27;&#x27;, or &#x27;-&#x27; in the body of the request. The entitlement &#x27;course.gradebook.MODIFY&#x27; is required to perform this operation.

**Since**: 3300.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "columnId",
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
        description: `Grade detail values have not yet been populated`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v2/courses/:courseId/gradebook/users/:userId",
    alias: "getLearnapipublicv2coursesCourseIdgradebookusersUserId",
    description: `Loads the course grades for a specific user.

Users with entitlement &quot;course.gradebook.MODIFY&quot; have read access to all the properties of the collection results.

Users without entitlement &quot;course.gradebook.MODIFY&quot; requesting grades for themselves (i.e., userId &#x3D; current user id) have read access to a restricted subset of properties of the collections result. These are the properties available to a student when requesting his or her own grades:

- userId
- columnId
- status
- text
- score
- exempt
- feedback

**Since**: 3300.0.0`,
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
        name: "firstRelevantDate",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "firstRelevantDateCompare",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "lastRelevantDate",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "lastRelevantDateCompare",
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
]);

export const Course_gradesApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
