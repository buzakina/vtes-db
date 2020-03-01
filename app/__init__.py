#!/usr/bin/env python3

from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecretkey1234567890'

from app.search import search
app.register_blueprint(search)
