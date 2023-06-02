import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialMediaLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/nikhil.yadav.7906932/',
      icon: FaFacebookF,
    },
    { name: 'Twitter', url: 'https://twitter.com/notNikhil_', icon: FaTwitter },
    {
      name: 'Instagram',
      url: 'https://instagram.com/not.nikkhil?igshid=NTc4MTIwNjQ2YQ==',
      icon: FaInstagram,
    },
    // Add more social media links as needed
  ];

  return (
    <Box mt="80px" backgroundColor="#fff3f4">
      <Stack alignItems="center" px="40px" pt="24px">
        {/* <img src={Logo} alt="logo" width="200px" height="20px" /> */}
        <Typography variant="h5" pb="40px" mt="20">
          Made with {'<3'} by Nikhil
        </Typography>
        <footer>
          <ul className="social-links">
            {socialMediaLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>
                  <link.icon />
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </Stack>
    </Box>
  );
};

export default Footer;
