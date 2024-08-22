Feature: Add some clothes to the cart and checkout
    Background:
        Given Alexander opens the website
        Given Alexander logs in
        When Alexander goes to the products section

    Scenario: User is adding items to the cart
        Then Alexander adds a "Sauce Labs Backpack" to the cart
        Then Alexander adds a "Sauce Labs Bike Light" to the cart
        Then "Sauce Labs Backpack" is in the cart
        Then "Sauce Labs Bike Light" is in the cart
        When Alexander checkouts the cart
        Then The order is dispatched

