Feature: Rookie Driver Native App Installation

  @smoke
  Scenario Outline: Installation of the app into different devices <model> <version>
    Given the user has an internet connection
    When the user install the app to the device "<model>" and "<version>"
    Then the user should see app in the phone menu



    Examples:
      | model                  | version |
    #  | Samsung Galaxy S9 Plus | 8.0     |
    #  | Samsung Galaxy Note 8  | 7.1     |
    #  | Google Nexus 6         | 5.0     |
      | Google Pixel 3         | 9.0     |