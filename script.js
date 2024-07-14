const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Don't change the above line
// Write your code here

const fetchData = async(url)=>{
		try {
			const resp = await fetch(url);
			const data = await resp.json();
			console.log(data);
		} catch (error) {
				console.log(error);
		}
}

urls.forEach((url)=>{
	fetchData(url);
})