import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsTwitter, BsTiktok, BsTwitch} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-800'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
                <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-black to-zinc-600 rounded-lg text-white'>PIPERUN</span>
                    Blog
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
                <div>
                    <Footer.Title title='About' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                            History
                        </Footer.Link>
                        <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                            Our team
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title='Follow Us' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                            TikTok
                        </Footer.Link>
                        <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                            Instagram
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title='Legal' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                            Terms and conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
            </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href='#' by='afrianodev' year={new Date().getFullYear()} />
            <div className="flex gap-6 mt-4 sm:mt-0 sm:justify-center">
                <Footer.Icon href='#' icon={BsInstagram} />
                <Footer.Icon href='#' icon={BsTiktok} />
                <Footer.Icon href='#' icon={BsFacebook} />
                <Footer.Icon href='#' icon={BsTwitch} />
            </div>
        </div>
      </div>
    </Footer>
  )
}


