package ifcompany.StepDefinitions;


import ifcompany.Utilities.ConfigurationReader;
import ifcompany.Utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

import java.util.concurrent.TimeUnit;


public class Hooks {

    @Before
    public void setUp(){
        System.out.println("\tthis is coming from BEFORE");

      /*  String browser = ConfigurationReader.get("browser");
       if(!browser.contains("mobile")){
        Driver.get().manage().window().maximize();
       }
        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);*/

    }


    @After
    public void tearDown(Scenario scenario){
      /*  if (scenario.isFailed()){

            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot,"image/png","screenshot");
        }*/


    }


}
