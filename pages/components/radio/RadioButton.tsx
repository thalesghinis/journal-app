import React from "react";
import { StyledRadio } from './StyledRadio'


export const RadioButton = (props: { changed: any; id: any; isSelected: any; label: any; value: any; }) => {
    const { changed, id, isSelected, label, value } = props;
    return (
      <StyledRadio className="RadioButton">
        <input
          id={id}
          onChange={changed}
          value={value}
          type="radio"
          checked={isSelected}
        />
        <label htmlFor={id}>{label}</label>
      </StyledRadio>
    );
  };
  