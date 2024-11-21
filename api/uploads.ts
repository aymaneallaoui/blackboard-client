import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "post",
    path: "/learn/api/public/v1/uploads",
    alias: "postLearnapipublicv1uploads",
    description: `Upload a file to temporary storage. The request is a multipart/form-data POST following RFC 1867. (https://www.ietf.org/rfc/rfc1867.txt)

The uploaded file will be scanned for potential security threats by the system&#x27;s XSS filters. If the file is deemed as unsafe, the request will be rejected and an HTTP Status of 422 is returned.

Returns an ID of the file reference, so it can be used for processing by a different service.

Example Request: &lt;pre&gt;  curl -X POST -H &#x27;Authorization: Bearer your_token&#x27; -F &#x27;file&#x3D;@/path/to/your/file&#x27; https://YOUR_LEARN_INSTANCE/learn/api/public/v1/uploads  &lt;/pre&gt;

**Since**: 3100.12.0`,
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
        status: 422,
        description: `File is potentially unsafe as determined from an XSS scan`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/uploads/settings",
    alias: "getLearnapipublicv1uploadssettings",
    description: `Retrieve all settings of upload file service

**Since**: 3900.41.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "fields",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
]);

export const UploadsApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
