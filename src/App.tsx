import React from "react";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router";
import Character from "./pages/Character/Character";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.scss";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Character />} />
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </div>
    </RecoilRoot>
  );
}

export default App;
