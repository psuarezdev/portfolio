import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from './ui/separator';

const CERTS = [
  {
    title: "Master en React - MERN STACK",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-f75910f3-d6ff-4c03-b4b5-0560abaef75f.jpg",
    link: "https://www.udemy.com/certificate/UC-f75910f3-d6ff-4c03-b4b5-0560abaef75f/",
    duration: 38
  },
  {
    title: "Angula de cero a experto",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-335f5741-d131-4137-9d48-4cb78b493651.jpg",
    link: "https://www.udemy.com/certificate/UC-335f5741-d131-4137-9d48-4cb78b493651/",
    duration: 45
  },
  {
    title: "Spring Framework 6 & Spring Boot 3 desde cero a experto",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-b1a56767-4754-4d6e-9620-e627d94d5089.jpg",
    link: "https://www.udemy.com/certificate/UC-b1a56767-4754-4d6e-9620-e627d94d5089/",
    duration: 81
  },
  {
    title: "Flutter de cero a experto",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-354711c1-1ffe-4666-b351-bc2b9162f820.jpg",
    link: "https://www.udemy.com/certificate/UC-354711c1-1ffe-4666-b351-bc2b9162f820/",
    duration: 50.5
  },
  {
    title: "React Native - Aplicaciones nativas para IOS y Android",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-84774d44-abed-4961-8894-2ccc1fbe434c.jpg",
    link: "https://www.udemy.com/certificate/UC-84774d44-abed-4961-8894-2ccc1fbe434c/",
    duration: 33
  },
  {
    title: "Master en PHP, SQL, POO, MVC, Laravel, Symfony y WordPress",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-df589da4-da8b-47ed-87af-880f88d8be57.jpg",
    link: "https://www.udemy.com/certificate/UC-df589da4-da8b-47ed-87af-880f88d8be57/",
    duration: 56.5
  },
];

const Certificate = () => (
  <svg
    className="size-7"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
    <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
    <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
    <path d="M6 9l12 0"></path>
    <path d="M6 12l3 0"></path>
    <path d="M6 15l2 0"></path>
  </svg>
);

export default function Certificates() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          <h3 className="flex items-center gap-1.5 text-xl font-bold text-yellow-400">
            <Certificate /> Certificaciones
          </h3>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-screen overflow-y-scroll md:overflow-auto" >
        <DialogHeader>
          <DialogTitle className="mb-5">
            <span className="flex items-center gap-1.5 text-xl font-bold mb-2">
              <Certificate /> Certificados
            </span>
            <Separator />
          </DialogTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CERTS.map((cert, index) => (
              <article key={`cert-${index}`} className="transition duration-500 transform hover:scale-105">
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="rounded-lg w-full opacity-90 border border-gray-500 dark:border-gray-400"
                    src={cert.image}
                    alt={cert.title}
                  />
                </a>
                <span className="inline-block p-0 mt-1.5 text-sm text-gray-600/80 dark:text-white/80">
                  Duración: {cert.duration} horas en total
                </span>
              </article>
            ))}
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
