// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomersAPI from './customers';
import * as AppsAPI from '../apps';
import * as ActionsAPI from './actions';
import {
  ActionAssignOfferingParams,
  ActionGrantEntitlementParams,
  ActionRevokeGrantedEntitlementParams,
  ActionTransferParams,
  ActionTransferResponse,
  Actions,
} from './actions';
import * as AttributesAPI from './attributes';
import {
  AttributeCreateParams,
  AttributeListParams,
  Attributes as AttributesAPIAttributes,
  ListCustomerAttributes,
} from './attributes';
import * as InvoicesAPI from './invoices';
import { InvoiceListParams, InvoiceListResponse, InvoiceRetrieveFileParams, Invoices } from './invoices';
import * as VirtualCurrenciesAPI from './virtual-currencies';
import {
  ListVirtualCurrenciesBalances,
  VirtualCurrencies,
  VirtualCurrencyListParams,
  VirtualCurrencyTransactionsParams,
  VirtualCurrencyUpdateBalanceParams,
} from './virtual-currencies';
import * as PurchasesAPI from '../purchases/purchases';
import * as SubscriptionsAPI from '../subscriptions/subscriptions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Customers extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  virtualCurrencies: VirtualCurrenciesAPI.VirtualCurrencies = new VirtualCurrenciesAPI.VirtualCurrencies(
    this._client,
  );
  attributes: AttributesAPI.Attributes = new AttributesAPI.Attributes(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:customers:read_write</code>.
   *
   * @example
   * ```ts
   * const customer = await client.projects.customers.create(
   *   'proj1ab2c3d4',
   *   { id: '19b8de26-77c1-49f1-aa18-019a391603e2' },
   * );
   * ```
   */
  create(projectID: string, body: CustomerCreateParams, options?: RequestOptions): APIPromise<Customer> {
    return this._client.post(path`/projects/${projectID}/customers`, { body, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:customers:read</code>.
   *
   * @example
   * ```ts
   * const customer = await client.projects.customers.retrieve(
   *   '19b8de26-77c1-49f1-aa18-019a391603e2',
   *   { project_id: 'proj1ab2c3d4' },
   * );
   * ```
   */
  retrieve(
    customerID: string,
    params: CustomerRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Customer> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/customers/${customerID}`, { query, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:customers:read</code>.
   *
   * @example
   * ```ts
   * const customers = await client.projects.customers.list(
   *   'proj1ab2c3d4',
   * );
   * ```
   */
  list(
    projectID: string,
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerListResponse> {
    return this._client.get(path`/projects/${projectID}/customers`, { query, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:customers:read_write</code>.
   *
   * @example
   * ```ts
   * const deletedObject =
   *   await client.projects.customers.delete(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  delete(
    customerID: string,
    params: CustomerDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AppsAPI.DeletedObject> {
    const { project_id } = params;
    return this._client.delete(path`/projects/${project_id}/customers/${customerID}`, options);
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:customers:read</code>.
   *
   * @example
   * ```ts
   * const listCustomerActiveEntitlements =
   *   await client.projects.customers.retrieveActiveEntitlements(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  retrieveActiveEntitlements(
    customerID: string,
    params: CustomerRetrieveActiveEntitlementsParams,
    options?: RequestOptions,
  ): APIPromise<ListCustomerActiveEntitlements> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/customers/${customerID}/active_entitlements`, {
      query,
      ...options,
    });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:customers:read</code>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.projects.customers.retrieveAliases(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  retrieveAliases(
    customerID: string,
    params: CustomerRetrieveAliasesParams,
    options?: RequestOptions,
  ): APIPromise<CustomerRetrieveAliasesResponse> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/customers/${customerID}/aliases`, {
      query,
      ...options,
    });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:purchases:read</code>.
   *
   * @example
   * ```ts
   * const listPurchases =
   *   await client.projects.customers.retrievePurchases(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  retrievePurchases(
    customerID: string,
    params: CustomerRetrievePurchasesParams,
    options?: RequestOptions,
  ): APIPromise<ListPurchases> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/customers/${customerID}/purchases`, {
      query,
      ...options,
    });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:subscriptions:read</code>.
   *
   * @example
   * ```ts
   * const listSubscriptions =
   *   await client.projects.customers.retrieveSubscriptions(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  retrieveSubscriptions(
    customerID: string,
    params: CustomerRetrieveSubscriptionsParams,
    options?: RequestOptions,
  ): APIPromise<ListSubscriptions> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/customers/${customerID}/subscriptions`, {
      query,
      ...options,
    });
  }
}

export interface Customer {
  id: string;

  /**
   * The first time the customer was seen
   */
  first_seen_at: number;

  /**
   * The last app version the customer was seen on
   */
  last_seen_app_version: string | null;

  /**
   * The last time the customer was seen
   */
  last_seen_at: number | null;

  /**
   * The last country the customer was seen in
   */
  last_seen_country: string | null;

  /**
   * The last platform the customer was seen on
   */
  last_seen_platform: string | null;

  /**
   * The last platform version the customer was seen on
   */
  last_seen_platform_version: string | null;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'customer';

  /**
   * ID of the project to which the customer belongs
   */
  project_id: string;

  /**
   * List of the entitlements currently active for the customer. This property is
   * only available in the "Get a customer" endpoint.
   */
  active_entitlements?: Customer.ActiveEntitlements;

  /**
   * List of the attributes of the customer. This is an expandable property, only
   * available in the "Get a customer" endpoint.
   */
  attributes?: Customer.Attributes;

  /**
   * The experiment enrollment object
   */
  experiment?: Customer.Experiment | null;
}

export namespace Customer {
  /**
   * List of the entitlements currently active for the customer. This property is
   * only available in the "Get a customer" endpoint.
   */
  export interface ActiveEntitlements extends CustomersAPI.ListCustomerActiveEntitlements {}

  /**
   * List of the attributes of the customer. This is an expandable property, only
   * available in the "Get a customer" endpoint.
   */
  export interface Attributes extends AttributesAPI.ListCustomerAttributes {}

  /**
   * The experiment enrollment object
   */
  export interface Experiment {
    id: string;

    name: string;

    /**
     * String representing the object's type. Objects of the same type share the same
     * value.
     */
    object: 'experiment_enrollment';

    /**
     * The variant of the Experiment that the Customer was or is assigned to, where 'a'
     * represents the Control, and 'b' represents the Treatment.
     */
    variant: string;
  }
}

export type CustomerAttributeReservedName =
  | '$ad'
  | '$adGroup'
  | '$adjustId'
  | '$airbridgeDeviceId'
  | '$airshipChannelId'
  | '$amazonAdId'
  | '$amplitudeDeviceId'
  | '$amplitudeUserId'
  | '$appleRefundHandlingPreference'
  | '$appleAdsAdGroupId'
  | '$appleAdsCampaignId'
  | '$appleAdsKeywordId'
  | '$apnsTokens'
  | '$appsflyerId'
  | '$appsflyerSharingFilter'
  | '$attConsentStatus'
  | '$branchId'
  | '$brazeAliasLabel'
  | '$brazeAliasName'
  | '$campaign'
  | '$clevertapId'
  | '$creative'
  | '$customerioId'
  | '$displayName'
  | '$email'
  | '$fbAnonId'
  | '$fcmTokens'
  | '$firebaseAppInstanceId'
  | '$gpsAdId'
  | '$idfa'
  | '$idfv'
  | '$ip'
  | '$iterableCampaignId'
  | '$iterableTemplateId'
  | '$iterableUserId'
  | '$keyword'
  | '$kochavaDeviceId'
  | '$mediaSource'
  | '$mixpanelDistinctId'
  | '$mparticleId'
  | '$onesignalId'
  | '$onesignalUserId'
  | '$phoneNumber'
  | '$posthogUserId'
  | '$telemetryDeckUserId'
  | '$telemetryDeckAppId'
  | 'telemetry_deck_user_id'
  | 'telemetry_deck_app_id'
  | '$segmentId'
  | '$tenjinId'
  | '$deviceVersion';

/**
 * List of the entitlements currently active for the customer. This property is
 * only available in the "Get a customer" endpoint.
 */
export interface ListCustomerActiveEntitlements {
  /**
   * Details about each object.
   */
  items: Array<ListCustomerActiveEntitlements.Item>;

  /**
   * URL to access the next page of the customer's active entitlements. If not
   * present / null, there is no next page
   */
  next_page: string | null;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value. Always has the value `list`.
   */
  object: 'list';

  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export namespace ListCustomerActiveEntitlements {
  export interface Item {
    /**
     * ID of the entitlement granted to the customer
     */
    entitlement_id: string;

    /**
     * The date after which the access to the entitlement expires in ms since epoch
     */
    expires_at: number | null;

    /**
     * String representing the object's type. Objects of the same type share the same
     * value.
     */
    object: 'customer.active_entitlement';
  }
}

export interface ListPurchases {
  /**
   * Details about each object.
   */
  items: Array<PurchasesAPI.Purchase>;

  /**
   * URL to access the next page of the customer's purchases. If not present / null,
   * there is no next page
   */
  next_page: string | null;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value. Always has the value `list`.
   */
  object: 'list';

  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export interface ListSubscriptions {
  /**
   * Details about each object.
   */
  items: Array<SubscriptionsAPI.Subscription>;

  /**
   * URL to access the next page of the customer's subscriptions. If not present /
   * null, there is no next page
   */
  next_page: string | null;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value. Always has the value `list`.
   */
  object: 'list';

  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export interface CustomerListResponse {
  /**
   * Details about each object.
   */
  items: Array<Customer>;

  /**
   * URL to access the next page of the project's customers. If not present / null,
   * there is no next page
   */
  next_page: string | null;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value. Always has the value `list`.
   */
  object: 'list';

  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export interface CustomerRetrieveAliasesResponse {
  /**
   * Details about each object.
   */
  items: Array<CustomerRetrieveAliasesResponse.Item>;

  /**
   * URL to access the next page of the customer's aliases. If not present / null,
   * there is no next page
   */
  next_page: string | null;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value. Always has the value `list`.
   */
  object: 'list';

  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export namespace CustomerRetrieveAliasesResponse {
  export interface Item {
    id: string;

    /**
     * The time when the alias was created
     */
    created_at: number;

    /**
     * String representing the object's type. Objects of the same type share the same
     * value.
     */
    object: 'customer.alias';
  }
}

export interface CustomerCreateParams {
  /**
   * The ID of the customer
   */
  id: string;

  attributes?: Array<CustomerCreateParams.Attribute>;
}

export namespace CustomerCreateParams {
  export interface Attribute {
    /**
     * The name of the attribute
     */
    name: CustomersAPI.CustomerAttributeReservedName | (string & {});

    /**
     * The value of the attribute
     */
    value: string;
  }
}

export interface CustomerRetrieveParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Query param: Specifies which fields in the response should be expanded. Accepted
   * values are: `attributes` (requires `customer_information:customers:read`
   * permission).
   */
  expand?: Array<'attributes'>;
}

export interface CustomerListParams {
  limit?: number;

  /**
   * Search term. Currently, only searching by email is supported (searching for
   * exact matches in the $email attribute).
   */
  search?: string;

  starting_after?: string;
}

export interface CustomerDeleteParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export interface CustomerRetrieveActiveEntitlementsParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Query param:
   */
  limit?: number;

  /**
   * Query param:
   */
  starting_after?: string;
}

export interface CustomerRetrieveAliasesParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Query param:
   */
  limit?: number;

  /**
   * Query param:
   */
  starting_after?: string;
}

export interface CustomerRetrievePurchasesParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Query param:
   */
  environment?: 'sandbox' | 'production';

  /**
   * Query param:
   */
  limit?: number;

  /**
   * Query param:
   */
  starting_after?: string;
}

export interface CustomerRetrieveSubscriptionsParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Query param:
   */
  environment?: 'sandbox' | 'production';

  /**
   * Query param:
   */
  limit?: number;

  /**
   * Query param:
   */
  starting_after?: string;
}

Customers.Actions = Actions;
Customers.VirtualCurrencies = VirtualCurrencies;
Customers.Attributes = AttributesAPIAttributes;
Customers.Invoices = Invoices;

export declare namespace Customers {
  export {
    type Customer as Customer,
    type CustomerAttributeReservedName as CustomerAttributeReservedName,
    type ListCustomerActiveEntitlements as ListCustomerActiveEntitlements,
    type ListPurchases as ListPurchases,
    type ListSubscriptions as ListSubscriptions,
    type CustomerListResponse as CustomerListResponse,
    type CustomerRetrieveAliasesResponse as CustomerRetrieveAliasesResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerListParams as CustomerListParams,
    type CustomerDeleteParams as CustomerDeleteParams,
    type CustomerRetrieveActiveEntitlementsParams as CustomerRetrieveActiveEntitlementsParams,
    type CustomerRetrieveAliasesParams as CustomerRetrieveAliasesParams,
    type CustomerRetrievePurchasesParams as CustomerRetrievePurchasesParams,
    type CustomerRetrieveSubscriptionsParams as CustomerRetrieveSubscriptionsParams,
  };

  export {
    Actions as Actions,
    type ActionTransferResponse as ActionTransferResponse,
    type ActionAssignOfferingParams as ActionAssignOfferingParams,
    type ActionGrantEntitlementParams as ActionGrantEntitlementParams,
    type ActionRevokeGrantedEntitlementParams as ActionRevokeGrantedEntitlementParams,
    type ActionTransferParams as ActionTransferParams,
  };

  export {
    VirtualCurrencies as VirtualCurrencies,
    type ListVirtualCurrenciesBalances as ListVirtualCurrenciesBalances,
    type VirtualCurrencyListParams as VirtualCurrencyListParams,
    type VirtualCurrencyTransactionsParams as VirtualCurrencyTransactionsParams,
    type VirtualCurrencyUpdateBalanceParams as VirtualCurrencyUpdateBalanceParams,
  };

  export {
    AttributesAPIAttributes as Attributes,
    type ListCustomerAttributes as ListCustomerAttributes,
    type AttributeCreateParams as AttributeCreateParams,
    type AttributeListParams as AttributeListParams,
  };

  export {
    Invoices as Invoices,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceListParams as InvoiceListParams,
    type InvoiceRetrieveFileParams as InvoiceRetrieveFileParams,
  };
}
