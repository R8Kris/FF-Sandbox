//Updates player leaderboards and statistics
function UpdateLeaderboard(PlayerId, LeaderboardName, NewScore){
	// Showing we are entering function
	log.info("UpdateLeaderboard -- Starting");
		
	server.UpdatePlayerStatistics(
	{
	    PlayFabId: playerId,
	    Statistics: [{StatisticName: LeaderboardName, Value: NewScore}],
	});
	
	// Showing we are leaving function
	log.info("UpdateLeaderboard -- Leaving");
}