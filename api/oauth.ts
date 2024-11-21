import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const endpoints = makeApi([
  {
    method: "get",
    path: "/learn/api/public/v1/oauth2/authorizationcode",
    alias: "getLearnapipublicv1oauth2authorizationcode",
    description: `Requests an OAuth 2 authorization code. Use of PKCE standard is optional, but highly recommended.

**Since**: 3200.7.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "redirect_uri",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "response_type",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "client_id",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "scope",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "state",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "code_challenge",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "code_challenge_method",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "one_time_session_token",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: "post",
    path: "/learn/api/public/v1/oauth2/token",
    alias: "postLearnapipublicv1oauth2token",
    description: `Requests an OAuth 2 access token.

**Since**: 2015.11.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "grant_type",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "code",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "redirect_uri",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "refresh_token",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "code_verifier",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Invalid access token request.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Invalid client credentials, or no access granted to this Learn server.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/learn/api/public/v1/oauth2/tokeninfo",
    alias: "getLearnapipublicv1oauth2tokeninfo",
    description: `Requests an OAuth 2 access token info.

**Since**: 3700.6.0`,
    requestFormat: "json",
    parameters: [
      {
        name: "access_token",
        type: "Query",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Invalid access token request.`,
        schema: z.void(),
      },
    ],
  },
]);

export const OauthApi = new Zodios("localhost:3000/", endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
