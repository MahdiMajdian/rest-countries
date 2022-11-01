import { SearchInput } from '@modules/countries/components';
import { render } from '@utilities';

describe('SearchInput', () => {
  describe('Snapshot', () => {
    it('renders', () => {
      const { container } = render(
        <SearchInput
          onExecute={() => {
            return;
          }}
          onQueryChange={() => {
            return;
          }}
        />
      );

      expect(container).toMatchSnapshot();
    });
  });
});
