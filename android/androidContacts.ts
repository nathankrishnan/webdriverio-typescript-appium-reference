import { remote, RemoteOptions, Browser } from "webdriverio";
import ProjectCapabilities from "./projectCapabilities";
import AndroidContacts from "./viewObjects/androidContacts";
import { tapElement, setValueOfElement } from "./utils";


describe('Android Contacts App Test', function () {
	let driver: Browser<"async">;
	this.timeout(40000);

	before(async function () {
		const remoteOptions: RemoteOptions = ProjectCapabilities.androidBaseCapabilities();
		driver = await remote(remoteOptions);
	});

	it('Add new contact', async function () {

		// Tap the floating action button
		await tapElement(driver, AndroidContacts.locators.floatingActionButton);

		// Provide a First and Last name to the input fields
		// then tap the save button
		await setValueOfElement(driver, `android=${AndroidContacts.locators.firstNameTextField}`, "Satoshi");
		await setValueOfElement(driver, `android=${AndroidContacts.locators.lastNameTextField}`, "Nakamoto");
		await tapElement(driver, AndroidContacts.locators.saveButton);

		// Tap the options menu button
		await tapElement(driver, `android=${AndroidContacts.locators.moreOptionsMenuButon}`);

		// Tap the delete button
		await tapElement(driver, `android=${AndroidContacts.locators.moreOptionsMenuDeleteButton}`);

		// Tap the delete confirmation button
		await tapElement(driver, `android=${AndroidContacts.locators.deleteContactConfirmationButton}`);

	});

	after(async function () {
		await driver.deleteSession();
	});

});