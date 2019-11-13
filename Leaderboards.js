//Updates player leaderboards and statistics
handlers.updateLeaderboard = function (args, context){
	// Showing we are entering function
	log.info("UpdateLeaderboard -- Starting");
		
	var LeaderboardName = args.leaderboardname;
	var NewScore = args.newscore;
	var message = NewScore.toString();
	
	var playerStats = server.GetPlayerStatistics(
	{
		PlayFabId: currentPlayerId,
		StatisticNames: [LeaderboardName],
	});
	
	server.UpdatePlayerStatistics(
	{
	    PlayFabId: currentPlayerId,
	    Statistics: [{StatisticName: LeaderboardName, Value: NewScore}],
	});
	
	// Showing we are leaving function
	log.info("UpdateLeaderboard -- Leaving");
	return { playerStats.Statistics };
};

handlers.helloWorld = function (args, context) {
    
    // The pre-defined "currentPlayerId" variable is initialized to the PlayFab ID of the player logged-in on the game client. 
    // Cloud Script handles authenticating the player automatically.
    var message = "Hello " + currentPlayerId + "!";

    // You can use the "log" object to write out debugging statements. It has
    // three functions corresponding to logging level: debug, info, and error. These functions
    // take a message string and an optional object.
    log.info(message);
    var inputValue = null;
    if (args && args.inputValue)
        inputValue = args.inputValue;
    log.debug("helloWorld:", { input: args.inputValue });

    // The value you return from a Cloud Script function is passed back 
    // to the game client in the ExecuteCloudScript API response, along with any log statements
    // and additional diagnostic information, such as any errors returned by API calls or external HTTP
    // requests. They are also included in the optional player_executed_cloudscript PlayStream event 
    // generated by the function execution.
    // (https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_executed_cloudscript)
    return { messageValue: message };
};