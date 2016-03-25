import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Calendar;

/**
 * Created by yustymenko on 25.03.2016.
 */
@WebServlet("/loginServlet")
public class LoginServlet extends HttpServlet {

	protected void doPost(HttpServletRequest request,
						  HttpServletResponse response) throws ServletException, IOException {

		// code to process the form...
		String username = request.getParameter("username");
		String password = request.getParameter("password");

		System.out.println("username: " + username);
		System.out.println("password: " + password);


		Calendar cal = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
		System.out.println( sdf.format(cal.getTime()) );

		// do some processing here...

		// get response writer
		PrintWriter writer = response.getWriter();

		// build HTML code
		String htmlRespone = "<html>";
		htmlRespone += "<h2>Your username is: " + username + "<br/>";
		htmlRespone += "Your password is: " + password + "</h2>";
		htmlRespone += "</html>";

		// return response
		writer.println(htmlRespone);
	}

}
