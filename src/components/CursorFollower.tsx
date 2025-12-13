import React, { useEffect, useState } from 'react';

const CursorFollower: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setVisible(true);
        };

        const handleMouseLeave = () => {
            setVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'rgba(74, 222, 128, 0.6)', // Green
                border: '2px solid #22c55e', // Darker Green Border
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none', // Allow clicks to pass through
                zIndex: 9999,
                transition: 'transform 0.1s ease-out, opacity 0.2s',
                boxShadow: '0 0 10px rgba(74, 222, 128, 0.5)'
            }}
        />
    );
};

export default CursorFollower;
