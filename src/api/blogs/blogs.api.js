import { backendUrl } from "../../backendUrl";
import axios from "axios";
import { getDeviceToken } from "../../utils/deviceToken";

export const blogsList = async () => {
    try {
        const response = await axios.get(`${backendUrl}/api/v1/website/blogs`);
        return response.data;

    } catch (error) {
        console.error("Error fetching blogs:", error);
        return { error: "Failed to fetch blogs", details: error.message };
    }
}

export const getBlogBySlug = async (slug) => {
    try {
        const deviceToken = getDeviceToken();
        const response = await axios.get(
            `${backendUrl}/api/v1/website/blogs/slug/${slug}`,
            {
                headers: {
                    'x-device-token': deviceToken
                }
            }
        );
        return response.data;

    } catch (error) {
        console.error("Error fetching blog:", error);
        return { error: "Failed to fetch blog", details: error.message };
    }
}

export const getRelatedBlogs = async (slug, limit = 3) => {
    try {
        const response = await axios.get(
            `${backendUrl}/api/v1/website/blogs/related/${slug}?limit=${limit}`
        );
        return response.data;

    } catch (error) {
        console.error("Error fetching related blogs:", error);
        return { error: "Failed to fetch related blogs", details: error.message };
    }
}

export const getCategoriesList = async () => {
    try {
        const response = await axios.get(`${backendUrl}/api/v1/website/categories`);
        return response.data;

    } catch (error) {
        console.error("Error fetching categories:", error);
        return { error: "Failed to fetch categories", details: error.message };
    }
}