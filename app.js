$(document).ready(function () {

    $("#btn-submit").click(function () {
        event.preventDefault();

        let nameF = $("#form-name").val();
        let cityF = $("#form-city").val();
        let emailF = $("#form-email").val();
        let levelF = $("#form-level").val();

        console.log(nameF);
        console.log(cityF);
        console.log(emailF);
        console.log(levelF);

        //create an object for accumilate data
        const studentData = {
            name: nameF,
            city: cityF,
            email: emailF,
            level: levelF
        };

        console.log(studentData)

        //create JSON
        const studentJSON = JSON.stringify(studentData)
        console.log(studentJSON)
        // save the data with AJAX
        const XMLReq = new XMLHttpRequest();
        http.onreadystatechange = () => {
            if (XMLReq.readyState == 4) {
                if (XMLReq.status == 200 || XMLReq.status == 201) {
                    var jsonTypeResponse = JSON.stringify(XMLReq.responseText)
                    console.log(jsonTypeResponse)
                } else {
                    console.error("Error:", XMLReq.status, XMLReq.statusText)
                }

            } else {
                console.log("Processing stage: Stage=", XMLReq.readyState);
            }
        }
        XMLReq.open("POST", "http://localhost:8080/Stumgmt2024/student", true)
        XMLReq.setRequestHeader("Content-Type", "application/json")
        XMLReq.send(studentJSON)
    });
        // AJAX with JQuery
        // $.ajax({
        //     url: "http://localhost:8080/StudentManagemant2024_war/student",
        //     type: "POST",
        //     data: studentJSON,
        //     headers: {"Content-Type": "application/json"},
        //     success: (res) => {
        //         console.log(JSON.stringify(res));
        //     },
        //     error: (res) => {
        //         console.error(res);
        //     }
        // });
    // });

});