export class Init {
  load() {
    if (localStorage.getItem('medicines') === null || localStorage.getItem('medicines') == undefined) {
      console.log("Creating the initial set of medicines ...");
      var medicines = [
        {
          id: 1,
          name: "Medicine1",
          manufacturer: "Manufacturer1",
          batchno: "A1",
          type: "Capsule",
          expiry: "2019-02-19",
          price: 88
        },
        {
          id: 2,
          name: "Medicine2",
          manufacturer: "Manufacturer2",
          batchno: "A2",
          type: "Tablet",
          expiry: "2018-11-04",
          price: 32
        },
        {
          id: 3,
          name: "Medicine3",
          manufacturer: "Manufacturer3",
          batchno: "A3",
          type: "Syrup",
          expiry: "2018-09-09",
          price: 556
        }
      ];
      var medicines = [
        {
          id: 1,
          name: "Medicine1",
          manufacturer: "Manufacturer1",
          batchno: "A1",
          type: "Capsule",
          expiry: "2019-02-19",
          price: 88
        },
        {
          id: 2,
          name: "Medicine2",
          manufacturer: "Manufacturer2",
          batchno: "A2",
          type: "Tablet",
          expiry: "2018-11-04",
          price: 32
        },
        {
          id: 3,
          name: "Medicine3",
          manufacturer: "Manufacturer3",
          batchno: "A3",
          type: "Syrup",
          expiry: "2018-09-09",
          price: 556
        }
      ];
      localStorage.setItem('medicines', JSON.stringify(medicines));
    }
    else {
      console.log("Loaded the medicines from local storage ...");
    }
  }
}
