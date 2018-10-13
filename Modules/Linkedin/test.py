import linkedin_login
from parsel import Selector
from time import sleep
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait # available since 2.4.0
from selenium.webdriver.support import expected_conditions as EC
import sys
def validate_field(field):
    if field:
        return field.encode('utf-8').strip()
    else:
        field = ''
    return field

reload(sys)
sys.setdefaultencoding('utf8')
linkedin_url="https://www.linkedin.com/in/walid-alouani-6a219798"
driver=linkedin_login.login_linked()
driver.get(linkedin_url)

SCROLL_PAUSE_TIME = 0.2
i=100
while True:
    driver.execute_script("window.scrollTo(0, "+str(i)+");")
    i=i+100
    new_height = driver.execute_script("return document.body.scrollHeight")
    if new_height<=i:
        break
    sleep(SCROLL_PAUSE_TIME)

while True:
    try:
        driver.execute_script("return document.getElementsByClassName('pv-profile-section__see-more-inline link')[2].click()")
        sleep(SCROLL_PAUSE_TIME)

    except:
        break
while True:
    try:
        driver.execute_script("return document.getElementsByClassName('pv-profile-section__see-more-inline link')[3].click()")
        sleep(SCROLL_PAUSE_TIME)
    except:
        break
try:
    driver.execute_script("document.getElementsByClassName('pv-profile-section__card-action-bar pv-skills-section__additional-skills artdeco-container-card-action-bar')[0].click()")
except:
    pass
sel = Selector(text=driver.page_source)
name = validate_field(sel.xpath('//h1/text()').extract_first())
job_title = validate_field(sel.xpath('//h2/text()').extract_first())
school = sel.xpath('//*[starts-with(@class, "pv-top-card-section__school")]/text()').extract_first()
if school:
    school = validate_field(school)
location = validate_field(sel.xpath('//*[starts-with(@class, "pv-top-card-section__location")]/text()').extract_first())
picture=''
try :
    picture = sel.xpath('//*[contains(@class,"pv-top-card-section__photo presence-entity__image EntityPhoto-circle-8 ember-view")]').xpath('@style').extract()[0]
    picture=picture[23:-3]
except:
    pass

skillsI = sel.xpath('//*[contains(@class,"pv-skill-category-entity__name")]')
skills = []
for s in skillsI:
    try :
        skills.append(s.xpath('a').xpath('span/text()').extract()[0])
    except :
        pass


experiencesI = sel.xpath('//*[contains(@class,"pv-position-entity")]')
experiences = []
for e in experiencesI:



    try:
        experienceLinkExp = e.xpath('a').xpath('@href').extract()[0]
    except IndexError:
        experienceLinkExp = picture

    try:
        roleExp = e.xpath('a').xpath('*/h3/text()').extract()[0]
    except IndexError:
        roleExp = None

    try:
        dateEmployedRangeExp = e.xpath('a').xpath('*/h4[contains(@class,"pv-entity__date-range")]/span/text()').extract()[1]
    except IndexError:
        dateEmployedRangeExp = None


    try:
        nameCompanyExp = e.xpath('a').xpath('*/h4/span[@class="pv-entity__secondary-title"]/text()').extract()[0]
    except IndexError:
        nameCompanyExp = None

    try:
        locationExp = e.xpath('a').xpath('*/h4[contains(@class,"pv-entity__location")]/span/text()').extract()[1]
    except IndexError:
        locationExp = None




    experience = {'experience_link': validate_field(experienceLinkExp),
                    'role': validate_field(roleExp),
                    'date_employed_range': validate_field(dateEmployedRangeExp),
                    'name_company': validate_field(nameCompanyExp),
                    'location': validate_field(locationExp),
                    }
    experiences.append(experience)

educationsI = sel.xpath('//*[contains(@class,"pv-education-entity")]')
educations = []
for ed in educationsI:
    education = {
        'education_link': validate_field(ed.xpath('a').xpath('@href').extract()[0]) if len(ed.xpath('a').xpath('@href').extract()) > 0 else None,
        'school_name': validate_field(ed.xpath('a').xpath('div/div[contains(@class,"pv-entity__degree-info")]/h3/text()').extract()[0]) if len(ed.xpath('a').xpath('div/div[contains(@class,"pv-entity__degree-info")]/h3/text()').extract()) > 0 else None,
        'degree_name': validate_field(ed.xpath('a').xpath('div/div[contains(@class,"pv-entity__degree-info")]/p/span/text()').extract()[1]) if len(ed.xpath('a').xpath('div/div[contains(@class,"pv-entity__degree-info")]/p/span/text()').extract()) > 1 else None,
        'date': validate_field(ed.xpath('a').xpath('div/p/span').xpath('time/text()').extract()[0]+'-'+ed.xpath('a').xpath('div/p/span').xpath('time/text()').extract()[1] if len(ed.xpath('a').xpath('div/p/span').xpath('time/text()').extract()) > 1 else None)

                    }
    educations.append(education)

linkedin_url = driver.current_url
name = validate_field(name)
job_title = validate_field(job_title)
school = validate_field(school)
location = validate_field(location)
linkedin_url = validate_field(linkedin_url)


try:

    driver.find_element_by_xpath('//span[text()="Connect"]').click()
    sleep(1)
    driver.find_element_by_xpath('//*[@class="button-primary-large ml1"]').click()
    sleep(1)

except:
    pass

print len(experiences)
print len(educations)
print len(skills)
print name
print job_title
print school
print location
print experiences
print educations
print skills
print picture

