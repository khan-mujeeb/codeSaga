import axios from "axios";

const getAudio = (inputText, setAudio, setShouldAutoPlay) => {
    const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/audio/text_to_speech",

        headers: {
            authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOWU5MGZiZmEtYWQ0Yy00MDg1LWE5ODctMWU1MzRjN2Q4YTRiIiwidHlwZSI6ImFwaV90b2tlbiJ9.4U97JPe6qQWUs5T_s5Kfp2gPQqRmrVDhEM71Lflewpk",
        },

        data: {
            providers: "openai",
            language: "en",
            text: inputText,
            option: "FEMALE",
            fallback_providers: "",
        },
    };
    try {
        axios
            .request(options)
            .then(function (response) {
                setAudio(response.data.openai.audio_resource_url);
                setShouldAutoPlay(true);

                console.log(response.data.openai.audio_resource_url);
            })
            .catch(function (error) {
                console.error(error);
            });
    } catch (error) {
        console.error(error);
    }
};

export default getAudio;