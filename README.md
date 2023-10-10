
# Crown Compass

## Table of Contents
1. [Overview](#Overview) 
2. [Product Spec](#Product-Spec)
3. [Wireframes](#Wireframes)

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



## Networking
### List of network requests by screen
*Home Feed Screen

(Read/GET) Query all posts where user is author

let query = PFQuery(className:"Post")
query.whereKey("author", equalTo: currentUser)
query.order(byDescending: "createdAt")
query.findObjectsInBackground { (posts: [PFObject]?, error: Error?) in
   if let error = error { 
      print(error.localizedDescription)
   } else if let posts = posts {
      print("Successfully retrieved \(posts.count) posts.")
  // TODO: Do something with posts...
   }
}

* (Create/POST) Create a new like on a post
* (Delete) Delete existing like
* (Create/POST) Create a new comment on a post
* (Delete) Delete existing comment
* Create Post Screen
* (Create/POST) Create a new post object
* Profile Screen
* (Read/GET) Query logged in user object
* (Update/PUT) Update user profile image



