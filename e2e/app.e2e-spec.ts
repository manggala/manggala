import { ManggalaPage } from './app.po';

describe('manggala App', () => {
  let page: ManggalaPage;

  beforeEach(() => {
    page = new ManggalaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
