import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import Cart from '../../components/Cart';
import { CartItem } from '../../components/Cart';

const mockCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    price: 12.99,
    quantity: 2,
  },
  {
    id: '2',
    name: 'Chicken Wings',
    price: 8.99,
    quantity: 1,
  },
];

const mockProps = {
  cartItems: mockCartItems,
  visible: true,
  onClose: vi.fn(),
  onUpdateQuantity: vi.fn(),
  onRemoveItem: vi.fn(),
};

afterEach(cleanup);

describe('Cart', () => {
  it('should render all items', async () => {
    render(<Cart {...mockProps} />);
    const items = await screen.findAllByText(/Pizza|Wings/);
    expect(items).toHaveLength(2);
  });

  it('should render the product name', async () => {
    render(<Cart {...mockProps} />);
    expect(await screen.findByText('Margherita Pizza')).toBeTruthy();
  });

  it('should render the product price', async () => {
    render(<Cart {...mockProps} />);
    expect(await screen.findByText('$25.98')).toBeTruthy();
    expect(await screen.findByText('$8.99')).toBeTruthy();
  });

  it('should render the shipping price', async () => {
    render(<Cart {...mockProps} />);
    expect(await screen.findByText('$5.99')).toBeTruthy();
  });

  it('should render the total (cart items + shipping)', async () => {
    render(<Cart {...mockProps} />);
    expect(await screen.findByText('$40.96')).toBeTruthy();
  });

  it('should update price when increasing quantity', async () => {
    render(<Cart {...mockProps} />);
    const increaseButtons = await screen.findAllByText('+');
    fireEvent.click(increaseButtons[0]); // Click the first + button
    expect(await screen.findByText('$25.98')).toBeTruthy(); // 12.99 * 2
  });
});