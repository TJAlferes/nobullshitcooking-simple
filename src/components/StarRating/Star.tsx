import React, { useCallback, useState } from 'react';

const nop = () => {};

export function Star({
  full,
  index,
  readOnly,
  setOverride,
  setRating
}: Props): JSX.Element {
  const [ down, setDown ] = useState(false);

  const handleMouseDown = useCallback(() => {
    setDown(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setDown(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setOverride(index);
  }, [index, setOverride]);
  
  const handleMouseLeave = useCallback(() => {
    setDown(false);
    setOverride(null);
  }, [setOverride]);
  
  const handleClick = useCallback(() => {
    setRating(index);
  }, [index, setRating]);

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      height="1.5em"
      className={`star ${readOnly ? 'read_only' : ''}`}
      onMouseDown={readOnly ? nop : handleMouseDown}
      onMouseUp={readOnly ? nop : handleMouseUp}
      onMouseEnter={readOnly ? nop : handleMouseEnter}
      onMouseLeave={readOnly ? nop : handleMouseLeave}
      onClick={readOnly ? nop : handleClick}
    >
      <g transform={`scale(${down ? .95 : 1})`}>
        <g transform="scale(.95) translate(15,15)">
          <path
            stroke="rgba(0,0,0,.85)"
            stroke-width="30"
            fill={full ? 'gold' : 'transparent'}
            d="M492.867,181.444l-149.825-21.785L276.014,23.861c-8.187-16.59-31.844-16.589-40.031,0l-67.026,135.799L19.133,181.445c-18.306,2.662-25.615,25.158-12.369,38.071l108.408,105.682L89.592,474.44c-3.125,18.232,16.012,32.136,32.386,23.528l132.475-70.452l134.025,70.451c17.914,8.607,37.051-5.296,33.926-23.528l-25.578-149.241l108.409-105.685C518.482,206.601,511.173,184.105,492.867,181.444z"
          />
        </g>
      </g>
    </svg>
  );
}

type Props = {
  full: boolean;
  index: number;
  readOnly: boolean;
  setOverride(index: number|null): void; // change
  setRating(index: number): void; // change
};