import WonderfulButton from '../components/WonderfulButton';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('renders test "NPDMed Button"', () => {
    render(<WonderfulButton />);
    expect(screen.getByText('NPDMed Button')).toBeInTheDocument();
  });
});
