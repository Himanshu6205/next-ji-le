"use client";

import { useEffect } from "react";

const Randomjokes = () => {
  const Url = "https://official-joke-api.appspot.com/random_joke";

  const fetchjokes = async () => {
    const res = await fetch(Url);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchjokes();
  }, []);

  return (
    <div>
      <h1>Random Jokes</h1>
    </div>
  );
};

export default Randomjokes;
