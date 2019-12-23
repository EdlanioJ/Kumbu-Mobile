function prettyDate(time){
	var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
		diff = (((new Date()).getTime() - date.getTime()) / 1000),
		day_diff = Math.floor(diff / 86400);
			
	if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
		return;
			
	return day_diff == 0 && (
			diff < 60 && "agora" ||
			diff < 120 && "1 minuto atras" ||
			diff < 3600 && Math.floor( diff / 60 ) + " minutos atras" ||
			diff < 7200 && "1 hora atras" ||
			diff < 86400 && Math.floor( diff / 3600 ) + " horas atras") ||
		day_diff == 1 && "ontem" ||
		day_diff < 7 && day_diff + " dias atras" ||
		day_diff < 31 && Math.ceil( day_diff / 7 ) + " semanas atras";
}