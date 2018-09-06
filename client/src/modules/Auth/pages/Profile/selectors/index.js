const isRefreshing = state => state.auth.profile.isRefreshing;
const isLoading = state => state.auth.profile.isLoading;
const getLoadingImage = state => state.auth.profile.imageLoader;

export default {
    isRefreshing,
    isLoading,
    getLoadingImage
};