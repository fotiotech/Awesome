import React from 'react';
import axios from 'axios';
import {OPENAI_API_KEY} from './key';
import OpenAI from 'openai';

const openai = new OpenAI();

export const FetchOpenai = async ( endpoint: string, setResPonse: () => void) => {
  const options = {
    method: 'POST',
    url: `https://api.openai.com/v1/chat/completions`,
    headers: {
      Authorization: Bearer OPENAI_API_KEY,
    },

    messages: [{role: 'system', content: endpoint}],
    model: 'gpt-3.5-turbo',
  };

  try {
    const completion = await openai.chat.completions.create(options);
    console.log(completion.choices[0]);
    setResPonse(completion.choices[0]);
  } catch (error) {
    console.error(error);
  }
};

FetchOpenai();

// export const FetchData = async (name, endpoint, setResPonse) => {

// const options = {
//   method: 'POST',
//   url: `https://api.openai.com/v1/chat/completions`,
//   headers: {
//     Authorization: Bearer OPENAI_API_KEY,
//   },
// messages: [{role: 'system', content: 'You are a helpful assistant.'}],
//     model: 'gpt-3.5-turbo',
// };

// try {
//   const completion = await openai.chat.completions.create(options);
//    console.log(completion.choices[0]);
//   // setResPonse(completion.choices[0]);
// } catch (error) {
//   console.error(error);
// }

// const options = {
//   method: 'GET',
//   url: `https://moviesdatabase.p.rapidapi.com/titles/${name}/${endpoint}`,
//   headers: {
//     'X-RapidAPI-Key': 'dba71c29a5mshc4b6785b20a5cc1p1588c9jsn3742fb477d7d',
//     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
//   },
// };

// try {
//   const response = await axios.request(options);
//   setResPonse(response.data);
// } catch (error) {
//   console.error(error);
// }

// const encodedParams = new URLSearchParams();
// encodedParams.set('q', 'Hello, world!');
// encodedParams.set('target', 'es');
// encodedParams.set('source', 'en');

// const options = {
//   method: 'POST',
//   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'Accept-Encoding': 'application/gzip',
//     'X-RapidAPI-Key': 'dba71c29a5mshc4b6785b20a5cc1p1588c9jsn3742fb477d7d',
//     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//   },
//   data: encodedParams,
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

//   const options = {
//     method: 'GET',
//     url: `https://movies-api14.p.rapidapi.com/${endpoint}`,
//     headers: {
//       'X-RapidAPI-Key': 'dba71c29a5mshc4b6785b20a5cc1p1588c9jsn3742fb477d7d',
//       'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     setResPonse(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };
