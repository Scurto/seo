import org.json.JSONObject;
import parser.Parser;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by YUstymenko on 29.08.2016.
 */
@WebServlet("/getHardLinkVideo")
public class LinkHardVideoServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String url = request.getParameter("url");
        String count = request.getParameter("count");

        Parser parser = new Parser();
//        String url = getUrl(id);
        int cnt = Integer.parseInt(count);
        ArrayList<String> video = parser.getVideo(url, cnt);
        System.out.println(video);

        JSONObject resultJson = new JSONObject();
        resultJson.put("video", video);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(resultJson.toString());
    }
}
