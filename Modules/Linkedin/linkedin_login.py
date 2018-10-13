from selenium import webdriver
import config
import random
from time import sleep


def login_linked(linkedin_username=config.linkedin_username, linkedin_password=config.linkedin_password):
    driver = webdriver.Chrome("chromedriver.exe")
    driver.get('https://www.linkedin.com')

    username = driver.find_element_by_class_name('login-email')
    username.send_keys(linkedin_username)
    sleep(random.uniform(0, 1))

    password = driver.find_element_by_id('login-password')
    password.send_keys(linkedin_password)
    sleep(random.uniform(0, 1))

    sign_in_button = driver.find_element_by_xpath('//*[@type="submit"]')
    sign_in_button.click()
    sleep(random.uniform(0, 1))
    return driver
