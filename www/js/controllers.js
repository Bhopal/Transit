angular.module('your_app_name.controllers', [])

.controller('AuthCtrl', function($scope, $ionicConfig,$ionicSlideBoxDelegate) {
 $scope.navSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index, 20);
    }
})

// APP
.controller('AppCtrl', function($scope, $ionicConfig) {

})

//LOGIN
.controller('LoginCtrl', function($scope, $state, $templateCache, $q, $rootScope) {
	$scope.doLogIn = function(){
		//$state.go('app.feeds-categories');
		$state.go('app.bookmarks');
	};

	$scope.user = {};

	$scope.user.email = "john@doe.com";
	$scope.user.pin = "12345";

	// We need this for the form validation
	$scope.selected_tab = "";

	$scope.$on('my-tabs-changed', function (event, data) {
		$scope.selected_tab = data.title;
	});

})



.controller('SignupCtrl', function($scope, $state) {
	$scope.user = {};

	$scope.user.email = "john@doe.com";

	$scope.doSignUp = function(){
		$state.go('app.feeds-categories');
	};
})

.controller('ForgotPasswordCtrl', function($scope, $state) {
	$scope.recoverPassword = function(){
		$state.go('app.feeds-categories');
	};

	$scope.user = {};
})

.controller('RateApp', function($scope) {
	$scope.rateApp = function(){
		if(ionic.Platform.isIOS()){
			//you need to set your own ios app id
			AppRate.preferences.storeAppURL.ios = '1234555553>';
			AppRate.promptForRating(true);
		}else if(ionic.Platform.isAndroid()){
			//you need to set your own android app id
			AppRate.preferences.storeAppURL.android = 'market://details?id=ionFB';
			AppRate.promptForRating(true);
		}
	};
})

.controller('CategoriesCtrl', function($scope, $state) {
	$scope.options =[
		{id:1, name:"Adventure", desc:"Skydive over Palm Jumeirah, go water skiing around The World, paddleboard along the coast or swim with dolphins and sharks.", imgSrc:""},
		{id:2, name:"Entertainment", desc:"If you’re coming to Dubai looking for excitement and new experiences, then you’re headed in the right direction.", imgSrc:""},
		{id:3, name:"Events and Exhibitions", desc:"Every district in Dubai is distinct and has its own special characteristics. The city’s arterial Sheikh Zayed Road is a skyscraper corridor lined with architectural marvels.", imgSrc:""},
		{id:4, name:"Food", imgSrc:"", desc:"With more than 5,400 eateries, foodies — and everyone else — are spoiled for choice here. And restaurateurs aren’t slowing down."},
		{id:5, name:"Hotels", desc:"Dubai is one of the world’s premier destinations, and our hotels, resorts and hotel apartments are a large reason.", imgSrc:""},
		{id:6, name:"Spas", desc:"If you’re looking to shake off the jet lag, jump-start a health kick or simply experience the desert heat through a hot stone massage, Dubai has a spa for you.", imgSrc:""},
		{id:7, name:"Shopping", desc:"In Dubai’s grandiose malls, traditional souks and hip boutiques, shoppers are sure to discover something special.", imgSrc:""},
		{id:8, name:"Sports", desc:"Dubai’s world-class tennis courts, golf courses and fitness clubs are ready to witness your personal best.", imgSrc:""},
		
	];
})

.controller('CategoryByIdCtrl', function($scope, $state, $stateParams) {
	/*$scope.options =[
		{id:1, name:"Adventure", desc:"Skydive over Palm Jumeirah, go water skiing around The World, paddleboard along the coast or swim with dolphins and sharks.", imgSrc:""},
		{id:2, name:"Entertainment", desc:"If you’re coming to Dubai looking for excitement and new experiences, then you’re headed in the right direction.", imgSrc:""},
		{id:3, name:"Events and Exhibitions", desc:"Every district in Dubai is distinct and has its own special characteristics. The city’s arterial Sheikh Zayed Road is a skyscraper corridor lined with architectural marvels.", imgSrc:""},
		{id:4, name:"Food", imgSrc:"", desc:"With more than 5,400 eateries, foodies — and everyone else — are spoiled for choice here. And restaurateurs aren’t slowing down."},
		{id:5, name:"Hotels", desc:"Dubai is one of the world’s premier destinations, and our hotels, resorts and hotel apartments are a large reason.", imgSrc:""},
		{id:6, name:"Spas", desc:"If you’re looking to shake off the jet lag, jump-start a health kick or simply experience the desert heat through a hot stone massage, Dubai has a spa for you.", imgSrc:""},
		{id:7, name:"Shopping", desc:"In Dubai’s grandiose malls, traditional souks and hip boutiques, shoppers are sure to discover something special.", imgSrc:""},
		{id:8, name:"Sports", desc:"Dubai’s world-class tennis courts, golf courses and fitness clubs are ready to witness your personal best.", imgSrc:""},
		
	];*/
	$scope.id = $stateParams.id;
	$scope.name = $stateParams.name;
	$scope.data = [];

	/*$scope.data[1] = [{"","","",""];*/


})

//this method brings posts for a source provider
.controller('FeedEntriesCtrl', function($scope, $stateParams, $http, FeedList, $q, $ionicLoading, BookMarkService) {
	var data = [];
	data[0] = {id:0,center:{lat: 25.2528, lng: 55.3644},dest:{lat: 25.191964, lng: 55.277456} };
	data[1] = {id:1,center:{lat: 25.2528, lng: 55.3644},dest:{lat: 25.191964, lng: 55.277456} };
	data[2] = {id:2,center:{lat: 25.2528, lng: 55.3644},dest:{lat: 25.191964, lng: 55.277456} };
	data[3] = {id:3,center:{lat: 25.2528, lng: 55.3644},dest:{lat: 25.191964, lng: 55.277456} };
	data[4] = {id:4,center:{lat: 25.2528, lng: 55.3644},dest:{lat: 25.191964, lng: 55.277456} };
	data[5] = {id:5,center:{lat: 25.2528, lng: 55.3644},dest:{lat: 25.191964, lng: 55.277456} };
	data[6] = {id:6,center:{lat: 25.2528, lng: 55.3644},dest:{lat: 25.191964, lng: 55.277456} };

	
	var select = data[$stateParams.catId];
	$scope.mapcenter= {lat: select.center.lat, lng: select.center.lng};
	$scope.mapdestn= {lat: select.dest.lat, lng: select.dest.lng};
	$scope.catId = select.id;

})

.controller('PurchagePackageCtrl', function($scope, $stateParams, $timeout) {
	var data = [];


	data[0] = {id:0,center:{lat: 25.191964, lng: 55.277456, name:"Dubai Museum, Dubai"},dest:{lat: 25.2586, lng: 55.3264, name:"Deira Clock Tower, Dubai"} };
	data[1] = {id:1,center:{lat: 25.191964, lng: 55.277456, name:"Burj Khalifa, Dubai"},dest:{lat: 25.2586, lng: 55.3264, name:"Deira Clock Tower, Dubai"} };
	data[2] = {id:2,center:{lat: 25.2528, lng: 55.3644, name:"Burj Khalifa, Dubai"},dest:{lat: 25.191964, lng: 55.277456, name:"Dubai Museum, Dubai"} };
	data[3] = {id:3,center:{lat: 25.2528, lng: 55.3644, name:"Deira Clock Tower, Dubai"},dest:{lat: 25.191964, lng: 55.277456, name:"Burj Khalifa, Dubai"} };
	data[4] = {id:4,center:{lat: 25.2528, lng: 55.3644, name:"Burj Khalifa, Dubai"},dest:{lat: 25.191964, lng: 55.277456, name:"Dubai Museum, Dubai"} };
	data[5] = {id:5,center:{lat: 25.2528, lng: 55.3644, name:"Burj Khalifa, Dubai"},dest:{lat: 25.191964, lng: 55.277456, name:"Deira Clock Tower, Dubai"} };
	data[6] = {id:6,center:{lat: 25.2528, lng: 55.3644, name:"Burj Khalifa, Dubai"},dest:{lat: 25.191964, lng: 55.277456, name:"Dubai Museum, Dubai"} };


	var select = data[$stateParams.catId];
	$scope.mapcenter= {lat: select.center.lat, lng: select.center.lng, name:select.center.name};
	$scope.mapdestn= {lat: select.dest.lat, lng: select.dest.lng, name:select.dest.name};
	$scope.catId = select.id;

	//Controller Actual code to Drive Automated
	$scope.drivingMode = false; // indicates streetview should be on driving mode
    $scope.drivingSpeed = 120; // 100 km per hour
    $scope.driverMode = false;

    //$scope.origin = "1135 Karamea-Kohaihai Rd, Kahurangi National Park, Tasman";
    //$scope.destination = "Pier St, Jackson Bay, West Coast, New Zeland";
    $scope.origin = $scope.mapcenter;
    $scope.destination = $scope.mapdestn;


  var map;
  var updateFrequency = 1*1000; // half a second
  var savedPath = null;  // position and count to restart from pause mode

  // Overview path between orign and destination. 
  // This does NOT exactly follow the path of a road. It is used to draw path on the map.
  var overviewPath=[]; 
  var overviewPathIndex=0;  // current index points of overview path

  // Detailed path between overview path points
  // This does exactly follow the path of a road. 
  var detailedPath=[];
  var detailedPathIndex=0;  // current index points of detailed path

  var directionsService = new google.maps.DirectionsService();

  //
  // At google's mercy, we get points to drive
  //
  var driveOverviewPaths = function() {
    var op1, op2;
    // drive detailed path because we have not drove through all 
    if (detailedPath.length > detailedPathIndex) { 
      driveDetailedPaths(); //SHOW TIME !!!!
    }
    // drove all detailed path, get a new detailed path from overview paths
    else { 
      op1 = overviewPath[overviewPathIndex];
      op2 = overviewPath[overviewPathIndex+1];
      overviewPathIndex += 1;
      if (op1 && op2) {
        var request ={origin:op1, destination:op2, travelMode: 'DRIVING'};
        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            detailedPath = response.routes[0].overview_path;
            console.log('Updated detailedPath for overviewpath between',
              overviewPathIndex, 'and', overviewPathIndex+1,
              'with', detailedPath.length, 'geo points');
            detailedPathIndex = 0;
            driveOverviewPaths();
          } 
        });
      }
    } 
  };

  //
  // drive between two points by meter by meter and show it.
  //
  var driveDetailedPaths = function() {
    var meter = Math.floor(
      (parseInt($scope.drivingSpeed, 10) * 1000) / 3600  // how far we deive every second
      * (updateFrequency/1000));                         // how often do we see streetview
    var point1 = detailedPath[detailedPathIndex];
    var point2 = detailedPath[detailedPathIndex+1];

    if (point1 && point2) {
      //calculate where to look from two points
      var heading = google.maps.geometry.spherical.computeHeading(point1, point2);
      var distance = google.maps.geometry.spherical.computeDistanceBetween(point1, point2);
      var totalCount = parseInt(distance / meter, 10) || 1;

      var drive = function(count, position) {
        console.log(overviewPathIndex + '/' + overviewPath.length, 
          detailedPathIndex + '/' + detailedPath.length, 
          count + '/' + totalCount, 'distance', meter);
        if (totalCount >= count) {
          $timeout( function() {
            var pov = map.getStreetView().getPov();
            if ($scope.driverMode) {
              map.setHeading(heading); // map heading is different from pov heading
              pov.heading = heading;
            }

            map.getStreetView().setPosition(position);
            map.getStreetView().setPov(pov);
            map.getStreetView().setVisible(true);

            var distanceToPoint2 = google.maps.geometry.spherical.computeDistanceBetween(position, point2);
            var nextPosition = distanceToPoint2 < meter ? 
              point2 : google.maps.geometry.spherical.computeOffset(position, meter, heading);
            if ($scope.drivingMode) {
              drive(++count, nextPosition);
            } else {
              savedPath = {count: count, position: position};
              return false;
            }
          }, updateFrequency);
        } else {
          detailedPathIndex += 1;
          $scope.$emit('driveOverviewPath');
        } 
      };

      var count = (savedPath && savedPath.count) || 1;
      var position = (savedPath && savedPath.position) || point1;
      savedPath = null; // once start driving, nullify savedPath
      drive(count, position);

    } else {
      detailedPathIndex += 1;
      $scope.$emit('driveOverviewPath');
    }
  };

  $scope.$on('driveOverviewPath', function() { 
    driveOverviewPaths();
  });

  $scope.drive = function() {
    $scope.drivingMode = !$scope.drivingMode;
    if ($scope.drivingMode) {
      map.setZoom(16);
      if (savedPath) { // if continues
        driveDetailedPaths();
      } else {
        $scope.$emit('driveOverviewPath');
      }
    }
  };

  // When direction is changed
  // change overviewPath and reset driving directions
  $scope.directionsChanged = function() {
    overviewPath = this.directions.routes[0].overview_path; 
    console.log('direction is changed', 'got overviewPath with', overviewPath.length, 'points');
    map.getStreetView().setPosition(overviewPath[0]);

    overviewPathIndex = 0; // set indexes to 0s
    detailedPathIndex = 0;
    $scope.drivingMode = false;   // stop driving
    toContinue = null;     // reset continuing positon
  }

  $scope.$on('mapInitialized', function(e, _map_) {
    map = _map_;
    window.map = map;
  });

})

.controller('FormCtrl', function($scope) {
	$scope.destnHead = [
		{name:'Burj Khalifa', longitude:25.191964, latitude:55.277456, imgSrc:'burj-khalifa.jpg'},
		{name:'Deira Clock Tower', longitude:25.2586, latitude:55.3264, imgSrc:'clock-tower.jpg'},
		{name:'Dubai Museum', longitude:25.2631, latitude:55.2972, imgSrc:'dubai-museum.jpg'},		
		{name:'Jumeriah beach', longitude:25.191964, latitude:55.277456, imgSrc:'jumeirah-beach.jpg'},
		{name:'Ferrari World', longitude:25.2586, latitude:55.3264, imgSrc:'ferrari-world.jpg'},
		{name:'Burj Al Arab', longitude:25.2631, latitude:55.2972, imgSrc:'al-arab.jpg'},
		{name:'Sheikh Zayed Mosque', longitude:25.191964, latitude:55.277456, imgSrc:'masjid.jpg'},
		{name:'Dubai Mall', longitude:25.2586, latitude:55.3264, imgSrc:'dubai-mall.jpg'},
		{name:'Dubai World Trade Centre', longitude:25.2631, latitude:55.2972, imgSrc:'wtc.jpg'}
		
	];

	$scope.loc={longitude:40.740, latitude:-74.18};
	
	$scope.loadMap = function loadMap(obj) {
		var pano;
		var latlng = new google.maps.LatLng(obj.longitude, obj.latitude);
		var panoOptions = {
		    position: latlng,
		    pov: {
		        heading: 0,
		        pitch: 0
		    }
		};
		pano = new google.maps.StreetViewPanorama(
		    document.getElementById('expmapid'), 
		    panoOptions);
		window.setInterval(function() {
		    var pov = pano.getPov();
		    pov.heading += 0.2;
		    pano.setPov(pov);
		}, 10);
	}
	//init map 
	$scope.loadMap($scope.loc);

})


.controller('CityTourCtrl', function($scope) {
	/*$scope.sendMail = function(){
		cordova.plugins.email.isAvailable(
			function (isAvailable) {
				// alert('Service is not available') unless isAvailable;
				cordova.plugins.email.open({
					to:      'envato@startapplabs.com',
					cc:      'hello@startapplabs.com',
					// bcc:     ['john@doe.com', 'jane@doe.com'],
					subject: 'Greetings',
					body:    'How are you? Nice greetings from IonFullApp'
				});
			}
		);
	};*/
})

.controller('SendMailCtrl', function($scope) {
	$scope.sendMail = function(){
		cordova.plugins.email.isAvailable(
			function (isAvailable) {
				// alert('Service is not available') unless isAvailable;
				cordova.plugins.email.open({
					to:      'envato@startapplabs.com',
					cc:      'hello@startapplabs.com',
					// bcc:     ['john@doe.com', 'jane@doe.com'],
					subject: 'Greetings',
					body:    'How are you? Nice greetings from IonFullApp'
				});
			}
		);
	};
})

.controller('MapsCtrl', function($scope, $ionicLoading) {

	$scope.info_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.center_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.my_location = "";

	$scope.$on('mapInitialized', function(event, map) {
		$scope.map = map;
	});

	$scope.centerOnMe= function(){

		$scope.positions = [];

		$ionicLoading.show({
			template: 'Loading...'
		});

		// with this function you can get the user’s current position
		// we use this plugin: https://github.com/apache/cordova-plugin-geolocation/
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			$scope.current_position = {lat: pos.G,lng: pos.K};
			$scope.my_location = pos.G+", "+pos.K;
			$scope.map.setCenter(pos);
			$ionicLoading.hide();
		});
	};
})

.controller('AdsCtrl', function($scope, $ionicActionSheet, AdMob, iAd) {

	$scope.manageAdMob = function() {

		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			//Here you can add some more buttons
			buttons: [
				{ text: 'Show Banner' },
				{ text: 'Show Interstitial' }
			],
			destructiveText: 'Remove Ads',
			titleText: 'Choose the ad to show',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			destructiveButtonClicked: function() {
				console.log("removing ads");
				AdMob.removeAds();
				return true;
			},
			buttonClicked: function(index, button) {
				if(button.text == 'Show Banner')
				{
					console.log("show banner");
					AdMob.showBanner();
				}

				if(button.text == 'Show Interstitial')
				{
					console.log("show interstitial");
					AdMob.showInterstitial();
				}

				return true;
			}
		});
	};

	$scope.manageiAd = function() {

		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			//Here you can add some more buttons
			buttons: [
			{ text: 'Show iAd Banner' },
			{ text: 'Show iAd Interstitial' }
			],
			destructiveText: 'Remove Ads',
			titleText: 'Choose the ad to show - Interstitial only works in iPad',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			destructiveButtonClicked: function() {
				console.log("removing ads");
				iAd.removeAds();
				return true;
			},
			buttonClicked: function(index, button) {
				if(button.text == 'Show iAd Banner')
				{
					console.log("show iAd banner");
					iAd.showBanner();
				}
				if(button.text == 'Show iAd Interstitial')
				{
					console.log("show iAd interstitial");
					iAd.showInterstitial();
				}
				return true;
			}
		});
	};
})

// FEED
//brings all feed categories
.controller('FeedsCategoriesCtrl', function($scope, $http) {
	$scope.feeds_categories = [];

	$http.get('feeds-categories.json').success(function(response) {
		$scope.feeds_categories = response;
	});
})

//bring specific category providers
//bring specific category providers
.controller('CategoryFeedsCtrl', function($scope, $http, $stateParams,$ionicPopup,$timeout) {
	$scope.category_sources = [];
	$scope.categoryId = $stateParams.categoryId;

	$http.get('feeds-categories.json').success(function(response) {
		var category = _.find(response, {id: $scope.categoryId});
		$scope.categoryTitle = category.title;
		$scope.category_sources = category.feed_sources;
	});


	// Triggered on a button click, or some other target
$scope.showPopup = function(url) {
  $scope.data = {}

  var myPopup = $ionicPopup.show({
    template: '<iframe width="230" height="200" src='+url+' frameborder="0" allowfullscreen></iframe>',
    title: 'Play Video',
    subTitle: 'View the complete overview of the destination',
    scope: $scope,
    buttons: [
      { text: 'Close Video' }
    ]
  });
  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });
 
 };
})



// SETTINGS
.controller('SettingsCtrl', function($scope, $ionicActionSheet, $state) {
	$scope.airplaneMode = true;
	$scope.wifi = false;
	$scope.bluetooth = true;
	$scope.personalHotspot = true;

	$scope.checkOpt1 = true;
	$scope.checkOpt2 = true;
	$scope.checkOpt3 = false;

	$scope.radioChoice = 'B';

	// Triggered on a the logOut button click
	$scope.showLogOutMenu = function() {

		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			//Here you can add some more buttons
			// buttons: [
			// { text: '<b>Share</b> This' },
			// { text: 'Move' }
			// ],
			destructiveText: 'Logout',
			titleText: 'Are you sure you want to logout? This app is awsome so I recommend you to stay.',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			buttonClicked: function(index) {
				//Called when one of the non-destructive buttons is clicked,
				//with the index of the button that was clicked and the button object.
				//Return true to close the action sheet, or false to keep it opened.
				return true;
			},
			destructiveButtonClicked: function(){
				//Called when the destructive button is clicked.
				//Return true to close the action sheet, or false to keep it opened.
				$state.go('auth.walkthrough');
			}
		});

	};
})

// TINDER CARDS
.controller('TinderCardsCtrl', function($scope, $http) {

	$scope.cards = [];


	$scope.addCard = function(img, name) {
		var newCard = {image: img, name: name};
		newCard.id = Math.random();
		$scope.cards.unshift(angular.extend({}, newCard));
	};

	$scope.addCards = function(count) {
		$http.get('http://api.randomuser.me/?results=' + count).then(function(value) {
			angular.forEach(value.data.results, function (v) {
				$scope.addCard(v.user.picture.large, v.user.name.first + " " + v.user.name.last);
			});
		});
	};

	$scope.addFirstCards = function() {
		$scope.addCard("https://dl.dropboxusercontent.com/u/30675090/envato/tinder-cards/left.png","Nope");
		$scope.addCard("https://dl.dropboxusercontent.com/u/30675090/envato/tinder-cards/right.png", "Yes");
	};

	$scope.addFirstCards();
	$scope.addCards(5);

	$scope.cardDestroyed = function(index) {
		$scope.cards.splice(index, 1);
		$scope.addCards(1);
	};

	$scope.transitionOut = function(card) {
		console.log('card transition out');
	};

	$scope.transitionRight = function(card) {
		console.log('card removed to the right');
		console.log(card);
	};

	$scope.transitionLeft = function(card) {
		console.log('card removed to the left');
		console.log(card);
	};
})


// BOOKMARKS
.controller('BookMarksCtrl', function($scope, $rootScope, BookMarkService, $state) {

	$scope.bookmarks = BookMarkService.getBookmarks();

	// When a new post is bookmarked, we should update bookmarks list
	$rootScope.$on("new-bookmark", function(event){
		$scope.bookmarks = BookMarkService.getBookmarks();
	});

	$scope.goToFeedPost = function(link){
		window.open(link, '_blank', 'location=yes');
	};
	$scope.goToWordpressPost = function(postId){
		$state.go('app.post', {postId: postId});
	};
	
})

// FlightResult
.controller('FlightSearchResultCtrl', function($scope, $rootScope, BookMarkService, $state) {

	$scope.flightRes = {
			transitTime:{h:13,m:15},
			destnFrom:'New York(JFK)',
			destnTo:'Sydney(SYD)',
		    incomingFlightNo:'EK-202',
		    incomingFlightType:'Airbus A 380',
		    outgoingFlightNo:'EK-418',
		    outgoingFlightNo:'Boeing 777-300',
		}
})


// WORDPRESS
.controller('WordpressCtrl', function($scope, $http, $ionicLoading, PostService, BookMarkService) {
	$scope.posts = [];
	$scope.page = 1;
	$scope.totalPages = 1;

	$scope.doRefresh = function() {
		$ionicLoading.show({
			template: 'Loading posts...'
		});

		//Always bring me the latest posts => page=1
		PostService.getRecentPosts(1)
		.then(function(data){
			$scope.totalPages = data.pages;
			$scope.posts = PostService.shortenPosts(data.posts);

			$ionicLoading.hide();
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

	$scope.loadMoreData = function(){
		$scope.page += 1;

		PostService.getRecentPosts($scope.page)
		.then(function(data){
			//We will update this value in every request because new posts can be created
			$scope.totalPages = data.pages;
			var new_posts = PostService.shortenPosts(data.posts);
			$scope.posts = $scope.posts.concat(new_posts);

			$scope.$broadcast('scroll.infiniteScrollComplete');
		});
	};

	$scope.moreDataCanBeLoaded = function(){
		return $scope.totalPages > $scope.page;
	};

	$scope.bookmarkPost = function(post){
		$ionicLoading.show({ template: 'Post Saved!', noBackdrop: true, duration: 1000 });
		BookMarkService.bookmarkWordpressPost(post);
	};

	$scope.doRefresh();
})

// WORDPRESS POST
.controller('WordpressPostCtrl', function($scope, post_data, $ionicLoading) {

	$scope.post = post_data.post;
	$ionicLoading.hide();

	$scope.sharePost = function(link){
		window.plugins.socialsharing.share('Check this post here: ', null, null, link);
	};
})


.controller('ImagePickerCtrl', function($scope, $rootScope, $cordovaCamera) {

	$scope.images = [];

	$scope.selImages = function() {

		window.imagePicker.getPictures(
			function(results) {
				for (var i = 0; i < results.length; i++) {
					console.log('Image URI: ' + results[i]);
					$scope.images.push(results[i]);
				}
				if(!$scope.$$phase) {
					$scope.$apply();
				}
			}, function (error) {
				console.log('Error: ' + error);
			}
		);
	};

	$scope.removeImage = function(image) {
		$scope.images = _.without($scope.images, image);
	};

	$scope.shareImage = function(image) {
		window.plugins.socialsharing.share(null, null, image);
	};

	$scope.shareAll = function() {
		window.plugins.socialsharing.share(null, null, $scope.images);
	};
})

.controller('Map1Ctrl', function($scope, $ionicLoading) {

	$scope.info_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.center_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.my_location = "";

	$scope.$on('mapInitialized', function(event, map) {
		$scope.map = map;
	});

	$scope.centerOnMe= function(){

		$scope.positions = [];

		$ionicLoading.show({
			template: 'Loading...'
		});

		// with this function you can get the user’s current position
		// we use this plugin: https://github.com/apache/cordova-plugin-geolocation/
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			$scope.current_position = {lat: pos.G,lng: pos.K};
			$scope.my_location = pos.G+", "+pos.K;
			$scope.map.setCenter(pos);
			$ionicLoading.hide();
		});
	};
})

.controller('Map2Ctrl', function($scope, $ionicLoading) {

	$scope.info_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.center_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.my_location = "";

	$scope.$on('mapInitialized', function(event, map) {
		$scope.map = map;
	});

	$scope.centerOnMe= function(){

		$scope.positions = [];

		$ionicLoading.show({
			template: 'Loading...'
		});

		// with this function you can get the user’s current position
		// we use this plugin: https://github.com/apache/cordova-plugin-geolocation/
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			$scope.current_position = {lat: pos.G,lng: pos.K};
			$scope.my_location = pos.G+", "+pos.K;
			$scope.map.setCenter(pos);
			$ionicLoading.hide();
		});
	};
})

.controller('Map3Ctrl', function($scope, $ionicLoading) {

	$scope.info_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.center_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.my_location = "";

	$scope.$on('mapInitialized', function(event, map) {
		$scope.map = map;
	});

	$scope.centerOnMe= function(){

		$scope.positions = [];

		$ionicLoading.show({
			template: 'Loading...'
		});

		// with this function you can get the user’s current position
		// we use this plugin: https://github.com/apache/cordova-plugin-geolocation/
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			$scope.current_position = {lat: pos.G,lng: pos.K};
			$scope.my_location = pos.G+", "+pos.K;
			$scope.map.setCenter(pos);
			$ionicLoading.hide();
		});
	};
})
;
