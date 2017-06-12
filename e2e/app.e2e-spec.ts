import { BetHelpPage } from './app.po';

describe('bet-help App', () => {
  let page: BetHelpPage;

  beforeEach(() => {
    page = new BetHelpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
