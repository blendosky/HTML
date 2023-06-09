$(function () {
    $("#navbar").load("navbar.html")
});

var alerts = [];

$(document).ready(function(){
    $("#suscribeButton").click(function(){
        var email = $("#indexEmail").val();
        if(!email){
            var alertHtml = '<div class="alert alert-warning alert-dismissible" role="alert">'+
                            'Please fill in email field'+
                            '<button type="button" class="close" data-dismiss="alert" onclick="closeAlert(this)">'+
                            '<span aria-hidden="true">&times;</span>'+
                            '</button></div>';
        }else if(!isValidEmailRegx(email)){
            var alertHtml = '<div class="alert alert-danger alert-dismissible" role="alert">'+
                            'Please enter valid email address'+
                            '<button type="button" class="close" data-dismiss="alert" onclick="closeAlert(this)">'+
                            '<span aria-hidden="true">&times;</span>'+
                            '</button></div>';
        }
        alerts.push(alertHtml);
        $("#alertContainer").append(alertHtml);
        // setTimeout(function(){
        //     $(".alert").alert("close");
        //     alerts.pop();
        // }, 3000);
    })

    function closeAlert(button) {
        $(button).parent().alert("close");
        var index = $(".alert").index($(button).parent());
        alerts.splice(index, 1);
    }

    function isValidEmailRegx(email){
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
        
    
});