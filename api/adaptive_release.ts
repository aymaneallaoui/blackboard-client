import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules",
    alias:
      "getLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserules",
    description: `Get all the adaptive release rules associated with the given content in the specified course. Users with all the following entitlements may access this resource:

- course.content.VIEW
- course.adaptiverelease.VIEW
The requesting user must also be enrolled in the course, or have the system.course.MODIFY entitlement.

**Since**: 3900.23.0`,
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
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules",
    alias:
      "postLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserules",
    description: `Create a new adaptive release rule with the given title. Users with all the following entitlements may access this resource:

- course.content.availability.MODIFY
- course.adaptiverelease.CREATE
The requesting user must also be enrolled in the course, or have the system.course.MODIFY entitlement.

**Since**: 3900.23.0`,
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
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Cannot create multiple instances of the specified resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId",
    alias:
      "getLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleId",
    description: `Get the adaptive release rule associated with the given content in the specified course corresponding to the rule id. Users with all the following entitlements may access this resource:

- course.content.VIEW
- course.adaptiverelease.VIEW
The requesting user must also be enrolled in the course, or have the system.course.MODIFY entitlement.

**Since**: 3900.23.0`,
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
        name: "ruleId",
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
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId",
    alias:
      "deleteLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleId",
    description: `Delete an adaptive release rule. Users with all the following entitlements may access this resource:

- course.content.availability.MODIFY
- course.adaptiverelease.DELETE

**Since**: 3900.28.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "contentId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "ruleId",
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
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "patch",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId",
    alias:
      "patchLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleId",
    description: `Updates an adaptive release rule. Users with all the following entitlements may update this resource:

- course.content.availability.MODIFY
- course.adaptiverelease.MODIFY
The requesting user must also be enrolled in the course, or have the system.course.MODIFY entitlement in order to update adaptive release rules.

**Since**: 3900.28.0`,
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
        name: "ruleId",
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
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria",
    alias:
      "getLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleIdcriteria",
    description: `Get the criteria list from the adaptive release rule associated with the given content in the specified course corresponding to the rule id Users with all of the following entitlements may access this resource:

- course.content.VIEW
- course.adaptiverelease.VIEW
Note: ACL criteria is not fully supported by this API.

**Since**: 3900.23.0`,
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
        name: "ruleId",
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
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria",
    alias:
      "postLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleIdcriteria",
    description: `Create a new adaptive release rule criteria. Users with the following entitlements may create resources. For each criteria type the corresponding entitlement is checked:

- course.adaptiverelease.CREATE
- course.content.availability.MODIFY
- course.adaptiverelease.acl.CREATE
- course.adaptiverelease.dates.CREATE
- course.adaptiverelease.performance.CREATE
Note: ACL criteria is not fully supported by this API.

**Since**: 3900.23.0`,
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
        name: "ruleId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Cannot create multiple instances of the specified resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId",
    alias:
      "getLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleIdcriteriaCriterionId",
    description: `Get a single criterion by the specified Id, from the adaptive release rule associated to the given content Users with all of the following entitlements may access this resource:

- course.content.VIEW
- course.adaptiverelease.VIEW
Note: ACL criteria is not fully supported by this API.

**Since**: 3900.23.0`,
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
        name: "ruleId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "criterionId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId",
    alias:
      "deleteLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleIdcriteriaCriterionId",
    description: `Delete a single criterion by the specified Id, from the adaptive release rule associated to the given content. Users with the following entitlements may delete the resource:

- system.course.MODIFY
- course.adaptiverelease.DELETE
- course.content.availability.MODIFY
User may need one of the following entitlements depending on the criterion being deleted:

- course.adaptiverelease.acl.DELETE
- course.adaptiverelease.dates.DELETE
- course.adaptiverelease.performance.DELETE

**Since**: 3900.28.0`,
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
        name: "ruleId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "criterionId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "patch",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId",
    alias:
      "patchLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleIdcriteriaCriterionId",
    description: `Update a single criterion by the specified Id, from the adaptive release rule associated to the given content. Users with the following entitlements may update the resource:

- system.course.MODIFY
- course.adaptiverelease.MODIFY
- course.content.availability.MODIFY
User may need one of the following entitlements depending on the criterion being updated:

- course.adaptiverelease.acl.MODIFY
- course.adaptiverelease.dates.MODIFY
- course.adaptiverelease.performance.MODIFY
For updating criteria of type blackboard.data.content.avlrule.GradeCompletedCriteria, user may need any one of the following entitlements:

- course.gradebook-metadata.VIEW
- course.gradebook.MODIFY
DateRange and DateRange criteria will behave differently if any of the range defining values are set to null, explicitly. For GradeRange criteria:

- If maxScore is set to null, it will be understood as &#x27;minScore or higher&#x27;.
- minScore cannot be set to null, regardless of maxScore&#x27;s value.
For DateRange criteria:

- If startDate is set to null, it will be understood as &#x27;before endDate&#x27;.
- If endDate is set to null, it will be understood as &#x27;after startDate&#x27;.
- At least one date must be valid.

**Since**: 3900.28.0`,
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
        name: "ruleId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "criterionId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Cannot create multiple instances of the specified resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId/groups",
    alias:
      "getLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleIdcriteriaCriterionIdgroups",
    description: `Retrieve the list of groups included in the specified Membership criterion. Users with all the following entitlements may access this resource:

- course.content.VIEW
- course.adaptiverelease.VIEW
The requesting user must also be enroled in the course, or have the system.course.MODIFY entitlement.

**Since**: 3900.32.0`,
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
        name: "ruleId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "criterionId",
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
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId/groups",
    alias:
      "putLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleIdcriteriaCriterionIdgroups",
    description: `Sets the list of group predicates associated with this criterion. The list must not exceed a size of 100. Groups not included in this list will be removed. Groups which are in the list and already associated will remain unchanged. A new association will be created for Groups which are in this list but not associated with the criterion. Users with all the following entitlements may access this resource:

- course.adaptiverelease.acl.modify
Note: The specified criterion must be of type Memberships.

**Since**: 3900.34.0`,
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
        name: "ruleId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "criterionId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId/groups/:groupId",
    alias:
      "putLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleIdcriteriaCriterionIdgroupsGroupId",
    description: `Create an association between the specified group and Membership criterion. A single criterion can hold up to a maximum of 100 group associations. Users with all the following entitlements may access this resource:

- course.adaptiverelease.acl.modify
Note: The specified criterion must be of type Memberships.

**Since**: 3900.32.0`,
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
        name: "ruleId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "criterionId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "groupId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `The group is already associated to the criterion`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId/groups/:groupId",
    alias:
      "deleteLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleIdcriteriaCriterionIdgroupsGroupId",
    description: `Delete the association between the specified group and Membership criterion. Users with all the following entitlements may access this resource:

- course.adaptiverelease.acl.modify
Note: The specified criterion must be of type Memberships.

**Since**: 3900.32.0`,
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
        name: "ruleId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "criterionId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "groupId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId/users",
    alias:
      "getLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleIdcriteriaCriterionIdusers",
    description: `Retrieve a list of users who are included in the specified Membership criterion. Users with all the following entitlements may access this resource:

- course.content.VIEW
- course.adaptiverelease.VIEW
The requesting user must also be enroled in the course, or have the system.course.MODIFY entitlement.

**Since**: 3900.32.0`,
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
        name: "ruleId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "criterionId",
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
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId/users",
    alias:
      "putLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleIdcriteriaCriterionIdusers",
    description: `Sets the list of user predicates associated with the specified criterion. Users not included in this list will be removed. Users which are in this list and associated with the criterion will remain unchanged. Users which are in this list but not associated with the criterion will be added. Users with all the following entitlements may use this endpoint:

- course.adaptiverelease.acl.modify
The specified users must be enroled in the course with a role that is neither &quot;Guest&quot; nor treated as &quot;Instructor&quot;. The requesting user must also be enroled in the course, or have the system.course.MODIFY entitlement.

**Since**: 3900.34.0`,
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
        name: "ruleId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "criterionId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Cannot create multiple instances of the specified resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId/users/:userId",
    alias:
      "putLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleIdcriteriaCriterionIdusersUserId",
    description: `Create an association between the specified user and Membership criterion. A single criterion can hold up to a maximum of 100 user associations. Users with all the following entitlements may access this resource:

- course.adaptiverelease.acl.modify
The specified user must be enroled in the course with a role that is neither &quot;Guest&quot; nor treated as &quot;Instructor&quot;. The requesting user must also be enroled in the course, or have the system.course.MODIFY entitlement.

**Since**: 3900.32.0`,
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
        name: "ruleId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "criterionId",
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
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Cannot create multiple instances of the specified resource`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/courses/:courseId/contents/:contentId/adaptiveRelease/rules/:ruleId/criteria/:criterionId/users/:userId",
    alias:
      "deleteLearnapipublicv1coursesCourseIdcontentsContentIdadaptiveReleaserulesRuleIdcriteriaCriterionIdusersUserId",
    description: `Delete association between user and Membership criterion. The following entitlements are required

- course.adaptiverelease.acl.modify

**Since**: 3900.32.0`,
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
        name: "ruleId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "criterionId",
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
        description: `The supplied values are not correct`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The current user is not entitled to perform this operation`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `The specified parameter is not associated to any existing resource`,
        schema: z.void(),
      },
    ],
  },
]);

export const Adaptive_releaseApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
