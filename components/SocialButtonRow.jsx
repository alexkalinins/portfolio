import React from 'react'
import SocialButton from './SocialButton'

export default function SocialButtonRow() {
    return (
    <div className="flex flex-row flex-nowrap justify-evenly items-center align-center ">
        <SocialButton url="https://github.com/alexkalinins" title="GitHub"/>
        <SocialButton url="https://www.linkedin.com/in/alex-kalinins/"title="LinkedIn"/>
        <SocialButton url="https://alexkalinins.medium.com"title="Medium"/>
        <SocialButton url="mailto:alex.kalinins@mail.utoronto.ca"title="Email"/>
      </div>
    )
}
