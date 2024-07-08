import React, { useState } from "react";
import "./Faq.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="accordion__item">
    <div className="accordion__title" onClick={onClick}>
      <h3 className="accordion__title-text">{title}</h3>
      <Icon
        className="accordion__icon"
        icon={isOpen ? "ic:round-minus" : "ic:baseline-plus"}
      ></Icon>
    </div>
    {isOpen && <div className="accordion__content">{content}</div>}
  </div>
);

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      title: "¿Esto es real?",
      content:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      title: "¿Esto es real?",
      content:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      title: "¿Esto es real?",
      content:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      title: "¿Esto es real?",
      content:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      title: "¿Esto es real?",
      content:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      title: "¿Esto es real?",
      content:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      {/* <img src="/faq-decoration.png" alt="" className="faq__decoration" /> */}
      <div className="faq__info">
        <h2 className="faq__title">Todo lo que debes saber sobre la </h2>
        <p className="faq__description">
          Encuentra respuestas a todas tus preguntas (y tal vez algunas que
          nunca pensaste hacer) en nuestras FAQs.
        </p>
      </div>
      <div className="faq__menu">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={activeIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
