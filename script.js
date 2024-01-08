const Listplayers = document.querySelector(".list-players")


   function fetchData1(){
	const url = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
    const headers = {
      'X-RapidAPI-Key': '239f214db1mshc67aab9f5db96bdp1dde0ejsn1c99f06d7ba1',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    };

 	try {
 		fetch(url, { headers })
     	.then(res => res.json())        
   		.then((file1) => {
			let resultDiv = document.getElementById('result'); 
			let randomPlayer = pickRandomPlayer(file1.data); 

 			file1.data.forEach(
 			  	(player)=> {
					resultDiv.innerHTML = "";
					let p = document.createElement('p');
					p.textContent = randomPlayer.first_name + " " + randomPlayer.last_name + " , " + randomPlayer.position;
					resultDiv.appendChild(p);
				}
				);
 			  }

 			  )}
 	   catch (error) {
 		console.error(error);
 	  }
   }

	  function pickRandomPlayer(file1) {
		var randomIndex = Math.floor(Math.random()* file1.length);
		return file1[randomIndex]; 
	  }
	  

	