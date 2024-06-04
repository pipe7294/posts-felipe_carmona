async function obtenerPost() {

    try {


        let response = await fetch('https://jsonplaceholder.typicode.com/posts');


        let data = await response.json();


        console.log(data);
        if (data !== null) {

            const postsInfo = data.map(i =>
                `<div>
          <ul>
           <li>
           <span> <strong>User Id: ${i.userId}</strong> </span></br>
           <span> <strong>${i.title}</strong> </span></br>
           <span>  ${i.body} </span></br>
           </li>
          </ul>
        </div>`
            ).join('');

            document.querySelector('#post-data').innerHTML = postsInfo;
        }

    }
    catch (error) {
        console.log("este es solo un mensaje de error controlado:" + error)
        document.querySelector('#post-data').innerHTML = "Estimado usuario hubo un error, contacte al area de TI";
    }

};