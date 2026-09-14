import java.util.Scanner;

public class MatrixTranspose {

    public static int[][] readMatrix(Scanner scanner, int rows, int columns) {
        int[][] matrix = new int[rows][columns];

        System.out.println("Enter matrix elements:");

        for (int row = 0; row < rows; row++) {
            for (int column = 0; column < columns; column++) {
                matrix[row][column] = scanner.nextInt();
            }
        }

        return matrix;
    }

    public static int[][] transposeMatrix(int[][] matrix) {
        int rows = matrix.length;
        int columns = matrix[0].length;

        int[][] transpose = new int[columns][rows];

        for (int row = 0; row < rows; row++) {
            for (int column = 0; column < columns; column++) {
                transpose[column][row] = matrix[row][column];
            }
        }

        return transpose;
    }

    public static void displayMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int value : row) {
                System.out.print(value + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter number of rows: ");
        int rows = scanner.nextInt();

        System.out.print("Enter number of columns: ");
        int columns = scanner.nextInt();

        if (rows <= 0 || columns <= 0) {
            System.out.println("Rows and columns must be greater than 0.");
            scanner.close();
            return;
        }

        int[][] matrix = readMatrix(scanner, rows, columns);

        System.out.println("\nOriginal Matrix:");
        displayMatrix(matrix);

        int[][] transpose = transposeMatrix(matrix);

        System.out.println("\nTranspose Matrix:");
        displayMatrix(transpose);

        scanner.close();
    }
}