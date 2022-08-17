export const navigateTo = (url,options = {}) => {
	uni.navigateTo({
		url: url,
		...options
	});
}

export const navigateBack=(url,options={})=>{
	uni.navigateBack({
		url:url,
		...options
	})
}

export const switchTab = (url, options = {}) => {
	uni.switchTab({
		url: url,
		...options
	})
}