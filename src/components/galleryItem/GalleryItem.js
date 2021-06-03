import React, { useRef, useEffect, useState } from 'react'
import { points } from '../data'
import UseOnScreen from '../hooks/UseOnScreen';
import './galleryItem.scss';
import cn from 'classnames'


export default function GalleryItem({ src, index, columnOffset }) {
    const ref = useRef(null);
    const [reveal, setReveal] = useState(false);
    const onScreen = UseOnScreen(ref);

    useEffect(() => {
        if (onScreen) setReveal(onScreen);
    }, [onScreen]);
    const values = points[index];
    if (!values) return null;
    const [row, column, spanRow, spanColumn] = values;

    const getScrollIndex = () => {
        if (index === 1) return -1;
        if (index === 4) return -1;
        if (index === 0) return 0;
        if (index === 3) return 0;

        return 1;
    };

    return (
        <div className='gallery-item'
            data-scroll
            data-scroll-speed={getScrollIndex()}
            style={{
                gridArea: `${row} / ${column + columnOffset} / span ${spanRow} / span ${spanColumn} `,

            }}
            ref={ref}
        >
            <div className={cn("gallery-item-image", { reveal: reveal })}>
                <div className='gallery-item-imgInner' style={{ backgroundImage: `url(${src})` }}>

                </div>
            </div>
        </div >
    )
}
