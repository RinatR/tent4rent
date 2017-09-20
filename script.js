var linkGeneralHasUrlEncode = decodeURI(linkGeneral) !== linkGeneral,
 		links = ['https://www.volkswagen.ru/ru/models/polo.html?s_trk=','https://www.volkswagen.ru/app/configurator/vw-ru/ru/?s_trk=', 'https://www.volkswagen.ru/app/dccforms/vw-ru/test-drive/ru/?s_trk=']; 	
 	
	 if (linkGeneralHasUrlEncode) {
	 	link1= linkGeneral + encodeURIComponent('&dp=' + encodesafe64(links[0]));
	 	link2= linkGeneral + encodeURIComponent('&dp=' + encodesafe64(links[1]));
	 	link3= linkGeneral + encodeURIComponent('&dp=' + encodesafe64(links[2]));

	 } else {
	 	link1 =linkGeneral + '&dp=' + encodesafe64(links[0]);
	 	link2 =linkGeneral + '&dp=' + encodesafe64(links[1]);
	 	link3 =linkGeneral + '&dp=' + encodesafe64(links[2]);
	 
	 }	

	function encodesafe64(data2encode) {
	 var retdata = window.btoa(data2encode);
	 retdata = retdata.replace(/\//g, '_');
	 retdata = retdata.replace(/\+/g, '-');
	 retdata = retdata.replace(/=/g, '*');
	 return retdata;
	 }
	
	 var baseScriptUrl = "https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=rsb&c=28&pli=22489968&PluID=0&w=240&h=400&ord="+rnd+"&ncu=$$![sdt1]$$&LineID=$$";

     var clicks = "click1=" + link1 + "|" +
                  "click2=" + link2 + "|" +
                  "click3=" + link3;

    clicks = encodeURIComponent(clicks);

     baseScriptUrl += clicks + "$$";

     document.write("<scr"+ "ipt src='"+baseScriptUrl+"'></scr"+"ipt>");
