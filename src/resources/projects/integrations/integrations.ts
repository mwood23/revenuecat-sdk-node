// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WebhooksAPI from './webhooks';
import {
  WebhookCreateParams,
  WebhookDeleteParams,
  WebhookEventType,
  WebhookIntegration,
  WebhookListParams,
  WebhookListResponse,
  WebhookRetrieveParams,
  WebhookUpdateParams,
  Webhooks,
} from './webhooks';

export class Integrations extends APIResource {
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

Integrations.Webhooks = Webhooks;

export declare namespace Integrations {
  export {
    Webhooks as Webhooks,
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
