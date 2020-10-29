SpaceNews

SpaceNew is an application that provides the latest news about outer space

RESTful Endpoints

GET /nasa
Show Astronomy Picture of the day
Returns json data Astronomy Picture

URL

https://api.nasa.gov/planetary/apod?api_key=${apiKey}

Method:

GET

Header:

None

URL Params

Required:

none

Data Params

None

Success Response:

Code: 200
Content:
{
    "copyright": "Casey Good/Steve Timmons",
    "date": "2020-10-29",
    "explanation": "Inspired by the halloween season, this telescopic portrait captures a cosmic cloud with a scary visage. The interstellar scene lies within the dusty expanse of reflection nebula IC 2118 in the constellation Orion. IC 2118 is about 800 light-years from your neighborhood, close to bright bluish star Rigel at the foot of Orion. Often identified as the Witch Head nebula for its appearance in a wider field of view it now rises before the witching hour though. With spiky stars for eyes, the ghoulish apparition identified here seems to extend an arm toward Orion's hot supergiant star. The source of illumination for IC 2118, Rigel is just beyond this frame at the upper left.",
    "hdurl": "https://apod.nasa.gov/apod/image/2010/GhoulGood.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Ghoul of IC 2118",
    "url": "https://apod.nasa.gov/apod/image/2010/GhoulGood_1024.jpg"
}
Error Response:

Code: 401 UNAUTHORIZED
Content:
{
  "message": "You are unauthorized to make this request."
}

##################-------------####################
GET /nasa/asteroid
Retrieve a list of Asteroids based on their closest approach date to Earth
Returns json data list of Asteroids

URL

https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${apiKey}

Method:

GET

Header:

None

URL Params

Required:
start_date[date]
end_date[date]


Data Params

None

Success Response:

Code: 200
                "id": "3726710",
                "neo_reference_id": "3726710",
                "name": "(2015 RC)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3726710",
                "absolute_magnitude_h": 24.3,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0366906138,
                        "estimated_diameter_max": 0.0820427065
                    },
                    "meters": {
                        "estimated_diameter_min": 36.6906137531,
                        "estimated_diameter_max": 82.0427064882
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0227984834,
                        "estimated_diameter_max": 0.0509789586
                    },
                    "feet": {
                        "estimated_diameter_min": 120.3760332259,
                        "estimated_diameter_max": 269.1689931548
                    }
                },
Error Response:

Code: 500 UNAUTHORIZED
Content:
{
    "message": "Request failed with status code 400",
    "name": "Error",
}

##################-------------####################
GET /nasa/earthObservation
unlock the significant public investment in earth observation data
Returns image

URL

https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${date}&api_key=DEMO_KEY

Method:

GET

Header:

None

URL Params

Required:
lon[float]
lat[float]
date[date]


Data Params

None

Success Response:

Code: 200
encript of image

Error Response:

Code: 500 UNAUTHORIZED
Content:
{
    "message": "Request failed with status code 400",
    "name": "Error",
}

##################-------------####################
GET /nasa/marsRoverPhotos
Image data gathered By Nasa's Curiocity, Opportunity, and Spirit rovers on Mars
URL

https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${apiKey}

Method:

GET

Header:

None

URL Params
Required:
none

Data Params
None

Success Response:

Code: 200
{
    "photos": [
        {
            "id": 102685,
            "sol": 1004,
            "camera": {
                "id": 20,
                "name": "FHAZ",
                "rover_id": 5,
                "full_name": "Front Hazard Avoidance Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG",
            "earth_date": "2015-06-03",
            "rover": {
                "id": 5,
                "name": "Curiosity",
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "status": "active"
            }
        },
        {
            "id": 102686,
            "sol": 1004,
            "camera": {
                "id": 20,
                "name": "FHAZ",
                "rover_id": 5,
                "full_name": "Front Hazard Avoidance Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG",
            "earth_date": "2015-06-03",
            "rover": {
                "id": 5,
                "name": "Curiosity",
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "status": "active"
            }
        },
        {
            "id": 102842,
            "sol": 1004,
            "camera": {
                "id": 21,
                "name": "RHAZ",
                "rover_id": 5,
                "full_name": "Rear Hazard Avoidance Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RLB_486615482EDR_F0481570RHAZ00323M_.JPG",
            "earth_date": "2015-06-03",
            "rover": {
                "id": 5,
                "name": "Curiosity",
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "status": "active"
            }
        },
        {
            "id": 102843,
            "sol": 1004,
            "camera": {
                "id": 21,
                "name": "RHAZ",
                "rover_id": 5,
                "full_name": "Rear Hazard Avoidance Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RRB_486615482EDR_F0481570RHAZ00323M_.JPG",
            "earth_date": "2015-06-03",
            "rover": {
                "id": 5,
                "name": "Curiosity",
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "status": "active"
            }
        }
    ]
}

Error Response:

Code: 500 UNAUTHORIZED
Content:
{
    "message": "Request failed with status code 400",
    "name": "Error",
}