/**
 * Created by scurto on 17.01.2016.
 */
$(document).ready(function() {

	var etalonArray = new Array();
	var arrayForDraw;
	var forRemoveReklama;
	var forRemoveFromDBReklama;
	var reklamaForUpdateDb;
	var lastDATA;
	var canRemoveReklamaSrc;

	var globalTaskId;

	test();
	function test() {
		var reklArray = getReklama();
		for (var i= 0; i < reklArray.length; i++) {
			$('#ulReklamaList').append("<li>" +	"<input type='checkbox' class='forDDCheckBox' value='" + reklArray[i].img +  "'/>" + reklArray[i].img  + "</li>");
		}
	}

	$('#applyFilter').click(function() {
		forRemoveReklama = new Array();
		var selector = $(".multiSel").find('span');
		for (var mSel = 0; mSel < selector.length; mSel++) {
			forRemoveReklama.push(selector[mSel].title);
		}
	});



	$('#search-button').click(function() {
		var data2 = {action: "getCurrentTime"} ;
		$.ajax({
			type: "POST",
			url: "/getTime",
			data: data2,
			success: function(json) {
				hour = json.hour;
				minute = json.minute;

				$('#timeHour').val(hour);
				$('#timeMinute').val(minute);
			},
			dataType: "json"
		});
		$("#regModal").modal('show');

	});



	$('#regModal').bind('hidden.bs.modal', function() {

	});

	$("#fastTaskIdTest").autocomplete({
		source: [
		"50662",
		"51311",
		"68176",
		"63139",
		"63140",
		"64120",
		"72688",
		"74444",
		"1119333",
		"70562",
		"72433",
		"74340",
		"69073",
		"73769",
		"68467",
		"71431",
		"70722",
		"938168",
		"244998",
		"309721",
		"1126852",
		"329632",
		"292135",
		"999896",
		"313536",
		"347151",
		"189660",
		"280863",
		"73136",
		"76310",
		"75739",
		"69628",
		"69625",
		"68507",
		"1132609",
		"1092046",
		"1061385",
		"1092879",
		"1128139",
		"335972",
		"288151",
		"1184830",
		"1204213",
		"78626",
		"78751",
		"80348",
		"68148",
		"1157210",
		"1189678",
		"1270064",
		"1178491",
		"1021308",
		"1247748",
		"1090888",
		"1057980",
		"1022890",
		"1093511",
		"78167",
		"1136480",
		"78182",
		"79016",
		"75641",
		"1140610",
		"294721",
		"333262",
		"343923",
		"325291",
		"1221587",
		"1107884"

		]
	});

	$("#fastTaskIdTest").autocomplete({
		select: function( event, ui ) {
			console.log(ui.item.value);
			var item = ui.item.value;
			doFastTaskIdSeoSelect(item);

			//fromSeoDropDown = 'seosprint';
			//$( "#taskIdVip" ).trigger( "change" );
		}
	});

	function doFastTaskIdSeoSelect(item) {
		if (item == 68176) {
			$('#taskId').val(68176);
			$('#countOfVideo').val(22);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(2);
		} else if
		(item == 51311) {
			$('#taskId').val(51311);
			$('#countOfVideo').val(22);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(2);

		} else if
		(item == 50662) {
			$('#taskId').val(50662);
			$('#countOfVideo').val(22);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(2);
		} else if
		(item == 63139) {
			$('#taskId').val(63139);
			$('#countOfVideo').val(22);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(1);
		} else if
		(item == 64120) {
			$('#taskId').val(64120);
			$('#countOfVideo').val(22);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(1);
		} else if
		(item == 63140) {
			$('#taskId').val(63140);
			$('#countOfVideo').val(21);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(1);
		}else if
		(item == 72688) {
			$('#taskId').val(72688);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 74444) {
			$('#taskId').val(74444);
			$('#countOfVideo').val(9);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(2);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		} else if
		(item == 1119333) {
			$('#taskId').val(1119333);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(4);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 70562) {
			$('#taskId').val(70562);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		} else if
		(item == 72433) {
			$('#taskId').val(72433);
			$('#countOfVideo').val(12);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		} else if
		(item == 74340) {
			$('#taskId').val(74340);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
		}else if
		(item == 69073) {
			$('#taskId').val(69073);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 73769) {
			$('#taskId').val(73769);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(4);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 68467) {
			$('#taskId').val(68467);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 68148) {
			$('#taskId').val(68148);
			$('#countOfVideo').val(16);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(4);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 71431) {
			$('#taskId').val(71431);
			$('#countOfVideo').val(35);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 70722) {
			$('#taskId').val(70722);
			$('#countOfVideo').val(35);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 999896) {
			$('#taskId').val(999896);
			$('#countOfVideo').val(40);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 313536) {
			$('#taskId').val(313536);
			$('#countOfVideo').val(50);
			$('#countOfReklama').val(7);
			$('#countOfMove').val(2);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 347151) {
			$('#taskId').val(347151);
			$('#countOfVideo').val(45);
			$('#countOfReklama').val(6);
			$('#countOfMove').val(2);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 189660) {
			$('#taskId').val(189660);
			$('#countOfVideo').val(50);
			$('#countOfReklama').val(7);
			$('#countOfMove').val(2);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 280863) {
			$('#taskId').val(280863);
			$('#countOfVideo').val(45);
			$('#countOfReklama').val(6);
			$('#countOfMove').val(2);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 938168) {
			$('#taskId').val(938168);
			$('#countOfVideo').val(40);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 244998) {
			$('#taskId').val(244998);
			$('#countOfVideo').val(50);
			$('#countOfReklama').val(7);
			$('#countOfMove').val(2);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 309721) {
			$('#taskId').val(309721);
			$('#countOfVideo').val(45);
			$('#countOfReklama').val(6);
			$('#countOfMove').val(2);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 1126852) {
			$('#taskId').val(1126852);
			$('#countOfVideo').val(40);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 329632) {
			$('#taskId').val(329632);
			$('#countOfVideo').val(45);
			$('#countOfReklama').val(6);
			$('#countOfMove').val(2);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 292135) {
			$('#taskId').val(292135);
			$('#countOfVideo').val(50);
			$('#countOfReklama').val(7);
			$('#countOfMove').val(2);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 78751) {
			$('#taskId').val(78751);
			$('#countOfVideo').val(35);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 1092879) {
			$('#taskId').val(1092879);
			$('#countOfVideo').val(40);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(35);
			$('#betweenReklama').val(40);
		}else if
		(item == 73136) {
			$('#taskId').val(73136);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(40);
			$('#betweenReklama').val(40);
		}else if
		(item == 76310) {
			$('#taskId').val(76310);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(40);
			$('#betweenReklama').val(40);
		}else if
		(item == 75739) {
			$('#taskId').val(75739);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 78626) {
			$('#taskId').val(78626);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 80348) {
			$('#taskId').val(80348);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 69628) {
			$('#taskId').val(69628);
			$('#countOfVideo').val(18);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 69625) {
			$('#taskId').val(69625);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(4);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 68507) {
			$('#taskId').val(68507);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 1092046) {
			$('#taskId').val(1092046);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(8);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(50);
			$('#betweenReklama').val(50);
		}else if
		(item == 1061385) {
			$('#taskId').val(1061385);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(8);
			$('#countOfMove').val(2);
			$('#betweenVideo').val(50);
			$('#betweenReklama').val(50);
		}else if
		(item == 1132609) {
			$('#taskId').val(1132609);
			$('#countOfVideo').val(8);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 1128139) {
			$('#taskId').val(1128139);
			$('#countOfVideo').val(18);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 335972) {
			$('#taskId').val(335972);
			$('#countOfVideo').val(18);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 288151) {
			$('#taskId').val(288151);
			$('#countOfVideo').val(18);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 79016) {
			$('#taskId').val(79016);
			$('#countOfVideo').val(18);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		} else if
		(item == 1184830) {
			$('#taskId').val(1184830);
			$('#countOfVideo').val(20);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(61);
		}else if
		(item == 1204213) {
			$('#taskId').val(1204213);
			$('#countOfVideo').val(40);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 1157210) {
			$('#taskId').val(1157210);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(4);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 1178491) {
			$('#taskId').val(1178491);
			$('#countOfVideo').val(11);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(4);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 1021308) {
			$('#taskId').val(1021308);
			$('#countOfVideo').val(12);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 1247748) {
			$('#taskId').val(1247748);
			$('#countOfVideo').val(40);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 78167) {
			$('#taskId').val(78167);
			$('#countOfVideo').val(30);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(4);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 1136480) {
			$('#taskId').val(1136480);
			$('#countOfVideo').val(30);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(4);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 1090888) {
			$('#taskId').val(1090888);
			$('#countOfVideo').val(17);
			$('#countOfReklama').val(7);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 1057980) {
			$('#taskId').val(1057980);
			$('#countOfVideo').val(16);
			$('#countOfReklama').val(7);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 1093511) {
			$('#taskId').val(1093511);
			$('#countOfVideo').val(18);
			$('#countOfReklama').val(7);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 1022890) {
			$('#taskId').val(1022890);
			$('#countOfVideo').val(18);
			$('#countOfReklama').val(7);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 78182) {
			$('#taskId').val(78182);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(2);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 75641) {
			$('#taskId').val(75641);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 1189678) {
			$('#taskId').val(1189678);
			$('#countOfVideo').val(33);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 1270064) {
			$('#taskId').val(1270064);
			$('#countOfVideo').val(30);
			$('#countOfReklama').val(6);
			$('#countOfMove').val(5);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 1140610) {
			$('#taskId').val(1140610);
			$('#countOfVideo').val(30);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 294721) {
			$('#taskId').val(294721);
			$('#countOfVideo').val(30);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 1221587) {
			$('#taskId').val(1221587);
			$('#countOfVideo').val(12);
			$('#countOfReklama').val(5);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 1107884) {
			$('#taskId').val(1107884);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(12);
			$('#countOfMove').val(2);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 325291) {
			$('#taskId').val(325291);
			$('#countOfVideo').val(15);
			$('#countOfReklama').val(3);
			$('#countOfMove').val(2);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}else if
		(item == 343923) {
			$('#taskId').val(343923);
			$('#countOfVideo').val(10);
			$('#countOfReklama').val(2);
			$('#countOfMove').val(4);
			$('#betweenVideo').val(61);
			$('#betweenReklama').val(61);
		}else if
		(item == 333262) {
			$('#taskId').val(333262);
			$('#countOfVideo').val(30);
			$('#countOfReklama').val(4);
			$('#countOfMove').val(3);
			$('#betweenVideo').val(45);
			$('#betweenReklama').val(45);
		}

		$( "#taskId" ).trigger( "change" );
	}

	//$( "#fastTaskId" ).selectmenu();
	//$( "#fastTaskId" ).selectmenu({
	//	select: function( event, ui ) {
	//		var item = ui.item.value;
	//		if (item == 68176) {
	//			$('#taskId').val(68176);
	//			$('#countOfVideo').val(22);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(2);
	//		} else if
	//			(item == 51311) {
	//			$('#taskId').val(51311);
	//			$('#countOfVideo').val(22);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(2);
    //
	//		} else if
	//			(item == 50662) {
	//			$('#taskId').val(50662);
	//			$('#countOfVideo').val(22);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(2);
	//		} else if
	//			(item == 63139) {
	//			$('#taskId').val(63139);
	//			$('#countOfVideo').val(22);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(1);
	//		} else if
	//		(item == 64120) {
	//			$('#taskId').val(64120);
	//			$('#countOfVideo').val(22);
	//			$('#countOfReklama').val(2);
	//			$('#countOfMove').val(1);
	//		} else if
	//		(item == 63140) {
	//			$('#taskId').val(63140);
	//			$('#countOfVideo').val(21);
	//			$('#countOfReklama').val(2);
	//			$('#countOfMove').val(1);
	//		}else if
	//		(item == 72688) {
	//			$('#taskId').val(72688);
	//			$('#countOfVideo').val(15);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 74444) {
	//			$('#taskId').val(74444);
	//			$('#countOfVideo').val(9);
	//			$('#countOfReklama').val(2);
	//			$('#countOfMove').val(2);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		} else if
	//		(item == 1119333) {
	//			$('#taskId').val(1119333);
	//			$('#countOfVideo').val(15);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(4);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 70562) {
	//			$('#taskId').val(70562);
	//			$('#countOfVideo').val(15);
	//			$('#countOfReklama').val(4);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		} else if
	//		(item == 72433) {
	//			$('#taskId').val(72433);
	//			$('#countOfVideo').val(12);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		} else if
	//		(item == 74340) {
	//			$('#taskId').val(74340);
	//			$('#countOfVideo').val(20);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//		}else if
	//		(item == 69073) {
	//			$('#taskId').val(69073);
	//			$('#countOfVideo').val(10);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 73769) {
	//			$('#taskId').val(73769);
	//			$('#countOfVideo').val(13);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 68467) {
	//			$('#taskId').val(68467);
	//			$('#countOfVideo').val(15);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 68148) {
	//			$('#taskId').val(68148);
	//			$('#countOfVideo').val(16);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 71431) {
	//			$('#taskId').val(71431);
	//			$('#countOfVideo').val(35);
	//			$('#countOfReklama').val(4);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(35);
	//			$('#betweenReklama').val(40);
	//		}else if
	//		(item == 70722) {
	//			$('#taskId').val(70722);
	//			$('#countOfVideo').val(35);
	//			$('#countOfReklama').val(4);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(35);
	//			$('#betweenReklama').val(40);
	//		}else if
	//		(item == 999896) {
	//			$('#taskId').val(999896);
	//			$('#countOfVideo').val(40);
	//			$('#countOfReklama').val(5);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(35);
	//			$('#betweenReklama').val(40);
	//		}else if
	//		(item == 938168) {
	//			$('#taskId').val(938168);
	//			$('#countOfVideo').val(40);
	//			$('#countOfReklama').val(5);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(35);
	//			$('#betweenReklama').val(40);
	//		}else if
	//		(item == 1126852) {
	//			$('#taskId').val(1126852);
	//			$('#countOfVideo').val(40);
	//			$('#countOfReklama').val(5);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(35);
	//			$('#betweenReklama').val(40);
	//		}else if
	//		(item == 78751) {
	//			$('#taskId').val(78751);
	//			$('#countOfVideo').val(35);
	//			$('#countOfReklama').val(4);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(35);
	//			$('#betweenReklama').val(40);
	//		}else if
	//		(item == 1092879) {
	//			$('#taskId').val(1092879);
	//			$('#countOfVideo').val(40);
	//			$('#countOfReklama').val(5);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(35);
	//			$('#betweenReklama').val(40);
	//		}else if
	//		(item == 73136) {
	//			$('#taskId').val(73136);
	//			$('#countOfVideo').val(20);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(40);
	//			$('#betweenReklama').val(40);
	//		}else if
	//		(item == 76310) {
	//			$('#taskId').val(76310);
	//			$('#countOfVideo').val(20);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(40);
	//			$('#betweenReklama').val(40);
	//		}else if
	//		(item == 75739) {
	//			$('#taskId').val(75739);
	//			$('#countOfVideo').val(20);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(45);
	//			$('#betweenReklama').val(45);
	//		}else if
	//		(item == 78626) {
	//			$('#taskId').val(78626);
	//			$('#countOfVideo').val(20);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(45);
	//			$('#betweenReklama').val(45);
	//		}else if
	//		(item == 80348) {
	//			$('#taskId').val(80348);
	//			$('#countOfVideo').val(20);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(45);
	//			$('#betweenReklama').val(45);
	//		}else if
	//		(item == 69628) {
	//			$('#taskId').val(69628);
	//			$('#countOfVideo').val(18);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 1092046) {
	//			$('#taskId').val(1092046);
	//			$('#countOfVideo').val(10);
	//			$('#countOfReklama').val(8);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(50);
	//			$('#betweenReklama').val(50);
	//		}else if
	//		(item == 1061385) {
	//			$('#taskId').val(1061385);
	//			$('#countOfVideo').val(10);
	//			$('#countOfReklama').val(8);
	//			$('#countOfMove').val(2);
	//			$('#betweenVideo').val(50);
	//			$('#betweenReklama').val(50);
	//		}else if
	//		(item == 1132609) {
	//			$('#taskId').val(1132609);
	//			$('#countOfVideo').val(8);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 1128139) {
	//			$('#taskId').val(1128139);
	//			$('#countOfVideo').val(18);
	//			$('#countOfReklama').val(4);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(45);
	//			$('#betweenReklama').val(45);
	//		}else if
	//		(item == 79016) {
	//			$('#taskId').val(79016);
	//			$('#countOfVideo').val(18);
	//			$('#countOfReklama').val(4);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(45);
	//			$('#betweenReklama').val(45);
	//		} else if
	//		(item == 1184830) {
	//			$('#taskId').val(1184830);
	//			$('#countOfVideo').val(20);
	//			$('#countOfReklama').val(4);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(45);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 1204213) {
	//			$('#taskId').val(1204213);
	//			$('#countOfVideo').val(40);
	//			$('#countOfReklama').val(5);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(45);
	//			$('#betweenReklama').val(45);
	//		}else if
	//		(item == 1157210) {
	//			$('#taskId').val(1157210);
	//			$('#countOfVideo').val(10);
	//			$('#countOfReklama').val(5);
	//			$('#countOfMove').val(4);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 1178491) {
	//			$('#taskId').val(1178491);
	//			$('#countOfVideo').val(11);
	//			$('#countOfReklama').val(5);
	//			$('#countOfMove').val(4);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 1021308) {
	//			$('#taskId').val(1021308);
	//			$('#countOfVideo').val(12);
	//			$('#countOfReklama').val(2);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 1247748) {
	//			$('#taskId').val(1247748);
	//			$('#countOfVideo').val(40);
	//			$('#countOfReklama').val(5);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(45);
	//			$('#betweenReklama').val(45);
	//		}else if
	//		(item == 78167) {
	//			$('#taskId').val(78167);
	//			$('#countOfVideo').val(30);
	//			$('#countOfReklama').val(5);
	//			$('#countOfMove').val(4);
	//			$('#betweenVideo').val(45);
	//			$('#betweenReklama').val(45);
	//		}else if
	//		(item == 1090888) {
	//			$('#taskId').val(1090888);
	//			$('#countOfVideo').val(17);
	//			$('#countOfReklama').val(7);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(45);
	//			$('#betweenReklama').val(45);
	//		}else if
	//		(item == 1057980) {
	//			$('#taskId').val(1057980);
	//			$('#countOfVideo').val(16);
	//			$('#countOfReklama').val(7);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(45);
	//			$('#betweenReklama').val(45);
	//		}else if
	//		(item == 1093511) {
	//			$('#taskId').val(1093511);
	//			$('#countOfVideo').val(18);
	//			$('#countOfReklama').val(7);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 1022890) {
	//			$('#taskId').val(1022890);
	//			$('#countOfVideo').val(18);
	//			$('#countOfReklama').val(7);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 78182) {
	//			$('#taskId').val(78182);
	//			$('#countOfVideo').val(15);
	//			$('#countOfReklama').val(5);
	//			$('#countOfMove').val(2);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 75641) {
	//			$('#taskId').val(75641);
	//			$('#countOfVideo').val(15);
	//			$('#countOfReklama').val(3);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(61);
	//			$('#betweenReklama').val(61);
	//		}else if
	//		(item == 1189678) {
	//			$('#taskId').val(1189678);
	//			$('#countOfVideo').val(33);
	//			$('#countOfReklama').val(5);
	//			$('#countOfMove').val(3);
	//			$('#betweenVideo').val(45);
	//			$('#betweenReklama').val(45);
	//		}
	//		$( "#taskId" ).trigger( "change" );
	//	}
    //
	//});

	$( "#reklamaLocation" ).selectmenu();
	$( "#reklamaLocation" ).selectmenu({
		select: function( event, ui ) {
			var item = ui.item.value;
			console.log("item = " + item);
		}

	});

	$("#taskId").on('change', function() {
		//getDataFromDb($('#taskIdVip').val())


		var taskId = $('#taskId').val();
		globalTaskId = taskId;
		var data = {action: "selectReklamaSrc", id: taskId} ;

		$.ajax({
			type: "POST",
			async: false,
			url: "/getSrcReklama",
			data: data,
			success: function(json) {
				//lastDATA = json;
				var lastReklama = json.last_reklama;
				if (lastReklama != "") {
					forRemoveFromDBReklama = lastReklama.split(":");
				} else {
					forRemoveFromDBReklama = '';
				}

				console.log(forRemoveFromDBReklama);

				$('#prevReklamaFromDB').val(forRemoveFromDBReklama);
			},
			dataType: "json"
		});
		var connArray = new Array();
		if (taskId == 51311 || taskId == 50662 || taskId == 55217 || taskId == 60004 || taskId == 63139 || taskId == 63140 || taskId == 64120 || taskId == 65510 || taskId == 68176 || taskId == 68620) {
			connArray.push(51311);
			connArray.push(50662);
			connArray.push(55217);
			connArray.push(60004);
			connArray.push(63139);
			connArray.push(63140);
			connArray.push(64120);
			connArray.push(65510);
			connArray.push(68176);
			connArray.push(68620);

		} else if(taskId == 74340 || taskId == 70059 || taskId == 69960 || taskId == 70562 || taskId == 72433 || taskId == 72580) {
			connArray.push(72574);
			connArray.push(70059);
			connArray.push(69960);
			connArray.push(70562);
			connArray.push(72433);
			connArray.push(72580);
			connArray.push(74340);

		} else if(taskId == 69073 || taskId == 68148 || taskId == 73769 || taskId == 68467 || taskId == 67532 || taskId == 62716 || taskId == 62714 || taskId == 68148) {
			connArray.push(69073);
			connArray.push(68148);
			connArray.push(73769);
			connArray.push(68467);
			connArray.push(67532);
			connArray.push(62716);
			connArray.push(62714);
			connArray.push(68148);
		} else if (taskId == 71431 || taskId == 938168 || taskId == 999896 || taskId == 70722 || taskId == 1126852 || taskId == 78751
			|| taskId == 189660 || taskId == 292135 || taskId == 244998 || taskId == 313536 || taskId == 309721 || taskId == 280863 || taskId == 347151 || taskId == 329632) {
			connArray.push(71431);
			connArray.push(70722);
			connArray.push(78751);
			connArray.push(938168);
			connArray.push(999896);
			connArray.push(1126852);
			connArray.push(189660);
			connArray.push(292135);
			connArray.push(244998);
			connArray.push(313536);
			connArray.push(309721);
			connArray.push(280863);
			connArray.push(347151);
			connArray.push(329632);
		} else if (taskId == 73136 || taskId == 76310) {
			connArray.push(73136);
			connArray.push(76310);
		} else if (taskId == 75739 || taskId == 78626 || taskId == 80348) {
			connArray.push(75739);
			connArray.push(78626);
			connArray.push(80348);
		} else if (taskId == 72688 || taskId == 74444 || taskId == 1119333) {
			connArray.push(72688);
			connArray.push(74444);
			connArray.push(1119333);
		} else if (taskId == 69628 || taskId == 69625 || taskId == 68507) {
			connArray.push(69628);
			connArray.push(69625);
			connArray.push(68507);
		} else if (taskId == 1092046 || taskId == 1061385) {
			connArray.push(1092046);
			connArray.push(1061385);
		} else if (taskId == 1132609) {
			connArray.push(1132609);
		} else if (taskId == 1092879) {
			connArray.push(1092879);
		} else if (taskId == 1128139 || taskId == 79016 || taskId == 288151 || taskId == 335972) {
			connArray.push(1128139);
			connArray.push(79016);
			connArray.push(288151);
			connArray.push(335972);
		} else if (taskId == 1184830) {
			connArray.push(1184830);
		} else if (taskId == 1204213) {
			connArray.push(1204213);
		} else if (taskId == 1157210 || taskId == 1178491) {
			connArray.push(1157210);
			connArray.push(1178491);
		} else if (taskId == 1189678) {
			connArray.push(1189678);
		} else if (taskId == 1021308) {
			connArray.push(1021308);
		} else if (taskId == 1247748) {
			connArray.push(1247748);
		} else if (taskId == 1090888 || taskId == 1057980 || taskId == 1093511 || taskId == 1022890) {
			connArray.push(1090888);
			connArray.push(1057980);
			connArray.push(1093511);
			connArray.push(1022890);
		} else if (taskId == 78167 || taskId == 1136480) {
			connArray.push(78167);
			connArray.push(1136480);
		} else if (taskId == 78182) {
			connArray.push(78182);
		} else if (taskId == 75641) {
			connArray.push(75641);
		} else if (taskId == 1140610 || taskId == 333262 || taskId == 294721) {
			connArray.push(1140610);
			connArray.push(333262);
			connArray.push(294721);
		} else if (taskId == 343923) {
			connArray.push(343923);
		} else if (taskId == 325291) {
			connArray.push(325291);
		} else if (taskId == 1221587) {
			connArray.push(1221587);
		} else if (taskId == 1107884) {
			connArray.push(1107884);
		} else if (taskId == 1270064) {
			connArray.push(1270064);
		}
		//else if	(taskId == 1084998 || taskId == 1085285 || taskId == 1086631 || taskId == 1088642 || taskId == 1089683 || taskId == 1090914) {
		//	connArray.push(1084998);
		//	connArray.push(1085285);
		//	connArray.push(1086631);
		//	connArray.push(1088642);
		//	connArray.push(1089683);
		//	connArray.push(1090914);
		//}
		addTextInSosediReklamSrc(connArray)
	});

	function addTextInSosediReklamSrc(connArray) {
		var connArrayDATA = new Array();
		for (var i = 0; i < connArray.length; i++) {
			var data = {action: "selectReklamaSrc", id: connArray[i]} ;
			$.ajax({
				type: "POST",
				async: false,
				url: "/getSrcReklama",
				data: data,
				success: function(json) {
					//if (json.video.length > 0) {
						connArrayDATA.push(json);
					//}
				},
				dataType: "json"
			});
		}

		console.log('-=connArrayDATA=-');
		console.log(connArrayDATA);
		var connText = '';

		canRemoveReklamaSrc = new Array();

		//for (var z = 0; z < connArrayDATA.length; z++) {
		//	var taskId = connArrayDATA[z][0].task_id;
		//	var lastDate = connArrayDATA[z][0].last_date;
		//	var lastReklama = connArrayDATA[z][0].last_reklama;
		//	connText = connText + taskId + " - " + lastDate+ " - " + lastReklama + "\n"
		//}
		//var now = moment().format('l');
		var twoDaysBeforeDate = moment().subtract('days', 2).format('l');
		for (var z = 0; z < connArrayDATA.length; z++) {
			var taskId = connArrayDATA[z].task_id;
			var lastDate = connArrayDATA[z].last_date;
			var lastReklama = connArrayDATA[z].last_reklama;
			if (moment(lastDate).isAfter(twoDaysBeforeDate)) {
				var lastRekl = lastReklama.split(':');
				for (var i = 0; i < lastRekl.length; i++) {
					canRemoveReklamaSrc.push(lastRekl[i]);
				}
			}

			connText = connText + taskId + " - " + lastDate+ " - " + lastReklama + "\n"
		}

		$('#sosediReklam').val(connText);

		console.log('-=canRemoveReklama=-');
		console.log(canRemoveReklamaSrc);
	}

	$('#applyModal').click(function() {
		$('#olList').empty();
		etalonArray = new Array();
		var taskId = $('#taskId').val();
		var timeHour = $('#timeHour').val();
		var timeMinute = $('#timeMinute').val();
		var countOfVideo = $('#countOfVideo').val();
		var countOfReklama = $('#countOfReklama').val();
		var countOfMove = $('#countOfMove').val();
		var request = $('#request').val();
		var betweenVideo = $('#betweenVideo').val();
		var betweenReklama = $('#betweenReklama').val();
		if (betweenVideo == '') {
			betweenVideo = 35;
		}
		if (betweenReklama == '') {
			betweenReklama = 45;
		}


		startAJAXcalls(taskId, timeHour, timeMinute, countOfVideo, countOfReklama, countOfMove, request, betweenVideo, betweenReklama);
	});

	$('#restartModal').click(function() {
		 resetForm();
	});

	$('#closeModal').click(function() {
		resetForm();
		$("#regModal").modal('toggle');
	});

	$('#openGoogle').click(function() {

		var channelName = "TechGuyWeb";
		//$.get("https://www.googleapis.com/youtube/v3/search", {
		//	part: "snippet",
		//	//part: "id",
		//	//forUsername: channelName,
		//	channelId: "UCJIbnmV8DdqOGEcl6hm-x8w",
		//	//type: 'video',
		//	//maxResults: 50,
		//	key: 'AIzaSyD4uG1sdLHryZMwVDnUQBXXIdvGhAtGquA'}, function(data) {
		//	$.each(data.items, function(i, item) {
		//		console.log(item);
		//		//var pid = item.contentDetails.relatedPlaylists.uploads;
		//		//console.log("pid = " + pid);
		//		//getVids(pid);
		//	})
		//});

		$.get("https://www.googleapis.com/youtube/v3/search", {
			part: "snippet",
			//forUsername: channelName,
			channelId: "UCJIbnmV8DdqOGEcl6hm-x8w",
			maxResults: 50,
			order: "date",
			key: 'AIzaSyD4uG1sdLHryZMwVDnUQBXXIdvGhAtGquA'}, function(data) {
			$.each(data.items, function(i, item) {
				console.log(item);

				//var pid = item.id.playlistId;
				//if (pid != undefined) {
				//	//console.log(item);
				//	console.log(item);
				//	console.log("pid = " + pid);
				//	getVids(pid);
				//}

			})
		});
		//console.log("test2");
	});

	function getVids(pid) {
		$.get("https://www.googleapis.com/youtube/v3/playlistItems", {
			part: "snippet",
			//maxResults: 50,
			playlistId: pid,
			key: 'AIzaSyD4uG1sdLHryZMwVDnUQBXXIdvGhAtGquA'}, function(data) {
			var output;
			$.each(data.items, function(i, item) {
				console.log(item);

			})
		});
	}

	function resetForm() {
		$('#taskId').val('');
		$('#timeHour').val('');
		$('#timeMinute').val('');
		$('#countOfVideo').val('');
		$('#countOfReklama').val('');
		$('#countOfMove').val('');
		$('#betweenReklama').val('');
		$('#betweenVideo').val('');
		$('#request').val('');
	}

	function startAJAXcalls(taskId, hour, minute, countOfVideo, countOfReklama, countOfMove, request, betweenVideo, betweenReklama) {
		var sec = 10;
		getTimeAjax();
		doEtalonArray(countOfVideo, countOfReklama, countOfMove, request, taskId, hour, minute, sec, betweenVideo, betweenReklama);
		arrayForDraw = [];
		arrayForDraw = etalonArray.reverse();

		//var leftBackground = "<div class='liLeft liBackground'>";
		//var rightBackground = "<div class='liRight liBackground'>";

		arrayForDraw.forEach(function(item, i, arr) {
			var testLeftBackground = document.createElement('div');
			$(testLeftBackground).addClass("liLeft");
			$(testLeftBackground).addClass("liBackground");
			var testRightBackground = document.createElement('div');
			$(testRightBackground).addClass("liRight");
			$(testRightBackground).addClass("liBackground");

			if (i > 0) {
				//leftBackground = "<div class='liLeft'>";
				//rightBackground = "<div class='liRight'>";

				$(testLeftBackground).removeClass("liBackground");
				$(testRightBackground).removeClass("liBackground");
			}


			var testInput = document.createElement('input');
			var testSpan = document.createElement('span');
			$(testInput).attr('type', 'checkbox');
			$(testInput).addClass("liCheckBox");
			$(testInput).click(function() {
				window.open(item.url);
			});
			$(testSpan).addClass("time");
			$(testSpan).text(item.time);
			$(testLeftBackground).append(testInput).append(testSpan);

			var addrImg = document.createElement('div');
			$(addrImg).addClass("addrImg");
			$(addrImg).attr('style', "background:url(./picture/" + item.img + ".png)");
			var addrText = document.createElement('div');
			$(addrText).addClass("addrText");
			$(addrText).text(item.title);
			var addrShort = document.createElement('div');
			$(addrShort).addClass("addrShort");
			$(addrShort).text(item.source);
			var addrButton = document.createElement('button');
			$(addrButton).addClass("addrButton");

			$(testRightBackground).append(addrImg).append(addrText).append(addrShort).append(addrButton);

			var testDiv = document.createElement('div');
			var customWidthDiv = document.createElement('div');
			$(customWidthDiv).addClass("customWidth");
			$(customWidthDiv).append(testLeftBackground).append(testRightBackground);
			$(testDiv).append(customWidthDiv);

			var testLi = document.createElement('li');
			$(testLi).addClass('liStyle');
			$(testLi).append(testDiv);

			$('#olList').append(testLi);
			//var diva = "<div>" +
			//	"<div class='customWidth'>" +
			//			leftBackground +
			//		         	"<input type='checkbox' class='liCheckBox' title=" + item.url + " onclick='window.open(this.title)'>" +
			//					"<span class='time' id='testSpan'>" + item.time + "</span>" +
			//			"</div>" +
			//			rightBackground +
			//		        //"<div class='addrImg' style='" + "color:blue" + ";'></div>" +
			//		        "<div class='addrImg' style='" + "background:url(./picture/" + item.img + ".png)" + ";'></div>" +
			//				"<div class='addrText'>" + item.title + "</div>" +
			//				"<div class='addrShort'>" + item.source + "</div>" +
			//				"<button class='addrButton'></button>" +
			//			"</div>"
			//	+ "</div>"
			//+"</div>";
            //
            //
			//$('#olList').append("<li class='liStyle'>" + diva +"</li>");

		});


		//window.open('file/time.bat');
		//document.location.hash = "show_picture";
		//var u = new Url();
		//console.log(u);
		//u.host = "test";
		//console.log(u);
	}


$('#clear-browsing-data').click(function(event) {
	if (arrayForDraw[arrayForDraw.length - 4].type == "reklama") {
		location.reload();
	} else {
		var arrayForVideoShow = new Array();
		for (x = 0; x < arrayForDraw.length; x++) {
			if (arrayForDraw[x].type == "reklama") {
				window.open(arrayForDraw[x].url);
			} else if (arrayForDraw[x].type == "video") {
				arrayForVideoShow.push(arrayForDraw[x]);
			}
		}
		window.open(arrayForVideoShow[0].url);
		window.open(arrayForVideoShow[1].url);
	}

	});

	function doEtalonArray(countOfVideo, countOfReklama, countOfMove, request, taskId, hour, minute, sec, betweenVideo, betweenReklama) {
		var video = getVideo(taskId);
		var allReklama = getReklama();

		console.log("-=forRemoveFromDBReklama=-");
		console.log(forRemoveFromDBReklama);

		for (var j=0; j < forRemoveFromDBReklama.length; j++) {
			canRemoveReklamaSrc.push(forRemoveFromDBReklama[j]);
		}

		var withoutDbReklama = new Array();
		for (var i=0; i < allReklama.length; i++) {
			var obj = allReklama[i];
			var tat = $.inArray(obj.img, canRemoveReklamaSrc);
			if (tat < 0) {
				withoutDbReklama.push(obj);
			}
		}

		console.log("-withoutDbReklama-");
		console.log(withoutDbReklama);


		var reklamaWithOutReklamaFiltr = new Array();
		for (var i=0; i < withoutDbReklama.length; i++) {
			var obj = withoutDbReklama[i];
			var tat = $.inArray(obj.img, forRemoveReklama);
			if (tat < 0) {
				reklamaWithOutReklamaFiltr.push(obj);
			}
		}

		console.log("-MY_REKLAMA-");
		console.log(reklamaWithOutReklamaFiltr);

		var reklama = new Array();
		console.log($('#reklamaLocation').val());
		if ($('#reklamaLocation').val() == "ALL") {
			console.log("ALL");
			reklama =  reklamaWithOutReklamaFiltr;
		} else if ($('#reklamaLocation').val() == "USA") {
			console.log("USA");
			for (var i = 0; i < reklamaWithOutReklamaFiltr.length; i++) {
				var obj =  reklamaWithOutReklamaFiltr[i];
				if (obj.location == 'USA') {
					reklama.push(obj);
				}
			}
		} else if ($('#reklamaLocation').val() == "GERMANY") {
			console.log("GERMANY");
			for (var i = 0; i < reklamaWithOutReklamaFiltr.length; i++) {
				var obj =  reklamaWithOutReklamaFiltr[i];
				if (obj.location == 'GERMANY') {
					reklama.push(obj);
				}
			}
		} else if ($('#reklamaLocation').val() == "SINGAPORE") {
			console.log("SINGAPORE");
			for (var i = 0; i < reklamaWithOutReklamaFiltr.length; i++) {
				var obj =  reklamaWithOutReklamaFiltr[i];
				if (obj.location == 'SINGAPORE') {
					reklama.push(obj);
				}
			}
		} else if ($('#reklamaLocation').val() == "ENGLAND") {
			console.log("ENGLAND");
			for (var i = 0; i < reklamaWithOutReklamaFiltr.length; i++) {
				var obj =  reklamaWithOutReklamaFiltr[i];
				if (obj.location == 'ENGLAND') {
					reklama.push(obj);
				}
			}
		}

		var baseArray = new Array();
		defaultPosition(request, taskId);


		if (taskId == 1092046 || taskId == 1061385 || taskId == 1107884) {
			// TODO FIX LOGIC OF MIX HERE !!!!!!!!

			var videoArray = [];
			var reklamaArray = [];
			for (var i = 0; i < countOfVideo; i++) {
				var ran1 = Math.floor(Math.random() * (video.length));
				videoArray.push(video[ran1]);
				video.splice(ran1, 1);
			}

			for (var s = 0; s < countOfReklama; s++) {
				var ran2 = Math.floor(Math.random() * (reklama.length));
				reklamaArray.push(reklama[ran2]);
				reklama.splice(ran2, 1);
			}

			reklamaForUpdateDb = new Array();

			for (var a = 0; a < reklamaArray.length; a++) {
				if (reklamaArray[a].type == 'reklama') {
					reklamaForUpdateDb.push(reklamaArray[a].img);
					console.log("reklamaForUpdateDb = " + reklamaForUpdateDb);
				}
			}
			mixLinkedArray(videoArray, reklamaArray, countOfMove);

		} else {

			prepareBaseArray(video, reklama, baseArray, countOfVideo, countOfReklama);

			var leng = baseArray.length;

			reklamaForUpdateDb = new Array();
			for (var a = 0; a < baseArray.length; a++) {
				if (baseArray[a].type == 'reklama') {
					reklamaForUpdateDb.push(baseArray[a].img);
				}
			}

			mixArray(leng, baseArray, countOfMove, request);
		}

		addedTime(hour, minute, sec, betweenVideo, betweenReklama);
	}


	function prepareBaseArray(video, reklama, baseArray, countOfVideo, countOfReklama) {
		for (var i = 0; i < countOfVideo; i++) {
			var ran1 = Math.floor(Math.random() * (video.length));
			baseArray.push(video[ran1]);
			video.splice(ran1, 1);
		}

		for (var s = 0; s < countOfReklama; s++) {
			var ran2 = Math.floor(Math.random() * (reklama.length));
			baseArray.push(reklama[ran2]);
			reklama.splice(ran2, 1);
		}
	}

	function defaultPosition(request, taskId) {
		if (taskId == 72688) {
			var ip = {
				title: "Узнать IP адрес",
				type: "def",
				img: "2ip",
				source: "2ip.ru"
			};
			//var bing = {
			//	title: "mixedline - Bing",
			//	type: "def",
			//	img: "bing",
			//	source: "www.bing.com"
			//};


			//var youtube = {
			//	title: "MixedLine - YouTube",
			//	type: "def",
			//	img: "youtube",
			//	source: "www.youtube.com"
			//};
			var bing = getDefaultBing("mixedline - Bing");
			var youtube = getDefaultYouTube("MixedLine - YouTube");
			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(bing);
			etalonArray.push(youtube);
		} else if (taskId == 74444 || taskId == 1119333) {
			var ip = {
				title: "Узнать IP адрес",
				type: "def",
				img: "2ip",
				source: "2ip.ru"
			};
			//var bing = {
			//	title: "ORD bmagLine - Bing",
			//	type: "def",
			//	img: "bing",
			//	source: "www.bing.com"
			//};
			//var youtube = {
			//	title: "ORD - YouTube",
			//	type: "def",
			//	img: "youtube",
			//	source: "www.youtube.com"
			//};
			var bing = getDefaultBing("ORD bmagLine - Bing");
			var youtube = getDefaultYouTube("ORD - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(bing);
			etalonArray.push(youtube);
		}else if (taskId == 1132609) {
			//var ip = {
			//	title: "Узнать IP адрес",
			//	type: "def",
			//	img: "2ip",
			//	source: "2ip.ru"
			//};
			var google = {
				title: "Мегавыстрел на песочнице - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var youtube = {
				title: "Мегавыстрел на песочнице - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(google);
			etalonArray.push(youtube);
		}else if (taskId == 1204213) {
			//var ip = {
			//	title: "Узнать IP адрес",
			//	type: "def",
			//	img: "2ip",
			//	source: "2ip.ru"
			//};
			var whoer = getDefaultWhoer();
			var youtube = {
				title: "YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube1 = {
				title: "Mount & Blade неудачная стыковка - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube2 = {
				title: "Mount & Blade - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(youtube);
			etalonArray.push(youtube1);
			etalonArray.push(youtube2);
		} else if (taskId == 73136 || taskId == 76310) {
			//var whoer = {
			//	title: "Узнать свой IP адрес",
			//	type: "def",
			//	img: "whoer",
			//	source: "whoer.net"
			//};
			//var bing = {
			//	title: "alla khlupnova - Bing",
			//	type: "def",
			//	img: "bing",
			//	source: "www.bing.com"
			//};
			//var youtube = {
			//	title: "Alla Khlupnova - YouTube",
			//	type: "def",
			//	img: "youtube",
			//	source: "www.youtube.com"
			//};
			var whoer = getDefaultWhoer();
			var bing = getDefaultBing("alla khlupnova - Bing");
			var youtube = getDefaultYouTube("Alla Khlupnova - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(bing);
			etalonArray.push(youtube);
		} else if (taskId == 1157210) {
			var whoer = getDefaultWhoer();
			var google = {
				title: request + " - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var youtube = getDefaultYouTube("The Big City Life - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(google);
			etalonArray.push(youtube);
		} else if (taskId == 1178491) {
			var whoer = getDefaultWhoer();
			var google = {
				title: request + " - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var youtube = getDefaultYouTube("Mega Kitai - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(google);
			etalonArray.push(youtube);
		}else if (taskId == 1021308) {
			var whoer = getDefaultWhoer();
			var google = {
				title: request + " - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var youtube = getDefaultYouTube("Marik Tyminskiy - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(google);
			etalonArray.push(youtube);
		}else if (taskId == 1247748) {
			var whoer = getDefaultWhoer();
			var google = {
				title: "JohnSilver1975 - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var youtube = getDefaultYouTube("JohnSilver1975 - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(google);
			etalonArray.push(youtube);
		}else if (taskId == 78167) {
			//var whoer = getDefaultWhoer();
			//var google = {
			//	title: "JohnSilver1975 - Поиск в Google",
			//	type: "def",
			//	img: "google",
			//	source: "www.google.com"
			//};
			var youtube = {
				title: "YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube1 = getDefaultYouTube(request + " - YouTube");
			var youtube2 = getDefaultYouTube("Sergey Bobkov - YouTube");

			//etalonArray.push(ip);
			//etalonArray.push(whoer);
			$("#forGoogle").modal('show');
			etalonArray.push(youtube);
			etalonArray.push(youtube1);
			etalonArray.push(youtube2);
		}else if (taskId == 1136480) {
			var whoer = getDefaultWhoer();
			//var google = {
			//	title: "JohnSilver1975 - Поиск в Google",
			//	type: "def",
			//	img: "google",
			//	source: "www.google.com"
			//};

			var google = getLocationGoogle(request);
			var youtube = getDefaultYouTube("Sergey Bobkov - YouTube");

			//etalonArray.push(ip);
			//etalonArray.push(whoer);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(google);
			etalonArray.push(youtube);
		}else if (taskId == 1090888) {
			var whoer = getDefaultWhoer();
			//var google = {
			//	title: "JohnSilver1975 - Поиск в Google",
			//	type: "def",
			//	img: "google",
			//	source: "www.google.com"
			//};
			var youtube = {
				title: "YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube1 = getDefaultYouTube(request + " - YouTube");
			var youtube2 = getDefaultYouTube("DE Cars AUDI - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(youtube);
			etalonArray.push(youtube1);
			etalonArray.push(youtube2);
		}else if (taskId == 1057980) {
			var whoer = getDefaultWhoer();
			var youtube = {
				title: "YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube1 = getDefaultYouTube(request + " - YouTube");
			var youtube2 = getDefaultYouTube("Vetal Vetal - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(youtube);
			etalonArray.push(youtube1);
			etalonArray.push(youtube2);
		}else if (taskId == 1093511) {
			var whoer = getDefaultWhoer();
			var youtube = {
				title: "YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube1 = getDefaultYouTube(request + " - YouTube");
			var youtube2 = getDefaultYouTube("US auto industry - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(youtube);
			etalonArray.push(youtube1);
			etalonArray.push(youtube2);
		}else if (taskId == 75641) {
			var whoer = getDefaultWhoer();
			var youtube = {
				title: "YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube1 = getDefaultYouTube(request + " - YouTube");
			var youtube2 = getDefaultYouTube("ВСЕ И ОБО ВСЕМ - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(youtube);
			etalonArray.push(youtube1);
			etalonArray.push(youtube2);
		}else if (taskId == 1022890) {
			var whoer = getDefaultWhoer();
			var youtube = {
				title: "YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube1 = getDefaultYouTube("7even wonders - YouTube");
			var youtube2 = getDefaultYouTube("7even Wonders - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(youtube);
			etalonArray.push(youtube1);
			etalonArray.push(youtube2);
		}else if (taskId == 78182) {
			var ip = {
				title: "Узнать IP адрес",
				type: "def",
				img: "2ip",
				source: "2ip.ru"
			};

			var google = {
				title: request + " - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var youtube = getDefaultYouTube("Лиля+Вова - YouTube");
			$("#forGoogle").modal('show');
			etalonArray.push(ip);
			etalonArray.push(google);
			etalonArray.push(youtube);
		}else if (taskId == 1189678) {
			var whoer = getDefaultWhoer();
			var google = {
				title: request + " - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var youtube = getDefaultYouTube("Северный Ветер - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(google);
			etalonArray.push(youtube);
		}else if (taskId == 1270064) {
			var whoer = getDefaultWhoer();
			var google = getLocationGoogle(request);
			var youtube = getDefaultYouTube("Helena - YouTube"); //TODO https://www.youtube.com/channel/UCiVoHIJiSzu6Q30rRAxCPuA

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(google);
			etalonArray.push(youtube);
		}else if (taskId == 1140610 || taskId == 333262 || taskId == 294721) {
			var whoer = getDefaultWhoer();
			var google = {
				title: request + " - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var youtube = getDefaultYouTube("Galina Margaryan - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(google);
			etalonArray.push(youtube);
		}else if (taskId == 1221587) {
			var whoer = getDefaultWhoer();
			var google = {
				title: request + " - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var youtube = getDefaultYouTube("Mowyn - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(google);
			etalonArray.push(youtube);
		}else if (taskId == 1107884) {
			var whoer = getDefaultWhoer();
			var google = {
				title: request + " - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var youtube = getDefaultYouTube("Рома Чех - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(google);
			etalonArray.push(youtube);
		}else if (taskId == 325291) {
			var whoer = getDefaultWhoer();
			var youtube = {
				title: "YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube1 = getDefaultYouTube("Serhii Tsinyk - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');

			etalonArray.push(whoer);
			etalonArray.push(youtube);
			etalonArray.push(youtube1);
		} else if (taskId == 343923) {
			var whoer = getDefaultWhoer();
			var google = {
				title: request + " - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var youtube = getDefaultYouTube("BONYBOSS - YouTube");

			//etalonArray.push(ip);
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(google);
			etalonArray.push(youtube);
		} else if (taskId == 1184830) {
			var whoer = getDefaultWhoer();
			var youtube1 = {
				title: request + " - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube2 = getDefaultYouTube("ВСЕ И ОБО ВСЕМ - YouTube");
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(youtube1);
			etalonArray.push(youtube2);
		} else if (taskId == 75739 || taskId == 78626 || taskId == 80348) {
			var whoer = getDefaultWhoer();
			var bing = getDefaultBing("School LifeGo - Bing");
			var youtube = getDefaultYouTube("School LifeGo - YouTube");
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(bing);
			etalonArray.push(youtube);
		} else if (taskId == 69073) {
			var youtube1 = {
				title: "YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube2 = {
				title: request + " - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube3 = {
				title: "РЫБАЛКА - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			//var google = {
			//	title: "star-blog - Поиск в Google",
			//	type: "def",
			//	img: "google",
			//	source: "www.google.com"
			//};
			var whoer = {
				title: "Узнать свой IP адрес",
				type: "def",
				img: "whoer",
				source: "whoer.net"
			};
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(youtube1);
			etalonArray.push(youtube2);
			etalonArray.push(youtube3);

		} else if (taskId == 73769 || taskId == 68148) {
			var youtube1 = {
				title: "YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube2 = {
				title: request + " - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube3 = {
				title: "Необыкновенный мир - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			//var google = {
			//	title: "star-blog - Поиск в Google",
			//	type: "def",
			//	img: "google",
			//	source: "www.google.com"
			//};
			var whoer = {
				title: "Узнать свой IP адрес",
				type: "def",
				img: "whoer",
				source: "whoer.net"
			};
			var google = getLocationGoogle(request);
			$("#forGoogle").modal('show');
			//etalonArray.push(whoer);
			//etalonArray.push(youtube1);
			//etalonArray.push(youtube2);
			etalonArray.push(google);
			etalonArray.push(youtube3);
			//etalonArray.push(google);
			//etalonArray.push(youtube);
		} else if (taskId == 68467) {
			var youtube1 = {
				title: "YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube2 = {
				title: request + " - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube3 = {
				title: "Необыкновенный мир - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			//var google = {
			//	title: "star-blog - Поиск в Google",
			//	type: "def",
			//	img: "google",
			//	source: "www.google.com"
			//};
			var whoer = {
				title: "Узнать свой IP адрес",
				type: "def",
				img: "whoer",
				source: "whoer.net"
			};
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(youtube1);
			etalonArray.push(youtube2);
			etalonArray.push(youtube3);
		}else if (taskId == 69625 || taskId == 68507) {
			var youtube1 = {
				title: "YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube2 = {
				title: request + " - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube3 = {
				title: "МИР ПРИРОДЫ - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			//var google = {
			//	title: "star-blog - Поиск в Google",
			//	type: "def",
			//	img: "google",
			//	source: "www.google.com"
			//};

			var google = getLocationGoogle(request);

			var whoer = {
				title: "Узнать свой IP адрес",
				type: "def",
				img: "whoer",
				source: "whoer.net"
			};
			$("#forGoogle").modal('show');
			//etalonArray.push(whoer);
			//etalonArray.push(youtube1);
			//etalonArray.push(youtube2);
			etalonArray.push(google);
			etalonArray.push(youtube3);
			//etalonArray.push(google);
			//etalonArray.push(youtube);
		} else if (taskId == 70562 || taskId == 74340 || taskId==72433) {
			var youtube = {
				title: "star-blog - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var google = {
				title: "star-blog - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var whoer = {
				title: "Узнать свой IP адрес",
				type: "def",
				img: "whoer",
				source: "whoer.net"
			};
			$("#forGoogle").modal('show');
			etalonArray.push(whoer);
			etalonArray.push(google);
			etalonArray.push(youtube);
		} else if (taskId == 1092046) {
			var youtube1 = {
				title: "Мусорка в домашних условиях город липицк - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube2 = {
				title: "Бульдог Харламов - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var google = {
				title: "Мусорка в домашних условиях город липицк - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			$("#forGoogle").modal('show');
			etalonArray.push(google);
			etalonArray.push(youtube1);
			etalonArray.push(youtube2);
		} else if (taskId == 1061385) {
			var text = '';
			if (request == 'скандальная реклама ауди') {
				text = 'Скандальная реклама Ауди'
			} else if (request == 'предел лаконичности') {
				text = 'Реклама Mercedes, предел лаконичности'
			} else if (request == 'bmw creative') {
				text = 'Креативная реклама BMW   Creative ads BMW'
			} else if (request == 'хорошая дочь') {
				text = 'У вас хорошая дочь))'
			}
			var youtube1 = {
				title: text + " - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var youtube2 = {
				title: "Просто веселая реклама и видео - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			var google = {
				title: request + " - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			$("#forGoogle").modal('show');
			etalonArray.push(google);
			etalonArray.push(youtube1);
			etalonArray.push(youtube2);
		}else if (taskId == 1092879) {
			var google = {
				title: request + " - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var youtube = {
				title: "Интересный Мир - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			$("#forGoogle").modal('show');
			etalonArray.push(google);
			etalonArray.push(youtube);
		}else if (taskId == 1128139 || taskId == 79016 || taskId == 288151 || taskId == 335972) {
			var google = {
				title: request + " - Поиск в Google",
				type: "def",
				img: "google",
				source: "www.google.com"
			};
			var youtube = {
				title: "Uncle Death - YouTube",
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
			$("#forGoogle").modal('show');
			etalonArray.push(google);
			etalonArray.push(youtube);
		}else {
			var ip = {
				title: "Узнать IP адрес",
				type: "def",
				img: "2ip",
				source: "2ip.ru"
			};

			var google = getLocationGoogle(request);

			$('#').text('');
			var linkText = '';
			if (taskId == 50662) {
				var youtube = {
					title: "Irina Karabanova - YouTube",
					type: "def",
					img: "youtube",
					source: "www.youtube.com"
				};
				if (request == 'выпускной3') {
					linkText = 'https://www.google.com/?gws_rd=ssl#q=%D0%B2%D1%8B%D0%BF%D1%83%D1%81%D0%BA%D0%BD%D0%BE%D0%B93';
				}
				if (request == 'GTA V Next Gen PS4 t Airport Bus Test Drive') {
					linkText = 'https://www.google.com/?gws_rd=ssl#q=GTA+V+Next+Gen+PS4+t+Airport+Bus+Test+Drive';
				}
				if (request == '') {
					linkText = '';
				}
				if (request == '') {
					linkText = '';
				}

			} else if (taskId == 51311) {
				var youtube = {
					title: "dgon korobok - YouTube",
					type: "def",
					img: "youtube",
					source: "www.youtube.com"
				};
				if (request == 'мой цветничок') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=-yehVvnFDYHF8gejvbaQBQ&gws_rd=ssl#q=%D0%BC%D0%BE%D0%B9+%D1%86%D0%B2%D0%B5%D1%82%D0%BD%D0%B8%D1%87%D0%BE%D0%BA';
				}
				if (request == 'дети мам поздравляют') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=-yehVvnFDYHF8gejvbaQBQ&gws_rd=ssl#q=%D0%B4%D0%B5%D1%82%D0%B8+%D0%BC%D0%B0%D0%BC+%D0%BF%D0%BE%D0%B7%D0%B4%D1%80%D0%B0%D0%B2%D0%BB%D1%8F%D1%8E%D1%82';
				}
				if (request == 'фонтанчик буй ночью') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=-yehVvnFDYHF8gejvbaQBQ&gws_rd=ssl#q=%D1%84%D0%BE%D0%BD%D1%82%D0%B0%D0%BD%D1%87%D0%B8%D0%BA+%D0%B1%D1%83%D0%B9+%D0%BD%D0%BE%D1%87%D1%8C%D1%8E';
				}
			} else if (taskId == 68176) {
				var youtube = {
					title: "gold laik 0505 - YouTube",
					type: "def",
					img: "youtube",
					source: "www.youtube.com"
				};

				if (request == 'видео Dark Souls II Forgotten Bosses') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=AlihVszzA8yEYKOqkRA#q=%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE+Dark+Souls+II+Forgotten+Bosses';
				}
				if (request == 'видео Oney Plays Dark Souls PART 57 Mmmmm Anus') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=AlihVszzA8yEYKOqkRA#q=%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE+Oney+Plays+Dark+Souls+PART+57+Mmmmm+Anus';
				}
				if (request == 'видео Oney Plays RUGRATS with pals THE FINALE') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=cFWhVpyaMuzK8gfO5JmoBw#q=%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE+Oney+Plays+RUGRATS+with+pals+THE+FINALE';
				}
				if (request == 'БОМБЯЩИЙ Minecrat Map') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=AlihVszzA8yEYKOqkRA#q=%D0%91%D0%9E%D0%9C%D0%91%D0%AF%D0%A9%D0%98%D0%99+Minecrat+Map';
				}
			} else if (taskId == 63139) {
				var youtube = {
					title: "oliver - YouTube",
					type: "def",
					img: "youtube",
					source: "www.youtube.com"
				};

				if (request == 'мой матисик') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=BbGiVsecG67d8gf6-aiwBg&gws_rd=ssl#q=%D0%BC%D0%BE%D0%B9+%D0%BC%D0%B0%D1%82%D0%B8%D1%81%D0%B8%D0%BA';
				}
				if (request == 'елка в череповце') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=BbGiVsecG67d8gf6-aiwBg&gws_rd=ssl#q=%D0%B5%D0%BB%D0%BA%D0%B0+%D0%B2+%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%BE%D0%B2%D1%86%D0%B5';
				}
				if (request == 'яга прилетела') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=BbGiVsecG67d8gf6-aiwBg&gws_rd=ssl#q=%D1%8F%D0%B3%D0%B0+%D0%BF%D1%80%D0%B8%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B0';
				}
			} else if (taskId == 63140) {
				var youtube = {
					title: "евгеньичи1308 - YouTube",
					type: "def",
					img: "youtube",
					source: "www.youtube.com"
				};

				if (request == 'сельские звездочки') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=DcWiVumkOMPL8gf9m7DYBA#q=%D1%81%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5+%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4%D0%BE%D1%87%D0%BA%D0%B8';
				}
				if (request == 'тайия знакомиться с мишкой') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=DcWiVumkOMPL8gf9m7DYBA#q=%D1%82%D0%B0%D0%B9%D0%B8%D1%8F+%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D1%8C%D1%81%D1%8F+%D1%81+%D0%BC%D0%B8%D1%88%D0%BA%D0%BE%D0%B9';
				}
				if (request == 'тайия на прогулке') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=DcWiVumkOMPL8gf9m7DYBA#q=%D1%82%D0%B0%D0%B9%D0%B8%D1%8F+%D0%BD%D0%B0+%D0%BF%D1%80%D0%BE%D0%B3%D1%83%D0%BB%D0%BA%D0%B5';
				}
				if (request == 'мишка вышел погулять') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=DcWiVumkOMPL8gf9m7DYBA#q=%D0%BC%D0%B8%D1%88%D0%BA%D0%B0+%D0%B2%D1%8B%D1%88%D0%B5%D0%BB+%D0%BF%D0%BE%D0%B3%D1%83%D0%BB%D1%8F%D1%82%D1%8C';
				}
			} else if (taskId == 64120) {
				var youtube = {
					title: "максим евгеньевич - YouTube",
					type: "def",
					img: "youtube",
					source: "www.youtube.com"
				};

				if (request == 'уберем тепловоз и поедем дальше') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=z3WsVviTGqOi8wev86DYBA&gws_rd=ssl#q=%D1%83%D0%B1%D0%B5%D1%80%D0%B5%D0%BC+%D1%82%D0%B5%D0%BF%D0%BB%D0%BE%D0%B2%D0%BE%D0%B7+%D0%B8+%D0%BF%D0%BE%D0%B5%D0%B4%D0%B5%D0%BC+%D0%B4%D0%B0%D0%BB%D1%8C%D1%88%D0%B5';
				}
				if (request == 'дома печатаем денежку') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=z3WsVviTGqOi8wev86DYBA&gws_rd=ssl#q=%D0%B4%D0%BE%D0%BC%D0%B0+%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%B0%D0%B5%D0%BC+%D0%B4%D0%B5%D0%BD%D0%B5%D0%B6%D0%BA%D1%83';
				}
				if (request == 'охотнички') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=z3WsVviTGqOi8wev86DYBA&gws_rd=ssl#q=%D0%BE%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D1%87%D0%BA%D0%B8';
				}
				if (request == 'цирк или армия') {
					linkText = 'https://www.google.com/?gfe_rd=cr&ei=z3WsVviTGqOi8wev86DYBA&gws_rd=ssl#q=%D1%86%D0%B8%D1%80%D0%BA+%D0%B8%D0%BB%D0%B8+%D0%B0%D1%80%D0%BC%D0%B8%D1%8F';
				}
			}
			else if (taskId == 71431 || taskId == 938168 || taskId == 244998 || taskId == 309721) {
				var youtube = {
					title: "Pitr Puzhaev - YouTube",
					type: "def",
					img: "youtube",
					source: "www.youtube.com"
				};

				if (request == 'Замена стойки стабилизатора Suzuki Grand Vitara.') {
					linkText = 'https://www.google.com.ua/?gws_rd=ssl#q=%D0%97%D0%B0%D0%BC%D0%B5%D0%BD%D0%B0+%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B8+%D1%81%D1%82%D0%B0%D0%B1%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80%D0%B0+Suzuki+Grand+Vitara.';
				}
				if (request == 'Настройка спутниковой тарелки.') {
					linkText = '';
				}
				if (request == 'Синьор помидор и тыква.') {
					linkText = '';
				}
			}else if (taskId == 1126852 || taskId == 78751 || taskId == 292135 || taskId == 329632) {
				var youtube = {
					title: "Oliga Nikolaevna - YouTube",
					type: "def",
					img: "youtube",
					source: "www.youtube.com"
				};
			} else if (taskId == 70722 || taskId == 999896 || taskId == 189660 || taskId == 280863) {
				var youtube = {
					title: "Anatolievich - YouTube",
					type: "def",
					img: "youtube",
					source: "www.youtube.com"
				};
			} else if (taskId == 313536 || taskId == 347151) {
				var youtube = {
					title: "Household TV - YouTube",
					type: "def",
					img: "youtube",
					source: "www.youtube.com"
				};
			} else if (taskId == 69628) {
				var youtube = {
					title: "МИР ПРИРОДЫ - YouTube",
					type: "def",
					img: "youtube",
					source: "www.youtube.com"
				};
				var ip = {
					title: "Узнать свой IP адрес",
					type: "def",
					img: "whoer",
					source: "whoer.net"
				};
			}
			$('#googleLink').text(linkText);
			$("#forGoogle").modal('show');
			etalonArray.push(ip);
			etalonArray.push(google);
			etalonArray.push(youtube);
		}


	}

	function mixLinkedArray (videoArray, reklamaArray, countOfMove) {
		  for (var i = 0; i < videoArray.length; i++) {
			  etalonArray.push(videoArray[i]);
			  if (reklamaArray[i] != undefined) {
				  var rekImg = reklamaArray[i].img;
				  var rekSource = reklamaArray[i].source;
				  var mainObj = {
					  url: reklamaArray[i].mainUrl,
					  title: reklamaArray[i].title,
					  type: "reklama",
					  img: rekImg,
					  source: rekSource
				  };
				  etalonArray.push(mainObj);

				  var obj = reklamaArray[i].secUrl;
				  var secondaryArray = new Array();
				  for (a in obj) {
					  secondaryArray.push(obj[a]); 				}

				  for (var z = 0; z < countOfMove; z++) {
					  var ranf = Math.floor(Math.random() * (secondaryArray.length));
					  var secObj = {
						  url: secondaryArray[ranf].url,
						  title: secondaryArray[ranf].title,
						  type: "reklama",
						  img: rekImg,
						  source: rekSource
					  };
					  etalonArray.push(secObj);
					  secondaryArray.splice(ranf, 1);
				  }
			  }
		  }
	}

	function mixArray(leng, baseArray, countOfMove) {
		for (var i = 0; i < leng; i++) {
			var ran = Math.floor(Math.random() * (baseArray.length));
			while (i == 0 && baseArray[ran].type == 'reklama') {
				ran = Math.floor(Math.random() * (baseArray.length));
			}

			//TODO fix MIXING (out of Array)

			//while (baseArray[ran].type == 'reklama' && (i == 0 || (baseArray[ran].type == etalonArray[etalonArray.length-1].type))) {
			//	ran = Math.floor(Math.random() * (baseArray.length));
            //
			//}

			if (baseArray[ran].type == 'reklama') {
				var rekImg = baseArray[ran].img;
				var rekSource = baseArray[ran].source;
				var mainObj = {
					url: baseArray[ran].mainUrl,
					title: baseArray[ran].title,
					type: "reklama",
					img: rekImg,
					source: rekSource
				};
				etalonArray.push(mainObj);

				var obj = baseArray[ran].secUrl;
				var secondaryArray = new Array();
				for (a in obj) {
					secondaryArray.push(obj[a]); 				}

				for (var z = 0; z < countOfMove; z++) {
					var ranf = Math.floor(Math.random() * (secondaryArray.length));
					var secObj = {
						url: secondaryArray[ranf].url,
						title: secondaryArray[ranf].title,
						type: "reklama",
						img: rekImg,
						source: rekSource
					};
					etalonArray.push(secObj);
					secondaryArray.splice(ranf, 1);
				}

			} else {
				etalonArray.push(baseArray[ran]);
			}
			baseArray.splice(ran, 1);
		}
	}

	function addedTime(hour, minute, sec, betweenVideo, betweenReklama) {
		for (var i = 0; i < etalonArray.length; i++) {
			//if (etalonArray[i].type == 'reklama') {
			//	sec = sec + 35;
			//} else {
			//	sec = sec + 25;
			//}

			if (etalonArray[i].type == 'reklama') {
				sec = sec + Number(betweenReklama);
			} else {
				sec = sec + Number(betweenVideo);
			}

			if (sec >= 60) {
				sec = sec - 60;
				minute++;
				if (minute >= 60) {
					minute = minute - 60;
					hour++;
				}
			}
			var corMinture = "";
			if (minute < 10) {
				corMinture = "0" + minute;
			} else {
				corMinture = minute;
			}
			etalonArray[i].time = hour + ":" + corMinture;
		}
	}



	function getTimeAjax() {
		var dayOfWeek;
		var dateOfMonth;
		var month;
		var year;
		var data2 = {action: "getTime"} ;
		$.ajax({
			type: "POST",
			url: "/getTime",
			//url: "service.php",
			data: data2,
			success: function(json) {
				dateOfMonth = json.dateOfMonth;
				month = json.month;
				year = json.year;
				switch (json.dayOfWeek) {
					case 2:
						dayOfWeek = "понедельник";
						break;
					case 3:
						dayOfWeek = "вторник";
						break;
					case 4:
						dayOfWeek = "среда";
						break;
					case 5:
						dayOfWeek = "четверг";
						break;
					case 6:
						dayOfWeek = "пятница";
						break;
					case 7:
						dayOfWeek = "суббота";
						break;
					case 1:
						dayOfWeek = "воскресенье";
						break;
				}
				switch (json.month) {
					case '1':
						month = "января";
						break;
					case '2':
						month = "февраля";
						break;
					case '3':
						month = "марта";
						break;
					case '4':
						month = "апреля";
						break;
					case '5':
						month = "мая";
						break;
					case '6':
						month = "июня";
						break;
					case '7':
						month = "июля";
						break;
					case '8':
						month = "августа";
						break;
					case '9':
						month = "сентября";
						break;
				}
				var date = "Сегодня - " + dayOfWeek + ", " + dateOfMonth + " " +  month + " " + year + " г.";
				$("#day").text(date);
			},
			dataType: "json"
		});
	}

	$('#updateDbb').click(function() {
		//var r = confirm("forRemoveFromDBReklama = " + forRemoveFromDBReklama + "\n" + "UPDATE IN DB !!! OK ???");
		var r = confirm("forRemoveFromDBReklama = " + forRemoveFromDBReklama +  "\n" + "UPDATE IN DB !!! OK ???");
		if (r == true) {
			updateMyDB();
		} else {

		}
	});

	function updateMyDB() {
		var taskId = globalTaskId;

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

		for (var i = 0; i < reklamaForUpdateDb.length; i++) {
			if (i == reklamaForUpdateDb.length - 1) {
				lastReklama = lastReklama + reklamaForUpdateDb[i];
			} else {
				lastReklama = lastReklama + reklamaForUpdateDb[i] + ":";
			}
		}

		var task = {action: "selectReklamaSrc", id: taskId};
		$.ajax({
			type: "POST",
			url: "/getSrcReklama",
			data: task,
			success: function(json) {
				var data;
				if (json.task_id == "") {
					data = {action: "insetReklamaSrc",
						taskId: taskId,
						prevDate: prevDate,
						prevReklama: prevReklama,
						lastDate: lastDate,
						lastReklama: lastReklama
					} ;
				} else {
					data = {action: "updateReklamaSrc",
						taskId: taskId,
						prevDate: prevDate,
						prevReklama: prevReklama,
						lastDate: lastDate,
						lastReklama: lastReklama
					} ;
				}

				$.ajax({
					type: "POST",
					url: "/getSrcReklama",
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

	$(window).on('keydown', function(u){
		if (event.keyCode == 85) {
			$('#updateDbb').toggleClass('updateDbButton');
		}
	});

	function getDefaultYouTube(myTitle) {
		if (myTitle == "") {
			alert("TITLE NULL");
		} else {
			var youtube = {
				title: myTitle,
				type: "def",
				img: "youtube",
				source: "www.youtube.com"
			};
		}

		return youtube;
	}

	function getDefaultBing(myTitle) {
		var bing = {
			title: myTitle,
			type: "def",
			img: "bing",
			source: "www.bing.com"
		};
		return bing;
	}

	function getDefaultWhoer() {
		var whoer = {
			title: "Узнать свой IP адрес",
			type: "def",
			img: "whoer",
			source: "whoer.net"
		};
		return whoer;
	}

	function getLocationGoogle(request) {
		var google = {
			title: request + " - Поиск в Google",
			type: "def",
			img: "google"
		};

		if ($('#reklamaLocation').val() == "ALL") {
			google.source = "www.google.com";
		} else if ($('#reklamaLocation').val() == "USA") {
			google.source = "www.google.com";
		} else if ($('#reklamaLocation').val() == "GERMANY") {
			google.source = "www.google.de";
		} else if ($('#reklamaLocation').val() == "SINGAPORE") {
			google.source = "www.google.com.sg";
		} else if ($('#reklamaLocation').val() == "ENGLAND") {
			google.source = "www.google.co.uk";
		}
		return google;
	}
});

