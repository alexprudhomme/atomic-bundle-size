import { buildCommerceEngine } from "@coveo/headless/commerce";

export const commerceEngine = buildCommerceEngine({
  configuration: {
    organizationId: "searchuisamples",
    environment: "prod",
    accessToken: "xx564559b1-0045-48e1-953c-3addd1ee4457",
    analytics: {
      trackingId: "sports-ui-samples",
    },
    context: {
      language: "en",
      country: "US",
      currency: "USD",
      view: {
        url: "https://sports.barca.group/search",
      },
    },
  },
});
