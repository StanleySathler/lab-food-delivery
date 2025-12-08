import { render, screen, cleanup } from '@testing-library/react';
import { describe, expect, it, vi, afterEach } from 'vitest';
import Home from '../../pages/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('Home', () => {
  afterEach(cleanup);

  it('should render a list of restaurants', async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Home />
      </QueryClientProvider>
    );

    const restaurantCards = await screen.findAllByRole('article');
    expect(restaurantCards).toHaveLength(8);
  });
});