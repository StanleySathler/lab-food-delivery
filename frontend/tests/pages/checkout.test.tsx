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

  it('should render cardholder name field', async () => {
    setup();
    expect(await screen.findByLabelText('Cardholder name')).toBeInTheDocument();
  });

  it('should render card number field', async () => {
    setup();
    expect(await screen.findByLabelText('Card number')).toBeInTheDocument();
  });

  it('should render expiration field', async () => {
    setup();
    expect(await screen.findByLabelText('Expiration')).toBeInTheDocument();
  });

  it('should render cvc field', async () => {
    setup();
    expect(await screen.findByLabelText('CVC')).toBeInTheDocument();
  });

  it('should render billing address field', async () => {
    setup();
    expect(await screen.findByLabelText('Billing address (optional)')).toBeInTheDocument();
  });

  it('should apply mask to expiration field', async () => {
    setup();
    const expiryInput = await screen.findByLabelText('Expiration');
    await userEvent.type(expiryInput, '1230');
    expect(expiryInput).toHaveValue('12/30');
  });
});