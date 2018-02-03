
# fhir-schemas
FHIR Resources implemented with `json-schemas` and some backwards support for `simpl-schema`.  The purpose of this package is to a) make the HL7 FHIR json-schemas available on NPM, and b) start migrating Meteor apps off of `meteor-simple-schema`.  Roughly speaking, the SimpleSchemas correspond to either `v1.6.0` of DST2, and the JsonSchemas correspond to `v3.0.1` or `STU3`.  


### Installation  

```bash
# the core schema libraries
npm install -save fhir-schemas

# if you're running a Meteor app, you'll also want to install the following conversion utility
meteor npm install -save fhir-schemas
meteor add bshamblen:json-simple-schema
```


### JsonSchema Usage    
Going forward, we recommend the Json Schama format, which is the official schema published by the HL7 FHIR working groups, has [low-level Mongo support](https://docs.mongodb.com/manual/core/schema-validation/#json-schema), and has cross-platform support across a wide rage of Node/NPM apps.  



**Client**  
```js
//-------------------------------------------------------------
// Schema Validation

import { FhirApi } from 'fhir-schemas';
import { Ajv } from 'ajv';

var ajv = new Ajv({schemas: FhirApi });

var validate = ajv.getSchema('http://hl7.org/fhir/json-schema/Patient');

var newPatient = {
    "resourceType": "Patient",
    "name": [{
        "family": 'Doe',
        "given": ['Jane']
    }],
    "identifier": [{
        "value": '123'
    }]
};

var isValid = validate(newPatient);

//-------------------------------------------------------------
// Server


import MongoClient from 'mongodb';
import { PatientSchema } from 'fhir-schemas';

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) { 
    const db = client.db(dbName);
 
    db.createCollection("Patients", {
        validator: {
            $jsonSchema: PatientSchema
        }
    });

    if(isValid){
        console.log("newPatient is valid...");

        // Insert some documents
        db.collection('CurrentPatients').insertMany([
            newPatient
        ], function(err, result) {
            console.log("Inserted newPatient into the CurrentPatients collection");
        });
    } else {
        console.log("newPatient isn't valid...");
        console.log(validate.errors);
    }

    client.close();
});



//-------------------------------------------------------------
// Auto Forms 
// This is still experimental, and may not work.  

import React, { Component } from "react";
import { render } from "react-dom";

import Form from "react-jsonschema-form";

import { FhirApi, PatientSchema } from 'fhir-schemas';

const log = (type) => console.log.bind(console, type);

render((
  <Form schema={ PatientSchema }
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
), document.getElementById("app"));


var simpleSchema = jsonSchema.toSimpleSchema();
```


**Server - Meteor**  

The following is an example for Meteor apps.  
```js
import { PatientSchema } from 'fhir-schemas';

// JSONSchema is provided as a global, since it's loaded from Atmosphere package repository
var jsonSchema = new JSONSchema(PatientSchema);

// convert to simple schema
var simpleSchema = jsonSchema.toSimpleSchema();

// create our server side cursor
CurrentPatients = new Mongo.Collection('CurrentPatients');

// and attach the cursor
CurrentPatients.attachSchema(SimpleSchemas.PatientSchema);

// for debugging
var props = jsonSchema.toSimpleSchemaProps();
console.log('props', props)
```

#### Json Schemas  

We provide Json Schemas for all of the following resources.  
[FHIR Resource Index](https://www.hl7.org/fhir/resourcelist.html)        



#### Notes & References 
https://github.com/bshamblen/meteor-json-simple-schema  

https://docs.mongodb.com/manual/core/schema-validation/#json-schema  
https://docs.mongodb.com/manual/reference/command/collMod/#dbcmd.collMod  
https://github.com/mozilla-services/react-jsonschema-form  
https://tools.ietf.org/html/draft-zyp-json-schema-04  
