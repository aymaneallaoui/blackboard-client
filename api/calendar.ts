import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/calendars",
    alias: "getLearnapipublicv1calendars",
    description: `Get the list of calendars. This endpoint will return all calendars viewable by the user. All users can request a list of calendars viewable to them.

**Since**: 3400.9.0`,
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
        name: "fields",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "get",
    path: "/learn/api/public/v1/calendars/items",
    alias: "getLearnapipublicv1calendarsitems",
    description: `Get the list of calendar items. This endpoint will return all types of CalendarItems viewable by the user unless a specific &lt;code&gt;type&lt;/code&gt; is specified as a query parameter.

If &lt;code&gt;since&lt;/code&gt; and &lt;code&gt;since&lt;/code&gt; are not provided this endpoint will default to the upcoming two week timeframe from now. &lt;/p&gt;

If only &lt;code&gt;since&lt;/code&gt; is provided this endpoint will default the &lt;code&gt;until&lt;/code&gt; parameter two weeks after &lt;code&gt;since&lt;/code&gt;. &lt;/p&gt;

If only &lt;code&gt;until&lt;/code&gt; is provided this endpoint will default the &lt;code&gt;since&lt;/code&gt; parameter two prior to &lt;code&gt;until&lt;/code&gt;. &lt;/p&gt;

Maximum timespan between &lt;code&gt;since&lt;/code&gt; and &lt;code&gt;until&lt;/code&gt; is 16 weeks. &lt;/p&gt;

CalendarItems of type &lt;code&gt;GradebookColumn&lt;/code&gt; are a representation of a specific gradable item and therefore read-only. Modifications to GradebookColumn items performed via the Gradebook Column endpoints will be reflected in the CalendarItems endpoints. &lt;/p&gt;

The CalendarItem &lt;code&gt;id&lt;/code&gt; can be used as the &lt;code&gt;columnId&lt;/code&gt; on the Gradebook Column endpoints found here: &lt;code&gt;/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}&lt;/code&gt;. &lt;/p&gt; Example requests:

- &lt;code&gt;GET ../items?since&#x3D;2018-01-01T00:00:00.000Z&amp;until2018-02-01T00:00:00.000Z // all calendar items for a given timeframe&lt;/code&gt;
- &lt;code&gt;GET ../items?since&#x3D;2018-01-01T00:00:00.000Z&amp;until2018-02-01T00:00:00.000Z&amp;courseId&#x3D;_123_1 // all calendar items for a given course (including Course, OfficeHours, GradebookColumn types)&lt;/code&gt;
- &lt;code&gt;GET ../items?since&#x3D;2018-01-01T00:00:00.000Z&amp;until2018-02-01T00:00:00.000Z&amp;courseId&#x3D;_123_1&amp;type&#x3D;GradebookColumn // all GradebookColumn items for a course&lt;/code&gt;
- &lt;code&gt;GET ../items?since&#x3D;2018-01-01T00:00:00.000Z&amp;until2018-02-01T00:00:00.000Z&amp;courseId&#x3D;_123_1&amp;type&#x3D;OfficeHours // all OfficeHours for a course&lt;/code&gt;
- &lt;code&gt;GET ../items?since&#x3D;2018-01-01T00:00:00.000Z&amp;until2018-02-01T00:00:00.000Z&amp;type&#x3D;GradebookColumn // all gradebook columns due within the given timeframe&lt;/code&gt;
- &lt;code&gt;GET ../items?since&#x3D;2018-01-01T00:00:00.000Z&amp;until2018-02-01T00:00:00.000Z&amp;type&#x3D;OfficeHours // all OfficeHours available to current user for a given timeframe&lt;/code&gt;
The following must be true in order to view the following calendar item types:

- Institution
-

- All users can view Institution calendar items

- Personal
-

- Any user may view their own calendar items, but not other user&#x27;s calendar items

- Course
-

- The user must have the &#x27;course.calendar.VIEW&#x27; entitlement
- The course calendar must be enabled for the course the calendar item is associated with

- GradebookColumn
-

- The user must be enrolled in the course or have either the    *       &#x60;course.gradebook-metadata.VIEW&#x60; or &#x60;course.gradebook.MODIFY&#x60; entitlement
- The user must have the &#x27;course.calendar.VIEW&#x27; entitlement
- The course calendar must be enabled for the course the GradebookColumn is associated with

- OfficeHours
-

- If the OfficeHours are created for a course calendar (calendarId &#x3D; a course id) the user must be enrolled in the course
- If the OfficeHours are created for a all courses (calendarId &#x3D; PERSONAL) the user must be enrolled in any course that the user owning the OfficeHours is also enrolled in
- In either case above the course calendar must be enabled

&lt;/p&gt;

**Since**: 3400.9.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "courseId",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "type",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "since",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "until",
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
    path: "/learn/api/public/v1/calendars/items",
    alias: "postLearnapipublicv1calendarsitems",
    description: `

Create a calendar item. Calendar items may be single or recurring. &lt;/p&gt;

CalendarItems of type &lt;code&gt;OfficeHours&lt;/code&gt; will be assigned to the current user. &lt;/p&gt; The following must be true in order to create a calendar item:

- Institution
-

- The user must have the &#x27;system.calendar-item.EXECUTE&#x27; entitlement

- Personal
-

- Any user may create their own calendar items

- Course
-

- The user may be enrolled or unenrolled in the course
- The user must have the &#x27;course.calendar-entry.CREATE&#x27; entitlement
- The course calendar must be enabled for the specified course

- GradebookColumn
-

- GradebookColumns must be created using the Gradebook API endpoint: &lt;code&gt;POST /learn/api/public/v2/courses/{courseId}/gradebook/columns&lt;/code&gt;

- OfficeHours
-

- The user must have the &#x27;course.calendar-entry.CREATE&#x27; entitlement
- If calendarId &#x3D; a course id the user may be enrolled or unenrolled in the course but should have the &#x27;course.calendar-entry.CREATE&#x27; entitlement and the calendar must be enabled to create event
- Note: To create for all enrolled courses calendarId must be set to PERSONAL

If the course calendar includes LTI deep link definition  it will be included in the calendar item. &lt;/p&gt;

**Since**: 3400.9.0`,
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
    path: "/learn/api/public/v1/calendars/items/:calendarItemType/:calendarItemId",
    alias: "getLearnapipublicv1calendarsitemsCalendarItemTypeCalendarItemId",
    description: `

Get a course calendar item. &lt;/p&gt;

CalendarItems of type &lt;code&gt;GradebookColumn&lt;/code&gt; are a representation of a specific gradable item and therefore read-only. Modifications to GradebookColumn items performed via the Gradebook Column endpoints will be reflected in the CalendarItems endpoints. &lt;/p&gt;

The CalendarItem &lt;code&gt;id&lt;/code&gt; can be used as the &lt;code&gt;columnId&lt;/code&gt; on the Gradebook Column endpoints found here: &lt;code&gt;/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}&lt;/code&gt;. &lt;/p&gt; The following must be true in order to view the following calendar items types:

- Institution
-

- All users can view Institution calendar items

- Personal
-

- Any user may view their own calendar items, but not other user&#x27;s calendar items

- Course
-

- The user must have the &#x27;course.calendar.VIEW&#x27; entitlement
- The course calendar must be enabled for the course the calendar item is associated with

- GradebookColumn
-

- The user must be enrolled in the course OR they must have either the       &#x60;course.gradebook-metadata.VIEW&#x60; or &#x60;course.gradebook.MODIFY&#x60; entitlement
- The user must have the &#x27;course.calendar.VIEW&#x27; entitlement
- The course calendar must be enabled for the course the GradebookColumn is associated with

- OfficeHours
-

- If the OfficeHours are created for a course calendar (calendarId &#x3D; a course id) the user must be enrolled in the course
- If the OfficeHours are created for a all courses (calendarId &#x3D; PERSONAL) the user must be enrolled in any course that the user owning the OfficeHours is also enrolled in
- In either case above the course calendar must be enabled

**Since**: 3400.9.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "calendarItemType",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "calendarItemId",
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
    method: "delete",
    path: "/learn/api/public/v1/calendars/items/:calendarItemType/:calendarItemId",
    alias: "deleteLearnapipublicv1calendarsitemsCalendarItemTypeCalendarItemId",
    description: `

Delete a calendar item or series. &lt;/p&gt; The following must be true in order to delete a calendar item:

- Institution
-

- The user must have the &#x27;system.calendar-item.EXECUTE&#x27; entitlement

- Personal
-

- Any user may delete their own calendar items

- Course
-

- The user may be enrolled or unenrolled in the course
- The user must have the &#x27;course.calendar.VIEW&#x27; entitlement
- The user must have the &#x27;course.calendar-entry.DELETE&#x27; entitlement
- The course calendar must be enabled for the specified course

- GradebookColumn
-

- GradebookColumns must be deleted using the Gradebook API endpoint: &lt;code&gt;DELETE /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}&lt;/code&gt;

- OfficeHours
-

- The user must have the &#x27;course.calendar-entry.MODIFY&#x27; entitlement
- The user must own the calendarItem
- The calendar must be enabled if the calendarItem is associated with a course calendar.

**Since**: 3400.9.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "calendarItemType",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "calendarItemId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "deleteSeries",
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
    path: "/learn/api/public/v1/calendars/items/:calendarItemType/:calendarItemId",
    alias: "patchLearnapipublicv1calendarsitemsCalendarItemTypeCalendarItemId",
    description: `

Update a calendar item or series. &lt;/p&gt;

When updating the series the existing CalendarItems will be removed and a new set of CalendarItems will be created. This is the same behavior as experienced via the UI. &lt;/p&gt; The following must be true in order to update a calendar item:

- Institution
-

- The user must have the &#x27;system.calendar-item.EXECUTE&#x27; entitlement

- Personal
-

- Any user may update their own calendar items

- Course
-

- The user may be enrolled or unenrolled in the course
- The user must have the &#x27;course.calendar-entry.MODIFY&#x27; entitlement
- The user must have the &#x27;course.calendar.VIEW&#x27; entitlement
- The course calendar must be enabled for the specified course

- GradebookColumn
-

- GradebookColumns must be updated using the Gradebook API endpoint: &lt;code&gt;PATCH /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}&lt;/code&gt;

- OfficeHours
-

- The user must have the &#x27;course.calendar-entry.MODIFY&#x27; entitlement
- If calendarId &#x3D; a course id the user may be enrolled or unenrolled in the course but should have the &#x27;course.calendar-entry.MODIFY&#x27; entitlement  and the calendar must be enabled

If the course calendar includes LTI deep link definition  it will be updated in the calendar item.

**Since**: 3400.9.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "calendarItemType",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "calendarItemId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "updateSeries",
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

export const CalendarApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
