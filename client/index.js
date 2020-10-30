const serverSpace = "http://localhost:3000/spaceX"
const SERVER = "http://localhost:3000"
const serverNasa = "http://localhost:3000/nasa"

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
    renderNasaLandingPage()
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
  $("#news").hide()
  $("#discussion").hide()
})

$(".btn-register").on("click", () => {
  $("#login-page").hide()
  $("#homepage").hide()
  $("#register").show()
  $("#section-rocket").hide()
  $("#section-space").hide()
  $("#jumbotron").hide()
  $("#footer").hide()
  $("#news").hide()
  $("#discussion").hide()
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
  $("#nav-logout").show()
  $("#nav-login").show()
  $("#nav-register").show()
  $("#news").show()
  $("#discussion").hide()
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
        email: email,
        password: password
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
  auth2.signOut().then(function() {
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
      url: serverSpace + `/launches/upcoming`,
    })
    .done(res => {
      // console.log(res, "ini res ajax")
      res.forEach(result => {

        // console.log(result)
        launchpadId = result.launchpad
        rocketId = result.rocket
        getCustomerLaunches(result.payloads[0])
          .done(({
            customers
          }) => {
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
    url: serverSpace + `/payloads/${payloadsId}`,
  })
}

function getRocketLaunches(rocketId) {
  return $.ajax({
    method: "GET",
    url: serverSpace + `/rockets/${rocketId}`,
  })
}

function getLaunchpad(launchpadId) {
  return $.ajax({
    method: "GET",
    url: serverSpace + `/launchpads/${launchpadId}`,
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
      data: {
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


// nasa api
function renderNasaLandingPage() {
  const date = "2010-06-16"
  $.ajax({
    method: "GET",
    url: server+`?${date}`
  })
  .done(response => {
    console.log(response)
  })
  .fail(err => console.log(err))
  // $("#landing-page-nasa").append(`
  // <div>
  //     <h1 class="display-5 mb-5 mt-5">Featured Space News</h1>
  //     <div class="row">
  //       <div class="col">
  //         <div class="card shadow mb-5">
  //           <div class="card-header text-center">
  //             <h5 class="card-text">MARS OPPORTUNITY ROVER PICTURE OF THE DAY</h5>
  //           </div>
  //           <div class="card-body">
  //             <img src="assets/rover-mars.jpg" class="mb-3 rounded mx-auto d-block" alt="" srcset="">
  //             <button class="btn card-btn"><img src="assets/discuss-icon.png" width="20px" class="mr-2" alt="">Discussion</button>
  //             <p class="card-text text-justify col-lg-12 mt-3 mb-3">This picture was taken on Earth date: Wed Aug 10 2005, or Sol 548 on Mars. Captured with the
  //               Front Hazard Avoidance Camera (FHAZ) aboard the Opportunity rover. Opportunity was
  //               launched from Earth on Mon Jul 07 2003 and has been on Mars since Sun Jan 25 2004. Sadly,
  //               we lost communication with Opportunity in June of 2018 and mission was declared complete
  //               on February 13th, 2019. All images and mission data compliments of NASA. RIP Oppy.</p>
  //           </div>
  //         </div>
  //         <div class="d-flex justify-content-center mb-5">
  //           <button class="btn card-btn "><img src="assets/more-icon.png" width="20px" class="mr-2" alt="">More Topics</button>
  //         </div>
  //       </div>
  //     </div>    
  //   </div>
  // `)
}


