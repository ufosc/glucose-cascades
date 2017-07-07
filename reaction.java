package glucose_cascade;

public class reaction {
	
	String name;
	molecule reagent;
	molecule product;
	molecule enzyme;
	boolean reversible;
	int step;
	molecule extra_reagent;
	molecule extra_prodcuct;
	
	public reaction(String name, int step,molecule reagent,molecule product,molecule enzyme,boolean reversible,molecule extra_reagent,molecule extra_product){
		
		this.name = name;
		this.reagent = reagent;
		this.product = product;
		this.enzyme = enzyme;
		this.step = step;
		this.reversible = reversible;
		this.extra_reagent = reagent;
		this.extra_prodcuct = product;
				
	}
	
	public String getReagent(){
		
		return this.reagent.getName();
		
	}
	
	

}
