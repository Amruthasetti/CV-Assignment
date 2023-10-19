import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        // Create a set to store unique alphabets
        Set<Character> alphabetSet = new HashSet<>();

        // Take user input for the sentence
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String inputSentence = scanner.nextLine().toLowerCase();

        // Check if it's a pangram
        for (char ch : inputSentence.toCharArray()) {
            if (Character.isLetter(ch)) {
                alphabetSet.add(ch);
            }
        }

        // Print the result
        if (alphabetSet.size() == 26) {
            System.out.println("The sentence is a pangram!");
        } else {
            System.out.println("The sentence is not a pangram.");
        }

        // Close the scanner
        scanner.close();
    }
}
