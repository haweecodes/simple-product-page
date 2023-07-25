import React from 'react';
import { render } from '@testing-library/react';
import Attribute from '../index';
import Language from '@/dictionaires/en.json'

describe(('test Attribute component'), () => {
 
  test('Attribute component renders correctly', () => {
    const attributes = [
      { attribute: 'Color', value: 'Blue' },
      { attribute: 'Size', value: 'Medium' },
      { attribute: 'Material', value: 'Cotton' },
    ];

    const { getByText } = render(<Attribute attributes={attributes} params={Language} />);
  
    const headingElement = getByText(/More Information/i);
    expect(headingElement).toBeInTheDocument();
  
    attributes.forEach((attr) => {
      const attributeNameElement = getByText(new RegExp(`${attr.attribute}:`));
      expect(attributeNameElement).toBeInTheDocument();
  
      const attributeValueElement = getByText(attr.value);
      expect(attributeValueElement).toBeInTheDocument();
    });
  });

  test('Attribute component handles wrong info correctly', () => {
    const wrongAttributes: any = [];
  
    const { queryByText } = render(<Attribute attributes={wrongAttributes} />);
  
    const headingElement = queryByText(/Mer informasjon/i);
    expect(headingElement).toBeNull();
  });
})




