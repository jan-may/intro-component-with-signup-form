const warning1 = document.getElementById("warning1");
const warning2 = document.getElementById("warning2");
const warning3 = document.getElementById("warning3");
const warning4 = document.getElementById("warning4");

const NameCheck = /\b[^\d\W]+\b/g;
const EmailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PWDCheck = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20})/


function ValueCheck(tag, num) {
    return document.getElementsByTagName(tag)[num].value;
}

function bgChange(id) {
    document.getElementById(id).style.backgroundImage = "url(/images/icon-error.svg)";
}

function bgChangeBack(id) {
    document.getElementById(id).style.backgroundImage = "url()";
}

function Validation(Regex, tag, num) {
    return Regex.test(ValueCheck(tag, num))
}

function getStyle(id, name) {
    var element = document.getElementById(id);
    return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
}

function myFunction() {
    bgChangeBack("fname");
    warning1.style.display = "none";
    if (Validation(NameCheck, "input", 0) === false) {
        warning1.style.display = "block";
        ValueCheck("input", 0);
        bgChange("fname");
        } 
    if (Validation(NameCheck, "input", 0) === true){
        warning1.style.display = "none";
        }
    bgChangeBack("lname");
    warning2.style.display = "none"
    if (Validation(NameCheck, "input", 1) === false) {
        warning2.style.display = "block";
        bgChange("lname");
        }
    if (Validation(NameCheck, "input", 1) === true){
        warning2.style.display = "none";
        }
    bgChangeBack("mail");
    warning3.style.display = "none"
    if (Validation(EmailCheck, "input", 2) === false) {
        warning3.style.display = "block";
        bgChange("mail");
        } 
    if (Validation(EmailCheck, "input", 2) === true){
        warning3.style.display = "none";
    }
    bgChangeBack("pwd");
    warning4.style.display = "none"
    if (Validation(PWDCheck, "input", 3) === false) {
        warning4.style.display = "block";
        bgChange("pwd");
        } 
    if (Validation(PWDCheck, "input", 3) === true){
        warning4.style.display = "none";}
}






