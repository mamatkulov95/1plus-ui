import { useState } from "react";

import BtnElement from "../BtnElement/BtnElement";

import cardImg from "/src/assets/main-card-img.svg";
import subImg from "/src/assets/sub-card-img.svg";
import starImg from "/src/assets/star-sign.svg";
import leftArrow from "/src/assets/left-arrow.svg";
import rightArrow from "/src/assets/right-arrow.svg";

export default function Hero() {
  const numberOfCards = 90;
  const cardsPerPage = 18;

  const [currentPage, setCurrentPage] = useState(1);

  const pages = [];

  for (let i = 0; i < Math.ceil(numberOfCards / cardsPerPage); i++) {
    const page = [];
    for (
      let j = i * cardsPerPage + 1;
      j <= Math.min((i + 1) * cardsPerPage, numberOfCards);
      j++
    ) {
      const card = {
        id: j,
        cardImg: cardImg,
        cardTitle: "Без слов"
      };
      page.push(card);
    }
    pages.push(page);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="hero-grid-container ">
      {pages[currentPage - 1].map((card) => (
        <div
          key={card.id}
          className="d-flex flex-column gap-[10px] p-1 hero-container"
        >
          <img src={card.cardImg} alt="card-img" />
          <p className="fs-[14px] fw-semibold">{card.cardTitle}</p>

          <div className="d-flex gap-1 align-items-start">
            <img src={subImg} alt="sub-img" />

            <div className="d-flex flex-column">
              <p className="user m-0">Настя Ивлеева Вячеславовна</p>
              <div className="d-flex align-items-center gap-2">
                <p className="checked m-0">проверено</p>
                <img className="w-[14px]" src={starImg} alt="star-img" />
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between pt-2">
            <p className="m-0 user">Редкость:</p>
            <BtnElement
              text="уникальная"
              width=""
              background=""
              paddingTop=""
              paddingRight="13px"
              paddingBottom=""
              paddingLeft="13px"
              borderRadius="7px"
              border="1px solid #FFC107"
              fontSize="12px"
            />
          </div>

          <div className="d-flex align-items-center justify-content-between pt-2 pb-2">
            <p className="m-0 user">Цена:</p>
            <BtnElement
              text="от 500 ₽"
              width=""
              background="#FDD446"
              paddingTop="2px"
              paddingRight="15px"
              paddingBottom="2px"
              paddingLeft="15px"
              borderRadius="7px"
              border=""
              fontSize="12px"
            />
          </div>

          <BtnElement
            text="Купить"
            width=""
            background="linear-gradient(90deg, #FDD446 0%, #F69B47 100%)"
            paddingTop="2px"
            paddingRight="64px"
            paddingBottom="5px"
            paddingLeft="64px"
            borderRadius="15px"
            border=""
            fontSize="16px"
          />
        </div>
      ))}

      <div className="pagination">
        <img className="arrow-img" src={leftArrow} alt="left-arrow" />
        {Array.from({ length: pages.length }, (_, i) => (
          <div
            key={i + 1}
            className={`page-btn ${i + 1 === currentPage ? "active" : ""}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </div>
        ))}
        <img className="arrow-img" src={rightArrow} alt="right-arrow" />
      </div>
    </div>
  );
}
