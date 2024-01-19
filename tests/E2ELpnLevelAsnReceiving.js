import { Selector } from "testcafe";
import minimist from 'minimist'
fixture('Login MAWM')
.page('https://fsgis.sce.manh.com/udc/dm/facility-console');

const args =minimist(process.argv.slice(2));
const num =args.env;

test('1 Receiving', async t => {
    console.log("Test Receiving Started");
    await t.typeText(Selector('#login-username'), 'macysdev-adminuser') 
    .pressKey('enter')
    .typeText(Selector('#login-password'), 'L1Admin2024$')
    .pressKey('enter')
    .wait(20000);
    await t.click(Selector('#home-page-navbar > ion-toolbar > ion-menu-toggle > ion-button'));
    await t.typeText(Selector('#menu-search > input'), 'WM Mobile');
    await t.click(Selector('#wmMobile > ion-label'));
    await t.click(Selector('ion-label[data-component-id=receiving]'));
    await t.click(Selector('ion-item[data-component-id="manuallpnreceiving"] ion-label[class="menu-label sc-ion-label-md-h sc-ion-label-md-s md hydrated"]'));
    await t.typeText(Selector('input[placeholder="Scan Location"]'), 'SA01D001').pressKey('enter');
    await t.typeText(Selector('input[placeholder="Scan LPN"]'), '9800001000887aAuto'+num).pressKey('enter').wait(5000);
    console.log("Test Receiving Ended");
});


test('2 Sorting Test', async t => {
    console.log("Test Sorting Started");
    await t.typeText(Selector('#login-username'), 'macysdev-adminuser') 
    .pressKey('enter')
    .typeText(Selector('#login-password'), 'L1Admin2024$')
    .pressKey('enter')
    .wait(20000);
    await t.click(Selector('#home-page-navbar > ion-toolbar > ion-menu-toggle > ion-button'));
    await t.typeText(Selector('#menu-search > input'), 'WM Mobile');
    await t.click(Selector('#wmMobile > ion-label'));
    await t.click(Selector('ion-label[data-component-id="sorting"]'));
    await t.click(Selector('ion-item[data-component-id="beautyprepsort"] ion-label[class="menu-label sc-ion-label-md-h sc-ion-label-md-s md hydrated"]'));
    await t.typeText(Selector('input[placeholder="Scan Container"]'),  '9800001000887aAuto'+num).pressKey('enter');
    await t.typeText(Selector('input[placeholder="Scan Pallet"]'), 'PLT009988ii887766554').pressKey('enter').wait(5000);
    console.log("Test Sorting Ended");
});


test('3 Putaway Test', async t => {
    console.log("Test Putaway Started");
    await t.typeText(Selector('#login-username'), 'macysdev-adminuser') 
    .pressKey('enter')
    .typeText(Selector('#login-password'), 'L1Admin2024$')
    .pressKey('enter')
    .wait(20000);
    await t.click(Selector('#home-page-navbar > ion-toolbar > ion-menu-toggle > ion-button'));
    await t.typeText(Selector('#menu-search > input'), 'WM Mobile');
    await t.click(Selector('#wmMobile > ion-label'));
    await t.click(Selector('ion-label[data-component-id="putaway"]'));
    await t.click(Selector('ion-item[data-component-id="beautyactiveputaway"] ion-label[class="menu-label sc-ion-label-md-h sc-ion-label-md-s md hydrated"]'));
    await t.typeText(Selector('input[placeholder="Scan Container"]'), '9800001000887aAuto'+num).pressKey('enter').wait(5000);;
    // await t.typeText(Selector('input[placeholder="Scan Pallet"]'), 'PLT009988ii887766554').pressKey('enter');
    console.log("Test Putaway Ended");
    
});