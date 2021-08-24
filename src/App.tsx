import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Landing, Write } from './page'
import { OpenWeatherMapResponse, WeatherImage } from './type/App';

const URL_WEATHER = ''.concat(
  'http://',
  'api.openweathermap.org/data/2.5/',
  'weather?q=Seoul,kr',
  '&appid=40989e649859a9beacd619b0fc4f390b&units=metric',
  '&lang=kr'
);

type BackgroundInfo = { imgURL: string };

const Container = styled.div`
  ${(props: BackgroundInfo) =>
    props.imgURL.length > 0 ? `background-img: ${props.imgURL};` : ``}
`;


// https://blog.songc.io/react/react-hook/
const App = () => {
  const [data, setData] = useState<OpenWeatherMapResponse>();
  const [image, setImage] = useState('');

  useEffect(() => {
    // 날씨 상태를 가져옴
    axios.get<OpenWeatherMapResponse>(URL_WEATHER)
    .then((response) => {
      //console.log(response.data);
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

    if (data?.weather[0].main) {
      //console.log(WeatherImage(data.weather[0].main));
      setImage(WeatherImage(data.weather[0].main));
      console.log(image);
    }
  }, []);

  return (
    <Container imgURL={image}>
      <Write />
    </Container>
  );
}

export default App;
