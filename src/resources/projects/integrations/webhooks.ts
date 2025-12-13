// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AppsAPI from '../apps';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:integrations:read_write</code>.
   *
   * @example
   * ```ts
   * const webhookIntegration =
   *   await client.projects.integrations.webhooks.create(
   *     'proj1ab2c3d4',
   *     {
   *       name: 'Customer updates webhook',
   *       url: 'https://hooks.example.com/revenuecat',
   *     },
   *   );
   * ```
   */
  create(
    projectID: string,
    body: WebhookCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookIntegration> {
    return this._client.post(path`/projects/${projectID}/integrations/webhooks`, { body, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:integrations:read</code>.
   *
   * @example
   * ```ts
   * const webhookIntegration =
   *   await client.projects.integrations.webhooks.retrieve(
   *     'wh_1234567890abcdef',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  retrieve(
    webhookIntegrationID: string,
    params: WebhookRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<WebhookIntegration> {
    const { project_id } = params;
    return this._client.get(
      path`/projects/${project_id}/integrations/webhooks/${webhookIntegrationID}`,
      options,
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:integrations:read_write</code>.
   *
   * @example
   * ```ts
   * const webhookIntegration =
   *   await client.projects.integrations.webhooks.update(
   *     'wh_1234567890abcdef',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  update(
    webhookIntegrationID: string,
    params: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookIntegration> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/integrations/webhooks/${webhookIntegrationID}`, {
      body,
      ...options,
    });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:integrations:read</code>.
   *
   * @example
   * ```ts
   * const webhooks =
   *   await client.projects.integrations.webhooks.list(
   *     'proj1ab2c3d4',
   *   );
   * ```
   */
  list(
    projectID: string,
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListResponse> {
    return this._client.get(path`/projects/${projectID}/integrations/webhooks`, { query, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:integrations:read_write</code>.
   *
   * @example
   * ```ts
   * const deletedObject =
   *   await client.projects.integrations.webhooks.delete(
   *     'wh_1234567890abcdef',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  delete(
    webhookIntegrationID: string,
    params: WebhookDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AppsAPI.DeletedObject> {
    const { project_id } = params;
    return this._client.delete(
      path`/projects/${project_id}/integrations/webhooks/${webhookIntegrationID}`,
      options,
    );
  }
}

/**
 * The type of event that triggers the webhook
 */
export type WebhookEventType =
  | 'initial_purchase'
  | 'renewal'
  | 'product_change'
  | 'cancellation'
  | 'billing_issue'
  | 'non_renewing_purchase'
  | 'uncancellation'
  | 'transfer'
  | 'subscription_paused'
  | 'expiration'
  | 'subscription_extended'
  | 'invoice_issuance'
  | 'temporary_entitlement_grant'
  | 'refund_reversed'
  | 'virtual_currency_transaction';

export interface WebhookIntegration {
  /**
   * The ID of the webhook integration
   */
  id: string;

  /**
   * The ID of the app the webhook integration is scoped to. If not provided, the
   * webhook integration will be scoped to all apps in the project.
   */
  app_id: string | null;

  /**
   * The timestamp in ms since epoch when the webhook integration was created
   */
  created_at: number;

  /**
   * The environment the webhook integration is configured for. Only events for the
   * selected environment will be sent.
   */
  environment: 'production' | 'sandbox' | null;

  /**
   * The display name of the webhook integration
   */
  name: string;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'webhook_integration';

  /**
   * The ID of the project the webhook integration belongs to
   */
  project_id: string;

  /**
   * The URL RevenueCat will send webhook notifications to
   */
  url: string;

  /**
   * Event types that will trigger the webhook. Only events for the selected event
   * types will be sent.
   */
  event_types?: Array<string> | null;
}

export interface WebhookListResponse {
  /**
   * Webhook integrations configured for the project.
   */
  items: Array<WebhookIntegration>;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'list';

  /**
   * The URL where this list can be accessed.
   */
  url: string;

  /**
   * URL to access the next page of webhook integrations. If not present / null,
   * there is no next page
   */
  next_page?: string | null;
}

export interface WebhookCreateParams {
  /**
   * The display name of the webhook integration
   */
  name: string;

  /**
   * The URL RevenueCat will send webhook notifications to
   */
  url: string;

  /**
   * The ID of the app the webhook integration is scoped to
   */
  app_id?: string | null;

  /**
   * Optional authorization header that will be sent with webhook notifications
   */
  authorization_header?: string | null;

  /**
   * The environment the webhook integration is configured for
   */
  environment?: 'production' | 'sandbox' | null;

  /**
   * Event types that will trigger the webhook
   */
  event_types?: Array<WebhookEventType> | null;
}

export interface WebhookRetrieveParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export interface WebhookUpdateParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: The ID of the app the webhook integration is scoped to
   */
  app_id?: string | null;

  /**
   * Body param: Optional authorization header that will be sent with webhook
   * notifications
   */
  authorization_header?: string | null;

  /**
   * Body param: The environment the webhook integration is configured for
   */
  environment?: 'production' | 'sandbox' | null;

  /**
   * Body param: Event types that will trigger the webhook
   */
  event_types?: Array<WebhookEventType> | null;

  /**
   * Body param: The display name of the webhook integration
   */
  name?: string;

  /**
   * Body param: The URL RevenueCat will send webhook notifications to
   */
  url?: string;
}

export interface WebhookListParams {
  limit?: number;

  starting_after?: string;
}

export interface WebhookDeleteParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export declare namespace Webhooks {
  export {
    type WebhookEventType as WebhookEventType,
    type WebhookIntegration as WebhookIntegration,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookRetrieveParams as WebhookRetrieveParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
  };
}
