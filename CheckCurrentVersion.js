//Checks the players client version
handlers.updateLeaderboard = function (args, context){
	var response = 0;
	//Get values from payload
	var ClientVersion = args.version;
	
	if(ClientVersion==currentVersion){
		response=1;
	}

	return {result: response};
}