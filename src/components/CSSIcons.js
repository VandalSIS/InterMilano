import styled from 'styled-components';

// CSS Icon Components
export const GlobeIcon = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid currentColor;
  border-radius: 50%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 2px;
    background: currentColor;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    width: 12px;
    height: 2px;
    background: currentColor;
  }
`;

export const ShieldIcon = styled.div`
  width: 24px;
  height: 24px;
  background: currentColor;
  clip-path: polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: transparent;
    clip-path: polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%);
    border: 1px solid currentColor;
  }
`;

export const ComputerIcon = styled.div`
  width: 24px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 6px;
    background: currentColor;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background: currentColor;
  }
`;

export const ScaleIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 2px;
    background: currentColor;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2px;
    height: 20px;
    background: currentColor;
  }
`;

export const PhoneIcon = styled.div`
  width: 16px;
  height: 24px;
  border: 2px solid currentColor;
  border-radius: 4px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 1px;
    background: currentColor;
  }
`;

export const EmailIcon = styled.div`
  width: 20px;
  height: 16px;
  border: 2px solid currentColor;
  border-radius: 2px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: -2px;
    width: 10px;
    height: 10px;
    border: 2px solid currentColor;
    border-right: none;
    border-bottom: none;
    transform: rotate(-45deg);
  }
`;

export const LocationIcon = styled.div`
  width: 16px;
  height: 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    border: 2px solid currentColor;
    border-radius: 50% 50% 50% 0;
    transform: translateX(-50%) rotate(-45deg);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: currentColor;
    border-radius: 50%;
  }
`;

export const ClockIcon = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid currentColor;
  border-radius: 50%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2px;
    height: 6px;
    background: currentColor;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 2px;
    background: currentColor;
  }
`;

export const StarIcon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 4px solid currentColor;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 4px solid currentColor;
  }
`;

export const CheckIcon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 6px;
    height: 10px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
  }
`;

export const ArrowRightIcon = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 2px;
    background: currentColor;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid currentColor;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }
`;

export const MenuIcon = styled.div`
  width: 24px;
  height: 18px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: currentColor;
    transition: all 0.3s ease;
  }
  
  &::before {
    top: 0;
  }
  
  &::after {
    bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    width: 100%;
    height: 2px;
    background: currentColor;
  }
`;

export const CloseIcon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 2px;
    background: currentColor;
    transform: translate(-50%, -50%);
  }
  
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

// Color variants for different notice types
export const RedNoticeIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #e53e3e;
  border-radius: 50%;
  position: relative;
  
  &::before {
    content: 'R';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const BlueNoticeIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #3182ce;
  border-radius: 50%;
  position: relative;
  
  &::before {
    content: 'B';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const GreenNoticeIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #38a169;
  border-radius: 50%;
  position: relative;
  
  &::before {
    content: 'G';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const YellowNoticeIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #d69e2e;
  border-radius: 50%;
  position: relative;
  
  &::before {
    content: 'Y';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const BlackNoticeIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #2d3748;
  border-radius: 50%;
  position: relative;
  
  &::before {
    content: 'B';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const PurpleNoticeIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #805ad5;
  border-radius: 50%;
  position: relative;
  
  &::before {
    content: 'P';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 12px;
  }
`;
