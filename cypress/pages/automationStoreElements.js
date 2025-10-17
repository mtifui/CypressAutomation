export const mainPage = {
    pageLogo: "a.logo img",
    homeMenu: "a[class='active menu_home']",
    loginRegisterButton: "div[id='customernav'] a[href$='/login']",
}

export const loginPage = {
    loginInput: "div.input-group input[name='loginname']",
    passwordInput: "div.input-group input[name='password']",
    loginButton: "button[title='Login']",
    errorMessageContainer: "div[class='alert alert-error alert-danger']",
    pageTitle: "h1.heading1 span",
    continueButton: "button[title='Continue']"
}

export const accountPage = {
    welcomeHeader: "a[class='top menu_account'] div",
}

export const createAccountPage = {
    pageTitle: "h1 span.maintext",
    firstnameInput: "span.12234dasd",
    lastnameInput: "#AccountFrm_lastname",
    emailInput: "div.lkdaasknfd11",
    address1Input: "#AccountFrm_address_1",
    cityInput: "#AccountFrm_city",
    regionSelect: "#AccountFrm_zone_id",
    zipCodeInput: "#AccountFrm_postcode",
    countrySelect: "#AccountFrm_country_id",
    loginNameInput: "#AccountFrm_loginname",
    passwordInput: "#AccountFrm_password",
    passwordConfirmInput: "#AccountFrm_confirm",
    agreeToTermsCheckbox: "#AccountFrm_agree",
    continueButton: "button[title='Continue']"
}

export const categoriesNavigationBar = {
    makeupSubcategories: "li:has(> a[href*='product/category&path=36']) div.subcategories ul li a",
}
