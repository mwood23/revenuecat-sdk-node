// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppsAPI from './apps';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Apps extends APIResource {
  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:apps:read_write</code>.
   *
   * @example
   * ```ts
   * const app = await client.projects.apps.create(
   *   'proj1ab2c3d4',
   *   {
   *     name: 'My App Store App',
   *     type: 'app_store',
   *     app_store: {
   *       bundle_id: 'com.apple.Pages',
   *       shared_secret: '1234567890abcdef1234567890abcdef',
   *       subscription_private_key:
   *         '-----BEGIN EC PRIVATE KEY-----\nMHQCAQEEIGAkwOF0qkGO19yJlIzQVcOg+HBfvLL4KDXDtL+MMHk2oAcGBSuBBAAK\noUQDQgAEhDP7RaX4c6qOHkE1nIWMr5C90ybtr87VRGFm4VsfWqG47NPN+/dHcfwJ\nJPZGFgMcgvBc37AxQPPQjyXYjhhQDg==\n-----END EC PRIVATE KEY-----',
   *       subscription_key_id: '6345942CC3',
   *       subscription_key_issuer:
   *         '5a049d62-1b9b-453c-b605-1988189d8129',
   *     },
   *   },
   * );
   * ```
   */
  create(projectID: string, body: AppCreateParams, options?: RequestOptions): APIPromise<App> {
    return this._client.post(path`/projects/${projectID}/apps`, { body, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:apps:read</code>.
   *
   * @example
   * ```ts
   * const app = await client.projects.apps.retrieve(
   *   'app1ab2c3d4',
   *   { project_id: 'proj1ab2c3d4' },
   * );
   * ```
   */
  retrieve(appID: string, params: AppRetrieveParams, options?: RequestOptions): APIPromise<App> {
    const { project_id } = params;
    return this._client.get(path`/projects/${project_id}/apps/${appID}`, options);
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:apps:read_write</code>.
   *
   * @example
   * ```ts
   * const app = await client.projects.apps.update(
   *   'app1ab2c3d4',
   *   {
   *     project_id: 'proj1ab2c3d4',
   *     app_store: {
   *       bundle_id: 'com.my.new-app',
   *       shared_secret: '1234567890abcdef1234567890abcdef',
   *     },
   *     name: 'New App name',
   *   },
   * );
   * ```
   */
  update(appID: string, params: AppUpdateParams, options?: RequestOptions): APIPromise<App> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/apps/${appID}`, { body, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:apps:read</code>.
   *
   * @example
   * ```ts
   * const apps = await client.projects.apps.list(
   *   'proj1ab2c3d4',
   * );
   * ```
   */
  list(
    projectID: string,
    query: AppListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppListResponse> {
    return this._client.get(path`/projects/${projectID}/apps`, { query, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:apps:read_write</code>.
   *
   * @example
   * ```ts
   * const deletedObject = await client.projects.apps.delete(
   *   'app1ab2c3d4',
   *   { project_id: 'proj1ab2c3d4' },
   * );
   * ```
   */
  delete(appID: string, params: AppDeleteParams, options?: RequestOptions): APIPromise<DeletedObject> {
    const { project_id } = params;
    return this._client.delete(path`/projects/${project_id}/apps/${appID}`, options);
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:apps:read</code>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.projects.apps.listPublicAPIKeys(
   *     'app1ab2c3d4',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  listPublicAPIKeys(
    appID: string,
    params: AppListPublicAPIKeysParams,
    options?: RequestOptions,
  ): APIPromise<AppListPublicAPIKeysResponse> {
    const { project_id } = params;
    return this._client.get(path`/projects/${project_id}/apps/${appID}/public_api_keys`, options);
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:apps:read</code>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.projects.apps.retrieveStoreKitConfig(
   *     'app1ab2c3d4',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  retrieveStoreKitConfig(
    appID: string,
    params: AppRetrieveStoreKitConfigParams,
    options?: RequestOptions,
  ): APIPromise<AppRetrieveStoreKitConfigResponse> {
    const { project_id } = params;
    return this._client.get(path`/projects/${project_id}/apps/${appID}/store_kit_config`, options);
  }
}

export interface App {
  /**
   * The id of the app
   */
  id: string;

  /**
   * The date when the app was created in ms since epoch
   */
  created_at: number;

  /**
   * The name of the app
   */
  name: string;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'app';

  /**
   * The id of the project
   */
  project_id: string;

  /**
   * The platform of the app
   */
  type:
    | 'amazon'
    | 'app_store'
    | 'mac_app_store'
    | 'play_store'
    | 'stripe'
    | 'rc_billing'
    | 'roku'
    | 'paddle'
    | 'test_store';

  /**
   * Amazon type details
   */
  amazon?: App.Amazon;

  /**
   * App Store type details
   */
  app_store?: App.AppStore;

  /**
   * Legacy Mac App Store type details
   */
  mac_app_store?: App.MacAppStore;

  /**
   * Paddle Billing type details
   */
  paddle?: App.Paddle;

  /**
   * Play Store type details
   */
  play_store?: App.PlayStore;

  /**
   * Revenue Cat Billing Store type details
   */
  rc_billing?: App.RcBilling;

  /**
   * Roku Channel Store type details
   */
  roku?: App.Roku;

  /**
   * Stripe type details
   */
  stripe?: App.Stripe;
}

export namespace App {
  /**
   * Amazon type details
   */
  export interface Amazon {
    /**
     * The package name of the app
     */
    package_name: string;
  }

  /**
   * App Store type details
   */
  export interface AppStore {
    /**
     * The bundle ID of the app
     */
    bundle_id: string;
  }

  /**
   * Legacy Mac App Store type details
   */
  export interface MacAppStore {
    /**
     * The bundle ID of the app
     */
    bundle_id: string;
  }

  /**
   * Paddle Billing type details
   */
  export interface Paddle {
    /**
     * Paddle Server-side API key provided on the Paddle dashboard.
     */
    paddle_api_key?: string | null;

    /**
     * Whether the app is tied to the sandbox environment.
     */
    paddle_is_sandbox?: boolean;
  }

  /**
   * Play Store type details
   */
  export interface PlayStore {
    /**
     * The package name of the app
     */
    package_name: string;
  }

  /**
   * Revenue Cat Billing Store type details
   */
  export interface RcBilling {
    /**
     * The default currency to be used for the app.
     */
    default_currency: AppsAPI.RcBillingCurrency;

    /**
     * @deprecated The company name. This field is deprecated. Please, use `app_name`
     * instead.
     */
    seller_company_name: string;

    /**
     * Shown in checkout, emails, and receipts sent to customers.
     */
    app_name?: string;

    /**
     * @deprecated The company support email. This field is deprecated. Please, use
     * `support_email` instead.
     */
    seller_company_support_email?: string | null;

    /**
     * Stripe account connected to your RevenueCat account.
     */
    stripe_account_id?: string | null;

    /**
     * Used as the `reply to` address in all emails sent to customers, to allow them to
     * receive support.
     */
    support_email?: string | null;
  }

  /**
   * Roku Channel Store type details
   */
  export interface Roku {
    /**
     * Channel ID provided on the Roku Channel page.
     */
    roku_channel_id?: string | null;

    /**
     * Channel name that is displayed on the Roku Channel page.
     */
    roku_channel_name?: string | null;
  }

  /**
   * Stripe type details
   */
  export interface Stripe {
    /**
     * Stripe account connected to your RevenueCat account.
     */
    stripe_account_id?: string | null;
  }
}

export interface DeletedObject {
  /**
   * The ID of the deleted object
   */
  id: string;

  /**
   * The date when the object was deleted in ms since epoch
   */
  deleted_at: number;

  /**
   * The type of the deleted object
   */
  object: 'app' | 'customer' | 'entitlement' | 'offering' | 'package' | 'product' | 'webhook_integration';
}

/**
 * ISO 4217 currency code
 */
export type RcBillingCurrency =
  | 'USD'
  | 'EUR'
  | 'JPY'
  | 'GBP'
  | 'AUD'
  | 'CAD'
  | 'BRL'
  | 'KRW'
  | 'CNY'
  | 'MXN'
  | 'SEK'
  | 'PLN'
  | 'MYR'
  | 'PHP'
  | 'CHF'
  | 'SAR'
  | 'TWD'
  | 'NOK'
  | 'DKK'
  | 'THB'
  | 'NZD'
  | 'SGD'
  | 'HKD'
  | 'CZK'
  | 'AED'
  | 'CLP'
  | 'COP'
  | 'CRC'
  | 'GEL'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'IQD'
  | 'JOD'
  | 'KES'
  | 'KZT'
  | 'MAD'
  | 'PEN'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'TZS'
  | 'VND'
  | 'ZAR'
  | 'TRY'
  | 'UAH';

export interface AppListResponse {
  /**
   * Details about each object.
   */
  items: Array<App>;

  /**
   * URL to access the next page of the project's apps. If not present / null, there
   * is no next page
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

export interface AppListPublicAPIKeysResponse {
  /**
   * Details about each object.
   */
  items: Array<AppListPublicAPIKeysResponse.Item>;

  /**
   * URL to access the next page of the app's public API keys. If not present / null,
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

export namespace AppListPublicAPIKeysResponse {
  export interface Item {
    /**
     * The ID of the public API key
     */
    id: string;

    /**
     * The ID of the app the public API key is for
     */
    app_id: string;

    /**
     * The date when the public API key was created in ms since epoch
     */
    created_at: number;

    /**
     * The environment the public API key is for
     */
    environment: 'production' | 'sandbox';

    /**
     * The value of the public API key
     */
    key: string;

    /**
     * String representing the object's type. Objects of the same type share the same
     * value.
     */
    object: 'public_api_key';
  }
}

/**
 * Contents of a generated StoreKit config file for an app
 */
export interface AppRetrieveStoreKitConfigResponse {
  /**
   * Contents of the StoreKit config file
   */
  contents: { [key: string]: unknown };

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'store_kit_config_file';
}

export interface AppCreateParams {
  /**
   * The name of the app
   */
  name: string;

  /**
   * The platform of the app. Mac App Store is disabled by default. See
   * [Legacy Mac Apps](https://www.revenuecat.com/docs/legacy-mac-apps) for more
   * details.
   */
  type: 'amazon' | 'app_store' | 'mac_app_store' | 'play_store' | 'stripe' | 'rc_billing' | 'roku' | 'paddle';

  /**
   * Amazon type details. Should only be used when type is amazon.
   */
  amazon?: AppCreateParams.Amazon;

  /**
   * App Store type details. Should only be used when type is app_store.
   */
  app_store?: AppCreateParams.AppStore;

  /**
   * Mac App Store type details. Should only be used when type is mac_app_store.
   */
  mac_app_store?: AppCreateParams.MacAppStore;

  /**
   * Paddle Billing details. Should only be used when type is paddle.
   */
  paddle?: AppCreateParams.Paddle | null;

  /**
   * Play Store type details. Should only be used when type is play_store.
   */
  play_store?: AppCreateParams.PlayStore;

  /**
   * Revenue Cat Billing Store type details
   */
  rc_billing?: AppCreateParams.RcBilling | null;

  /**
   * Roku Channel Store details. Should only be used when type is roku.
   */
  roku?: AppCreateParams.Roku | null;

  /**
   * Stripe type details. Should only be used when type is stripe.
   */
  stripe?: AppCreateParams.Stripe;
}

export namespace AppCreateParams {
  /**
   * Amazon type details. Should only be used when type is amazon.
   */
  export interface Amazon {
    /**
     * The package name of the app
     */
    package_name: string;

    /**
     * Your Amazon Developer Identity Shared Key
     */
    shared_secret?: string;
  }

  /**
   * App Store type details. Should only be used when type is app_store.
   */
  export interface AppStore {
    /**
     * The bundle ID of the app
     */
    bundle_id: string;

    /**
     * App Store Connect API Key downloaded from App Store Connect in PEM format. Copy
     * the contents of the file in this field. This is optional and used for advanced
     * features like product imports.
     */
    app_store_connect_api_key?: string;

    /**
     * App Store Connect API Key ID. The ID of the downloaded API key. You can get it
     * from App Store Connect.
     */
    app_store_connect_api_key_id?: string;

    /**
     * App Store Connect API Key Issuer ID.
     */
    app_store_connect_api_key_issuer?: string;

    /**
     * Your vendor number from App Store Connect. Required for some features like
     * financial reports.
     */
    app_store_connect_vendor_number?: string;

    /**
     * The shared secret of the app
     */
    shared_secret?: string;

    /**
     * In App Key id. The ID of the downloaded in app key. You can get it from App
     * Store Connect
     */
    subscription_key_id?: string;

    /**
     * The key Issuer id. See instructions on how to obtain this in:
     * https://www.revenuecat.com/docs/in-app-purchase-key-configuration#3-providing-the-issuer-id-to-revenuecat
     */
    subscription_key_issuer?: string;

    /**
     * PKCS /#8 In App Key downloaded from App Store Connect in PEM format. Copy the
     * contents of the file in this field. See instructions on how to get it in:
     * https://www.revenuecat.com/docs/in-app-purchase-key-configuration
     */
    subscription_private_key?: string;
  }

  /**
   * Mac App Store type details. Should only be used when type is mac_app_store.
   */
  export interface MacAppStore {
    /**
     * The bundle ID of the app
     */
    bundle_id: string;

    /**
     * The shared secret of the app
     */
    shared_secret?: string;
  }

  /**
   * Paddle Billing details. Should only be used when type is paddle.
   */
  export interface Paddle {
    /**
     * Paddle Server-side API key provided on the Paddle dashboard.
     */
    paddle_api_key?: string | null;

    /**
     * [Deprecated] Whether the app is tied to the sandbox environment. This field is
     * deprecated and will be removed in the future. The environment is determined by
     * the `paddle_api_key` format.
     */
    paddle_is_sandbox?: boolean | null;
  }

  /**
   * Play Store type details. Should only be used when type is play_store.
   */
  export interface PlayStore {
    /**
     * The package name of the app
     */
    package_name: string;
  }

  /**
   * Revenue Cat Billing Store type details
   */
  export interface RcBilling {
    /**
     * Shown in checkout, emails, and receipts sent to customers.
     */
    app_name: string;

    /**
     * ISO 4217 currency code
     */
    default_currency?: AppsAPI.RcBillingCurrency;

    /**
     * It needs to be connected to your RevenueCat account. It can be omitted if you
     * only have a single Stripe account connected to your RevenueCat account.
     */
    stripe_account_id?: string | null;

    /**
     * Used as the `reply to` address in all emails sent to customers, to allow them to
     * receive support. If you leave this field blank, your RevenueCat account email
     * address will be used.
     */
    support_email?: string | null;
  }

  /**
   * Roku Channel Store details. Should only be used when type is roku.
   */
  export interface Roku {
    /**
     * Roku Pay API key provided on the Roku Pay Web Services page.
     */
    roku_api_key?: string | null;

    /**
     * Channel ID provided on the Roku Channel page.
     */
    roku_channel_id?: string | null;

    /**
     * Channel name that is displayed on the Roku Channel page.
     */
    roku_channel_name?: string | null;
  }

  /**
   * Stripe type details. Should only be used when type is stripe.
   */
  export interface Stripe {
    /**
     * It needs to be connected to your RevenueCat account. It can be omitted if you
     * only have a single Stripe account connected to your RevenueCat account.
     */
    stripe_account_id?: string | null;
  }
}

export interface AppRetrieveParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export interface AppUpdateParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: Amazon type details. Should only be used when type is amazon.
   */
  amazon?: AppUpdateParams.Amazon;

  /**
   * Body param: App Store type details. Should only be used when type is app_store.
   */
  app_store?: AppUpdateParams.AppStore;

  /**
   * Body param: Legacy Mac App Store type details. Should only be used when type is
   * mac_app_store.
   */
  mac_app_store?: AppUpdateParams.MacAppStore;

  /**
   * Body param: The name of the app
   */
  name?: string;

  /**
   * Body param: Paddle Billing type details. Should only be used when type is
   * paddle.
   */
  paddle?: AppUpdateParams.Paddle;

  /**
   * Body param: Play Store type details. Should only be used when type is
   * play_store.
   */
  play_store?: AppUpdateParams.PlayStore;

  /**
   * Body param: Web Billing type details. Should only be used when type is
   * rc_billing.
   */
  rc_billing?: AppUpdateParams.RcBilling;

  /**
   * Body param: Roku Channel Store type details. Should only be used when type is
   * roku.
   */
  roku?: AppUpdateParams.Roku;

  /**
   * Body param: Stripe type details. Should only be used when type is stripe.
   */
  stripe?: AppUpdateParams.Stripe;
}

export namespace AppUpdateParams {
  /**
   * Amazon type details. Should only be used when type is amazon.
   */
  export interface Amazon {
    /**
     * The package name of the app
     */
    package_name?: string;

    /**
     * Your Amazon Developer Identity Shared Key
     */
    shared_secret?: string | null;
  }

  /**
   * App Store type details. Should only be used when type is app_store.
   */
  export interface AppStore {
    /**
     * The bundle ID of the app
     */
    bundle_id?: string;

    /**
     * The shared secret of the app
     */
    shared_secret?: string | null;
  }

  /**
   * Legacy Mac App Store type details. Should only be used when type is
   * mac_app_store.
   */
  export interface MacAppStore {
    /**
     * The bundle ID of the app
     */
    bundle_id?: string;

    /**
     * The shared secret of the app
     */
    shared_secret?: string | null;
  }

  /**
   * Paddle Billing type details. Should only be used when type is paddle.
   */
  export interface Paddle {
    /**
     * Paddle Server-side API key provided on the Paddle dashboard.
     */
    paddle_api_key?: string | null;

    /**
     * Whether the app is tied to the sandbox environment.
     */
    paddle_is_sandbox?: boolean;
  }

  /**
   * Play Store type details. Should only be used when type is play_store.
   */
  export interface PlayStore {
    /**
     * The package name of the app
     */
    package_name: string;
  }

  /**
   * Web Billing type details. Should only be used when type is rc_billing.
   */
  export interface RcBilling {
    /**
     * Shown in checkout, emails, and receipts sent to customers.
     */
    app_name?: string | null;

    /**
     * ISO 4217 currency code
     */
    default_currency?: AppsAPI.RcBillingCurrency;

    /**
     * It needs to be connected to your RevenueCat account. It can be omitted if you
     * only have a single Stripe account connected to your RevenueCat account.
     */
    stripe_account_id?: string | null;

    /**
     * Used as the `reply to` address in all emails sent to customers, to allow them to
     * receive support. If you leave this field blank, your RevenueCat account email
     * address will be used.
     */
    support_email?: string | null;
  }

  /**
   * Roku Channel Store type details. Should only be used when type is roku.
   */
  export interface Roku {
    /**
     * Roku Pay API key provided on the Roku Pay Web Services page.
     */
    roku_api_key?: string | null;

    /**
     * Channel ID provided on the Roku Channel page.
     */
    roku_channel_id?: string | null;

    /**
     * Channel name that is displayed on the Roku Channel page.
     */
    roku_channel_name?: string | null;
  }

  /**
   * Stripe type details. Should only be used when type is stripe.
   */
  export interface Stripe {
    /**
     * It needs to be connected to your RevenueCat account. It can be omitted if you
     * only have a single Stripe account connected to your RevenueCat account.
     */
    stripe_account_id?: string;
  }
}

export interface AppListParams {
  limit?: number;

  starting_after?: string;
}

export interface AppDeleteParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export interface AppListPublicAPIKeysParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export interface AppRetrieveStoreKitConfigParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export declare namespace Apps {
  export {
    type App as App,
    type DeletedObject as DeletedObject,
    type RcBillingCurrency as RcBillingCurrency,
    type AppListResponse as AppListResponse,
    type AppListPublicAPIKeysResponse as AppListPublicAPIKeysResponse,
    type AppRetrieveStoreKitConfigResponse as AppRetrieveStoreKitConfigResponse,
    type AppCreateParams as AppCreateParams,
    type AppRetrieveParams as AppRetrieveParams,
    type AppUpdateParams as AppUpdateParams,
    type AppListParams as AppListParams,
    type AppDeleteParams as AppDeleteParams,
    type AppListPublicAPIKeysParams as AppListPublicAPIKeysParams,
    type AppRetrieveStoreKitConfigParams as AppRetrieveStoreKitConfigParams,
  };
}
