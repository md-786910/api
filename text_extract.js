// const fileUpload = require('express-fileupload')
// const pdfParse = require('pdf-parse')
// app.get("/api", async (req, res) => {

//     const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=100")
//     const data = await response.json()
//     res.status(200).send(data)
// })

// app.post("/extract-text", (req, res) => {

//     if (!req.files && !req.files.pdfFile) {
//         res.status(404)
//         res.end()
//     }

//     console.log(req.files.pdfFile)



//     pdfParse(req.files.pdfFile).then(result => {

//         res.status(200).send(result.text)

//         // res.status(200).render("index")
//     })


// })

/*
  <div class="container">
                <h1>
                    Api development for Production
                </h1>
            </div>

            <div class="api_container">
                {{!-- <form class="form" method="post"> --}}
                    <input type="text" name="name" id=""
                        placeholder="Enter Name">
                    <input type="text" name="email" id=""
                        placeholder="Enter Email">
                    <input type="file" name="" id="fileText" accept="image/pdf"
                        name="pdf">
                    <button class="btnSend">
                        send api 📤
                    </button>

                    <button class="btnSend" id="readPdfBtn">
                        Read Loudly Pdf 📤
                    </button>
                    {{!-- </form> --}}
                <script>
                    const readPdfBtn=document.querySelector("#readPdfBtn")
                    readPdfBtn.addEventListener("click",(e)=>{

                        responsiveVoice.speak(textarea.value)
                    })
                </script>
            </div>
            <div class="textArea">
                <textarea name="" class="textarea"></textarea>
            </div>
            {{!-- api data --}}
            <div class="api_data">
                <h1 style="text-align:
                    start;color:white;font-size:40px;font-weight:bold;padding:10px">
                    Api Data
                </h1>

                <div class="wrapper_data">

                    {{!-- code --}}

                </div>
            </div>

            .wrapper_container {
  padding: 20px;
}

.container h1 {
  font-size: 40px;
  color: white;
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
}

.api_container {
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  border: 2px solid white;
}

// .form {
//   /* border: 2px solid white; */
//   line-height: 3em;
// }
// input {
//   /* border: 1px solid red; */
//   margin-top: 20px;
//   width: 100%;
//   padding: 5px;
//   font-size: 20px;
//   white-space: pre;
// }
// button {
//   width: 40%;
//   padding: 10px;
//   cursor: pointer;
//   background-color: navy;
//   color: #fff;
//   font-weight: 600;
//   font-size: 15px;
//   border: none;
// }
// .btnSend {
//   margin: 10px;
// }
// .textarea {
//   padding-left: 20px;
//   margin-top: 10px;
//   width: 100%;
//   height: 40vh;
//   padding: 3px;
//   font-size: 20px;
// }
// .wrapper_data {
//   display: flex;
//   flex-wrap: wrap;
//   border-top: 2px solid red;
// }
// .container_data {
//   background-color: blueviolet;
//   margin: 10px;
//   padding: 10px;
//   min-width: 25%;
//   width: 30%;
//   max-width: 35%;
// }
// .container_data h3 {
//   color: white;
//   color: palegreen;
//   font-size: 20px;
// }
// .container_data span {
//   color: azure;
//   font-size: 17px;
// }
// .tag {
//   color: white;
//   font-weight: 600;
// }


