import org.json.JSONObject;
import parser.LinkGoogleParser;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;

/**
 * Created by yustymenko on 05.04.2016.
 */
@WebServlet("/getGoogleLink")
public class LinkGoogleServlet extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id");

		LinkGoogleParser googleParser = new LinkGoogleParser();
		String result = "";
		ArrayList<String> queryList = new ArrayList();
		switch (id) {
			case "935594":
				queryList.add("тест1");
				queryList.add("тест2");
				queryList.add("тест3");
				break;
			case "2":
				break;
		}

		if (!queryList.isEmpty()) {
			Collections.shuffle(queryList);
			System.out.println(queryList.get(0));
			result = googleParser.getGoogleLink(queryList.get(0));
		}

		JSONObject resultJson = new JSONObject();
		resultJson.put("output", result);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(resultJson.toString());
	}
}
