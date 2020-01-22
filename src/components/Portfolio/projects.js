import React from "react";

export const projects = [
  {
    id: "1",
    name: "Gym Workout Tracker",
    description: (
      <div>
        <p>
          Keep track of your workout routines and the weights you have lifted with the Gym Workout Tracker
        </p>
      </div>
    ),
    image_name: "gym.png",
    github_link: "https://github.com/Kish-Siva-1/Rails_JS_Gym_Repo",
    link: "https://drive.google.com/open?id=1fkzhGEUDaJvmdTHR-SMcypAHeiqBbGHt",
    stack: ["postgresql", "rails"]
  },
  {
    id: "2",
    name: "Crunchbase News Scraper",
    description:
      "Gather and read the latest tech news from Crunchbase quickly and efficiently from the comfort of your command line",
    image_name: "crunchbasenewsscraper.png",
    github_link: "https://github.com/Kish-Siva-1/crunchbase-news",
    link: "https://drive.google.com/file/d/1LWhRaPLsSSXoQ6g3Bj_jRbkAa4PoPv2K/view?usp=sharing",
    stack: ["ruby"]
  },
  {
    id: "3",
    name: "Portfolio Manager",
    description:
      "Keep track of your portfolio weights and returns with Portfolio Manager.",
    image_name: "portfolio.png",
    github_link: "https://github.com/Kish-Siva-1/portfolio_manager.git",
    link: "https://drive.google.com/file/d/1eIehHgb0BVtuO-FTehV2XvFYUN5E-ftN/view?usp=sharing",
    stack: ["ruby", "sinatra", "sql-lite"]
  },
  {
    id: "4",
    name: "FireSale",
    description:
      "Keep track of your inventory of products and services using FireSale.",
    image_name: "firesale.png",
    github_link: "https://github.com/Kish-Siva-1/firesale-client.git",
    link: "http://firesale-client.herokuapp.com/",
    stack: ["react", "redux", "rails", "postgresql"]
  },
  {
    id: "5",
    name: "Roman Numeral Calculator",
    description: "A calculator for calculating roman numerals.",
    image_name: "romannumeralcalculator.png",
    github_link: "https://github.com/Kish-Siva-1/roman-numeral-calculator",
    link: "https://roman-num-calc-online.firebaseapp.com/",
    stack: ["react", "redux", "jest", "css"]
  },
  {
    id: "6",
    name: "Language Tester",
    description: "Add words along with their translations in the language you’re learning and then use Test Mode to quiz yourself!",
    image_name: "languagetester.png",
    github_link: "https://github.com/Kish-Siva-1/sitejet-client",
    link: "http://sitejet-client.herokuapp.com/",
    stack: ["react", "redux", "css", "rails"]
  }
];