import java.util.Scanner;

public class DaysOfWeek {

    enum Day {
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY;

        
        public boolean isWeekend() {
            return this == SATURDAY || this == SUNDAY;
        }
    }

    public static void displayDayStatus(Day day) {
        if (day.isWeekend()) {
            System.out.println(day + " is a Weekend.");
        } else {
            System.out.println(day + " is a Weekday.");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Available days:");

        for (Day day : Day.values()) {
            System.out.println(day);
        }

        System.out.print("\nEnter a day: ");
        String userInput = scanner.next().toUpperCase();

        try {
            
            Day selectedDay = Day.valueOf(userInput);
            displayDayStatus(selectedDay);
        } catch (IllegalArgumentException exception) {
            System.out.println("Invalid day entered.");
        }

        scanner.close();
    }
}