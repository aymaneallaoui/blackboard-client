import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/catalog/categories/:categoryType",
    alias: "getLearnapipublicv1catalogcategoriesCategoryType",
    description: `Returns a list of categories of the provided type (course or organization)

Entitlement system.course-categories.VIEW required

Users with entitlement &quot;system.course.categories.MODIFY&quot; for course categories, or &quot;system.org.categories.MODIFY&quot; for organization categories can view all fields and all categories.

Users with system.course-categories.VIEW but not the corresponding MODIFY entitlements have read access to all properties except:

- restricted
- institutionRoleIds
In addition, users without the corresponding MODIFY entitlement have access to a restricted category only if their institution role matches one of the roles in the institutionRoleIds list for that category.

**Since**: 3600.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryType",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "sort",
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
        name: "title",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "categoryId",
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
        name: "dataSourceId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "frontPage",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "available",
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
        description: `The request specified invalid or unsupported sort parameters`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `The user does not have entitlements to view categories of the provided type`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/learn/api/public/v1/catalog/categories/:categoryType",
    alias: "postLearnapipublicv1catalogcategoriesCategoryType",
    description: `Creates a new category of the provided type as defined in the request body

Entitlement system.course.categories.MODIFY required to create course categories Entitlement system.org.categories.MODIFY required to create organization categories

**Since**: 3600.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryType",
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
        description: `The user does not have entitlements to create categories of the provided type`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `The request specified data which is in conflict with existing data`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/catalog/categories/:categoryType/:categoryId",
    alias: "getLearnapipublicv1catalogcategoriesCategoryTypeCategoryId",
    description: `Returns the category corresponding the provided type (course or organization) and ID

Entitlement system.course-categories.VIEW required

Users with entitlement &quot;system.course.categories.MODIFY&quot; for course categories, or &quot;system.org.categories.MODIFY&quot; for organization categories can view all fields and all categories.

Users with system.course-categories.VIEW but not the corresponding MODIFY entitlements have read access to all properties except:

- restricted
- institutionRoleIds
In addition, users without the corresponding MODIFY entitlement have access to a restricted category only if their institution role matches one of the roles in the institutionRoleIds list for that category.

**Since**: 3600.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryType",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "categoryId",
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
        description: `The user does not have entitlements to delete categories of the provided type`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `No such category exists`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/learn/api/public/v1/catalog/categories/:categoryType/:categoryId",
    alias: "deleteLearnapipublicv1catalogcategoriesCategoryTypeCategoryId",
    description: `Deletes the category corresponding to the provided type and id

Entitlement system.course.categories.MODIFY required to delete a course category Entitlement system.org.categories.MODIFY required to delete an organization category

**Since**: 3600.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryType",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "categoryId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `The user does not have entitlements to delete categories of the provided type`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `No such category exists`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "patch",
    path: "/learn/api/public/v1/catalog/categories/:categoryType/:categoryId",
    alias: "patchLearnapipublicv1catalogcategoriesCategoryTypeCategoryId",
    description: `Updates the category corresponding to the provided type and id.

Entitlement system.course.categories.MODIFY required to modify course categories Entitlement system.org.categories.MODIFY required to modify organization categories

**Since**: 3600.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryType",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "categoryId",
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
        description: `The user does not have entitlements to create categories of the provided type`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/catalog/categories/:categoryType/:categoryId/courses",
    alias: "getLearnapipublicv1catalogcategoriesCategoryTypeCategoryIdcourses",
    description: `Get courses associated with the provided category. Entitlement system.course-categories.VIEW required

**Since**: 3600.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryType",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "categoryId",
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
  {
    method: "put",
    path: "/learn/api/public/v1/catalog/categories/:categoryType/:categoryId/courses/:courseId",
    alias:
      "putLearnapipublicv1catalogcategoriesCategoryTypeCategoryIdcoursesCourseId",
    description: `Creates a category/course association. The course defined by courseId must match the categoryType.

The &#x27;admin.course.categorize.MODIFY&#x27; entitlement is needed for course associations The &#x27;admin.org.categorize.MODIFY&#x27; entitlement is needed for organization associations

**Since**: 3600.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryType",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "categoryId",
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
    path: "/learn/api/public/v1/catalog/categories/:categoryType/:categoryId/courses/:courseId",
    alias:
      "deleteLearnapipublicv1catalogcategoriesCategoryTypeCategoryIdcoursesCourseId",
    description: `Deletes a category/course association

The &#x27;admin.course.categorize.MODIFY&#x27; entitlement is needed for course associations The &#x27;admin.org.categorize.MODIFY&#x27; entitlement is needed for organization associations

**Since**: 3600.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryType",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "categoryId",
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
    method: "get",
    path: "/learn/api/public/v1/catalog/categories/:categoryType/:parentId/children",
    alias: "getLearnapipublicv1catalogcategoriesCategoryTypeParentIdchildren",
    description: `Returns a list of categories which are children of the category corresponding to the provided type (course or organization) and Id

Entitlement system.course-categories.VIEW required

Users with entitlement &quot;system.course.categories.MODIFY&quot; for course categories, or &quot;system.org.categories.MODIFY&quot; for organization categories can view all fields and all categories.

Users with system.course-categories.VIEW but not the corresponding MODIFY entitlements have read access to all properties except:

- restricted
- institutionRoleIds
In addition, users without the corresponding MODIFY entitlement have access to a restricted category only if their institution role matches one of the roles in the institutionRoleIds list for that category.

**Since**: 3600.0.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryType",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "parentId",
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
        name: "categoryId",
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
        name: "dataSourceId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "frontPage",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "available",
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
        description: `The user does not have entitlements to view categories of the provided type`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/courses/:courseId/categories",
    alias: "getLearnapipublicv1coursesCourseIdcategories",
    description: `Get categories associated with the provided course. Entitlement system.course-categories.VIEW required

**Since**: 3600.0.0`,
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

export const Course_categoriesApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
