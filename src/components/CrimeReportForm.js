import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ShieldIcon, ComputerIcon, ScaleIcon, GlobeIcon, StarIcon, CheckIcon } from './CSSIcons';
import { submitToGoogleSheets } from '../utils/googleSheets';
import { getBrowserFingerprint, getIPAddress, createFingerprintHash } from '../utils/browserFingerprint';

const FormContainer = styled.div`
  background: var(--color-white);
  padding: var(--spacing-3xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  margin-top: var(--spacing-2xl);
`;

const ProgressContainer = styled.div`
  margin-bottom: var(--spacing-2xl);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--color-gray-200);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: var(--spacing-lg);
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: var(--radius-full);
  transition: width 0.3s ease;
`;

const ProgressText = styled.div`
  text-align: center;
  color: var(--color-gray-600);
  font-size: var(--font-size-sm);
  font-weight: 500;
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-lg);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--color-gray-200);
    z-index: 1;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  
  .step-circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${props => props.active ? 'var(--color-primary)' : 'var(--color-gray-200)'};
    color: ${props => props.active ? 'var(--color-white)' : 'var(--color-gray-500)'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-sm);
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    transition: all var(--transition-fast);
  }
  
  .step-label {
    font-size: var(--font-size-xs);
    color: ${props => props.active ? 'var(--color-primary)' : 'var(--color-gray-500)'};
    text-align: center;
    font-weight: 500;
    max-width: 80px;
  }
`;

const StepSection = styled(motion.div)`
  display: ${props => props.active ? 'block' : 'none'};
`;

const FormTitle = styled.h3`
  font-size: var(--font-size-2xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  text-align: center;
`;

const FormDescription = styled.p`
  color: var(--color-gray-600);
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  line-height: 1.6;
`;

const Form = styled.form`
  display: grid;
  gap: var(--spacing-lg);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Input = styled.input`
  padding: var(--spacing-md);
  border: 2px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
  
  &::placeholder {
    color: var(--color-gray-400);
  }
`;

const TextArea = styled.textarea`
  padding: var(--spacing-md);
  border: 2px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
  
  &::placeholder {
    color: var(--color-gray-400);
  }
`;

const Select = styled.select`
  padding: var(--spacing-md);
  border: 2px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  background: var(--color-white);
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-gray-50);
  }
  
  input[type="checkbox"] {
    margin: 0;
  }
  
  span {
    color: var(--color-gray-700);
    font-size: var(--font-size-sm);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  justify-content: space-between;
  margin-top: var(--spacing-2xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: var(--spacing-lg) var(--spacing-2xl);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: var(--color-white);
`;

const SecondaryButton = styled(Button)`
  background: var(--color-gray-200);
  color: var(--color-gray-700);
  
  &:hover {
    background: var(--color-gray-300);
  }
`;

const SubmitButton = styled(Button)`
  background: linear-gradient(135deg, var(--color-success), #2d7d32);
  color: var(--color-white);
  width: 100%;
`;

const SuccessMessage = styled.div`
  background: var(--color-success);
  color: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  text-align: center;
  margin-top: var(--spacing-lg);
`;

const ErrorMessage = styled.div`
  background: var(--color-error);
  color: var(--color-white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  text-align: center;
  margin-top: var(--spacing-lg);
`;

const ReviewSection = styled.div`
  background: var(--color-gray-50);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-lg);
`;

const ReviewItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-gray-200);
  
  &:last-child {
    border-bottom: none;
  }
  
  .label {
    font-weight: 600;
    color: var(--color-primary);
    min-width: 150px;
  }
  
  .value {
    color: var(--color-gray-700);
    text-align: right;
    flex: 1;
  }
`;

const StepTitle = styled.h4`
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  border-bottom: 2px solid var(--color-gray-200);
  padding-bottom: var(--spacing-sm);
  font-size: var(--font-size-lg);
`;

const CrimeReportForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Crime Information
    crimeType: '',
    dateOfIncident: '',
    location: '',
    description: '',
    
    // Fraud/Scam specific fields
    moneyLost: '',
    fraudMethod: '',
    
    // Additional Information
    urgency: 'medium',
    anonymous: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const steps = [
    { id: 1, label: 'Personal Info', title: 'Personal Information' },
    { id: 2, label: 'Crime Details', title: 'Crime Information' },
    { id: 3, label: 'Review', title: 'Review & Submit' }
  ];

  const totalSteps = steps.length;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const crimeTypes = [
    'Online Scam/Fraud',
    'Phone Scam',
    'Email Fraud',
    'Investment Fraud',
    'Romance Scam',
    'Identity Theft',
    'Credit Card Fraud',
    'Banking Fraud',
    'Cryptocurrency Fraud',
    'Theft/Burglary',
    'Assault',
    'Other'
  ];

  const fraudMethods = [
    'Phone Call',
    'Email',
    'Text Message',
    'Social Media',
    'Dating App/Website',
    'Fake Website',
    'In Person',
    'Mail/Letter',
    'Other'
  ];


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email;
      case 2:
        return formData.crimeType && formData.dateOfIncident && formData.location && formData.description;
      case 3:
        return true; // Review step
      default:
        return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Collect browser fingerprint and IP
      const fingerprint = getBrowserFingerprint();
      const fingerprintHash = createFingerprintHash(fingerprint);
      const ipAddress = await getIPAddress();
      
      // Combine form data with fingerprint and IP
      const completeFormData = {
        ...formData,
        // Browser fingerprint data
        ipAddress: ipAddress,
        fingerprintHash: fingerprintHash,
        userAgent: fingerprint.userAgent,
        language: fingerprint.language,
        languages: fingerprint.languages,
        platform: fingerprint.platform,
        cookieEnabled: fingerprint.cookieEnabled,
        doNotTrack: fingerprint.doNotTrack,
        timezone: fingerprint.timezone,
        screenResolution: fingerprint.screenResolution,
        screenColorDepth: fingerprint.screenColorDepth,
        availableScreenResolution: fingerprint.availableScreenResolution,
        canvasFingerprint: fingerprint.canvasFingerprint,
        webglVendor: fingerprint.webglVendor,
        webglRenderer: fingerprint.webglRenderer,
        touchSupport: fingerprint.touchSupport,
        hardwareConcurrency: fingerprint.hardwareConcurrency,
        deviceMemory: fingerprint.deviceMemory,
        connectionType: fingerprint.connectionType,
        timestamp: fingerprint.timestamp,
        localTime: fingerprint.localTime,
        sessionStorage: fingerprint.sessionStorage,
        localStorage: fingerprint.localStorage,
        indexedDB: fingerprint.indexedDB,
        cpuClass: fingerprint.cpuClass,
        plugins: fingerprint.plugins,
        mimeTypes: fingerprint.mimeTypes,
        referrer: document.referrer || '',
        currentUrl: window.location.href || ''
      };
      
      console.log('Complete form data being sent:', completeFormData);
      
      // Submit to Google Sheets
      const result = await submitToGoogleSheets(completeFormData);
      
      if (result.success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', crimeType: '',
          dateOfIncident: '', location: '', description: '', moneyLost: '',
          fraudMethod: '', urgency: 'medium', anonymous: false
        });
        // Reset to first step
        setCurrentStep(1);
      } else {
        setSubmitStatus('error');
        console.error('Google Sheets submission failed:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepSection active={currentStep === 1}>
            <StepTitle>Personal Information</StepTitle>
            <FormRow>
              <FormGroup>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                />
              </FormGroup>
            </FormRow>
          </StepSection>
        );

      case 2:
        return (
          <StepSection active={currentStep === 2}>
            <StepTitle>Crime Information</StepTitle>
            <FormRow>
              <FormGroup>
                <Label htmlFor="crimeType">Type of Crime *</Label>
                <Select
                  id="crimeType"
                  name="crimeType"
                  value={formData.crimeType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select crime type</option>
                  {crimeTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="dateOfIncident">Date of Incident *</Label>
                <Input
                  type="date"
                  id="dateOfIncident"
                  name="dateOfIncident"
                  value={formData.dateOfIncident}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="location">Location/Website/Platform *</Label>
              <Input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Where did this happen? (website, phone, in person, etc.)"
                required
              />
            </FormGroup>

            {(formData.crimeType.includes('Scam') || formData.crimeType.includes('Fraud')) && (
              <>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="fraudMethod">How were you contacted?</Label>
                    <Select
                      id="fraudMethod"
                      name="fraudMethod"
                      value={formData.fraudMethod}
                      onChange={handleInputChange}
                    >
                      <option value="">Select method</option>
                      {fraudMethods.map(method => (
                        <option key={method} value={method}>{method}</option>
                      ))}
                    </Select>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="moneyLost">Amount of Money Lost (CAD)</Label>
                    <Input
                      type="number"
                      id="moneyLost"
                      name="moneyLost"
                      value={formData.moneyLost}
                      onChange={handleInputChange}
                      placeholder="0"
                      min="0"
                      step="0.01"
                    />
                  </FormGroup>
                </FormRow>
              </>
            )}

            <FormGroup>
              <Label htmlFor="description">Description of What Happened *</Label>
              <TextArea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Please describe what happened in detail..."
                required
              />
            </FormGroup>

            <FormGroup>
              <CheckboxItem>
                <input
                  type="checkbox"
                  id="anonymous"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleInputChange}
                />
                <span>Submit anonymously (your personal info won't be shared)</span>
              </CheckboxItem>
            </FormGroup>
          </StepSection>
        );

      case 3:
        return (
          <StepSection active={currentStep === 3}>
            <StepTitle>Review Your Report</StepTitle>
            <ReviewSection>
              <ReviewItem>
                <div className="label">Name:</div>
                <div className="value">{formData.firstName} {formData.lastName}</div>
              </ReviewItem>
              <ReviewItem>
                <div className="label">Email:</div>
                <div className="value">{formData.email}</div>
              </ReviewItem>
              <ReviewItem>
                <div className="label">Phone:</div>
                <div className="value">{formData.phone || 'Not provided'}</div>
              </ReviewItem>
              <ReviewItem>
                <div className="label">Crime Type:</div>
                <div className="value">{formData.crimeType}</div>
              </ReviewItem>
              <ReviewItem>
                <div className="label">Date:</div>
                <div className="value">{formData.dateOfIncident}</div>
              </ReviewItem>
              <ReviewItem>
                <div className="label">Location:</div>
                <div className="value">{formData.location}</div>
              </ReviewItem>
              {formData.fraudMethod && (
                <ReviewItem>
                  <div className="label">Contact Method:</div>
                  <div className="value">{formData.fraudMethod}</div>
                </ReviewItem>
              )}
              {formData.moneyLost && (
                <ReviewItem>
                  <div className="label">Money Lost:</div>
                  <div className="value">CAD ${formData.moneyLost}</div>
                </ReviewItem>
              )}
              <ReviewItem>
                <div className="label">Anonymous:</div>
                <div className="value">{formData.anonymous ? 'Yes' : 'No'}</div>
              </ReviewItem>
            </ReviewSection>
          </StepSection>
        );

      default:
        return null;
    }
  };

  return (
    <FormContainer>
      <FormTitle>Crime Report Form</FormTitle>
      <FormDescription>
        Report criminal activity to INTERPOL Canada. All information provided will be treated confidentially 
        and used for law enforcement purposes only. In case of emergency, please call 911 immediately.
      </FormDescription>

      <ProgressContainer>
        <ProgressBar>
          <ProgressFill
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </ProgressBar>
        <ProgressText>
          Step {currentStep} of {totalSteps} - {steps[currentStep - 1]?.title}
        </ProgressText>
        <StepIndicator>
          {steps.map((step) => (
            <Step
              key={step.id}
              active={currentStep >= step.id}
              onClick={() => goToStep(step.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="step-circle">
                {currentStep > step.id ? '✓' : step.id}
              </div>
              <div className="step-label">{step.label}</div>
            </Step>
          ))}
        </StepIndicator>
      </ProgressContainer>

      <Form onSubmit={handleSubmit}>
        {renderStepContent()}

        <ButtonGroup>
          {currentStep > 1 && (
            <SecondaryButton type="button" onClick={prevStep}>
              ← Previous
            </SecondaryButton>
          )}
          
          {currentStep < totalSteps ? (
            <PrimaryButton 
              type="button" 
              onClick={nextStep}
              disabled={!isStepValid(currentStep)}
            >
              Next →
            </PrimaryButton>
          ) : (
            <SubmitButton type="submit" disabled={isSubmitting || !isStepValid(currentStep)}>
              {isSubmitting ? 'Submitting Report...' : 'Submit Crime Report'}
            </SubmitButton>
          )}
        </ButtonGroup>

        {submitStatus === 'success' && (
          <SuccessMessage>
            ✅ Your crime report has been submitted successfully. A case number will be sent to your email shortly.
          </SuccessMessage>
        )}

        {submitStatus === 'error' && (
          <ErrorMessage>
            ❌ There was an error submitting your report. Please try again or contact us directly.
          </ErrorMessage>
        )}
      </Form>
    </FormContainer>
  );
};

export default CrimeReportForm;
