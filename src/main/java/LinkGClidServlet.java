import org.json.JSONObject;
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
		System.out.println(text);
		System.out.println("contains = " + text.contains("\n"));
		System.out.println("text length = " + text.length());
		String perenosStroki = "\n";
		String[] s = text.split(perenosStroki);
		String resultReklama = "";
		for (int i = 0; i < s.length; i++) {
			  resultReklama = resultReklama + s[i] +  perenosStroki;
		}
//		Parser parser = new Parser();
//		String url = getUrl(id);
//		int cnt = Integer.parseInt(count);
//		ArrayList<String> video = parser.getVideo(url, cnt);
//		System.out.println(video);

		final Timer timer = new Timer();

		System.out.println("---Start timer");
		final String finalResultReklama = resultReklama;

//		final int[] count = {0};
//		timer.schedule(new TimerTask() {
//			@Override
//			public void run() {
//				// Your database code here
//				System.out.println("in timer");
//				System.out.println("count = " + count[0]);
//				JSONObject resultJson = new JSONObject();
//				resultJson.put("resultReklama", finalResultReklama);
//				response.setContentType("application/json");
//				response.setCharacterEncoding("UTF-8");
//				try {
//					response.getWriter().write(resultJson.toString());
//				} catch (IOException e) {
//					e.printStackTrace();
//				}
//				if (count[0] > 2) {
//					timer.cancel();
//				}
//				count[0]++;
//
//			}
//		}, 5*1000, 5*1000);

		JSONObject resultJson = new JSONObject();
		resultJson.put("resultReklama", resultReklama);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(resultJson.toString());
	}
}
