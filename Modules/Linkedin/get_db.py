# -*- coding: utf-8 -*-
import sys
from pymongo import MongoClient
import config

reload(sys)
sys.setdefaultencoding('utf8')


def get_db():
    client = MongoClient(
        config.mongo_host,
        username=config.mongo_username,
        password=config.mongo_password,
        authSource=config.mongo_db,
        authMechanism='SCRAM-SHA-1'
    )
    return client['tts_db']
