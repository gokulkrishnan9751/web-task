function fun(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let repass = document.getElementById('repass').value;
    let cont = document.getElementById('cont').value;

    
    if( name == ''){
        document.getElementById('one').innerHTML = "* please enter name"
    }
    if( email == ''){
        document.getElementById('two').innerHTML = "* please enter email address"
    }
    if( pass == ''){
        document.getElementById('three').innerHTML = "* please enter password"
    }
    if( repass == ''){
        document.getElementById('four').innerHTML = "* please enter password"
    }
    if( cont == ''){
        document.getElementById('five').innerHTML = "* please enter contact"
    }
    
    if( cont.length < 10){
        document.getElementById('five').innerHTML = "* please enter correct contact"
    }

    if( repass !== pass){
        document.getElementById('four').innerHTML = "* Enter correct matching password"
    }

    

    // else if( name == ''|| email == '' || pass == '' || repass == '' || cont == ''){
        
    //     document.getElementById('one').innerHTML = "* please enter valid name";
    //     document.getElementById('two').innerHTML = "* please enter valid email";
    //     document.getElementById('three').innerHTML = "* please enter valid password";
    //     document.getElementById('four').innerHTML = "* please enter correct password";
    //     document.getElementById('five').innerHTML = "* please enter vaild contact";
    // }
}