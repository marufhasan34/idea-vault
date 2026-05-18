"use client";
import React from "react";
import { Link } from "@heroui/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#2D2D44] text-white py-16 border-t border-divider">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <h3 className='font-bold text-[#6C63FF] text-2xl'>
                  Idea<span className='text-white'>Vault</span>
                </h3>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              The ultimate hub for startup pioneers. Share innovative concepts, gather community validation, and refine tomorrows big ideas today.
            </p>
            
            <div className="flex gap-3 mt-2">
              <Link href="https://x.com" isExternal className="no-underline! p-2.5 rounded-xl bg-default-100 text-white hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="https://facebook.com" isExternal className="no-underline! p-2.5 rounded-xl bg-default-100 text-white hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </Link>
              <Link href="https://linkedin.com" isExternal className="no-underline! p-2.5 rounded-xl bg-default-100 text-white hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#6C63FF]">Platform</h3>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="no-underline! text-white hover:text-primary text-sm transition-colors duration-200">Home</Link>
              <Link href="/ideas" className="no-underline! text-white hover:text-primary text-sm transition-colors duration-200">Explore Ideas</Link>
              <Link href="/trends" className="no-underline! text-white hover:text-primary text-sm transition-colors duration-200">Trending Concepts</Link>
              <Link href="/community" className="no-underline! text-white hover:text-primary text-sm transition-colors duration-200">Discussions</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase text-[#6C63FF]">Categories</h3>
            <div className="flex flex-col gap-2.5">
              <Link href="/ideas?category=tech" className="no-underline! text-white hover:text-primary text-sm transition-colors duration-200">Technology & SaaS</Link>
              <Link href="/ideas?category=ai" className="no-underline! text-white hover:text-primary text-sm transition-colors duration-200">Artificial Intelligence</Link>
              <Link href="/ideas?category=health" className="no-underline! text-white hover:text-primary text-sm transition-colors duration-200">Healthcare & Medical</Link>
              <Link href="/ideas?category=education" className="no-underline! text-white hover:text-primary text-sm transition-colors duration-200">EdTech & Learning</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#6C63FF]">Contact & Support</h3>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <div className="flex items-center gap-3 group">
                <div className="p-1.5 rounded-lg bg-default-100 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="group-hover:text-white transition-colors">support@ideavault.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-1.5 rounded-lg bg-default-100 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="group-hover:text-white transition-colors">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60 border-t border-white/10">
          <p>&copy; {currentYear} IdeaVault. Empowering innovators worldwide.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="no-underline! text-xs text-white/60 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-white/60 hover:text-primary transition-colors no-underline!">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}