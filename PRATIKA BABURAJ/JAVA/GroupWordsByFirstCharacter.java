import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
public class GroupWordsByCharacter{
    public static Map<Character, List<String>> groupWordsByFirstCharacter(
            List<String> words){
        Map<Character,List<String>> groupedWords=new LinkedHashMap<>();
        for (String word:words){
            if (word==null || word.isEmpty()){
                continue;
            }
            char firstCharacter=Character.toLowerCase(word.charAt(0));
            groupedWords
                    .computeIfAbsent(firstCharacter,key->new ArrayList<>())
                    .add(word);
        }
        return groupedWords;
    }
    public static void main(String[] args){
        Scanner scanner=new Scanner(System.in);
        System.out.print("Enter number of words: ");
        int numberOfWords=scanner.nextInt();
        List<String> words=new ArrayList<>();
        System.out.println("Enter "+numberOfWords+" words:");
        for (int index=0;index<numberOfWords;index++) {
            words.add(scanner.next());
        }
        Map<Character,List<String>> groupedWords=
                groupWordsByFirstCharacter(words);
        System.out.println("\nWords grouped by first character:");
        for (Map.Entry<Character,List<String>> entry:groupedWords.entrySet()) {
            System.out.println(entry.getKey()+" -> " + entry.getValue());
        }
        scanner.close();
    }
}