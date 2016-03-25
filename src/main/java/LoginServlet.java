import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Calendar;

/**
 * Created by yustymenko on 25.03.2016.
 */
@WebServlet("/loginServlet")
public class LoginServlet extends HttpServlet {

	Connection conn;
	Statement stmt;
	String url = "jdbc:mysql://127.0.0.1:3306/";
	String baseName = "hfjq_race_info";
	String fullURL = url + baseName;
	String user = "root";
	String password = "root";

	protected void doPost(HttpServletRequest request,
						  HttpServletResponse response) throws ServletException, IOException {

		// code to process the form...
//		String username = request.getParameter("username");
//		String password = request.getParameter("password");
//
//		System.out.println("username: " + username);
//		System.out.println("password: " + password);
		String action = request.getParameter("action");
		System.out.println("action = " + action);
		Calendar cal = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
		System.out.println( sdf.format(cal.getTime()) );


		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection
					(fullURL, user, password);
			stmt =  conn.createStatement();
//			stmt.execute("SELECT * FROM `FOO.BAR`");
			stmt.close();
			conn.close();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		JSONObject resultJson = new JSONObject();
		resultJson.put("name","foo");
		resultJson.put("num",new Integer(100));
		resultJson.put("is_vip",new Boolean(true));
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(resultJson.toString());
	}

}
