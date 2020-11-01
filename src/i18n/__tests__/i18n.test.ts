import { i18n } from '../index';
/* -------------------------------------------------------------------------- */

describe('i18n', () => {
  it('should initate i18n', async () => {
    const t = await i18n;
    expect(t).toBeDefined();
  });
});
