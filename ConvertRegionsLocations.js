//Updates player leaderboards and statistics
handlers.convertRegionsToLocations = function (args, context){
	var response = "";
	//Get values from payload
	var Regions = args.regions;


	for (const iterator of Regions) {
        switch (iterator) {
            case "NorthEurope":
            case "WestEurope":
				return { messageValue: ["frankfurt"] };
				
			case "NorthCentralUs":
            case "CentralUs":
            case "SouthCentralUs":
				return { messageValue: ["dallas"] };
				
			case "EastUs":
            case "EastUs2":
				return { messageValue: ["washington_dc"] };
				
			case "WestUs":
				return { messageValue: ["san_jose"] };

			case "BrazilSouth":
				return { messageValue: ["washington_dc"] };
				
            case "AustraliaEast":
            case "AustraliaSoutheast":
				return { messageValue: ["san_jose"] };
			
            case "SoutheastAsia":
				return { messageValue: ["frankfurt"] };

            case "ChinaEast2":
            case "ChinaNorth2":
			case "EastAsia":
				return { messageValue: ["frankfurt"] };
            
            case "JapanEast":
            case "JapanWest":
				return { messageValue: ["san_jose"] };

            case "SouthAfricaNorth":
				return { messageValue: ["san_jose"] };
        }
    }

    return { messageValue: ["frankfurt"] };

};

