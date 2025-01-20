import { FC, useEffect, useState, useRef } from 'react';
import Message from './Message';

const classes = {
  Container: 'relative flex items-center lg:max-h-[1080px] md:max-h-[1000px] sm:max-h-[600px] min-[430px]:max-h-[430px] min-[320px]:max-h-[400px] h-[125svh] justify-center w-full bg-[#cee968]',
  eyesContainer: 'flex items-center justify-center w-full',
  eyesMain: 'absolute flex flex-col -translate-y-[80%] justify-center',
  eyeWrapper: 'relative bottom-0 flex items-center justify-center min-[1921px]:gap-[4.164vw] xl:gap-20 lg:gap-16 md:gap-12 sm:gap-10 gap-8 ',
  eye: 'flex items-center justify-center min-[1921px]:w-[9.995vw] min-[1921px]:h-[9.995vw] xl:w-[12rem] xl:h-[12rem] lg:w-[10rem] lg:h-[10rem] md:w-[8rem] md:h-[8rem] sm:w-[6.75rem] sm:h-[6.75rem] min-[430px]:w-[5.5rem] min-[430px]:h-[5.5rem] w-[4.75rem] h-[4.75rem] bg-white rounded-full overflow-hidden transition-transform duration-300 ease-in-out',
  pupilContainer: 'absolute min-[1921px]:w-[8.745vw] xl:w-[10.5rem] lg:w-[8.75rem] md:w-[7rem] sm:w-[5.5rem] min-[430px]:w-[4.75rem] w-[4rem]',
  pupil: 'relative min-[1921px]:w-[6.663vw] min-[1921px]:h-[6.663vw] xl:w-[8rem] xl:h-[8rem] lg:w-[6.75rem] lg:h-[6.75rem] md:w-[5.5rem] md:h-[5.5rem] sm:w-[4.5rem] sm:h-[4.5rem] min-[430px]:w-[3.5rem] min-[430px]:h-[3.5rem] w-[3.25rem] h-[3.25rem] bg-black rounded-full transition-transform duration-1000 ease-in-out',
  line: 'absolute flex flex-row top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full',
  placeholder: 'h-full min-[1921px]:w-[0.5rem] w-[0.25rem]',
  iris: 'min-[1921px]:h-[1.666vw] min-[1921px]:w-[1.666vw] xl:h-[2rem] xl:w-[2rem] lg:h-[1.75rem] lg:w-[1.75rem] md:w-[1.5rem] md:h-[1.5rem] sm:w-[1.25rem] sm:h-[1.25rem] min-[430px]:w-[1rem] min-[430px]:h-[1rem] w-[0.75rem] h-[0.75rem] bg-white rounded-full',
  ConnectContainer: 'absolute flex flex-col items-center justify-center w-screen min-[1921px]:gap-[3.332vw] xl:gap-16 lg:gap-14 md:gap-12 sm:gap-10 gap-8  ',
  ConnectTagline: 'font-inter font-[700] text-center tracking-tight min-[1921px]:text-[9.995vw] xl:text-[12rem] lg:text-[10rem] md:text-[7.5rem] sm:text-[6rem] min-[430px]:text-[4rem] text-[3.5rem] leading-none',
  StartButton: 'flex items-center justify-center bg-black rounded-full gap-2 p-4 cursor-pointer transition-transform transform hover:scale-[1.025] duration-300 ease-in-out',
  StartButtonText: 'text-white font-pp-mori-semibold min-[1921px]:text-[1.874vw] md:text-[1.75rem] min-[430px]:text-[1.35rem] text-[1rem] min-[1921px]:px-[1.666vw] min-[1921px]:py-[1.458vw] lg:px-4 lg:py-5 md:py-5 md:px-6 sm:py-4 sm:px-5 py-2 px-3',
  dot: 'min-[1921px]:w-[1.041vw] min-[1921px]:h-[1.041vw] xl:h-5 xl:w-5 md:h-4 md:w-4 w-3 h-3 min-[1921px]:mr-[0.833vw] xl:mr-4 sm:mr-3 mr-1 bg-white rounded-full',
}

const Start: FC = () => {

  const [rotateLeft, setRotateLeft] = useState<number>(0);
  const [rotateRight, setRotateRight] = useState<number>(0);
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (leftEyeRef.current) {
        const leftEyeRect = leftEyeRef.current.getBoundingClientRect();
        const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
        const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;

        const deltaXLeft = mouseX - leftEyeCenterX;
        const deltaYLeft = mouseY - leftEyeCenterY;

        const angleRadLeft = Math.atan2(deltaYLeft, deltaXLeft);
        const angleDegLeft = (angleRadLeft * (180 / Math.PI)) - 180;

        setRotateLeft(angleDegLeft);
      }

      if (rightEyeRef.current) {
        const rightEyeRect = rightEyeRef.current.getBoundingClientRect();
        const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
        const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;

        const deltaXRight = mouseX - rightEyeCenterX;
        const deltaYRight = mouseY - rightEyeCenterY;

        const angleRadRight = Math.atan2(deltaYRight, deltaXRight);
        const angleDegRight = (angleRadRight * (180 / Math.PI)) - 180;

        setRotateRight(angleDegRight);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={classes.Container}>
      <div className={classes.ConnectContainer}>
        <h1 className={classes.ConnectTagline}>READY<br />TO START<br />A PROJECT?</h1>
        <Message>
          <div className={classes.StartButton}>
            <p className={classes.StartButtonText}>START A PROJECT</p>
            <div className={classes.dot}></div>
          </div>
        </Message>
      </div>
      <div data-scroll data-scroll-speed="0.1" className={classes.eyesContainer}>
        <div className={classes.eyesMain}>
          <div className={classes.eyeWrapper}>
            <div className={classes.eye} ref={leftEyeRef}>
              <div className={classes.pupilContainer}>
                <div style={{ transform: `translate(-50%, -50%) rotate(${rotateLeft}deg)` }} className={classes.line}>
                  <div className={classes.pupil}>
                    <div className={classes.line}>
                      <div className={classes.placeholder}></div>
                      <div className={classes.iris}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.eye} ref={rightEyeRef}>
              <div className={classes.pupilContainer}>
                <div style={{ transform: `translate(-50%, -50%) rotate(${rotateRight}deg)` }} className={classes.line}>
                  <div className={classes.pupil}>
                    <div className={classes.line}>
                      <div className={classes.placeholder}></div>
                      <div className={classes.iris}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;