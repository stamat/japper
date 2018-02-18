# JAPPER - JSON SCHEMA API DOCS renderer

The idea is to render the API docs from JSON SCHEMAs provided with no dependancies what so ever. To achieve this we will slightly need to expand the JSON SCHEMA keywords and introduce few new ones related to the API endpoint description. We can also create schemas for response validation and with it have means to create a system for testing an API. These schema files can also be used by the API itself for validating the input, or even automatic interface generation. Having the documentation schema files will also provide us the ability to track all the changes via the version control.

For the API Endpoint schema keywords we will provide a slight extension of the schema-07.
[JSON Schema Validation: Draft-07](http://json-schema.org/latest/json-schema-validation.html)

Each API Docs will have to have a manifest.json file which will contain list of  schema files, title, logo, and links to MD files: Description and Installation.

List of schema files can be added manually or by running an index.py script.

There will be three definition types:
* Endpoint schema - defines the API endpoints as we already covered
* Model schema - data model via the regular JSON schema
* Response schema - defines responses and examples for an endpoint

## Install
There is no installation, no hosting and no mandatory dependancies. To make your job easier it is desired for you to have Python installed.

## Run
Right click on index.html, open with your favorite browser.
