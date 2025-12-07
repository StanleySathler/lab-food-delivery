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

    it('should render the restaurant rate', async () => {
      const screen = render(<RestaurantDetails />);
      await expect(screen.findByText('4.5')).resolves.toBeTruthy();
    });

    it('should render back button', async () => {
      const screen = render(<RestaurantDetails />);
      await expect(screen.findAllByRole('button', { name: '← Back' })).resolves.toBeTruthy();
    });
  });

  describe('Menu', () => {
    it('should render 6 cards', async () => {
      const screen = render(<RestaurantDetails />);
      await expect(screen.findAllByRole('article')).resolves.toHaveLength(6);
    });

    it('should render the product name', async () => {
      const screen = render(<RestaurantDetails />);
      await expect(screen.findAllByText('Margherita Pizza')).resolves.toBeTruthy();
    });

    it('should render the product price', async () => {
      const screen = render(<RestaurantDetails />);
      await expect(screen.findAllByText('$12.99')).resolves.toBeTruthy();
    });
  });
});