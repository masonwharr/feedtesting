/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
//Checks feeds arent empty
    describe('RSS Feeds', function() {
 
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


    
        it('are not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds).not.toEqual(jasmine.objectContaining({
                name: 'CSS Tricks',
            }));
            function testfeed(){
        for(var i = 0; i < allFeeds.length; i++) {
  var nameValue = "";
  var urlValue = "";
  var nameNotEmpty = false;
  var urlNotEmpty = false;
    if (allFeeds[i].name == nameValue) {
        feedObject = allFeeds[i];
   nameNotEmpty = false;
      
    }        
    else {
        nameNotEmpty = true;
    }

    if (allFeeds[i].url == urlValue) {
        feedObject = allFeeds[i];
  urlNotEmpty = false;
      
    }        
    else {
        urlNotEmpty = true;
    }
    expect(urlNotEmpty).toEqual(true);
    expect(nameNotEmpty).toEqual(true);
}
};
testfeed();
   

    });
});
    // Checks that menu is hidden from start, and not on click
    describe('The Menu', function() {
        it('is hidden', function() {
            expect(menu).toEqual(1);
        });
        it('hides', function() {
            //Check if it's class is menu-hidden on load
            expect(holder).toEqual('menu-hidden');
            $('.menu-icon-link').click();
            var notHidden = $('.menuWasHidden')[0].tagName;
            
            console.log(notHidden);
           // Checks tag that is on is body
           expect(notHidden).toEqual('BODY');
            $('.menu-icon-link').click();

           var hidden =  $('.menu-hidden')[0].tagName;
            console.log(hidden);
            // Checks tag that is on is body
              expect(hidden).toEqual('BODY');
        });
    });


// Checks if entries are put in feed container
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('is called', function() {
            $('[data-id="0"]').click();
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {

        var originalFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {

                originalFeed = $('.feed').html();
                loadFeed(1, done);
            });
        });
        it('is not the same', function() {
            expect($('.feed').html()).not.toEqual(originalFeed)


        });

    });

}());
