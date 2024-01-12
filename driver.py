from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Kroger credentials
# Retrieve the values from environment variables
username = os.getenv("EMAIL")
password = os.getenv("PASSWORD")
print(username)

# Initialize the Chrome driver with options
chrome_options = Options()
# Add a custom User-Agent header
chrome_options.add_argument(
    "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3")
driver = webdriver.Chrome(options=chrome_options)

''' Login on Ralphs.com '''
driver.get("https://www.ralphs.com/")

# Head to the login page
driver.find_element(By.ID, "WelcomeButton-A11Y-FOCUS-ID").click()

welcome_signin_button = WebDriverWait(driver, 30).until(
    EC.visibility_of_element_located(
        (By.CSS_SELECTOR, '[data-testid="WelcomeMenuButtonSignIn"]')
    )
)

welcome_signin_button.click()


signin_name = WebDriverWait(driver, 30).until(
    EC.visibility_of_element_located((By.ID, "signInName"))
)

driver.implicitly_wait(300)


# # Find username/email field and send the username itself to the input field
# driver.find_element("id", "signInName").send_keys(username)
# # Find password input field and insert password as well
# driver.find_element("id", "password").send_keys(password)
# # Click the login button
# driver.find_element("id", "next").click()

# ''' Navigate to receipts '''
# # Open dropdown menu from profile name and icon
# # Wait for the element to be present on the page
# welcome_button = WebDriverWait(driver, 30).until(
#     EC.visibility_of_element_located((By.ID, "WelcomeButton-A11Y-FOCUS-ID"))
# )

# # Click the element
# welcome_button.click()

# # driver.find_element(By.ID, "WelcomeButton-A11Y-FOCUS-ID").click()

# # Open up purchases
# # driver.find_element("href", "/mypurchases").click()
