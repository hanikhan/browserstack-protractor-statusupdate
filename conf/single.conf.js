exports.config = {
	browserstackUser: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
	browserstackKey: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
	'specs': [ '../specs/single.js' ],

  capabilities: {
	  'browserName' : 'Chrome',
	  'browser_version' : '65.0',
	  'os' : 'OS X',
	  'os_version' : 'Sierra',
	  'resolution' : '1024x768'
  },
};