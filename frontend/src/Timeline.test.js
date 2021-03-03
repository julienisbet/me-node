import { render, screen } from '@testing-library/react';
import Timeline from './Timeline';
import {Constants} from './constants.js'

test('renders timeline', () => {
  render(<Timeline />);
  const timelineElem = screen.getByTestId("timeline");
  expect(timelineElem).toBeInTheDocument();
});

test('renders each moment', () => {
    render(<Timeline />);
    const timelineBlocks = screen.getAllByTestId("timeline-block")
    expect(timelineBlocks.length).toBe(Constants.MOMENTS.length)
});