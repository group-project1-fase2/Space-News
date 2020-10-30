# Space-news

## API DOCUMENTATION

# SpaceX (3rd APIS)

**RESTful ENDPOINT**
---
- `GET /spaceX/launches/upcoming`

**Show Movie**
---
  Returns json data about a single movie.

* **URL**

  `/spaceX/launches/upcoming`

* **Method:**

  `GET`

* **Header:**

  None
  
*  **URL Params**

   **Required:**
 
   None


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
    {
        "fairings": {
            "reused": null,
            "recovery_attempt": null,
            "recovered": null,
            "ships": []
        },
        "links": {
            "patch": {
                "small": null,
                "large": null
            },
            "reddit": {
                "campaign": "https://www.reddit.com/r/spacex/comments/io0swm/gps_iii_sv04_launch_campaign_thread/",
                "launch": "https://www.reddit.com/r/spacex/comments/j0nu3c/rspacex_gps_iii_sv04_official_launch_discussion/",
                "media": null,
                "recovery": null
            },
            "flickr": {
                "small": [],
                "original": []
            },
            "presskit": null,
            "webcast": null,
            "youtube_id": null,
            "article": null,
            "wikipedia": null
        },
        "static_fire_date_utc": "2020-09-25T05:42:00.000Z",
        "static_fire_date_unix": 1601012520,
        "tbd": false,
        "net": false,
        "window": null,
        "rocket": "5e9d0d95eda69973a809d1ec",
        "success": null,
        "details": "SpaceX will launch GPS Block III Space Vehicle 04 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This will be the fourth GPS III satellite launched and the third launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission will land on an ASDS.",
        "crew": [],
        "ships": [
            "5ea6ed2f080df4000697c910",
            "5ea6ed2f080df4000697c90d"
        ],
        "capsules": [],
        "payloads": [
            "5eb0e4d2b6c3bb0006eeb25e"
        ],
        "launchpad": "5e9e4501f509094ba4566f84",
        "auto_update": true,
        "failures": [],
        "flight_number": 106,
        "name": "GPS III SV04 (Sacagawea)",
        "date_utc": "2020-11-04T23:28:00.000Z",
        "date_unix": 1604532480,
        "date_local": "2020-11-04T18:28:00-05:00",
        "date_precision": "hour",
        "upcoming": true,
        "cores": [
            {
                "core": "5f57c5440622a633027900a0",
                "flight": 1,
                "gridfins": true,
                "legs": true,
                "reused": false,
                "landing_attempt": true,
                "landing_success": null,
                "landing_type": "ASDS",
                "landpad": "5e9e3033383ecbb9e534e7cc"
            }
        ],
        "id": "5eb87d4cffd86e000604b38d"
    }
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:**
    ```json
    {
      "message": "NOT FOUND"
    }
    ```

**RESTful Endpoints**
---
- `GET /spaceX/rockets/:id`

* **URL**

  `/spaceX/rockets/:id`

* **Method:**

  `GET`

* **Header:**

  None
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "height": {
        "meters": 70,
        "feet": 229.6
    },
    "diameter": {
        "meters": 3.7,
        "feet": 12
    },
    "mass": {
        "kg": 549054,
        "lb": 1207920
    },
    "first_stage": {
        "thrust_sea_level": {
            "kN": 7607,
            "lbf": 1710000
        },
        "thrust_vacuum": {
            "kN": 8227,
            "lbf": 1849500
        },
        "reusable": true,
        "engines": 9,
        "fuel_amount_tons": 385,
        "burn_time_sec": 162
    },
    "second_stage": {
        "thrust": {
            "kN": 934,
            "lbf": 210000
        },
        "payloads": {
            "composite_fairing": {
                "height": {
                    "meters": 13.1,
                    "feet": 43
                },
                "diameter": {
                    "meters": 5.2,
                    "feet": 17.1
                }
            },
            "option_1": "dragon"
        },
        "reusable": false,
        "engines": 1,
        "fuel_amount_tons": 90,
        "burn_time_sec": 397
    },
    "engines": {
        "isp": {
            "sea_level": 288,
            "vacuum": 312
        },
        "thrust_sea_level": {
            "kN": 845,
            "lbf": 190000
        },
        "thrust_vacuum": {
            "kN": 914,
            "lbf": 205500
        },
        "number": 9,
        "type": "merlin",
        "version": "1D+",
        "layout": "octaweb",
        "engine_loss_max": 2,
        "propellant_1": "liquid oxygen",
        "propellant_2": "RP-1 kerosene",
        "thrust_to_weight": 180.1
    },
    "landing_legs": {
        "number": 4,
        "material": "carbon fiber"
    },
    "payload_weights": [
        {
            "id": "leo",
            "name": "Low Earth Orbit",
            "kg": 22800,
            "lb": 50265
        },
        {
            "id": "gto",
            "name": "Geosynchronous Transfer Orbit",
            "kg": 8300,
            "lb": 18300
        },
        {
            "id": "mars",
            "name": "Mars Orbit",
            "kg": 4020,
            "lb": 8860
        }
    ],
    "flickr_images": [
        "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
        "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg",
        "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg",
        "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg",
        "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg",
        "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg"
    ],
    "name": "Falcon 9",
    "type": "rocket",
    "active": true,
    "stages": 2,
    "boosters": 0,
    "cost_per_launch": 50000000,
    "success_rate_pct": 97,
    "first_flight": "2010-06-04",
    "country": "United States",
    "company": "SpaceX",
    "wikipedia": "https://en.wikipedia.org/wiki/Falcon_9",
    "description": "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
    "id": "5e9d0d95eda69973a809d1ec"
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:**
    ```json
    {
      "message": "NOT FOUND"
    }
    ```

**RESTful Endpoints**
---
- `GET /spaceX/launchpads/:id`

* **URL**

  `/spaceX/launchpads/:id`

* **Method:**

  `GET`

* **Header:**

  None
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "name": "CCAFS SLC 40",
    "full_name": "Cape Canaveral Air Force Station Space Launch Complex 40",
    "locality": "Cape Canaveral",
    "region": "Florida",
    "timezone": "America/New_York",
    "latitude": 28.5618571,
    "longitude": -80.577366,
    "launch_attempts": 59,
    "launch_successes": 57,
    "rockets": [
        "5e9d0d95eda69973a809d1ec"
    ],
    "launches": [
        "5eb87cddffd86e000604b32f",
        "5eb87cdeffd86e000604b330",
        "5eb87cdfffd86e000604b331",
    ],
    "details": "SpaceX's primary Falcon 9 pad, where all east coast Falcon 9s launched prior to the AMOS-6 anomaly. Previously used alongside SLC-41 to launch Titan rockets for the US Air Force, the pad was heavily damaged by the AMOS-6 anomaly in September 2016. It returned to flight with CRS-13 on December 15, 2017, boasting an upgraded throwback-style Transporter-Erector modeled after that at LC-39A.",
    "status": "active",
    "id": "5e9e4501f509094ba4566f84"
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:**
    ```json
    {
      "message": "NOT FOUND"
    }
    ```


**RESTful Endpoints**
---
- `GET /spaceX/payloads/:id`

* **URL**

  `/spaceX/payloads/:id`

* **Method:**

  `GET`

* **Header:**

  None
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "dragon": {
        "capsule": null,
        "mass_returned_kg": null,
        "mass_returned_lbs": null,
        "flight_time_sec": null,
        "manifest": null,
        "water_landing": null,
        "land_landing": null
    },
    "name": "GPS III SV04 (Sacagawea)",
    "type": "Satellite",
    "reused": false,
    "launch": null,
    "customers": [
        "United States Space Force"
    ],
    "norad_ids": [],
    "nationalities": [
        "United States"
    ],
    "manufacturers": [
        "Lockheed Martin"
    ],
    "mass_kg": 3681,
    "mass_lbs": 8115.216,
    "orbit": "MEO",
    "reference_system": "geocentric",
    "regime": "semi-synchronous",
    "longitude": null,
    "semi_major_axis_km": null,
    "eccentricity": null,
    "periapsis_km": null,
    "apoapsis_km": null,
    "inclination_deg": null,
    "period_min": null,
    "lifespan_years": 15,
    "epoch": null,
    "mean_motion": null,
    "raan": null,
    "arg_of_pericenter": null,
    "mean_anomaly": null,
    "id": "5eb0e4d2b6c3bb0006eeb25e"
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:**
    ```json
    {
      "message": "NOT FOUND"
    }
    ```
**RESTful Endpoints**
---
- `GET /nasa/asteroid`

* **URL**

  `/nasa/asteroid`

* **Method:**

  `GET`

* **Header:**

  None
  
*  **URL Params**

   **Required:**
 
    start_date[date]
    end_date[date]`


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
    {
        "tanggal": "2015-09-08",
        "name": "(2015 RC)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3726710"
    },
    {
        "tanggal": "2015-09-08",
        "name": "(2015 TX237)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3730577"
    },
    {
        "tanggal": "2015-09-08",
        "name": "(2006 WO1)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3359445"
    },
    {
        "tanggal": "2015-09-08",
        "name": "(2010 XT10)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3553060"
    },
    {
        "tanggal": "2015-09-08",
        "name": "(2015 RO36)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727181"
    },
    {
        "tanggal": "2015-09-08",
        "name": "(2016 EK158)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3747356"
    },
    {
        "tanggal": "2015-09-08",
        "name": "(2016 RT)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3758838"
    },
    {
        "tanggal": "2015-09-08",
        "name": "(2015 UG)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3731587"
    },
    {
        "tanggal": "2015-09-08",
        "name": "(2015 RN83)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727639"
    },
    {
        "tanggal": "2015-09-08",
        "name": "(2018 DM4)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3799865"
    },
    {
        "tanggal": "2015-09-08",
        "name": "465633 (2009 JR5)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2465633"
    },
    {
        "tanggal": "2015-09-08",
        "name": "(2008 QV11)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3426410"
    },
    {
        "tanggal": "2015-09-07",
        "name": "(2015 RG2)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3726788"
    },
    {
        "tanggal": "2015-09-07",
        "name": "(2015 RX83)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727662"
    },
    {
        "tanggal": "2015-09-07",
        "name": "(2015 RY83)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727663"
    },
    {
        "tanggal": "2015-09-07",
        "name": "(2015 FC35)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3713989"
    },
    {
        "tanggal": "2015-09-07",
        "name": "(2015 RL35)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727036"
    },
    {
        "tanggal": "2015-09-07",
        "name": "(2015 RH36)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727179"
    },
    {
        "tanggal": "2015-09-07",
        "name": "(2019 QK4)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843641"
    },
    {
        "tanggal": "2015-09-07",
        "name": "(2016 RN41)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3759690"
    },
    {
        "tanggal": "2015-09-07",
        "name": "(2018 RZ2)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3827337"
    },
    {
        "tanggal": "2015-09-07",
        "name": "440012 (2002 LE27)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2440012"
    },
    {
        "tanggal": "2015-09-07",
        "name": "(2016 RU33)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3759353"
    },
    {
        "tanggal": "2015-09-07",
        "name": "(2020 BY)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3986741"
    }
]
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:**
    ```json
    {
      "message": "NOT FOUND"
    }
    ```
    **RESTful Endpoints**
---
- `GET /nasa/earthObservation`

* **URL**

  `/nasa/earthObservation`

* **Method:**

  `GET`

* **Header:**

  None
  
*  **URL Params**

   **Required:**
  lon[float]
  lat[float]
  date[date]


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    encript of image
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:**
    ```json
    {
      "message": "Request failed"
    }
    ```
    **RESTful Endpoints**
---
- `GET /nasa/earthObservation`

* **URL**

  `/nasa/earthObservation`

* **Method:**

  `GET`

* **Header:**

  None
  
*  **URL Params**

   **Required:**
  lon[float]
  lat[float]
  date[date]


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    encript of image
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:**
    ```json
    {
      "message": "Request failed"
    }
    ```
    **RESTful Endpoints**
---
- `GET /nasa/earthObservation`

* **URL**

  `/nasa/earthObservation`

* **Method:**

  `GET`

* **Header:**

  None
  
*  **URL Params**

   **Required:**
  lon[float]
  lat[float]
  date[date]


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    encript of image
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:**
    ```json
    {
      "message": "Request failed"
    }
    ```

     **RESTful Endpoints**
---
- `GET /nasa/marsRoverPhotos`

* **URL**

  `/nasa/marsRoverPhotos`

* **Method:**

  `GET`

* **Header:**

  None
  
*  **URL Params**

   **Required:**
  None

* **Data Params**

 date=2016-6-3

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    
    {
        "camera": "Front Hazard Avoidance Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/fcam/FRB_518233322EDR_F0542280FHAZ00206M_.JPG"
    },
    {
        "camera": "Front Hazard Avoidance Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/fcam/FLB_518233322EDR_F0542280FHAZ00206M_.JPG"
    },
    {
        "camera": "Front Hazard Avoidance Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/fcam/FLB_518233101EDR_F0542280FHAZ00206M_.JPG"
    },
    {
        "camera": "Front Hazard Avoidance Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/fcam/FRB_518233101EDR_F0542280FHAZ00206M_.JPG"
    },
    {
        "camera": "Front Hazard Avoidance Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/fcam/FLB_518226958EDR_F0542280FHAZ00323M_.JPG"
    },
    {
        "camera": "Front Hazard Avoidance Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/fcam/FRB_518226958EDR_F0542280FHAZ00323M_.JPG"
    },
    {
        "camera": "Rear Hazard Avoidance Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/rcam/RLB_518226992EDR_F0542280RHAZ00323M_.JPG"
    },
    {
        "camera": "Rear Hazard Avoidance Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/rcam/RRB_518226992EDR_F0542280RHAZ00323M_.JPG"
    },
    {
        "camera": "Mast Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mcam/1360MR0066540000701501E01_DXXX.jpg"
    },
    {
        "camera": "Mast Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mcam/1360MR0066530000701500E01_DXXX.jpg"
    },
    {
        "camera": "Mast Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mcam/1360MR0066540000701501I01_DXXX.jpg"
    },
    {
        "camera": "Mast Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mcam/1360MR0066530000701500I01_DXXX.jpg"
    },
    {
        "camera": "Chemistry and Camera Complex",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ccam/CR0_518229543EDR_F0542280CCAM02360M_.JPG"
    },
    {
        "camera": "Chemistry and Camera Complex",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ccam/CR0_518229005EDR_F0542280CCAM02360M_.JPG"
    },
    {
        "camera": "Chemistry and Camera Complex",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ccam/CR0_518228623EDR_F0542280CCAM02360M_.JPG"
    },
    {
        "camera": "Chemistry and Camera Complex",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ccam/CR0_518228245EDR_F0542280CCAM02360M_.JPG"
    },
    {
        "camera": "Chemistry and Camera Complex",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ccam/CR0_518227422EDR_F0542280CCAM01360M_.JPG"
    },
    {
        "camera": "Chemistry and Camera Complex",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/soas/rdr/ccam/CR0_518229543PRC_F0542280CCAM02360L1.PNG"
    },
    {
        "camera": "Chemistry and Camera Complex",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/soas/rdr/ccam/CR0_518229005PRC_F0542280CCAM02360L1.PNG"
    },
    {
        "camera": "Chemistry and Camera Complex",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/soas/rdr/ccam/CR0_518228623PRC_F0542280CCAM02360L1.PNG"
    },
    {
        "camera": "Chemistry and Camera Complex",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/soas/rdr/ccam/CR0_518228245PRC_F0542280CCAM02360L1.PNG"
    },
    {
        "camera": "Chemistry and Camera Complex",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/soas/rdr/ccam/CR0_518227422PRC_F0542280CCAM01360L1.PNG"
    },
    {
        "camera": "Mars Hand Lens Imager",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mhli/1360MH0001220010502185C00_DXXX.jpg"
    },
    {
        "camera": "Mars Hand Lens Imager",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mhli/1360MH0001220010502183C00_DXXX.jpg"
    },
    {
        "camera": "Mars Hand Lens Imager",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mhli/1360MH0001480010502181C00_DXXX.jpg"
    },
    {
        "camera": "Mars Hand Lens Imager",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mhli/1360MH0001900010502179C00_DXXX.jpg"
    },
    {
        "camera": "Mars Hand Lens Imager",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mhli/1360MH0001220010502185I01_DXXX.jpg"
    },
    {
        "camera": "Mars Hand Lens Imager",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mhli/1360MH0001220000502184I01_DXXX.jpg"
    },
    {
        "camera": "Mars Hand Lens Imager",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mhli/1360MH0001220010502183I01_DXXX.jpg"
    },
    {
        "camera": "Mars Hand Lens Imager",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mhli/1360MH0001220000502182I01_DXXX.jpg"
    },
    {
        "camera": "Mars Hand Lens Imager",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mhli/1360MH0001480010502181I01_DXXX.jpg"
    },
    {
        "camera": "Mars Hand Lens Imager",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mhli/1360MH0001480000502180I01_DXXX.jpg"
    },
    {
        "camera": "Mars Hand Lens Imager",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mhli/1360MH0001900010502179I01_DXXX.jpg"
    },
    {
        "camera": "Mars Hand Lens Imager",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/msss/01360/mhli/1360MH0001900000502178I01_DXXX.jpg"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NLB_518233356EDR_F0542280NCAM00207M_.JPG"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NLB_518233152EDR_F0542280NCAM00207M_.JPG"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NLB_518230361EDR_F0542280NCAM00286M_.JPG"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NLB_518230330EDR_F0542280NCAM00286M_.JPG"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NLB_518230299EDR_F0542280NCAM00286M_.JPG"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NLB_518230269EDR_F0542280NCAM00286M_.JPG"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NLB_518230185EDR_F0542280NCAM00286M_.JPG"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NRB_518233356EDR_F0542280NCAM00207M_.JPG"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NRB_518233152EDR_F0542280NCAM00207M_.JPG"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NRB_518230361EDR_F0542280NCAM00286M_.JPG"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NRB_518230330EDR_F0542280NCAM00286M_.JPG"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NRB_518230299EDR_F0542280NCAM00286M_.JPG"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NRB_518230269EDR_F0542280NCAM00286M_.JPG"
    },
    {
        "camera": "Navigation Camera",
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01360/opgs/edr/ncam/NRB_518230185EDR_F0542280NCAM00286M_.JPG"
    }

 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:**
    ```json
    {
      "message": "NOT FOUND"
    }
    ```
    **RESTful Endpoints**
---
