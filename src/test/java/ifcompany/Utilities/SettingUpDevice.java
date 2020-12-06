package ifcompany.Utilities;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.remote.MobileCapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class SettingUpDevice {
    static AndroidDriver<AndroidElement> driver;

    public static AndroidDriver<AndroidElement> Capabilities(String deviceModel,String version,String testCaseName) throws MalformedURLException {

        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("browserstack.user",ConfigurationReader.get("password"));
        capabilities.setCapability("browserstack.key",ConfigurationReader.get("key"));
        capabilities.setCapability("app",ConfigurationReader.get("app"));
        capabilities.setCapability("device",deviceModel);
        capabilities.setCapability("os_version",version);
        capabilities.setCapability("project", "First Java Project");
        capabilities.setCapability("build", "Java Android");
        capabilities.setCapability("name", testCaseName);


        driver = new AndroidDriver<>(new URL("http://hub.browserstack.com/wd/hub"),capabilities);

        return driver;

    }

    /*
    AndroidDriver<AndroidElement> driver = new AndroidDriver<AndroidElement>(
            new URL("http://hub.browserstack.com/wd/hub"), caps)
     */
}
