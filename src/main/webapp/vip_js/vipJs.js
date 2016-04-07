/**
 * Created by yustymenko on 25.01.2016.
 */
$(document).ready(function() {
	var etalonArray = new Array();
	var arrayForDraw;
	var forRemoveReklama;
	var forRemoveFromDBReklama;
	var canRemoveReklama;

	var arrayReklamaForUpdateDB;
	var lastDATA;

	var gClidReklamaText;
	var gClidVideoText;
	var audio = new Audio('ring.mp3');

	var fromSeoDropDown = false;

	test2();

	function test2() {
		//var my_video = getLinkVideo(72574);
		// //JSON.parse(my_video);
		//var t = JSON.stringify(my_video);
		//console.log(t);

		var video = new Array();
		var videoId = 72574;
		$.ajax({
			type: "GET",
			async: false,
			url: "vip_js/video.xml",
			dataType: "xml",
			success: function(xml) {
				 //console.log(xml);
				$(xml).find('allVideo').each(function(){
					//$(this).find('videos[id="' + 72574 + '"]').each(function(){
					$(this).find('videos[id="' + videoId + '"]').each(function(){
						var videoObj = {};
						$(this).find('video').each(function(){
							var url = $(this).find('url').text();
							videoObj.url = $(this).find('url').text();
							videoObj.img = $(this).find('img').text();
							videoObj.type = $(this).find('type').text();
							videoObj.title = $(this).find('title').text();
							videoObj.source = $(this).find('source').text();
							video.push(videoObj);
						});

					});

				});
			}
		});

		console.log(video);
	}

	test();
	function test() {

		var prevDate = "2/1/2016";
		var lastDate = moment().format('l');
		var twoDaysBefore = moment().subtract('days', 2).format('l');

		console.log(moment(prevDate).isAfter(twoDaysBefore));
		console.log(twoDaysBefore);

		var reklArray = getLinkReklama();
		console.log(reklArray);
		for (var i = 0; i < reklArray.length; i++) {
			$('#ulReklamaList').append("<li>" + "<input type='checkbox' class='forDDCheckBox' value='" + reklArray[i].img + "'/>" + reklArray[i].img + "</li>");
		}
	}

	$('#applyFilter').click(function() {

		forRemoveReklama = new Array();
		var selector = $(".multiSel").find('span');
		for (var mSel = 0; mSel < selector.length; mSel++) {
			forRemoveReklama.push(selector[mSel].title);
		}

		console.log(forRemoveReklama);
	});

	$('#apply').click(function() {

		var taskId = $('#taskIdVip').val();
		//var taskId = 72574;
		var countOfVideo = $('#countOfVideo').val();
		var countOfReklama = $('#countOfReklama').val();
		var countOfMove = $('#countOfMove').val();
		//var countOfVideo = 5;

		var dataJson = {
			id: taskId.toString(),
			count: countOfVideo
		};

		//$.ajax({
		//	type: "POST",
		//	url: "/getLinkVideo",
		//	data: dataJson,
		//	success: function(json) {
		//		//hour = json.hour;
		//		//minute = json.minute;
		//		//
		//		//$('#timeHour').val(hour);
		//		//$('#timeMinute').val(minute);
        //
		//		console.log(json);
		//	},
		//	dataType: "json"
		//});

		var video = getLinkVideo(taskId);
		var baseArray = new Array();
		//for (var i = 0; i < countOfVideo; i++) {
		//	var ran1 = Math.floor(Math.random() * (video.length));
		//	baseArray.push(video[ran1]);
		//	video.splice(ran1, 1);
		//}
		$.ajax({
			type: "POST",
			url: "/getLinkVideo",
			async: false,
			data: dataJson,
			success: function(json) {
				//hour = json.hour;
				//minute = json.minute;
				//
				//$('#timeHour').val(hour);
				//$('#timeMinute').val(minute);

				baseArray = json.video;
			},
			dataType: "json"
		});


		//var foreignFlag = $('#foreignVideo').prop("checked");

		var allReklama = getLinkReklama();
		console.log("-allReklama-")
		console.log(allReklama);
		//console.log('-forRemoveFromDBReklama-');
		//console.log(forRemoveFromDBReklama);
		console.log('===============-=canRemoveReklama=-==================');

		for (var j=0; j < forRemoveFromDBReklama.length; j++) {
			canRemoveReklama.push(forRemoveFromDBReklama[j]);
		}
		console.log(canRemoveReklama);



		var withoutDbReklama = new Array();
		console.log()
		for (var i=0; i < allReklama.length; i++) {
			var obj = allReklama[i];
			var tat = $.inArray(obj.img, canRemoveReklama);
			if (tat < 0) {
				withoutDbReklama.push(obj);
			}
		}

		console.log("-withoutDbReklama-");
		console.log(withoutDbReklama);

		var reklama = new Array();
		//for (var i=0; i < allReklama.length; i++) {
		//	var obj = allReklama[i];
		//	var tat = $.inArray(obj.img, forRemoveReklama);
		//	if (tat < 0) {
		//		reklama.push(obj);
		//	}
		//}

		for (var i=0; i < withoutDbReklama.length; i++) {
			var obj = withoutDbReklama[i];
			var tat = $.inArray(obj.img, forRemoveReklama);
			if (tat < 0) {
				reklama.push(obj);
			}
		}

		console.log("-afterFilter-");
		console.log(reklama);

		var reklamaForShow = new Array();
		for (var s = 0; s < countOfReklama; s++) {
			var ran2 = Math.floor(Math.random() * (reklama.length));
			reklamaForShow.push(reklama[ran2]);
			reklama.splice(ran2, 1);
		}

		var objArray = new Array();
		arrayReklamaForUpdateDB = new Array();
		for (var t = 0; t < reklamaForShow.length; t++) {
			var reklamaForShowAll = new Array();
			reklamaForShowAll.push(reklamaForShow[t].mainUrl);
			arrayReklamaForUpdateDB.push(reklamaForShow[t].img);
			var obj = reklamaForShow[t].secUrl;
			var secondaryArray = new Array();
			for (a in obj) {
				secondaryArray.push(obj[a]);
			}

			for (var z = 0; z < countOfMove; z++) {
				var ranf = Math.floor(Math.random() * (secondaryArray.length));
				reklamaForShowAll.push(secondaryArray[ranf].url);
				secondaryArray.splice(ranf, 1);
			}
			objArray.push(reklamaForShowAll);
		}

		//console.log(objArray);
		console.log(arrayReklamaForUpdateDB);

		var videoText = '';
		for (var i=0; i < baseArray.length; i++) {
			videoText = videoText + baseArray[i] + "\n";
		}
		gClidVideoText =  videoText;
		var reklamaText = '';
		for (var z = 0; z < objArray.length; z++) {
			//console.log(objArray[z]);
			var elem = objArray[z];
			for (var n = 0; n < elem.length; n++) {
				reklamaText = reklamaText + elem[n] + "\n";
			}
			reklamaText = reklamaText + "\n";
		}
		gClidReklamaText = reklamaText;

		$('#resultTextArea').text(videoText + "\n" + reklamaText);
	});

	$('#updateDb').click(function() {
		console.log(forRemoveFromDBReklama);
		console.log(arrayReklamaForUpdateDB);

		var r = confirm("forRemoveFromDBReklama = " + forRemoveFromDBReklama + "\n" + "UPDATE IN DB !!! OK ???");
		if (r == true) {
			updateMyDB();
		} else {

		}

	});

	function updateMyDB() {
		var taskId = $('#taskIdVip').val();

		//var lastDate = day + '-' + month + '-' + year;
		var lastDate = moment().format('l');
		if (lastDATA == null) {
			prevDate = lastDate;
		} else {
			prevDate = lastDATA.last_date;
		}

		var prevReklama = '';
		for (var i = 0; i < forRemoveFromDBReklama.length; i++) {
			if (i == forRemoveFromDBReklama.length -1) {
				prevReklama = prevReklama + forRemoveFromDBReklama[i];
			} else {
				prevReklama = prevReklama + forRemoveFromDBReklama[i] + ":";
			}
		}


		var lastReklama = '';

		for (var i = 0; i < arrayReklamaForUpdateDB.length; i++) {
			if (i == arrayReklamaForUpdateDB.length - 1) {
				lastReklama = lastReklama + arrayReklamaForUpdateDB[i];
			} else {
				lastReklama = lastReklama + arrayReklamaForUpdateDB[i] + ":";
			}
		}


		var task = {action: "selectReklama", id: taskId};


		$.ajax({
			type: "POST",
			url: "/getLinkReklama",
			data: task,
			success: function(json) {
				var data;
				console.log("--------------");

				if (json.task_id == "") {
					data = {action: "insetReklama",
						taskId: taskId,
						prevDate: prevDate,
						prevReklama: prevReklama,
						lastDate: lastDate,
						lastReklama: lastReklama
					} ;
				} else {
					data = {action: "updateReklama",
						taskId: taskId,
						prevDate: prevDate,
						prevReklama: prevReklama,
						lastDate: lastDate,
						lastReklama: lastReklama
					} ;
				}

				console.log(data);
				$.ajax({
					type: "POST",
					url: "/getLinkReklama",
					data: data,
					success: function(json) {
						console.log(json)
					},
					dataType: "json"
				})

			},
			dataType: "json"
		})
	}



	$( "#fastTaskIdSeo" ).selectmenu();
	$( "#fastTaskIdSeo" ).selectmenu({
		select: function( event, ui ) {
			console.log(ui.item.value);
			var item = ui.item.value;

			doFastTaskIdSeoSelect(item);
			fromSeoDropDown = true;
			$( "#taskIdVip" ).trigger( "change" );
		}
	});

	$("#fastTaskIdSeoTest").autocomplete({
		source: [
		"935594",
		"935599",
		"962479",
		"1007726",
		"676539",
		"745597",
		"1066880",
		"1116723",
		"1066756",
		"1121247",
		"1122181",
		"1123319",
		"1124568",
		"1129320",
		"1128129",
		"1153212",
		"1110093",
		"1110113",
		"1110123",
		"1130840",
		"1130841",
		"1130842",
		"1086084",
		"1086789",
		"1088343",
		"1088360",
		"999393",
		"1004892",
		"1011645",
		"1080945",
		"1080949",
		"1094591",
		"1124008",
		"1124028",
		"1124038",
		"1124053",
		"1124059",
		"1155039",
		"1155073",
		"1155522",
		"1155533"
		]
	});

	$("#fastTaskIdSeoTest").autocomplete({
		select: function( event, ui ) {
			console.log(ui.item.value);
			var item = ui.item.value;
			doFastTaskIdSeoSelect(item);

			//else if
			//(item == 70562) {
			//	$('#taskIdVip').val(70562);
			//	$('#countOfVideo').val(15);
			//	$('#countOfReklama').val(4);
			//	$('#countOfMove').val(3);
			//}
			fromSeoDropDown = true;
			$( "#taskIdVip" ).trigger( "change" );
		}
	});

	function doFastTaskIdSeoSelect(item) {
		if (item == 935599) {
			$('#taskIdVip').val(935599);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);

		} else if
		(item == 962479) {
			$('#taskIdVip').val(962479);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 71091) {
			$('#taskIdVip').val(71091);
			$('#countOfVideo').val(14);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(2);
		}
		else if
		(item == 1007726) {
			$('#taskIdVip').val(1007726);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 676539) {
			$('#taskIdVip').val(676539);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 745597) {
			$('#taskIdVip').val(745597);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}

		else if
		(item == 1066756) {
			$('#taskIdVip').val(1066756);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}

		else if
		(item == 1116723) {
			$('#taskIdVip').val(1116723);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1066880) {
			$('#taskIdVip').val(1066880);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}

		else if
		(item == 69169) {
			$('#taskIdVip').val(69169);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
		}
		else if
		(item == 69092) {
			$('#taskIdVip').val(69092);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1021050) {
			$('#taskIdVip').val(1021050);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(6);
			$('#countOfMove').val(1);
		}
		else if
		(item == 745597) {
			$('#taskIdVip').val(1021050);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 576107) {
			$('#taskIdVip').val(576107);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(2);
		}
		else if
		(item == 772661) {
			$('#taskIdVip').val(772661);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(2);
		}
		else if
		(item == 775232) {
			$('#taskIdVip').val(775232);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(2);
		}
		else if
		(item == 770563) {
			$('#taskIdVip').val(770563);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(2);
		}
		//else if
		//(item == 1084998) {
		//	$('#taskIdVip').val(1084998);
		//	$('#countOfVideo').val(5);
		//	$('#countOfReklama').val(3);
		//	$('#countOfMove').val(3);
		//}
		else if
		(item == 1121247) {
			$('#taskIdVip').val(1121247);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1153212) {
			$('#taskIdVip').val(1153212);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		//else if
		//(item == 1085285) {
		//	$('#taskIdVip').val(1085285);
		//	$('#countOfVideo').val(5);
		//	$('#countOfReklama').val(3);
		//	$('#countOfMove').val(3);
		//}
		else if
		(item == 1122181) {
			$('#taskIdVip').val(1122181);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 935594) {
			$('#taskIdVip').val(935594);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		//else if
		//(item == 1086631) {
		//	$('#taskIdVip').val(1086631);
		//	$('#countOfVideo').val(5);
		//	$('#countOfReklama').val(3);
		//	$('#countOfMove').val(3);
		//}
		else if
		(item == 1123319) {
			$('#taskIdVip').val(1123319);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1124568) {
			$('#taskIdVip').val(1124568);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1128129) {
			$('#taskIdVip').val(1128129);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		//else if
		//(item == 1090914) {
		//	$('#taskIdVip').val(1090914);
		//	$('#countOfVideo').val(5);
		//	$('#countOfReklama').val(3);
		//	$('#countOfMove').val(3);
		//}
		else if
		(item == 1129320) {
			$('#taskIdVip').val(1129320);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}






		else if
		(item == 1080945) {
			$('#taskIdVip').val(1080945);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}

		else if
		(item == 1080949) {
			$('#taskIdVip').val(1080949);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1094591) {
			$('#taskIdVip').val(1094591);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}

		else if
		(item == 73752) {
			$('#taskIdVip').val(73752);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 73753) {
			$('#taskIdVip').val(73753);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 73857) {
			$('#taskIdVip').val(73857);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1110093) {
			$('#taskIdVip').val(1110093);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}

		else if
		(item == 1130840) {
			$('#taskIdVip').val(1130840);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1130841) {
			$('#taskIdVip').val(1130841);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1130842) {
			$('#taskIdVip').val(1130842);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1110113) {
			$('#taskIdVip').val(1110113);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}

		else if
		(item == 1110123) {
			$('#taskIdVip').val(1110123);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}

		else if
		(item == 1086084) {
			$('#taskIdVip').val(1086084);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1086789) {
			$('#taskIdVip').val(1086789);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1088343) {
			$('#taskIdVip').val(1088343);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1088360) {
			$('#taskIdVip').val(1088360);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 75083) {
			$('#taskIdVip').val(75083);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 75084) {
			$('#taskIdVip').val(75084);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}

		else if
		(item == 75395) {
			$('#taskIdVip').val(75395);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 999393) {
			$('#taskIdVip').val(999393);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1004892) {
			$('#taskIdVip').val(1004892);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1011645) {
			$('#taskIdVip').val(1011645);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1124008) {
			$('#taskIdVip').val(1124008);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1124028) {
			$('#taskIdVip').val(1124028);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1124038) {
			$('#taskIdVip').val(1124038);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1124053) {
			$('#taskIdVip').val(1124053);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1124059) {
			$('#taskIdVip').val(1124059);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1155073) {
			$('#taskIdVip').val(1155073);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1155039) {
			$('#taskIdVip').val(1155039);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1155522) {
			$('#taskIdVip').val(1155522);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1155533) {
			$('#taskIdVip').val(1155533);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 0) {
			$('#taskIdVip').val(0);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
	}

	$("#fastTaskIdVipTest").autocomplete({
		source: [
		"75083",
		"75084",
		"75085",
		"75531",
		"75532",
		"75556",
		"74567",
		"74568",
		"75078",
		"74568",
		"74678",
		"74693",
		"74744",
		"74840",
		"74871",
		"74911",
		"72574",
		"72575",
		"76141",
		"73811",
		"73813",
		"75914",
		"77692",
		"77712",
		"77714",
		"77715",
		"77716",
		"77717",
		"77923",
		"69489",
		"69490",
		"69491",
		"69493"
		]
	});
	$("#fastTaskIdVipTest").autocomplete({
		select: function( event, ui ) {
			console.log(ui.item.value);
			var item = ui.item.value;
			doFastTaskIdVipSelect(item);

			fromSeoDropDown = false;
			$( "#taskIdVip" ).trigger( "change" );
		}
	});



	$( "#fastTaskIdVip" ).selectmenu();
	$( "#fastTaskIdVip" ).selectmenu({
		select: function( event, ui ) {
			console.log(ui.item.value);
			var item = ui.item.value;
			doFastTaskIdVipSelect(item);

			fromSeoDropDown = false;
			$( "#taskIdVip" ).trigger( "change" );
		}
	});

	function doFastTaskIdVipSelect(item) {
		if (item == 72574) {
			$('#taskIdVip').val(72574);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(4);
		}else if
		(item == 75083) {
			$('#taskIdVip').val(75083);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 75084) {
			$('#taskIdVip').val(75084);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 75085) {
			$('#taskIdVip').val(75085);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 75531) {
			$('#taskIdVip').val(75531);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 75532) {
			$('#taskIdVip').val(75532);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 75556) {
			$('#taskIdVip').val(75556);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 74568) {
			$('#taskIdVip').val(74568);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 74567) {
			$('#taskIdVip').val(74567);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 75078) {
			$('#taskIdVip').val(75078);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 74678) {
			$('#taskIdVip').val(74678);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 74693) {
			$('#taskIdVip').val(74693);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 74744) {
			$('#taskIdVip').val(74744);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 74840) {
			$('#taskIdVip').val(74840);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 74871) {
			$('#taskIdVip').val(74871);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 74911) {
			$('#taskIdVip').val(74911);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if (item == 72574) {
			$('#taskIdVip').val(72574);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(4);
		} else if
		(item == 72575) {
			$('#taskIdVip').val(72575);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);

		}else if
		(item == 76141) {
			$('#taskIdVip').val(76141);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);

		}else if
		(item == 73811) {
			$('#taskIdVip').val(73811);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 73813) {
			$('#taskIdVip').val(73813);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 75914) {
			$('#taskIdVip').val(75914);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 77692) {
			$('#taskIdVip').val(77692);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 77712) {
			$('#taskIdVip').val(77712);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 77714) {
			$('#taskIdVip').val(77714);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 77715) {
			$('#taskIdVip').val(77715);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 77716) {
			$('#taskIdVip').val(77716);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 77717) {
			$('#taskIdVip').val(77717);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 77923) {
			$('#taskIdVip').val(77923);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 69489) {
			$('#taskIdVip').val(69489);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 69490) {
			$('#taskIdVip').val(69490);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 69491) {
			$('#taskIdVip').val(69491);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 69493) {
			$('#taskIdVip').val(69493);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
	}

	$('#taskIdVip').on('change', function() {
		//console.log("fromSeoDropDown = " + fromSeoDropDown);
		if (fromSeoDropDown) {
			$('#fastTaskIdSeo-button').removeClass('disabledDropDown');
			$('#fastTaskIdVip-button').addClass('disabledDropDown');
			getDataFromDb($('#taskIdVip').val())
		} else {
			$('#fastTaskIdVip-button').removeClass('disabledDropDown');
			$('#fastTaskIdSeo-button').addClass('disabledDropDown');
			getDataFromDb($('#taskIdVip').val())
		}

	});

	function getDataFromDb(taskId) {
		var data = {action: "selectReklama", id: taskId} ;

		$.ajax({
			type: "POST",
			async: false,
			url: "/getLinkReklama",
			data: data,
			success: function(json) {
				console.log(json);
				var lastReklama = json.last_reklama;
				if (lastReklama != "") {
					forRemoveFromDBReklama = lastReklama.split(":");
				} else {
					forRemoveFromDBReklama = '';
				}
				$('#prevReklamaFromDB').val(forRemoveFromDBReklama);
			},
			dataType: "json"
		});
		var connArray = new Array();
		if(taskId == 72574 || taskId == 935594 || taskId == 935599 || taskId == 962479 || taskId == 1007726 || taskId == 72575 || taskId == 76141) {
			connArray.push(72574);
			connArray.push(72575);
			connArray.push(935594);
			connArray.push(935599);
			connArray.push(962479);
			connArray.push(1007726);
		}
		else if	(
			//taskId == 1084998 || taskId == 1085285 || taskId == 1086631 || taskId == 1088642 || taskId == 1089683 || taskId == 1090914 ||
					taskId == 1121247 || taskId == 1122181 || taskId == 1129320 || taskId == 1123319 || taskId == 1124568 || taskId == 1128129 || taskId == 1153212 ||
					taskId == 74678 || taskId == 74744 || taskId == 74871 || taskId == 74911 || taskId == 74840 || taskId == 74693) {
			//connArray.push(1084998);
			//connArray.push(1085285);
			//connArray.push(1086631);
			//connArray.push(1088642);
			//connArray.push(1089683);
			//connArray.push(1090914);

			connArray.push(1121247);
			connArray.push(1122181);
			connArray.push(1123319);
			connArray.push(1124568);
			connArray.push(1128129);
			connArray.push(1129320);
			connArray.push(1153212);

			connArray.push(74678);
			connArray.push(74744);
			connArray.push(74871);
			connArray.push(74911);
			connArray.push(74840);
			connArray.push(74693);
		} else if (taskId == 676539 || taskId == 745597) {
			connArray.push(676539);
			connArray.push(745597);
		} else if (taskId == 73811 || taskId == 73813 || taskId == 75914 || taskId == 1066880 || taskId == 1116723 || taskId == 1066756) {
			connArray.push(73811);
			connArray.push(73813);
			connArray.push(75914);
			connArray.push(1066880);
			connArray.push(1116723);
			connArray.push(1066756);
		} else if (taskId == 74567 || taskId == 74568 || taskId == 75078 || taskId == 1080945 || taskId == 1080949 || taskId == 1094591) {
			connArray.push(74567);
			connArray.push(74568);
			connArray.push(75078);
			connArray.push(1080945);
			connArray.push(1080949);
			connArray.push(1094591);
		} else if (taskId == 775232 || taskId == 576107 || taskId == 772661) {
			connArray.push(775232);
			connArray.push(576107);
			connArray.push(772661);
		} else if (taskId == 73752 || taskId == 73753 || taskId == 73857) {
			connArray.push(73752);
			connArray.push(73753);
			connArray.push(73857);
		} else if (taskId == 1110093 || taskId == 1110113 || taskId == 1110123 || taskId == 75531 || taskId == 75532 || taskId == 75556 || taskId == 1130840 || taskId == 1130841 || taskId == 1130842) {
			connArray.push(1110093);
			connArray.push(1110113);
			connArray.push(1110123);
			connArray.push(75531);
			connArray.push(75532);
			connArray.push(75556);
			connArray.push(1130840);
			connArray.push(1130841);
			connArray.push(1130842);
		} else if (taskId == 1086084 || taskId == 1086789 || taskId == 1088343 || taskId == 1088360 || taskId == 1155039 || taskId == 1155073 || taskId == 1155522 || taskId == 1155533) {
			connArray.push(1086084);
			connArray.push(1086789);
			connArray.push(1088343);
			connArray.push(1088360);
			connArray.push(1155039);
			connArray.push(1155073);
			connArray.push(1155522);
			connArray.push(1155533);
		} else if (taskId == 75083 || taskId == 75084 || taskId == 75085) {
			connArray.push(75083);
			connArray.push(75084);
			connArray.push(75085);
		} else if (taskId == 75395) {
			connArray.push(75395);
		} else if (taskId == 999393 || taskId == 1004892 || taskId == 1011645) {
			connArray.push(999393);
			connArray.push(1004892);
			connArray.push(1011645);
		} else if (taskId == 1124008 || taskId == 1124028 || taskId == 1124038 || taskId == 1124053 || taskId == 1124059) {
			connArray.push(1124008);
			connArray.push(1124028);
			connArray.push(1124038);
			connArray.push(1124053);
			connArray.push(1124059);
		} else if (taskId == 77692 || taskId == 77712 || taskId == 77714 || taskId == 77715 || taskId == 77716 || taskId == 77717 || taskId == 77923) {
			connArray.push(77692);
			connArray.push(77712);
			connArray.push(77714);
			connArray.push(77715);
			connArray.push(77716);
			connArray.push(77717);
			connArray.push(77923);
		} else if (taskId == 69489 || taskId == 69490 || taskId == 69491 || taskId == 69493) {
			connArray.push(69489);
			connArray.push(69490);
			connArray.push(69491);
			connArray.push(69493);
		}
		addTextInSosediReklam(connArray)
	};

	function addTextInSosediReklam(connArray) {
		var connArrayDATA = new Array();
		for (var i = 0; i < connArray.length; i++) {
			var data = {action: "selectReklama", id: connArray[i]} ;
			$.ajax({
				type: "POST",
				async: false,
				//url: "service.php",
				url: "/getLinkReklama",
				data: data,
				success: function(json) {
					//console.log(json.length);
					//if (json.length > 0) {
						connArrayDATA.push(json);
					//}
				},
				dataType: "json"
			});
		}

		console.log('-=connArrayDATA=-');
		console.log(connArrayDATA);
		var connText = '';

		canRemoveReklama = new Array();

		var twoDaysBeforeDate = moment().subtract('days', 2).format('l');
		for (var z = 0; z < connArrayDATA.length; z++) {
			var taskId = connArrayDATA[z].task_id;
			var lastDate = connArrayDATA[z].last_date;
			var lastReklama = connArrayDATA[z].last_reklama;
			if (moment(lastDate).isAfter(twoDaysBeforeDate)) {
				var lastRekl = lastReklama.split(':');
				for (var i = 0; i < lastRekl.length; i++) {
					canRemoveReklama.push(lastRekl[i]);
				}
			}

			connText = connText + taskId + " - " + lastDate+ " - " + lastReklama + "\n"
		}

		$('#sosediReklam').val(connText);

		console.log('-=canRemoveReklama=-');
		console.log(canRemoveReklama);
	}


	$('.mutliSelect input[type="checkbox"]').on('click', function() {
		var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
		//title = $(this).val() + ",";
			title = $(this).val();

		if ($(this).is(':checked')) {
			var html = '<span title="' + title + '">' + title + '</span>';
			$('.multiSel').append(html);
			$(".hida").hide();
		} else {
			$('span[title="' + title + '"]').remove();
			var ret = $(".hida");
			$('.dropdown dt a').append(ret);

		}
	});

	$('#testButton').click(function() {
		{
			var taskId = 2;
			var prevDate = '28-11-2015';
			var prevArray = new Array();
			prevArray.push("prevArrayreklama1");
			prevArray.push("prevArrayreklama2");
			var prevReklama = '';
			for (var i = 0; i < prevArray.length; i++) {
				if (i == prevArray.length -1) {
					prevReklama = prevReklama + prevArray[i];
				} else {
					prevReklama = prevReklama + prevArray[i] + ":";
				}

			}

			var lastDate = '30-01-2016';
			var curArray = new Array();
			curArray.push("curArrayreklama1");
			curArray.push("curArrayreklama2");
			var lastReklama = '';
			for (var i = 0; i < curArray.length; i++) {
				if (i == curArray.length - 1) {
					lastReklama = lastReklama + curArray[i];
				} else {
					lastReklama = lastReklama + curArray[i] + ":";
				}

			}
			var data2 = {action: "testSave",
				taskId: taskId,
				prevDate: prevDate,
				prevReklama: prevReklama,
				lastDate: lastDate,
				lastReklama: lastReklama} ;
			console.log(data2);
			$.ajax({
				type: "POST",
				url: "service.php",
				data: data2,
				success: function(json) {
					console.log(json.message);

				},
				dataType: "json"
			});
		} // TODO test insert



		//var date1 = new Date('2012-11-28');
		//var stringDate1 = date1.toString();
		//var date2 = new Date("2011-11-29");
		//var stringDate2 = date2.toString();
		//console.log(date1);
		//console.log(date2);
		//console.log(stringDate1 == stringDate2);
		//console.log(date1 > date2);
		//console.log(date1 < date2);
	});

	$('#restart').click(function() {
		console.log("tesrt");
		//var data = {action: "selectReklamaSrc", taskId: taskId} ;
		var data2 = {action: "getCurrentTime"} ;
		$.ajax({
			type: "POST",
			url: "/loginServlet",
			data: data2,
			success: function(json) {
				//hour = json.hour;
				//minute = json.minute;
				//
				//$('#timeHour').val(hour);
				//$('#timeMinute').val(minute);

				console.log(json);
			},
			dataType: "json"
		});
	});
	$('#getGclid').click(function() {
		console.log("test");
		var allText = $('#resultTextArea').val();
		$('#gclidTextArea').val(gClidReklamaText);

		var data2 = {action: "getCurrentTime", text: gClidReklamaText} ;
		var count = parseInt($('#countOfReklama').val()) + 1;
		var myCount = 0;

		var timerCounter;
		if (count < 4) {
			timerCounter =  150000;
		} else {
			timerCounter =  130000;
		}


		$.ajax({
			type: "POST",
			url: "/getGClid",
			data: {action: "testCall"},
			success: function(json) {
				console.log(json.resultCall);
				if (json.resultCall == "good") {
					console.log("start = " + moment().format('LTS'));
					$("#resultGclidContainer").append("<p>" + "Call started at " + moment().format('LTS') + "</p>");

					var timerId  = setInterval(func, timerCounter, count);

					function func(count) {
								$.ajax({
									type: "POST",
									url: "/getGClid",
									async: false,
									data: {action: "getAllGClid", text: $('#gclidTextArea').val()},
									success: function(json) {
										$('#gclidTextArea').val(json.resultReklama);
										console.log(json);

									},
									dataType: "json"
								});
						$("#resultGclidContainer").append("<p>" + "Iteration " + myCount + " finished at -> " + moment().format('LTS') + "</p>");
						myCount++;
						console.log("myCount = " + myCount);
						if (count == myCount) {
							console.log('finish = ' + moment().format('LTS'));
							$("#resultGclidContainer").append("<p>" + "Call finished at " + moment().format('LTS') + "</p>");
							clearTimeout(timerId);
							updateMyDB();
							prepareFinalText();
							audio.play();
						}
					}
				} else{
					//alert("BAD");
				}
			},
			error: function (xhr) {
				alert("error");
			},
			dataType: "json"
		});
	});

	$('#startMusic').click(function() {
		audio.play();
	});

	$('#stopMusic').click(function() {
		audio.pause();
	});

	function prepareFinalText() {
		var gclidRekl = $('#gclidTextArea').val();
		$('#gclidTextArea').val('');

		console.log("gclidRekl = " + gclidRekl);
		console.log("-------");
		console.log("gClidVideoText = " + gClidVideoText);

		var searchText = getSearchGoogleText();

		$('#gclidTextArea').val(searchText + "\n \n" + gClidVideoText + "\n" + gclidRekl);
	}

	Array.prototype.randomElement = function () {
		return this[Math.floor(Math.random() * this.length)]
	};

	function getSearchGoogleText() {
		var taskId = $('#taskIdVip').val();
		//ALTER TABLE test_video ADD last_query VARCHAR( 255 ) after last_reklama;
		var data2 = {action: "getLink", id: taskId} ;
		var result = '';
		$.ajax({
			type: "POST",
			url: "/getGoogleLink",
			async: false,
			data: data2,
			success: function(json) {
				result = json.output;

				console.log(json);
			},
			dataType: "json"
		});
		 return "https://www.google.com.ua/#q=" + result;
	}
});
