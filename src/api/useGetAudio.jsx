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
