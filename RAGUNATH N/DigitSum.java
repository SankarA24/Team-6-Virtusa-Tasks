import java.util.Scanner;
public class DigitSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a non-negative integer: ");
        int num = sc.nextInt();
        int sum = findSum(num);
        System.out.println("Sum of digits: " + sum);
        sc.close();
    }
    public static int findSum(int n) {
        if (n == 0) {
            return 0;
        }
        return (n % 10) + findSum(n / 10);
    }
}
