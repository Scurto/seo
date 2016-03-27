package parser;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

/**
 * Created by scurto on 26.03.2016.
 */
public class Parser {
    public static void main(String[] args) {
        Document doc = null;
        try {
            doc = Jsoup.connect("https://www.youtube.com/channel/UC7ohEp6ht5iSSclTwaGvn1A/videos").get();
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
        ArrayList<String> fullVideoList = new ArrayList<>();
        for (Element link : links) {

            Elements elem = link.getElementsByClass("yt-uix-tile-link");
            for (Element element : elem) {

                String linkTitle = element.attr("title");
                String linkHref = element.attr("href");
//                System.out.println(linkTitle);
//                System.out.println(linkHref);
                String fullLink = "https://www.youtube.com" + linkHref;
                fullVideoList.add(fullLink);
//                System.out.println(fullLink);
                myText = myText + " ar[" + i + "] = { url: '" + fullLink + "', img: \"youtube\", type: \"video\", title:'" + linkTitle + "', source: \"www.youtube.com\" };";
//                System.out.println();
            }
//            if (elem.size() > 0) {
////                System.out.println("-------------------------");
//                i++;
//            }

        }
        System.out.println(myText);

        for (String s : fullVideoList) {
            System.out.println("video = " + s);
        }
    }

    public ArrayList<String> getVideo(String url, int count) {
        Document doc = null;
        try {
            doc = Jsoup.connect(url).get();
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
        ArrayList<String> fullVideoList = new ArrayList<>();
        for (Element link : links) {

            Elements elem = link.getElementsByClass("yt-uix-tile-link");
            for (Element element : elem) {
                String linkTitle = element.attr("title");
                String linkHref = element.attr("href");
                String fullLink = "https://www.youtube.com" + linkHref;
                fullVideoList.add(fullLink);
                myText = myText + " ar[" + i + "] = { url: '" + fullLink + "', img: \"youtube\", type: \"video\", title:'" + linkTitle + "', source: \"www.youtube.com\" };";
            }
        }
        System.out.println(myText);

        ArrayList<String> listById = new ArrayList<>();

        for (int x = 0; x < count; x++) {
            listById.add(fullVideoList.get(x));
        }
        Collections.shuffle(listById);
        return listById;
    }
}
