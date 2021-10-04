myP = document.getElementById("myP");

//!..........................6

// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       let myObject = JSON.parse(this.responseText);
//       for (const item of myObject) {
//         console.log(item.userId, item.title);
//       }
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   xhttp.send();
// }

//!...........................7

// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       myP.innerHTML = ``;
//       let myObject = JSON.parse(this.responseText);
//       for (const item of myObject) {
//         myP.innerHTML += `<ul>
//                              <li>${item.userId}</li>
//                              <li>${item.title}</li>
//                          </ul>`;
//       }
//     } else {
//       myP.innerHTML = `loading...`;
//     }
//     console.log(xhttp);
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   xhttp.send();
// }

//!................................8

// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       let myObject = JSON.parse(this.responseText);
//       for (const item of myObject) {
//         console.log(item.completed, item.title ,item.id);
//       }
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
//   xhttp.send();
// }

//!................................9

function deleteList(ulId,objArray){
for (let i = 0; i < objArray.length; i++) {
    console.log(ulId);    
}
}

function loadDoc() {
  const ajaxReq = new XMLHttpRequest();
  ajaxReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const OBJajaxReq = JSON.parse(this.responseText);
      OBJajaxReq.forEach((item , i) => {
        myP.innerHTML += `<ul id="${i}" onclick=deleteList(${i},${OBJajaxReq})>
                             <li>${item.completed}</li>
                             <li>${item.title}</li>
                             <li>${item.id}</li>
                         </ul>`;
      });
    }
  };

  ajaxReq.open("GET", "https://jsonplaceholder.typicode.com/todos");
  ajaxReq.send();
}




