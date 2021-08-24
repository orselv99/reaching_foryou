export type OpenWeatherMapResponse = {
    base: string;
    clouds: {};
    cod: number;
    coord: {};
    dt: number;
    id: number;
    main: {};
    name: string;
    sys: {};
    timezone: number;
    visibility: number;
    weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
    }[];
}

export const WeatherImage = (state: string) => {
    let result = '';
    switch (state.toLowerCase()) {
        case 'clouds' :
            result = result.concat(
                'https://images.pexels.com/photos/746148/',
                'pexels-photo-746148.png?cs=srgb&dl=pexels-ebeen-746148.jpg&fm=jpg');
            break;
    }

    return result;
}