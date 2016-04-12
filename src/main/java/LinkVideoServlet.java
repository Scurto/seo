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

		urlMap.put("1124008", "https://www.youtube.com/channel/UCYA06kCVjNmsvBBodxqtorA/videos");
		urlMap.put("1124028", "https://www.youtube.com/channel/UCtKtcgxuenxmVHNEutC5_wA/videos");
		urlMap.put("1124038", "https://www.youtube.com/channel/UCFEhxIU7ZgU8BuaZ8BJ5zKg/videos");
		urlMap.put("1124053", "https://www.youtube.com/channel/UCHzloEP5Ti4kBcNQONPbVHA/videos");
		urlMap.put("1124059", "https://www.youtube.com/channel/UC1wIAUSKiW791XdbUmYSixA/videos");


		urlMap.put("74678", "https://www.youtube.com/channel/UCPuWsn09os_xr7VKJpUDUIg/videos");
		urlMap.put("74693", "https://www.youtube.com/channel/UCYwwugaXiv1Rgx1zgfovb9A/videos");
		urlMap.put("74744", "https://www.youtube.com/channel/UCT2i0Iqfw4_S9LKyqmP3G3g/videos");
		urlMap.put("74840", "https://www.youtube.com/channel/UCgJIGNTtj8u9-MIyiPNNXqw/videos");
		urlMap.put("74871", "https://www.youtube.com/channel/UChEx4Jc6Ox3wjokFCF7RD8A/videos");
		urlMap.put("74911", "https://www.youtube.com/channel/UC4Mig-XEnKTIKhVFp_9djlg/videos");


		urlMap.put("999393", "https://www.youtube.com/channel/UChE136MOOLHQq-2NwkLADKg/videos");
		urlMap.put("1004892", "https://www.youtube.com/channel/UCt5ZY0P3imlPuGFR5LclDgg/videos");
		urlMap.put("1011645", "https://www.youtube.com/channel/UCO3WrWXEdlTLHTgoZ1Ir0LQ/videos");


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

		String url = urlMap.get(id);
		return url;
	}
}
