import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
public class MostFrequentCharacter {
    public static char findMostFrequent(String text) {
        Map<Character, Integer> frequency = new HashMap<>();
        for (char ch : text.toCharArray()) {
            frequency.put(ch, frequency.getOrDefault(ch, 0) + 1);
        }
        char result = text.charAt(0);
        int maximum = frequency.get(result);
        for (char ch : text.toCharArray()) {
            if (frequency.get(ch) > maximum) {
                maximum = frequency.get(ch);
                result = ch;
            }
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String text = scanner.nextLine();
        if (text.isEmpty()) {
            System.out.println("String cannot be empty.");
        } else {
            char result = findMostFrequent(text);
            System.out.println("Most frequent character: " + result);
        }
        scanner.close();
    }
}