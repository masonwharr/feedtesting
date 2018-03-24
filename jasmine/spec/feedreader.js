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

    describe('RSS Feeds', function() {
 
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


    
        it('are not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds).not.toEqual(jasmine.objectContaining({
                name: 'test',
            }));
            console.log(allFeeds);
            expect(allFeeds[0].name).not.toEqual('');
            expect(allFeeds[1].name).not.toEqual('');
            expect(allFeeds[2].name).not.toEqual('');
            expect(allFeeds[3].name).not.toEqual('');
            expect(allFeeds[0].url).not.toEqual('');
            expect(allFeeds[1].url).not.toEqual('');
            expect(allFeeds[2].url).not.toEqual('');
            expect(allFeeds[3].url).not.toEqual('');
        });

    });

    describe('The Menu', function() {
        it('is hidden', function() {
            expect(menu).toEqual(1);
        });
        it('hides', function() {
            //Check if it's class is menu-hidden on load
            expect(holder).toEqual('menu-hidden');
            $('.menu-icon-link').click();
            expect(document.getElementsByTagName("body")[0].className).toEqual("menuWasHidden");
            $('.menu-icon-link').click();
            expect(document.getElementsByTagName("body")[0].className).toEqual("menu-hidden");
        });
    });



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
            expect($('.feed').html()).not.toEqual(originalFeed);


        });

    });

}());
