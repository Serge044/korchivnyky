import React, { useRef } from 'react';
import styles from './AnimatedLogo.module.css';
import wheelAndWrenches from '../../img/animatedLogo/wheel-and-wrenches2.svg';
import wheel from '../../img/animatedLogo/wheel2.svg';
import title from '../../img/animatedLogo/title2.svg';
import yellowBlue from '../../img/animatedLogo/yellow-blue.svg';
import wheelFadeInOut from '../../img/animatedLogo/wheel-fadeInOut2.svg';
import darkCircle from '../../img/animatedLogo/dark-circle.svg';

const AnimatedLogo = () => {
  const groupRef = useRef(null);

  const handleGroupClick = () => {
    const group = groupRef.current;
    if (group) {
      group.classList.add(styles.active);

      setTimeout(() => {
        group.classList.remove(styles.active);
      }, 1500);
    }
  };

  return (
    <div>
      <svg className={styles.mainCanvas} width='200' height='200'>
        <g className={styles.group} ref={groupRef} onClick={handleGroupClick}>
          <image
            className={styles.yellowBlue}
            href={yellowBlue}
            height='100'
            width='100'
            x='50'
            y='50'
          />
          <image
            className={styles.wheelAndWrenches}
            href={wheelAndWrenches}
            height='100'
            width='100'
            x='50'
            y='50'
          />
          <image
            className={styles.darkCircle}
            href={darkCircle}
            height='100'
            width='100'
            x='50'
            y='50'
          />
          <image
            className={styles.wheel}
            href={wheel}
            height='100'
            width='100'
            x='50'
            y='50'
          />
          <image
            className={styles.wheelFadeInOut}
            href={wheelFadeInOut}
            height='100'
            width='100'
            x='50'
            y='50'
          />
          <image
            className={styles.title}
            href={title}
            height='100'
            width='100'
            x='50'
            y='50'
          />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
