import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import TestAppContainer from '../../src/utils/TestAppContainer';
import CartContainer from '../../src/components/CartContainer';

const setup = () => {
  return render(<TestAppContainer><CartContainer /></TestAppContainer>);
}

afterEach(cleanup);

describe('Cart', () => {
  it('should render all items', async () => {
    const screen = setup();
    const items = await screen.findAllByText(/Pizza|Wings/);
    expect(items).toHaveLength(2);
  });

  it('should render the product name', async () => {
    const screen = setup();
    expect(await screen.findByText('Margherita Pizza')).toBeTruthy();
  });

  it('should render the product price', async () => {
    const screen = setup();
    expect(await screen.findByText('$25.98')).toBeTruthy();
    expect(await screen.findByText('$8.99')).toBeTruthy();
  });

  it('should render the shipping price', async () => {
    const screen = setup();
    expect(await screen.findByText('$5.99')).toBeTruthy();
  });

  it('should render the total (cart items + shipping)', async () => {
    const screen = setup();
    expect(await screen.findByText('$40.96')).toBeTruthy();
  });

  it('should update price when increasing quantity', async () => {
    const screen = setup();
    const increaseButtons = await screen.findAllByText('+');
    fireEvent.click(increaseButtons[0]); // Click the first + button
    expect(await screen.findByText('$38.97')).toBeTruthy(); // 12.99 * 3
  });
});