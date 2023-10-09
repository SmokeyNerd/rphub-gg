let currentTab = ".dashboard-page-container"
let MyName = ""
let PoliceRoster = ""
var isVisualBlip = false
RPHUB = {}
// RPHUB

$(document).ready(() => {

    document.onkeyup = function (data) {
      if (data.key == 'Escape') {
        console.log('[RpHUB.gg] Escape Button Pressed')
        $.post(`https://${GetParentResourceName()}/escape`, JSON.stringify({}));
      }
    };

    document.getElementById('close-hub').addEventListener('click', function() {
      $.post(`https://${GetParentResourceName()}/escape`, JSON.stringify({}));
    });

    document.getElementById('hub-home').addEventListener('click', function() {
      $.post(`https://${GetParentResourceName()}/hubHome`, JSON.stringify({}));
    });

    document.getElementById('user-home').addEventListener('click', function() {
      $.post(`https://${GetParentResourceName()}/userHome`, JSON.stringify({}));
    });

    // document.getElementById('process-timeclock').addEventListener('click', function() {
    //     let dept = document.getElementById('dept-code').value;
    //     $.post(`https://${GetParentResourceName()}/processClock`, JSON.stringify({
    //         subhubCode: dept
    //     }));
    // });


    // on ready
    // add event listener
    // on click
    // send post with json data
    // https://${GetParentResourceName()}/updateServer

    // JSON.stringify({
    //         id: $(this).data("info"),
    //         time: new Date().getTime()
    // })

    // $(".update-server").on("click", ".report-delete", function () {
    //     $(".reports-items").find("[data-id='" + $(this).data("info") + "']").remove();
    //     $.post(`https://${GetParentResourceName()}/deleteReport`, JSON.stringify({
    //         id: $(this).data("info"),
    //         time: new Date().getTime()
    //     }));
    // });

    // function JobColors(sentJob) {
    //     currentJob = sentJob
    //     console.log(sentJob + '---sent');
    //     if (sentJob) {
    //         if (sentJob == 'police') {
    //             $(".roster-iframe").attr("src", PoliceRoster);
    //         } else if (sentJob == "publicrecords") {
    //             $(".roster-iframe").attr("src", PoliceRoster);
    //         }
    //     }
    // }

    window.addEventListener('message', function (event) {
        let e = event.data;
        let myIframe = document.getElementById('site-iframe')

        // console.log('^8[RpHUB.gg]^0 -> ^6[JSMSG]^0 -> ^2['+e.type+']');
        if (e.type == "show") {
            if (e.enable == true) {
                isVisualBlip = false
                $("body").fadeIn(0);
                $(".page-container").fadeIn(0);
            } else {
                $("body").slideUp(250);
            }
        } else if (e.type == "data") {
            console.log('^8[RpHUB.gg]^0 -> ^6[CJS]^0 -> ^2[DISCORD]^0 -> ^6['+e.discord+']');
            $(".name-shit").html(e.name)
            $(".discord-id").html(e.discord)
            $(".header-location").html(" " + e.location)
            MyName = e.fullname
        } else if (e.type == "refreshSite") {
            siteLink = e.data
        } else if (e.type == "process") {
            console.log('[RpHUB.gg] Clock In Process Complete')
        } else if (e.type == 'login') {
            let fivemuser = e.discord
            let fivempass = e.pass
            console.log('[RpHUB.gg] [JS] -> '+fivemuser+'-'+fivempass)
            myIframe.contentWindow.postMessage(JSON.stringify({
                discord: fivemuser,
                pass: fivempass
            }), '*');
        } else if (e.type == 'fivemHubStart') {
            console.log('^8[RpHUB.gg]^0 -> ^6[JS]^0 -> ^2[fivemHubStart]^0 -> ^6[LOAD]^0');
            $.post(`https://${GetParentResourceName()}/fivemHubStart`, JSON.stringify({}));
        } else if (e.type == 'fivemHub') {
            console.log('^8[RpHUB.gg]^0 -> ^6[JS]^0 -> ^2[fivemHub]^0 -> ^6['+e.discord+']^0');
            let discordUser = e.discord;
            let myIframe = document.getElementById('site-iframe');
            myIframe.contentWindow.postMessage(discord=discordUser, '*');
        } else if (e.type == 'escape') {
            console.log('[RpHUB.gg] Escape Button Pressed')
            $.post(`https://${GetParentResourceName()}/escape`, JSON.stringify({}));
        } else if (e.type == 'siteHome') {
            console.log('[RpHUB.gg] Site Home')
            siteLink = e.site
            $(".site-iframe").attr("src", siteLink);
        } else if (e.type == 'openLink') {
            console.log('[RpHUB.gg] openLink')
            siteLink = e.site
            if(siteLink) {
              $(".site-iframe").attr("src", siteLink);
            }
        } else if (e.type == 'serverCitizenship') {
            console.log('[RpHUB.gg] serverCitizenship')
            siteLink = e.site
            $(".site-iframe").attr("src", siteLink);
        } else if (e.type == 'OpenSkinRPHub') {
            console.log(e.sid)
            $.post(`https://${GetParentResourceName()}/OpenSkinRPHub`, JSON.stringify({
                sid: e.sid
            }));
        } else if (e.type == 'loadPlayers') {
            console.log('^8[RpHUB.gg]^0 -> ^6[CJS]^0 -> ^2[loadPlayers]^0');
            $.post(`https://${GetParentResourceName()}/loadPlayers`, JSON.stringify({}));
        } else if (e.type == 'completeLoadPlayers') {
            let playerlist = e.players
            playerlist = JSON.stringify({playerlist})
            console.log('^8[RpHUB.gg]^0 -> ^6[CJS]^0 -> ^2[completeLoadPlayers]^0 ');
            myIframe.contentWindow.postMessage(JSON.stringify({type: "completeLoadPlayers", players: playerlist}), '*');
        } else if (e.type == 'loadItems') {
            console.log('^8[RpHUB.gg]^0 -> ^6[CJS]^0 -> ^2[loadItems]^0');
            $.post(`https://${GetParentResourceName()}/loadItems`, JSON.stringify({}));
        } else if (e.type == 'completeLoadItems') {
            let itemList = e.items
            itemList = JSON.stringify({itemList})
            console.log('^8[RpHUB.gg]^0 -> ^6[CJS]^0 -> ^2[completeLoadItems]^0 ');
            myIframe.contentWindow.postMessage(JSON.stringify({type: "completeLoadItems", items: itemList}), '*');
        } else if (e.type == 'giveItem') {
            console.log('^8[RpHUB.gg]^0 -> ^6[CJS]^0 -> ^2[giveItem]^0 ');
            itemCode = e.itemCode;
            $.post(`https://${GetParentResourceName()}/giveItem`, JSON.stringify({
                itemCode: itemCode
            }));
        } else if (e.type == 'complete_giveItem') {
            let itemCode = e.itemCode
            itemCode = JSON.stringify({itemCode})
            console.log('^8[RpHUB.gg]^0 -> ^6[CJS]^0 -> ^2[complete_giveItem]^0 ');
            // myIframe.contentWindow.postMessage(JSON.stringify({type: "completeLoadItems", items: itemList}), '*');
        } else if (e.type == 'loadVehicles') {
            console.log('^8[RpHUB.gg]^0 -> ^6[CJS]^0 -> ^2[loadVehicles]^0');
            $.post(`https://${GetParentResourceName()}/loadVehicles`, JSON.stringify({}));
        } else if (e.type == 'completeloadVehicles') {
            let vehicleList = e.vehicles
            vehicleList = JSON.stringify({vehicleList})
            console.log('^8[RpHUB.gg]^0 -> ^6[CJS]^0 -> ^2[completeloadVehicles]^0')
            myIframe.contentWindow.postMessage(JSON.stringify({type: "completeloadVehicles", vehicles: vehicleList}), '*');
        } else if (e.type == 'loadJobs') {
            console.log('^8[RpHUB.gg]^0 -> ^6[CJS]^0 -> ^2[loadJobs]^0');
            $.post(`https://${GetParentResourceName()}/loadJobs`, JSON.stringify({}));
        } else if (e.type == 'completeloadJobs') {
            let jobList = e.jobs
            jobList = JSON.stringify({jobList})
            console.log('^8[RpHUB.gg]^0 -> ^6[CJS]^0 -> ^2[completeloadJobs]^0');
            myIframe.contentWindow.postMessage(JSON.stringify({type: "completeloadJobs", jobs: jobList}), '*');
        }
    });

    function test() {
        // AdminPanel.Refresh = function(data) {
            RPHUB.PlayerList = $.parseJSON(data.playerlist);
            $("#playersonlinebar").css({"width": (RPHUB.PlayerList.length / RPHUB.MaxPlayers) * 100});
            $("#mainplayerlist2").empty();
            var timestamp = Date.now()
            var date = new Date(timestamp);
            const hours =  date.getHours() % 12 || 12;
            const fulldate = date.getDate()+
                  "/"+(date.getMonth()+1)+
                  "/"+date.getFullYear()+
                  " "+hours+
                  ":"+date.getMinutes()+
                  ":"+date.getSeconds();
            document.getElementById('refresh_date').innerHTML = '<b>Last Updated:</b> ' + fulldate;

            $(".pag").prop({colspan: 5});  // Hack to fix the pagination not having full width

            // if(RPHUB.EditingPlayerInfo && RPHUB.EditingPlayerId) {
            //     RPHUB.EditingPlayerInfo = RPHUB.PlayerList[parseInt(editingplayerindex)];
            //     RPHUB.SetupPlayerInfo();
            // }
        // }
    }
})
