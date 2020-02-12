//Updates player leaderboards and statistics
handlers.convertRegionsToLocations = function (args, context){
	var response = "";
	//Get values from payload
	var Regions = args.regions;


	for (const iterator of Regions) {
        switch (iterator) {
            case "NorthEurope":
				return { messageValue: ["stockholm"] };

            case "WestEurope":
				return { messageValue: ["frankfurt", "amsterdam", "london"] };

            case "AustraliaEast":
            case "AustraliaSoutheast":
            case "SoutheastAsia":
				return { messageValue: ["singapore"] };

            case "BrazilSouth":
				return { messageValue: ["sao_paulo"] };

            case "NorthCentralUs":
            case "CentralUs":
            case "SouthCentralUs":
				return { messageValue: ["dallas"] };

            case "ChinaEast2":
            case "ChinaNorth2":
            case "EastAsia":
            case "JapanEast":
            case "JapanWest":
				return { messageValue: ["hong_kong"] };

            case "EastUs":
            case "EastUs2":
				return { messageValue: ["washington_dc"] };

            case "SouthAfricaNorth":
				return { messageValue: ["madrid"] };

            case "WestUs":
				return { messageValue: ["san_jose"] };
        }
    }

    return { messageValue: ["whocares"] };

};

