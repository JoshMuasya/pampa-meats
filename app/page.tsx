'use client'

import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';

const Page = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());    

  function calculateTimeRemaining() {
    const targetDate = new Date('2023-12-31T23:59:59').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const isServer = typeof window === 'undefined';
    if (!isServer) {
      const countdownInterval = setInterval(() => {
        setTimeout(() => {
          const newTimeRemaining = calculateTimeRemaining();
          setTimeRemaining(newTimeRemaining);
        }, 1000)
      }, 1000);
  
      return () => clearInterval(countdownInterval);
    }
  }, []);

  return (
    <div className='h-screen pic-back bg-fixed bg-cover flex flex-col justify-center align-middle items-center'>
      {/* overlay */}
      <div className='absolute top-0 left-0 bottom-0 right-0 h-screen bg-back-green opacity-50 z-[2]'/>

      {/* Top */}
      <div className='absolute z-10 top-0 w-full flex md:flex-row flex-col justify-between align-middle items-center px-14 pt-5'>
        {/* Logo */}
        <div>
          <Image 
            src='/Logo.png'
            width={342}
            height={162.08}
            alt='Logo'
          />
        </div>

        {/* social links */}
        <div className='cursor-pointer text-red pt-5 md:pt-0'>
          <Link
            href=''
            className='pr-5'
          >
            <TwitterIcon className='text-xl'/>
          </Link>

          <Link
            href=''
            className='pr-5'
          >
            <FacebookIcon className='text-xl'/>
          </Link>
          
          <Link
            href=''
          >
            <InstagramIcon className='text-xl'/>
          </Link>          
        </div>
      </div>

      {/* Bottom */}
      <div className='absolute z-10 w-full flex flex-col m:flex-row justify-between align-middle items-center px-20 pt-48'>
        {/* Left */}
        <div className='text-dark'>
          {/* Top */}
          <div className='text-l font-signika font-bold'>
            NOSSO SITE É
          </div>

          {/* middle */}
          <div className='text-ml font-black-san font-black pb-3'>
            EM BREVE
          </div>

          {/* countdown */}
          <div className='flex flex-row justify-center align-middle items-center pb-5 m:pb-0'>
            {/* Days */}
            <div className='bg-dark-blue text-back-green font-black-san font-bold text-l rounded-xl mx-2'>
              <h1 className='px-4 py-3'>
                {timeRemaining.days}
              </h1>
            </div>

            {/* Hours */}
            <div className='bg-dark-blue text-back-green font-black-san font-bold text-l rounded-xl mx-2'>
              <h1 className='px-4 py-3'>
                {timeRemaining.hours}
              </h1>
            </div>

            {/* Minutes */}
            <div className='bg-dark-blue text-back-green font-black-san font-bold text-l rounded-xl mx-2'>
              <h1 className='px-4 py-3'>
                {timeRemaining.minutes}
              </h1>
            </div>

            {/* Seconds */}
            <div className='bg-dark-blue text-back-green font-black-san font-bold text-l rounded-xl mx-2'>
              <h1 className='px-4 py-3'>
                {timeRemaining.seconds}
              </h1>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='bg-dark-blue text-back-green p-5 rounded-2xl flex flex-col justify-center align-middle items-center'>
          {/* Title */}
          <div className='font-signika font-bold text-l pb-4'>
            Contact Us
          </div>

          {/* Phone */}
          <div className='flex flex-row justify-center items-center align-middle pb-4'>
            {/* icon */}
            <div>
              <PermPhoneMsgIcon 
                className='text-ml'
              />
            </div>

            {/* Number */}
            <div 
              className='font-signika text-lm pl-5 font-semibold'
            >
              +254 20 521 0324
            </div>
          </div>

          {/* email */}
          <div className='flex flex-row justify-center items-center align-middle pb-4'>
            {/* icon */}
            <div>
              <EmailIcon 
                className='text-ml'
              />
            </div>

            {/* Email */}
            <a 
              className='font-signika text-lm pl-5 font-semibold cursor-pointer'
            >
              info@pampaprimemeats.com
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Page