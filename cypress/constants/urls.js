export const urls = {
    complicatedPage: "",
    loginPage: "/users/sign_in",
    accountLoginPage: "/index.php?rt=account/login",
    createAccountPage: "/index.php?rt=account/create",
    addToCart: (productId) => `/index.php?rt=r/product/product/addToCart&product_id=${productId}`,
    getCart: '/index.php?rt=r/product/product/addToCart',
    removeFromCart: (productId) => `/index.php?rt=checkout/cart&remove=${productId}`
}