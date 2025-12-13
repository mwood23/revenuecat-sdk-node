// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppsAPI from './apps';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Products extends APIResource {
  /**
   * <div class="theme-admonition theme-admonition-info alert alert--warning">
   *   <div class="heading">Warning</div>
   *   <div>This endpoint does not allow to create Web Billing products.</div>
   * This endpoint requires the following permission(s): <code>project_configuration:products:read_write</code>.
   *
   * @example
   * ```ts
   * const product = await client.projects.products.create(
   *   'proj1ab2c3d4',
   *   {
   *     app_id: 'app1a2b3c4',
   *     store_identifier:
   *       'com.revenuecat.magicweather.monthly9.99',
   *     type: 'subscription',
   *     display_name: 'Premium Monthly 2023',
   *   },
   * );
   * ```
   */
  create(projectID: string, body: ProductCreateParams, options?: RequestOptions): APIPromise<Product> {
    return this._client.post(path`/projects/${projectID}/products`, { body, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:products:read</code>.
   *
   * @example
   * ```ts
   * const product = await client.projects.products.retrieve(
   *   'prod1a2b3c4d5',
   *   { project_id: 'proj1ab2c3d4' },
   * );
   * ```
   */
  retrieve(productID: string, params: ProductRetrieveParams, options?: RequestOptions): APIPromise<Product> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/products/${productID}`, { query, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:products:read</code>.
   *
   * @example
   * ```ts
   * const products = await client.projects.products.list(
   *   'proj1ab2c3d4',
   * );
   * ```
   */
  list(
    projectID: string,
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductListResponse> {
    return this._client.get(path`/projects/${projectID}/products`, { query, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:products:read_write</code>.
   *
   * @example
   * ```ts
   * const deletedObject = await client.projects.products.delete(
   *   'prod1a2b3c4d5',
   *   { project_id: 'proj1ab2c3d4' },
   * );
   * ```
   */
  delete(
    productID: string,
    params: ProductDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AppsAPI.DeletedObject> {
    const { project_id } = params;
    return this._client.delete(path`/projects/${project_id}/products/${productID}`, options);
  }

  /**
   * Push a product to the App Store.
   *
   * **For subscription products**: You must provide store information including
   * duration and subscription group details.
   *
   * **For in-app purchase products** (consumable, non-consumable, non-renewing
   * subscription): No request body is required. This endpoint requires the following
   * permission(s): <code>project_configuration:products:read_write</code>.
   *
   * @example
   * ```ts
   * const response = await client.projects.products.pushToStore(
   *   'prod1a2b3c4d5',
   *   {
   *     project_id: 'proj1ab2c3d4',
   *     store_information: {
   *       duration: 'ONE_MONTH',
   *       subscription_group_name: 'Premium Subscriptions',
   *       subscription_group_id: 'sub_group_123',
   *     },
   *   },
   * );
   * ```
   */
  pushToStore(
    productID: string,
    params: ProductPushToStoreParams,
    options?: RequestOptions,
  ): APIPromise<ProductPushToStoreResponse> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/products/${productID}/create_in_store`, {
      body,
      ...options,
    });
  }
}

export interface Product {
  /**
   * The id of the product
   */
  id: string;

  /**
   * The id of the app
   */
  app_id: string;

  /**
   * The date when the product was created in ms since epoch
   */
  created_at: number;

  /**
   * The display name of the product
   */
  display_name: string | null;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value. Always has the value `list`.
   */
  object: 'product';

  /**
   * The store product identifier
   */
  store_identifier: string;

  /**
   * The product type
   */
  type: ProductType;

  /**
   * The app associated with the product
   */
  app?: AppsAPI.App | null;

  /**
   * The one time product object
   */
  one_time?: Product.OneTime | null;

  /**
   * The subscription product object
   */
  subscription?: Product.Subscription | null;
}

export namespace Product {
  /**
   * The one time product object
   */
  export interface OneTime {
    /**
     * Indicates whether the product is consumable or not.
     */
    is_consumable: boolean | null;
  }

  /**
   * The subscription product object
   */
  export interface Subscription {
    /**
     * The duration of the subscription in ISO-8601 standard
     */
    duration: string | null;

    /**
     * The duration of the subscription's grace period in ISO-8601 standard
     */
    grace_period_duration: string | null;

    /**
     * The duration of the subscription's trial period in ISO-8601 standard
     */
    trial_duration: string | null;
  }
}

export type ProductType =
  | 'subscription'
  | 'one_time'
  | 'consumable'
  | 'non_consumable'
  | 'non_renewing_subscription';

export interface ProductListResponse {
  /**
   * Details about each object.
   */
  items: Array<Product>;

  /**
   * URL to access the next page of the project's products. If not present / null,
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

export interface ProductPushToStoreResponse {
  created_product: ProductPushToStoreResponse.CreatedProduct;
}

export namespace ProductPushToStoreResponse {
  export interface CreatedProduct {
    /**
     * The unique identifier of the product in the store (e.g., App Store Connect
     * product ID)
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same
     * value.
     */
    object: 'store_product';

    /**
     * The product identifier used in the store
     */
    product_identifier: string;

    /**
     * The name of the store product
     */
    name?: string | null;
  }
}

export interface ProductCreateParams {
  /**
   * The ID of the app
   */
  app_id: string;

  /**
   * The store identifier of the product.
   *
   * - For Apple App Store products this is the product ID of the subscription or
   *   in-app product.
   * - For Google's Play Store, it should follow the format 'productId:basePlanId'
   *   for subscription products and SKU for one-time purchase products.
   * - For Stripe, the product identifier that always starts with "prod\_"
   * - For Amazon, if it's a subscription, the term SKU of the subscription. If it's
   *   a one-time purchase, the SKU of the product.
   * - For Roku, this is the product identifier of the subscription or one-time
   *   purchase product.
   */
  store_identifier: string;

  /**
   * The product type
   */
  type: ProductType;

  /**
   * The display name of the product
   */
  display_name?: string | null;

  /**
   * Subscription parameters. Only supported for test store products.
   */
  subscription?: ProductCreateParams.Subscription | null;

  /**
   * The user-facing title of the product. This field is required for Test Store
   * products.
   */
  title?: string | null;
}

export namespace ProductCreateParams {
  /**
   * Subscription parameters. Only supported for test store products.
   */
  export interface Subscription {
    /**
     * The duration of the subscription. Only supported for test store products.
     */
    duration: 'P1W' | 'P1M' | 'P2M' | 'P3M' | 'P6M' | 'P1Y';
  }
}

export interface ProductRetrieveParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Query param: Specifies which fields in the response should be expanded. Accepted
   * values are: `app` (requires `project_configuration:apps:read` permission).
   */
  expand?: Array<'app'>;
}

export interface ProductListParams {
  /**
   * This is an optional query parameter to get a list of products of a given
   * entitlement associated with a particular app
   */
  app_id?: string;

  /**
   * Specifies which fields in the response should be expanded. Accepted values are:
   * `items.app` (requires `project_configuration:apps:read` permission).
   */
  expand?: Array<'items.app'>;

  limit?: number;

  starting_after?: string;
}

export interface ProductDeleteParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export interface ProductPushToStoreParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: Store-specific information for creating the product in the store
   */
  store_information?: ProductPushToStoreParams.CreateAppStoreConnectSubscriptionInput | unknown;
}

export namespace ProductPushToStoreParams {
  export interface CreateAppStoreConnectSubscriptionInput {
    /**
     * The subscription duration period
     */
    duration: 'ONE_WEEK' | 'ONE_MONTH' | 'TWO_MONTHS' | 'THREE_MONTHS' | 'SIX_MONTHS' | 'ONE_YEAR';

    /**
     * The name of the subscription group
     */
    subscription_group_name: string;

    /**
     * The ID of the subscription group (optional)
     */
    subscription_group_id?: string | null;
  }
}

export declare namespace Products {
  export {
    type Product as Product,
    type ProductType as ProductType,
    type ProductListResponse as ProductListResponse,
    type ProductPushToStoreResponse as ProductPushToStoreResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductListParams as ProductListParams,
    type ProductDeleteParams as ProductDeleteParams,
    type ProductPushToStoreParams as ProductPushToStoreParams,
  };
}
