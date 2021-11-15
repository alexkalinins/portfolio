import React from "react";
import SocialButton from './SocialButton';

export default function Footer() {
  return (
    <footer>
      <p>I made this website from scratch :)</p>
      <div>
        <SocialButton url="https://github.com/alexkalinins" title="GitHub"/>
        <SocialButton url="https://www.linkedin.com/in/alex-kalinins/"title="LinkedIn"/>
        <SocialButton url="https://alexkalinins.medium.com"title="Medium"/>
        <SocialButton url="mailto:alex.kalinins@mail.utoronto.ca"title="Email"/>
      </div>
      <p>© Alex Kalinins 2021</p>
    </footer>
  );
}
