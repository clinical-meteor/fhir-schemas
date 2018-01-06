import MongoClient from 'mongodb';
# fhir-schemas
FHIR Resources implemented with `json-schemas` and `node-simple-schemas`.  The purpose of this package make the HL7 FHIR json-schemas available on NPM, as well as to start migrating Meteor apps off of `meteor-simple-schema`.  


### Installation  

```bash
# the core schema libraries
npm install -save fhir-schemas

# if you're running a Meteor app, you'll also want to install the following conversion utility
meteor add bshamblen:json-simple-schema
```


### JsonSchema Usage    
Going forward, we recommend the Json Schama format, which is the official schema published by the HL7 FHIR working groups, has [low-level Mongo support](https://docs.mongodb.com/manual/core/schema-validation/#json-schema), and has cross-platform support across a wide rage of Node/NPM apps.     

**Server - Meteor**  

The following is an example for Meteor apps.  
```js
import { Patient as PatientSchema } from 'fhir-simple-schemas';

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

**Server - Node**  
```js
import MongoClient from 'mongodb';
import { Patient as PatientSchema } from 'fhir-simple-schemas';


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

    client.close();
});
```

**Client**  
```js
import React, { Component } from "react";
import { render } from "react-dom";

import Form from "react-jsonschema-form";

import { Patient as PatientSchema } from 'fhir-simple-schemas';

const log = (type) => console.log.bind(console, type);

render((
  <Form schema={PatientSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
), document.getElementById("app"));


var simpleSchema = jsonSchema.toSimpleSchema();


//-------------------------------------------------------------
// General Node Apps

import Ajv from 'ajv';
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
var validate = ajv.compile(PatientSchema);

var newPatient = {
    "name": {
        "family": 'Doe',
        "given": ['Jane']
    },
    "identifier": [{
        "value": 123
    }]
};

var isValid = validate(newPatient);
if(isValid){
    CurrentPatients.insert(newPatient);
}
```

### SimpleSchema Usage    
For backwards compatibility, we offer a limited number of FHIR resources in SimpleSchema format.  These can be either imported directly into Meteor apps and used with the [aldeed:collection2-core](https://atmospherejs.com/aldeed/collection2-core) package, or in Node apps using the [node-simple-schema](https://www.npmjs.com/package/node-simple-schema) package.  

```js
import { SimpleSchemas } from 'fhir-simple-schemas';

CurrentPatients = new Mongo.Collection('CurrentPatients');
CurrentPatients.attachSchema(SimpleSchemas.PatientSchema);

var newPatient = {
    "name": {
        "family": 'Doe',
        "given": ['Jane']
    },
    "identifier": [{
        "value": 123
    }]
};

var isValid = SimpleSchemas.PatientSchema.namedContext("myContext").validate(patientobj);
if(isValid){
    CurrentPatients.insert(newPatient);
}
```

#### Json Schemas  

We provide Json Schemas for all of the following resources.  
[FHIR Resource Index](https://www.hl7.org/fhir/resourcelist.html)        


#### SimpleSchemas   

[AuditEvent](https://www.hl7.org/fhir/auditevent.html)    
[CarePlan](https://www.hl7.org/fhir/careplan.html)    
[Device](https://www.hl7.org/fhir/device.html)    
[Endpoint](https://www.hl7.org/fhir/endpoint.html)    
[Location](https://www.hl7.org/fhir/location.html)    
[Medication](https://www.hl7.org/fhir/medication.html)    
[Observation](https://www.hl7.org/fhir/observation.html)    
[Organization](https://www.hl7.org/fhir/organization.html)    
[Patient](https://www.hl7.org/fhir/patient.html)    
[Practitioner](https://www.hl7.org/fhir/practitioner.html)    
[Questionnaire](https://www.hl7.org/fhir/questionnaire.html)    
[QuestionnaireResponse](https://www.hl7.org/fhir/questionnaireresponse.html)    

#### Notes & References (Delete Eventually)    
https://www.npmjs.com/package/node-simple-schema  
https://docs.npmjs.com/getting-started/creating-node-modules  
https://scotch.io/bar-talk/how-to-build-and-publish-a-npm-package  
https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738  
http://blog.teamtreehouse.com/build-npm-package  
https://www.guru99.com/node-js-modules-create-publish.html  

https://github.com/bshamblen/meteor-json-simple-schema  

https://docs.mongodb.com/manual/core/schema-validation/#json-schema  
https://docs.mongodb.com/manual/reference/command/collMod/#dbcmd.collMod  
https://github.com/mozilla-services/react-jsonschema-form  
https://tools.ietf.org/html/draft-zyp-json-schema-04  