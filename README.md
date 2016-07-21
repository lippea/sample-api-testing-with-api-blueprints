# sample-api-testing-with-api-blueprints
Sample API Testing with API Blueprints against http://jsonplaceholder.typicode.com/

Steps to run
1. Install Dredd https://github.com/apiaryio/dredd
2. Run "dredd get-posts.apib http://jsonplaceholder.typicode.com/" in command line

Troubleshooting:
Install the tool failed on windows:
- Install VS Community 2013(not 2015) and run "npm config set msvs_version 2013 --global".
Running cases get error "\t" or "\r" isn't currently supported
- Replace "\t" with "    " and replace "\r" with "". Refer to https://github.com/apiaryio/snowcrash/issues/29 for more detail.
- I normally use notepad++ replace with extended search mode
