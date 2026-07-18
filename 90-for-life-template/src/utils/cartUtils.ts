/**
 * Utility functions for handling shopping cart functionality
 */

/**
 * Creates a shopping cart URL with the specified products
 * @param products Array of product objects with code and quantity
 * @param sponsorId The sponsor ID to include in the cart URL
 * @param redirectUrl Optional URL to redirect to after checkout
 * @returns Complete cart URL
 */
export const createCartUrl = (
  products: Array<{code: string, quantity: number}>,
  sponsorId: string = "DISTRIBUTOR_ID", // This should be replaced with the actual distributor ID
  redirectUrl: string = "http://dailywithdoc.com/thank-you"
): string => {
  // Base URL for the cart
  let baseUrl = "https://ygy1.com/customer-checkout/v1.3/";
  
  // Add sponsor ID
  let url = `${baseUrl}?sponsorid=${sponsorId}`;
  
  // Add each product to the URL
  products.forEach((product, index) => {
    url += `&item-${index + 1}=${product.code}|${product.quantity}`;
  });
  
  // Add additional parameters
  url += `&destroy=1&ga_id=UA-20019232-44&redirect=${encodeURIComponent(redirectUrl)}`;
  
  return url;
};

/**
 * Adds a single product to cart and redirects to checkout
 * @param productCode The product code to add
 * @param quantity Quantity to add
 */
export const addToCart = (productCode: string, quantity: number = 1): void => {
  const url = createCartUrl([{code: productCode, quantity}]);
  window.open(url, '_blank');
};

/**
 * Adds multiple products to cart and redirects to checkout
 * @param products Array of product objects with code and quantity
 */
export const addMultipleToCart = (products: Array<{code: string, quantity: number}>): void => {
  const url = createCartUrl(products);
  window.open(url, '_blank');
};

/**
 * Product codes for 90 For Life products
 */
export const PRODUCT_CODES = {
  // 90 For Life products
  HEALTHY_BODY_START_PAK_ORIGINAL: "10245",
  HEALTHY_BODY_START_PAK_2_0: "10282",
  HEALTHY_BODY_START_PAK_2_5: "10282Q",
  BASIC_MIGHTY_90: "KT0001"
};
