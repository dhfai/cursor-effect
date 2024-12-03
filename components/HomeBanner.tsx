import styles from '@/styles/module/home.module.scss'
import Link from 'next/link'
import React from 'react'

interface LinkItem {
  title: string;
  url: string;
}
export default function HomeBanner() {
    const links: LinkItem[] = [
      {
        title: 'About',
        url: '/about',
      },
      {
        title: 'Contact',
        url: '/contact',
      },
      {
        title: 'Works',
        url: '/works',
      },
    ];
  
    return (
      <div className={styles.banner}>
        <div className={styles.bannerTitle}>
            <span className={styles.bannerTitleText}>Hi, I'm</span>
            <h1 className={styles.bannerTitleText}>John Doe</h1>
            <span className={styles.bannerTitleText}>A Visual Designer</span>
        </div>
        <ul className={styles.bannerLinks}>
          {links.map((item) => (
            <li key={item.url} className={styles.linkItem}>
              <Link href={item.url} className={styles.link}>
                {item.title.split('').map((char, index) => (
                  <span key={index} className={styles.char}>
                    {char}
                  </span>
                ))}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  