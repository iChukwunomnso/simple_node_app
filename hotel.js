/*
Author
*/ 

/*
Create three modules
1.  Book Reservations
2.  Pull Hotel Information
3.  Handle Client Information
*/

// DUMMY DATA
/*
var myHotel = 
Hotel('Hotel Lagos',
'10-20, Walker Avenue, Lekki, Lagos',
'+234 093 0201 333, 809 3209 344',
'Dr. Elvis Murray',
100;
'Presidential | Business | Casual | Family | Economy',
'rand[1,100]',
'price[100000, 60000, 40000, 20000, 10000]',
'feat['Pool', 'Gym', 'Bar', 'Restaurant', 'Night Club', 'Library', 'Conference Centre', 'Cab Service']');
*/

// First Module
class Hotel{
  constructor(mia) {
		this.mia = [];

  }
	getHotelInfo(i){
		return this.mia[i];
	}
	getHotelFeatures(i){
		return this.mia[9].featues.feat4;
	}
	getHotelFeatures(){
		return this.mia[9].features.feat2;
	}
}

var hotel_info = [
	{
		"name": "Hotel Lagos",
		"address": "10-20, Walker Avenue, Lekki, Lagos",
		"mobile": "+234 093 0201 333, 809 3209 344",
		"manager": "Dr. Jack Sparrow",
		"sumSuite": "100",
		"suiteType": {
									"type1": "Presidential",
									"type2": "Business",
									"type3": "Casual",
									"type4": "Family",
									"type5": "Economy"
								},
		"suiteNum": {
									"num1": "100",
									"num2": "140",
									"num3": "160",
									"num4": "180",
									"num5": "200",
							},
		"price": {
							"price1": "N1,000,000",
							"price2": "N600,000",
							"price3": "400,000", 
							"price4": "200,000", 
							"price5": "100,000"
						},
		"features":	{
									"feat1": "Pool", 
									"feat2": "Gym",
									"feat3": "Bar",
									"feat4": "Restaurant", 
									"feat5": "Night Club", 
									"feat6": "Library", 
									"feat7": "Conference Centre", 
									"feat8": "Cab Service"
								}
		}
	]

var request = new Hotel(getHotelInfo.hotel_info[1]);

	class Client{
		constructor(user) {
		this.name = [];
	}
	getClient(){
		return this.user;
	}
	getClient(i){
		return this.Client[1].name.addess;
	}
	getClient(i){
		this.addresses.push([info.address.street,info.address.suite,info.address.city,info.address.zipcode])
		}
}

var clients = [
							{
								name: "Mr. Daves Ovo",
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
																CabService: "Yes"}
							},
							{
								name: "Mr. Oluseyi Evaristus",
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
																CabService:"Yes"}
							},
							{
								name: "Ms. Bukola Oluwafemi",
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
																CabService:"Yes"}
							}
						];

var clientlist = new Client();