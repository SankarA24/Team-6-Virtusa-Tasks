import java.util.Scanner;
public class StringLengthWithoutLength {
    public static int findLength(String text) {
        int count = 0;
        for (char ch : text.toCharArray()) {
            count++;
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String text = scanner.nextLine();
        int length = findLength(text);
        System.out.println("Length of the string: " + length);
        scanner.close();
    }
}