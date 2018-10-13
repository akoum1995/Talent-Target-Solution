#! /usr/bin/python
import requests
from flask import Flask,jsonify,request
from time import sleep



app = Flask(__name__)
# functions
numAccounts=0
indexAccounts=0

def callCustomsearchApi(start, query, account):
    url = 'https://www.googleapis.com/customsearch/v1'
    params = {
        'key': account[indexAccounts]['key'],
        'cx': account[indexAccounts]['cx'],
        'q': query,
        'start': start
    }
    response = requests.get(url, params=params)
    if ('items' in response.json()):
        profils = [item['link']for item in response.json()['items']]
        for p in profils:
            print(p)
        res = {'startIndex': response.json()['queries']['request'][0]['startIndex'], 'profils': profils}
        return {'data': res, 'next': response.json(),'profils':profils}
    elif ('error' in response.json() and response.json()["error"]["errors"][0]["domain"]=="usageLimits"):
        global indexAccounts
        if (indexAccounts==numAccounts-1):
            return False
        else:
            indexAccounts=indexAccounts+1
            callCustomsearchApi(start, query, account)

    return False







@app.route('/search-engine/google', methods=['POST'])
def index():
    if not request.json or not 'countries' in request.json or not 'tags' in request.json or not 'account' in request.json or not 'url' in request.json:
        return jsonify({"error":"bad request"}), 400
    else:
        countries=request.json['countries']
        tags=request.json['tags']
        account=request.json['account']
        url=request.json['url']
        accounts=[]
        global numAccounts
        for i in account:
            if i['url']==url:
                accounts.append(i)
        numAccounts=len(accounts)
        queries=[]
        stringTag=[]
        URLs=[]

        for country in countries:
            for tag in tags:
                queries.append(url+' AND "'+tag+'" AND "'+country+'"')

        if accounts:
            for obj in queries:
                res1 = callCustomsearchApi('1', obj,accounts)
                if res1 is False:
                    continue
                while ('nextPage' in res1['next']['queries']) is True:
                    URLs=URLs+res1["profils"]
                    res1 = callCustomsearchApi(
                        res1['next']['queries']['nextPage'][0]['startIndex'], obj,accounts
                        )
                    if res1 is False:
                        break
            URLs = list(set(URLs))
        return jsonify(
            {'countries': countries},
            {'tags': tags},
            {'URLs': URLs},
            {'queries': queries}
            ), 200

if __name__ == '__main__':
    app.run(debug=True,port=5002)