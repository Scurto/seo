package parser;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

/**
 * Created by yustymenko on 05.04.2016.
 */
public class LinkGoogleParser {

	public String getGoogleLink(String query) {
		String output = "";
		try {
			output = URLEncoder.encode(query, "UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return output;
	}
}
