# -*- coding: utf-8 -*-

import linkedin_login
from parsel import Selector
from time import sleep
import sys
from flask import Flask,jsonify,request

reload(sys)
sys.setdefaultencoding('utf8')

app = Flask(__name__)



def validate_field(field):
    if field:
        return field.encode('utf-8').strip()
    else:
        field = ''
    return field


def get_info(linkedin_url,driver):
    driver.get(linkedin_url)
    sleep(3)
    sel = Selector(text=driver.page_source)
    name = validate_field(sel.xpath('//h1/text()').extract_first())
    job_title = validate_field(sel.xpath('//h2/text()').extract_first())
    school = sel.xpath('//*[starts-with(@class, "pv-top-card-section__school")]/text()').extract_first()
    if school:
        school = validate_field(school)
    location = validate_field(sel.xpath('//*[starts-with(@class, "pv-top-card-section__location")]/text()').extract_first())

    experiencesI = sel.xpath('//*[contains(@class,"pv-position-entity")]')
    experiences = []
    for e in experiencesI:



        try:
            experienceLinkExp = e.xpath('a').xpath('@href').extract()[0]
        except IndexError:
            experienceLinkExp = None

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

    print '\n'
    print 'Name: ' + name
    print 'Job Title: ' + job_title
    print 'School: ' + school
    print 'Location: ' + location
    print 'URL: ' + linkedin_url
    print('experiences', experiences)
    print('educations', educations)
    print '\n'


    try:

        driver.find_element_by_xpath('//span[text()="Connect"]').click()
        sleep(1)
        driver.find_element_by_xpath('//*[@class="button-primary-large ml1"]').click()
        sleep(1)

    except:
        pass
    return {
        "name":name,
        "job_title":job_title,
        "school":school,
        "location":location,
        "linkedin_url":linkedin_url,
        "experiences":experiences,
        "educations":educations
    }



@app.route('/modules/linkedin', methods=['POST'])
def index():
    if not request.json or not 'urls' in request.json:
        return jsonify({"error":"bad request"}), 400
    urls=request.json["urls"]
    profils=[]
    driver = linkedin_login.login_linked()
    for url in urls:
        profils.append(get_info(url,driver))
    driver.close()
    return jsonify(profils), 200

if __name__ == '__main__':
    app.run(debug=True,port=5003)