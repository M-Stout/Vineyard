function updateWCTime() {
	now      = new Date();
	kickoff  = Date.parse("July 2, 2015 20:00:00 EDT");
	diff = kickoff - now;

	days  = Math.floor( diff / (1000*60*60*24) );
	hours = Math.floor( diff / (1000*60*60) );
	mins  = Math.floor( diff / (1000*60) );
	secs  = Math.floor( diff / 1000 );

	dd = days;
	hh = hours - days  * 24;
	mm = mins  - hours * 60;
	ss = secs  - mins  * 60;

  
    if(dd <= 0){
      document.getElementById("countdown2")
            .innerHTML =
              'Party at Salty&#39;s Bakery in: <br> progress or in the past!'
    } else {
        document.getElementById("countdown2")
            .innerHTML =
              'Party at Salty&#39;s Bakery in: <br>' +
                dd + ' days ' +
                hh + ' hours ' +
                mm + ' minutes ' +
                ss + ' seconds';
    }
}
setInterval(updateWCTime, 1000 );