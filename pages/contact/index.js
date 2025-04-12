// components
import Transition from '../../components/Transition';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';

// icons
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className='h-full bg-primary/30 mb-24'>
      <Transition />
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form & info */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col xl:flex-row gap-x-8'
          >
            {/* info */}
            <div className='flex-1 flex flex-col gap-y-4 xl:gap-y-8 mb-12 xl:mb-0'>
              {/* email */}
              <div className='flex items-center gap-x-4'>
                <div className='text-2xl text-accent'>
                  <FaEnvelope />
                </div>
                <div>adnanayaz479@gmail.com</div>
              </div>
              {/* phone */}
              <div className='flex items-center gap-x-4'>
                <div className='text-2xl text-accent'>
                  <FaPhone />
                </div>
                <div>0335 9740228</div>
              </div>
              {/* location */}
              <div className='flex items-center gap-x-4'>
                <div className='text-2xl text-accent'>
                  <FaMapMarkerAlt />
                </div>
                <div>Peshawar, Pakistan</div>
              </div>
              {/* socials */}
              <div className='flex items-center gap-x-4'>
                <div className='text-2xl text-accent'>
                  <FaLinkedin />
                </div>
                <div>linkedin.com/in/Adnan-Ayaz-Awan</div>
              </div>
              <div className='flex items-center gap-x-4'>
                <div className='text-2xl text-accent'>
                  <FaGithub />
                </div>
                <div>github.com/AdnanAyaz1</div>
              </div>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit} className='flex-1 flex flex-col gap-y-4'>
              <div className='flex gap-x-4'>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Name'
                  className={`input ${errors.name ? 'border-red-500' : ''}`}
                />
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Email'
                  className={`input ${errors.email ? 'border-red-500' : ''}`}
                />
              </div>
              <input
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder='Subject'
                className='input'
              />
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Message'
                className={`textarea ${errors.message ? 'border-red-500' : ''}`}
              ></textarea>
              <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                  Let's talk
                </span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
