
# Crown Compass

## Table of Contents
1. [Overview](#Overview) 
2. [Product Spec](#Product-Spec)
3. [Wireframes](#Wireframes)
4. [Schema](#Schema)

## Overview

### Description 

Displays hairstylists, barbers and locticians in nearby areas. It also displays their Instagram and Facebook business page so that the business can then be thoroughly inspected by the user before deciding to visit. The application also shows reviews and ratings left by previous users, payments can be made through the app as well. 

### App Evaluation

* **Category:** Marketing/ Services
* **Story:** Inputs users’ locations and specific need between hairstylist, barber or loctician. The user then is presented with options for their choice that’s within the vicinity. Then the user can choose an option, set their appointment and pay for it through the app. 
* **Market:** Anyone with a head of hair or facial hair can use this app in order to find their choice of stylist. In order to make users less anxious and more trusting in their new stylist images of before and after pictures will be available for each stylist as well as ratings and reviews. 
* **Habit:** This app can be used as often as someone goes to the barber or gets their hair done, whether it may be weekly, bi-weekly, monthly or less often. 
* **Scope:** Initially the app would be within the United States, however we are hoping that it can evolve into a worldwide application that can be used when an individual travels to a country for the first time. This would pair well with Google Travel. 


## Product Spec
### 1. User Stories
**Required Must-have Stories**

*	User can create a new account to find hair and styling services such as beards, braids, natural hair, wigs, barber
*	User can login to use app
*	Search hair service use preferred map app or built in map to locate hair services in selected area by typing location or using device location
*	Follow hair service that they want to see reviews and photos from
*	Filter by hair service type such as beards, braids, natural hair, wigs, barber


 **Optional Nice-to-have Stories**
 
*	User can tap a photo to view a more detailed photo screen with comments to talk about experience and share photos
*	User can view a feed of photos and reviews of app reviews and rating
*	User can leave a review of hair service


### 2. Screens
**Required
2. Screen Archetypes
Based on your required user stories, the next step is identifying your core screen archetypes, these are the different screens your app will have to have to function. For example:
*	Login Screen
o	User can login
*	Registration Screen
o	User can create a new account
o	User can post a new photo to their feed
*	Search
o	User can search for other service
o	User can follow/unfollow service
*	Location based
•	Follow hair service
o	User can like service content
o	User can follow hair service
*	Filter Hair service 
o	User can filter hair service based on preference such as style




  ### 3. Navigation
**Tab Navigation (Tab to Screen):

* Home Feed

* Nav Map Location Services

* Search/Filter

* Likes

* Profile

* Back button

**Flow Navigation (Screen to Screen):

* Landing page=>
Login Screen

=> Home Feed
Registration Screen

=> Home Feed
Home Feed

=> Nav Map Location Services
=> Search/Filter
=> Likes
=> Profile


=> Search/Filter
=> Likes
=> Profile
Search/Filter

=> Likes
=> Profile
Likes

=> Profile
Profile

=> Back button

## Wireframes
![Untitled design](https://github.com/Locks-and-Loaded/Crown-Compass/assets/111886958/dcc77651-0aea-4fc2-8c93-f4c89b51750d)

### Digital Wireframes & Mockups
![Visily-Export_04-10-2023_09-55 (1)_Page_7_Image_0001](https://github.com/Locks-and-Loaded/Crown-Compass/assets/111886958/3c0729bb-12ab-4ce8-93b8-d939fbf3d176)
![Visily-Export_04-10-2023_09-55 (1)_Page_6_Image_0001](https://github.com/Locks-and-Loaded/Crown-Compass/assets/111886958/f3a4b0d1-cd57-4765-99c1-f4c3a6166a62)
![Visily-Export_04-10-2023_09-55 (1)_Page_4_Image_0001](https://github.com/Locks-and-Loaded/Crown-Compass/assets/111886958/1ee4c3ef-4e76-42e3-b021-96ddecde98ee)
![Visily-Export_04-10-2023_09-55 (1)_Page_3_Image_0001](https://github.com/Locks-and-Loaded/Crown-Compass/assets/111886958/04c4bf23-7675-452e-91f0-59b6a0782d0c)
![Visily-Export_04-10-2023_09-55 (1)_Page_2_Image_0001](https://github.com/Locks-and-Loaded/Crown-Compass/assets/111886958/dc036e23-47f0-4cdb-a8d6-67f8ad591b64)
![Visily-Export_04-10-2023_09-55 (1)_Page_1_Image_0001](https://github.com/Locks-and-Loaded/Crown-Compass/assets/111886958/db9f3f9c-14b8-4adc-8884-93a2651f05c6)
![Visily-Export_04-10-2023_09-55 (1)_Page_5_Image_0001](https://github.com/Locks-and-Loaded/Crown-Compass/assets/111886958/698c1103-1f36-4e3c-af25-5643c56eb8fa)



### [BONUS] Interactive Prototype


https://github.com/Locks-and-Loaded/Crown-Compass/assets/111886958/2c0ffbf7-af9d-4a09-901e-04de5f9ad21b

## Schema

### Models


### Login
Property | Type | Description
-- | -- | --
UserID | Integer | A unique identifier for each user
Username | String | The username chosen by the user
PasswordHash | String | The hashed version of the user's password
PasswordSalt | String | A unique value used to hash the password
Email | String | The user's email address
PhoneNumber | String | The user's phone number (optional)
LastLoginTimestamp | DateTime | The timestamp of the user's last login
FailedLoginCount | Integer | The number of consecutive failed login attempts
AccountLocked | Boolean | Indicates whether the user account is locked or not
AccountVerified | Boolean | Indicates whether the user has verified their account


### User
| Property      | Type          | Description                           |
| ------------- |:-------------:| ------------------------------------- |
| id            | Integer (Primary Key) | Unique identifier for the user  |
| username      | String        | User's screen name                    |
| password      | String        | User's password (hashed and salted)  |
| email         | String        | User's email address                  |
| userLocation  | Geolocation   | User's current location               |
| profileImage  | File          | User's profile picture                |
| created_at    | Timestamp     | Timestamp of when the user account was created |
| updated_at    | Timestamp     | Timestamp of when the user account was last updated |



### Service
| Property      | Type          | Description                           |
| ------------- |:-------------:| ------------------------------------- |
| id            | Integer (Primary Key) | Unique identifier for the service |
| serviceName   | String        | Name of the service/business          |
| serviceLocation | Geolocation  | Location of the service/business      |
| description   | String          | Description of the service/business   |
| instagramLink | String        | Link to the service's Instagram business page |
| facebookLink  | String        | Link to the service's Facebook business page |
| created_at    | Timestamp      | Timestamp of when the service was added |
| updated_at    | Timestamp     | Timestamp of when the service information was last updated |


### ServiceType
| Property      | Type          | Description                           |
| ------------- |:-------------:| ------------------------------------- |
| id            | Integer (Primary Key) | Unique identifier for the service type |
| typeName      | Timestamp        | Type of service (e.g., hairstylist, barber, loctician) |
| created_at    | Timestamp     | Timestamp of when the service type was created |
| updated_at    | Timestamp     | Timestamp of when the service type information was last updated |


### Review
| Property      | Type          | Description                           |
| ------------- |:-------------:| ------------------------------------- |
| id            | Integer (Primary Key) | Unique identifier for the review |
| service_id    | Integer (Foreign Key) | ID of the service being reviewed     |
| user_id       | Integer (Foreign Key) | ID of the user who left the review    |
| rating        | Integer       | Rating given by the user (e.g., 1-5 stars) |
| comment       | String         | User's comment or review text         |
| created_at    | Timestamp      | Timestamp of when the review was posted |
| updated_at    | Timestamp     | Timestamp of when the review information was last updated |


### Payment
| Property      | Type          | Description                           |
| ------------- |:-------------:| ------------------------------------- |
| id            | Integer (Primary Key) | Unique identifier for the payment |
| user_id       | Integer (Foreign Key) | ID of the user making the payment    |
| service_id    | Integer (Foreign Key) | ID of the service receiving the payment |
| amount        | Floating point       | Amount of the payment                 |
| paymentDate   | Timestamp      | Timestamp of when the payment was made |
| paymentStatus | String        | Payment status (e.g., "pending," "completed") |
| created_at    | Timestamp     | Timestamp of when the payment record was created |
| updated_at    | Timestamp     | Timestamp of when the payment record information was last updated |





## Networking
### List of network requests by screen

**Login Screen**

POST /login

Sends the user's credentials to the server for authentication.
Request Body: Contains the username and password.
Response: May contain a token for session management, and user information if the login is successful, or error information if it's not.
POST /register

Sends new user account data to the server to create a new account.
Request Body: Contains the username, password, email, and any other required information.
Response: May contain a success message or error information.
GET /account-verification/{verification_code}

Requests the server to verify the user's email address using a verification code.
Path Parameter: Verification code sent to the user's email.
Response: May contain a success message or error information.
POST /forgot-password

Requests the server to initiate the password reset process.
Request Body: Contains the email address of the account.
Response: May contain a success message or error information.
PUT /reset-password

Sends the new password information to the server to update the user's password.
Request Body: Contains the new password, and possibly a reset token.
Response: May contain a success message or error information.
GET /logout

Requests the server to end the user's session.
Response: May contain a success message or error information.
GET /profile

Retrieves the user's profile information after login.
Response: Contains user profile information.

**Home Feed Screen**



## Networking
### List of network requests by screen

**Home Feed Screen**

    o (Read/GET) Query all posts where seletedUser is author
   
  ```
   let query = PFQuery(className:"Post")
   query.whereKey("author", equalTo: seletedUser)
   query.order(byDescending: "createdAt")
   query.findObjectsInBackground { (posts: [PFObject]?, error: Error?) in
      if let error = error { 
         print(error.localizedDescription)
      } else if let posts = posts {
        print("Successfully retrieved \(posts.count) posts.")
     // TODO: Do something with posts...
      }
   }
  ```
    o (Create/POST) Create a new like on a post
 
    o (Delete) Delete existing like
  
 
**Create Post Screen for Vendors**

    o (Create/POST) Create a new post object

    o (Delete) Delete existing post
  
  **Profile Screen**
    
    o (Update/PUT) Update user profile image

    o (Update/PUT) Update user profile info

    o (Update/PUT) Update user to vendor or customer
    
  **Search Screen**

    o (Read/GET) Query logged in user object

    o (Read/GET) Filter Query by category

 **Navigation Screen**

    o (Update/PUT) Update user objects in proximity to currentUser


    * ## Stripe API Endpoints

| HTTP Verb | Endpoint                               | Description                                                   |
|-----------|----------------------------------------|---------------------------------------------------------------|
| POST      | /v1/payment_intents                    | Handle the payment process.    |
| POST      | /v1/customers                          | Create a new customer.                                        |
| GET       | /v1/customers/{customer}               | Retrieves details of a specific customer.                      |
| POST      | /v1/customers/{customer}               | Update a specific customer's details.                         |
| DELETE    | /v1/customers/{customer}               | Delete a specific customer.                                   |
| POST      | /v1/payment_methods                    | Create a new payment method for a customer.                   |
| GET       | /v1/payment_methods                    | List payment methods for a customer.                          |
| POST      | /v1/checkout/sessions                  | Create a session for Stripe Checkout (optional).              |

## Google Maps API Endpoints

| HTTP Verb | Endpoint                                | Description                                                   |
|-----------|-----------------------------------------|---------------------------------------------------------------|
| GET       | `/maps/api/place/nearbysearch/json`     | Search for places in a specified area.        |
| GET       | `/maps/api/place/details/json`          | Retrieve details of a specific place.                         |
| GET       | `/maps/api/geocode/json`                | Convert addresses into lat-long coordinates.                  |
| GET       | `/maps/api/directions/json`             | Get directions from one location to another.       |
| POST      | `/maps/geolocation/v1/geolocate`        | Determine the user's current location.                        |








