import React, { useState, KeyboardEvent, useRef } from 'react';
import './inputTag.css';

export const InputTag = () => {
  const [state, setState] = useState({ tags: ['beauty', 'surgery'] });
  const tagInput = useRef<HTMLInputElement>(null);

  const removeTag = (i: number) => {
    const newTags = [...state.tags];
    newTags.splice(i, 1);
    setState({ tags: newTags });
  };

  const inputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log('Enter pressed');
    //@ts-ignore
    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (state.tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setState({ tags: [...state.tags, val] });
      //   tagInput.current!.value = '';
      if (tagInput) {
        tagInput.current!.value = '';
      }
    } else if (e.key === 'Backspace' && !val) {
      removeTag(state.tags.length - 1);
    }
  };

  return (
    <div className="input-tag">
      <ul className="input-tag__tags">
        {state.tags.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button type="button" onClick={() => removeTag(i)}>
              +
            </button>
          </li>
        ))}
        <li className="input-tag__tags__input">
          <input
            type="text"
            onKeyDown={(e) => inputKeyDown(e)}
            ref={tagInput}
          />
        </li>
      </ul>
    </div>
  );
};
