import { SearchInput } from '@modules/countries/components';
import { DEBOUNCE_DELAY } from '@modules/countries/utilities';
import { fireEvent, render, screen, userEvent, waitFor } from '@utilities';

const INPUT_LABEL = 'search-input';
const TEXT_WITHOUT_SPACE = 'somerandomtext';
const TEXT_WITH_SPACE = 'some random text';
const TEXT = 'text';

const getParamValue = (key: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  return searchParams.get(key);
};

describe('AppBar', () => {
  it('renders the typed value', async () => {
    const callback = jest.fn();

    render(
      <SearchInput
        onQueryChange={callback}
        onExecute={() => {
          return;
        }}
      />
    );

    fireEvent.change(screen.getByLabelText(INPUT_LABEL), {
      target: { value: TEXT_WITHOUT_SPACE },
    });

    expect(screen.getByLabelText(INPUT_LABEL)).toHaveValue(TEXT_WITHOUT_SPACE);
  });

  it('removes any space from the typed value', async () => {
    const callback = jest.fn();

    render(
      <SearchInput
        onQueryChange={callback}
        onExecute={() => {
          return;
        }}
      />
    );

    fireEvent.change(screen.getByLabelText(INPUT_LABEL), {
      target: { value: TEXT_WITH_SPACE },
    });

    expect(screen.getByLabelText(INPUT_LABEL)).toHaveValue(TEXT_WITHOUT_SPACE);
  });

  it('calls the callback with debounce', async () => {
    const callback = jest.fn();

    render(
      <SearchInput
        onQueryChange={() => {
          return;
        }}
        onExecute={callback}
      />
    );

    userEvent.type(screen.getByLabelText(INPUT_LABEL), TEXT);

    await waitFor(
      () => {
        expect(callback).toHaveBeenCalledTimes(1);
      },
      { interval: DEBOUNCE_DELAY }
    );
  });

  it('matches the input with url params', async () => {
    render(
      <SearchInput
        onQueryChange={() => {
          return;
        }}
        onExecute={() => {
          return;
        }}
      />
    );

    fireEvent.change(screen.getByLabelText(INPUT_LABEL), {
      target: { value: TEXT },
    });

    expect(getParamValue('search')).toBe(TEXT);
  });
});
