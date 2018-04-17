export const scan = (...args) => ins => ins.fold(...args).drop(1)

export const toObj = (...props) => ins => {
	const builderFromProp = prop => val =>
		prop instanceof Function ? prop(val) : {[prop]: val}

	return ins.map(vals =>
		props
			.map(builderFromProp)
			.reduce((obj, builder, i) => ({...obj, ...builder(vals[i])}), {}))
}

export const toObjBase = (...props) => toObj(base => base, ...props)