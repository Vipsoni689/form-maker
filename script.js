// document.getElementById("right1").style.display == "none";
// document.getElementById("left11").style.width="100%";
function fun1() {
    var select = document.getElementById("select");
    // document.getElementById("left11").style.width="30%";
    // document.getElementById("right1").style.width="70%";
   
     

    if (select.value == "fill") {
        alert("please create a form")   //alert 

    }
    if (select.value == "text") {                   //create a text field
       
        var right = document.getElementById("right1");
        var right_div = document.createElement("div");

        right_div.className = "smbox"
        right.appendChild(right_div)
        var left_main = document.createElement("div");

        var left_div = document.createElement("div");
        var down_div = document.createElement("div");
        var pname = document.createElement("h6");
        down_div.appendChild(pname)
        down_div.style.width = "100%"
        pname.innerHTML = "Please enter a value"
        pname.id = "name_error"
        left_main.className = "left_div"
        left_main.style.width = "350px"
        down_div.style.textAlign = "start"
        down_div.style.paddingLeft = "10px"
        left_main.style.display = "flex"
        left_main.style.flexDirection = "column"
        left_div.style.width = "100%"

        var inp1 = document.createElement("input");
        inp1.id = "nameid"
        inp1.placeholder = "lable"
        inp1.style.marginRight = "5px"
        var inp2 = document.createElement("input");
        inp2.placeholder = "text"
        var buttonadd = document.createElement("button");
        var buttonremove = document.createElement("button");
        buttonadd.innerHTML = "Add"
        buttonremove.innerHTML = "X"


        var p = document.createElement("p")
        right_div.appendChild(left_main)

        left_main.appendChild(left_div)
        left_main.appendChild(down_div)
        left_div.appendChild(p)
        left_div.appendChild(inp1)
        left_div.appendChild(buttonadd)
        right_div.appendChild(inp2)
        right_div.appendChild(buttonremove)


        buttonremove.setAttribute("onclick", "close1(this)")
        buttonadd.setAttribute("onclick", "text(this)")

    }

    else if (select.value == "number") {                  //create a number field
        var right = document.getElementById("right1");
        var right_div = document.createElement("div");
        right_div.className = "smbox"
        right.appendChild(right_div)
        var left_main = document.createElement("div");
        var left_div = document.createElement("div");
        var down_div = document.createElement("div");
        var pname = document.createElement("h6");
        down_div.appendChild(pname)
        down_div.style.width = "100%"
        pname.innerHTML = "Please enter a value"
        pname.id = "number_error"
        left_main.className = "left_div"
        left_main.style.width = "350px"
        down_div.style.textAlign = "start"
        down_div.style.paddingLeft = "10px"
        left_main.style.display = "flex"
        left_main.style.flexDirection = "column"
        left_div.style.width = "100%"
        var inp1 = document.createElement("input");
        inp1.id = "numberid"
        inp1.placeholder = "lable"
        inp1.style.marginRight = "5px"
        var inp2 = document.createElement("input");
        inp2.type = "number"
        inp2.placeholder = "number"
        var buttonadd = document.createElement("button");
        var buttonremove = document.createElement("button");
        buttonadd.innerHTML = "Add"
        buttonremove.innerHTML = "X"
        var p = document.createElement("p")
        right_div.appendChild(left_main)
        left_main.appendChild(left_div)
        left_main.appendChild(down_div)
        left_div.appendChild(p)
        left_div.appendChild(inp1)
        left_div.appendChild(buttonadd)
        right_div.appendChild(inp2)
        right_div.appendChild(buttonremove)

        buttonremove.setAttribute("onclick", "close1(this)")
        buttonadd.setAttribute("onclick", "number(this)")
    }

    else if (select.value == "email") {                   //create a email field
        var right = document.getElementById("right1");
        var right_div = document.createElement("div");
        right_div.className = "smbox"
        right.appendChild(right_div)
        var left_main = document.createElement("div");
        var left_div = document.createElement("div");
        var down_div = document.createElement("div");
        var pname = document.createElement("h6");
        down_div.appendChild(pname)
        down_div.style.width = "100%"
        pname.innerHTML = "Please enter a value"
        pname.id = "email_error"
        left_main.className = "left_div"
        left_main.style.width = "350px"
        down_div.style.textAlign = "start"
        down_div.style.paddingLeft = "10px"
        left_main.style.display = "flex"
        left_main.style.flexDirection = "column"
        left_div.style.width = "100%"
        var inp1 = document.createElement("input");
        inp1.id = "emailid"
        inp1.placeholder = "lable"
        inp1.style.marginRight = "5px"
        var inp2 = document.createElement("input");
        inp2.type = "email"
        inp2.placeholder = "email"
        var buttonadd = document.createElement("button");
        var buttonremove = document.createElement("button");
        buttonadd.innerHTML = "Add"
        buttonremove.innerHTML = "X"
        var p = document.createElement("p")
        right_div.appendChild(left_main)
        left_main.appendChild(left_div)
        left_main.appendChild(down_div)
        left_div.appendChild(p)
        left_div.appendChild(inp1)
        left_div.appendChild(buttonadd)
        right_div.appendChild(inp2)
        right_div.appendChild(buttonremove)

        buttonremove.setAttribute("onclick", "close1(this)")
        buttonadd.setAttribute("onclick", "email(this)")

    }
    else if (select.value == "radio") {                    //create a radio field
        var right = document.getElementById("right1");
        var right_div = document.createElement("div");
        right_div.className = "smbox"
        right.appendChild(right_div)
        var left_main = document.createElement("div");
        var left_div = document.createElement("div");
        var down_div = document.createElement("div");
        var pname = document.createElement("h6");
        down_div.appendChild(pname)
        down_div.style.width = "100%"
        pname.innerHTML = "Please enter a value"
        pname.id = "radio_error"
        left_main.className = "left_div"
        left_main.style.width = "350px"
        down_div.style.textAlign = "start"
        down_div.style.paddingLeft = "10px"
        left_main.style.display = "flex"
        left_main.style.flexDirection = "column"
        left_div.style.width = "100%"
        var inp1 = document.createElement("input");
        inp1.id = "radioid"
        inp1.style.marginRight = "5px"
        inp1.placeholder = "lable"


        var  radiomain=document.createElement("div")
        var  span=document.createElement("p")
        span.id="radiospan"

        var inp2 = document.createElement("input");
        inp2.type = "text"
        inp2.placeholder = "radio"
        var buttonadd = document.createElement("button");
        var buttonadd2 = document.createElement("button");
        var done = document.createElement("button");
        done.innerHTML = "Done"
        var buttonremove = document.createElement("button");
        buttonadd.innerHTML = "Add"
        buttonadd2.innerHTML = "Add"
        buttonremove.innerHTML = "X"
        buttonremove.id = "cutuuu"

        var dataradio = document.createElement("div");
        dataradio.style.display = "none";
        dataradio.id = "dataradio"




        var p = document.createElement("p")

        right_div.appendChild(left_main)
        right_div.appendChild(radiomain)
        // radiomain.style.border="1px solid red"
        left_main.appendChild(left_div)
        left_main.appendChild(down_div)
        left_div.appendChild(p)
        left_div.appendChild(inp1)
        left_div.appendChild(buttonadd)
        radiomain.appendChild(span)
        radiomain.appendChild(inp2)
        right_div.appendChild(buttonadd2)
        right_div.appendChild(done)
        right_div.appendChild(dataradio)

        right_div.appendChild(buttonremove)


        buttonremove.setAttribute("onclick", "close1(this)")
        buttonadd.setAttribute("onclick", "radio(this)")
        buttonadd2.setAttribute("onclick", "radiodata(this)")
        done.setAttribute("onclick", "radiodone(this)")

    }

    else if (select.value == "select") {                    //create a select field
        var right = document.getElementById("right1");
        var right_div = document.createElement("div");
        right_div.className = "smbox"
        right.appendChild(right_div)
        var left_main = document.createElement("div");
        var left_div = document.createElement("div");
        var down_div = document.createElement("div");
        var pname = document.createElement("h6");
        down_div.appendChild(pname)
        down_div.style.width = "100%"
        pname.innerHTML = "Please enter a value"
        pname.id = "select_error"
        left_main.className = "left_div"
        left_main.style.width = "350px"
        down_div.style.textAlign = "start"
        down_div.style.paddingLeft = "10px"
        left_main.style.display = "flex"
        left_main.style.flexDirection = "column"
        left_div.style.width = "100%"
        var inp1 = document.createElement("input");
        inp1.id = "selectid"
        inp1.style.marginRight = "5px"
        inp1.placeholder = "lable"

        var  checkmain=document.createElement("div")
        var  span=document.createElement("p")
        span.id="checkspan"



        var inp2 = document.createElement("input");
        inp2.id = "select1"
        inp2.type = "text"
        inp2.placeholder = "option"
        var buttonadd = document.createElement("button");
        var buttonadd2 = document.createElement("button");
        var done = document.createElement("button");
        done.innerHTML = "done"
        var buttonremove = document.createElement("button");
        buttonadd.innerHTML = "Add"
        buttonadd2.innerHTML = "Add"
        buttonadd2.id = "select2"
        buttonremove.innerHTML = "X"

        var select1 = document.createElement("select");
        select1.id = "sele"
        var p = document.createElement("p")

        right_div.appendChild(left_main)
    
        right_div.appendChild(checkmain)
        // checkmain.style.border="5px solid"
        checkmain.style.textAlign="center"
        left_main.appendChild(left_div)
        left_main.appendChild(down_div)
        left_div.appendChild(p)
        left_div.appendChild(inp1)
        left_div.appendChild(buttonadd)
        checkmain.appendChild(select1)
        var br = document.createElement("br");
        checkmain.appendChild(br)
        checkmain.appendChild(inp2)
        inp2.style.marginTop="8px"

        right_div.appendChild(buttonadd2)
        right_div.appendChild(done)
       
        var sp = document.createElement("span")
        var sp1 = document.createElement("span")
        var sp2 = document.createElement("span")
        sp.style.display = "none"
        sp1.style.display = "none"
        sp2.style.display = "none"

        right_div.appendChild(sp)
        right_div.appendChild(sp1)
        right_div.appendChild(sp2)
        right_div.appendChild(buttonremove)



        buttonremove.setAttribute("onclick", "close1(this)")
        buttonadd.setAttribute("onclick", "select(this)")
        // buttonadd2.setAttribute("onclick", "add2(this)")
        buttonadd2.setAttribute("onclick", "selectdata(this)")
        done.setAttribute("onclick", "selectdone(this)")

    }

    else if (select.value == "checkbox") {                    //create a checkbox field
        var right = document.getElementById("right1");
        var right_div = document.createElement("div");
        right_div.className = "smbox"
        right.appendChild(right_div)
        var left_main = document.createElement("div");
        var left_div = document.createElement("div");
        var down_div = document.createElement("div");
        var pname = document.createElement("h6");
        down_div.appendChild(pname)
        down_div.style.width = "100%"
        pname.innerHTML = "Please enter a value"
        pname.id = "check_error"
        left_main.className = "left_div"
        left_main.style.width = "350px"
        down_div.style.textAlign = "start"
        down_div.style.paddingLeft = "10px"
        left_main.style.display = "flex"
        left_main.style.flexDirection = "column"
        left_div.style.width = "100%"
        var inp1 = document.createElement("input");
        inp1.id = "checkid"
        inp1.style.marginRight = "5px"
        inp1.placeholder = "lable"

        var checkmain=document.createElement("div")
        // checkmain.style.border="1px solid"
        var  span=document.createElement("p")
        span.id="checkspan"
        var inp2 = document.createElement("input");
        inp2.id = "checkbox1"
        inp2.type = "text"
        inp2.placeholder = "checkbox"
        var buttonadd = document.createElement("button");
        var buttonadd2 = document.createElement("button");
        var done = document.createElement("button");
        done.innerHTML = "done"
        var buttonremove = document.createElement("button");
        buttonadd.innerHTML = "Add"
        buttonadd2.innerHTML = "Add"
        buttonadd2.id = "checkbox2"
        buttonremove.innerHTML = "X"
        buttonremove.id = "cutuuuuu"


        var p = document.createElement("p")
        var checkdata = document.createElement("div")
        checkdata.style.display="none"
        checkdata.id = "checkdata"
        var ddd = document.createElement("span")
        ddd.style.display = "none"


        right_div.appendChild(left_main)
        right_div.appendChild(checkmain)
        left_main.appendChild(left_div)
        left_main.appendChild(down_div)
        left_div.appendChild(p)
        left_div.appendChild(inp1)
        left_div.appendChild(buttonadd)
        checkmain.appendChild(span)
        checkmain.appendChild(inp2)
        right_div.appendChild(buttonadd2)
        right_div.appendChild(done)
        right_div.appendChild(checkdata)
        right_div.appendChild(ddd)
        right_div.appendChild(buttonremove)

        buttonremove.setAttribute("onclick", "close1(this)")
        buttonadd.setAttribute("onclick", "checkbox(this)")
        buttonadd2.setAttribute("onclick", "checkboxdata(this)")
        done.setAttribute("onclick", "checkboxdone(this)")

    }
    else if (select.value == "submit") {                      //create a submit button
        alert("Is your form completelted?");
        var right = document.getElementById("right1");
        var right_div = document.createElement("div");
        right_div.className = "smbox"
        right.appendChild(right_div)
        var submit1 = document.createElement("button");
        submit1.type = "submit";
        submit1.innerHTML = "Submit"
        right_div.appendChild(submit1);
        submit1.style.textAlign = "center";

        submit1.setAttribute("onclick", "next1(this)")


    }

}


function close1(close) {                       //close function
    close.parentNode.style.display = "none"

}
function text(text) {                        //     enter text value

    var flag = true;

    if (document.getElementById("nameid").value.trim() == "") {
        document.getElementById("name_error").style.display = "block"     //validation of text
        flag = false
    }
    else {
        text.parentNode.childNodes[1].style.display = "none"
        text.parentNode.childNodes[2].style.display = "none"
        var k = text.parentNode.childNodes[0]
        k.innerHTML = text.parentNode.childNodes[1].value + ":-"
        document.getElementById("name_error").style.display = "none"
    }

    return flag


}

function number(num) {                   //enter number value

    var flag = true;
    if (document.getElementById("numberid").value.trim() == "") {            //validation of number
        document.getElementById("number_error").style.display = "block"
        flag = false
    }
    else {
        num.parentNode.childNodes[1].style.display = "none"
        num.parentNode.childNodes[2].style.display = "none"
        var k = num.parentNode.childNodes[0]
        k.innerHTML = num.parentNode.childNodes[1].value + ":-"
        document.getElementById("number_error").style.display = "none"
    }
    return flag


}

function email(email) {             //enter email value


    var flag = true;
    if (document.getElementById("emailid").value.trim() == "") {                //validate email
        document.getElementById("email_error").style.display = "block"
        flag = false
    }
    else {
        email.parentNode.childNodes[1].style.display = "none"
        email.parentNode.childNodes[2].style.display = "none"
        var k = email.parentNode.childNodes[0]
        k.innerHTML = email.parentNode.childNodes[1].value + ":-"
        document.getElementById("email_error").style.display = "none"
        // flag=true
    }
    return flag


}

function radio(radio) {            //enter the radio

    var flag = true;
    if (document.getElementById("radioid").value.trim() == "") {        //validate the radio
        document.getElementById("radio_error").style.display = "block"
        flag = false
    }
    else {
        radio.parentNode.childNodes[1].style.display = "none"
        radio.parentNode.childNodes[2].style.display = "none"
        var k = radio.parentNode.childNodes[0]
        k.innerHTML = radio.parentNode.childNodes[1].value + ":-"
        document.getElementById("radio_error").style.display = "none"
    }
    return flag


}

function select(select) {        //enter select value

    var flag = true;
    if (document.getElementById("selectid").value.trim() == "") {               //validate select value
        document.getElementById("select_error").style.display = "block"
        flag = false
    }
    else {
        select.parentNode.childNodes[1].style.display = "none"
        select.parentNode.childNodes[2].style.display = "none"
        var k = select.parentNode.childNodes[0]
        k.innerHTML = select.parentNode.childNodes[1].value + ":-"
        document.getElementById("select_error").style.display = "none"
    }
    return flag


}
function checkbox(checkbox) {

    var flag = true;
    if (document.getElementById("checkid").value.trim() == "") {
        document.getElementById("check_error").style.display = "block"
        flag = false
    }
    else {
        checkbox.parentNode.childNodes[1].style.display = "none"
        checkbox.parentNode.childNodes[2].style.display = "none"
        var k = checkbox.parentNode.childNodes[0]
        k.innerHTML = checkbox.parentNode.childNodes[1].value + ":-"
        document.getElementById("check_error").style.display = "none"
    }
    return flag


}

function radiodata(c) {

    var dataradio = document.getElementById("radiospan");
    var radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "gender"
    dataradio.appendChild(radio)
    var h = document.createElement("label")
    var br = document.createElement("br")
    h.style.textTransform="lowercase"
    dataradio.appendChild(h)
    dataradio.appendChild(br)

    h.innerHTML = c.parentNode.childNodes[1].childNodes[1].value
    radio.value = h.innerHTML
    c.parentNode.childNodes[1].childNodes[1].value = ""


}
function selectdata(d) {
    var opt = document.createElement("option");
    d.parentNode.childNodes[1].childNodes[0].appendChild(opt)
    opt.innerText = d.parentNode.childNodes[1].childNodes[2].value
    opt.value =d.parentNode.childNodes[1].childNodes[2].value
    d.parentNode.childNodes[1].childNodes[2].value = ""
    console.log( d.parentNode.childNodes[1].childNodes[0])


}

function checkboxdata(e) {
    var checkdata = document.getElementById("checkspan")
    var check = document.createElement("input")
    check.type = "checkbox"
    check.name = "checkbox"
    checkdata.appendChild(check)
    var h = document.createElement("span")
    var br = document.createElement("br")
    checkdata.appendChild(h)
    checkdata.appendChild(br)
    // var br = document.createElement("br")
    // checkdata.appendChild(br)

    h.innerHTML = e.parentNode.childNodes[1].childNodes[1].value
    check.value = h.innerHTML
    console.log(h)
    e.parentNode.childNodes[1].childNodes[1].value = ""

}

function radiodone(radiodone) {
    radiodone.parentNode.childNodes[1].childNodes[1].style.display = "none"
    radiodone.parentNode.childNodes[2].style.display = "none"
    radiodone.parentNode.childNodes[3].style.display = "none"
}
function selectdone(selectdone) {
    selectdone.parentNode.childNodes[1].childNodes[1].style.display = "none"
    selectdone.parentNode.childNodes[1].childNodes[2].style.display = "none"
    selectdone.parentNode.childNodes[2].style.display = "none"
    selectdone.parentNode.childNodes[3].style.display = "none"
}
function checkboxdone(checkboxdone) {
    checkboxdone.parentNode.childNodes[1].childNodes[1].style.display = "none"
    checkboxdone.parentNode.childNodes[2].style.display = "none"
    checkboxdone.parentNode.childNodes[3].style.display = "none"
}

function next1(submit) {

    var z = submit.parentNode.parentNode.childNodes
    // console.log(z)
    for (var i = 0; i < z.length; i++) {
        var x = z[i].childNodes
        // var flag = true
        // if (z[i].childNodes[i].childNodes[0].childNodes[1].value.trim() == "") {
        //     z[i].childNodes[i].childNodes[1].childNodes[0].style.display = "block"
        //     flag=false
        // }
        // else {
        for (var j = 0; j < x.length - 1; j++) {
            console.log(x[j])
        }
        x[j].style.display = "none"
        document.getElementById("head1").innerText = "your form is ready"
        document.getElementById("head2").innerText = "step:- 2 of (3)"
        document.getElementById("head3").style.display = "none"
        document.getElementById("left11").style.display = "none"
        submit.parentNode.style.display = "none"
        var next = document.getElementById("new")
        next.style.display = "block"
        // next.style.width = "100%"
        // next.style="padding-left:100px;padding-right:100px;"
        var right = document.getElementById("right1");
        right.style.display = "none"
        var right = document.getElementById("right1");
        next.innerHTML = right.innerHTML
        var bt = document.createElement("button");
        bt.innerHTML = "submit"
        bt.type = "submit"
        bt.style.marginTop = "20px"
        next.appendChild(bt)
        bt.setAttribute("onclick", "addnew(this)")
    }

}
// return flag
// }




function addnew(newdiv) {

    document.getElementById("head2").innerText = "your details"
    document.getElementById("head2").style.fontSize="40px"
    document.getElementById("head1").style.display = "none"
    document.getElementById("head3").style.display = "none"
    document.getElementById("left11").style.display = "none"

    newdiv.style.display = "none"
    var print1 = document.getElementById("data")
    var next = document.getElementById("new")
    next.style.display = "none"
    print1.style.display = "block"


    var printdata = newdiv.parentNode.childNodes
    // console.log(printdata)



    for (var i = 0; i < printdata.length; i++) {
        
        if (printdata[i].childNodes.length <= 3 && printdata[i].childNodes.length >= 2) {
            // console.log(printdata[i])
            // console.log(printdata[i].childNodes.length)
            var namep = document.createElement("p")
            printdata[i].appendChild(namep)
            namep.innerHTML = printdata[i].childNodes[1].value
            printdata[i].childNodes[1].style.display = "none"
            namep.style.color = "white"
            printdata[i].style.justifyContent = "start "


        }

        else if (printdata[i].childNodes.length <= 6 && printdata[i].childNodes.length >= 5) {
            var rad = document.getElementsByName("gender")
            console.log(rad)

            console.log(printdata[i])


            console.log(printdata[i].childNodes.length)
            for (var j = 0; j < rad.length; j++) {
                if (rad[j].checked) {
                    var namep = document.createElement("p")
                    printdata[i].appendChild(namep)

                    namep.innerHTML = rad[j].value
                }
            }
            // namep.innerHTML = printdata[i].childNodes[3].value
            printdata[i].childNodes[1].style.display = "none"


            printdata[i].style.justifyContent = "start "



        }
        else if (printdata[i].childNodes.length <= 7 && printdata[i].childNodes.length >= 6) {
            var check1 = document.getElementsByName("checkbox")
            console.log(check1)

            console.log(printdata[i])


            console.log(printdata[i].childNodes.length)
            for (var j = 0; j < check1.length; j++) {
                if (check1[j].checked) {
                    var namep = document.createElement("p")
                    printdata[i].appendChild(namep)

                    namep.innerHTML = check1[j].value+","
                }
            }
            // namep.innerHTML = printdata[i].childNodes[3].value
            printdata[i].childNodes[1].style.display = "none"


            printdata[i].style.justifyContent = "start "



        }
        else if (printdata[i].childNodes.length <= 8 && printdata[i].childNodes.length > 7) {

            var namep = document.createElement("p")
            printdata[i].appendChild(namep)

            namep.innerHTML = printdata[i].childNodes[1].childNodes[0].value


            printdata[i].childNodes[1].childNodes[0].style.display="none"
            printdata[i].style.justifyContent = "start "



        }


    }


    print1.innerHTML = next.innerHTML

}
