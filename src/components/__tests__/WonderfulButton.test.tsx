import WonderfulButton from '../WonderfulButton';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('renders test "NPDMed Button"', () => {
    render(<WonderfulButton label='NPDMed Button' />);
    expect(screen.getByText('NPDMed Button')).toBeInTheDocument();
  });
});
