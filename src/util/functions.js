export const noop = () => {}

// thanks to this madness: https://gist.github.com/jed/982883
export const uuid = () => ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))

export const camelCaseify = obj =>
	Object.keys(obj).reduce((acc, key) => ({
		...acc,
		[camelCase(key)]: obj[key],
	}), {})

export const camelCase = str => str.replace(/_(\w)/g, ([_, c]) => c.toUpperCase())