import org.json.JSONObject;
import parser.Parser;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by yustymenko on 25.03.2016.
 */
@WebServlet("/getLinkVideo")
public class LinkVideoServlet extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id");
		String count = request.getParameter("count");

		Parser parser = new Parser();
		String url = getUrl(id);
		int cnt = Integer.parseInt(count);
		ArrayList<String> video = parser.getVideo(url, cnt);
		System.out.println(video);

		JSONObject resultJson = new JSONObject();
		resultJson.put("video", video);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(resultJson.toString());
	}

	public String getUrl(String id) {
		Map<String, String> urlMap = new HashMap<>();
		urlMap.put("75083", "https://www.youtube.com/channel/UCyW9f4PSvEzmczCoD_Z0Byg/videos");
		urlMap.put("75084", "https://www.youtube.com/channel/UC9WSWp-Uq7BFODqeukYBr1w/videos");
		urlMap.put("75085", "https://www.youtube.com/channel/UCkatSKcD1cV1IRTzRxBCJgQ/videos");


		urlMap.put("75531", "https://www.youtube.com/channel/UCLLjXrp86LtbYQhldq-k5lg/videos");
		urlMap.put("75532", "https://www.youtube.com/channel/UCvZHctQ9jBwhg5CJnMwFtuA/videos");
		urlMap.put("75556", "https://www.youtube.com/channel/UCYumfjCRHIMh-nuNGx-lIxA/videos");




		urlMap.put("1121247", "https://www.youtube.com/channel/UCPuWsn09os_xr7VKJpUDUIg/videos");
		urlMap.put("1122181", "https://www.youtube.com/channel/UCYwwugaXiv1Rgx1zgfovb9A/videos");
		urlMap.put("1123319", "https://www.youtube.com/channel/UCT2i0Iqfw4_S9LKyqmP3G3g/videos");
		urlMap.put("1124568", "https://www.youtube.com/channel/UCgJIGNTtj8u9-MIyiPNNXqw/videos");
		urlMap.put("1128129", "https://www.youtube.com/channel/UChEx4Jc6Ox3wjokFCF7RD8A/videos");
		urlMap.put("1129320", "https://www.youtube.com/channel/UC4Mig-XEnKTIKhVFp_9djlg/videos");
		urlMap.put("1153212", "https://www.youtube.com/channel/UCIoEdfPkxp4d-Jx0N0I3aGg/videos");

		urlMap.put("1177700", "https://www.youtube.com/channel/UCPuWsn09os_xr7VKJpUDUIg/videos");
		urlMap.put("1177709", "https://www.youtube.com/channel/UCYwwugaXiv1Rgx1zgfovb9A/videos");
		urlMap.put("1177717", "https://www.youtube.com/channel/UCT2i0Iqfw4_S9LKyqmP3G3g/videos");
		urlMap.put("1179303", "https://www.youtube.com/channel/UCgJIGNTtj8u9-MIyiPNNXqw/videos");
		urlMap.put("1179305", "https://www.youtube.com/channel/UChEx4Jc6Ox3wjokFCF7RD8A/videos");
		urlMap.put("1179311", "https://www.youtube.com/channel/UC4Mig-XEnKTIKhVFp_9djlg/videos");
		urlMap.put("1180845", "https://www.youtube.com/channel/UCIoEdfPkxp4d-Jx0N0I3aGg/videos");

		urlMap.put("1124008", "https://www.youtube.com/channel/UCYA06kCVjNmsvBBodxqtorA/videos");
		urlMap.put("1124028", "https://www.youtube.com/channel/UCtKtcgxuenxmVHNEutC5_wA/videos");
		urlMap.put("1124038", "https://www.youtube.com/channel/UCFEhxIU7ZgU8BuaZ8BJ5zKg/videos");
		urlMap.put("1124053", "https://www.youtube.com/channel/UCHzloEP5Ti4kBcNQONPbVHA/videos");
		urlMap.put("1124059", "https://www.youtube.com/channel/UC1wIAUSKiW791XdbUmYSixA/videos");

		urlMap.put("317244", "https://www.youtube.com/channel/UCtKtcgxuenxmVHNEutC5_wA/videos");
		urlMap.put("317246", "https://www.youtube.com/channel/UCYA06kCVjNmsvBBodxqtorA/videos");
		urlMap.put("317248", "https://www.youtube.com/channel/UCFEhxIU7ZgU8BuaZ8BJ5zKg/videos");
		urlMap.put("320723", "https://www.youtube.com/channel/UC1wIAUSKiW791XdbUmYSixA/videos");


		urlMap.put("74678", "https://www.youtube.com/channel/UCPuWsn09os_xr7VKJpUDUIg/videos");
		urlMap.put("74693", "https://www.youtube.com/channel/UCYwwugaXiv1Rgx1zgfovb9A/videos");
		urlMap.put("74744", "https://www.youtube.com/channel/UCT2i0Iqfw4_S9LKyqmP3G3g/videos");
		urlMap.put("74840", "https://www.youtube.com/channel/UCgJIGNTtj8u9-MIyiPNNXqw/videos");
		urlMap.put("74871", "https://www.youtube.com/channel/UChEx4Jc6Ox3wjokFCF7RD8A/videos");
		urlMap.put("74911", "https://www.youtube.com/channel/UC4Mig-XEnKTIKhVFp_9djlg/videos");
		urlMap.put("78531", "https://www.youtube.com/channel/UCIoEdfPkxp4d-Jx0N0I3aGg/videos");


		urlMap.put("999393", "https://www.youtube.com/channel/UChE136MOOLHQq-2NwkLADKg/videos");
		urlMap.put("1004892", "https://www.youtube.com/channel/UCt5ZY0P3imlPuGFR5LclDgg/videos");
		urlMap.put("1011645", "https://www.youtube.com/channel/UCO3WrWXEdlTLHTgoZ1Ir0LQ/videos");
		urlMap.put("1273318", "https://www.youtube.com/channel/UCFSwYsRfHLc248EhlG7UiQg/videos");
		urlMap.put("1273319", "https://www.youtube.com/channel/UCWGOlz-7dB1_mBXHz1NMENQ/videos");


		urlMap.put("1066756", "https://www.youtube.com/channel/UCxYdk3mz7om-i34wSPZygkg/videos");
		urlMap.put("1066880", "https://www.youtube.com/channel/UCEK7NT0di7nbE_bkiYnP_Cw/videos");
		urlMap.put("1116723", "https://www.youtube.com/channel/UCMrC6XIp6CFuUGLNR8UtXqA/videos");

		urlMap.put("74567", "https://www.youtube.com/channel/UCFu-R3dQynMjseoHODl06Sg/videos");
		urlMap.put("74568", "https://www.youtube.com/channel/UCQc0Mb5RILRzjwMYROGfogw/videos");
		urlMap.put("75078", "https://www.youtube.com/channel/UCoNFhBfg9irRBNbXSU1q4SQ/videos");

		urlMap.put("1110093", "https://www.youtube.com/channel/UCLLjXrp86LtbYQhldq-k5lg/videos");
		urlMap.put("1110113", "https://www.youtube.com/channel/UCvZHctQ9jBwhg5CJnMwFtuA/videos");
		urlMap.put("1110123", "https://www.youtube.com/channel/UCYumfjCRHIMh-nuNGx-lIxA/videos");
		urlMap.put("1130840", "https://www.youtube.com/channel/UCLLjXrp86LtbYQhldq-k5lg/videos");
		urlMap.put("1130841", "https://www.youtube.com/channel/UCvZHctQ9jBwhg5CJnMwFtuA/videos");
		urlMap.put("1130842", "https://www.youtube.com/channel/UCYumfjCRHIMh-nuNGx-lIxA/videos");


		urlMap.put("1080945", "https://www.youtube.com/channel/UCFu-R3dQynMjseoHODl06Sg/videos");
		urlMap.put("1080949", "https://www.youtube.com/channel/UCQc0Mb5RILRzjwMYROGfogw/videos");
		urlMap.put("1094591", "https://www.youtube.com/channel/UCoNFhBfg9irRBNbXSU1q4SQ/videos");
		urlMap.put("1086084", "https://www.youtube.com/user/beatboxbot888/videos");
		urlMap.put("1086789", "https://www.youtube.com/channel/UCKORjIZ10GMzApVO-ccoU4w/videos");
		urlMap.put("1088360", "https://www.youtube.com/channel/UC1tAtGee_K5E2uPVGSkWDKA/videos");
		urlMap.put("1088343", "https://www.youtube.com/channel/UCCrQvVTHmT8CQyMSZeXkyrA/videos");
		urlMap.put("1155039", "https://www.youtube.com/user/beatboxbot888/videos");
		urlMap.put("1155073", "https://www.youtube.com/channel/UCKORjIZ10GMzApVO-ccoU4w/videos");
		urlMap.put("1155522", "https://www.youtube.com/channel/UCCrQvVTHmT8CQyMSZeXkyrA/videos");
		urlMap.put("1155533", "https://www.youtube.com/channel/UC1tAtGee_K5E2uPVGSkWDKA/videos");

		urlMap.put("72574", "https://www.youtube.com/channel/UCmMCD0g-63djO57d5Rd2NuA/videos");
		urlMap.put("72575", "https://www.youtube.com/channel/UCpShBTb76xWEMcPcGXfIFoQ/videos");
		urlMap.put("76141", "https://www.youtube.com/channel/UCQfl-a38QuL6bzZXZ9DdEfg/videos");

		urlMap.put("935594", "https://www.youtube.com/channel/UC94-proOTvY4Mel2eghwRIw/videos");
		urlMap.put("935599", "https://www.youtube.com/channel/UCmMCD0g-63djO57d5Rd2NuA/videos");
		urlMap.put("962479", "https://www.youtube.com/channel/UCpShBTb76xWEMcPcGXfIFoQ/videos");
		urlMap.put("1007726", "https://www.youtube.com/channel/UCQfl-a38QuL6bzZXZ9DdEfg/videos");

		urlMap.put("576107", "https://www.youtube.com/channel/UCb_luRLomqzaXHUELvAMCBQ/videos");


		urlMap.put("676539", "https://www.youtube.com/channel/UCAwf1ZfLEDVfc9opxGxYTWg/videos");
		urlMap.put("745597", "https://www.youtube.com/channel/UCpf5VVw4t21rBWvhvAJqMng/videos");

		urlMap.put("1144253", "https://www.youtube.com/channel/UCFu-R3dQynMjseoHODl06Sg/videos");
		urlMap.put("1144255", "https://www.youtube.com/channel/UCQc0Mb5RILRzjwMYROGfogw/videos");
		urlMap.put("1144256", "https://www.youtube.com/channel/UCoNFhBfg9irRBNbXSU1q4SQ/videos");
		urlMap.put("1172104", "https://www.youtube.com/channel/UCKMBGRNCRxSAWmhl54ilMkQ/videos");
		urlMap.put("1172517", "https://www.youtube.com/channel/UC9kHHSsYAzFtE2GVhLHROvQ/videos");

		urlMap.put("69169", "https://www.youtube.com/channel/UCjxvRI52dHhpZFYlohv3-rg/videos");



		urlMap.put("75914", "");
		urlMap.put("77692", "https://www.youtube.com/channel/UCH5VmU2l3wK6Pp7FZL6DGmA/videos");
		urlMap.put("77712", "https://www.youtube.com/channel/UCd6m2TdaIMhyCZjeX2u2Z6w/videos");
		urlMap.put("77714", "https://www.youtube.com/channel/UCi_UxcuUUusoQbDL4F-NqbQ/videos");
		urlMap.put("77715", "https://www.youtube.com/channel/UCS5P1v-l1T44opFwBtU_umQ/videos");
		urlMap.put("77716", "https://www.youtube.com/channel/UCfaa8J3ubT6w6zketpQ88LA/videos");
		urlMap.put("77717", "https://www.youtube.com/channel/UC5HnZ8PyNA8c57CDXYTVUmg/videos");
		urlMap.put("77923", "https://www.youtube.com/channel/UCVHof8RQfj4imB6wYbL5PTA/videos");
		urlMap.put("77924", "https://www.youtube.com/channel/UC8LyaHBHfJXRpvd9dVru-Ow/videos");


		urlMap.put("69489", "https://www.youtube.com/channel/UCCZQeSn3sVDL-m-i6Wv9svA/videos");
		urlMap.put("69490", "https://www.youtube.com/channel/UCtkf2PM2n_xiHRXZmLsZoWw/videos");
		urlMap.put("69491", "https://www.youtube.com/channel/UCIvup9WMgh9MxdKVc22Ku0g/videos");
		urlMap.put("69493", "https://www.youtube.com/channel/UCtXIrukJ2NHSRA7zomaHlMg/videos");
		urlMap.put("74826", "https://www.youtube.com/channel/UCEGGKkKm-RM1h8RE2bR-sYQ/videos");


		urlMap.put("76111", "https://www.youtube.com/channel/UCYQ-qFc8k9UteAufUq2kARQ/videos");
		urlMap.put("76112", "https://www.youtube.com/channel/UCGMDAoU4YbTFKisj1Wqd9iw/videos");
		urlMap.put("76487", "https://www.youtube.com/channel/UCkAmem1RGF98-U3R_tvhszg/videos");

		urlMap.put("335305", "https://www.youtube.com/channel/UCkAmem1RGF98-U3R_tvhszg/videos");
		urlMap.put("325117", "https://www.youtube.com/channel/UCYQ-qFc8k9UteAufUq2kARQ/videos");
		urlMap.put("325112", "https://www.youtube.com/channel/UCGMDAoU4YbTFKisj1Wqd9iw/videos");

		urlMap.put("967829", "https://www.youtube.com/user/worldofattractions/videos");

		urlMap.put("1036038", "https://www.youtube.com/channel/UCzEvgA6NORhomBidevBIzDw/videos");
		urlMap.put("1036072", "https://www.youtube.com/channel/UCGEukGoXACkdfd-AGOFFvOQ/videos");
		urlMap.put("1070794", "https://www.youtube.com/channel/UCsfedNKNzaHTjzN9o7vm4Qg/videos");
		urlMap.put("1171462", "https://www.youtube.com/channel/UCArApfZw4r5WAUj1Bw9exAA/videos");

		urlMap.put("630366", "https://www.youtube.com/channel/UCrqHrHIcxbuc_tGZyrJkdow/videos");
		urlMap.put("812267", "https://www.youtube.com/channel/UCwpepWeGN4HlvLtIp0pkrnw/videos");
		urlMap.put("936608", "https://www.youtube.com/channel/UCwE-AXDuKkVHvqIuqrofx7A/videos");
		urlMap.put("609078", "https://www.youtube.com/channel/UC_kmsiYRoej3DZ6EduHHE9A/videos");


		urlMap.put("965831", "https://www.youtube.com/channel/UCOQRI5FUTDovIfQd9VIgmuA/videos");
		urlMap.put("979080", "https://www.youtube.com/channel/UCvwAfzm5u8HSgslsV5s5PhQ/videos");
		urlMap.put("1064464", "https://www.youtube.com/channel/UCgA5KH4Y0xcfO-tzaQK4R1w/videos");
		urlMap.put("1064467", "https://www.youtube.com/channel/UCzA8UUg_2v35AZQ96oAfJkg/videos");

		urlMap.put("1063755", "https://www.youtube.com/channel/UCiWly-uSh5fqmq3sY6oq1KA/videos");

		urlMap.put("1137126", "https://www.youtube.com/channel/UCudyczqcTEcyH9s6oxzAN3Q/videos");
		urlMap.put("878796", "https://www.youtube.com/channel/UCBF5nFVzEejLVEaj6803tPA/videos");

		urlMap.put("937418", "https://www.youtube.com/channel/UCvyNadCM8Qfl-T4LmGqhnuw/videos");
		urlMap.put("1081750", "https://www.youtube.com/channel/UCswI2s8hQK2niPeOOCFppxQ/videos");

		urlMap.put("52221", "https://www.youtube.com/user/RuslanHacker/videos");


		urlMap.put("608316", "https://www.youtube.com/user/luckybridge1/videos");
		urlMap.put("908673", "https://www.youtube.com/user/luckybridge1/videos");
		urlMap.put("1079336", "https://www.youtube.com/channel/UCVX0NMBMEU2PLN_LBqYC86w/videos");

		urlMap.put("1160443", "https://www.youtube.com/channel/UCdEvxEm2U2Iotz7PJmDzK5Q/videos");
		urlMap.put("1186645", "https://www.youtube.com/channel/UC7ApEqEdl06Xaq1zzR5JgHA/videos");

		urlMap.put("871441", "https://www.youtube.com/channel/UCv5DNN3AX-6_TkkPZVz3OXw");
		urlMap.put("1174068", "https://www.youtube.com/channel/UCFhVSPl-PoOeUBqp9j96BhA");
		urlMap.put("871450", "https://www.youtube.com/channel/UCf6OaRaBNBJfKTtvfg6akaA");


		urlMap.put("344614", "https://www.youtube.com/channel/UC7ApEqEdl06Xaq1zzR5JgHA/videos");
		urlMap.put("344615", "https://www.youtube.com/channel/UCdEvxEm2U2Iotz7PJmDzK5Q/videos");

		urlMap.put("217687", "https://www.youtube.com/channel/UCfh07MF9gInLFA6V35jepMw/videos");

		urlMap.put("631214", "https://www.youtube.com/channel/UCa6QMJ_MJji23w3Inh_ad8A/videos");
		urlMap.put("721742", "https://www.youtube.com/channel/UCJ8qzDKJ0YAtfQ8DdXSeFTQ/videos");
		urlMap.put("764355", "https://www.youtube.com/channel/UCcbep4AKLt7M-J98vkhpeoA/videos");
		urlMap.put("765511", "https://www.youtube.com/channel/UCTiaqUi9YPiqlV1t7qOt8FQ/videos");

		urlMap.put("934679", "https://www.youtube.com/channel/UCG1HLrEvYpHI3ERWHE6FMPQ/videos");
		urlMap.put("944973", "https://www.youtube.com/channel/UClMdpwxPcZvnDecjKEQa-0A/videos");
		urlMap.put("987729", "https://www.youtube.com/channel/UCfeEHAHH79cjm8MELm44XJQ/videos");
		urlMap.put("1013162", "https://www.youtube.com/channel/UCJSX_Jr_5U7gPQLSy_Msbpg/videos");

		urlMap.put("442767", "https://www.youtube.com/user/bas777100/videos");
		urlMap.put("337481", "https://www.youtube.com/user/bas777100/videos");
		urlMap.put("60860", "https://www.youtube.com/user/bas777100/videos");

		urlMap.put("1014553", "https://www.youtube.com/channel/UCkB_Js1v4a1ZdF0lDilpEAQ/videos");
		urlMap.put("1014563", "https://www.youtube.com/channel/UC-23wVZKaCGSw4R4LsoLcGw/videos");
		urlMap.put("1039735", "https://www.youtube.com/user/The71vadim/videos");


		//TODO NEW
		urlMap.put("1174983", "https://www.youtube.com/channel/UCJAQbEGzK4_hfw5hWr2Cvgw/videos");
		urlMap.put("1232179", "https://www.youtube.com/user/fitnessandweightlos1/videos");
		urlMap.put("1233824", "https://www.youtube.com/channel/UC_yM4b6pkT7h5CgogFRbmag/videos");
		urlMap.put("1205301", "https://www.youtube.com/channel/UC48DURvA0KtM6-_ldH7f_bg/videos");
		urlMap.put("1222315", "https://www.youtube.com/channel/UCpUzGFdYx19IfkeFIJx5vtA/videos");
		urlMap.put("543675", "https://www.youtube.com/channel/UCTT-ZDMuF3paZeR61ia9ZFw/videos");
		urlMap.put("1200264", "https://www.youtube.com/channel/UCk61G6NRiifQpujHr-CqyIQ/videos");
		urlMap.put("1215689", "https://www.youtube.com/channel/UCvDwXFtZKRUCzou9IfWrYDA/videos");
		urlMap.put("1259852", "https://www.youtube.com/channel/UC_PdlkS8sx1FPzJaj-buamw/videos");
		urlMap.put("1266951", "https://www.youtube.com/channel/UC07JNZA3uJ47HFttfXp95lA/videos");
		urlMap.put("1241333", "https://www.youtube.com/channel/UCLy2dyEgFpoApknfhDI3wtA/videos");
		urlMap.put("985824", "https://www.youtube.com/channel/UC5uvOkLBO1bhd1KJlrvTXug/videos");
		urlMap.put("1071173", "https://www.youtube.com/user/smaaal100/videos");
		urlMap.put("1232663", "https://www.youtube.com/user/89120280007/videos");
		urlMap.put("325891", "https://www.youtube.com/channel/UCN3maMCHkoIui2hvvtBC8rg/videos");



		urlMap.put("1142576", "https://www.youtube.com/user/ONBrest/videos");
		urlMap.put("1245042", "https://www.youtube.com/channel/UCHtPCDJY8x96_HwS7Ji65-g/videos");
		urlMap.put("1243379", "https://www.youtube.com/user/olegnesterov1/videos");
		urlMap.put("1166386", "https://www.youtube.com/user/nachasti/videos");
		urlMap.put("865275", "https://www.youtube.com/channel/UCARzipUZ6HDp7APES_1TAOw/videos");
		urlMap.put("460206", "https://www.youtube.com/channel/UCw8xGuRpyFaFHw5Dqs3pgYg/videos");
		urlMap.put("673480", "https://www.youtube.com/channel/UCtv9HDAE0PH3iVyfyPouphA/videos");
		urlMap.put("1200729", "https://www.youtube.com/channel/UCl4L1mONPqg8oW-1hcKw4tA/videos");
		urlMap.put("1200741", "https://www.youtube.com/channel/UCmb0SFIIlmEVxoYvplHvHdQ/videos");
		urlMap.put("343015", "https://www.youtube.com/channel/UC7_8lKRedMMrweQ4saPGCZA/videos");
		urlMap.put("1221525", "https://www.youtube.com/channel/UC7bEccoz6txxd-yvflI7x6A/videos");
		urlMap.put("1232726", "https://www.youtube.com/channel/UCObSRvYZGhU9oSXLfGyvzuQ/videos");
		urlMap.put("1257304", "https://www.youtube.com/channel/UCffkl_H53ZrG-URvv6gwWlQ/videos");
		urlMap.put("1231965", "https://www.youtube.com/channel/UCtedVxRJM4vEEGU8Etu61Yw/videos");
		urlMap.put("1258719", "https://www.youtube.com/channel/UCzinmELQfbCMvVwEfSCF7JQ/videos");

		urlMap.put("837146", "https://www.youtube.com/user/toursvit/videos");
		urlMap.put("771880", "https://www.youtube.com/channel/UC0FEgCFxMuQRoPNbuIMjcMQ/videos");
		urlMap.put("758932", "https://www.youtube.com/channel/UCAM00dyt1Z0T5NSczb6vZrA/videos");

		urlMap.put("1115544", "https://www.youtube.com/channel/UCV0r38Kaj2-YyJYA3pXVF9w/videos");

		urlMap.put("242794", "https://www.youtube.com/c/alexvakarchuk/videos");

		urlMap.put("1118697", "https://www.youtube.com/c/%D0%B2%D0%B0%D0%B4%D0%B8%D0%BC%D1%8F%D0%B4%D0%BB%D0%BE%D1%81%D1%8C/videos");
		urlMap.put("1190258", "https://www.youtube.com/channel/UCIJULqkT9zOqKmzNyeiTCyw/videos");
		urlMap.put("1257813", "https://www.youtube.com/channel/UCFs9BdKeloue39gzPjgvoLA/videos");
		urlMap.put("1241449", "https://www.youtube.com/channel/UC7IQcdCJWJLZI719b2DPPTQ/videos");
		urlMap.put("1131059", "https://www.youtube.com/channel/UCGr4DqopDPMaOAV1crZw_0g/videos");
		urlMap.put("1197088", "https://www.youtube.com/channel/UCndqxqf_oFGZWKtFwxOQy0g/videos");
		urlMap.put("1197089", "https://www.youtube.com/channel/UCPj7WJTM0YlQQBgC6o5GpTw/videos");
		urlMap.put("1197090", "https://www.youtube.com/channel/UCcXmdCwGiNt-Yx1_2QSuiJg/videos");
		urlMap.put("1220946", "https://www.youtube.com/channel/UCRkELkxhi4Uu9nKrk8j8Ecg/videos");

		urlMap.put("80880", "https://www.youtube.com/channel/UCIkBLbS31V2GyK6E_ea3hGA/videos");
		urlMap.put("65475", "https://www.youtube.com/channel/UCARzipUZ6HDp7APES_1TAOw/videos");



		String url = urlMap.get(id);
		return url;
	}
}
