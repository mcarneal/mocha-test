const { Builder, By, Key, until } = require('selenium-webdriver');
const { assert, equal } = require('chai');

let mochaAsync = (fn) => {
    return (done) => {
      fn.call().then(done, (err)=>{
          console.log(err)
          done(err)
        });
    };
  };

describe('Check that trackscipt has recorded a play event', function() {

    const driver = new Builder().forBrowser('chrome').build();

    it('Should play the first video and register that it has started than stopped', mochaAsync( async function() {
        
        await driver.get('file:///home/michael/Limbik/limbik-trackscript/Examples/vimeoVideoTracking/vimeoTracking.html');
        await driver.wait(until.elementLocated(By.id('video-1')));
        await driver.sleep(1000)
        await driver.switchTo().frame(0)
        // await driver.sleep(1000)
        // await driver.findElement(By.className('play')).click()
        await driver.findElement(By.xpath("html/body/div")).click();
        await driver.sleep(2000)
        await driver.switchTo().defaultContent()
        await driver.sleep(2000)
        // await driver.findElement(By.className('play')).click()
        // await driver.executeScript('let play = document.getElementsByClassName("play")')
        //  const storage = await driver.executeScript('return JSON.parse(localStorage.test)')
        //  const event = await storage.video_interaction_development.Event.eventType
        //  await console.log(event)
        //  console.log('video', video)
         
        // assert.equal(event, 'started', '== should equal started')
        
    }))

    it('Should play the first video and register that it has started than stopped', mochaAsync( async function() {
        
        // await driver.get('file:///home/michael/Limbik/limbik-trackscript/Examples/vimeoVideoTracking/vimeoTracking.html');
        // await driver.wait(until.elementLocated(By.id('video-1')));
        await driver.sleep(1000)
        await driver.switchTo().frame(0)
        await driver.wait(until.elementLocated(By.className('ppause-icon')))
        const pauseButton = await driver.findElement(By.className('pause-icon'))
        await pauseButton.click()
        // await driver.findElement(By.xpath('html/body/div')).click()
        // await driver.findElement(By.)
        await driver.switchTo().defaultContent()
        await driver.sleep(2000)
        // await driver.findElement(By.className('play')).click()
        // await driver.executeScript('let play = document.getElementsByClassName("play")')
        //  const storage = await driver.executeScript('return JSON.parse(localStorage.test)')
        //  const event = await storage.video_interaction_development.Event.eventType
        //  await console.log(event)
        //  console.log('video', video)
         
        // assert.equal(event, 'started', '== should equal started')
        
    }))
    after(async () => driver.quit());
});



