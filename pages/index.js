import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

//NextUI
import { Button } from '@nextui-org/react';
import Header from '../components/Header/Header';
import ProjectsList from '../components/Projects/ProjectsList';

export default function Home() {
  return (
    <>
      <Header />
      <ProjectsList />
    </>
  );
}
