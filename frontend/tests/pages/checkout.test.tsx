import { render, screen, cleanup } from '@testing-library/react';
import { describe, expect, it, vi, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import TestAppContainer from '../../src/utils/TestAppContainer';
import Checkout from '../../src/pages/checkout';

// Mock Next.js router
vi.mock('next/router', () => ({
  useRouter: () => ({
    back: vi.fn(),
  }),
}));

const setup = () => {
  return render(<TestAppContainer><Checkout /></TestAppContainer>);
}

describe('Checkout', () => {
  afterEach(cleanup);

  it('should render cardholder name field', () => {
    setup();
    expect(screen.findByLabelText('Cardholder name')).resolves.toBeTruthy();
  });

  it('should render card number field', () => {
    setup();
    expect(screen.findByLabelText('Card number')).resolves.toBeTruthy();
  });

  it('should render expiration field', () => {
    setup();
    expect(screen.findByLabelText('Expiration')).resolves.toBeTruthy();
  });

  it('should render cvc field', () => {
    setup();
    expect(screen.findByLabelText('CVC')).resolves.toBeTruthy();
  });

  it('should render billing address field', () => {
    setup();
    expect(screen.findByLabelText('Billing address (optional)')).resolves.toBeTruthy();
  });

  it('should apply mask to expiration field', async () => {
    setup();
    const expiryInput = await screen.findByLabelText('Expiration');
    await userEvent.type(expiryInput, '1230');
    expect(expiryInput).toHaveValue('12/30');
  });
});