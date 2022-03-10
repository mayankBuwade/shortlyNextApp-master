import { useState } from "react";
import useSWR from "swr";
import Cards from "../components/Cards";
import Details from "../components/Details";
import GetStarted from "../components/GetStarted";
import LinkShortner from "../components/LinkShortner";
import ShortLinks from "../components/ShortLinks";
import Venu from "../components/Venue";

function Home() {
  const [query, setQuery] = useState("");
  const [newQuery, setNewQuery] = useState("");
  const [shortLink, setShortLink] = useState('');

  const handleOnSubmitSearch = async (query) => {
    setQuery(query);
    setNewQuery(`https://api.shrtco.de/v2/shorten?url=${query}`);
    const response = await fetch(newQuery, { method: "post" });
    console.log(result);
    const { result } = await response.json();
    const data = await result.short_link;
    console.log(data);
    setShortLink(data);
  };

  return (
    <>
      <Venu />
      <LinkShortner handleOnSubmitSearch={handleOnSubmitSearch} />
      {shortLink ? <ShortLinks query={query} shortLink={shortLink}/> : undefined}
      <Details />
      <Cards />
      <GetStarted />
    </>
  );
}

export default Home;
