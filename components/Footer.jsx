import React from "react";
import SocialButton from './SocialButton';
import SocialButtonRow from "./SocialButtonRow";

export default function Footer() {
  return (
    <footer className="grid grid-cols-3">
      <p className="text-[14pt]">I made this website from scratch :)</p>
      <SocialButtonRow/>
      <p className="text-[14pt] justify-self-end">© Alex Kalinins 2021</p>
    </footer>
  );
}