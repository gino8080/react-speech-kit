import React from 'react';
import SpeechSynthesis from '../src/SpeechSynthesis';
import runTests from './shared/speechSynthesisTests';

const mockOnEnd = jest.fn();
const TestComponent = () => null;
const Example = () => (
  <SpeechSynthesis onEnd={mockOnEnd}>
    {props => <TestComponent {...props} />}
  </SpeechSynthesis>
);

runTests({
  Example,
  TestComponent,
  mockOnEnd
});
