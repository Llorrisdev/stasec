"use client";
import React from "react";
import "./features.css";
import CyberSecurity from "../icons/cyber-security";
import CyberEye from "../icons/cyber-eye";
import Backup from "../icons/backup";
import SearchCode from "../icons/search-code";
import Bug from "../icons/bug";
import FileText from "../icons/file-text";
import Code from "../icons/code";
import Repeat from "../icons/repeat";
import Siren from "../icons/siren";
import ShieldCheck from "../icons/shield-check";
import BadgeCheck from "../icons/badge-check";
import BarChart from "../icons/bar-chart";
import Cards from "../cards/cards";
import RightDash from "../icons/right-dash";
import Microscope from "../icons/microscope";
import CheckCircle from "../icons/check-circle";
import InfinityIcon from "../icons/infinity";
import Database from "../icons/database";
import Sword from "../icons/sword";
import BookCheck from "../icons/book-check";
import BookText from "../icons/book-text";
import EnvironmentIcon from "../icons/environment";
import Customize from "../icons/customize";

const iconMappings = {
  cyberSecurity: CyberSecurity,
  cyberEye: CyberEye,
  backup: Backup,
  searchCode: SearchCode,
  bug: Bug,
  fileText: FileText,
  code: Code,
  repeat: Repeat,
  siren: Siren,
  shieldCheck: ShieldCheck,
  badgeCheck: BadgeCheck,
  barChart: BarChart,
  microscope: Microscope,
  checkCircle: CheckCircle,
  infinity: InfinityIcon,
  database: Database,
  sword: Sword,
  bookCheck: BookCheck,
  bookText: BookText,
  environment: EnvironmentIcon,
  customize: Customize,
};

const Features = ({
  cardType,
  blueCondition,
  blueText,
  title,
  content,
  cards,
}) => {
  return (
    <>
      {cardType == 1 ? (
        <section className="flex flex-col pb-12 px-[118px] space-y-12">
          <div className="flex flex-col items-center space-y-4">
            {blueCondition && (
              <div className="text-[24px] text-[#1A57FF]">{blueText}</div>
            )}
            <div className="title-text">{title}</div>
            <div className="text-[18px]">{content}</div>
          </div>
          <div className="w-full flex flex-wrap gap-12 justify-center">
            {cards.map((card, index) => {
              return (
                <Cards
                  key={index}
                  card={card}
                  cardIcon={card.cardIcon}
                  cardType={cardType}
                />
              );
            })}
          </div>
        </section>
      ) : cardType == 2 ? (
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-4 w-[800px] text-center">
            <div className="text-[24px] text-[#1A57FF]">{blueText}</div>
            <div className="title-text">{title}</div>
            <div className="text-[18px]">{content}</div>
          </div>
          <div className="flex w-full gap-12 pt-[70px] flex-1 justify-between">
            {cards.map((card, index) => {
              const CardIcon = iconMappings[card.cardIcon];
              return (
                <div key={index}>
                  <div className="card-container">
                    <div className="card flex flex-col p-[24px] space-y-[10px] ">
                      <div className="white-circle w-fit">
                        <CardIcon width={48} height={48} color={"#1A57FF"} />
                      </div>
                      <div className="text-[24px] font-semibold">
                        {card.cardTitle}
                      </div>
                      <div className="text-[16px]">{card.cardContent}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : cardType == 3 ? (
        <section className="flex flex-col pb-12 px-[118px] space-y-12 w-full">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-[24px] text-[#1A57FF]">{blueText}</div>
            <div className="title-text">{title}</div>
          </div>
          <div className="w-full flex gap-6 justify-center">
            {cards.map((card, index) => {
              console.log(index);
              return (
                <div key={index} className="flex items-center">
                  <Cards
                    key={index}
                    card={card}
                    cardIcon={card.cardIcon}
                    cardType={cardType}
                  />
                  {index + 1 != cards.length && (
                    <div className="pl-[24px]">
                      <RightDash width={48} height={48} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Features;
