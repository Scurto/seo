import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;

/**
 * Created by yustymenko on 31.03.2016.
 */
@WebServlet("/getSrcReklama")
public class SrcReklamaServlet extends HttpServlet {
	Connection conn;
	Statement stmt;
	String url = "jdbc:mysql://127.0.0.1:3306/";
	String baseName = "hfjq_race_info";
	String fullURL = url + baseName;
	String user = "root";
	String password = "root";

	protected void doPost(HttpServletRequest request,
						  HttpServletResponse response) throws ServletException, IOException {

		String action = request.getParameter("action");

		switch (action) {
			case "selectReklamaSrc":
				String id = request.getParameter("id");

				String taskId = "";
				String prevDate = "";
				String prevReklama= "";
				String lastDate= "";
				String lastReklama= "";
				try {
					Class.forName("com.mysql.jdbc.Driver").newInstance();
					conn = DriverManager.getConnection
							(fullURL, user, password);
					stmt =  conn.createStatement();
					ResultSet rs = stmt.executeQuery("SELECT * FROM hfjq_race_info.video_scr WHERE task_id='" + id + "'");

					while (rs.next()) {
						taskId = rs.getString("task_id");
						prevDate = rs.getString("prev_date");
						prevReklama = rs.getString("prev_reklama");
						lastDate = rs.getString("last_date");
						lastReklama = rs.getString("last_reklama");
					}
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
				resultJson.put("task_id", taskId);
				resultJson.put("prev_date", prevDate);
				resultJson.put("prev_reklama", prevReklama);
				resultJson.put("last_date", lastDate);
				resultJson.put("last_reklama", lastReklama);
				response.getWriter().write(resultJson.toString());
				break;
			case "insetReklamaSrc":
				taskId = request.getParameter("taskId");
				prevDate = request.getParameter("prevDate");
				prevReklama = request.getParameter("prevReklama");
				lastDate = request.getParameter("lastDate");
				lastReklama = request.getParameter("lastReklama");
				try {
					Class.forName("com.mysql.jdbc.Driver").newInstance();
					conn = DriverManager.getConnection
							(fullURL, user, password);
					stmt =  conn.createStatement();
					String query = "INSERT INTO video_scr SET task_id = '" + taskId + "', prev_date='" + prevDate + "', prev_reklama='" + prevReklama + "', last_date='" + lastDate + "', last_reklama='" + lastReklama + "'";
					stmt.executeUpdate(query);

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
				break;
			case "updateReklamaSrc":
				taskId = request.getParameter("taskId");
				prevDate = request.getParameter("prevDate");
				prevReklama = request.getParameter("prevReklama");
				lastDate = request.getParameter("lastDate");
				lastReklama = request.getParameter("lastReklama");
				try {
					Class.forName("com.mysql.jdbc.Driver").newInstance();
					conn = DriverManager.getConnection
							(fullURL, user, password);
					stmt =  conn.createStatement();
					String query = "UPDATE video_scr SET prev_date='" + prevDate + "', prev_reklama='" + prevReklama + "', last_date='" + lastDate + "', last_reklama='" + lastReklama + "' where task_id = '" + taskId + "'";
					System.out.println(query);
					stmt.executeUpdate(query);
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
				break;
		}
	}
}
