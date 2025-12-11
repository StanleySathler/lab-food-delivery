import { render, screen, cleanup } from '@testing-library/react';
import { describe, expect, it, vi, afterEach } from 'vitest';
import Home from '../../src/pages/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TestAppContainer from '../../src/utils/TestAppContainer';

const setup = () => {
  return render(<TestAppContainer><QueryClientProvider client={new QueryClient()}>
        <Home />
      </QueryClientProvider></TestAppContainer>);
}

describe('Home', () => {
  afterEach(cleanup);

  it('should render a list of restaurants', async () => {
    const screen = setup();
    const restaurantCards = await screen.findAllByRole('article');
    expect(restaurantCards).toHaveLength(8);
  });
});