async function fetchdata() {
    try {
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data= await response.json();




        data.forEach(user => {
            console.log(`login :${user.login},Node ID :${user.node_id},URL :${user.url}`)
        });
    } catch (error) {
        console.log("error fething data ",error);
    }
}

fetchdata();