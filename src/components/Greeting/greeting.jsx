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
              <img src="./src/components/icons/hi.gif" alt="Hi" style={{ width: '120px', height: '110px', margin: '0 auto'}} />
              <p className="-mt-1 rounded-lg">
                Hello! This is what I needed to do, which is why I left your debut party early HAHA.
                So please click the next button and enjoy the rest!
              </p>
            </div>
          </Step>

          <Step>
            < Envelope/>
            <img src="./src/components/icons/up.gif" alt="☝🏽"style={{ width: '120px', height: '110px', margin: '0 auto'}} />
            <p className='text-center'>Click the envelope to open👉👈</p>
          </Step>

          <Step>
            <div>
            <img src="./src/components/icons/happy.gif" alt="🙇"style={{ width: '300px', height: '110px', margin: '0 auto'}} />
              <p>Thank you for reading my message. I hope you like it.</p>
              <p className='text-center'>Happy 18th birthday! 💙</p>
            </div>
          </Step>
        </Stepper>
      </div>
    </div>
  );
};

export default GreetingStepper;
