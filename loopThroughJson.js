// GET data in a json file
async function getJSONFileAndLoop() {
  var identityIDs = [
    "113f5c0d-7241-43b9-bd7d-c101e5e445be",
    "e2c7b37f-6e8b-468a-bab2-8de3e429ec2c",
    "87de598b-46ed-429b-9d81-81ef5dcd56af",
    "96a345d4-426b-470b-bb68-f669d5fd8160",
    "7da6cf7e-c58c-432d-976a-42fe8558adf6",
    "9c73339f-7bba-43c1-8207-2cb23ae953cb",
    "68cf2496-3585-4b12-be9b-3156eaf3079d",
    "e0e7c87a-7c80-4283-b2ec-645b01fb8800",
    "62750feb-4355-4453-af1b-e0bea6976ac4",
    "608bee89-5444-4f02-ba70-7153d982774c",
    "dd4450e4-c1f6-430c-89ac-f81fcd7014a9",
  ]; // this can also be the json file data

  var identity; //declare but not assigned

  for (var i, i = 0; i < identityIDs.length; i++) {
    identity = identityIDs[i]; //assign an identity from the the identityIDs
    // then do something to identity

    // or randomly
    identity = Math.floor(Math.random() * identityIDs.length + (!i ? 0 : 1));
    // do something to identity
  }

  // but to get a json file and loop through it
  var url = "https://example.com/identityIDs.json";
  var request = await fetch(url); // this is a get request
  var json = await request.json(); //this gives the json file

  // then we can run a for loop depending on the json data returned
  // if json data  is an array
  for (var i, i = 0; i < json.length; i++) {
    identity = data[i]; //this gives the identityid at index i provided
  }

  // if typeof json data is a object
  for (key in json) {
    identiy = json[key];
    // do something to identiy
  }
}
