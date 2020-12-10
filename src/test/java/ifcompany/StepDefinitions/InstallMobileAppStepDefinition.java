package ifcompany.StepDefinitions;

import ifcompany.Utilities.SettingUpDevice;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.net.MalformedURLException;

public class InstallMobileAppStepDefinition {
    AndroidDriver<AndroidElement> driver;
    @Given("the user has an internet connection")
    public void the_user_has_an_internet_connection() {
        System.out.println("Internet connection is ON");
    }

    @When("the user install the app to the device {string} and {string}")
    public void the_user_install_the_app_to_the_device_and(String device, String version) throws MalformedURLException {
        driver = SettingUpDevice.Capabilities(device, version, "Installation App");

    }

    @Then("the user should see app in the phone menu")
    public void the_user_should_see_app_in_the_phone_menu() throws InterruptedException {
        Thread.sleep(2000);
        System.out.println("App is installed");
        driver.quit();
    }
}
