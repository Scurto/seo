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



		urlMap.put("1124568", "https://www.youtube.com/channel/UCgJIGNTtj8u9-MIyiPNNXqw/videos");
		urlMap.put("1128129", "https://www.youtube.com/channel/UChEx4Jc6Ox3wjokFCF7RD8A/videos");

		String url = urlMap.get(id);
		return url;
	}
}
