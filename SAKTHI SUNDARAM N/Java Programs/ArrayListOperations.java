import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListOperations {

    public static void addElements(ArrayList<String> elements, Scanner scanner) {
        System.out.print("Enter number of elements to add: ");
        int numberOfElements = scanner.nextInt();

        scanner.nextLine(); 

        for (int index = 0; index < numberOfElements; index++) {
            System.out.print("Enter element " + (index + 1) + ": ");
            String element = scanner.nextLine();

            elements.add(element);
        }
    }

    public static void displayElements(ArrayList<String> elements) {
        System.out.println("\nCurrent ArrayList:");

        if (elements.isEmpty()) {
            System.out.println("ArrayList is empty.");
            return;
        }

        for (String element : elements) {
            System.out.println(element);
        }
    }

    public static void searchElement(ArrayList<String> elements, Scanner scanner) {
        System.out.print("\nEnter element to search: ");
        String searchElement = scanner.nextLine();

        if (elements.contains(searchElement)) {
            System.out.println(searchElement + " was found in the ArrayList.");
        } else {
            System.out.println(searchElement + " was not found in the ArrayList.");
        }
    }

    public static void removeElement(ArrayList<String> elements, Scanner scanner) {
        System.out.print("\nEnter element to remove: ");
        String removeElement = scanner.nextLine();

        if (elements.remove(removeElement)) {
            System.out.println(removeElement + " was removed successfully.");
        } else {
            System.out.println(removeElement + " was not found.");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayList<String> elements = new ArrayList<>();

        addElements(elements, scanner);

        displayElements(elements);

        searchElement(elements, scanner);

        
        removeElement(elements, scanner);
    
        displayElements(elements);

        scanner.close();
    }
}