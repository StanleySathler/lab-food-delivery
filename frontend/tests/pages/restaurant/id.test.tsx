import { render, screen, cleanup, within } from '@testing-library/react';
import { describe, expect, it, vi, afterEach } from 'vitest';
import RestaurantDetails from '../../../pages/restaurant/[id]';

// Mock Next.js router
vi.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: '1' },
    back: vi.fn(),
  }),
}));

describe('RestaurantDetails', () => {
  afterEach(cleanup);
  
  describe('Header', () => {
    it('should render the restaurant name', async () => {
      const screen = render(<RestaurantDetails />);
      await expect(screen.findByText('Pizza Hut')).resolves.toBeTruthy();
    });

    it('should render the restaurant category', async () => {
      const screen = render(<RestaurantDetails />);
      const title = await screen.findByRole('heading', { level: 1 });
      await expect(within(title).findByText('Pizza Hut')).resolves.toBeTruthy();
    });
  });
});