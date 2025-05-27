





import { useEffect, useRef } from 'react';

const MosquitoCursor = () => {
  const mosquitoRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: e.pageX,
        y: e.pageY,
      };
    };

    document.addEventListener('mousemove', handleMouseMove);

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      // Faz interpolação suave entre a posição atual e a do mouse
      currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.2);
      currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.2);

      if (mosquitoRef.current) {
        mosquitoRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);




  return (
    <img
      ref={mosquitoRef}
      src="src\assets\denguecursor-removebg-preview.png"
      alt="Mosquito Cursor"
      style={{
        position: 'absolute',
        width: '40px',
        height: '40px',
        pointerEvents: 'none',
        transform: 'translate(0)',
        zIndex: 9999,
      }}
    />
  );
};

export default MosquitoCursor;
