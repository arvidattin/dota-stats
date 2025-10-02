    export async function returnResults(accountId, days = 30, gameMode = 22, limit = 30) {
   // FIND ALL PLAYER MATCHES 
    const url = new URL(`https://api.opendota.com/api/players/${accountId}/matches`);
    url.searchParams.set("game_mode", String(gameMode));
    if (days) url.searchParams.set("date", String(days));
    url.searchParams.set("limit", String(limit));
  
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`Failed with ${res.status}`);
   
    // FILTER OUT THEIR IDS
    const matches = await res.json();   // <-- convert to JSON array
    const matchresults = [];

    for (const m of matches) {
        const isRadiant = m.player_slot < 128;
    if (isRadiant && m.radiant_win)  matchresults.push(1);
    else if (isRadiant && !m.radiant_win) matchresults.push(-1);
    else if (!isRadiant && m.radiant_win) matchresults.push(-1);
    else if (!isRadiant && !m.radiant_win) matchresults.push(1);
    }
   return matchresults;
}

   
  //https://api.opendota.com/api/players/${accountId}/matches`);
  //https://api.opendota.com/api/players/282749272/matches`);
  //accountId 282749272
//match id 8452580444
  
  // --- test runner ---
