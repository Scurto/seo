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

		if ($("#hardYouTube").val() == "") {
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
		} else {
			console.log($("#hardYouTube").val());
			var youTubeUrl = $("#hardYouTube").val();
			var countOfVideo = $('#countOfVideo').val();
			var countOfReklama = $('#countOfReklama').val();
			var countOfMove = $('#countOfMove').val();
			if (countOfMove == "" || countOfVideo == "" || countOfReklama == "") {
				window.alert("Пустое значение в одном из полей");
			}

			var dataJson = {
				url: youTubeUrl,
				count: countOfVideo
			};

			var baseArray = new Array();
			$.ajax({
				type: "POST",
				url: "/getHardLinkVideo",
				async: false,
				data: dataJson,
				success: function(json) {
					baseArray = json.video;
				},
				dataType: "json"
			});

			var allReklama = getLinkReklama();
			console.log("-allReklama-");
			console.log(allReklama);
		}


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
			fromSeoDropDown = 'seosprint';
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
		"1273284",
		"1273288",
		"1273295",
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
		"1273318",
		"1273319",
		"1080945",
		"1080949",
		"1298997",
		"1299007",
		"1299059",
		"1299128",
		"1094591",
		"1124008",
		"1124028",
		"1124038",
		"1124053",
		"1124059",
		"1274134",
		"1274198",
		"1300406",
		"1308453",
		"1310682",
		"1155039",
		"1155073",
		"1155522",
		"1155533",
		"576107",
		"1144253",
		"1144255",
		"1144256",
		"1172104",
		"1172517",
		"967829",
		"1036038",
		"1036072",
		"1070794",
		"1171462",
		"1271747",
		"630366",
		"812267",
		"936608",
		"609078",
		"1177700",
		"1177709",
		"1177717",
		"1179303",
		"1179305",
		"1179311",
		"1180845",
		"965831",
		"979080",
		"1064464",
		"1064467",
		"1063755",
		"1137126",
		"878796",
		"937418",
		"1081750",
		"608316",
		"908673",
		"1079336",
		"1186645",
		"1160443",
		"871441",
		"1174068",
		"871450",
		"631214",
		"721742",
		"764355",
		"765511",
		"934679",
		"944973",
		"987729",
		"442767",
		"1013162",
		"1014553",
		"1014563",
		"1039735",
		"1174983",
		"1232179",
		"1233824",
		"1241333",
		"1205301",
		"1222315",
		"1325365",
		"543675",
		"1200264",
		"1215689",
		"1259852",
		"1266951",
		"985824",
		"1071173",
		"1232663",
		"1142576",
		"1243379",
		"1245042",
		"1166386",
		"865275",
		"460206",
		"673480",
		"1200729",
		"1200741",
		"1221525",
		"1232726",
		"1257304",
		"1231965",
		"1258719",
		"837146",
		"771880",
		"758932",
		"1115544",
		"242794",
		"1118697",
		"1190258",
		"1257813",
		"1241449",
		"1131059",
		"1197088",
		"1197089",
		"1293702",
		"1197090",
		"1220946",
		"1252229",
		"1264118",
		"1065512",
		"1066614",
		"1087773",
		"1273302",
		"1273304",
		"1273307",
		"1273310"

		]
	});

	$("#fastTaskIdSeoTest").autocomplete({
		select: function( event, ui ) {
			console.log(ui.item.value);
			var item = ui.item.value;
			doFastTaskIdSeoSelect(item);

			fromSeoDropDown = 'seosprint';
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
		else if
		(item == 1177700) {
			$('#taskIdVip').val(1177700);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1177709) {
			$('#taskIdVip').val(1177709);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1177717) {
			$('#taskIdVip').val(1177717);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1179303) {
			$('#taskIdVip').val(1179303);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1179305) {
			$('#taskIdVip').val(1179305);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1179311) {
			$('#taskIdVip').val(1179311);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1180845) {
			$('#taskIdVip').val(1180845);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
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
		}else if
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
		(item == 1298997) {
			$('#taskIdVip').val(1298997);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1299007) {
			$('#taskIdVip').val(1299007);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1299059) {
			$('#taskIdVip').val(1299059);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1299128) {
			$('#taskIdVip').val(1299128);
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
		(item == 1273284) {
			$('#taskIdVip').val(1273284);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1273288) {
			$('#taskIdVip').val(1273288);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1273295) {
			$('#taskIdVip').val(1273295);
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
		(item == 1273318) {
			$('#taskIdVip').val(1273318);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1273319) {
			$('#taskIdVip').val(1273319);
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
		(item == 1274134) {
			$('#taskIdVip').val(1274134);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1274198) {
			$('#taskIdVip').val(1274198);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1300406) {
			$('#taskIdVip').val(1300406);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1308453) {
			$('#taskIdVip').val(1308453);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1310682) {
			$('#taskIdVip').val(1310682);
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
		(item == 1144253) {
			$('#taskIdVip').val(1144253);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1144255) {
			$('#taskIdVip').val(1144255);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1144256) {
			$('#taskIdVip').val(1144256);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1172104) {
			$('#taskIdVip').val(1172104);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1172517) {
			$('#taskIdVip').val(1172517);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1036038) {
			$('#taskIdVip').val(1036038);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1036072) {
			$('#taskIdVip').val(1036072);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1070794) {
			$('#taskIdVip').val(1070794);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1171462) {
			$('#taskIdVip').val(1171462);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 1271747) {
			$('#taskIdVip').val(1271747);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}
		else if
		(item == 967829) {
			$('#taskIdVip').val(967829);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 630366) {
			$('#taskIdVip').val(630366);
			$('#countOfVideo').val(11);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
		}else if
		(item == 812267) {
			$('#taskIdVip').val(812267);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
		}else if
		(item == 936608) {
			$('#taskIdVip').val(936608);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
		}else if
		(item == 609078) {
			$('#taskIdVip').val(609078);
			$('#countOfVideo').val(11);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 965831) {
			$('#taskIdVip').val(965831);
			$('#countOfVideo').val(6);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(1);
		}else if
		(item == 979080) {
			$('#taskIdVip').val(979080);
			$('#countOfVideo').val(6);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(1);
		}else if
		(item == 1064464) {
			$('#taskIdVip').val(1064464);
			$('#countOfVideo').val(6);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(1);
		}else if
		(item == 1064467) {
			$('#taskIdVip').val(1064467);
			$('#countOfVideo').val(6);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(1);
		}
		else if
		(item == 0) {
			$('#taskIdVip').val(0);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1063755) {
			$('#taskIdVip').val(1063755);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1137126) {
			$('#taskIdVip').val(1137126);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
		}else if
		(item == 878796) {
			$('#taskIdVip').val(878796);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1081750) {
			$('#taskIdVip').val(1081750);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(2);
		}else if
		(item == 937418) {
			$('#taskIdVip').val(937418);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(2);
		}else if
		(item == 908673) {
			$('#taskIdVip').val(908673);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 608316) {
			$('#taskIdVip').val(608316);
			$('#countOfVideo').val(12);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1079336) {
			$('#taskIdVip').val(1079336);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1186645) {
			$('#taskIdVip').val(1186645);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1160443) {
			$('#taskIdVip').val(1160443);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 871441) {
			$('#taskIdVip').val(871441);
			$('#countOfVideo').val(18);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(2);
		}else if
		(item == 1174068) {
			$('#taskIdVip').val(1174068);
			$('#countOfVideo').val(18);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(2);
		}else if
		(item == 871450) {
			$('#taskIdVip').val(871450);
			$('#countOfVideo').val(18);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(2);
		}else if
		(item == 631214) {
			$('#taskIdVip').val(631214);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(2);
		}else if
		(item == 721742) {
			$('#taskIdVip').val(721742);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(3);
		}else if
		(item == 764355) {
			$('#taskIdVip').val(764355);
			$('#countOfVideo').val(7);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(2);
		}else if
		(item == 765511) {
			$('#taskIdVip').val(765511);
			$('#countOfVideo').val(7);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(2);
		}else if
		(item == 934679) {
			$('#taskIdVip').val(934679);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 944973) {
			$('#taskIdVip').val(944973);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 987729) {
			$('#taskIdVip').val(987729);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1013162) {
			$('#taskIdVip').val(1013162);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 442767) {
			$('#taskIdVip').val(442767);
			$('#countOfVideo').val(7);
			$('#countOfReklama').val(7);
			$('#countOfMove').val(0);
		}else if
		(item == 1014553) {
			$('#taskIdVip').val(1014553);
			$('#countOfVideo').val(18);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(2);
		} else if
		(item == 1014563) {
			$('#taskIdVip').val(1014563);
			$('#countOfVideo').val(18);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(2);
		} else if
		(item == 1039735) {
			$('#taskIdVip').val(1039735);
			$('#countOfVideo').val(17);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(2);
		} else if
		(item == 1174983) {
			$('#taskIdVip').val(1174983);
			$('#countOfVideo').val(7);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
		}else if
		(item == 1232179) {
			$('#taskIdVip').val(1232179);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(8);
			$('#countOfMove').val(2);
		}else if
			(item == 1233824) {
				$('#taskIdVip').val(1233824);
				$('#countOfVideo').val(22);
				$('#countOfReklama').val(3);
				$('#countOfMove').val(1);
		}else if
		(item == 1241333) {
			$('#taskIdVip').val(1241333);
			$('#countOfVideo').val(22);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(1);
		}else if
		(item == 1205301) {
			$('#taskIdVip').val(1205301);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1222315) {
			$('#taskIdVip').val(1222315);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(2);
		}else if
		(item == 1325365) {
			$('#taskIdVip').val(1325365);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(2);
		}else if
		(item == 543675) {
			$('#taskIdVip').val(543675);
			$('#countOfVideo').val(6);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(2);
		}else if
		(item == 1200264) {
			$('#taskIdVip').val(1200264);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1215689) {
			$('#taskIdVip').val(1215689);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1259852) {
			$('#taskIdVip').val(1259852);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1266951) {
			$('#taskIdVip').val(1266951);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 985824) {
			$('#taskIdVip').val(985824);
			$('#countOfVideo').val(6);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(1);
		}else if
		(item == 1071173) {
			$('#taskIdVip').val(1071173);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(2);
		}else if
		(item == 1232663) {
			$('#taskIdVip').val(1232663);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1142576) {
			$('#taskIdVip').val(1142576);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1243379) {
			$('#taskIdVip').val(1243379);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(4);
		}else if
		(item == 1245042) {
			$('#taskIdVip').val(1245042);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1166386) {
			$('#taskIdVip').val(1166386);
			$('#countOfVideo').val(12);
			$('#countOfReklama').val(8);
			$('#countOfMove').val(0);
		}else if
		(item == 865275) {
			$('#taskIdVip').val(865275);
			$('#countOfVideo').val(16);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(3);
		}else if
		(item == 460206) {
			$('#taskIdVip').val(460206);
			$('#countOfVideo').val(12);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 673480) {
			$('#taskIdVip').val(673480);
			$('#countOfVideo').val(12);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		} else if
		(item == 1200729) {
			$('#taskIdVip').val(1200729);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 1200741) {
			$('#taskIdVip').val(1200741);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 1221525) {
			$('#taskIdVip').val(1221525);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 1232726) {
			$('#taskIdVip').val(1232726);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 1257304) {
			$('#taskIdVip').val(1257304);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 1231965) {
			$('#taskIdVip').val(1231965);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1258719) {
			$('#taskIdVip').val(1258719);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 837146) {
			$('#taskIdVip').val(837146);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 771880) {
			$('#taskIdVip').val(771880);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 758932) {
			$('#taskIdVip').val(758932);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 1115544) {
			$('#taskIdVip').val(1115544);
			$('#countOfVideo').val(7);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 242794) {
			$('#taskIdVip').val(242794);
			$('#countOfVideo').val(3);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 1118697) {
			$('#taskIdVip').val(1118697);
			$('#countOfVideo').val(3);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 1190258) {
			$('#taskIdVip').val(1190258);
			$('#countOfVideo').val(6);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(1);
		}else if
		(item == 1257813) {
			$('#taskIdVip').val(1257813);
			$('#countOfVideo').val(3);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(2);
		}else if
		(item == 1241449) {
			$('#taskIdVip').val(1241449);
			$('#countOfVideo').val(3);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 1131059) {
			$('#taskIdVip').val(1131059);
			$('#countOfVideo').val(3);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1197088) {
			$('#taskIdVip').val(1197088);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(4);
		}else if
		(item == 1197089) {
			$('#taskIdVip').val(1197089);
			$('#countOfVideo').val(12);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1293702) {
			$('#taskIdVip').val(1293702);
			$('#countOfVideo').val(12);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1197090) {
			$('#taskIdVip').val(1197090);
			$('#countOfVideo').val(12);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1220946) {
			$('#taskIdVip').val(1220946);
			$('#countOfVideo').val(6);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(3);
		}else if
		(item == 1252229) {
			$('#taskIdVip').val(1252229);
			$('#countOfVideo').val(6);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(3);
		}else if
		(item == 1264118) {
			$('#taskIdVip').val(1264118);
			$('#countOfVideo').val(13);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(4);
		}
	}

	$("#fastTaskIdVipTest").autocomplete({
		source: [
		"75083",
		"75084",
		"75085",
		"81281",
		"81282",
		"81283",
		"81284",
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
		"78531",
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
		"77924",
		"69489",
		"69490",
		"69491",
		"69493",
		"74826",
		"69169",
		"76111",
		"76112",
		"76487",
		"82425",
		"52221",
		"60860",
		"80880",
		"65475"

		]
	});
	$("#fastTaskIdVipTest").autocomplete({
		select: function( event, ui ) {
			console.log(ui.item.value);
			var item = ui.item.value;
			doFastTaskIdVipSelect(item);

			fromSeoDropDown = 'vipprom';
			$( "#taskIdVip" ).trigger( "change" );
		}
	});

	$("#fastTaskIdProfitTest").autocomplete({
		select: function( event, ui ) {
			console.log(ui.item.value);
			var item = ui.item.value;
			doFastTaskIdProfitSelect(item);

			fromSeoDropDown = 'profit';
			$( "#taskIdVip" ).trigger( "change" );
		}
	});

	function doFastTaskIdProfitSelect(item) {
		if (item == 344614) {
			$('#taskIdVip').val(344614);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(2);
		}else if
		(item == 344615) {
			$('#taskIdVip').val(344615);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(2);
		}else if
		(item == 317244) {
			$('#taskIdVip').val(317244);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 317246) {
			$('#taskIdVip').val(317246);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 317248) {
			$('#taskIdVip').val(317248);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 320723) {
			$('#taskIdVip').val(320723);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 325117) {
			$('#taskIdVip').val(325117);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(3);
		}else if
		(item == 335305) {
			$('#taskIdVip').val(335305);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(3);
		}else if
		(item == 325112) {
			$('#taskIdVip').val(325112);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(3);
		}else if
		(item == 217687) {
			$('#taskIdVip').val(217687);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(2);
		} else if
		(item == 325891) {
			$('#taskIdVip').val(325891);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 337481) {
			$('#taskIdVip').val(337481);
			$('#countOfVideo').val(7);
			$('#countOfReklama').val(7);
			$('#countOfMove').val(0);
		}else if
		(item == 343015) {
			$('#taskIdVip').val(343015);
			$('#countOfVideo').val(6);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}
	};

	$("#fastTaskIdProfitTest").autocomplete({
		source: [
			"344614",
			"344615",
			"317244",
			"317246",
			"317248",
			"320723",
			"325117",
			"335305",
			"325112",
			"217687",
			"325891",
			"337481",
			"343015"
		]
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
		(item == 81281) {
			$('#taskIdVip').val(81281);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 81282) {
			$('#taskIdVip').val(81282);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 81283) {
			$('#taskIdVip').val(81283);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 81284) {
			$('#taskIdVip').val(81284);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1065512) {
			$('#taskIdVip').val(1065512);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1066614) {
			$('#taskIdVip').val(1066614);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1087773) {
			$('#taskIdVip').val(1087773);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1273302) {
			$('#taskIdVip').val(1273302);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1273304) {
			$('#taskIdVip').val(1273304);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1273307) {
			$('#taskIdVip').val(1273307);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 1273310) {
			$('#taskIdVip').val(1273310);
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
		}else if
		(item == 78531) {
			$('#taskIdVip').val(78531);
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
		(item == 77924) {
			$('#taskIdVip').val(77924);
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
		}else if
		(item == 74826) {
			$('#taskIdVip').val(74826);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 69169) {
			$('#taskIdVip').val(69169);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
		}else if
		(item == 76111) {
			$('#taskIdVip').val(76111);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(3);
		}else if
		(item == 76112) {
			$('#taskIdVip').val(76112);
			$('#countOfVideo').val(7);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 76487) {
			$('#taskIdVip').val(76487);
			$('#countOfVideo').val(4);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(3);
		}else if
		(item == 82425) {
			$('#taskIdVip').val(82425);
			$('#countOfVideo').val(7);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(3);
		}else if
		(item == 52221) {
			$('#taskIdVip').val(52221);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(1);
			$('#countOfMove').val(3);
		}else if
		(item == 60860) {
			$('#taskIdVip').val(60860);
			$('#countOfVideo').val(7);
			$('#countOfReklama').val(7);
			$('#countOfMove').val(0);
		}else if
		(item == 80880) {
			$('#taskIdVip').val(80880);
			$('#countOfVideo').val(5);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(1);
		}else if
		(item == 65475) {
			$('#taskIdVip').val(65475);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(3);
		}
	}

	$('#taskIdVip').on('change', function() {
		//console.log("fromSeoDropDown = " + fromSeoDropDown);
		if (fromSeoDropDown == 'seosprint') {
			$('#fastTaskIdSeoTest').removeClass('disabledDropDown');
			$('#fastTaskIdVipTest').addClass('disabledDropDown');
			$('#fastTaskIdProfitTest').addClass('disabledDropDown');
		} else if (fromSeoDropDown == 'vipprom')  {
			$('#fastTaskIdSeoTest').addClass('disabledDropDown');
			$('#fastTaskIdVipTest').removeClass('disabledDropDown');
			$('#fastTaskIdProfitTest').addClass('disabledDropDown');
		} else if (fromSeoDropDown == 'profit') {
			$('#fastTaskIdSeoTest').addClass('disabledDropDown');
			$('#fastTaskIdVipTest').addClass('disabledDropDown');
			$('#fastTaskIdProfitTest').removeClass('disabledDropDown');
		}
		//if (fromSeoDropDown) {
		//	//$('#fastTaskIdSeo-button').removeClass('disabledDropDown');
		//	//$('#fastTaskIdVip-button').addClass('disabledDropDown');
		//	//getDataFromDb($('#taskIdVip').val())
		//
		//	$('#fastTaskIdSeoTest').removeClass('disabledDropDown');
		//	$('#fastTaskIdVipTest').addClass('disabledDropDown');
		//
		//} else {
		//	//$('#fastTaskIdVip-button').removeClass('disabledDropDown');
		//	//$('#fastTaskIdSeo-button').addClass('disabledDropDown');
		//
		//	$('#fastTaskIdVipTest').removeClass('disabledDropDown');
		//	$('#fastTaskIdSeoTest ').addClass('disabledDropDown');
		//}
		getDataFromDb($('#taskIdVip').val())

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
					taskId == 74678 || taskId == 74744 || taskId == 74871 || taskId == 74911 || taskId == 74840 || taskId == 74693 || taskId == 78531 ||
					taskId == 1177700 || taskId == 1177709 || taskId == 1177717 || taskId == 1179303 || taskId == 1179305 || taskId == 1179311 || taskId == 1180845) {
			connArray.push(1177700);
			connArray.push(1177709);
			connArray.push(1177717);
			connArray.push(1179303);
			connArray.push(1179305);
			connArray.push(1179311);
			connArray.push(1180845);

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
			connArray.push(78531);
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
		} else if (taskId == 74567 || taskId == 74568 || taskId == 75078 || taskId == 1080945 || taskId == 1080949 || taskId == 1094591
			|| taskId == 1144253 || taskId == 1144255 || taskId == 1144256 || taskId == 1172104 || taskId == 1172517 ||
			taskId == 1298997 || taskId == 1299007 || taskId == 1299059 || taskId == 1299128) {
			connArray.push(74567);
			connArray.push(74568);
			connArray.push(75078);
			connArray.push(1080945);
			connArray.push(1080949);
			connArray.push(1094591);
			connArray.push(1144253);
			connArray.push(1144255);
			connArray.push(1144256);
			connArray.push(1172104);
			connArray.push(1172517);

			connArray.push(1298997);
			connArray.push(1299007);
			connArray.push(1299059);
			connArray.push(1299128);
		} else if (taskId == 775232 || taskId == 576107 || taskId == 772661) {
			connArray.push(775232);
			connArray.push(576107);
			connArray.push(772661);
		} else if (taskId == 73752 || taskId == 73753 || taskId == 73857) {
			connArray.push(73752);
			connArray.push(73753);
			connArray.push(73857);
		} else if (taskId == 1110093 || taskId == 1110113 || taskId == 1110123 || taskId == 75531 ||
			taskId == 75532 || taskId == 75556 ||
			taskId == 1130840 || taskId == 1130841 || taskId == 1130842 ||
			taskId == 1273284 || taskId == 1273288 || taskId == 1273295) {
			connArray.push(1110093);
			connArray.push(1110113);
			connArray.push(1110123);
			connArray.push(75531);
			connArray.push(75532);
			connArray.push(75556);
			connArray.push(1130840);
			connArray.push(1130841);
			connArray.push(1130842);
			connArray.push(1273284);
			connArray.push(1273288);
			connArray.push(1273295);
		} else if (taskId == 1086084 || taskId == 1086789 || taskId == 1088343 || taskId == 1088360 || taskId == 1155039 || taskId == 1155073 || taskId == 1155522 || taskId == 1155533) {
			connArray.push(1086084);
			connArray.push(1086789);
			connArray.push(1088343);
			connArray.push(1088360);
			connArray.push(1155039);
			connArray.push(1155073);
			connArray.push(1155522);
			connArray.push(1155533);
		} else if (taskId == 75083 || taskId == 75084 || taskId == 75085 || taskId == 81281 || taskId == 81282 || taskId == 81283 || taskId == 81284 ||
			taskId == 1065512 || taskId == 1066614 || taskId == 1087773 || taskId == 1273302 || taskId == 1273304 || taskId == 1273307 || taskId == 1273310) {
			connArray.push(75083);
			connArray.push(75084);
			connArray.push(75085);
			connArray.push(81281);
			connArray.push(81282);
			connArray.push(81283);
			connArray.push(81284);

			connArray.push(1065512);
			connArray.push(1066614);
			connArray.push(1087773);
			connArray.push(1273302);
			connArray.push(1273304);
			connArray.push(1273307);
			connArray.push(1273310);
		} else if (taskId == 75395) {
			connArray.push(75395);
		} else if (taskId == 999393 || taskId == 1004892 || taskId == 1011645 || taskId == 1273318 || taskId == 1273319) {
			connArray.push(999393);
			connArray.push(1004892);
			connArray.push(1011645);
			connArray.push(1273318);
			connArray.push(1273319);
		} else if (taskId == 1124008 || taskId == 1124028 || taskId == 1124038 || taskId == 1124053 || taskId == 1124059 ||
				taskId == 1274134 || taskId == 1274198 || taskId == 1300406 || taskId == 1308453 || taskId == 1310682 ||
			taskId == 317244 || taskId == 317246 || taskId == 317248 || taskId == 320723) {
			connArray.push(1124008);
			connArray.push(1124028);
			connArray.push(1124038);
			connArray.push(1124053);
			connArray.push(1124059);

			connArray.push(1274134);
			connArray.push(1274198);
			connArray.push(1300406);
			connArray.push(1308453);
			connArray.push(1310682);

			connArray.push(317244);
			connArray.push(317246);
			connArray.push(317248);
			connArray.push(320723);
		} else if (taskId == 77692 || taskId == 77712 || taskId == 77714 || taskId == 77715 || taskId == 77716 || taskId == 77717 || taskId == 77923 || taskId == 77924) {
			connArray.push(77692);
			connArray.push(77712);
			connArray.push(77714);
			connArray.push(77715);
			connArray.push(77716);
			connArray.push(77717);
			connArray.push(77923);
			connArray.push(77924);
		} else if (taskId == 69489 || taskId == 69490 || taskId == 69491 || taskId == 69493 || taskId == 74826) {
			connArray.push(69489);
			connArray.push(69490);
			connArray.push(69491);
			connArray.push(69493);
			connArray.push(74826);
		} else if (taskId == 76111 || taskId == 76112 || taskId == 76487 || taskId == 82425 || taskId == 325117 || taskId == 335305 || taskId == 325112) {
			connArray.push(76111);
			connArray.push(76112);
			connArray.push(76487);
			connArray.push(82425);
			connArray.push(325117);
			connArray.push(335305);
			connArray.push(325112);
		} else if (taskId == 967829) {
			connArray.push(967829);
		} else if (taskId == 1036038 || taskId == 1036072 || taskId == 1070794 || taskId == 1171462 || taskId == 1271747) {
			connArray.push(1036038);
			connArray.push(1036072);
			connArray.push(1070794);
			connArray.push(1171462);
			connArray.push(1271747);
		} else if (taskId == 338846 || taskId == 329712) {
			connArray.push(338846);
			connArray.push(329712);
		} else if (taskId == 630366 || taskId == 812267 || taskId == 936608 || taskId == 609078) {
			connArray.push(630366);
			connArray.push(812267);
			connArray.push(936608);
			connArray.push(609078);
		} else if (taskId == 965831 || taskId == 979080 || taskId == 1064464 || taskId == 1064467) {
			connArray.push(965831);
			connArray.push(979080);
			connArray.push(1064464);
			connArray.push(1064467);
		} else if (taskId == 52221) {
			connArray.push(52221);
		} else if (taskId == 1063755) {
			connArray.push(1063755);
		} else if (taskId == 1137126 || taskId == 1172420) {
			connArray.push(1137126);
			connArray.push(1172420)
		} else if (taskId == 878796) {
			connArray.push(878796);
		} else if (taskId == 937418 || taskId == 1081750) {
			connArray.push(937418);
			connArray.push(1081750);
		} else if (taskId == 608316 || taskId == 908673 || taskId == 1079336) {
			connArray.push(608316);
			connArray.push(908673);
			connArray.push(1079336);
		} else if (taskId == 1186645 || taskId == 1160443 || taskId == 344615 || taskId == 344614) {
			connArray.push(1186645);
			connArray.push(1160443);
			connArray.push(344615);
			connArray.push(344614);
		} else if (taskId == 871441 || taskId == 1174068 || taskId == 871450) {
			connArray.push(871441);
			connArray.push(1174068);
			connArray.push(871450);
		} else if (taskId == 217687) {
			connArray.push(217687);
		}else if (taskId == 631214 || taskId == 721742 || taskId == 764355 || taskId == 765511) {
			connArray.push(631214);
			connArray.push(721742);
			connArray.push(764355);
			connArray.push(765511);
		}else if (taskId == 934679 || taskId == 944973 || taskId == 987729 || taskId == 1013162) {
			connArray.push(934679);
			connArray.push(944973);
			connArray.push(987729);
			connArray.push(1013162);
		} else if (taskId == 1014553 || taskId == 1014563 || taskId == 1039735) {
			connArray.push(1014553);
			connArray.push(1014563);
			connArray.push(1039735);
		} else if (taskId == 442767 || taskId == 337481 || taskId == 60860) {
			connArray.push(442767);
			connArray.push(337481);
			connArray.push(60860);
		} else if (taskId == 1174983) {
			connArray.push(1174983);
		} else if (taskId == 1232179) {
			connArray.push(1232179);
		} else if (taskId == 1233824 || taskId == 1241333) {
			connArray.push(1233824);
			connArray.push(1241333);
		} else if (taskId == 1205301) {
			connArray.push(1205301);
		} else if (taskId == 1222315 || taskId == 1325365) {
			connArray.push(1222315);
			connArray.push(1325365);
		} else if (taskId == 543675) {
			connArray.push(543675);
		} else if (taskId == 1200264 || taskId == 1215689 || taskId == 1259852 || taskId == 1266951) {
			connArray.push(1200264);
			connArray.push(1215689);
			connArray.push(1259852);
			connArray.push(1266951);
		} else if (taskId == 985824) {
			connArray.push(985824);
		} else if (taskId == 1071173) {
			connArray.push(1071173);
		} else if (taskId == 1232663) {
			connArray.push(1232663);
		} else if (taskId == 325891) {
			connArray.push(325891);
		} else if (taskId == 1142576 || taskId == 1243379 || taskId == 1245042) {
			connArray.push(1142576);
			connArray.push(1243379);
			connArray.push(1245042);
		} else if (taskId == 1166386) {
			connArray.push(1166386);
		} else if (taskId == 865275 || taskId == 460206 || taskId == 673480 || taskId == 1200729 || taskId == 1200741 || taskId == 65475) {
			connArray.push(865275);
			connArray.push(460206);
			connArray.push(673480);
			connArray.push(1200729);
			connArray.push(1200741);
			connArray.push(65475);
		} else if (taskId == 343015) {
			connArray.push(343015);
		} else if (taskId == 1221525 || taskId == 1232726) {
			connArray.push(1221525);
			connArray.push(1232726);
		} else if (taskId == 1257304) {
			connArray.push(1257304);
		} else if (taskId == 1231965 || taskId == 1258719) {
			connArray.push(1231965);
			connArray.push(1258719);
		} else if (taskId == 837146 || taskId == 771880 || taskId == 758932) {
			connArray.push(837146);
			connArray.push(771880);
			connArray.push(758932);
		} else if (taskId == 1115544) {
			connArray.push(1115544);
		} else if (taskId == 242794) {
			connArray.push(242794);
		} else if (taskId == 1118697) {
			connArray.push(1118697);
		} else if (taskId == 1190258) {
			connArray.push(1190258);
		} else if (taskId == 1257813) {
			connArray.push(1257813);
		} else if (taskId == 1241449) {
			connArray.push(1241449);
		} else if (taskId == 1131059) {
			connArray.push(1131059);
		} else if (taskId == 1197088 || taskId == 1197089 || taskId == 1197090 || taskId == 1293702) {
			connArray.push(1197088);
			connArray.push(1197089);
			connArray.push(1197090);
			connArray.push(1293702);
		} else if (taskId == 1220946 || taskId == 1252229) {
			connArray.push(1220946);
			connArray.push(1252229);
		} else if (taskId == 80880) {
			connArray.push(80880);
		} else if (taskId == 1264118) {
			connArray.push(1264118);
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

	});

	$('#restart').click(function() {
		console.log("tesrt");
		var data2 = {action: "getCurrentTime"} ;
		$.ajax({
			type: "POST",
			url: "/loginServlet",
			data: data2,
			success: function(json) {
				console.log(json);
			},
			dataType: "json"
		});
	});
	$('#getGclid').click(function() {
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
		//timerCounter =  3000;

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
		var taskId = $('#taskIdVip').val();

		$('#gclidTextArea').val('');

		if (taskId == 76111 || taskId == 76112 || taskId == 76487 ||
			taskId == 967829 || taskId == 338846 ||
			taskId == 325117 || taskId == 335305 || taskId == 325112 ||
			taskId == 1174983) {
			var countOfMove = parseInt($('#countOfMove').val());

			var Rek = gclidRekl.split("\n");
			var rekArray = [];
			for (var i in Rek) {
				console.log("i = " + Rek[i]);
				if (Rek[i]!='') {
					rekArray.push(Rek[i]);
				}
			}

			var ext = gClidVideoText.split("\n");
			var testVideo = [];
			for (var i in ext) {
				console.log("i = " + ext[i]);
				if (ext[i]!='') {
					testVideo.push(ext[i]);
				}
			}


			//var testVideo = ["video1","video2","video3","video4","video5"];
			var finalText = '';
			for (var i = 0; i < testVideo.length; i++) {
				finalText = finalText + testVideo[i] + "\n";
				if (rekArray.length > 0) {
					for (var a = 0; a < 1+countOfMove; a++) {
						finalText = finalText +  rekArray[a] + "\n";
					}
					finalText = finalText + "\n";
					for (var a = 0; a < 1+countOfMove; a++) {
						rekArray.splice(0,1);
					}
				}
			}
			var searchText = getSearchGoogleText();
			$('#gclidTextArea').val(searchText+ "\n \n" + finalText);
		} else {
			var searchText = getSearchGoogleText();
			$('#gclidTextArea').val(searchText + "\n \n" + gClidVideoText + "\n" + gclidRekl);
		}
	}

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
