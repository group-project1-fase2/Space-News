const serverSpace = "http://localhost:3000/spaceX"
const SERVER = "http://localhost:3000"

$(document).ready(() => {
    const token = localStorage.getItem('token');
    if (token) {
        afterLogin()
        renderLaunches()
        
        //testing login berhasil dan dpt token ***
        $(".testing-login").append(`<p>token: ${token}</p>`).show()
        //testing diatas, adalah login berhasil dan dpt token
    } else {
        homeBeforeLogin()
        renderLaunches()
    }
})

//navigate
$(".home-logo").on("click", () => {
    homeBeforeLogin()
})

$(".btn-login").on("click", () => {
    $("#login-page").show()
    $("#homepage").hide()
    $("#register").hide()
    $("#section-rocket").hide()
    $("#section-space").hide()
    $("#jumbotron").hide()
    $("#footer").hide()
})

$(".btn-register").on("click", () => {
    $("#login-page").hide()
    $("#homepage").hide()
    $("#register").show()
    $("#section-rocket").hide()
    $("#section-space").hide()
    $("#jumbotron").hide()
    $("#footer").hide()
})
//end navigate

function homeBeforeLogin() {
    $("#login-page").hide()
    $("#homepage").show()
    $("#register").hide()
    $("#section-rocket").show()
    $("#section-space").show()
    $("#jumbotron").show()
    $("#footer").show()
    $("#nav-logout").hide()
    $("#nav-login").show()
    $("#nav-register").show()
}

function registerPage() {
    $("#login-page").hide()
    $("#homepage").hide()
    $("#register").show()
    $("#section-rocket").hide()
    $("#section-space").hide()
    $("#jumbotron").hide()
    $("#footer").hide()
}

function register(e) {
    e.preventDefault();
    const first_name = $('#firstName').val();
    const last_name = $('#lastName').val();
    const email = $('#register-email').val();
    const password = $('#register-password').val();
    const birth_date = $('#birthDate').val();
    $.ajax({
        method: "POST",
        url: SERVER + "/auth/register",
        data: {
            first_name,
            last_name,
            email,             
            password,                
            birth_date
        }
    })
    .done(response => {
        // console.log(response);
    })
    .fail(err => {
        console.log(err);
    });
}

function login(e) {
    e.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();
    // console.log(email, password);
    $.ajax({
        method: "POST",
        url: SERVER + "/auth/login",
        data: {
            email :email,
            password : password
        }
    })
    .done(response => {
        const token = response.access_token;
        // console.log(token)
        localStorage.setItem('token', token);
        // renderLaunches()
        $("#login-page").hide()
        $("#homepage").show()
        $("#register").hide()
        $("#section-rocket").show()
        $("#section-space").show()
        $("#jumbotron").show()
        $("#footer").show()
    })
    .fail(err => {
        console.log(err);
    });
}

function logout() {
    $('#email').val('')
    $('#password').val('')
    localStorage.removeItem('token');
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
    homeBeforeLogin()
}

function afterLogin() {
    $("#login-page").hide()
    $("#homepage").show()
    $("#register").hide()
    $("#section-rocket").show()
    $("#section-space").show()
    $("#jumbotron").show()
    $("#footer").show()
    $("#nav-logout").show()
    $("#nav-login").hide()
    $("#nav-register").hide()
}

// render table launches upcoming rockets
function renderLaunches() {
    let customer 
    let rockets
    let launchpadId
    let rocketId
    $.ajax({
        method: "GET",
        url: serverSpace +`/launches/upcoming`,
    })
    .done(res => {
        // console.log(res, "ini res ajax")
        res.forEach(result => {
            
            // console.log(result)
            launchpadId = result.launchpad
            rocketId = result.rocket
            getCustomerLaunches(result.payloads[0])
            .done(({customers}) => {
                customer = customers
                // console.log(customer)
                getRocketLaunches(rocketId)
                .done(rocket => {
                    rockets = {
                        name: rocket.name,
                        country: rocket.country
                    }
                    getLaunchpad(launchpadId)
                    .done(launchpad => {
                        $("#content-launches").append(`
                        <div class="col-lg-12 mb-4">
                        <div class="card shadow" style="width: 100%;">
                        <div class="card-body px-5">
                            <h5 class="card-title">${rockets.name}, ${rockets.country}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Code Mission: ${result.name}</h6>
                            <p class="card-subtitle">Location: ${launchpad.full_name}</p>
                            <p class="card-text">Customer Organization: ${customers[0]}</p>
                            <hr>
                            <p class="card-text font-weight-bold text-muted">Launch Time: ${result.date_local}</p>
                        </div>
                        </div>
                        </div>
                        `)
                    })
                })
            })
  
        })
    })
    .fail(err => console.log(err))
}

function getCustomerLaunches(payloadsId) {
    return $.ajax({
        method: "GET",
        url: serverSpace +`/payloads/${payloadsId}`,
    })
}

function getRocketLaunches(rocketId) {
    return $.ajax({
        method: "GET",
        url: serverSpace +`/rockets/${rocketId}`,
    })
}

function getLaunchpad(launchpadId) {
    return $.ajax({
        method: "GET",
        url: serverSpace +`/launchpads/${launchpadId}`,
    })
}
// render table launches upcoming rockets <- until here 

// google oauth
//sign in
function onSignIn(googleUser) {
    const google_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        method: "POST",
        url: SERVER + "/auth/googleLogin",
        data:{
            google_access_token: google_token
        }
    })
    .done(response => {
        console.log(response, "ni token")
        localStorage.setItem('token', response);
        afterLogin()
    })
    .fail(err => console.log(err))
}

//sign out
function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}


  