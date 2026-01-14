// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProductsAPI from '../products';
import * as CustomersAPI from '../customers/customers';
import * as EntitlementsAPI from '../entitlements/entitlements';
import * as PurchasesAPI from '../purchases/purchases';
import * as ActionsAPI from './actions';
import { ActionCancelParams, ActionRefundParams, Actions } from './actions';
import * as TransactionsAPI from './transactions/transactions';
import { TransactionListParams, TransactionListResponse, Transactions } from './transactions/transactions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subscriptions extends APIResource {
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:subscriptions:read</code>.
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.projects.subscriptions.retrieve(
   *     'sub1a2b3c4d5e',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  retrieve(
    subscriptionID: string,
    params: SubscriptionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Subscription> {
    const { project_id } = params;
    return this._client.get(path`/projects/${project_id}/subscriptions/${subscriptionID}`, options);
  }

  /**
   * Search for a subscription by any of its associated
   * `store_subscription_identifier` values, whether from a past or current
   * subscription period.
   *
   * For example, this may include the `transactionId` of any transaction in an Apple
   * App Store subscription, or any order ID from a Google Play Store subscription.
   * This endpoint requires the following permission(s):
   * <code>customer_information:subscriptions:read</code>.
   *
   * @example
   * ```ts
   * const listSubscriptions =
   *   await client.projects.subscriptions.list('proj1ab2c3d4', {
   *     store_subscription_identifier: 'x',
   *   });
   * ```
   */
  list(
    projectID: string,
    query: SubscriptionListParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.ListSubscriptions> {
    return this._client.get(path`/projects/${projectID}/subscriptions`, { query, ...options });
  }

  /**
   * Get a secure, single-use URL that allows customers to access their Web Billing
   * customer portal. This endpoint requires the following permission(s):
   * <code>customer_information:subscriptions:read</code>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.projects.subscriptions.getAuthenticatedManagementURL(
   *     'sub1a2b3c4d5e',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  getAuthenticatedManagementURL(
    subscriptionID: string,
    params: SubscriptionGetAuthenticatedManagementURLParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionGetAuthenticatedManagementURLResponse> {
    const { project_id } = params;
    return this._client.get(
      path`/projects/${project_id}/subscriptions/${subscriptionID}/authenticated_management_url`,
      options,
    );
  }

  /**
   * Lists all Entitlements granted by a Subscription. This endpoint requires the
   * following permission(s): <code>customer_information:subscriptions:read</code>.
   *
   * @example
   * ```ts
   * const listEntitlements =
   *   await client.projects.subscriptions.listEntitlements(
   *     'sub1a2b3c4d5e',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  listEntitlements(
    subscriptionID: string,
    params: SubscriptionListEntitlementsParams,
    options?: RequestOptions,
  ): APIPromise<EntitlementsAPI.ListEntitlements> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/subscriptions/${subscriptionID}/entitlements`, {
      query,
      ...options,
    });
  }
}

/**
 * The country that the object is associated with, in ISO alpha 2 code
 */
export type Country =
  | 'AF'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AQ'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BQ'
  | 'BA'
  | 'BW'
  | 'BV'
  | 'BR'
  | 'IO'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'CV'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CD'
  | 'CG'
  | 'CK'
  | 'CR'
  | 'HR'
  | 'CU'
  | 'CW'
  | 'CY'
  | 'CZ'
  | 'CI'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'SZ'
  | 'ET'
  | 'FK'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'TF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GU'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HM'
  | 'VA'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'MP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PS'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PN'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'MK'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'RE'
  | 'BL'
  | 'SH'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'VC'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SX'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'GS'
  | 'SS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'VG'
  | 'VI'
  | 'WF'
  | 'EH'
  | 'YE'
  | 'ZM'
  | 'ZW'
  | 'AX'
  | null;

export interface MonetaryAmount {
  /**
   * ISO 4217 currency code
   */
  currency:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLF'
    | 'CLP'
    | 'CNH'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STD'
    | 'STN'
    | 'SVC'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XAG'
    | 'XAU'
    | 'XCD'
    | 'XDR'
    | 'XOF'
    | 'XPD'
    | 'XPF'
    | 'XPT'
    | 'YER'
    | 'ZAR'
    | 'ZMW'
    | 'ZWL';

  /**
   * Total revenue generated (excluding taxes and commission)
   */
  gross: number;

  /**
   * Net revenue after store commission / fees and taxes
   */
  proceeds: number;

  /**
   * Estimated taxes deducted from gross revenue
   */
  tax: number;

  /**
   * Store commission or payment processor fees deducted from gross revenue (if any)
   */
  commission?: number;
}

export type Ownership = 'purchased' | 'family_shared';

export interface Subscription {
  /**
   * The ID of the subscription (generated by RevenueCat)
   */
  id: string;

  /**
   * The auto renewal status of a subscription.
   *
   * Possible values: • `will_renew`: the subscription is currently set to
   * automatically renew • `will_not_renew`: the subscription is currently set to
   * expire at the end of the period • `will_change_product`: the subscription is
   * currently set to change product at the end of the period (which might start a
   * new subscription) • `will_pause`: the subscription is currently set to pause at
   * the end of the current period • `requires_price_increase_consent`: the
   * subscription will expire at the end of the current period unless the customer
   * consents to the price increase • `has_already_renewed`: the customer has already
   * been charged for the upcoming renewal (so the renewal will take place even if
   * the customer opts out of auto-renewal before the end of the period)
   */
  auto_renewal_status:
    | 'will_renew'
    | 'will_not_renew'
    | 'will_change_product'
    | 'will_pause'
    | 'requires_price_increase_consent'
    | 'has_already_renewed';

  /**
   * The date when the subscription billing period is expected to end in ms since
   * epoch. Can be null if the subscription is paused until an indefinite date.
   */
  current_period_ends_at: number | null;

  /**
   * The date when the subscription billing period started in ms since epoch
   */
  current_period_starts_at: number;

  /**
   * The ID of the customer
   */
  customer_id: string;

  /**
   * The date when the latest subscription billing period is expected to end in ms
   * since epoch. It will only be different from `current_period_ends_at` if
   * `auto_renewal_status` is `has_already_renewed`, in which case it indicates the
   * end of the next billing period. Can be null if the subscription is paused until
   * an indefinite date.
   */
  ends_at: number | null;

  entitlements: Subscription.Entitlements;

  /**
   * The store environment
   */
  environment: PurchasesAPI.Environment;

  /**
   * Determines whether the customer should currently be provided access to the
   * entitlements associated with the subscription
   */
  gives_access: boolean;

  /**
   * The URL to manage the subscription
   */
  management_url: string | null;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'subscription';

  /**
   * The ID of the original customer. Relevant for subscriptions that were
   * transferred from one customer to another
   */
  original_customer_id: string;

  /**
   * Ownership of the subscription
   */
  ownership: Ownership;

  /**
   * Determines whether there is a pending payment associated with the subscription
   */
  pending_payment: boolean;

  /**
   * The ID of the offering the customer saw when purchasing the subscription
   */
  presented_offering_id: string | null;

  /**
   * The RevenueCat ID of the product that the customer is subscribed to. Exists for
   * all store types except for promotional.
   */
  product_id: string | null;

  /**
   * The date when the subscription originally started in ms since epoch
   */
  starts_at: number;

  /**
   * The status of a subscription. Please note that additional states might be added
   * in the future. To determine whether or not a subscription currently provides
   * access to any associated entitlements, use the _gives_access_ field.
   *
   * Possible values: • `trialing`: the subscription is in a free trial period •
   * `active`: the subscription is active, in a paid period • `expired`: the
   * subscription is expired and no longer active • `in_grace_period`: the
   * subscription is past its regular expiry date and experienced a billing issue,
   * but is currently still in an access-granting grace period • `in_billing_retry`:
   * the subscription has experienced a billing issue. Billing is being retried,
   * access is suspended.-paused: the subscription is currently paused and should not
   * provide access. • `unknown`: the subscription is in an unknown state. Refer to
   * the _gives_access_ field to determine whether or not to grant access. •
   * `incomplete`: the subscription is in an incomplete state, maybe due to incorrect
   * billing details or because it's scheduled to start in the future.
   */
  status:
    | 'trialing'
    | 'active'
    | 'expired'
    | 'in_grace_period'
    | 'in_billing_retry'
    | 'paused'
    | 'unknown'
    | 'incomplete';

  /**
   * Store the subscription belongs to
   */
  store: 'amazon' | 'app_store' | 'mac_app_store' | 'play_store' | 'promotional' | 'stripe' | 'rc_billing';

  /**
   * The subscription identifier as per the store (e.g, for Apple App Store, the
   * `transaction_id` of the latest transaction of the subscription, or for Google
   * Play Store, the Order ID of the last renewal of the subscription)
   */
  store_subscription_identifier: string;

  /**
   * Total revenue generated by a subscription in USD
   */
  total_revenue_in_usd: MonetaryAmount;

  /**
   * Billing country in ISO alpha 2 code
   */
  country?: Country | null;

  /**
   * Indicates pending product changes. Present if the `auto_renewal_status` is
   * `will_change_product`.
   */
  pending_changes?: Subscription.PendingChanges | null;
}

export namespace Subscription {
  export interface Entitlements {
    /**
     * Details about each object.
     */
    items: Array<EntitlementsAPI.Entitlement>;

    /**
     * URL to access the next page of the customer's entitlements. If not present /
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

  /**
   * Indicates pending product changes. Present if the `auto_renewal_status` is
   * `will_change_product`.
   */
  export interface PendingChanges {
    /**
     * The product that will be active as of the next renewal
     */
    product?: ProductsAPI.Product;
  }
}

export interface SubscriptionGetAuthenticatedManagementURLResponse {
  /**
   * A secure, single-use URL that provides temporary access to the customer portal
   * for a specific customer. This URL can only be used once and expires after use.
   */
  management_url: string;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'authenticated_management_url';
}

export interface SubscriptionRetrieveParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export interface SubscriptionListParams {
  /**
   * Store ID associated with the subscription for the current or next period.
   */
  store_subscription_identifier: string;
}

export interface SubscriptionGetAuthenticatedManagementURLParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export interface SubscriptionListEntitlementsParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Query param
   */
  limit?: number;

  /**
   * Query param
   */
  starting_after?: string;
}

Subscriptions.Transactions = Transactions;
Subscriptions.Actions = Actions;

export declare namespace Subscriptions {
  export {
    type Country as Country,
    type MonetaryAmount as MonetaryAmount,
    type Ownership as Ownership,
    type Subscription as Subscription,
    type SubscriptionGetAuthenticatedManagementURLResponse as SubscriptionGetAuthenticatedManagementURLResponse,
    type SubscriptionRetrieveParams as SubscriptionRetrieveParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionGetAuthenticatedManagementURLParams as SubscriptionGetAuthenticatedManagementURLParams,
    type SubscriptionListEntitlementsParams as SubscriptionListEntitlementsParams,
  };

  export {
    Transactions as Transactions,
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };

  export {
    Actions as Actions,
    type ActionCancelParams as ActionCancelParams,
    type ActionRefundParams as ActionRefundParams,
  };
}
