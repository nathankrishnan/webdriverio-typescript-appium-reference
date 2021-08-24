import { Browser, Element } from "webdriverio";

// Wait up to 5 seconds
const MAX_ELEMENT_WAIT_THRESHOLD_MS = 5000;

async function findElement(driver: Browser<"async">, elementLocator: string, timeout: number = MAX_ELEMENT_WAIT_THRESHOLD_MS) {
	const element: Element<"async"> = await driver.$(elementLocator);
	await element.waitForExist({
		timeout: timeout
	});
	return element;
}

async function tapElement(driver: Browser<"async">, elementLocator: string, timeout: number = MAX_ELEMENT_WAIT_THRESHOLD_MS) {
	const element: Element<"async"> = await findElement(driver, elementLocator, timeout);
	return element.click();
}

async function setValueOfElement(driver: Browser<"async">, elementLocator: string, value: string, timeout: number = MAX_ELEMENT_WAIT_THRESHOLD_MS) {
	const element: Element<"async"> = await findElement(driver, elementLocator, timeout);
	await element.setValue(value)
}

export { tapElement, setValueOfElement };