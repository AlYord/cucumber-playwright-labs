Feature: Buy some clothes from the online store
    Background:
        Given Alexander opens the website
        Given Alexander logs in
        When Alexander goes to the products section
    
    Scenario: User is buying a Sauce Labs Backpack
        Then Alexander adds a "Sauce Labs Backpack" to the cart
        Then "Sauce Labs Backpack" is in the cart

    Scenario: User is buying a Sauce Labs Bike Light
        Then Alexander adds a "Sauce Labs Bike Light" to the cart
        Then "Sauce Labs Bike Light" is in the cart

    Scenario: User is buying a Sauce Labs Bolt T-Shirt
        Then Alexander adds a "Sauce Labs Bolt T-Shirt" to the cart
        Then "Sauce Labs Bolt T-Shirt" is in the cart

    Scenario: User is buying a Sauce Labs Fleece Jacket
        Then Alexander adds a "Sauce Labs Fleece Jacket" to the cart
        Then "Sauce Labs Fleece Jacket" is in the cart

    Scenario: User is buying a Sauce Labs Onesie
        Then Alexander adds a "Sauce Labs Onesie" to the cart
        Then "Sauce Labs Onesie" is in the cart

    Scenario: User is buying a Red T-Shirt
        Then Alexander adds a "Test.allTheThings() T-Shirt (Red)" to the cart
        Then "Test.allTheThings() T-Shirt (Red)" is in the cart

    Then The activity is reset
