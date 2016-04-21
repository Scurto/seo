package parser;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;

/**
 * Created by yustymenko on 28.03.2016.
 */
public class GclidParser {
	public static void main(String[] args) {
//		Document doc = null;
//		try {
////			doc = Jsoup.connect("http://www.googleadservices.com/pagead/aclk?sa=L&ai=CE3Ea0xH5VrvBMsLQWIbMi5gEh9C46wjP2J3IqgHZ2R4QASCPt5cnYKWuo4b8IqAB8ZDo0QPIAQSpAtuvLQjFc2Q-qAMBqgSJAU_QdforgDP693gblzap__W37VMG-P-6lyJJpludDxa-Sly2VejUppKx_sVlVzn2eneASTPem0i-3PiTBXuDCXfvCPs7WMQ7tXkwGbWA5PUG5g8dTCkDhjHNwK8mXmQInbxBaIcWy4wsNcrNNEHxgb7jV385InOFFx4xphpJ409zmpt7tcAtjONhiAYBoAYEgAf37pcuqAemvhvYBwA&num=1&cid=5GjuNJU5TeVzfh3jPSr5DtZ2&sig=AOD64_13YGsXGMFoT8tFggLncW46HsknqA&client=ca-pub-6591344393480072&adurl=http://oiler.com.ua/sto/").get();
////			doc = Jsoup.connect("https://googleads.g.doubleclick.net/aclk?sa=L&ai=CQ4inqxb5VsCRAo3RWqC0m5gGtfWNmUSbv66g0wLzpcyOjgIQASCPt5cnYKWuo4b8IsgBCakC268tCMVzZD6oAwHIAwqqBIYBT9DJ6cmshv-FmcFKThDnn1fH5tEsiEDkN9JiKneeux4kp-BE2jVEfkG7grGeNpfblFCvEqbhJxlLzRi7mt40HrHL_AOOTqNwuJYhmBt5YVRBzvFEpVMbdJZOLvN2hsRdH1qXPclgYlp4ffzFn8XLqhq40gbJLRgWrVpw59Rr3bGcpGRa3lOgBi6AB4PAgzCoB6a-G9gHAA&num=1&sig=AOD64_0ejnjUXDEhHbJmPHh7XFMQzZdgkA&client=ca-pub-6591344393480072&adurl=http%3A%2F%2Fzaz-goloseevsky.com.ua%2Fmodels%2F&nx=176&ny=62&nb=0").get();
//			doc = Jsoup.connect("http://www.googleadservices.com/pagead/aclk?sa=L&ai=CL5pYZBf5Vt7JDdHCzAaQ9rioBNPTpaAJi6fr1cwCwI23ARABII-3lydgpa6jhvwioAGl1PrMA8gBAqkCi1C4O9yRZD6oAwHIA8EEqgSGAU_QZb7yQmc68XRES43BmnFv7WwFuh2EO6yXlVPcp-CjYYmaJiLpDGT1Ez62ipR-tLpJMwkRX4ksXWfXHyrpWF6PJSGaDjOAWcp0fa9ms2HrI69PE4w9-ci_dYs4bfS15CAD88OaojTjVtSEa-acK4Bcht2KJ_6GSBaqn5jAiEkCRr-tujxYiAYBoAYCgAfDq4UzqAemvhvYBwE&num=1&cid=5GgQQtsb4HnWY7c17g9SpS51&sig=AOD64_2UG1wFu-Coo7ptfLnfD_RuF3I-pg&client=ca-pub-6591344393480072&adurl=http://www.amotutto.com.ua/maslo-olivkovoe-olio-di-oliva.html").get();
////			http://www.googleadservices.com/pagead/aclk?sa=L&ai=CE3Ea0xH5VrvBMsLQWIbMi5gEh9C46wjP2J3IqgHZ2R4QASCPt5cnYKWuo4b8IqAB8ZDo0QPIAQSpAtuvLQjFc2Q-qAMBqgSJAU_QdforgDP693gblzap__W37VMG-P-6lyJJpludDxa-Sly2VejUppKx_sVlVzn2eneASTPem0i-3PiTBXuDCXfvCPs7WMQ7tXkwGbWA5PUG5g8dTCkDhjHNwK8mXmQInbxBaIcWy4wsNcrNNEHxgb7jV385InOFFx4xphpJ409zmpt7tcAtjONhiAYBoAYEgAf37pcuqAemvhvYBwA&num=1&cid=5GjuNJU5TeVzfh3jPSr5DtZ2&sig=AOD64_13YGsXGMFoT8tFggLncW46HsknqA&client=ca-pub-6591344393480072&adurl=http://oiler.com.ua/sto/
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
////		String title = doc.title();
//		String baseUri = doc.baseUri();
//		System.out.println(baseUri);
		getGclid();

	}

	public static String getGclid() {
		Document doc = null;
		try {
//			doc = Jsoup.connect("http://www.googleadservices.com/pagead/aclk?sa=L&ai=CE3Ea0xH5VrvBMsLQWIbMi5gEh9C46wjP2J3IqgHZ2R4QASCPt5cnYKWuo4b8IqAB8ZDo0QPIAQSpAtuvLQjFc2Q-qAMBqgSJAU_QdforgDP693gblzap__W37VMG-P-6lyJJpludDxa-Sly2VejUppKx_sVlVzn2eneASTPem0i-3PiTBXuDCXfvCPs7WMQ7tXkwGbWA5PUG5g8dTCkDhjHNwK8mXmQInbxBaIcWy4wsNcrNNEHxgb7jV385InOFFx4xphpJ409zmpt7tcAtjONhiAYBoAYEgAf37pcuqAemvhvYBwA&num=1&cid=5GjuNJU5TeVzfh3jPSr5DtZ2&sig=AOD64_13YGsXGMFoT8tFggLncW46HsknqA&client=ca-pub-6591344393480072&adurl=http://oiler.com.ua/sto/").get();
//			doc = Jsoup.connect("https://googleads.g.doubleclick.net/aclk?sa=L&ai=CQ4inqxb5VsCRAo3RWqC0m5gGtfWNmUSbv66g0wLzpcyOjgIQASCPt5cnYKWuo4b8IsgBCakC268tCMVzZD6oAwHIAwqqBIYBT9DJ6cmshv-FmcFKThDnn1fH5tEsiEDkN9JiKneeux4kp-BE2jVEfkG7grGeNpfblFCvEqbhJxlLzRi7mt40HrHL_AOOTqNwuJYhmBt5YVRBzvFEpVMbdJZOLvN2hsRdH1qXPclgYlp4ffzFn8XLqhq40gbJLRgWrVpw59Rr3bGcpGRa3lOgBi6AB4PAgzCoB6a-G9gHAA&num=1&sig=AOD64_0ejnjUXDEhHbJmPHh7XFMQzZdgkA&client=ca-pub-6591344393480072&adurl=http%3A%2F%2Fzaz-goloseevsky.com.ua%2Fmodels%2F&nx=176&ny=62&nb=0").get();
			doc = Jsoup.connect("http://www.googleadservices.com/pagead/aclk?sa=L&ai=CL5pYZBf5Vt7JDdHCzAaQ9rioBNPTpaAJi6fr1cwCwI23ARABII-3lydgpa6jhvwioAGl1PrMA8gBAqkCi1C4O9yRZD6oAwHIA8EEqgSGAU_QZb7yQmc68XRES43BmnFv7WwFuh2EO6yXlVPcp-CjYYmaJiLpDGT1Ez62ipR-tLpJMwkRX4ksXWfXHyrpWF6PJSGaDjOAWcp0fa9ms2HrI69PE4w9-ci_dYs4bfS15CAD88OaojTjVtSEa-acK4Bcht2KJ_6GSBaqn5jAiEkCRr-tujxYiAYBoAYCgAfDq4UzqAemvhvYBwE&num=1&cid=5GgQQtsb4HnWY7c17g9SpS51&sig=AOD64_2UG1wFu-Coo7ptfLnfD_RuF3I-pg&client=ca-pub-6591344393480072&adurl=http://www.amotutto.com.ua/maslo-olivkovoe-olio-di-oliva.html").get();
//			http://www.googleadservices.com/pagead/aclk?sa=L&ai=CE3Ea0xH5VrvBMsLQWIbMi5gEh9C46wjP2J3IqgHZ2R4QASCPt5cnYKWuo4b8IqAB8ZDo0QPIAQSpAtuvLQjFc2Q-qAMBqgSJAU_QdforgDP693gblzap__W37VMG-P-6lyJJpludDxa-Sly2VejUppKx_sVlVzn2eneASTPem0i-3PiTBXuDCXfvCPs7WMQ7tXkwGbWA5PUG5g8dTCkDhjHNwK8mXmQInbxBaIcWy4wsNcrNNEHxgb7jV385InOFFx4xphpJ409zmpt7tcAtjONhiAYBoAYEgAf37pcuqAemvhvYBwA&num=1&cid=5GjuNJU5TeVzfh3jPSr5DtZ2&sig=AOD64_13YGsXGMFoT8tFggLncW46HsknqA&client=ca-pub-6591344393480072&adurl=http://oiler.com.ua/sto/
		} catch (IOException e) {
			e.printStackTrace();
		}
//		String title = doc.title();
		String baseUri = doc.baseUri();
		int index = baseUri.lastIndexOf("gclid=");
		String gclid = baseUri.substring(index+6, baseUri.length());
		System.out.println(baseUri);
		System.out.println(gclid);
		return gclid;
	}
}
