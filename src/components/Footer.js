import React from 'react'
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaFacebookF, FaLinkedin, FaArrowCircleDown, FaArrowAltCircleDown } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';

export default function Footer(){
    return(
        <section id="contact" className="text-white bg-black flex flex-col md:flex-row gap-6">
            <div className='md:w-1/3'>
              <div className='flex items-center'>
                <StaticImage
                  src='../images/iwugm.webp'
                  alt="logo iwugm22"
                  className='w-12 md:mr-4'
                  placeholder='none'
                />
                <h3>IW UGM 2022</h3>
              </div>
              <address>
                <a href='https://goo.gl/maps/JUbgjDshpv1jHGb28' target='_blank'rel="noopener" className='hover:text-red'>
                  Jl. Grafika No.2 Department of Mechanical and Industrial Engineering, Universitas Gadjah Mada, Yogyakarta 55281, Indonesia
                </a>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d988.3072725555083!2d110.3711296!3d-7.7655132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9a3f290ba6f2ee9!2sDepartment%20of%20Mechanical%20and%20Industrial%20Engineering!5e0!3m2!1sen!2sid!4v1653045178020!5m2!1sen!2sid" className='border-0 w-full h-40 mt-2' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </address>
            </div>
            <div className='md:w-1/3'>
              <h5>Contact</h5>
              <address>
                <a href='mailto:industrialworkshop.ft@ugm.ac.id' className='hover:text-red' target='_blank' rel="noopener">
                  Email: industrialworkshop.ft@ugm.ac.id
                </a>
              </address>
              <br/>
              <h5>Call us:</h5>
              <address><a href='https://wa.me/6285846173676' target='_blank' rel="noopener" className='hover:text-red'>+6285846173676 Natalia Candela</a></address>
              <address><a href='https://wa.me/6287770207972' target='_blank' rel="noopener" className='hover:text-red'>+6287770207972 Faiza Ulinnuha</a></address>
            </div>
            <div className='md:w-1/3'>
              <h5>Follow us</h5>
              <div className='rounded-4xl grid grid-cols-6 gap-x-0 gap-y-4 text-xl justify-items-center mt-2'>
                    <a href='https://line.me/R/ti/p/@qrb0856x' target='_blank' rel="noopener" className='rounded-lg border-2 border-white  p-2 h-10 hover:bg-gradient-to-tr hover:from-blue hover:to-red'>
                        <StaticImage src='../images/line-messenger.webp' alt='line-messenger logo' className='w-5 h-5 m-0' placeholder='none'/>
                    </a>
                    <a href="https://www.instagram.com/iwugm" target="_blank" rel="noopener" className='rounded-lg border-2 border-white p-2 h-fit hover:bg-gradient-to-tr hover:from-blue hover:to-red'>
                        <FaInstagram/>
                    </a>
                    <a href="https://twitter.com/iwugm"  target="_blank" rel="noopener" className='rounded-lg border-2 border-white  p-2 h-fit hover:bg-gradient-to-tr hover:from-blue hover:to-red'>
                        <FaTwitter/>
                    </a>
                    <a href="https://www.youtube.com/channel/UC68uMGtVkPYY3IoaDN1QqXA"  target="_blank" rel="noopener" className='rounded-lg border-2 border-white p-2 h-fit hover:bg-gradient-to-tr hover:from-blue hover:to-red'>
                        <FaYoutube/>
                    </a>
                    <a href="https://www.linkedin.com/company/iwugm" target="_blank" rel="noopener" className='rounded-lg border-2 border-white  p-2 h-fit hover:bg-gradient-to-tr hover:from-blue hover:to-red'>
                        <FaLinkedin/>
                    </a>
                    <a href="https://www.tiktok.com/@iwugm" target="_blank" rel="noopener" className='rounded-lg border-2 border-white  p-2 h-fit hover:bg-gradient-to-tr hover:from-blue hover:to-red'>
                        <FaTiktok/>
                    </a>
                </div>
            </div>
          </section>
    )
}