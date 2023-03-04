import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "components/header";
import Footer from "components/footer";
import Hero from "components/hero";
import Layout from "components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />;
}
