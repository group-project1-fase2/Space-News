const serverSpace = "http://localhost:3000/spaceX"
$("document").ready(() => {
    $("#homepage").show()
    $("#register").hide()
    $("#section-rocket").show()
    $("#section-space").hide()
    renderLaunches()
})

function renderLaunches() {
    $.ajax({
        method: "GET",
        url: serverSpace +`/launches/upcoming`,
    })
    .done(res => {
        // console.log(res, "ini res ajax")
        res.forEach(result => {
            let customer 
            let rockets
            // console.log(result)
            let launchpadId = result.launchpad
            let rocketId = result.rocket
            getCustomerLaunches(result.payloads[0])
            .done(({customers}) => {
                // console.log(test.customers[0])
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
