#!/bin/bash

PROJECT='556de5df90e4bd4b830558a9'
APIKEY='3f73e9b467551efbaf43f809b10d7cb11c3098603a45336b83ae24b4d20551f2773f517dc3f758a76ea99e3bf198da1b49c7336f1f1f2649208e8618e55cb62704861a9e3e8cefb274563da1a0b4bb514b16c7d315a6c5beb23247e665a395bd3a9a6c7ae9c607807aae8be06570a2d3'


curl "http://api.keen.io/3.0/projects/$PROJECT/events/charge?api_key=$APIKEY" -H "Content-Type: application/json" -d @charge1.json
curl "http://api.keen.io/3.0/projects/$PROJECT/events/charge?api_key=$APIKEY" -H "Content-Type: application/json" -d @charge2.json
curl "http://api.keen.io/3.0/projects/$PROJECT/events/charge?api_key=$APIKEY" -H "Content-Type: application/json" -d @charge3.json
curl "http://api.keen.io/3.0/projects/$PROJECT/events/charge?api_key=$APIKEY" -H "Content-Type: application/json" -d @charge4.json
curl "http://api.keen.io/3.0/projects/$PROJECT/events/charge?api_key=$APIKEY" -H "Content-Type: application/json" -d @charge5.json
curl "http://api.keen.io/3.0/projects/$PROJECT/events/charge?api_key=$APIKEY" -H "Content-Type: application/json" -d @charge6.json
curl "http://api.keen.io/3.0/projects/$PROJECT/events/charge?api_key=$APIKEY" -H "Content-Type: application/json" -d @charge7.json
curl "http://api.keen.io/3.0/projects/$PROJECT/events/charge?api_key=$APIKEY" -H "Content-Type: application/json" -d @charge8.json
curl "http://api.keen.io/3.0/projects/$PROJECT/events/charge?api_key=$APIKEY" -H "Content-Type: application/json" -d @charge9.json
curl "http://api.keen.io/3.0/projects/$PROJECT/events/charge?api_key=$APIKEY" -H "Content-Type: application/json" -d @charge10.json
