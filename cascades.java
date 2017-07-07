package glucose_cascade;
import java.util.Scanner;
import java.util.Random;

public class cascades {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		// make the molecules 
		molecule a = new molecule("a");
		molecule ab = new molecule("ab enzyme");
		molecule b = new molecule("b");
		molecule bc = new molecule("bc enzyme");
		molecule c = new molecule("c");
		molecule cd = new molecule("cd enzyme");
		molecule d = new molecule("d");
		molecule e = new molecule("e");
		molecule f = new molecule("f");
		
		// actual molecules
		molecule no_enzyme= new molecule ("no enzyme");
		molecule no_molecule = new molecule ("no molecule" );
		
		molecule glycogen = new molecule ("Glycogen");
		molecule glycogen_phosphorylase = new molecule ("Glycogen Phosphorylase");// enzyme
		molecule glucose_1_phosphate = new molecule ("Glucose 1-phosphate");
		molecule phophoglucomutase = new molecule ("Phophoglucomutase"); // enzyme
		molecule glucose_6_phosphate = new molecule ("Glucose 6- phosphate ");
		molecule pyruvate = new molecule ("Pyruvate");
		
		// reactions
		reaction glycogen___glucose_1_phosphate = new reaction("Glycogen to Glucose 1-phosphate",0,glycogen,glucose_1_phosphate,glycogen_phosphorylase,false,no_molecule,no_molecule);
		reaction glucose_1_phosphate___glucose_6_phosphate = new reaction("Glucose 1-phosphate to Glucose 6-phosphate",1,glucose_1_phosphate,glucose_6_phosphate,phophoglucomutase,false,no_molecule,no_molecule);
		reaction glucose_6_phosphate___pyruvate = new reaction("Glucose 6-phosphate to Pyruvate ",2,glucose_6_phosphate,pyruvate,no_enzyme,true,no_molecule,no_molecule );
		
		reaction metabolism [] = new reaction[3];
		metabolism[0] = glycogen___glucose_1_phosphate;
		metabolism[1] = glucose_1_phosphate___glucose_6_phosphate;
		metabolism[2] = glucose_6_phosphate___pyruvate;
		
		molecule apothecary [] = new molecule[6];
		apothecary [0] = glycogen;
		apothecary [1] = glycogen_phosphorylase;
		apothecary [2] = glucose_1_phosphate;
		apothecary [3] = phophoglucomutase;
		apothecary [4] = glucose_6_phosphate;
		apothecary [5] = pyruvate;
		
		//System.out.println("debug");
		
		String question = what_molecule(apothecary, 1);
		System.out.print(question);
		
	}
	
	// question methods
	static int what_reactant(reaction rx, reaction [] cas){
		// generate 4 random different ints
		Random rn = new Random();
		int max = 4;
		int min = 0;
		
		int correct = rx.step;
		//////////////////////////////////////////////
		
		int wrong1 = rn.nextInt(max - min + 1) + min;
		while(wrong1 == correct){
			 wrong1 = rn.nextInt(max - min + 1) + min;
		}
		//////////////////////////////////////
		
		int wrong2 = rn.nextInt(max - min + 1) + min;
		while(wrong2 == correct || wrong2 == wrong1){
			 wrong2 = rn.nextInt(max - min + 1) + min;
		}
		
		int wrong3 = rn.nextInt(max - min + 1) + min;
		while(wrong3 == correct || wrong3 == wrong1 || wrong3==  wrong2){
			 wrong3 = rn.nextInt(max - min + 1) + min;
		}
		
		System.out.println("correct "+correct );
		System.out.println("wrong1 "+ wrong1 );
		System.out.println("wrong2 "+ wrong2 );
		System.out.println("wrong3 "+ wrong3);
	
		
		
		
		
		
		return 0;
	}





 static String what_molecule(molecule array [], int x){
	String question = "Which of the following is "+ array[x].getName();
	String correct_ans = array[x].getName() + "     correct";
	String wrong_ans1 = array[x+1].getName();
	String wrong_ans2 = array[x+2].getName();
	String wrong_ans3 = array[x+3].getName();
	
	String output = question + "\n" + correct_ans+ "\n" + wrong_ans1 + "\n" + wrong_ans2 +"\n"+ wrong_ans3 ;
	
	return output;
	
}













}






