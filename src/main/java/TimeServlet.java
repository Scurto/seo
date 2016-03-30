import org.json.JSONObject;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by yustymenko on 30.03.2016.
 */
@WebServlet("/getTime")
public class TimeServlet extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getParameter("action");
//		String count = request.getParameter("count");

		Calendar calendar = Calendar.getInstance();

		 Date now = new Date();

		int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK);
		SimpleDateFormat dateOfMonthFormat = new SimpleDateFormat("M");
		int dateOfMonth = calendar.get(Calendar.DAY_OF_MONTH);
		String month = dateOfMonthFormat.format(now);
		int year = calendar.get(Calendar.YEAR);
		SimpleDateFormat hourFormat = new SimpleDateFormat("H");
		String hour = hourFormat.format(now);
		SimpleDateFormat minuteFormat = new SimpleDateFormat("mm");
		String minute = minuteFormat.format(now);

		JSONObject resultJson = new JSONObject();
			resultJson.put("hour", hour);
			resultJson.put("minute", minute);
			resultJson.put("dayOfWeek", dayOfWeek);
			resultJson.put("dateOfMonth", dateOfMonth);
			resultJson.put("month", month);
			resultJson.put("year", year);

		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(resultJson.toString());
	}
}
