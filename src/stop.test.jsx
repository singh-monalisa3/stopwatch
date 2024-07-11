// src/Stopwatch.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stopwatch from './stopwatch';

describe('Stopwatch component', () => {
  beforeEach(() => {
    render(<Stopwatch />);
  });

  it('verifies the initial state of the stopwatch', () => {
    expect(screen.getByText('Stopwatch')).toBeInTheDocument();
    expect(screen.getByText('0:00')).toBeInTheDocument();
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  it('starts the timer when Start is clicked', () => {
    fireEvent.click(screen.getByText('Start'));
    expect(screen.getByText('Stop')).toBeInTheDocument();
  });

  it('stops the timer when Stop is clicked', () => {
    fireEvent.click(screen.getByText('Start'));
    fireEvent.click(screen.getByText('Stop'));
    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  it('resets the timer when Reset is clicked', () => {
    fireEvent.click(screen.getByText('Start'));
    setTimeout(() => {
      fireEvent.click(screen.getByText('Stop'));
      fireEvent.click(screen.getByText('Reset'));
      expect(screen.getByText('0:00')).toBeInTheDocument();
    }, 2000); // Wait 2 seconds before stopping and resetting
  });
});
