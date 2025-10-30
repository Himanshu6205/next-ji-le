"use client";

import React from "react";

const TestApi = () => {
  const handleSubmit = async () => {
    let data = {
      name: "himanshu",
      job: "developer",
    };

    try {
      let response = await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let res = await response.json();
      console.log(res);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>This page is to test API response</h1>
      <button onClick={handleSubmit}>Test</button>
    </div>
  );
};

export default TestApi;
