const wrapper_data = document.querySelector(".wrapper_data")
const fileText = document.querySelector("#fileText")
const form = document.querySelector(".form")
const btnSend = document.querySelector(".btnSend")
const textarea = document.querySelector(".textarea")

window.addEventListener("DOMContentLoaded", async () => {
    let data = null
    const res = await fetch("http://localhost:5000/api")
    data = await res.json()


    if (data) {

        let storeData = ""
        data.map((elem, index) => {

            storeData += `<div class="container_data">
                    <h3>
                        Id: <span>${elem.id} </span>
                    </h3>
                    <h3>
                        title: <span>${elem.title} </span>
                    </h3>
                    <h3>
                        Description: <span style="color:red;text-decoration:underline;cursor:pointer">${elem.thumbnailUrl}</span>
                    </h3>
                    <divc class="btn">
                    <button class="delete">
                        delete
                    </button>
                    <button class="update">
                        update
                    </button>
                </div>
                    
                </div>`

        })

        wrapper_data.innerHTML = storeData
    }
    else {
        alert("wiouowu ")
        const h2 = document.createElement("h2")
        h2.className = "tag"
        h2.innerHTML = "<b>Loading ...🔃🍞</b>"
        wrapper_data.innerHTML = h2

    }

    // console.log(data)

    // fileText.addEventListener("change", (e) => {

    //     const file = e.target.files[0]
    //     console.log(file)

    //     const formData = new FormData();

    //     formData.append(file)


    // })


    btnSend.addEventListener("click", async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("pdfFile", fileText.files[0])

        const res = await fetch("/extract-text", {
            method: "post",
            body: formData
        })

        const data = await res.text()
        textarea.innerHTML = data
        console.log(data)
        console.log(res)

    })

})