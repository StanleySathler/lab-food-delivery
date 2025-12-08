import { render, screen, cleanup } from '@testing-library/react';
import { describe, expect, it, vi, afterEach, beforeEach } from 'vitest';
import Home from '../../pages/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type Restaurant = {
  id: string;
  name: string;
  image: string;
  logo: string;
  rating: number;
  deliveryTime: string;
  category: string;
  priceRange: string;
};

describe('Home', () => {
  let restaurants: Restaurant[];

  beforeEach(async () => {
    const res = await fetch('/v1/restaurants');
    restaurants = await res.json();
  });

  afterEach(cleanup);

  it('should render a list of restaurants', async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Home restaurants={restaurants} />
      </QueryClientProvider>
    );

    const restaurantCards = await screen.findAllByRole('article');
    expect(restaurantCards).toHaveLength(8);
  });
});