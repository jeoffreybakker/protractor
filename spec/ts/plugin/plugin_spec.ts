import {browser, protractor} from '../../..';

describe('plugins', function() {
  it('should have run the onPageLoad hook', async function() {
    await browser.get('index.html');
    expect(await (protractor as any).ON_PAGE_LOAD).toBe(true);
  });
});
