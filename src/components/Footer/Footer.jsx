
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10 mt-5">
            <aside>
                <div className='flex justify-center items-center gap-3'>
                    <div>
                        <img src='assets/logo-footer.png' alt="LawBD Logo" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>LawBD</h1>
                    </div>
                </div>
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>My-Bookings</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <a href="https://www.facebook.com/share/1EWqT1kjXf/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a href="https://x.com/Shorifuzzaman22" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                    <a href="https://www.youtube.com/@csestudentsschool9897" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
