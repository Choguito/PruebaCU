const {Given, When, Then}= require("@cucumber/cucumber");

const LoginPage = require("../pages/login.page");
const PayPage = require("../pages/pay.page");

const pages = {
    login: LoginPage,
    Pay: PayPage,
};

Given(/^Estoy en la pagina Comprar Moneda Extranjera$/,async()=>){
    pages["login"].open();
    LoginPage.login("username","password");
    await pages["pay"],open();
    await PayPage.openPurchaseForeignCurrencyTab();
    };
Given(/^Selecciono la moneda".*"$/, async (currencyType)=>{
    const sellingRate = `1 dollar(${currencyType})=`;
    await PayPage.selectCurrencyTipe(currencyType);
    await expect(PayPage.labelSellingRate).toHaveTextContaining(sellingRate);
When (
/^trato de calcular el costo de conversion de "(.*)" USD$/
async (usdAmount) => {
await PayPage.setAmount(usdAmount);
}
);
Then (
/^veo el monto de conversion de "(.*)" USD a "(.*)"$/,
async (usdAmount, currencyType) =>{
    const conversionAmount = (${currencyType}) = $
    {usdAmount}.00 U.S. dollar {USD};
}

)
});
