//Updates player leaderboards and statistics
handlers.updateLeaderboard = function (args, context){
	// Showing we are entering function
	log.info("UpdateLeaderboard -- Starting");
		
	server.UpdatePlayerStatistics(
	{
	    PlayFabId: currentPlayerId,
	    Statistics: [{StatisticName: args.LeaderboardName, Value: args.NewScore}],
	});
	
	// Showing we are leaving function
	log.info("UpdateLeaderboard -- Leaving");
};