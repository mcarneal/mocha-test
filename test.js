// const { Builder, By, Key, until } = require('selenium-webdriver');
// const { expect } = require('chai');

// describe('DefaultTest', () => {
//     const driver = new Builder().forBrowser('chrome').build();
//     console.log('am i running?')
    
//     it('should go to vimeo home page and check the title', async () => {
        
//         await driver.get('file:///home/michael/Limbik/limbik-trackscript/Examples/vimeoVideoTracking/vimeoTracking.html');
//         await driver.wait(until.elementLocated(By.id('video-1')));
//         await driver.sleep(20000);
//         const title = await driver.getTitle();

//         expect(title).to.equal('Vimeo');
        
//     });

//     after(async () => driver.quit());
// });

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

