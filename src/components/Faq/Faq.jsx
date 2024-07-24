

import React, { useState } from "react";
import "./Faq.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import faqItems from "../../data/faqInfo";


const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="accordion__item">
    <div className="accordion__title" onClick={onClick}>
      <h3 className={`accordion__title-text ${!isOpen && "close"}`}>{title}</h3>
      <Icon
        className={`accordion__icon ${!isOpen && "close"}`}
        icon={isOpen ? "ic:round-minus" : "ic:baseline-plus"}
      ></Icon>
    </div>
    {isOpen && <div className="accordion__content">{content}</div>}
  </div>
);

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq__info">
        <div className="faq__circle-upper"></div>
        <div className="faq__circle-lower"></div>
        <h2 className="faq__title">Todo lo que debes saber sobre la </h2>
        <p className="faq__description">
          Encuentra respuestas a todas tus preguntas (y tal vez algunas que
          nunca pensaste hacer) en nuestras FAQs.
        </p>
      </div>
      <div className="faq__menu">
        <img src="/faq-paws.png" alt="" className="faq__paws" />
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