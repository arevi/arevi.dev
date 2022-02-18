import type { NextPage } from "next";
import Head from "next/head";
import InfoTile from "../components/InfoTile/InfoTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Home: NextPage = () => {
  return (
    <div
      id="home-page-container"
      className="flex h-full w-full flex-1 flex-col items-center px-4"
    >
      <Head>
        <title>Armin Dizdarevic | Software Engineer</title>
        <meta
          name="description"
          content="Full stack software engineer based out of central New York"
        />

        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/images/favicon.svg"
        />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
      </Head>
      <section id="cta" className="my-12 flex flex-col items-center">
        <h1 className="w-80 text-center text-6xl font-bold md:w-full">
          Welcome to a
        </h1>
        <h1
          className="bg-gradient-to-r  from-purple-400 to-pink-600 bg-clip-text text-center text-6xl font-bold text-transparent "
          title="At least I think so"
        >
          Pretty cool site
        </h1>
        <h3
          className="mt-4 w-[20rem] text-center text-xl text-gray-500"
          title="Or is it?"
        >
          Don&apos;t let the fancy gradient fool you, this isn&apos;t a startup
          landing page. Just me.
        </h3>
      </section>
      <section>
        <h3 className="mb-3 text-center font-bold text-gray-800">
          At a glance
        </h3>
        <div
          id="info-tiles-container"
          className="flex flex-wrap justify-center gap-4"
        >
          <InfoTile
            emoji={"👋🏼"}
            header={"I am"}
            subheading={"Armin Dizdarevic"}
            title={"Prounced 'Ar-min'"}
          />
          <InfoTile
            emoji={"🏠"}
            header={"Located in"}
            subheading={"Central New York"}
            title={"Bring a snow shovel"}
          />
          <InfoTile
            emoji={"🏢"}
            header={"Currently a"}
            subheading={"Lead Engineer @ Booz Allen Hamilton"}
            title={"The coffees pretty good"}
          />
          <InfoTile
            emoji={"🏫"}
            header={"Studied at"}
            subheading={"SUNY Polytechnic"}
            title={"10/10 would recommend"}
          />
          <InfoTile
            emoji={"🧐"}
            header={"Focused on"}
            subheading={"Fullstack TypeScript"}
            title={"And JavaScript if that's your thing"}
          />
          <InfoTile
            emoji={"🔗"}
            header={"Connect on"}
            subheading={
              <ul className="flex gap-1">
                <li>
                  <a
                    href="https://www.linkedin.com/in/armin-dizdarevic/"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn profile"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className=" h-5 w-5 text-blue-600"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/arevi/"
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub profile"
                  >
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      className=" h-5 w-5 text-black"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/_arevi"
                    target="_blank"
                    rel="noreferrer"
                    title="Twitter profile"
                  >
                    <FontAwesomeIcon
                      icon={faTwitterSquare}
                      className=" h-5 w-5 text-blue-300"
                    />
                  </a>
                </li>
              </ul>
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
