import { FormulaOneLastVersionPage } from './app.po';

describe('formula-one-last-version App', () => {
  let page: FormulaOneLastVersionPage;

  beforeEach(() => {
    page = new FormulaOneLastVersionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
