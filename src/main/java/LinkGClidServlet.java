import org.json.JSONObject;
import parser.GclidParser;
import parser.Parser;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Timer;
import java.util.TimerTask;

/**
 * Created by yustymenko on 28.03.2016.
 */
@WebServlet("/getGClid")
public class LinkGClidServlet extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest request, final HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id");
		String text = request.getParameter("text");
		String action = request.getParameter("action");
		if (action.equals("testCall")) {
			JSONObject resultJson = new JSONObject();
			resultJson.put("resultCall", "good");
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(resultJson.toString());
		} else {

//		System.out.println(text);
//		System.out.println("contains = " + text.contains("\n"));
//		System.out.println("text length = " + text.length());
			String perenosStroki = "\n";
			String[] s = text.split(perenosStroki);
			String resultReklama = "";
			boolean flag = true;
			GclidParser parser = new GclidParser();
			for (int i = 0; i < s.length; i++) {
				String line = s[i];
				if (flag && line.endsWith("gclid=")) {
					flag = false;
					line = line + parser.getGclid();
					System.out.println("line = " + line);
				}
				resultReklama = resultReklama + line + perenosStroki;
			}
//		Parser parser = new Parser();
//		String url = getUrl(id);
//		int cnt = Integer.parseInt(count);
//		ArrayList<String> video = parser.getVideo(url, cnt);
//		System.out.println(video);

			JSONObject resultJson = new JSONObject();
			resultJson.put("resultReklama", resultReklama);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(resultJson.toString());
		}
	}
}
