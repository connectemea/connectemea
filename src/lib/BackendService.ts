import axios, { AxiosRequestHeaders } from "axios";
import { PromiseFunction } from "./types";
import { backendUrl } from "../const";

const get: PromiseFunction = async (path, headers = {}, params = {}) => {
    const url = `${backendUrl.airtableBaseUrl}${path}`;
    const response = await axios.get(url, _generateParams(headers, params));

    return response.data;
};

const post: PromiseFunction = async (path, data = {}, headers = {}, params = {}) => {
    const url = `${backendUrl.airtableBaseUrl}${path}`;
    const response = await axios.post(
        url,
        data,
        _generateParams(headers, params)
    );

    return response.data;
};

const patch: PromiseFunction = async (path, data = {}, headers = {}, params = {}) => {
    const url = `${backendUrl.airtableBaseUrl}${path}`;
    const response = await axios.patch(
        url,
        data,
        _generateParams(headers, params)
    );

    return response.data.data;
};

const destroy: PromiseFunction = async (path, headers = {}, params = {}) => {
    const url = `${backendUrl.airtableBaseUrl}${path}`;
    const response = await axios.delete(url, _generateParams(headers, params));

    return response.data;
};


const _generateParams = (headers = {}, params = {}) => {
    const localHeader = {
        Authorization: `Bearer ${backendUrl.secretKey}`,
        ...headers,
    } as AxiosRequestHeaders;
    return {
        headers: localHeader,
        params,
    };
};

const BackendService = {
    get,
    post,
    patch,
    destroy,
};

export default BackendService;