# billtask
Takes file and parameters as input , uploads files to storage and saves parameters to DB 

index.html :- Seperate dummy form to access the API

API :- Currently has only one route '/incoming_bill'

  --It accepts bill file and it's respective parameters as input in form of post request

  --Stores the file to a seperate location

  --Saves the parameters to the a table in greenplum DB
