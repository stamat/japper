# JAPPER - JSON SCHEMA API DOCS renderer

The idea is to render the API docs from JSON SCHEMAs provided with no dependancies what so ever. To achieve this we will slightly need to expand the JSON SCHEMA keywords and introduce few new ones related to the API endpoint description but the JSON SCHEMA VALIDATION will be preserved. We can also create schemas for response validation and with it have means to create a system for testing an API. These schema files can also be used by the API itself for validating the input, or even automatic interface generation. Having the documentation schema files will also provide us the ability to track all the changes via the version control.

For the API Endpoint schema keywords we will provide a slight extension of the schema-07.
[JSON Schema Validation: Draft-07](http://json-schema.org/latest/json-schema-validation.html)

Each API Docs will have to have a manifest.json file which will contain title, logo, and API url.

List of schema files is generated through "index.py" script.

There will be three definition types:
* Endpoint schema - defines the API endpoints as we already covered
* Model schema - data model via the regular JSON schema
* Response schema - defines responses and examples for an endpoint

## Installation and Dependancies
You'll need the Python installed to run the python packaging script "index.py"

## Run
Run "index.py" then right click on index.html, open with your favorite browser.


## THE GLOAL
After some consideration I decided to move towards a solution that encompasses only one python standalone script that will output only one html file containing all the documentation. You will just enter the location of your schema files into the script and you'll get the output -> colorful easy readable API docs
