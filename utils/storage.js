class Storage {

	static set(key, value) {
		if (typeof value === 'object') {
			value = JSON.stringify(value)
		}
		uni.setStorageSync(key, value)
	}

	static get(key) {
		const data = uni.getStorageSync(key) || ""
		try {
			return JSON.parse(data)
		} catch (error) {
			return data
		}
	}

	static remove(key) {
		uni.removeStorageSync(key)
	}

	static removeAll() {
		uni.clearStorageSync()
	}
}

export default Storage
