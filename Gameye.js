
handlers.startGameyeServer = function (args, context) {
    const { Data: gameyeEnv } = server.GetTitleInternalData({
        Keys: ["gameye_token", "gameye_url"]
    });

    try {
        const createGameyeServerResult = http.request(gameyeEnv.gameye_url + "/action/start-match", 'post', JSON.stringify(args), 'application/json', { "Authorization": "Bearer " + gameyeEnv.gameye_token, "Content-type": "application/json" }, false);
        log.debug("Gameye server result", createGameyeServerResult);
        server.UpdateSharedGroupData({
            SharedGroupId: args.matchKey,
            Data: { MatchReady: true, MatchResult: createGameyeServerResult },
            Permission: "public",
        });
		log.debug(gameyeEnv.gameye_token);
        return { server: createGameyeServerResult };

    }
    catch (ex) {
        log.error("Exception", ex);
    }
}

handlers.getServerInfo = function (args, context) {
    const matchKey = args.matchKey;
    const { Data: gameyeEnv } = server.GetTitleInternalData({
        Keys: ["gameye_token", "gameye_url"]
    });

    try {
        const result = http.request(gameyeEnv.gameye_url + "/fetch/match", 'get', JSON.stringify({}), 'application/json', { "Authorization": "Bearer " + gameyeEnv.gameye_token, "Content-type": "application/json" }, false);
        const getGameyeMatchesResult = JSON.parse(result);
        log.debug(matchKey);
		log.debug(getGameyeMatchesResult);
        if (getGameyeMatchesResult.match[matchKey]) {
            return { server: getGameyeMatchesResult.match[matchKey] };
        } else {
            return { server: null };
        }
    }
    catch (ex) {
        log.error("Exception", ex);
    }
}

handlers.matchFound = function (args, context) {
    var psEvent = context.playStreamEvent;
    const matchId = psEvent.Payload.MatchId;
    log.debug("Got match", psEvent);
    try {
        server.CreateSharedGroup({ SharedGroupId: matchId });
        server.UpdateSharedGroupData({
            SharedGroupId: matchId,
            Data: { Creator: psEvent.Payload.TicketIds[0], Members: ps.Event.Payload.TicketIds.length },
            Permission: "public",
        });
    } catch (ex) {
        log.error("Exception", ex);
    }
};
