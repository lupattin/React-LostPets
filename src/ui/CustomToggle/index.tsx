import React from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { ButtonHome } from '../Button';
function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log(),
    );
  
    return (
      <ButtonHome click={decoratedOnClick}>
        {children}
      </ButtonHome>
    );
  }

export {CustomToggle}