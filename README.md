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

[Address](https://www.hl7.org/fhir/datatypes.html#address)  
[Annotation](https://www.hl7.org/fhir/datatypes.html#annotation)  
[Attachment](https://www.hl7.org/fhir/datatypes.html#attachment)  
[Base]()    
[Coding](https://www.hl7.org/fhir/datatypes.html#codesystem)    
[CodeableConcept](https://www.hl7.org/fhir/datatypes.html#codeableconcept)  
[Conformance]()  
[ContactPoint](https://www.hl7.org/fhir/datatypes.html#contactpoint)    
[DomainResource](https://www.hl7.org/fhir/domainresource.html)    
[HumanName](https://www.hl7.org/fhir/datatypes.html#humanname)    
[Identifier](https://www.hl7.org/fhir/datatypes.html#identifier)    
[Meta](https://www.hl7.org/fhir/resource.html#meta)    
[Narrative]()  
[Period](https://www.hl7.org/fhir/datatypes.html#period)    
[Quantity](https://www.hl7.org/fhir/datatypes.html#quantity)    
[Range](https://www.hl7.org/fhir/datatypes.html#range)    
[Ratio](https://www.hl7.org/fhir/datatypes.html#ratio)    
[Reference](https://www.hl7.org/fhir/references.html#Reference)    
[SampledData](https://www.hl7.org/fhir/datatypes.html#sampleddata)    
[Signature](https://www.hl7.org/fhir/datatypes.html#signature)    
[Timing](https://www.hl7.org/fhir/datatypes.html#timing)    

#### Schemas   

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
