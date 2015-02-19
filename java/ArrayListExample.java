import java.util.*;

public class ArrayListExample {
 
  public static void main(String args[]) {
	// Creating an empty array list
	ArrayList<String> list = new ArrayList<String>();

	// Adding items to arrayList
	list.add("Item1");
	list.add("Item2");
	list.add(2, "Item3");
	
	list.add("Item4");

	// Display the contents of the array list
	System.out.println("The arraylist contains the following elements: "
		+ list);
	
	// Checking index of an item
	int pos = list.indexOf("Item2");
	System.out.println("The index of Item2 is: " + pos);


	// Getting the size of the list
	int size = list.size();
	System.out.println("The size of the list is: " + size);

	// Checking if an element is included to the list
	boolean element = list.contains("Items5");
	System.out.println("Checking if the arraylist contains the object Item5: " 
			+ element);

	// Getting the element in a specific position
	String item = list.get(0);
	System.out.println("The item is the index 0 is: " + item);

	// Retrieve elements from the arraylist
	System.out.println("Retrieving items with loop using index and size list");
	for (int i = 0; i < list.size(); i++) {
		System.out.println("Index: " + i + " - Item: " + list.get(i));
	}

	// 2nd way: using foreach loop
	System.out.println("Retrieving items with loop using index and size list");
	for(String str: list) {
		System.out.println("Item is:" + str);
	}
   }
}



