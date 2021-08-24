import { Browser } from "webdriverio";

class AndroidContacts {
	public static locators = {
		floatingActionButton: "id:com.android.contacts:id/floating_action_button",
		firstNameTextField: "new UiSelector().text(\"First name\")",
		lastNameTextField: "new UiSelector().text(\"Last name\")",
		saveButton: "id:com.android.contacts:id/editor_menu_save_button",
		moreOptionsMenuButon: "new UiSelector().description(\"More options\")",
		moreOptionsMenuDeleteButton: "new UiSelector().text(\"Delete\")",
		deleteContactConfirmationButton: "new UiSelector().text(\"DELETE\")"
	}

}

export default AndroidContacts;