export const urls = {
    complicatedPage: "",
    loginPage: "/users/sign_in",
    accountLoginPage: "/index.php?rt=account/login",
    createAccountPage: "/index.php?rt=account/create",
    addToCart: (productId) => `/index.php?rt=r/product/product/addToCart&product_id=${productId}`,
    getCart: '/index.php?rt=r/product/product/addToCart',
    removeFromCart: (productId) => `/index.php?rt=checkout/cart&remove=${productId}`,
    addToWishlist: (productId) => `/index.php?rt=product/wishlist/add&product_id=${productId}`,
    getWishlist: `/index.php?rt=account/wishlist`,
    removedFromWishlist: (productId) => `/index.php?rt=product/wishlist/remove&product_id=${productId}`
}