'use server';

import { _ENTITES } from "~/constants/entity.const";
import { _GLOBAL } from "~/constants/global.const";
import { TResponse } from "~/types/api.type";
import fetchAPI from "~/utils/helpers/fetching.helper";

const token = _GLOBAL.TOKEN;

const getVendorList = async () => {
    if (!token) throw new Error('Please login admin.goldengatex to get new token');
    const path: string = _ENTITES.VENDOR_LIST;
    const options = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response: TResponse = await fetchAPI(path, options);
    return response;
}

export {
    getVendorList
}