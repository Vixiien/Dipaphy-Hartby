import React, { useState, useEffect } from 'react';
import Stepper, { Step } from '../Stepper/Stepper';
import Confetti from 'react-confetti';
import "../Stepper/Stepper";
import Envelope from './envelope/envelope';

const GreetingStepper = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [isPaperVisible, setIsPaperVisible] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleStepChange = (step) => {
    console.log('Step changed to:', step);
  };

  const handleComplete = () => {
    console.log('Stepper completed!');
    setIsComplete(true);
    setTimeout(() => setIsComplete(false), 5000);
  };

  return (
    <div className="birthday-container">
      {isComplete && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }}
        />
      )}

      <div className="birthday-card">
        <Stepper
          initialStep={1}
          onStepChange={handleStepChange}
          onFinalStepCompleted={handleComplete}
          stepCircleContainerClassName="step-circle-container-custom"
          stepContainerClassName="step-container-custom"
          contentClassName="step-content-custom"
          footerClassName="footer-custom"
          nextButtonProps={{ className: "continue-button" }}
        >
          <Step>
            <div className="text-center">
              <img src="/icons/hi.gif" alt="Hello" style={{ width: '120px', height: '110px', margin: '0 auto'}} />
              <p className="-mt-1 rounded-lg">
                Hello po! This is what I needed to finish, which is why I had to leave your debut party early hehe. Click the next button and enjoy the rest!
              </p>
            </div>
          </Step>

          <Step>
            < Envelope/>
            <img src="/icons/up.gif" alt="☝🏽"style={{ width: '120px', height: '110px', margin: '0 auto'}} />
            <p className='text-center'>Click the envelope to open👉👈</p>
          </Step>

         <Step>
            <div className="flex flex-col items-center text-center px-4">
              <img
                src="/icons/happy.gif"
                alt="🙇"
                style={{ width: '300px', height: '110px', margin: '0 auto' }}
              />
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2">
                Thank you for reading my message. I hope you like it.
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-1">
                Happy 18th birthday! 💙
              </p>
            </div>
          </Step>
        </Stepper>
      </div>
    </div>
  );
};

export default GreetingStepper;
