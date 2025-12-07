import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import RestaurantDetails from '../../../pages/restaurant/[id]';

// Mock Next.js router
vi.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: '1' },
    back: vi.fn(),
  }),
}));

describe('RestaurantDetails', () => {
  describe('Header', () => {
    it('should render the restaurant name', async () => {
      render(<RestaurantDetails />);
      await expect(screen.findByText('Pizza Hut')).resolves.toBeTruthy();
    });
  });
});