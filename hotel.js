/*
Author: @iChukwunomnso;
Title: Hotel Reservation App;
Client: MIA Hospitalitis;
Date: 29th July, 2018;
Time: 12:18PM;
Version: 1.0;
*/ 

/*
Create three modules
  Book Reservations
  Pull Hotel Information
  Handle Client Information
*/

// First Module
class Hotel{
  constructor(name, address, manager, contact, suiteTotal, suiteTypes, suiteNum, suitePrice, suiteFeatures) {
    this.name = "name";
    this.address = "address";
    this.manager = "manager";
    this.contact = "contact";
    this.suiteTotal = "suiteTotal";
    this.suiteType = "suiteType";
    this.suiteNum = "suiteNum";
    this.suitePrice = "suitePrice";
    this.suiteFeatures = "suiteFeatures";
    }
    bookHotel(){
      return "Welcome to Hotel Lagos";
    }
    hotelFeatures(){
      if (this.hotelFeatures===true) {
        return "Mr. Valentine, you have limited priviledges";
      } else {
        return "Please, proceed to your";
      }
    }
}
var myHotel = {name:"MIA",
              address: "Lagos Island, Lekki, Lagos, Nigeria, Africa",
              manager: "Dr. Jack Sparrow",
              contact: "+234 093 0201 333", 
              suiteTotal: 500, 
              suiteTypes: {
                type1: "Presidential",
                type2: "Business",
                type3: "Family",
                type4: "Casual",
                type5: "Economy"
              }, 
              suiteNum: {
                num1: 100<=120,
                num2: 121<=140,
                num3: 141<=160,
                num4: 161<=180,
                num5: 181<=200
              }, 
              suitePrice: {
                price1: 500000,
                price2: 300000,
                price3: 200000,
                price4: 100000,
                price: 50000
              },
              suiteFeatures: {
                feat1: "Pool",
                feat2: "Gym",
                feat3: "Bar",
                feat4: "Restaurant",
                feat5: "Club",
                feat6: "Library",
                feat7: "Conference Hall",
                feat8: "Cab Service"
              }
            };

// console.log(myHotel);

function Client(name, address, mobile, suiteType, suiteNum, suitePrice, suiteFeatures) {
    this.name = "name";
    this.address = "address";
    this.mobile = "contact";
    this.suiteType = "suiteType";
    this.suiteNum = "suiteNum";
    this.suitePrice = "suitePrice";
    this.suiteFeatures = "suiteFeatures";
  }

// Clients Information

var client1 = {name: "Mr. Daves Ovo",
              addess: "21 Adesanya Estate",
              contact: "+234 2875692354",
              suiteType: "Business",
              suiteNum: "127",
              suitePrice: "N150,000",
              suiteFeatures: {Pool:"Yes",
                              Gym: "Yes",
                              Bar: "No",
                              Restaurant: "Yes",
                              Club: "No", 
                              Library: "Yes",
                              ConferenceCentre: "Yes", 
                              CabService: "Yes"}};

var client2 = {name: "Mr. Oluseyi Evaristus",
              addess: "2 Ojuelegba Garden City, Lagos",
              contact: "+234 807 5432 394",
              suiteType: "Casual",
              suiteNum: "150",
              suitePrice: "N100,000",
              suiteFeatures: {Pool: "No",
                              Gym: "Yes",
                              Bar: "No",
                              Restaurant: "Yes",
                              Club: "No", 
                              Library: "Yes",
                              ConferenceCentre: "No", 
                              CabService:"Yes"}};

var client3 = {name: "Ms. Bukola Oluwafemi",
              addess: "2 Ajegunle Estate, Gbagada, Lagos",
              contact: "+234 802 8431 350",
              suiteType: "Economy",
              suiteNum: "115",
              suitePrice: "N50,000",
              suiteFeatures: {Pool: "No",
                              Gym: "No",
                              Bar: "No",
                              Restaurant: "Yes",
                              Club: "No", 
                              Library: "Yes",
                              ConferenceCentre: "No", 
                              CabService:"Yes"}};

//  MODULE 3 - Pull Client List
var clientList = [client1, client2, client3];

// console.log(client1.name);
// console.log(clientList);
// console.log(client.name);
// console.log(client);
// console.log(client1.suiteFeatures);
console.log(clientList[2]);