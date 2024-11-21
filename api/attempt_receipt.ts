import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/attemptReceipts/:attemptReceiptId",
    alias: "getLearnapipublicv1attemptReceiptsAttemptReceiptId",
    description: `Get the attempt receipt associated with the @param attemptReceiptIdParam

Users with all the following entitlements may access this resource:

- GradebookEntitlement.ViewAttempts

**Since**: 3900.37.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "attemptReceiptId",
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
]);

export const Attempt_receiptApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
