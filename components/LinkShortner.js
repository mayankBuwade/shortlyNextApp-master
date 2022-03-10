import { useEffect, useState } from "react";
import Div, { Button, Form, Input } from "../styles/styleLinkShortner";

function LinkShortner({ handleOnSubmitSearch }) {
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
      e.preventDefault();
      handleOnSubmitSearch(query);
  };


  return (
    <Div>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="name"
          onChange={(e) => (setQuery(e.target.value))}
          value={query}
          placeholder="Shorten a link here"
        />
        <Button>Shorten It!</Button>
      </Form>
    </Div>
  );
}

export default LinkShortner;
