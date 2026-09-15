import java.util.Scanner;
public class TitleCase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine();
        String result = toTitleCase(sentence);
        System.out.println("Title Case: " + result);
    }
    static String toTitleCase(String str) {
        String[] words = str.split(" ");
        String result = "";
        for (int i = 0; i <= words.length; i++) {
            String word = words[i];
            if (word.length() > 0) {
                result += word.substring(0, 1).toUpperCase()
                        + word.substring(1).toLowerCase();
            }
            if (i < words.length - 1) {
                result += " ";
            }
        }
        return result;
    }
}
