function fibonacciGenerator (n) {

		let sequence = [];
		let taille = n-2;
		if (n === 0){
			 sequence.push(0);
				return sequence;
		}else {
			for(let i = 0; i < taille ; i++){ // on se balade dans le tableau 
			
		   if(taille === 1){ // premier test l'utilisateur a entrer n = 1
				sequence.push(0);
				return sequence;
			}
			if(taille === 2){  // deuxième test l'utilisateur a entrer n = 2
				sequence.push(0);
				sequence.push(1)
				return sequence
			}
			
			if(sequence.length !== 0){ // si le tableau n'est pas vide je lance
	//ma séquence de calcul
				const precedent = sequence.length - 2; // on défini l'indice n-1 
				if (precedent >= 0){
				let calc = sequence[i] + sequence[precedent];
				sequence.push(calc);
				}
				
				
			}else {
				sequence.push(0);
				sequence.push(1);
			}
	   
			   
			
		}
		return sequence
			
		}
		
	}
const n = prompt("Entrez la longueur de la suite de fibonacci")*1;
	fibonacciGenerator(n);
	