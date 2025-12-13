// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppsAPI from './apps';
import {
  App,
  AppCreateParams,
  AppDeleteParams,
  AppListParams,
  AppListPublicAPIKeysParams,
  AppListPublicAPIKeysResponse,
  AppListResponse,
  AppRetrieveParams,
  AppRetrieveStoreKitConfigParams,
  AppRetrieveStoreKitConfigResponse,
  AppUpdateParams,
  Apps,
  DeletedObject,
  RcBillingCurrency,
} from './apps';
import * as MetricsAPI from './metrics';
import { MetricGetOverviewParams, MetricGetOverviewResponse, Metrics } from './metrics';
import * as ProductsAPI from './products';
import {
  Product,
  ProductCreateParams,
  ProductDeleteParams,
  ProductListParams,
  ProductListResponse,
  ProductPushToStoreParams,
  ProductPushToStoreResponse,
  ProductRetrieveParams,
  ProductType,
  Products,
} from './products';
import * as CustomersAPI from './customers/customers';
import {
  Customer,
  CustomerAttributeReservedName,
  CustomerCreateParams,
  CustomerDeleteParams,
  CustomerListParams,
  CustomerListResponse,
  CustomerRetrieveActiveEntitlementsParams,
  CustomerRetrieveAliasesParams,
  CustomerRetrieveAliasesResponse,
  CustomerRetrieveParams,
  CustomerRetrievePurchasesParams,
  CustomerRetrieveSubscriptionsParams,
  Customers,
  ListCustomerActiveEntitlements,
  ListPurchases,
  ListSubscriptions,
} from './customers/customers';
import * as EntitlementsAPI from './entitlements/entitlements';
import {
  Entitlement,
  EntitlementCreateParams,
  EntitlementDeleteParams,
  EntitlementListParams,
  EntitlementListProductsParams,
  EntitlementListProductsResponse,
  EntitlementRetrieveParams,
  EntitlementUpdateParams,
  Entitlements,
  ListEntitlements,
} from './entitlements/entitlements';
import * as IntegrationsAPI from './integrations/integrations';
import { Integrations } from './integrations/integrations';
import * as OfferingsAPI from './offerings/offerings';
import {
  Offering,
  OfferingCreateParams,
  OfferingDeleteParams,
  OfferingListParams,
  OfferingListResponse,
  OfferingRetrieveParams,
  OfferingUpdateParams,
  Offerings,
} from './offerings/offerings';
import * as PackagesAPI from './packages/packages';
import {
  Package,
  PackageDeleteParams,
  PackageListProductsParams,
  PackageListProductsResponse,
  PackageProductAssociation,
  PackageRetrieveParams,
  PackageUpdateParams,
  Packages,
} from './packages/packages';
import * as PurchasesAPI from './purchases/purchases';
import {
  Environment,
  Purchase,
  PurchaseListEntitlementsParams,
  PurchaseListParams,
  PurchaseRetrieveParams,
  Purchases,
} from './purchases/purchases';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import {
  Country,
  MonetaryAmount,
  Ownership,
  Subscription,
  SubscriptionGetAuthenticatedManagementURLParams,
  SubscriptionGetAuthenticatedManagementURLResponse,
  SubscriptionListEntitlementsParams,
  SubscriptionListParams,
  SubscriptionRetrieveParams,
  Subscriptions,
} from './subscriptions/subscriptions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Projects extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
  offerings: OfferingsAPI.Offerings = new OfferingsAPI.Offerings(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  purchases: PurchasesAPI.Purchases = new PurchasesAPI.Purchases(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:projects:read_write</code>.
   *
   * @example
   * ```ts
   * const project = await client.projects.create({ name: 'x' });
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<Project> {
    return this._client.post('/projects', { body, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:projects:read</code>.
   *
   * @example
   * ```ts
   * const projects = await client.projects.list();
   * ```
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/projects', { query, ...options });
  }

  /**
   * Create a paywall for an offering of the project. This endpoint requires the
   * following permission(s):
   * <code>project_configuration:offerings:read_write</code>.
   *
   * @example
   * ```ts
   * const response = await client.projects.createPaywall(
   *   'proj1ab2c3d4',
   *   { offering_id: 'ofrng123456789a' },
   * );
   * ```
   */
  createPaywall(
    projectID: string,
    body: ProjectCreatePaywallParams,
    options?: RequestOptions,
  ): APIPromise<ProjectCreatePaywallResponse> {
    return this._client.post(path`/projects/${projectID}/paywalls`, { body, ...options });
  }
}

export interface Project {
  /**
   * The id of the project
   */
  id: string;

  /**
   * The date when the project was created in ms since epoch
   */
  created_at: number;

  /**
   * The name of the project
   */
  name: string;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'project';

  /**
   * The URL of the project's icon (small size)
   */
  icon_url?: string | null;

  /**
   * The URL of the project's icon (large size)
   */
  icon_url_large?: string | null;
}

export interface ProjectListResponse {
  /**
   * Details about each object.
   */
  items: Array<Project>;

  /**
   * URL to access the next page of the projects. If not present / null, there is no
   * next page
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

export interface ProjectCreatePaywallResponse {
  /**
   * The id of the paywall
   */
  id: string;

  /**
   * The date the paywall was created at in ms since epoch
   */
  created_at: number;

  /**
   * The name of the paywall
   */
  name: string | null;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'paywall';

  /**
   * The ID of the offering the paywall is for.
   */
  offering_id: string;

  /**
   * The date the paywall was published at in ms since epoch
   */
  published_at: number | null;
}

export interface ProjectCreateParams {
  /**
   * The name of the project
   */
  name: string;
}

export interface ProjectListParams {
  limit?: number;

  starting_after?: string;
}

export interface ProjectCreatePaywallParams {
  /**
   * The ID of the offering the paywall will be created for.
   */
  offering_id: string;
}

Projects.Apps = Apps;
Projects.Customers = Customers;
Projects.Integrations = Integrations;
Projects.Products = Products;
Projects.Entitlements = Entitlements;
Projects.Offerings = Offerings;
Projects.Packages = Packages;
Projects.Subscriptions = Subscriptions;
Projects.Purchases = Purchases;
Projects.Metrics = Metrics;

export declare namespace Projects {
  export {
    type Project as Project,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreatePaywallResponse as ProjectCreatePaywallResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
    type ProjectCreatePaywallParams as ProjectCreatePaywallParams,
  };

  export {
    Apps as Apps,
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

  export {
    Customers as Customers,
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

  export { Integrations as Integrations };

  export {
    Products as Products,
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

  export {
    Entitlements as Entitlements,
    type Entitlement as Entitlement,
    type ListEntitlements as ListEntitlements,
    type EntitlementListProductsResponse as EntitlementListProductsResponse,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementRetrieveParams as EntitlementRetrieveParams,
    type EntitlementUpdateParams as EntitlementUpdateParams,
    type EntitlementListParams as EntitlementListParams,
    type EntitlementDeleteParams as EntitlementDeleteParams,
    type EntitlementListProductsParams as EntitlementListProductsParams,
  };

  export {
    Offerings as Offerings,
    type Offering as Offering,
    type OfferingListResponse as OfferingListResponse,
    type OfferingCreateParams as OfferingCreateParams,
    type OfferingRetrieveParams as OfferingRetrieveParams,
    type OfferingUpdateParams as OfferingUpdateParams,
    type OfferingListParams as OfferingListParams,
    type OfferingDeleteParams as OfferingDeleteParams,
  };

  export {
    Packages as Packages,
    type Package as Package,
    type PackageProductAssociation as PackageProductAssociation,
    type PackageListProductsResponse as PackageListProductsResponse,
    type PackageRetrieveParams as PackageRetrieveParams,
    type PackageUpdateParams as PackageUpdateParams,
    type PackageDeleteParams as PackageDeleteParams,
    type PackageListProductsParams as PackageListProductsParams,
  };

  export {
    Subscriptions as Subscriptions,
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
    Purchases as Purchases,
    type Environment as Environment,
    type Purchase as Purchase,
    type PurchaseRetrieveParams as PurchaseRetrieveParams,
    type PurchaseListParams as PurchaseListParams,
    type PurchaseListEntitlementsParams as PurchaseListEntitlementsParams,
  };

  export {
    Metrics as Metrics,
    type MetricGetOverviewResponse as MetricGetOverviewResponse,
    type MetricGetOverviewParams as MetricGetOverviewParams,
  };
}
