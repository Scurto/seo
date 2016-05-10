package parser;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

/**
 * Created by scurto on 09.05.2016.
 */
public class JsoupParser {
    public static void main(String[] args) {
        Document doc = null;
        try {
            doc = Jsoup.connect("https://www.youtube.com/channel/UCMqNhrXacUsTlupL4O0CLew/videos").get();
        } catch (IOException e) {
            e.printStackTrace();
        }
        String title = doc.title();
        String body = doc.html();
//        System.out.println(title);
//        System.out.println(body);
        Element content = doc.getElementById("channels-browse-content-grid");
        Elements links = content.getElementsByTag("li");
        String myText = "";
        int i = 0;
        for (Element link : links) {

            Elements elem = link.getElementsByClass("yt-uix-tile-link");
            for (Element element : elem) {

                String linkTitle = element.attr("title");
                String linkHref = element.attr("href");
//                System.out.println(linkTitle);
//                System.out.println(linkHref);
                String fullLink = "https://www.youtube.com" + linkHref;
//                System.out.println(fullLink);
                myText = myText + " ar[" + i + "] = { url: '" + fullLink + "', img: \"youtube\", type: \"video\", title:'" + linkTitle + "', source: \"www.youtube.com\" };";
//                System.out.println();
            }
            if (elem.size() > 0) {
//                System.out.println("-------------------------");
                i++;
            }

        }
        System.out.println(myText);
    }
}
