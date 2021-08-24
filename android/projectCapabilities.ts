import { RemoteOptions } from "webdriverio";

class ProjectCapabilities {

	private static webDriverPath: string = '/wd/hub';
	private static webDriverPort: number = 4723;


	static androidBaseCapabilities(appPackage: string = "com.android.contacts", appActivity: string = "com.android.contacts.activities.PeopleActivity", additionalCaps?: object): RemoteOptions {

		const desiredCapabilities = {
			platformName: "Android",
			deviceName: "Android Emulator",
			appPackage: appPackage,
			appActivity: appActivity,
			automationName: "UiAutomator2",
			...additionalCaps
		};

		return {
			path: this.webDriverPath,
			port: this.webDriverPort,
			capabilities: desiredCapabilities
		}
	}

}

export default ProjectCapabilities;