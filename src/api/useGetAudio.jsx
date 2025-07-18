import { useState } from "react";
import axios from "axios";

const useGetAudio = () => {
    const [audioResult, setResult] = useState(null);
    const [audioLoading, setLoading] = useState(false);
    const [audioError, setError] = useState(null);

    const getAudio = (inputText) => {
        setLoading(true);

        const options = {
            method: "POST",
            mode: 'cors',
            url: "https://api.edenai.run/v2/audio/text_to_speech",
            headers: {
             
            },
            data: JSON.stringify({
                providers: "openai",
                language: "en",
                text: inputText,
                option: "FEMALE",
                fallback_providers: "openai"
            }),
        };

        axios
            .request(options)
            .then(function (response) {
                setResult(response.data.openai.audio_resource_url);
                setLoading(false);
            })
            .catch(function (error) {
                setError(error);
                setLoading(false);
            });
    };

    return { audioResult, audioLoading, audioError, getAudio };
};

export default useGetAudio;
