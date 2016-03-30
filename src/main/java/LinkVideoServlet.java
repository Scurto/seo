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


		urlMap.put("74840", "https://www.youtube.com/channel/UCgJIGNTtj8u9-MIyiPNNXqw/videos");
		urlMap.put("74871", "https://www.youtube.com/channel/UChEx4Jc6Ox3wjokFCF7RD8A/videos");
		urlMap.put("74911", "https://www.youtube.com/channel/UC4Mig-XEnKTIKhVFp_9djlg/videos");


		urlMap.put("999393", "https://www.youtube.com/channel/UChE136MOOLHQq-2NwkLADKg/videos");
		urlMap.put("1004892", "https://www.youtube.com/channel/UCt5ZY0P3imlPuGFR5LclDgg/videos");


		urlMap.put("74567", "https://www.youtube.com/channel/UCFu-R3dQynMjseoHODl06Sg/videos");
		urlMap.put("74568", "https://www.youtube.com/channel/UCQc0Mb5RILRzjwMYROGfogw/videos");

		String url = urlMap.get(id);
		return url;
	}
}
