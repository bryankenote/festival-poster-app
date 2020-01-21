import React, { useRef, useEffect } from 'react';
import '../../style/Poster.css';
import { usePoster, usePosterSize } from './Poster';

export const POSTER_CANVAS_ID = 'poster-canvas';

interface Props {
  themeType?: string;
}
const PosterCanvas: React.FC<Props> = ({ themeType = 'theme1' }) => {
  const [posterWidth, posterHeight] = usePosterSize();
  const poster = usePoster();
  const ref = useRef<HTMLCanvasElement>(null);
  const bgRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const can = ref.current;
    if (!can) throw new Error('Unable to retreive poster canvas element');
    poster.draw(can, false);
  });

  useEffect(() => {
    const bgcan = bgRef.current;
    if (!bgcan)
      throw new Error('Unable to retreive poster background canvas element');
    poster.drawBackground(bgcan);
  }, [poster]);

  const canvasStyle = (): React.CSSProperties => {
    return {
      position: 'absolute',
    };
  };

  return (
    <div
      className='canvas-container'
      style={{
        position: 'relative',
        width: posterWidth,
        height: posterHeight,
        border: '3px solid',
        boxSizing: 'content-box',
      }}
    >
      <canvas
        id='poster-bg'
        width={posterWidth}
        height={posterHeight}
        ref={bgRef}
        style={canvasStyle()}
      >
        Poster BackGround
      </canvas>
      <canvas ref={ref} id={POSTER_CANVAS_ID} style={canvasStyle()}>
        Festival Poster Viewer
      </canvas>
    </div>
  );
};

export default PosterCanvas;