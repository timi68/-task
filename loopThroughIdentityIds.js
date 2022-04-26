async function loopIdentities(identity) {
  const identityIDs = [
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
  ];

  /**
   * getting identity id randomly
   * var identity = identityIDs[Math.floor(Math.random() * identityIDs + 1)];
   */

  // looping through the identity arrays
  for (var i, i = 0; i < identityIDs.length; i++) {
    //
    const identity = identityIDs[i];
    let url = `https://api-internal-eks.eu-west.dev.systems/v1/member/${identity}/favourites`;

    let options = {
      method: "POST",
      body: {
        memberId: 007060,
        userId: 600007060,
        quantity: 1,
      },
      headers: {
        "Content-Type": "application/json",
        "x-version": "new",
      },
    };

    const data = await fetch(url, options);
    const response = await data.json();

    return response;
  }
}
