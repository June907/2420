import axios from "./LoginPage/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default async function GlobalAPI(isGet, url, data) {
    const token_url = "/users/token/refresh";
    let r;
    if (isGet === false) {
        await axios.post(url, data, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        })
            .then(res => {
                console.log(res);
                // (async () => {
                //     if (res.status === 401) {
                //         await axios.get(token_url)
                //             .then(respond => {
                //                 console.log('HEY! ' + respond.status)
                //                 if (respond.status === 401) {
                //                     console.log('Need to login again.');
                //                     return res;
                //                 };
                //             })
                //     }
                // })();
                r = res;
                return res;
            })
            .catch(async function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log("Path 1");
                    if (401 === error.response.status) {
                        const fetch = async () => {
                            let re;
                            await axios.post(url, data, {
                                headers: { 'Content-Type': 'application/json' },
                                withCredentials: true
                            })
                                .then(res => {
                                    re = res;
                                    console.log('HIYA');
                                    return re;
                                });
                            console.log('ended');
                            return re;
                        }
                        let temp = await fetch();
                        if (temp != null) {
                            r = temp;
                        }
                        return r;
                    }
                    else {
                        r = error.response;
                    }
                }
            });
        console.log(url);
        console.log('HEY');
        console.log(r);
        return r;
    }
    else {
        await axios.get(url, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        })
            .then(res => {
                console.log(res);
                // console.log('HI! ' + res.status);
                // (async () => {
                //     if (res.status === 401) {
                //         await axios.get(token_url)
                //             .then(respond => {
                //                 console.log('HEY! ' + respond.status)
                //                 if (respond.status === 401) {
                //                     console.log('Need to login again.');
                //                     return res;
                //                 };
                //             })
                //     }
                // })();
                r = res;
                return res;
            })
            .catch(async function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log("Path 1");
                    if (401 === error.response.status) {
                        const fetch = async () => {
                            let re;
                            await axios.get(url, {
                                headers: { 'Content-Type': 'application/json' },
                                withCredentials: true
                            })
                                .then(res => {
                                    re = res;
                                    return re;
                                });
                            console.log('ended');
                            return re;
                        }
                        let temp = await fetch();
                        if (temp != null) {
                            return temp;
                        }
                        return r;
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log("Path 2");
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        console.log(url);
        console.log('HEY');
        console.log(r);
        return r;
    }
}