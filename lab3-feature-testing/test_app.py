from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

try:
    driver.get("http://localhost:3000/")

    assert "Feature Flag Testing Application" in driver.page_source

    print("Test 1 Passed: Application loaded successfully")

    driver.get("http://localhost:3000/feature")

    assert "Welcome Feature is ENABLED!" in driver.page_source

    print("Test 2 Passed: Feature flag is enabled")

finally:
    driver.quit()
