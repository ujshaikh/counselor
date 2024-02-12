import { useEffect, useState } from "react";

const throttle = (func: Function, delay: number) => {
 
    // Previously called time of the function
    let prev = 0;
    return (...args: any) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference
        // between previously 
        // called and current called timings
        // console.log(now - prev, delay);

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}

const useScrollDirection = () => {
    const [direction, setDirection] = useState('up');

    let prevScrollY = 0;

    useEffect(() => {
        // Using lodash, we set a throttle to the scroll event
        // making it not fire more than once every 500 ms.
        window.onscroll = throttle(() => {

            // This value keeps the latest scrollY position
            const { scrollY } = window;

            // Checks if previous scrollY is less than latest scrollY
            // If true, we are scrolling downwards, else scrollig upwards
            const direction = prevScrollY < scrollY ? 'down' : 'up';

            // Updates the previous scroll variable AFTER the direction is set.
            // The order of events is key to making this work, as assigning
            // the previous scroll before checking the direction will result
            // in the direction always being 'up'.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            prevScrollY = scrollY;

            // Set the state to trigger re-rendering
            setDirection(direction);
        }, 500);

        return () => {
            // Remove scroll event on unmount
            window.onscroll = null;
        };
    }, []);

    return direction;
}

export default useScrollDirection