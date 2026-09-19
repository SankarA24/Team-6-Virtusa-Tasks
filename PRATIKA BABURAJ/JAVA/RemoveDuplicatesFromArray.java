import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.Set;
public class RemoveDuplicates{
    public static Set<Integer>removeDuplicates(int[] numbers){
        return new LinkedHashSet<>(Arrays.stream(numbers).boxed().toList());
    }
    public static void main(String[] args){
        Scanner scanner=new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int numberOfElements=scanner.nextInt();
        int[] numbers=new int[numberOfElements];
        System.out.println("Enter "+numberOfElements+" elements:");
        for (int index=0;index<numberOfElements;index++) {
            numbers[index]=scanner.nextInt();
        }
        Set<Integer> uniqueNumbers=removeDuplicates(numbers);
        System.out.println("Original array: "+Arrays.toString(numbers));
        System.out.println("Array after removing duplicates: "+uniqueNumbers);
        scanner.close();
    }
}