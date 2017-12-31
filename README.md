# fhir-simple-schemas
FHIR Resources implemented with node-simple-schemas.    


#### Installation  

```bash
npm install -save fhir-simple-schemas
```

#### Usage    

```js
import { PatientSchema } from 'fhir-simple-schemas';

var patient = {
    "name": {
        "family": 'Doe',
        "given": ['Jane']
    },
    "identifier": [{
        "value": 123
    }]
};

isValid = PatientSchema.namedContext("myContext").validate(patientobj);
```

#### Datatypes      

**Base**  
**CodeableConcept**  
**Code**  
**Coding**  
**Conformance**  
**ContactPoint**  
**DomainResource**  
**Group**  
**HumanName**  
**Identifier**  
**Meta**  
**Narrative**  
**Period**  
**Quantity**  
**Range**  
**Ratio**  
**Reference**  
**SampledData**  
**Signature**  
**Timing**  

#### Schemas   

**AuditEvent**  
**CarePlan**  
**Device**  
**Endpoint**  
**Location**  
**Medication**  
**Organization**  
**Patient**  
**Practitioner**  
**Questionnaire**  
**QuestionnaireResponse**  

#### Notes & References (Delete Eventually)    
https://www.npmjs.com/package/node-simple-schema  
https://docs.npmjs.com/getting-started/creating-node-modules  
https://scotch.io/bar-talk/how-to-build-and-publish-a-npm-package  
https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738  
http://blog.teamtreehouse.com/build-npm-package  
https://www.guru99.com/node-js-modules-create-publish.html  
