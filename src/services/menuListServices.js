import axios from 'react-native-axios';

const config = {
  headers: {
	  'Content-Type': 'application/json',
	  'JsonStub-User-Key': 'd0a2201c-e271-4db4-a443-d0bd27cec796',
	  'JsonStub-Project-Key': '95b34b2e-4296-4fc1-9f19-f9c16db26440'
  },
  data:null
}; 

export async function menuListByCategories() {
  // simulate an asynchronous operation
    const url = "http://jsonstub.com/burgers";
    
	return new Promise(function (resolve, reject) {
		axios.get(url,config)
	  	.then((response) => {
	  		console.log(response);
	  		if(response.status === 200)
	  			resolve(response.data.Burgers);

	  	})
		.catch((error) => {
	  		console.log("axios error:",error);
	  		reject(null)
		});
	});   
} 