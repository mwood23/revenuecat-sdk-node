# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectCreatePaywallResponse</a></code>

Methods:

- <code title="post /projects">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /projects">client.projects.<a href="./src/resources/projects/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="post /projects/{project_id}/paywalls">client.projects.<a href="./src/resources/projects/projects.ts">createPaywall</a>(projectID, { ...params }) -> ProjectCreatePaywallResponse</code>

## Apps

Types:

- <code><a href="./src/resources/projects/apps.ts">App</a></code>
- <code><a href="./src/resources/projects/apps.ts">DeletedObject</a></code>
- <code><a href="./src/resources/projects/apps.ts">RcBillingCurrency</a></code>
- <code><a href="./src/resources/projects/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/projects/apps.ts">AppListPublicAPIKeysResponse</a></code>
- <code><a href="./src/resources/projects/apps.ts">AppRetrieveStoreKitConfigResponse</a></code>

Methods:

- <code title="post /projects/{project_id}/apps">client.projects.apps.<a href="./src/resources/projects/apps.ts">create</a>(projectID, { ...params }) -> App</code>
- <code title="get /projects/{project_id}/apps/{app_id}">client.projects.apps.<a href="./src/resources/projects/apps.ts">retrieve</a>(appID, { ...params }) -> App</code>
- <code title="post /projects/{project_id}/apps/{app_id}">client.projects.apps.<a href="./src/resources/projects/apps.ts">update</a>(appID, { ...params }) -> App</code>
- <code title="get /projects/{project_id}/apps">client.projects.apps.<a href="./src/resources/projects/apps.ts">list</a>(projectID, { ...params }) -> AppListResponse</code>
- <code title="delete /projects/{project_id}/apps/{app_id}">client.projects.apps.<a href="./src/resources/projects/apps.ts">delete</a>(appID, { ...params }) -> DeletedObject</code>
- <code title="get /projects/{project_id}/apps/{app_id}/public_api_keys">client.projects.apps.<a href="./src/resources/projects/apps.ts">listPublicAPIKeys</a>(appID, { ...params }) -> AppListPublicAPIKeysResponse</code>
- <code title="get /projects/{project_id}/apps/{app_id}/store_kit_config">client.projects.apps.<a href="./src/resources/projects/apps.ts">retrieveStoreKitConfig</a>(appID, { ...params }) -> AppRetrieveStoreKitConfigResponse</code>

## Customers

Types:

- <code><a href="./src/resources/projects/customers/customers.ts">Customer</a></code>
- <code><a href="./src/resources/projects/customers/customers.ts">CustomerAttributeReservedName</a></code>
- <code><a href="./src/resources/projects/customers/customers.ts">ListCustomerActiveEntitlements</a></code>
- <code><a href="./src/resources/projects/customers/customers.ts">ListPurchases</a></code>
- <code><a href="./src/resources/projects/customers/customers.ts">ListSubscriptions</a></code>
- <code><a href="./src/resources/projects/customers/customers.ts">CustomerListResponse</a></code>
- <code><a href="./src/resources/projects/customers/customers.ts">CustomerRetrieveAliasesResponse</a></code>

Methods:

- <code title="post /projects/{project_id}/customers">client.projects.customers.<a href="./src/resources/projects/customers/customers.ts">create</a>(projectID, { ...params }) -> Customer</code>
- <code title="get /projects/{project_id}/customers/{customer_id}">client.projects.customers.<a href="./src/resources/projects/customers/customers.ts">retrieve</a>(customerID, { ...params }) -> Customer</code>
- <code title="get /projects/{project_id}/customers">client.projects.customers.<a href="./src/resources/projects/customers/customers.ts">list</a>(projectID, { ...params }) -> CustomerListResponse</code>
- <code title="delete /projects/{project_id}/customers/{customer_id}">client.projects.customers.<a href="./src/resources/projects/customers/customers.ts">delete</a>(customerID, { ...params }) -> DeletedObject</code>
- <code title="get /projects/{project_id}/customers/{customer_id}/active_entitlements">client.projects.customers.<a href="./src/resources/projects/customers/customers.ts">retrieveActiveEntitlements</a>(customerID, { ...params }) -> ListCustomerActiveEntitlements</code>
- <code title="get /projects/{project_id}/customers/{customer_id}/aliases">client.projects.customers.<a href="./src/resources/projects/customers/customers.ts">retrieveAliases</a>(customerID, { ...params }) -> CustomerRetrieveAliasesResponse</code>
- <code title="get /projects/{project_id}/customers/{customer_id}/purchases">client.projects.customers.<a href="./src/resources/projects/customers/customers.ts">retrievePurchases</a>(customerID, { ...params }) -> ListPurchases</code>
- <code title="get /projects/{project_id}/customers/{customer_id}/subscriptions">client.projects.customers.<a href="./src/resources/projects/customers/customers.ts">retrieveSubscriptions</a>(customerID, { ...params }) -> ListSubscriptions</code>

### Actions

Types:

- <code><a href="./src/resources/projects/customers/actions.ts">ActionTransferResponse</a></code>

Methods:

- <code title="post /projects/{project_id}/customers/{customer_id}/actions/assign_offering">client.projects.customers.actions.<a href="./src/resources/projects/customers/actions.ts">assignOffering</a>(customerID, { ...params }) -> void</code>
- <code title="post /projects/{project_id}/customers/{customer_id}/actions/grant_entitlement">client.projects.customers.actions.<a href="./src/resources/projects/customers/actions.ts">grantEntitlement</a>(customerID, { ...params }) -> Customer</code>
- <code title="post /projects/{project_id}/customers/{customer_id}/actions/revoke_granted_entitlement">client.projects.customers.actions.<a href="./src/resources/projects/customers/actions.ts">revokeGrantedEntitlement</a>(customerID, { ...params }) -> Customer</code>
- <code title="post /projects/{project_id}/customers/{customer_id}/actions/transfer">client.projects.customers.actions.<a href="./src/resources/projects/customers/actions.ts">transfer</a>(customerID, { ...params }) -> ActionTransferResponse</code>

### VirtualCurrencies

Types:

- <code><a href="./src/resources/projects/customers/virtual-currencies.ts">ListVirtualCurrenciesBalances</a></code>

Methods:

- <code title="get /projects/{project_id}/customers/{customer_id}/virtual_currencies">client.projects.customers.virtualCurrencies.<a href="./src/resources/projects/customers/virtual-currencies.ts">list</a>(customerID, { ...params }) -> ListVirtualCurrenciesBalances</code>
- <code title="post /projects/{project_id}/customers/{customer_id}/virtual_currencies/transactions">client.projects.customers.virtualCurrencies.<a href="./src/resources/projects/customers/virtual-currencies.ts">transactions</a>(customerID, { ...params }) -> ListVirtualCurrenciesBalances</code>
- <code title="post /projects/{project_id}/customers/{customer_id}/virtual_currencies/update_balance">client.projects.customers.virtualCurrencies.<a href="./src/resources/projects/customers/virtual-currencies.ts">updateBalance</a>(customerID, { ...params }) -> ListVirtualCurrenciesBalances</code>

### Attributes

Types:

- <code><a href="./src/resources/projects/customers/attributes.ts">ListCustomerAttributes</a></code>

Methods:

- <code title="post /projects/{project_id}/customers/{customer_id}/attributes">client.projects.customers.attributes.<a href="./src/resources/projects/customers/attributes.ts">create</a>(customerID, { ...params }) -> ListCustomerAttributes</code>
- <code title="get /projects/{project_id}/customers/{customer_id}/attributes">client.projects.customers.attributes.<a href="./src/resources/projects/customers/attributes.ts">list</a>(customerID, { ...params }) -> ListCustomerAttributes</code>

### Invoices

Types:

- <code><a href="./src/resources/projects/customers/invoices.ts">InvoiceListResponse</a></code>

Methods:

- <code title="get /projects/{project_id}/customers/{customer_id}/invoices">client.projects.customers.invoices.<a href="./src/resources/projects/customers/invoices.ts">list</a>(customerID, { ...params }) -> InvoiceListResponse</code>
- <code title="get /projects/{project_id}/customers/{customer_id}/invoices/{invoice_id}/file">client.projects.customers.invoices.<a href="./src/resources/projects/customers/invoices.ts">retrieveFile</a>(invoiceID, { ...params }) -> void</code>

## Integrations

### Webhooks

Types:

- <code><a href="./src/resources/projects/integrations/webhooks.ts">WebhookEventType</a></code>
- <code><a href="./src/resources/projects/integrations/webhooks.ts">WebhookIntegration</a></code>
- <code><a href="./src/resources/projects/integrations/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="post /projects/{project_id}/integrations/webhooks">client.projects.integrations.webhooks.<a href="./src/resources/projects/integrations/webhooks.ts">create</a>(projectID, { ...params }) -> WebhookIntegration</code>
- <code title="get /projects/{project_id}/integrations/webhooks/{webhook_integration_id}">client.projects.integrations.webhooks.<a href="./src/resources/projects/integrations/webhooks.ts">retrieve</a>(webhookIntegrationID, { ...params }) -> WebhookIntegration</code>
- <code title="post /projects/{project_id}/integrations/webhooks/{webhook_integration_id}">client.projects.integrations.webhooks.<a href="./src/resources/projects/integrations/webhooks.ts">update</a>(webhookIntegrationID, { ...params }) -> WebhookIntegration</code>
- <code title="get /projects/{project_id}/integrations/webhooks">client.projects.integrations.webhooks.<a href="./src/resources/projects/integrations/webhooks.ts">list</a>(projectID, { ...params }) -> WebhookListResponse</code>
- <code title="delete /projects/{project_id}/integrations/webhooks/{webhook_integration_id}">client.projects.integrations.webhooks.<a href="./src/resources/projects/integrations/webhooks.ts">delete</a>(webhookIntegrationID, { ...params }) -> DeletedObject</code>

## Products

Types:

- <code><a href="./src/resources/projects/products.ts">Product</a></code>
- <code><a href="./src/resources/projects/products.ts">ProductType</a></code>
- <code><a href="./src/resources/projects/products.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/projects/products.ts">ProductPushToStoreResponse</a></code>

Methods:

- <code title="post /projects/{project_id}/products">client.projects.products.<a href="./src/resources/projects/products.ts">create</a>(projectID, { ...params }) -> Product</code>
- <code title="get /projects/{project_id}/products/{product_id}">client.projects.products.<a href="./src/resources/projects/products.ts">retrieve</a>(productID, { ...params }) -> Product</code>
- <code title="get /projects/{project_id}/products">client.projects.products.<a href="./src/resources/projects/products.ts">list</a>(projectID, { ...params }) -> ProductListResponse</code>
- <code title="delete /projects/{project_id}/products/{product_id}">client.projects.products.<a href="./src/resources/projects/products.ts">delete</a>(productID, { ...params }) -> DeletedObject</code>
- <code title="post /projects/{project_id}/products/{product_id}/create_in_store">client.projects.products.<a href="./src/resources/projects/products.ts">pushToStore</a>(productID, { ...params }) -> ProductPushToStoreResponse</code>

## Entitlements

Types:

- <code><a href="./src/resources/projects/entitlements/entitlements.ts">Entitlement</a></code>
- <code><a href="./src/resources/projects/entitlements/entitlements.ts">ListEntitlements</a></code>
- <code><a href="./src/resources/projects/entitlements/entitlements.ts">EntitlementListProductsResponse</a></code>

Methods:

- <code title="post /projects/{project_id}/entitlements">client.projects.entitlements.<a href="./src/resources/projects/entitlements/entitlements.ts">create</a>(projectID, { ...params }) -> Entitlement</code>
- <code title="get /projects/{project_id}/entitlements/{entitlement_id}">client.projects.entitlements.<a href="./src/resources/projects/entitlements/entitlements.ts">retrieve</a>(entitlementID, { ...params }) -> Entitlement</code>
- <code title="post /projects/{project_id}/entitlements/{entitlement_id}">client.projects.entitlements.<a href="./src/resources/projects/entitlements/entitlements.ts">update</a>(entitlementID, { ...params }) -> Entitlement</code>
- <code title="get /projects/{project_id}/entitlements">client.projects.entitlements.<a href="./src/resources/projects/entitlements/entitlements.ts">list</a>(projectID, { ...params }) -> ListEntitlements</code>
- <code title="delete /projects/{project_id}/entitlements/{entitlement_id}">client.projects.entitlements.<a href="./src/resources/projects/entitlements/entitlements.ts">delete</a>(entitlementID, { ...params }) -> DeletedObject</code>
- <code title="get /projects/{project_id}/entitlements/{entitlement_id}/products">client.projects.entitlements.<a href="./src/resources/projects/entitlements/entitlements.ts">listProducts</a>(entitlementID, { ...params }) -> EntitlementListProductsResponse</code>

### Actions

Methods:

- <code title="post /projects/{project_id}/entitlements/{entitlement_id}/actions/attach_products">client.projects.entitlements.actions.<a href="./src/resources/projects/entitlements/actions.ts">attachProducts</a>(entitlementID, { ...params }) -> Entitlement</code>
- <code title="post /projects/{project_id}/entitlements/{entitlement_id}/actions/detach_products">client.projects.entitlements.actions.<a href="./src/resources/projects/entitlements/actions.ts">detachProducts</a>(entitlementID, { ...params }) -> Entitlement</code>

## Offerings

Types:

- <code><a href="./src/resources/projects/offerings/offerings.ts">Offering</a></code>
- <code><a href="./src/resources/projects/offerings/offerings.ts">OfferingListResponse</a></code>

Methods:

- <code title="post /projects/{project_id}/offerings">client.projects.offerings.<a href="./src/resources/projects/offerings/offerings.ts">create</a>(projectID, { ...params }) -> Offering</code>
- <code title="get /projects/{project_id}/offerings/{offering_id}">client.projects.offerings.<a href="./src/resources/projects/offerings/offerings.ts">retrieve</a>(offeringID, { ...params }) -> Offering</code>
- <code title="post /projects/{project_id}/offerings/{offering_id}">client.projects.offerings.<a href="./src/resources/projects/offerings/offerings.ts">update</a>(offeringID, { ...params }) -> Offering</code>
- <code title="get /projects/{project_id}/offerings">client.projects.offerings.<a href="./src/resources/projects/offerings/offerings.ts">list</a>(projectID, { ...params }) -> OfferingListResponse</code>
- <code title="delete /projects/{project_id}/offerings/{offering_id}">client.projects.offerings.<a href="./src/resources/projects/offerings/offerings.ts">delete</a>(offeringID, { ...params }) -> DeletedObject</code>

### Packages

Types:

- <code><a href="./src/resources/projects/offerings/packages.ts">PackageListResponse</a></code>

Methods:

- <code title="post /projects/{project_id}/offerings/{offering_id}/packages">client.projects.offerings.packages.<a href="./src/resources/projects/offerings/packages.ts">create</a>(offeringID, { ...params }) -> Package</code>
- <code title="get /projects/{project_id}/offerings/{offering_id}/packages">client.projects.offerings.packages.<a href="./src/resources/projects/offerings/packages.ts">list</a>(offeringID, { ...params }) -> PackageListResponse</code>

## Packages

Types:

- <code><a href="./src/resources/projects/packages/packages.ts">Package</a></code>
- <code><a href="./src/resources/projects/packages/packages.ts">PackageProductAssociation</a></code>
- <code><a href="./src/resources/projects/packages/packages.ts">PackageListProductsResponse</a></code>

Methods:

- <code title="get /projects/{project_id}/packages/{package_id}">client.projects.packages.<a href="./src/resources/projects/packages/packages.ts">retrieve</a>(packageID, { ...params }) -> Package</code>
- <code title="post /projects/{project_id}/packages/{package_id}">client.projects.packages.<a href="./src/resources/projects/packages/packages.ts">update</a>(packageID, { ...params }) -> Package</code>
- <code title="delete /projects/{project_id}/packages/{package_id}">client.projects.packages.<a href="./src/resources/projects/packages/packages.ts">delete</a>(packageID, { ...params }) -> DeletedObject</code>
- <code title="get /projects/{project_id}/packages/{package_id}/products">client.projects.packages.<a href="./src/resources/projects/packages/packages.ts">listProducts</a>(packageID, { ...params }) -> PackageListProductsResponse</code>

### Actions

Types:

- <code><a href="./src/resources/projects/packages/actions.ts">EligibilityCriteria</a></code>

Methods:

- <code title="post /projects/{project_id}/packages/{package_id}/actions/attach_products">client.projects.packages.actions.<a href="./src/resources/projects/packages/actions.ts">attachProducts</a>(packageID, { ...params }) -> Package</code>
- <code title="post /projects/{project_id}/packages/{package_id}/actions/detach_products">client.projects.packages.actions.<a href="./src/resources/projects/packages/actions.ts">detachProducts</a>(packageID, { ...params }) -> Package</code>

## Subscriptions

Types:

- <code><a href="./src/resources/projects/subscriptions/subscriptions.ts">Country</a></code>
- <code><a href="./src/resources/projects/subscriptions/subscriptions.ts">MonetaryAmount</a></code>
- <code><a href="./src/resources/projects/subscriptions/subscriptions.ts">Ownership</a></code>
- <code><a href="./src/resources/projects/subscriptions/subscriptions.ts">Subscription</a></code>
- <code><a href="./src/resources/projects/subscriptions/subscriptions.ts">SubscriptionGetAuthenticatedManagementURLResponse</a></code>

Methods:

- <code title="get /projects/{project_id}/subscriptions/{subscription_id}">client.projects.subscriptions.<a href="./src/resources/projects/subscriptions/subscriptions.ts">retrieve</a>(subscriptionID, { ...params }) -> Subscription</code>
- <code title="get /projects/{project_id}/subscriptions">client.projects.subscriptions.<a href="./src/resources/projects/subscriptions/subscriptions.ts">list</a>(projectID, { ...params }) -> ListSubscriptions</code>
- <code title="get /projects/{project_id}/subscriptions/{subscription_id}/authenticated_management_url">client.projects.subscriptions.<a href="./src/resources/projects/subscriptions/subscriptions.ts">getAuthenticatedManagementURL</a>(subscriptionID, { ...params }) -> SubscriptionGetAuthenticatedManagementURLResponse</code>
- <code title="get /projects/{project_id}/subscriptions/{subscription_id}/entitlements">client.projects.subscriptions.<a href="./src/resources/projects/subscriptions/subscriptions.ts">listEntitlements</a>(subscriptionID, { ...params }) -> ListEntitlements</code>

### Transactions

Types:

- <code><a href="./src/resources/projects/subscriptions/transactions/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /projects/{project_id}/subscriptions/{subscription_id}/transactions">client.projects.subscriptions.transactions.<a href="./src/resources/projects/subscriptions/transactions/transactions.ts">list</a>(subscriptionID, { ...params }) -> TransactionListResponse</code>

#### Actions

Types:

- <code><a href="./src/resources/projects/subscriptions/transactions/actions.ts">SubscriptionTransaction</a></code>

Methods:

- <code title="post /projects/{project_id}/subscriptions/{subscription_id}/transactions/{transaction_id}/actions/refund">client.projects.subscriptions.transactions.actions.<a href="./src/resources/projects/subscriptions/transactions/actions.ts">refund</a>(transactionID, { ...params }) -> SubscriptionTransaction</code>

### Actions

Methods:

- <code title="post /projects/{project_id}/subscriptions/{subscription_id}/actions/cancel">client.projects.subscriptions.actions.<a href="./src/resources/projects/subscriptions/actions.ts">cancel</a>(subscriptionID, { ...params }) -> Subscription</code>
- <code title="post /projects/{project_id}/subscriptions/{subscription_id}/actions/refund">client.projects.subscriptions.actions.<a href="./src/resources/projects/subscriptions/actions.ts">refund</a>(subscriptionID, { ...params }) -> Subscription</code>

## Purchases

Types:

- <code><a href="./src/resources/projects/purchases/purchases.ts">Environment</a></code>
- <code><a href="./src/resources/projects/purchases/purchases.ts">Purchase</a></code>

Methods:

- <code title="get /projects/{project_id}/purchases/{purchase_id}">client.projects.purchases.<a href="./src/resources/projects/purchases/purchases.ts">retrieve</a>(purchaseID, { ...params }) -> Purchase</code>
- <code title="get /projects/{project_id}/purchases">client.projects.purchases.<a href="./src/resources/projects/purchases/purchases.ts">list</a>(projectID, { ...params }) -> ListPurchases</code>
- <code title="get /projects/{project_id}/purchases/{purchase_id}/entitlements">client.projects.purchases.<a href="./src/resources/projects/purchases/purchases.ts">listEntitlements</a>(purchaseID, { ...params }) -> ListEntitlements</code>

### Actions

Methods:

- <code title="post /projects/{project_id}/purchases/{purchase_id}/actions/refund">client.projects.purchases.actions.<a href="./src/resources/projects/purchases/actions.ts">refund</a>(purchaseID, { ...params }) -> Purchase</code>

## Metrics

Types:

- <code><a href="./src/resources/projects/metrics.ts">MetricGetOverviewResponse</a></code>

Methods:

- <code title="get /projects/{project_id}/metrics/overview">client.projects.metrics.<a href="./src/resources/projects/metrics.ts">getOverview</a>(projectID, { ...params }) -> MetricGetOverviewResponse</code>
